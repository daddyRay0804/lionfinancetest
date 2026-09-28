import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isValidLang } from "@/lib/i18n";
import { blogPosts } from "@/data/blog";
import { blogLabels } from "@/data/blog/types";
import { BASE_URL, makeAlternates, makeSocialMetadata, serializeJsonLd } from "@/lib/seo";
import { BlogIndex } from "@/components/blog/BlogIndex";
import { toBlogCard } from "@/components/blog/BlogCard";

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  if (!isValidLang(params.lang)) notFound();
  const lang = params.lang;
  const labels = blogLabels[lang];
  return { title: labels.title, description: labels.intro, alternates: makeAlternates(lang, "/blog"), ...makeSocialMetadata(lang, "/blog", labels.title, labels.intro, "/blog/first-home.webp") };
}

export default function BlogPage({ params }: { params: { lang: string } }) {
  if (!isValidLang(params.lang)) notFound();
  const lang = params.lang;
  const labels = blogLabels[lang];
  const schema = { "@context": "https://schema.org", "@type": "CollectionPage", name: labels.title, url: `${BASE_URL}/${lang}/blog`, inLanguage: { en: "en-NZ", zh: "zh-CN", kr: "ko-KR" }[lang], mainEntity: { "@type": "ItemList", itemListElement: blogPosts.map((post, index) => ({ "@type": "ListItem", position: index + 1, name: post.copy[lang].title, url: `${BASE_URL}/${lang}/blog/${post.slug}` })) } };
  return <div className="blog-surface max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-16">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }} />
    <header className="max-w-3xl mb-8 sm:mb-12">
      <p className="text-sm font-semibold text-emerald-800 mb-3">Lion Finance / {labels.nav}</p>
      <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-neutral-900 mb-5">{labels.title}</h1>
      <p className="text-base sm:text-lg leading-relaxed text-neutral-600">{labels.intro}</p>
    </header>
    <BlogIndex posts={blogPosts.map(post => toBlogCard(post, lang))} lang={lang} />
  </div>;
}
