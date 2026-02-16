import type { Lang } from "@/lib/i18n";

/**
 * FAQPage 结构化数据，利于搜索引擎展示 FAQ 富摘要
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
