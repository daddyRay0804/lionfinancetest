"use client";

import { useState } from "react";
import type { Lang } from "@/lib/i18n";

type FAQAccordionProps = { items: Array<{ q: string; a: string }>; lang: Lang };

export function FAQAccordion({ items, lang }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<number | null>(0);

  return (
    <div className="space-y-2" role="region" aria-label="FAQ">
      {items.map((item, i) => (
        <div
          key={i}
          className="border border-lion-gold/20 rounded-lg overflow-hidden bg-white"
        >
          <button
            type="button"
            onClick={() => setOpenId(openId === i ? null : i)}
            className="w-full min-h-[48px] px-4 py-4 text-left font-medium text-lion-navy hover:bg-lion-cream active:bg-lion-cream flex justify-between items-center gap-2 touch-manipulation"
            aria-expanded={openId === i}
            aria-controls={`faq-answer-${i}`}
            id={`faq-question-${i}`}
          >
            {item.q}
            <span className="text-lion-gold shrink-0" aria-hidden>
              {openId === i ? "−" : "+"}
            </span>
          </button>
          <div
            id={`faq-answer-${i}`}
            role="region"
            aria-labelledby={`faq-question-${i}`}
            className={`overflow-hidden transition-all duration-200 ${
              openId === i ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="px-4 py-3 bg-lion-cream/50 text-lion-dark/90 text-sm border-t border-lion-gold/10">
              {item.a}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
