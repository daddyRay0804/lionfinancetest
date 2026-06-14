import type { MetadataRoute } from "next";

const BASE = "https://lionfinance.co.nz";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/login/"],
    },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
