"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { productSlugs, productTitles, productDescriptions } from "@/data/content";
import type { Lang } from "@/lib/i18n";
import type { ProductSlug } from "@/data/content";

const productIcons: Record<ProductSlug, string> = {
  "home-loans": "🏠",
  "construction-loans": "🏗️",
  "business-loans": "💼",
  "commercial-loans": "🏢",
  refinance: "🔄",
  "top-up": "📈",
  "interest-rate-refix": "🔒",
};

const learnMore: Record<Lang, string> = {
  en: "Learn more",
  zh: "了解更多",
  kr: "자세히 보기",
};

type ProductShowcaseProps = { lang: Lang; heading: string };

export function ProductShowcase({ lang, heading }: ProductShowcaseProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) setInView(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`section-heading text-center mb-8 sm:mb-12 text-2xl sm:text-3xl transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {heading}
        </h2>
        {/* Mobile: 仅图标 + 名称；桌面: 完整卡片 */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {productSlugs.map((slug, i) => (
            <Link
              key={slug}
              href={`/${lang}/products/${slug}`}
              className="group relative flex items-center gap-3 rounded-xl md:rounded-2xl bg-white p-4 md:p-6 md:py-7 border border-lion-gold/15 shadow-[0_2px_8px_rgba(22,33,62,0.06)] md:shadow-[0_2px_12px_rgba(22,33,62,0.06)] hover:shadow-[0_8px 24px_rgba(22,33,62,0.1)] md:hover:shadow-[0_12px_32px_rgba(22,33,62,0.12)] hover:border-lion-gold/35 transition-all duration-300 overflow-hidden min-h-[72px] md:min-h-0 active:scale-[0.98]"
              style={{
                transitionDelay: inView ? `${i * 60}ms` : "0ms",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
              }}
            >
              <span className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-lion-gold/80 to-lion-gold/40 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 hidden md:block" />
              <span className="flex h-11 w-11 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-xl bg-lion-gold/10 text-xl md:text-2xl group-hover:bg-lion-gold/20 transition-colors duration-300">
                {productIcons[slug]}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm md:text-lg font-semibold text-lion-navy group-hover:text-lion-gold transition-colors duration-200 md:mb-2">
                  {productTitles[slug][lang]}
                </h3>
                <p className="hidden md:block text-sm text-lion-dark/75 line-clamp-2 mb-4">
                  {productDescriptions[slug][lang].slice(0, 100)}…
                </p>
                <span className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium text-lion-gold">
                  {learnMore[lang]}
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
