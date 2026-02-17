import { apiError, apiSuccess } from "@/lib/api/contracts";
import { checkRateLimit } from "@/lib/api/rateLimit";
import { getClientIp } from "@/lib/api/clientIp";
import {
  getFieldErrors,
  newsletterFormSchema,
} from "@/lib/validation/forms";

const NEWSLETTER_LIMIT = 12;
const NEWSLETTER_WINDOW_MS = 10 * 60 * 1000;
const DUPLICATE_WINDOW_MS = 24 * 60 * 60 * 1000;
const recentSubscriptions = new Map();

function cleanupDuplicates(now) {
  for (const [email, expiresAt] of recentSubscriptions.entries()) {
    if (now > expiresAt) {
      recentSubscriptions.delete(email);
    }
  }
}

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

  const payload = {
    type: "newsletter_subscription",
    receivedAt: new Date().toISOString(),
    source: "pilotai-web",
    email,
  };

  const webhookUrl = process.env.NEWSLETTER_WEBHOOK_URL;
  const allowLocalFallback =
    process.env.NODE_ENV !== "production" &&
    process.env.ALLOW_FORM_FALLBACK !== "false";

  try {
    if (webhookUrl) {
      await sendToWebhook(webhookUrl, payload);
    } else if (allowLocalFallback) {
      console.info(
        "[newsletter] webhook is not set, using local fallback",
        payload
      );
    } else {
      return apiError(
        {
          code: "SERVICE_UNAVAILABLE",
          message: "Newsletter service is temporarily unavailable.",
        },
        503
      );
    }

    recentSubscriptions.set(email, now + DUPLICATE_WINDOW_MS);

    return apiSuccess(
      {
        message: "Subscribed successfully. Thank you.",
      },
      201
    );
  } catch (error) {
    console.error("[newsletter] subscribe failed", error);

    return apiError(
      {
        code: "UPSTREAM_ERROR",
        message: "We could not complete your subscription right now.",
      },
      502
    );
  }
}
