import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { blogPosts } from "@/data/blog";
import { blogLabels } from "@/data/blog/types";
import { BlogCard, toBlogCard } from "./BlogCard";

export function BlogPreview({ lang }: { lang: Lang }) {
  const labels = blogLabels[lang];
  return <section className="blog-surface px-4 sm:px-6 py-14 sm:py-20 bg-neutral-50 border-t border-neutral-200">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">{labels.latest}</h2>
        <Link href={`/${lang}/blog`} className="inline-flex min-h-[44px] items-center gap-2 font-medium text-emerald-800 hover:underline">{labels.browse}<ArrowRight size={18} aria-hidden="true" /></Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">{blogPosts.slice(0, 3).map(post => <BlogCard key={post.slug} post={toBlogCard(post, lang)} lang={lang} />)}</div>
    </div>
  </section>;
}
