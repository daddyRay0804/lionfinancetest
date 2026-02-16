import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import type { Lang } from "@/lib/i18n";
import { isValidLang } from "@/lib/i18n";
import { makeAlternates } from "@/lib/seo";
import { getLocalizedContentBundle, contentMeta } from "@/lib/contentStore";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FAQPageJsonLd } from "@/components/FAQPageJsonLd";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";

const titles: Record<Lang, string> = {
  en: "Lion Finance | Mortgage & Loan Broker | New Zealand",
  zh: "Lion Finance｜新西兰房贷与贷款经纪",
  kr: "Lion Finance | 뉴질랜드 모기지 & 대출 브로커",
};

const descriptions: Record<Lang, string> = {
  en: "Trusted mortgage and loan broker in New Zealand. Home loans, construction loans, business and commercial finance, refinance, top-up, and interest rate refix.",
  zh: "新西兰值得信赖的房贷与贷款经纪：房屋贷款、建筑贷款、商业/商业地产融资、再融资、加贷与利率重定。",
  kr: "뉴질랜드 신뢰할 수 있는 모기지 및 대출 브로커. 주택/건축/사업자/상업용 대출, 재융자, 탑업, 금리 재설정.",
};

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const lang = (isValidLang(params.lang) ? params.lang : "en") as Lang;
  const image = "/hero.png";
  return {
    title: titles[lang],
    description: descriptions[lang],
    keywords:
      lang === "zh"
        ? ["奥克兰房贷经纪", "新西兰房贷", "再融资", "建筑贷款", "商业贷款", "贷款顾问"]
        : lang === "kr"
          ? ["오클랜드 모기지 브로커", "뉴질랜드 주택 대출", "재융자", "건축 대출", "사업자 대출"]
          : ["Auckland mortgage broker", "home loan NZ", "refinance", "construction loan", "business loan"],
    alternates: makeAlternates(lang, ""),
    openGraph: { title: titles[lang], description: descriptions[lang], images: [image] },
    twitter: { card: "summary_large_image", title: titles[lang], description: descriptions[lang], images: [image] },
  };
}

