# SEO audit (2026-09-27)

## Implemented

- Keep `/kr` URLs stable, but declare Korean as `ko` in HTML hreflang and XML sitemap alternates.
- Correct language-switch links that previously inserted double slashes on inner pages.
- Remove duplicate brand suffixes from homepage, About and legal-page titles.
- Supply page-specific Open Graph URL, locale, image, title and description, plus matching Twitter metadata, on every public page.
- Include reciprocal language alternates in the sitemap. Keep its 40 indexable URLs and exclude untranslated Chinese/Korean terms routes.
- Omit inaccurate sitemap lastmod timestamps: a rebuild does not mean all content changed.
- Allow crawlers to read login/admin noindex metadata rather than blocking these paths in robots.txt. Authentication remains required for admin access.
- Add product BreadcrumbList markup matching visible breadcrumbs, and a stable organization identifier/logo on the homepage.
- Escape `<` in serialized JSON-LD so content cannot terminate its script element.
- Restrict the www redirect to the actual production domain and match HTML language on whole path segments.

## Verification

Run `npm run lint`, `npm run build`, then `npm run start -- --port 3105`.
In another terminal run `python3 scripts/check-seo.py http://localhost:3105`.

The HTTP audit checks all 40 sitemap pages for unique titles, one H1, descriptions, canonical URLs, reciprocal language alternates, HTML language, indexability, social metadata, and malformed internal links. It parses JSON-LD and verifies product breadcrumbs, login/non-English terms noindex, robots.txt, and invalid-route 404 responses.

Before changes, the live Korean team page confirmed incorrect `kr` hreflang and English homepage Twitter metadata. Local production validation is separate from verifying Vercel deployment or Google indexing.

## Follow-up

- Confirm Vercel Production deployed the new commit. The audit script can also target `https://lionfinance.co.nz` after deployment.
- Keep the existing Search Console sitemap submission. Inspect the English, Chinese and Korean homepage URLs after deployment; crawl/indexing timing is controlled by Google.
- Meta keywords are ignored by Google. The previously added GJ Finance keyword alone does not improve ranking. Any visible brand relationship should be confirmed before adding copy.
- Product content is currently largely a single paragraph. Additional service-specific information should be reviewed by the advisory team, especially rates, fees, eligibility and regulatory claims.
- Several detail pages read TypeScript data while the homepage reads CMS Markdown. Content edits should be checked in both locations until a separate content-source consolidation is performed.
- The supplied John FSP number matches the company number in the existing disclosure data. The company should confirm the intended display; this audit does not independently verify adviser registrations.
- This pass does not measure field Core Web Vitals, backlinks, Business Profile status, or private Search Console data. Check those separately using actual traffic and account access.
- The existing Next.js 14.2.15 version needs a separate dependency/security upgrade. Do not treat SEO validation as a security audit.

## References

- https://developers.google.com/search/docs/specialty/international/localized-versions
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/docs/crawling-indexing/special-tags
