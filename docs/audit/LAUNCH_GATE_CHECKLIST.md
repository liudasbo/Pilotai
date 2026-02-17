# Launch Gate Checklist

Decision: **NO-GO** (until webhook env and Vercel ops checks are completed)

## Gate 0: Baseline
- [x] Severity model applied (`P0/P1/P2`)
- [x] KPI targets documented (LCP, CLS, INP, Lighthouse)
- [x] Baseline technical checks executed (lint/build/tests)

## Gate 1: Public-ready Functionality
- [x] Contact form wired to backend endpoint
- [x] Newsletter form wired to backend endpoint
- [x] Server-side validation and error responses added
- [x] Honeypot and rate-limit protection added
- [x] Placeholder social links removed from `/` fallback
- [x] Privacy/terms legal pages added
- [ ] Production webhook env configured in Vercel (`CONTACT_WEBHOOK_URL`, `NEWSLETTER_WEBHOOK_URL`)

## Gate 2: Performance
- [ ] Vercel preview Lighthouse mobile/desktop reports attached
- [ ] Web Vitals measured on preview traffic
- [ ] Heavy media optimization pass complete (top 10 largest assets)
- [ ] Updated KPI measurement after optimization

## Gate 3: Code Quality & Architecture
- [x] Newsletter form duplication removed via shared component
- [x] ESLint CLI migration completed (flat config)
- [x] Unit + e2e + a11y smoke tests added
- [x] Broken internal route reference check added

## Gate 4: Security, Privacy, Deployment Readiness
- [x] Security headers added in Next config
- [x] Prod dependency vulnerability check clean
- [x] Robots and sitemap include legal routes
- [ ] Vercel env + rollback procedure verified in staging

## Gate 5: CI Standard
- [x] CI workflow created (lint/build/unit/e2e/link checks)
- [x] Playwright report upload enabled in CI
- [ ] CI required checks enforced in repository branch protection

## Final Launch Requirement
Set all unchecked items above to complete, then re-run:
- `npm run lint`
- `npm run test:unit`
- `npm run build`
- `npm run test:e2e`
- `npm run test:links`

When all gates are complete: switch decision to **GO**.
