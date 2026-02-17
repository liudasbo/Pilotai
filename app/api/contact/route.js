import { apiError, apiSuccess } from "@/lib/api/contracts";
import { checkRateLimit } from "@/lib/api/rateLimit";
import { getClientIp } from "@/lib/api/clientIp";
import { contactFormSchema, getFieldErrors } from "@/lib/validation/forms";

const CONTACT_LIMIT = 5;
const CONTACT_WINDOW_MS = 10 * 60 * 1000;

async function sendToWebhook(webhookUrl, payload) {
  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
    signal: AbortSignal.timeout(8000),
  });

  if (!response.ok) {
    throw new Error(`Webhook returned ${response.status}`);
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

  const payload = {
    type: "contact_submission",
    receivedAt: new Date().toISOString(),
    source: "pilotai-web",
    ...submission,
  };

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  const allowLocalFallback =
    process.env.NODE_ENV !== "production" &&
    process.env.ALLOW_FORM_FALLBACK !== "false";

  try {
    if (webhookUrl) {
      await sendToWebhook(webhookUrl, payload);
    } else if (allowLocalFallback) {
      console.info("[contact] webhook is not set, using local fallback", payload);
    } else {
      return apiError(
        {
          code: "SERVICE_UNAVAILABLE",
          message: "Contact service is temporarily unavailable.",
        },
        503
      );
    }

    return apiSuccess(
      {
        message: "Thank you. We received your message and will contact you shortly.",
      },
      201
    );
  } catch (error) {
    console.error("[contact] submit failed", error);

    return apiError(
      {
        code: "UPSTREAM_ERROR",
        message: "We could not deliver your message right now. Please try again.",
      },
      502
    );
  }
}
