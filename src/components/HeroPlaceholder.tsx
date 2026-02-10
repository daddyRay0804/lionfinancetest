"use client";

/**
 * Hero 图片占位：后续替换为正式 Hero 图（新西兰房产/家庭/信任感场景）
 * 使用方式：将 hero 图放入 public/hero.jpg（或 .webp），在首页改用 next/image 引用并替换本组件
 */
export function HeroImagePlaceholder() {
  return (
    <div
      className="absolute inset-0 z-0 flex items-center justify-center bg-lion-navy/95"
      aria-hidden
    >
      {/* 占位：无图片时显示渐变+提示文字，不阻塞布局 */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-lion-navy via-lion-navy to-lion-gold/10"
        style={{ backgroundImage: "var(--hero-placeholder, none)" }}
      />
      <div className="relative z-10 text-center text-white/40 text-sm font-medium tracking-wide">
        [ Hero image placeholder — 请将 hero 图放入 public/hero.jpg ]
      </div>
    </div>
  );
}
