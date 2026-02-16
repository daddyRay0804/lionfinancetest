"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "./Logo";
import type { Lang } from "@/lib/i18n";

type HeaderProps = {
  lang: Lang;
  nav: Record<string, string>;
  productSlugs: readonly string[];
  productTitles: Record<string, string>;
};

export function Header({ lang, nav, productSlugs, productTitles }: HeaderProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const base = `/${lang}`;
  const isActive = (path: string) => pathname === path || pathname.startsWith(path + "/");

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-lion-gold/20 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Logo lang={lang} />

        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          <Link
            href={base}
            className={`text-sm font-medium transition ${isActive(base) && base === pathname ? "text-lion-gold" : "text-lion-dark hover:text-lion-gold"}`}
          >
            {nav.home}
          </Link>
          <div className="relative group">
            <button
              type="button"
              className="text-sm font-medium text-lion-dark hover:text-lion-gold flex items-center gap-1"
              aria-expanded={productsOpen}
              aria-haspopup="true"
              onClick={() => setProductsOpen(!productsOpen)}
            >
              {nav.products}
              <span className="text-xs">▼</span>
            </button>
            {productsOpen && (
              <div
                className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-lion-gold/20 py-2 animate-fade-in"
                role="menu"
              >
                {productSlugs.map((slug) => (
                  <Link
                    key={slug}
                    href={`${base}/products/${slug}`}
                    className="block px-4 py-2 text-sm text-lion-dark hover:bg-lion-cream hover:text-lion-gold"
                    role="menuitem"
                    onClick={() => setProductsOpen(false)}
                  >
                    {productTitles[slug]}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            href={`${base}/about`}
            className={`text-sm font-medium transition ${isActive(`${base}/about`) ? "text-lion-gold" : "text-lion-dark hover:text-lion-gold"}`}
          >
            {nav.about}
          </Link>
          <Link
            href={`${base}/team`}
            className={`text-sm font-medium transition ${isActive(`${base}/team`) ? "text-lion-gold" : "text-lion-dark hover:text-lion-gold"}`}
          >
            {nav.team}
          </Link>
          <Link
            href={`${base}/faq`}
            className={`text-sm font-medium transition ${isActive(`${base}/faq`) ? "text-lion-gold" : "text-lion-dark hover:text-lion-gold"}`}
          >
            {nav.faq}
          </Link>
          <Link
            href={`${base}#contact`}
            className="text-sm font-medium text-lion-dark hover:text-lion-gold"
          >
            {nav.contact}
          </Link>
          <LanguageSwitcher currentLang={lang} />
        </nav>

        <button
          type="button"
          className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center p-3 -m-1 text-lion-dark touch-manipulation"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-lion-gold/20 bg-white py-2 px-4 pb-6 animate-fade-in">
          <div className="flex flex-col">
            <Link href={base} className="min-h-[44px] flex items-center text-sm font-medium py-2 touch-manipulation" onClick={() => setMenuOpen(false)}>
              {nav.home}
            </Link>
            <span className="text-sm font-medium text-lion-gold pt-3 pb-1">{nav.products}</span>
            {productSlugs.map((slug) => (
              <Link
                key={slug}
                href={`${base}/products/${slug}`}
                className="min-h-[44px] flex items-center text-sm pl-4 py-2 touch-manipulation"
                onClick={() => setMenuOpen(false)}
              >
                {productTitles[slug]}
              </Link>
            ))}
            <Link href={`${base}/about`} className="min-h-[44px] flex items-center text-sm font-medium py-2 touch-manipulation" onClick={() => setMenuOpen(false)}>
              {nav.about}
            </Link>
            <Link href={`${base}/team`} className="min-h-[44px] flex items-center text-sm font-medium py-2 touch-manipulation" onClick={() => setMenuOpen(false)}>
              {nav.team}
            </Link>
            <Link href={`${base}/faq`} className="min-h-[44px] flex items-center text-sm font-medium py-2 touch-manipulation" onClick={() => setMenuOpen(false)}>
              {nav.faq}
            </Link>
            <Link href={`${base}#contact`} className="min-h-[44px] flex items-center text-sm font-medium py-2 touch-manipulation" onClick={() => setMenuOpen(false)}>
              {nav.contact}
            </Link>
            <div className="pt-4">
              <LanguageSwitcher currentLang={lang} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
