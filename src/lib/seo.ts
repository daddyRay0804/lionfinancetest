import type { Metadata } from "next";
import type { Lang } from "@/lib/i18n";

export const BASE_URL = "https://lionfinance.co.nz";

/**
 * Build canonical + hreflang alternates for the current page.
 *
 * path examples:
 * - "" (home)
 * - "/about"
 * - "/products/home-loans"
 */
export function makeAlternates(lang: Lang, path: string): Metadata["alternates"] {
  const safePath = path.startsWith("/") || path === "" ? path : `/${path}`;
  const canonical = `${BASE_URL}/${lang}${safePath}`;
  return {
    canonical,
    languages: {
      en: `${BASE_URL}/en${safePath}`,
      zh: `${BASE_URL}/zh${safePath}`,
      kr: `${BASE_URL}/kr${safePath}`,
      "x-default": `${BASE_URL}/en${safePath}`,
    },
  };
}
