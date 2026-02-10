import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AIChat } from "@/components/AIChat";
import { isValidLang } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";

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

  return (
    <div className="flex flex-col min-h-screen">
      <Header lang={locale} />
      <main className="flex-1">{children}</main>
      <Footer lang={locale} />
      <AIChat lang={locale} />
    </div>
  );
}