function OrganizationJsonLd({ bundle }: { bundle: ReturnType<typeof getLocalizedContentBundle> }) {
  const base = "https://lionfinance.co.nz";

  // Prefer a richer local-business schema for better Google understanding.
  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Lion Finance",
    url: base,
    description: bundle.site.siteTagline,
    image: `${base}/logo.png`,
    areaServed: { "@type": "Country", name: "New Zealand" },
    address: {
      "@type": "PostalAddress",
      streetAddress: bundle.site.contactAddress,
      addressLocality: "Auckland",
      addressCountry: "NZ",
    },
    email: bundle.site.contactEmail,
    contactPoint: bundle.team
      .filter((m) => m.email || m.phone)
      .map((m) => ({
        "@type": "ContactPoint",
        contactType: "customer support",
        name: m.name,
        email: m.email,
        telephone: m.phone,
        areaServed: "NZ",
      })),
    knowsAbout: [
      "Home Loans",
      "Construction Loans",
      "Business Loans",
      "Commercial Loans",
      "Refinance",
      "Top-up",
      "Interest Rate Refix",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

const heroTagline: Record<Lang, string> = {
  en: "We are the expert in the industry! Come talk to us, we will help you achieve your financial goals!",
  zh: "我们是行业专家！来找我们聊聊，我们助您实现财务目标！",
  kr: "우리는 업계 전문가입니다! 연락 주시면 재정 목표 달성을 돕겠습니다!",
};
const heroIntro: Record<Lang, string> = {
  en: "Lion Finance is a leading financial advisory firm based in Auckland, New Zealand. We specialize in providing expert guidance on mortgages.",
  zh: "Lion Finance 是总部位于新西兰奥克兰的领先金融顾问公司，专注提供专业房贷指导。",
  kr: "Lion Finance는 뉴질랜드 오클랜드에 본사를 둔 선도적인 금융 자문 회사이며, 모기지 전문 자문을 제공합니다.",
};
const heroTeam: Record<Lang, string> = {
  en: "Our experienced team puts you first. We offer a personalized, one-stop service to manage all your mortgage requirements seamlessly.",
  zh: "我们经验丰富的团队以您为先，提供个性化一站式服务，无缝满足您的全部房贷需求。",
  kr: "경험 많은 팀이 귀하를 최우선으로 합니다. 맞춤형 원스톱 서비스로 모든 모기지 요구를 원활히 관리합니다.",
};
const heroCtaText: Record<Lang, string> = {
  en: "Contact one of our mortgage advisors today to ensure you secure the best possible deal for your financial future.",
  zh: "立即联系我们的房贷顾问，为您的财务未来争取最佳方案。",
  kr: "재정적 미래를 위한 최상의 거래를 확보하려면 오늘 당사 모기지 어드바이저에게 연락하세요.",
};

const cta: Record<Lang, string> = {
  en: "Get in touch",
  zh: "联系我们",
  kr: "연락하기",
};

const productsHeading: Record<Lang, string> = {
  en: "Our products",
  zh: "我们的产品",
  kr: "상품 안내",
};

const teamHeading: Record<Lang, string> = {
  en: "Our Team",
  zh: "我们的团队",
  kr: "우리 팀",
};

const teamMeetCta: Record<Lang, string> = {
  en: "Meet the full team",
  zh: "查看完整团队",
  kr: "팀 전체 보기",
};

const testimonialsHeading: Record<Lang, string> = {
  en: "What our clients say",
  zh: "客户评价",
  kr: "고객 후기",
};

const contactHeading: Record<Lang, string> = {
  en: "Contact us",
  zh: "联系我们",
  kr: "연락처",
};

const contactDesc: Record<Lang, string> = {
  en: "Ready to find the right loan? Our brokers are here to help.",
  zh: "准备找到合适的贷款？我们的经纪随时为您服务。",
  kr: "맞춤 대출을 찾을 준비가 되셨나요? 브로커가 도와드립니다.",
};

const faqHeading: Record<Lang, string> = {
  en: "Frequently Asked Questions",
  zh: "常见问题",
  kr: "자주 묻는 질문",
};

const faqViewAll: Record<Lang, string> = {
  en: "View all FAQ",
  zh: "查看全部常见问题",
  kr: "전체 FAQ 보기",
};

const faqSub: Record<Lang, string> = {
  en: "Quick answers about mortgage broking and our services in New Zealand.",
  zh: "关于新西兰房贷经纪与服务的常见解答。",
  kr: "뉴질랜드 모기지 브로킹 및 서비스에 대한 빠른 답변.",
};

export default function HomePage({ params }: { params: { lang: string } }) {
  const lang = (params.lang === "zh" || params.lang === "kr" ? params.lang : "en") as Lang;
  const bundle = getLocalizedContentBundle(lang);

  return (
    <>
      <OrganizationJsonLd bundle={bundle} />
      <FAQPageJsonLd lang={lang} items={bundle.faq} baseUrl="https://lionfinance.co.nz" />
      <section className="relative overflow-hidden text-white py-16 sm:py-20 md:py-28 px-4 sm:px-6 min-h-[360px] sm:min-h-[420px] flex flex-col justify-center">
        {/* Hero 背景图：奥克兰天际线 */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.png"
            alt="Auckland skyline"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* 渐变遮罩：保证文字与背景有对比，底部略深 */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"
            aria-hidden
          />
        </div>
        {/* 文字区域：毛玻璃卡片 + 阴影，避免与天空/建筑冲突 */}
        <div className="max-w-4xl mx-auto relative z-10 text-center animate-fade-in px-0">
          <div className="inline-block rounded-2xl bg-black/40 backdrop-blur-md px-6 py-8 sm:px-10 sm:py-10 shadow-xl border border-white/10 max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-white drop-shadow-sm">
              {bundle.site.siteName}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-lion-gold mb-4 font-medium drop-shadow-sm">
              {heroTagline[lang]}
            </p>
            <p className="text-white/95 text-sm sm:text-base max-w-xl mx-auto mb-3 leading-relaxed">
              {heroIntro[lang]}
            </p>
            <p className="text-white/95 text-sm sm:text-base max-w-xl mx-auto mb-3 leading-relaxed">
              {heroTeam[lang]}
            </p>
            <p className="text-white/95 text-sm sm:text-base max-w-xl mx-auto mb-6 leading-relaxed">
              {heroCtaText[lang]}
            </p>
            <Link
              href={`/${lang}#contact`}
              className="btn-primary inline-block min-h-[48px] px-6 sm:px-8 py-3 font-semibold touch-manipulation"
            >
              {cta[lang]}
            </Link>
          </div>
        </div>
      </section>

      <ProductShowcase
        lang={lang}
        heading={productsHeading[lang]}
        productSlugs={contentMeta.productSlugs}
        productTitles={bundle.site.productTitles}
        productDescriptions={bundle.site.productDescriptions}
      />

      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading text-center mb-8 sm:mb-12 text-2xl sm:text-3xl">
            {teamHeading[lang]}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {bundle.team.map((member) => (
              <div
                key={member.id}
                className="flex flex-col items-center text-center p-6 bg-lion-cream rounded-xl border border-lion-gold/20 shadow-card hover:shadow-card-hover transition"
              >
                {member.image && (
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={120}
                    height={120}
                    className="rounded-full object-cover mb-4 border-2 border-lion-gold/30"
                  />
                )}
                <h3 className="text-lg font-bold text-lion-navy">{member.name}</h3>
                <p className="text-sm text-lion-gold font-medium mb-2">{member.title}</p>
                <p className="text-sm text-lion-dark/80 leading-relaxed line-clamp-3">
                  {member.bio.slice(0, 150)}…
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href={`/${lang}/team`}
              className="inline-flex items-center gap-1.5 text-lion-gold font-medium hover:underline"
            >
              {teamMeetCta[lang]}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-lion-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="section-heading text-center mb-8 sm:mb-12 text-2xl sm:text-3xl">
            {testimonialsHeading[lang]}
          </h2>
        </div>
        <TestimonialsCarousel items={bundle.testimonials} lang={lang} />
      </section>

      <section id="faq" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-lion-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-heading text-center mb-4 text-2xl sm:text-3xl">
            {faqHeading[lang]}
          </h2>
          <p className="text-center text-lion-dark/80 mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base">
            {faqSub[lang]}
          </p>
          <FAQAccordion items={bundle.faq} lang={lang} />
          <div className="mt-8 text-center">
            <Link
              href={`/${lang}/faq`}
              className="inline-flex items-center gap-1.5 text-lion-gold font-medium hover:underline"
            >
              {faqViewAll[lang]}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-lion-navy text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="section-heading text-center mb-4 text-lion-gold text-2xl sm:text-3xl">
            {contactHeading[lang]}
          </h2>
          <p className="text-white/90 mb-6 text-sm sm:text-base">{contactDesc[lang]}</p>
          <p className="text-sm text-white/90 mb-1">
            Lion Finance
          </p>
          <p className="text-sm text-white/80 mb-2">
            {bundle.site.contactAddress}
          </p>
          <p className="text-xs sm:text-sm text-white/70">
            <a href={`mailto:${bundle.site.contactEmail}`} className="hover:text-lion-gold transition">{bundle.site.contactEmail}</a>
          </p>
        </div>
      </section>
    </>
  );
}
