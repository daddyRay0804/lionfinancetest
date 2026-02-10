import type { Lang } from "@/lib/i18n";

export type TestimonialItem = {
  name: string;
  role: Record<Lang, string>;
  location: string;
  text: Record<Lang, string>;
  rating: number;
};

export const testimonialsList: TestimonialItem[] = [
  {
    name: "Sarah M.",
    role: { en: "First-home buyer", zh: "首套房买家", kr: "첫 집 구매자" },
    location: "Auckland",
    text: {
      en: "Lion Finance made our first home purchase stress-free. They found us a great rate and explained every step clearly. Highly recommend!",
      zh: "Lion Finance 让我们的首次购房轻松顺利，帮我们争取到很好的利率并清楚解释每一步。强烈推荐！",
      kr: "Lion Finance 덕분에 첫 집 구매가 스트레스 없이 진행됐어요. 좋은 금리를 찾아주시고 모든 단계를 명확히 설명해 주셨습니다. 강력 추천합니다!",
    },
    rating: 5,
  },
  {
    name: "James L.",
    role: { en: "Business owner", zh: "企业主", kr: "사업주" },
    location: "Wellington",
    text: {
      en: "We needed commercial finance for our expansion. The team understood our business and secured terms that suited our cash flow. Professional and responsive.",
      zh: "我们扩张需要商业融资。团队懂我们的业务并争取到适合现金流的条款，专业且响应及时。",
      kr: "확장을 위해 상업용 금융이 필요했는데, 팀이 우리 비즈니스를 이해하고 현금 흐름에 맞는 조건을 확보해 주었어요. 전문적이고 반응이 빨라요.",
    },
    rating: 5,
  },
  {
    name: "Emma & David K.",
    role: { en: "Refinance clients", zh: "再融资客户", kr: "재융자 고객" },
    location: "Christchurch",
    text: {
      en: "Refinancing through Lion Finance saved us over $400 a month. The process was smooth and we felt well looked after from start to finish.",
      zh: "通过 Lion Finance 再融资每月为我们省下超过 400 纽币，流程顺畅，从头到尾都得到很好的照顾。",
      kr: "Lion Finance를 통한 재융자로 매월 400달러 이상 절약했어요. 절차가 순조로웠고 처음부터 끝까지 잘 케어받는 느낌이었습니다.",
    },
    rating: 5,
  },
];
