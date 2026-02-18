import { apiError, apiSuccess } from "@/lib/api/contracts";
import { checkRateLimit } from "@/lib/api/rateLimit";
import { getClientIp } from "@/lib/api/clientIp";
import { sendContactSubmissionEmail } from "@/lib/api/mailer";
import { contactFormSchema, getFieldErrors } from "@/lib/validation/forms";

const CONTACT_LIMIT = 5;
const CONTACT_WINDOW_MS = 10 * 60 * 1000;

export const runtime = "nodejs";

export async function POST(request) {
  const contentType = request.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    return apiError(
      {
        code: "UNSUPPORTED_MEDIA_TYPE",
        message: "Only JSON payloads are accepted.",
      },
      415
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return apiError(
      {
        code: "INVALID_JSON",
        message: "Invalid JSON payload.",
      },
      400
    );
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return apiError(
      {
        code: "VALIDATION_ERROR",
        message: "Please fix the highlighted fields.",
        fieldErrors: getFieldErrors(parsed.error),
      },
      400
    );
  }

  const { honeypot, ...submission } = parsed.data;

  if (honeypot) {
    return apiSuccess({ message: "Request received." }, 202);
  }

  const ip = getClientIp(request);
  const rateLimit = checkRateLimit({
    key: `contact:${ip}`,
    limit: CONTACT_LIMIT,
    windowMs: CONTACT_WINDOW_MS,
  });

  if (!rateLimit.allowed) {
    return apiError(
      {
        code: "RATE_LIMITED",
        message: "Too many requests. Please try again in a few minutes.",
      },
      429
    );
  }

  const receivedAt = new Date().toISOString();
  const allowLocalFallback =
    process.env.NODE_ENV !== "production" &&
    process.env.ALLOW_FORM_FALLBACK !== "false";

  try {
    await sendContactSubmissionEmail({
      ...submission,
      receivedAt,
    });
    return apiSuccess(
      {
        message: "Thank you. We received your message and will contact you shortly.",
      },
      201
    );
  } catch (error) {
    if (error?.code === "SMTP_CONFIG_MISSING" && allowLocalFallback) {
      console.info("[contact] SMTP config missing, using local fallback", {
        ...submission,
        receivedAt,
      });

      return apiSuccess(
        {
          message: "Thank you. We received your message and will contact you shortly.",
        },
        201
      );
    }

    if (error?.code === "SMTP_CONFIG_MISSING") {
      return apiError(
        {
          code: "SERVICE_UNAVAILABLE",
          message: "Contact service is temporarily unavailable.",
        },
        503
      );
    }
    console.error("[contact] SMTP send failed", error);

    return apiError(
      {
        code: "UPSTREAM_ERROR",
        message: "We could not deliver your message right now. Please try again.",
      },
      502
    );
  }
}
