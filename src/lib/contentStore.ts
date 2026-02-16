import fs from "fs";
import path from "path";
import type { Lang } from "@/lib/i18n";

// Fallback to existing in-code data to keep the site stable while content files bootstrap.
import {
  siteName as siteNameFallback,
  siteTagline as siteTaglineFallback,
  nav as navFallback,
  contactAddress as contactAddressFallback,
  contactEmail as contactEmailFallback,
  footerLegalSlugs,
  footerLegal as footerLegalFallback,
  footerLegalShort as footerLegalShortFallback,
  productSlugs,
  productTitles as productTitlesFallback,
  productDescriptions as productDescriptionsFallback,
} from "@/data/content";
import { aboutContent as aboutFallback } from "@/data/about";
import { faqList as faqFallback } from "@/data/faq";
import { teamMembers as teamFallback } from "@/data/team";
import { testimonialsList as testimonialsFallback } from "@/data/testimonials";
import {
  disclosureSubtitle as disclosureSubtitleFallback,
  disclosureSections as disclosureSectionsFallback,
} from "@/data/legal/disclosure";
import { complaintsIntro as complaintsIntroFallback, complaintsSteps as complaintsStepsFallback } from "@/data/legal/complaints";

export type LocalizedSiteText = {
  siteName: string;
  siteTagline: string;
  nav: Record<string, string>;
  contactAddress: string;
  contactEmail: string;
  footerLegal: Record<string, string>;
  footerLegalShort: Record<string, string>;
  productTitles: Record<string, string>;
  productDescriptions: Record<string, string>;
};

export type LocalizedContentBundle = {
  lang: Lang;
  site: LocalizedSiteText;
  about: { title: string; h2: string; paragraphs: string[] };
  faq: Array<{ q: string; a: string }>;
  team: Array<{
    id: string;
    name: string;
    title: string;
    bio: string;
    fspNumber?: string;
    phone?: string;
    email?: string;
    image?: string;
  }>;
  testimonials: Array<{ name: string; role: string; location: string; text: string; rating: number }>;
  legal: {
    disclosureSubtitle: string;
    disclosureSections: Array<{
      title: string;
      blocks: Array<
        | { type: "p"; text: string }
        | { type: "subhead"; text: string }
        | { type: "ul"; items: string[] }
      >;
    }>;
    complaintsIntro: string[];
    complaintsSteps: Array<{ title: string; content: string[] }>;
  };
  termsMarkdown: string;
};

const CONTENT_ROOT = path.join(process.cwd(), "content");

type JsonBlockResult = { json: unknown } | { error: string };

function extractFirstJsonCodeBlock(md: string): JsonBlockResult {
  const fence = "```json";
  const start = md.indexOf(fence);
  if (start === -1) return { error: "No ```json fenced block found" };
  const after = md.indexOf("\n", start);
  const end = md.indexOf("```", after + 1);
  if (after === -1 || end === -1) return { error: "Malformed fenced block" };
  const jsonText = md.slice(after + 1, end).trim();
  try {
    return { json: JSON.parse(jsonText) };
  } catch (e: any) {
    return { error: `JSON parse error: ${e?.message ?? String(e)}` };
  }
}

function readTextIfExists(filePath: string) {
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch {
    return null;
  }
}

function readJsonMd<T>(lang: Lang, fileBase: string): T | null {
  const p = path.join(CONTENT_ROOT, lang, `${fileBase}.md`);
  const md = readTextIfExists(p);
  if (!md) return null;
  const res = extractFirstJsonCodeBlock(md);
  if ("error" in res) return null;
  return res.json as T;
}

function readPlainMd(lang: Lang, fileBase: string): string | null {
  const p = path.join(CONTENT_ROOT, lang, `${fileBase}.md`);
  return readTextIfExists(p);
}

function pickMap(map: Record<Lang, string>, lang: Lang) {
  return map[lang] ?? map.en;
}

