# 30-Day Post-Launch Roadmap

## Week 1 (P1, highest impact)
- Optimize top 10 heaviest media assets (`public/images`, `public/videos`):
  - Convert hero/background images to WebP/AVIF variants.
  - Re-encode hero videos to lower bitrate and evaluate adaptive delivery.
  - Add stricter `sizes` values for non-full-width imagery.
- Deliverable: measured LCP/CLS/INP before vs after on Vercel preview.

## Week 2 (P1)
- Add production monitoring and alerts:
  - Form webhook success/failure tracking.
  - API route error-rate dashboards.
  - Synthetic checks for contact/newsletter flow.
- Deliverable: monitoring dashboard links + alert runbook section.

## Week 3 (P2)
- Refactor repeated layout/content sections into reusable content blocks where ROI is clear.
- Expand legal pages with reviewed legal text.
- Deliverable: reduced duplication report + approved legal copy deployment.

## Week 4 (P2)
- Evaluate Next.js 16 migration in dedicated branch:
  - dependency update matrix,
  - lint/tooling compatibility,
  - build/perf regression test.
- Deliverable: migration readiness report with effort estimate and risk score.

## Success Metrics for 30 Days
- Mobile LCP <= 2.5s on top landing routes.
- CLS <= 0.1 on all public routes.
- Contact + newsletter API failure rate < 1%.
- 100% CI pass rate on PRs with required checks enforced.
