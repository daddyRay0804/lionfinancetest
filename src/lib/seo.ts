import type { Metadata } from "next";
import type { Lang } from "@/lib/i18n";

export const BASE_URL = "https://lionfinance.co.nz";

const ALL_LANGS: Lang[] = ["en", "zh", "kr"];

type AlternatesOptions = {
  /** Languages that should appear in hreflang. Defaults to all. */
  indexableLangs?: Lang[];
};

/**
 * Build canonical + hreflang alternates for the current page.
 *
 * path examples:
 * - "" (home)
 * - "/about"
 * - "/products/home-loans"
 */
export function makeAlternates(
  lang: Lang,
  path: string,
  options?: AlternatesOptions,
): Metadata["alternates"] {
  const safePath = path.startsWith("/") || path === "" ? path : `/${path}`;
  const canonical = `${BASE_URL}/${lang}${safePath}`;
  const indexable = options?.indexableLangs ?? ALL_LANGS;

  const languages: Record<string, string> = {};
  for (const l of indexable) {
    languages[l === "kr" ? "ko" : l] = `${BASE_URL}/${l}${safePath}`;
  }
  if (indexable.includes("en")) {
    languages["x-default"] = `${BASE_URL}/en${safePath}`;
  }

  return { canonical, languages };
}

/** Legal pages where only English body content exists — keep zh/kr noindex. */
export const ENGLISH_ONLY_LEGAL_LANGS: Lang[] = ["en"];

/** Legal pages with full zh/kr localization — all languages indexable. */
export const LOCALIZED_LEGAL_LANGS: Lang[] = ALL_LANGS;

export function makeSocialMetadata(lang: Lang, path: string, title: string, description: string, image = "/hero.png"): Pick<Metadata, "openGraph" | "twitter"> {
  const locale = { en: "en_NZ", zh: "zh_CN", kr: "ko_KR" };
  const fullTitle = title.includes("Lion Finance") ? title : `${title} | Lion Finance`;
  return {
    openGraph: {
      type: "website", siteName: "Lion Finance",
      url: `${BASE_URL}/${lang}${path}`,
      locale: locale[lang],
      alternateLocale: ALL_LANGS.filter((l) => l !== lang).map((l) => locale[l]),
      title: fullTitle, description, images: [{ url: image, alt: fullTitle }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [image] },
  };
}

export function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
