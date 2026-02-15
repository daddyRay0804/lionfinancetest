import type { Metadata } from "next";
import { FAQAccordion } from "@/components/FAQAccordion";
import { faqList } from "@/data/faq";
import type { Lang } from "@/lib/i18n";
import { isValidLang } from "@/lib/i18n";
import { makeAlternates } from "@/lib/seo";

const titles: Record<Lang, string> = {
  en: "Frequently Asked Questions",
  zh: "常见问题",
  kr: "자주 묻는 질문",
};

const descriptions: Record<Lang, string> = {
  en: "Common questions about mortgage broking, home loans, refinancing and Lion Finance services in New Zealand.",
  zh: "关于新西兰房贷经纪、房屋贷款、再融资及 Lion Finance 服务的常见问题。",
  kr: "뉴질랜드 모기지 브로킹, 주택 대출, 재융자 및 Lion Finance 서비스에 대한 일반적인 질문.",
};

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const lang = isValidLang(params.lang) ? params.lang : "en";
  return {
    title: titles[lang],
    description: descriptions[lang],
    alternates: makeAlternates(lang, "/faq"),
    openGraph: { title: titles[lang], description: descriptions[lang] },
  };
}

export default function FAQPage({ params }: { params: { lang: string } }) {
  const lang = (isValidLang(params.lang) ? params.lang : "en") as Lang;

  return (
    <article className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-lion-navy mb-4">{titles[lang]}</h1>
        <p className="text-lg text-lion-dark/80 mb-10">{descriptions[lang]}</p>
        <FAQAccordion items={faqList} lang={lang} />
      </div>
    </article>
  );
}
