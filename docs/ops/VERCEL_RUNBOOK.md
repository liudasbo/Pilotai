# Vercel Launch Runbook

## 1. Required Environment Variables
Configure in Vercel Project Settings:

- `CONTACT_WEBHOOK_URL` (required for production)
- `NEWSLETTER_WEBHOOK_URL` (required for production)
- `ALLOW_FORM_FALLBACK=false` (recommended for production)
- `NEXT_PUBLIC_FACEBOOK_URL` (optional but recommended)
- `NEXT_PUBLIC_INSTAGRAM_URL` (optional but recommended)

Reference template: `/.env.example`

## 2. Preview vs Production Parity
- Keep the same form integration shape in preview and production.
- Use separate webhook endpoints for preview/prod if needed.
- Validate both `/api/contact` and `/api/newsletter` in preview before promote.

## 3. Pre-Deploy Checklist
Run locally or in CI:
- `npm ci`
- `npm run lint`
- `npm run test:unit`
- `npm run build`
- `npm run test:e2e`
- `npm run test:links`

## 4. Deployment Verification
After deploy to Vercel production:
- Submit contact form with valid payload and verify webhook delivery.
- Submit newsletter form with valid payload and verify webhook delivery.
- Confirm robots and sitemap routes:
  - `/robots.txt`
  - `/sitemap.xml`
- Confirm legal routes are reachable:
  - `/privacy-policy`
  - `/terms-and-conditions`

## 5. Rollback Procedure
- In Vercel dashboard, open Deployments.
- Select the last known good deployment.
- Promote it to production.
- Re-run form smoke tests and verify webhook delivery.

## 6. Incident Notes
If form API returns `503 SERVICE_UNAVAILABLE` in production:
- Check webhook env vars in Vercel.
- Verify webhook endpoint health.
- Re-deploy after fixing configuration.
