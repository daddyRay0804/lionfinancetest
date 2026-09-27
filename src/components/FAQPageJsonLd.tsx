import type { Lang } from "@/lib/i18n";
import { serializeJsonLd } from "@/lib/seo";

/**
 * Describes the visible FAQ content without promising rich-result eligibility.
 */
type FAQPageJsonLdProps = { lang: Lang; items: Array<{ q: string; a: string }>; baseUrl: string };

export function FAQPageJsonLd({ lang, items, baseUrl }: FAQPageJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
    />
  );
}
