# Pilotai Audit Report

Date: 2026-02-17
Scope: current workspace state (including local uncommitted changes)
Target: Public-ready + reliability on Vercel

## Executive Summary
- Build status: PASS (`npm run build`)
- Lint status: PASS (`npm run lint`)
- Unit tests: PASS (`npm run test:unit`)
- E2E + a11y smoke: PASS (`npm run test:e2e`)
- Internal route reference check: PASS (`npm run test:links`)
- Security audit (prod deps): PASS (`npm audit --omit=dev`)

Current release decision: **NO-GO** until production form webhooks are configured in Vercel and deployment runbook checks are completed.

## Findings by Severity

### P0 (Launch blockers)
| ID | Finding | Evidence | Status | Fix |
|---|---|---|---|---|
| P0-01 | Contact and newsletter forms had no backend delivery path | previous static forms in `/components/contact/ContactPage.js` and repeated newsletter sections | Fixed in code | Added `/app/api/contact/route.js` and `/app/api/newsletter/route.js` with validation, anti-spam honeypot, rate-limit, standardized API responses |
| P0-02 | No automated CI quality gates | no workflow before | Fixed in code | Added `/.github/workflows/ci.yml` with lint, build, unit, e2e, link checks |
| P0-03 | Legal links pointed to unrelated policy page | footer “Privacy policy” linked to pilot policy | Fixed in code | Added dedicated legal routes `/privacy-policy`, `/terms-and-conditions` and updated links |
| P0-04 | Production form destination can be missing | API returns 503 in production if webhook env is not set | Open (ops) | Configure `CONTACT_WEBHOOK_URL` and `NEWSLETTER_WEBHOOK_URL` in Vercel before launch |

### P1 (High priority after launch or before performance-sensitive launch)
| ID | Finding | Evidence | Recommendation |
|---|---|---|---|
| P1-01 | Very large media assets may hurt LCP/INP on mobile | top image up to ~19 MB, videos up to ~7.5 MB; `public/images` ~73 MB, `public/videos` ~10 MB | Convert heavy JPG/PNG to optimized WebP/AVIF variants, compress video, and use responsive `sizes` aggressively |
| P1-02 | Social links depend on env setup | header socials hidden when `NEXT_PUBLIC_FACEBOOK_URL` / `NEXT_PUBLIC_INSTAGRAM_URL` are missing | Set env values in Vercel and validate in preview |
| P1-03 | GSAP still ships globally in shared JS | `SiteMotionOrchestrator` is mounted in root layout | Keep current behavior, but evaluate route-level animation loading in next perf iteration |

### P2 (Improvements)
| ID | Finding | Recommendation |
|---|---|---|
| P2-01 | Mixed legacy token naming and many pixel-precise classes | Continue design token normalization and remove unused token variants |
| P2-02 | Contact/legal copy can be expanded for compliance maturity | Replace short legal pages with legal-reviewed policy text |
| P2-03 | Add synthetic monitoring for form APIs | Add uptime checks for `/api/contact` and `/api/newsletter` webhook delivery |

## Implemented Changes (This Execution)
- Added centralized validation with `zod` in `/lib/validation/forms.js`.
- Added standardized API response helpers in `/lib/api/contracts.js`.
- Added in-memory anti-abuse controls in `/lib/api/rateLimit.js` and client IP extraction in `/lib/api/clientIp.js`.
- Added production-facing API routes:
  - `/app/api/contact/route.js`
  - `/app/api/newsletter/route.js`
- Added reusable form UI components:
  - `/components/forms/ContactForm.js`
  - `/components/forms/NewsletterForm.js`
  - `/components/forms/NewsletterSection.js`
- Replaced duplicated newsletter forms across pages and connected contact form to backend.
- Updated header social links to remove `/` placeholders and use env-driven external links.
- Added legal pages and updated sitemap:
  - `/app/privacy-policy/page.js`
  - `/app/terms-and-conditions/page.js`
  - `/app/sitemap.js`
- Added app manifest and icon:
  - `/app/manifest.js`
  - `/app/icon.svg`
- Added security headers in `/next.config.js`.
- Migrated lint execution to ESLint CLI + flat config:
  - `/eslint.config.mjs`
  - `/package.json` scripts
- Added quality gates:
  - unit test: `/tests/unit/forms.validation.test.js`
  - e2e + a11y smoke: `/tests/e2e/smoke.spec.js`
  - broken route references: `/scripts/check-links.mjs`
  - CI workflow: `/.github/workflows/ci.yml`
- Added deployment env template: `/.env.example`.

## Verification Snapshot
- `npm run lint`: PASS
- `npm run test:unit`: PASS
- `npm run build`: PASS
- `npm run test:e2e`: PASS
- `npm run test:links`: PASS
- `npm audit --omit=dev --json`: 0 prod vulnerabilities
