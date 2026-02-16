"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import type { Lang } from "@/lib/i18n";

type Props = {
  items: Array<{ name: string; role: string; location: string; text: string; rating: number }>;
  lang: Lang;
};

export function TestimonialsCarousel({ items, lang }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  /* 拖拽状态 */
  const dragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardW = 360;
    el.scrollBy({ left: dir === "left" ? -cardW : cardW, behavior: "smooth" });
  };

  /* 鼠标拖拽 */
  const onMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    dragging.current = true;
    startX.current = e.pageX - el.offsetLeft;
    scrollLeft.current = el.scrollLeft;
    el.style.cursor = "grabbing";
    el.style.userSelect = "none";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current) return;
    const el = scrollRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    el.scrollLeft = scrollLeft.current - walk;
  };

  const onMouseUp = () => {
    dragging.current = false;
    const el = scrollRef.current;
    if (el) {
      el.style.cursor = "grab";
      el.style.userSelect = "";
    }
  };

  return (
    <div className="relative max-w-6xl mx-auto group">
      {/* 左箭头 */}
      {canLeft && (
        <button
          type="button"
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/90 border border-lion-gold/30 shadow-lg text-lion-navy hover:bg-lion-gold hover:text-white transition touch-manipulation"
          aria-label="Previous"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* 右箭头 */}
      {canRight && (
        <button
          type="button"
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/90 border border-lion-gold/30 shadow-lg text-lion-navy hover:bg-lion-gold hover:text-white transition touch-manipulation"
          aria-label="Next"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* 滑动容器 */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 sm:px-6 pb-4 no-scrollbar cursor-grab"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        {items.map((t) => (
          <blockquote
            key={t.name}
            className="snap-start shrink-0 w-[300px] sm:w-[340px] p-5 sm:p-6 bg-white rounded-xl border border-lion-gold/20 border-l-4 border-l-lion-gold flex flex-col justify-between shadow-card select-none"
          >
            <p className="text-lion-dark mb-4 text-sm leading-relaxed">&ldquo;{t.text}&rdquo;</p>
            <div>
              <footer className="text-sm text-lion-navy font-semibold">
                {t.name}
              </footer>
              <p className="text-xs text-lion-dark/60 mt-0.5">
                {t.role} · {t.location}
              </p>
              <div className="mt-2 text-lion-gold text-sm" aria-hidden>
                {"★".repeat(t.rating)}
              </div>
            </div>
          </blockquote>
        ))}
      </div>
    </div>
  );
}
