import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { blogLabels, formatBlogDate, type BlogPost, type BlogCopy } from "@/data/blog/types";

export type BlogCardData = Pick<BlogPost, "slug" | "date" | "category" | "image"> & Pick<BlogCopy, "title" | "description" | "alt">;

export function toBlogCard(post: BlogPost, lang: Lang): BlogCardData {
  const { slug, date, category, image } = post;
  const { title, description, alt } = post.copy[lang];
  return { slug, date, category, image, title, description, alt };
}

export function BlogCard({ post, lang, priority = false }: { post: BlogCardData; lang: Lang; priority?: boolean }) {
  const labels = blogLabels[lang];
  return (
    <article className="blog-card min-w-0 flex flex-col border border-neutral-200 rounded-lg overflow-hidden bg-white">
      <Link href={`/${lang}/blog/${post.slug}`} className="group flex flex-col h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-800">
        <div className="relative aspect-[3/2] overflow-hidden bg-neutral-100">
          <Image src={`/blog/${post.image}.webp`} alt={post.alt} fill priority={priority} sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) 46vw, 352px" className="object-cover motion-safe:transition-transform motion-safe:duration-300 group-hover:scale-[1.025]" />
        </div>
        <div className="p-5 flex flex-col grow gap-3">
          <span className="text-xs font-semibold text-emerald-800">{labels.categories[post.category]}</span>
          <h3 className="text-xl font-semibold leading-snug text-neutral-900 group-hover:text-emerald-800">{post.title}</h3>
          <p className="text-sm leading-relaxed text-neutral-600">{post.description}</p>
          <div className="mt-auto pt-4 border-t border-neutral-100 flex items-end justify-between gap-3 text-xs text-neutral-600">
            <div className="flex flex-col gap-1"><span>Eric Huang</span><time dateTime={post.date}>{formatBlogDate(post.date, lang)}</time></div>
            <ArrowUpRight size={20} className="shrink-0 text-emerald-800" aria-hidden="true" />
          </div>
        </div>
      </Link>
    </article>
  );
}
