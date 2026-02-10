"use client";

import Link from "next/link";
import Image from "next/image";
import type { Lang } from "@/lib/i18n";

type LogoProps = { lang: Lang; className?: string };

export function Logo({ lang, className = "" }: LogoProps) {
  const base = `/${lang}`;

  return (
    <Link
      href={base}
      className={`inline-flex items-center gap-2 sm:gap-3 shrink-0 no-underline hover:opacity-90 transition-opacity ${className}`}
      aria-label="Lion Finance - Home"
    >
      <Image
        src="/logo.png"
        alt=""
        width={160}
        height={52}
        className="h-auto w-auto max-h-12 sm:max-h-14 object-contain object-left"
        priority
      />
      <span className="hidden sm:block text-left">
        <span className="block font-bold text-lion-navy text-base sm:text-lg leading-tight">Lion Finance</span>
        <span className="block text-xs text-lion-dark/80 leading-tight">Your prosperity, our priority</span>
      </span>
    </Link>
  );
}
