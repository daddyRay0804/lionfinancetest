import Link from "next/link";
import Image from "next/image";
import type { Lang } from "@/lib/i18n";
import { siteName, siteTagline, contactAddress, contactEmail } from "@/data/content";
import { testimonialsList } from "@/data/testimonials";
import { faqList } from "@/data/faq";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FAQPageJsonLd } from "@/components/FAQPageJsonLd";

function OrganizationJsonLd({ lang }: { lang: string }) {
  const base = "https://lionfinance.co.nz";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Lion Finance",
    url: base,
    description: siteTagline[lang as keyof typeof siteTagline],
    areaServed: { "@type": "Country", name: "New Zealand" },
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

  return (
    <>
      <OrganizationJsonLd lang={lang} />
      <FAQPageJsonLd lang={lang} items={faqList} baseUrl="https://lionfinance.co.nz" />
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
              {siteName[lang]}
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

      <ProductShowcase lang={lang} heading={productsHeading[lang]} />

      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading text-center mb-8 sm:mb-12 text-2xl sm:text-3xl">
            {testimonialsHeading[lang]}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonialsList.map((t) => (
              <blockquote
                key={t.name}
                className="p-5 sm:p-6 bg-lion-cream card-financial border border-lion-gold/20 border-l-4 border-l-lion-gold"
              >
                <p className="text-lion-dark mb-4">&ldquo;{t.text[lang]}&rdquo;</p>
                <footer className="text-sm text-lion-navy font-medium">
                  {t.name} — {t.role[lang]}, {t.location}
                </footer>
                <div className="mt-2 text-lion-gold" aria-hidden>
                  {"★".repeat(t.rating)}
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-lion-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-heading text-center mb-4 text-2xl sm:text-3xl">
            {faqHeading[lang]}
          </h2>
          <p className="text-center text-lion-dark/80 mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base">
            {faqSub[lang]}
          </p>
          <FAQAccordion items={faqList} lang={lang} />
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
            {contactAddress}
          </p>
          <p className="text-xs sm:text-sm text-white/70">
            <a href={`mailto:${contactEmail}`} className="hover:text-lion-gold transition">{contactEmail}</a>
          </p>
        </div>
      </section>
    </>
  );
}
