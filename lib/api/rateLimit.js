const buckets = new Map();

function cleanupBuckets(now) {
  for (const [key, value] of buckets.entries()) {
    if (now > value.resetAt) {
      buckets.delete(key);
    }
  }
}

export function checkRateLimit({ key, limit, windowMs }) {
  const now = Date.now();
  cleanupBuckets(now);

  const existing = buckets.get(key);

  if (!existing || now > existing.resetAt) {
    buckets.set(key, {
      count: 1,
      resetAt: now + windowMs,
    });

    return {
      allowed: true,
      remaining: limit - 1,
      retryAfterMs: windowMs,
    };
  }

  if (existing.count >= limit) {
    return {
      allowed: false,
      remaining: 0,
      retryAfterMs: Math.max(0, existing.resetAt - now),
    };
  }

  existing.count += 1;

  return {
    allowed: true,
    remaining: Math.max(0, limit - existing.count),
    retryAfterMs: Math.max(0, existing.resetAt - now),
  };
}
