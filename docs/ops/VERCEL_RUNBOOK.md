# Vercel Launch Runbook

## 1. Required Environment Variables
Configure in Vercel Project Settings:

- `SMTP_HOST` (required for production)
- `SMTP_PORT` (required for production, usually `465`)
- `SMTP_SECURE` (`true` for SSL 465, `false` for STARTTLS 587)
- `SMTP_USER` (required for production)
- `SMTP_PASS` (required for production)
- `MAIL_FROM` (required for production)
- `MAIL_TO` (recommended, defaults to `info@pilotaiprogram.com`)
- `ALLOW_FORM_FALLBACK=false` (recommended for production)
- `NEXT_PUBLIC_FACEBOOK_URL` (optional but recommended)
- `NEXT_PUBLIC_INSTAGRAM_URL` (optional but recommended)

Reference template: `/.env.example`

## 2. Preview vs Production Parity
- Keep the same SMTP integration shape in preview and production.
- Use separate mailbox credentials for preview/prod if needed.
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
- Submit contact form with valid payload and verify email delivery to `MAIL_TO`.
- Submit newsletter form with valid payload and verify email delivery to `MAIL_TO`.
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
- Re-run form smoke tests and verify SMTP email delivery.

## 6. Incident Notes
If form API returns `503 SERVICE_UNAVAILABLE` in production:
- Check SMTP env vars in Vercel.
- Verify mailbox credentials and SMTP host/port/secure mode.
- Re-deploy after fixing configuration.
