import type { MetadataRoute } from "next";
import { productSlugs, footerLegalSlugs } from "@/data/content";
import { makeAlternates } from "@/lib/seo";

const BASE = "https://lionfinance.co.nz";
const LANGS = ["en", "zh", "kr"] as const;

/** Legal pages with English-only body — only include English in sitemap. */
const ENGLISH_ONLY_LEGAL = new Set(["terms"]);

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/about", "/team", "/faq"] as const;
  const legalPaths = footerLegalSlugs.map((s) => `/${s}`);
  const entries: MetadataRoute.Sitemap = [];

  for (const lang of LANGS) {
    entries.push({
      url: `${BASE}/${lang}`,
      alternates: { languages: makeAlternates(lang, "")!.languages as Record<string, string> },
      changeFrequency: "weekly",
      priority: 1,
    });
    for (const path of staticPaths) {
      if (!path) continue;
      entries.push({
        url: `${BASE}/${lang}${path}`,
        alternates: { languages: makeAlternates(lang, path)!.languages as Record<string, string> },
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
    for (const path of legalPaths) {
      const slug = path.slice(1);
      if (ENGLISH_ONLY_LEGAL.has(slug) && lang !== "en") continue;
      entries.push({
        url: `${BASE}/${lang}${path}`,
        alternates: { languages: makeAlternates(lang, path, { indexableLangs: ENGLISH_ONLY_LEGAL.has(slug) ? ["en"] : [...LANGS] })!.languages as Record<string, string> },
        changeFrequency: "monthly",
        priority: 0.5,
      });
    }
    for (const slug of productSlugs) {
      entries.push({
        url: `${BASE}/${lang}/products/${slug}`,
        alternates: { languages: makeAlternates(lang, `/products/${slug}`)!.languages as Record<string, string> },
        changeFrequency: "monthly",
        priority: 0.9,
      });
    }
  }

  return entries;
}
