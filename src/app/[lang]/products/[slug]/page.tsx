import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  productSlugs,
  productTitles,
  productDescriptions,
  type ProductSlug,
} from "@/data/content";
import { isValidLang } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";
import { nav } from "@/data/content";

const cta: Record<Lang, string> = {
  en: "Get in touch",
  zh: "联系我们",
  kr: "연락하기",
};

export function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  for (const lang of ["en", "zh", "kr"] as const) {
    for (const slug of productSlugs) {
      params.push({ lang, slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string; slug: string };
}): Promise<Metadata> {
  const lang = isValidLang(params.lang) ? params.lang : "en";
  const slug = productSlugs.includes(params.slug as ProductSlug)
    ? (params.slug as ProductSlug)
    : null;
  if (!slug) return { title: "Product | Lion Finance" };
  const title = productTitles[slug][lang];
  const desc = productDescriptions[slug][lang].slice(0, 160);
  return {
    title,
    description: desc,
    openGraph: { title, description: desc },
  };
}

export default function ProductPage({
  params,
}: {
  params: { lang: string; slug: string };
}) {
  const lang = (isValidLang(params.lang) ? params.lang : "en") as Lang;
  const slug = productSlugs.includes(params.slug as ProductSlug)
    ? (params.slug as ProductSlug)
    : null;
  if (!slug) notFound();

  const title = productTitles[slug][lang];
  const description = productDescriptions[slug][lang];

  return (
    <article className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <nav className="text-sm text-lion-dark/70 mb-6" aria-label="Breadcrumb">
          <Link href={`/${lang}`} className="hover:text-lion-gold">
            {nav.home[lang]}
          </Link>
          <span className="mx-2">/</span>
          <Link href={`/${lang}#products`} className="hover:text-lion-gold">
            {nav.products[lang]}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-lion-navy font-medium">{title}</span>
        </nav>
        <div className="relative w-full h-48 sm:h-64 md:h-80 rounded-xl overflow-hidden mb-8">
          <Image
            src={`/products/${slug}.png`}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>
        <h1 className="text-4xl font-bold text-lion-navy mb-4">{title}</h1>
        <div className="space-y-4 text-lion-dark/90 leading-relaxed">
          {description.split(/\n\n+/).map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <div className="mt-10 pt-8 border-t border-lion-gold/20">
          <Link
            href={`/${lang}#contact`}
            className="inline-block px-6 py-3 bg-lion-gold text-white font-semibold rounded-lg hover:bg-lion-gold/90 transition"
          >
            {cta[lang]}
          </Link>
        </div>
      </div>
    </article>
  );
}
