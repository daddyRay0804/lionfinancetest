import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AIChat } from "@/components/AIChat";
import { isValidLang } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";
import { getLocalizedContentBundle, contentMeta } from "@/lib/contentStore";

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "zh" }, { lang: "kr" }];
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const { lang } = params;
  if (!isValidLang(lang)) notFound();
  const locale = lang as Lang;

  const bundle = getLocalizedContentBundle(locale);

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        lang={locale}
        nav={bundle.site.nav}
        productSlugs={contentMeta.productSlugs}
        productTitles={bundle.site.productTitles}
      />
      <main className="flex-1">{children}</main>
      <Footer
        lang={locale}
        nav={bundle.site.nav}
        productSlugs={contentMeta.productSlugs}
        productTitles={bundle.site.productTitles}
        siteName={bundle.site.siteName}
        siteTagline={bundle.site.siteTagline}
        contactAddress={bundle.site.contactAddress}
        contactEmail={bundle.site.contactEmail}
        footerLegalSlugs={contentMeta.footerLegalSlugs}
        footerLegal={bundle.site.footerLegal}
      />
      <AIChat lang={locale} />
    </div>
  );
}
