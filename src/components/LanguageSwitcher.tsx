"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LANGUAGES, type Lang } from "@/lib/i18n";

type LanguageSwitcherProps = { currentLang: Lang };

export function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const pathname = usePathname();
  // pathname is like /en, /en/about, /zh/products/home-loans
  const pathWithoutLang = pathname.replace(/^\/(en|zh|kr)/, "") || "";
  const basePath = pathWithoutLang ? `/${pathWithoutLang}` : "";

  return (
    <div className="flex items-center gap-1" role="group" aria-label="Language">
      {LANGUAGES.map(({ code, label }) => (
        <Link
          key={code}
          href={basePath ? `/${code}${basePath}` : `/${code}`}
          className={`px-2 py-1 text-xs font-medium rounded transition ${
            code === currentLang
              ? "bg-lion-gold text-white"
              : "text-lion-dark hover:bg-lion-cream hover:text-lion-gold"
          }`}
          aria-current={code === currentLang ? "true" : undefined}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
