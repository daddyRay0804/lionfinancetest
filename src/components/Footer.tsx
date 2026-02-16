import Link from "next/link";
import Image from "next/image";
import type { Lang } from "@/lib/i18n";

type FooterProps = {
  lang: Lang;
  nav: Record<string, string>;
  productSlugs: readonly string[];
  productTitles: Record<string, string>;
  siteName: string;
  siteTagline: string;
  contactAddress: string;
  contactEmail: string;
  footerLegalSlugs: readonly string[];
  footerLegal: Record<string, string>;
};

export function Footer({ lang, nav, productSlugs, productTitles, siteName, siteTagline, contactAddress, contactEmail, footerLegalSlugs, footerLegal }: FooterProps) {
  const base = `/${lang}`;

  return (
    <footer className="bg-lion-navy text-white mt-auto" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-8">
          <div>
            <Link href={base} className="inline-block mb-3">
              <Image
                src="/logo.png"
                alt="Lion Finance - Your Prosperity, Our Priority"
                width={140}
                height={46}
                className="h-10 w-auto object-contain object-left opacity-95"
              />
            </Link>
            <p className="text-sm text-white/80">{siteTagline}</p>
            <p className="text-xs text-white/60 mt-2 leading-relaxed">
              {contactAddress}
            </p>
            <p className="text-xs text-white/60 mt-1">
              <a href={`mailto:${contactEmail}`} className="hover:text-lion-gold transition">{contactEmail}</a>
            </p>
            <p className="text-xs text-white/50 mt-1">Licensed Broker • New Zealand</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-lion-gold mb-3">{nav.products}</h3>
            <ul className="space-y-0">
              {productSlugs.map((slug) => (
                <li key={slug}>
                  <Link
                    href={`${base}/products/${slug}`}
                    className="inline-block py-2.5 text-sm text-white/80 hover:text-lion-gold transition touch-manipulation"
                  >
                    {productTitles[slug]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-lion-gold mb-3">{nav.contact}</h3>
            <ul className="space-y-0 text-sm text-white/80">
              <li>
                <Link href={`${base}/about`} className="inline-block py-2.5 hover:text-lion-gold transition touch-manipulation">
                  {nav.about}
                </Link>
              </li>
              <li>
                <Link href={`${base}/team`} className="inline-block py-2.5 hover:text-lion-gold transition touch-manipulation">
                  {nav.team}
                </Link>
              </li>
              <li>
                <Link href={`${base}/faq`} className="inline-block py-2.5 hover:text-lion-gold transition touch-manipulation">
                  {nav.faq}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-lion-gold mb-3">Legal</h3>
            <ul className="space-y-0 text-sm text-white/80">
              {footerLegalSlugs.map((slug) => (
                <li key={slug}>
                  <Link
                    href={`${base}/${slug}`}
                    className="inline-block py-2.5 hover:text-lion-gold transition touch-manipulation"
                  >
                    {footerLegal[slug]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-xs text-white/60">
          <p>© {new Date().getFullYear()} Lion Finance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
