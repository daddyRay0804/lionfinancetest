"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";
import { BlogCard, type BlogCardData } from "./BlogCard";
import { blogLabels, type BlogCategory } from "@/data/blog/types";
import type { Lang } from "@/lib/i18n";

export function BlogIndex({ posts, lang }: { posts: BlogCardData[]; lang: Lang }) {
  const [category, setCategory] = useState<BlogCategory | "all">("all");
  const [query, setQuery] = useState("");
  const labels = blogLabels[lang];
  const term = query.trim().normalize("NFKC").toLocaleLowerCase();
  const filtered = posts.filter((post) => (category === "all" || post.category === category) && `${post.title} ${post.description} ${labels.categories[post.category]}`.normalize("NFKC").toLocaleLowerCase().includes(term));
  const reset = () => { setCategory("all"); setQuery(""); };

  return (
    <section aria-label={labels.all}>
      <h2 className="sr-only">{labels.all}</h2>
      <div className="flex flex-col gap-5 border-y border-neutral-200 py-5 mb-6">
        <div className="relative w-full sm:max-w-md">
          <Search size={18} className="absolute left-3 top-3.5 text-neutral-500" aria-hidden="true" />
          <label htmlFor="blog-search" className="sr-only">{labels.search}</label>
          <input id="blog-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={labels.search} className="w-full min-h-[44px] rounded-md border border-neutral-300 pl-10 pr-12 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-emerald-700" />
          {query && <button type="button" onClick={() => setQuery("")} aria-label={labels.reset} title={labels.reset} className="absolute right-0 top-0 h-11 w-11 flex items-center justify-center text-neutral-600"><X size={18} /></button>}
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label={labels.all}>
          {(["all", ...Object.keys(labels.categories)] as (BlogCategory | "all")[]).map((key) => <button key={key} type="button" aria-pressed={category === key} onClick={() => setCategory(key)} className={`min-h-[44px] px-4 py-2 text-sm rounded-md border transition-colors ${category === key ? "bg-emerald-900 border-emerald-900 text-white" : "bg-white border-neutral-300 text-neutral-700 hover:border-emerald-700"}`}>{key === "all" ? labels.all : labels.categories[key]}</button>)}
        </div>
      </div>
      <p className="text-sm text-neutral-600 mb-6" role="status" aria-live="polite">{filtered.length} {labels.results}</p>
      {filtered.length ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">{filtered.map((post, index) => <BlogCard key={post.slug} post={post} lang={lang} priority={index === 0} />)}</div> : <div className="py-16 text-center"><p className="text-neutral-700 mb-4">{labels.empty}</p><button type="button" onClick={reset} className="min-h-[44px] rounded-md px-5 py-2 border border-emerald-800 text-emerald-900">{labels.reset}</button></div>}
    </section>
  );
}
