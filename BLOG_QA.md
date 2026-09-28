# Blog delivery and QA

## Scope

- 20 original guides, each with full English, Chinese and Korean content (60 article URLs).
- Categories: first-home buying, mortgage management, property/building and business finance.
- Author: Eric Huang. Author links resolve to the third team member. No adviser credentials or professional review are attributed to Eric.
- Fixed editorial dates from 6 March to 25 September 2026, assigned within the range requested by the site owner. No update date is displayed or generated in article metadata.
- 20 topic-specific images generated with the built-in image tool, explicitly approved by the owner instead of the initially requested image2.5. The tool does not expose a verifiable model name.
- WebP assets total 2,778,882 bytes. Images retain their original 1536 x 1024 composition; each has translated alt text. Captions identify them as generated editorial illustrations, not customer properties or case studies.
- Header, footer and home-page entry points; search, category filters and empty/reset state; responsive article cards, table of contents, related articles and service/contact links.

## SEO and editorial checks

- Articles and listing pages are pre-rendered with readable HTML and crawlable links; JavaScript is not required to read them.
- Unique localized titles and descriptions, canonical URLs, reciprocal en/zh/ko hreflang and x-default.
- Article Open Graph metadata, Twitter cards, BlogPosting, BreadcrumbList and listing ItemList structured data.
- Sitemap expanded from 40 to 103 indexable URLs. No synthetic build-time last-modified dates.
- 129 contextual links in article bodies, plus related-article, service and author links. All article/service destinations validated.
- Official references include Inland Revenue, Settled, Sorted, FMA, Building Performance, Tenancy Services, Business.govt.nz and lender documentation. Sources appear in each article.
- Numerical examples are labelled as hypothetical. Content avoids rate predictions, approval guarantees, invented customer stories and tax recommendations.
- General-information disclaimer included in all languages. This is not an independent legal/compliance sign-off; the firm's appropriately qualified staff should review financial content before public release.

## Automated verification

Tested on a local production build, 29 September 2026:

| Check | Result |
| --- | --- |
| Production build and TypeScript | Passed; all 60 articles generated |
| ESLint | Passed |
| Editorial/data checks | 20 posts, 60 translations, 20 unique dates and images, four sections per article, valid service/related links |
| SEO HTTP checks | 103 sitemap URLs, canonical/hreflang, title, description, one H1, language, social metadata, JSON-LD, robots and invalid route 404s |
| Chromium browser checks | 60 article pages; 132 desktop/mobile/tablet layout checks |
| Accessibility | Nine axe WCAG A/AA scans of Blog main content; no reported violations |
| Interactions | Search, category filtering, empty/reset state, mobile menu, author anchor, table of contents and language switching |
| Static HTML | Lists and article content remain accessible with JavaScript disabled |

Viewports: 1440 x 1000 desktop, 390 x 844 phone, plus 320, 768 and 1024 pixel widths. English, Chinese and Korean list/article screenshots were visually reviewed. Browser console page errors were checked. This is viewport emulation in desktop Chrome, not physical iOS/Android device testing or a Safari/Firefox test.

Issues corrected during QA:

- Image caption contrast on the site's original cream background.
- Tablet navigation density after adding the Blog link.
- Locale switching changed article content but left the root HTML language stale. Language links now request a new document, preserving article paths and setting the correct language.
- Language controls and article contents links have at least 44px-high targets.

## Re-running

Install the lockfile dependencies and use the available Chrome installation:

```sh
npm ci
npm run lint
npm run test:blog
npm run build
npm run start -- --port 3105
```

In another terminal:

```sh
npm run test:seo -- http://localhost:3105
QA_BASE_URL=http://localhost:3105 QA_OUTPUT=artifacts/blog-qa npm run test:blog:browser
```

Screenshots and the browser report are generated in the selected output directory. The default is `/tmp/lionfinance-blog-qa`. Local QA artifacts are excluded from Git.

## Content maintenance

Typed content lives in `src/data/blog/`, grouped by subject. Each article requires all three translations, one stable slug/date, image key, related slugs, service slug and official references. `npm run test:blog` checks their consistency. Dates are explicit editorial fields and do not change during a build. Content is code-managed; the existing Markdown admin does not edit these new article records.

Generated-image prompts and original filenames are recorded in `scripts/blog-image-manifest.json`. WebP delivery files are committed under `public/blog/`; original generated PNGs remain in the local generation directory. To re-encode from originals, set `BLOG_IMAGE_SOURCE_DIR` and run `npm run images:blog`. This is format compression, not an image regeneration command.

## Remaining risks and release status

- Existing production dependencies have seven npm audit findings (six high, one critical), including the pre-existing Next.js 14.2.15 dependency. Sharp itself is not listed in the audit findings. A broader framework/dependency update and security regression test are separate work; no forced upgrade was applied here. Functional/SEO QA is not a security approval.
- Browserslist reports outdated browser data; no unrelated lockfile refresh was performed.
- Live Vercel deployment, Google Search Console submission, rich-result validation against the public URL and real-user performance metrics have not been checked for this Blog release.
- Repository release target: GitHub main, as requested by the site owner. Deployment completion must be verified separately in Vercel; a Git push is not confirmation of a successful deployment.
