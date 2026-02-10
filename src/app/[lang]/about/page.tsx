import type { Metadata } from "next";
import type { Lang } from "@/lib/i18n";
import { aboutContent } from "@/data/about";
import { isValidLang } from "@/lib/i18n";

const titles: Record<Lang, string> = {
  en: "About Lion Finance",
  zh: "关于 Lion Finance",
  kr: "Lion Finance 소개",
};

const descriptions: Record<Lang, string> = {
  en: "Learn about Lion Finance, your trusted mortgage and loan broker in New Zealand. We specialise in home loans, construction, business and commercial finance.",
  zh: "了解 Lion Finance，新西兰值得信赖的房贷与贷款经纪。我们专注房屋贷款、建筑、商业与商业地产融资。",
  kr: "뉴질랜드 신뢰할 수 있는 모기지 및 대출 브로커 Lion Finance를 소개합니다. 주택 대출, 건축, 사업자 및 상업용 금융 전문.",
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
    openGraph: { title: titles[lang], description: descriptions[lang] },
  };
}

export default function AboutPage({ params }: { params: { lang: string } }) {
  const lang = (isValidLang(params.lang) ? params.lang : "en") as Lang;
  const content = aboutContent[lang];

  return (
    <article className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-lion-navy mb-4">{content.title}</h1>
        <h2 className="text-2xl font-semibold text-lion-gold mb-8">
          {content.h2}
        </h2>
        <div className="space-y-6 text-lion-dark/90 leading-relaxed">
          {content.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
