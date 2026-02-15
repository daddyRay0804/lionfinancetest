import type { Metadata } from "next";
import { footerLegal } from "@/data/content";
import { disclosureSubtitle, disclosureSections } from "@/data/legal/disclosure";
import { isValidLang } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";
import { makeAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: { params: { lang: string } }): Promise<Metadata> {
  const lang = isValidLang(params.lang) ? params.lang : "en";
  const title = footerLegal.disclosure[lang as Lang];
  const desc = lang === "zh"
    ? "Lion Finance 披露声明：服务范围、费用与争议解决（新西兰）。"
    : lang === "kr"
      ? "Lion Finance 공시: 서비스 범위, 수수료 및 분쟁 해결(뉴질랜드)."
      : "Lion Finance disclosure statement: services, fees, and dispute resolution (New Zealand).";
  return {
    title: `${title} | Lion Finance`,
    description: desc,
    alternates: makeAlternates(lang, "/disclosure"),
    openGraph: { title: `${title} | Lion Finance`, description: desc },
  };
}

function renderBlock(block: (typeof disclosureSections)[0]["blocks"][0], lang: Lang, sectionTitleEn: string) {
  if (block.type === "p") {
    return (
      <p key={Math.random()} className="mb-4 last:mb-0 leading-relaxed">
        {block.text[lang]}
      </p>
    );
  }
  if (block.type === "subhead") {
    return (
      <p key={Math.random()} className="mb-2 leading-relaxed font-medium">
        {block.text[lang]}
      </p>
    );
  }
  if (block.type === "ul") {
    const items = block.items[lang];
    const isComplaintsYouCan = sectionTitleEn === "Complaints handling and dispute resolutions" && items.some((i) => i.includes("fdrs.org.nz"));
    const isContactDetails = sectionTitleEn === "Contact details";
    return (
      <ul key={Math.random()} className={isContactDetails ? "list-none pl-0 space-y-1 mb-2" : "list-disc pl-6 space-y-2 mb-4"}>
        {items.map((item, i) => {
          if (isComplaintsYouCan && i === 0) {
            const parts = item.split("www.fdrs.org.nz");
            return <li key={i}>{parts[0]}<a href="https://www.fdrs.org.nz" target="_blank" rel="noopener noreferrer">www.fdrs.org.nz</a>{parts[1] ?? ""}</li>;
          }
          if (isComplaintsYouCan && i === 1) {
            const parts = item.split("enquiries@fdrs.org.nz");
            return <li key={i}>{parts[0]}<a href="mailto:enquiries@fdrs.org.nz">enquiries@fdrs.org.nz</a>{parts[1] ?? ""}</li>;
          }
          if (isContactDetails && item.includes("allan@lionfinance")) return <li key={i}><strong>{item.split(":")[0]}:</strong> <a href="mailto:allan@lionfinance.co.nz">allan@lionfinance.co.nz</a>, <a href="mailto:gary@lionfinance.co.nz">gary@lionfinance.co.nz</a></li>;
          if (isContactDetails) {
            const colonIdx = item.indexOf(": ");
            if (colonIdx > 0) return <li key={i}><strong>{item.slice(0, colonIdx)}:</strong> {item.slice(colonIdx + 2)}</li>;
          }
          return <li key={i}>{item}</li>;
        })}
      </ul>
    );
  }
  return null;
}

export default function DisclosurePage({ params }: { params: { lang: string } }) {
  const lang = (isValidLang(params.lang) ? params.lang : "en") as Lang;

  return (
    <article className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-lion-dark [&_a]:text-lion-gold [&_a]:hover:underline [&_a]:break-all">
        <h1 className="text-4xl font-bold text-lion-navy mb-2">
          {footerLegal.disclosure[lang]}
        </h1>
        <p className="text-sm text-lion-dark/70 mb-12">{disclosureSubtitle[lang]}</p>

        {disclosureSections.map((section, idx) => (
          <section key={idx} className="mb-10">
            <h2 className="text-xl font-semibold text-lion-navy mt-8 mb-4 border-b border-lion-gold/20 pb-2">
              {section.title[lang]}
            </h2>
            {section.blocks.map((block, bidx) => renderBlock(block, lang, section.title.en))}
          </section>
        ))}
      </div>
    </article>
  );
}
