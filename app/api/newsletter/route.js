import { apiError, apiSuccess } from "@/lib/api/contracts";
import { checkRateLimit } from "@/lib/api/rateLimit";
import { getClientIp } from "@/lib/api/clientIp";
import { sendNewsletterSubscriberEmail } from "@/lib/api/mailer";
import {
  getFieldErrors,
  newsletterFormSchema,
} from "@/lib/validation/forms";

const NEWSLETTER_LIMIT = 12;
const NEWSLETTER_WINDOW_MS = 10 * 60 * 1000;
const DUPLICATE_WINDOW_MS = 24 * 60 * 60 * 1000;
const recentSubscriptions = new Map();

export const runtime = "nodejs";

function cleanupDuplicates(now) {
  for (const [email, expiresAt] of recentSubscriptions.entries()) {
    if (now > expiresAt) {
      recentSubscriptions.delete(email);
    }
  }
}

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

  const parsed = newsletterFormSchema.safeParse(body);
  if (!parsed.success) {
    return apiError(
      {
        code: "VALIDATION_ERROR",
        message: "Please enter a valid email address.",
        fieldErrors: getFieldErrors(parsed.error),
      },
      400
    );
  }

  const { honeypot, email } = parsed.data;

  if (honeypot) {
    return apiSuccess({ message: "Request received." }, 202);
  }

  const ip = getClientIp(request);
  const rateLimit = checkRateLimit({
    key: `newsletter:${ip}`,
    limit: NEWSLETTER_LIMIT,
    windowMs: NEWSLETTER_WINDOW_MS,
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

  const now = Date.now();
  cleanupDuplicates(now);

  if (recentSubscriptions.has(email)) {
    return apiError(
      {
        code: "DUPLICATE",
        message: "This email is already subscribed.",
      },
      409
    );
  }

  const receivedAt = new Date().toISOString();
  const allowLocalFallback =
    process.env.NODE_ENV !== "production" &&
    process.env.ALLOW_FORM_FALLBACK !== "false";

  try {
    await sendNewsletterSubscriberEmail({
      email,
      receivedAt,
    });
    recentSubscriptions.set(email, now + DUPLICATE_WINDOW_MS);

    return apiSuccess(
      {
        message: "Subscribed successfully. Thank you.",
      },
      201
    );
  } catch (error) {
    if (error?.code === "SMTP_CONFIG_MISSING" && allowLocalFallback) {
      console.info(
        "[newsletter] SMTP config missing, using local fallback",
        { email, receivedAt }
      );

      recentSubscriptions.set(email, now + DUPLICATE_WINDOW_MS);

      return apiSuccess(
        {
          message: "Subscribed successfully. Thank you.",
        },
        201
      );
    }

    if (error?.code === "SMTP_CONFIG_MISSING") {
      return apiError(
        {
          code: "SERVICE_UNAVAILABLE",
          message: "Newsletter service is temporarily unavailable.",
        },
        503
      );
    }
    console.error("[newsletter] SMTP send failed", error);

    return apiError(
      {
        code: "UPSTREAM_ERROR",
        message: "We could not complete your subscription right now.",
      },
      502
    );
  }
}
