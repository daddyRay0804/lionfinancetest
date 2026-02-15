import type { Metadata } from "next";
import Link from "next/link";
import { footerLegal } from "@/data/content";
import { complaintsIntro, complaintsSteps } from "@/data/legal/complaints";
import { isValidLang } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";
import { makeAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: { params: { lang: string } }): Promise<Metadata> {
  const lang = isValidLang(params.lang) ? params.lang : "en";
  const title = footerLegal.complaints[lang as Lang];
  const desc = lang === "zh"
    ? "Lion Finance 投诉与争议解决流程（含 FDRS 联系方式）。"
    : lang === "kr"
      ? "Lion Finance 불만 처리 및 분쟁 해결 절차(FDRS 안내 포함)."
      : "Lion Finance complaints and dispute resolution process (includes FDRS contact).";
  return {
    title: `${title} | Lion Finance`,
    description: desc,
    alternates: makeAlternates(lang, "/complaints"),
    robots: { index: lang === "en", follow: true },
    openGraph: { title: `${title} | Lion Finance`, description: desc },
  };
}

export default function ComplaintsPage({ params }: { params: { lang: string } }) {
  const lang = (isValidLang(params.lang) ? params.lang : "en") as Lang;

  return (
    <article className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-lion-dark [&_a]:text-lion-gold [&_a]:hover:underline [&_a]:break-all">
        <h1 className="text-4xl font-bold text-lion-navy mb-6">
          {footerLegal.complaints[lang]}
        </h1>

        {complaintsIntro[lang].map((p, i) => (
          <p key={i} className={i < complaintsIntro[lang].length - 1 ? "mb-4 leading-relaxed" : "mb-10 leading-relaxed"}>
            {p}
          </p>
        ))}

        {complaintsSteps.map((step, idx) => {
          const { title, content } = step[lang];
          const isStep4 = idx === 3;
          return (
            <section key={idx} className="mb-10">
              <h2 className="text-xl font-semibold text-lion-navy mt-8 mb-4 border-b border-lion-gold/20 pb-2">
                {title}
              </h2>
              {isStep4 ? (
                <>
                  <p className="mb-4 leading-relaxed">{content[0]}</p>
                  <div className="rounded-lg bg-lion-cream/60 border border-lion-gold/20 p-4 sm:p-5">
                    <p className="font-semibold text-lion-navy mb-3">{content[1]}</p>
                    <ul className="list-none pl-0 space-y-1 text-sm sm:text-base">
                      <li><strong>{lang === "en" ? "Address" : lang === "zh" ? "地址" : "주소"}:</strong> {content[2]}</li>
                      <li><strong>{lang === "en" ? "Phone" : lang === "zh" ? "电话" : "전화"}:</strong> {content[3]}</li>
                      <li><strong>{lang === "en" ? "Email" : lang === "zh" ? "电邮" : "이메일"}:</strong> <a href="mailto:Enquiries@FDRS.org.nz">Enquiries@FDRS.org.nz</a></li>
                      <li><strong>{lang === "en" ? "Website" : lang === "zh" ? "网站" : "웹사이트"}:</strong> <a href="https://www.fdrs.org.nz/complaints" target="_blank" rel="noopener noreferrer">www.fdrs.org.nz/complaints</a></li>
                    </ul>
                  </div>
                </>
              ) : idx === 0 ? (
                <>
                  <p className="mb-4 leading-relaxed">{content[0]}</p>
                  <ul className="list-none pl-0 space-y-2 mb-4">
                    <li><strong>{lang === "en" ? "Phone" : lang === "zh" ? "电话" : "전화"}:</strong> {content[1].replace(/^Phone:?\s*/i, "").replace(/^电话：?\s*/, "").replace(/^전화:?\s*/, "")}</li>
                    <li><strong>{lang === "en" ? "Email" : lang === "zh" ? "电邮" : "이메일"}:</strong> <a href="mailto:allan@lionfinance.co.nz">allan@lionfinance.co.nz</a>, <a href="mailto:gary@lionfinance.co.nz">gary@lionfinance.co.nz</a></li>
                    <li><strong>{lang === "en" ? "In writing" : lang === "zh" ? "书面" : "서면"}</strong> — {content[3].replace(/^In writing\s*—\s*Complaints officer:?\s*/i, "").replace(/^书面投诉负责人：?\s*/, "").replace(/^서면\s*—\s*불만 담당:?\s*/, "")}</li>
                    <li>{content[4]}</li>
                  </ul>
                </>
              ) : (
                content.map((para, i) => (
                  <p key={i} className={i < content.length - 1 ? "mb-4 leading-relaxed" : "leading-relaxed"}>
                    {para}
                  </p>
                ))
              )}
            </section>
          );
        })}
      </div>
    </article>
  );
}
