import type { Lang } from "@/lib/i18n";
import type { FAQItem } from "@/data/faq";

/**
 * FAQPage 结构化数据，利于搜索引擎展示 FAQ 富摘要
 */
type FAQPageJsonLdProps = { lang: Lang; items: FAQItem[]; baseUrl: string };

export function FAQPageJsonLd({ lang, items, baseUrl }: FAQPageJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q[lang],
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a[lang],
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