export function getLocalizedContentBundle(lang: Lang): LocalizedContentBundle {
  // site (optional override via content/<lang>/site.md)
  const siteOverride = readJsonMd<Partial<any>>(lang, "site");
  const siteNameMap = (siteOverride?.siteName as Record<Lang, string>) ?? siteNameFallback;
  const siteTaglineMap = (siteOverride?.siteTagline as Record<Lang, string>) ?? siteTaglineFallback;
  const navMap = (siteOverride?.nav as Record<string, Record<Lang, string>>) ?? navFallback;
  const footerLegalMap = (siteOverride?.footerLegal as any) ?? footerLegalFallback;
  const footerLegalShortMap = (siteOverride?.footerLegalShort as any) ?? footerLegalShortFallback;
  const productTitlesMap = (siteOverride?.productTitles as any) ?? productTitlesFallback;
  const productDescriptionsMap = (siteOverride?.productDescriptions as any) ?? productDescriptionsFallback;

  // per-lang overrides
  const aboutObj = (readJsonMd<any>(lang, "about") ?? aboutFallback[lang]) as any;
  const faqArr = (readJsonMd<any>(lang, "faq") ?? faqFallback.map((x) => ({ q: x.q[lang], a: x.a[lang] }))) as any;
  const teamArr = (readJsonMd<any>(lang, "team") ?? teamFallback.map((m) => ({
    id: m.id,
    name: m.name,
    title: m.title[lang],
    bio: m.bio[lang],
    fspNumber: m.fspNumber,
    phone: m.phone,
    email: m.email,
    image: m.image,
  }))) as any;
  const testimonialsArr = (readJsonMd<any>(lang, "testimonials") ?? testimonialsFallback.map((t) => ({
    name: t.name,
    role: t.role[lang],
    location: t.location,
    text: t.text[lang],
    rating: t.rating,
  }))) as any;

  const disclosure = (readJsonMd<any>(lang, "legal-disclosure") ?? null) as any;
  const complaints = (readJsonMd<any>(lang, "legal-complaints") ?? null) as any;

  const legalDisclosureSubtitle = disclosure?.disclosureSubtitle ?? disclosureSubtitleFallback[lang];
  const legalDisclosureSections = disclosure?.disclosureSections ?? disclosureSectionsFallback.map((s) => ({
    title: s.title[lang],
    blocks: s.blocks.map((b: any) => {
      if (b.type === "p") return { type: "p", text: b.text[lang] };
      if (b.type === "subhead") return { type: "subhead", text: b.text[lang] };
      return { type: "ul", items: b.items[lang] };
    }),
  }));

  const legalComplaintsIntro = complaints?.complaintsIntro ?? complaintsIntroFallback[lang];
  const legalComplaintsSteps = complaints?.complaintsSteps ?? complaintsStepsFallback.map((step) => ({
    title: step[lang].title,
    content: step[lang].content,
  }));

  const termsMarkdown = readPlainMd(lang, "terms") ?? "";

  return {
    lang,
    site: {
      siteName: pickMap(siteNameMap, lang),
      siteTagline: pickMap(siteTaglineMap, lang),
      nav: Object.fromEntries(Object.entries(navMap).map(([k, v]) => [k, pickMap(v, lang)])),
      contactAddress: (siteOverride?.contactAddress as string) ?? contactAddressFallback,
      contactEmail: (siteOverride?.contactEmail as string) ?? contactEmailFallback,
      footerLegal: Object.fromEntries(Object.entries(footerLegalMap).map(([k, v]: any) => [k, pickMap(v, lang)])),
      footerLegalShort: Object.fromEntries(Object.entries(footerLegalShortMap).map(([k, v]: any) => [k, pickMap(v, lang)])),
      productTitles: Object.fromEntries(productSlugs.map((slug) => [slug, pickMap(productTitlesMap[slug], lang)])),
      productDescriptions: Object.fromEntries(productSlugs.map((slug) => [slug, pickMap(productDescriptionsMap[slug], lang)])),
    },
    about: aboutObj,
    faq: faqArr,
    team: teamArr,
    testimonials: testimonialsArr,
    legal: {
      disclosureSubtitle: legalDisclosureSubtitle,
      disclosureSections: legalDisclosureSections,
      complaintsIntro: legalComplaintsIntro,
      complaintsSteps: legalComplaintsSteps,
    },
    termsMarkdown,
  };
}

export const contentMeta = {
  footerLegalSlugs,
  productSlugs,
};
