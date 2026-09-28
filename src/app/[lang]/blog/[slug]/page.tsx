import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { isValidLang } from "@/lib/i18n";
import { blogPosts, getBlogPost } from "@/data/blog";
import { blogLabels, formatBlogDate } from "@/data/blog/types";
import { BASE_URL, makeAlternates, makeSocialMetadata, serializeJsonLd } from "@/lib/seo";
import { BlogCard, toBlogCard } from "@/components/blog/BlogCard";

type Props = { params: { lang: string; slug: string } };
export function generateStaticParams() { return blogPosts.map(post => ({ slug: post.slug })); }

export function generateMetadata({ params }: Props): Metadata {
  if (!isValidLang(params.lang)) notFound();
  const post = getBlogPost(params.slug);
  if (!post) notFound();
  const lang = params.lang;
  const copy = post.copy[lang];
  const path = `/blog/${post.slug}`;
  const social = makeSocialMetadata(lang, path, copy.title, copy.description, `/blog/${post.image}.webp`);
  return { title: copy.title, description: copy.description, authors: [{ name: "Eric Huang", url: `${BASE_URL}/${lang}/team#eric` }], alternates: makeAlternates(lang, path), ...social, openGraph: { ...social.openGraph, type: "article", publishedTime: post.date, authors: [`${BASE_URL}/${lang}/team#eric`], images: [{ url: `/blog/${post.image}.webp`, width: 1536, height: 1024, alt: copy.alt }] } };
}

export default function BlogArticle({ params }: Props) {
  if (!isValidLang(params.lang)) notFound();
  const post = getBlogPost(params.slug);
  if (!post) notFound();
  const lang = params.lang;
  const labels = blogLabels[lang];
  const copy = post.copy[lang];
  const url = `${BASE_URL}/${lang}/blog/${post.slug}`;
  const headings = copy.body.split("\n").filter(line => line.startsWith("## ")).map(line => line.slice(3));
  const schema = { "@context": "https://schema.org", "@type": "BlogPosting", "@id": `${url}#article`, mainEntityOfPage: url, headline: copy.title, description: copy.description, image: `${BASE_URL}/blog/${post.image}.webp`, datePublished: post.date, inLanguage: { en: "en-NZ", zh: "zh-CN", kr: "ko-KR" }[lang], author: { "@type": "Person", name: "Eric Huang", url: `${BASE_URL}/${lang}/team#eric`, jobTitle: labels.role }, publisher: { "@type": "Organization", "@id": `${BASE_URL}/#organization`, name: "Lion Finance", url: BASE_URL, logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.png` } }, articleSection: labels.categories[post.category] };
  const crumbs = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Lion Finance", item: `${BASE_URL}/${lang}` }, { "@type": "ListItem", position: 2, name: labels.nav, item: `${BASE_URL}/${lang}/blog` }, { "@type": "ListItem", position: 3, name: copy.title, item: url }] };
  return <article className="blog-surface">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(crumbs) }} />
    <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
      <Link href={`/${lang}/blog`} className="inline-flex min-h-[44px] items-center gap-2 text-sm text-emerald-800 hover:underline mb-6"><ArrowLeft size={16} aria-hidden="true" />{labels.nav}</Link>
      <p className="font-semibold text-sm text-emerald-800 mb-3">{labels.categories[post.category]}</p>
      <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-neutral-900 mb-5">{copy.title}</h1>
      <p className="text-lg leading-relaxed text-neutral-600 mb-6">{copy.description}</p>
      <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-600 mb-8">
        <Image src="/team/eric-huang.jpg" width={44} height={44} alt="Eric Huang" className="h-11 w-11 rounded-full object-cover object-top" />
        <div><p>{labels.author} <Link href={`/${lang}/team#eric`} rel="author" className="font-semibold text-neutral-900 hover:underline">Eric Huang</Link></p><time dateTime={post.date}>{formatBlogDate(post.date, lang)}</time></div>
      </div>
      <figure>
        <div className="relative aspect-[3/2] overflow-hidden rounded-lg bg-neutral-100"><Image src={`/blog/${post.image}.webp`} alt={copy.alt} fill priority sizes="(max-width: 895px) calc(100vw - 32px), 848px" className="object-cover" /></div>
        <figcaption className="text-xs leading-relaxed text-neutral-600 mt-2">{labels.illustration}</figcaption>
      </figure>
    </header>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-[220px_minmax(0,1fr)] gap-8 lg:gap-14">
      <aside className="min-w-0"><nav aria-label={labels.contents} className="lg:sticky lg:top-24 border-l-2 border-emerald-800 pl-4"><h2 className="font-semibold text-neutral-900 mb-3">{labels.contents}</h2><ol className="space-y-1">{headings.map((heading, index) => <li key={heading}><a href={`#section-${index + 1}`} className="block min-h-[44px] py-2 text-sm leading-relaxed text-neutral-600 hover:text-emerald-800 hover:underline">{heading}</a></li>)}</ol></nav></aside>
      <div className="min-w-0 max-w-[70ch]">
        <div className="blog-prose">
          <Markdown components={{ h2: ({ children }) => <h2 id={`section-${headings.indexOf(String(children)) + 1}`}>{children}</h2>, a: ({ href, children }) => href?.startsWith("/") ? <Link href={`/${lang}${href}`}>{children}</Link> : <a href={href}>{children}</a> }}>{copy.body}</Markdown>
        </div>
        <section className="mt-10 pt-6 border-t border-neutral-200"><h2 className="text-lg font-semibold mb-3">{labels.sources}</h2><ul className="space-y-3 text-sm">{post.sources.map(source => <li key={source.url}><a href={source.url} className="text-emerald-800 underline underline-offset-4 break-words">{source.name}</a></li>)}</ul></section>
        <p className="text-sm text-neutral-600 leading-relaxed mt-8 p-4 bg-neutral-50 border-l-2 border-neutral-300">{labels.note}</p>
        <section className="mt-10 py-8 border-y border-neutral-200"><h2 className="text-xl font-semibold mb-4">{labels.next}</h2><div className="flex flex-wrap gap-3"><Link href={`/${lang}/products/${post.service}`} className="min-h-[44px] rounded-md bg-emerald-900 px-5 py-3 text-sm font-semibold text-white inline-flex items-center gap-2">{labels.service}<ArrowRight size={16} aria-hidden="true" /></Link><Link href={`/${lang}#contact`} className="min-h-[44px] rounded-md border border-neutral-300 px-5 py-3 text-sm font-semibold text-neutral-800">{labels.contact}</Link></div></section>
      </div>
    </div>
    <section className="bg-neutral-50 border-t border-neutral-200 px-4 sm:px-6 py-12 sm:py-16"><div className="max-w-6xl mx-auto"><h2 className="text-2xl font-bold mb-8">{labels.related}</h2><div className="grid grid-cols-1 sm:grid-cols-2 gap-6">{post.related.map(slug => getBlogPost(slug)).filter((item): item is NonNullable<typeof item> => Boolean(item)).map(item => <BlogCard key={item.slug} post={toBlogCard(item, lang)} lang={lang} />)}</div></div></section>
  </article>;
}
