import type { Lang } from "@/lib/i18n";

export type BlogCategory = "buying" | "mortgage" | "property" | "business";
export type BlogCopy = { title: string; description: string; alt: string; body: string };
export type BlogPost = {
  slug: string;
  date: string;
  category: BlogCategory;
  image: string;
  service: string;
  related: string[];
  sources: { name: string; url: string }[];
  copy: Record<Lang, BlogCopy>;
};

export const blogLabels = {
  en: { nav: "Blog", title: "Mortgage & Finance Journal", intro: "Clear, practical guides for buying a home, managing your mortgage and financing your next step in New Zealand.", all: "All articles", search: "Search articles", empty: "No articles match your search.", reset: "Clear filters", results: "articles", read: "Read article", latest: "From the journal", browse: "Explore all articles", contents: "In this article", related: "Keep reading", sources: "Sources & further reading", service: "Explore this service", contact: "Talk to an adviser", next: "Your next step", author: "Written by", role: "Social Media & Advertising Specialist", note: "General information only, not personalised financial, legal or tax advice. Lending criteria, fees and terms apply and can change. Discuss your circumstances with an appropriately qualified adviser before making a decision.", illustration: "AI-generated editorial illustration; not a client property or case study.", categories: { buying: "First-home buying", mortgage: "Managing your mortgage", property: "Property & building", business: "Business finance" } },
  zh: { nav: "贷款专栏", title: "房贷与融资专栏", intro: "从首次购房到房贷管理、投资与商业融资，为您提供清晰、实用的新西兰贷款知识。", all: "全部文章", search: "搜索文章", empty: "没有找到匹配的文章。", reset: "清除筛选", results: "篇文章", read: "阅读全文", latest: "最新专栏", browse: "查看全部文章", contents: "文章目录", related: "延伸阅读", sources: "参考资料", service: "了解相关服务", contact: "咨询贷款顾问", next: "规划下一步", author: "作者", role: "社交媒体与广告专员", note: "本文仅提供一般性信息，不构成针对个人的财务、法律或税务建议。贷款审批标准、费用及条款可能变化。作出决定前，请向具备相应资质的专业人士咨询。", illustration: "AI 生成的编辑配图，并非客户房产或真实案例。", categories: { buying: "首次购房", mortgage: "房贷管理", property: "房产与建筑", business: "商业融资" } },
  kr: { nav: "블로그", title: "모기지 & 금융 저널", intro: "뉴질랜드 첫 주택 구매부터 대출 관리, 부동산과 사업 자금까지 알아보는 실용적인 가이드입니다.", all: "전체 글", search: "글 검색", empty: "검색 조건에 맞는 글이 없습니다.", reset: "필터 초기화", results: "개의 글", read: "글 읽기", latest: "최신 금융 가이드", browse: "전체 글 보기", contents: "이 글의 목차", related: "함께 읽기", sources: "출처 및 참고 자료", service: "관련 서비스 보기", contact: "대출 상담하기", next: "다음 단계 준비", author: "작성자", role: "소셜 미디어 및 광고 전문가", note: "일반적인 정보이며 개인별 금융, 법률 또는 세무 자문이 아닙니다. 대출 심사 기준, 수수료 및 조건은 적용되며 변경될 수 있습니다. 결정 전 적절한 자격을 갖춘 전문가에게 상담하세요.", illustration: "AI로 생성한 편집용 이미지이며 실제 고객의 부동산이나 사례가 아닙니다.", categories: { buying: "첫 주택 구매", mortgage: "모기지 관리", property: "부동산 및 건축", business: "사업 자금" } },
} satisfies Record<Lang, unknown>;

export function formatBlogDate(date: string, lang: Lang) {
  return new Intl.DateTimeFormat({ en: "en-NZ", zh: "zh-CN", kr: "ko-KR" }[lang], { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }).format(new Date(`${date}T12:00:00Z`));
}
