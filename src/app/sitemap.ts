import type { MetadataRoute } from "next";
import { productSlugs, footerLegalSlugs } from "@/data/content";

const BASE = "https://lionfinance.co.nz";

export default function sitemap(): MetadataRoute.Sitemap {
  const langs = ["en", "zh", "kr"] as const;
  const staticPaths = ["", "/about", "/team", "/faq"] as const;
  const legalPaths = footerLegalSlugs.map((s) => `/${s}`);
  const entries: MetadataRoute.Sitemap = [];

  for (const lang of langs) {
    entries.push({
      url: `${BASE}/${lang}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    });
    for (const path of staticPaths) {
      if (!path) continue;
      entries.push({
        url: `${BASE}/${lang}${path}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
    for (const path of legalPaths) {
      entries.push({
        url: `${BASE}/${lang}${path}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.5,
      });
    }
    for (const slug of productSlugs) {
      entries.push({
        url: `${BASE}/${lang}/products/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
      });
    }
  }

  return entries;
}
