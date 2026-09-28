"use client";

import { usePathname } from "next/navigation";
import { LANGUAGES, type Lang } from "@/lib/i18n";

type LanguageSwitcherProps = { currentLang: Lang };

export function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const pathname = usePathname();
  // pathname is like /en, /en/about, /zh/products/home-loans
  const basePath = pathname.replace(/^\/(en|zh|kr)(?=\/|$)/, "");

  return (
    <div className="flex items-center gap-1" role="group" aria-label="Language">
      {LANGUAGES.map(({ code, label }) => (
        // Reload the document so the root html language matches the new locale.
        <a
          key={code}
          href={basePath ? `/${code}${basePath}` : `/${code}`}
          className={`inline-flex min-h-[44px] items-center px-2 py-1 text-xs font-medium rounded transition ${
            code === currentLang
              ? "bg-lion-navy text-white"
              : "text-lion-dark hover:bg-lion-cream hover:text-lion-gold"
          }`}
          aria-current={code === currentLang ? "true" : undefined}
        >
          {label}
        </a>
      ))}
    </div>
  );
}
