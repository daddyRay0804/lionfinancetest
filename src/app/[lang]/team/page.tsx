import type { Metadata } from "next";
import Image from "next/image";
import type { Lang } from "@/lib/i18n";
import { teamMembers } from "@/data/team";
import { isValidLang } from "@/lib/i18n";
import { makeAlternates } from "@/lib/seo";

const titles: Record<Lang, string> = {
  en: "Our Team",
  zh: "我们的团队",
  kr: "팀 소개",
};

const descriptions: Record<Lang, string> = {
  en: "Meet the Lion Finance team. Experienced brokers for home loans, construction, business and commercial finance in New Zealand.",
  zh: "认识 Lion Finance 团队。新西兰房屋贷款、建筑、商业与商业地产融资经验丰富的经纪。",
  kr: "Lion Finance 팀을 만나보세요. 뉴질랜드 주택 대출, 건축, 사업자 및 상업용 금융 전문 경험 많은 브로커.",
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
    alternates: makeAlternates(lang, "/team"),
    openGraph: { title: titles[lang], description: descriptions[lang] },
  };
}

export default function TeamPage({ params }: { params: { lang: string } }) {
  const lang = (isValidLang(params.lang) ? params.lang : "en") as Lang;

  return (
    <article className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-lion-navy mb-4">{titles[lang]}</h1>
        <p className="text-lg text-lion-dark/80 mb-12">{descriptions[lang]}</p>
        <div className="space-y-10 sm:space-y-12">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="grid grid-cols-1 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr] gap-6 md:gap-8 p-6 bg-white rounded-xl border border-lion-gold/20 shadow-sm hover:shadow-card-hover hover:border-lion-gold/30 transition-all duration-200 overflow-hidden"
            >
              {/* 照片列 */}
              <div className="flex justify-center md:justify-start">
                {member.image ? (
                  <div className="relative w-full max-w-[280px] aspect-[3/4] rounded-lg overflow-hidden bg-lion-cream shrink-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 280px"
                    />
                  </div>
                ) : (
                  <div className="w-full max-w-[280px] aspect-[3/4] rounded-lg bg-lion-cream shrink-0" />
                )}
              </div>
              {/* 故事列：姓名、职位、联系方式、简介 */}
              <div className="min-w-0 flex flex-col justify-center">
                <h2 className="text-xl sm:text-2xl font-semibold text-lion-navy mb-1">
                  {member.name}
                </h2>
                <p className="text-sm text-lion-gold font-medium mb-3">
                  {member.title[lang]}
                </p>
                {(member.fspNumber || member.phone || member.email) && (
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
                    {member.fspNumber && (
                      <span className="inline-block text-xs font-medium text-lion-navy/80 bg-lion-cream px-2 py-1 rounded">
                        {member.fspNumber}
                      </span>
                    )}
                    {member.phone && (
                      <a
                        href={`tel:${member.phone.replace(/\s/g, "")}`}
                        className="text-xs text-lion-gold hover:underline"
                      >
                        {member.phone}
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="text-xs text-lion-gold hover:underline break-all"
                      >
                        {member.email}
                      </a>
                    )}
                  </div>
                )}
                <p className="text-sm sm:text-base text-lion-dark/80 leading-relaxed">
                  {member.bio[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
