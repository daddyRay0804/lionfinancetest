import type { Lang } from "@/lib/i18n";

export type TestimonialItem = {
  name: string;
  role: Record<Lang, string>;
  location: string;
  text: Record<Lang, string>;
  rating: number;
};

// 控制是否在主页显示 testimonials
export const SHOW_TESTIMONIALS_ON_HOMEPAGE = false;

export const testimonialsList: TestimonialItem[] = [
  {
    name: "Sarah M.",
    role: { en: "First-home buyer", zh: "首套房买家", kr: "첫 집 구매자" },
    location: "Auckland",
    text: {
      en: "Lion Finance made our first home purchase stress-free. They found us a great rate and explained every step clearly. As first-home buyers, we had so many questions and they patiently answered each one. Highly recommend!",
      zh: "Lion Finance 让我们的首次购房轻松顺利，帮我们争取到很好的利率并清楚解释每一步。作为首购族，我们有很多问题，他们都耐心解答。强烈推荐！",
      kr: "Lion Finance 덕분에 첫 집 구매가 스트레스 없이 진행됐어요. 좋은 금리를 찾아주시고 모든 단계를 명확히 설명해 주셨습니다. 첫 구매자로서 질문이 많았는데 하나하나 친절히 답해 주셨어요. 강력 추천합니다!",
    },
    rating: 5,
  },
  {
    name: "James L.",
    role: { en: "Business owner", zh: "企业主", kr: "사업주" },
    location: "Wellington",
    text: {
      en: "We needed commercial finance for our expansion. The team understood our business and secured terms that suited our cash flow. Professional and responsive — they made a complex business loan feel straightforward.",
      zh: "我们扩张需要商业融资。团队懂我们的业务并争取到适合现金流的条款，专业且响应及时——让复杂的商业贷款变得简单明了。",
      kr: "확장을 위해 상업용 금융이 필요했는데, 팀이 우리 비즈니스를 이해하고 현금 흐름에 맞는 조건을 확보해 주었어요. 전문적이고 반응이 빨라서 복잡한 사업자 대출이 간단하게 느껴졌습니다.",
    },
    rating: 5,
  },
  {
    name: "Emma & David K.",
    role: { en: "Refinance clients", zh: "再融资客户", kr: "재융자 고객" },
    location: "Christchurch",
    text: {
      en: "Refinancing through Lion Finance saved us over $400 a month. The process was smooth and we felt well looked after from start to finish. They compared multiple lenders and found a deal our bank couldn't match.",
      zh: "通过 Lion Finance 再融资每月为我们省下超过 400 纽币，流程顺畅，从头到尾都得到很好的照顾。他们对比了多家贷款机构，找到了我们银行无法匹敌的方案。",
      kr: "Lion Finance를 통한 재융자로 매월 400달러 이상 절약했어요. 절차가 순조로웠고 처음부터 끝까지 잘 케어받는 느낌이었습니다. 여러 대출 기관을 비교해서 기존 은행이 따라올 수 없는 거래를 찾아주었어요.",
    },
    rating: 5,
  },
  {
    name: "Tony Z.",
    role: { en: "Property investor", zh: "房产投资者", kr: "부동산 투자자" },
    location: "Auckland",
    text: {
      en: "I've used Lion Finance for three investment property purchases now. They understand the investor mindset — loan structuring, LVR strategies, and cash flow planning. Their expertise gives them an edge that most brokers simply don't have.",
      zh: "我已经通过 Lion Finance 购买了三处投资物业。他们懂投资者的思路——贷款结构、LVR 策略和现金流规划。他们的专业知识让他们拥有大多数经纪无法比拟的优势。",
      kr: "Lion Finance를 통해 이미 투자용 부동산 3채를 구매했습니다. 대출 구조, LVR 전략, 현금 흐름 계획 등 투자자의 사고방식을 잘 이해해요. 전문 지식이 대부분의 브로커에게 없는 강점을 줍니다.",
    },
    rating: 5,
  },
  {
    name: "Linda & Mark W.",
    role: { en: "Construction loan clients", zh: "建筑贷款客户", kr: "건축 대출 고객" },
    location: "Hamilton",
    text: {
      en: "Building our dream home was a big project and the finance side felt overwhelming. Lion Finance guided us through the construction loan process — draw-downs, builder payments, everything. They kept us informed at every stage and made it manageable.",
      zh: "建造梦想之家是大工程，融资部分让人不知所措。Lion Finance 带我们走完了建筑贷款全流程——提款、付款给建筑商，每一步都安排妥当。每个阶段都及时告知，让一切井井有条。",
      kr: "꿈의 집을 짓는 것은 큰 프로젝트였고 금융 부분이 부담스러웠어요. Lion Finance가 건축 대출 과정 전체를 안내해 주었습니다 — 인출, 시공사 지급 등 모든 것을. 매 단계마다 알려 주셔서 관리 가능하게 만들어 주셨어요.",
    },
    rating: 5,
  },
  {
    name: "Rachel T.",
    role: { en: "Top-up loan client", zh: "加贷客户", kr: "탑업 대출 고객" },
    location: "Tauranga",
    text: {
      en: "I wanted to renovate my kitchen and bathroom but didn't want a personal loan with high interest. Lion Finance arranged a top-up on my existing mortgage at a much better rate. Quick, easy, and saved me thousands in interest over the years.",
      zh: "我想翻新厨房和浴室，但不想申请高利率的个人贷款。Lion Finance 在我现有房贷上安排了加贷，利率好得多。快速、简单，多年下来省下了数千纽币的利息。",
      kr: "주방과 욕실을 리모델링하고 싶었지만 높은 금리의 개인 대출은 원하지 않았어요. Lion Finance가 기존 모기지에 탑업을 훨씬 좋은 금리로 안배해 주었습니다. 빠르고 간편하며 수년간 수천 달러의 이자를 절약했어요.",
    },
    rating: 5,
  },
  {
    name: "Michael C.",
    role: { en: "Interest rate refix client", zh: "利率重定客户", kr: "금리 재설정 고객" },
    location: "Auckland",
    text: {
      en: "My fixed rate was expiring and I was about to just accept my bank's standard offer. Lion Finance reviewed the market, negotiated a better rate with my lender, and saved me nearly $200 a month. I didn't even know this service existed — wish I'd found them sooner!",
      zh: "我的固定利率到期了，本打算直接接受银行的标准报价。Lion Finance 审视了市场，与我的贷款方协商到更优利率，每月省了近 200 纽币。我之前都不知道有这项服务——真希望早点找到他们！",
      kr: "고정 금리가 만료되어 은행의 기본 제안을 그냥 받아들이려 했어요. Lion Finance가 시장을 검토하고 대출 기관과 더 나은 금리를 협상해서 매월 거의 200달러를 절약했습니다. 이런 서비스가 있는 줄 몰랐어요 — 더 일찍 찾았으면 좋았을 텐데!",
    },
    rating: 5,
  },
  {
    name: "Yuki S.",
    role: { en: "New resident buyer", zh: "新移民购房者", kr: "신규 이민자 구매자" },
    location: "Auckland",
    text: {
      en: "As a new resident in New Zealand, I was unsure about the home loan process here. The Lion Finance team explained everything in a way I could understand and helped me get pre-approved within a week. Their multilingual service was a huge plus.",
      zh: "作为新西兰新移民，我对这里的房贷流程不太了解。Lion Finance 团队用我能听懂的方式解释了一切，一周内就帮我拿到了预批。多语言服务是很大的加分项。",
      kr: "뉴질랜드에 새로 이주한 입장에서 주택 대출 절차가 생소했어요. Lion Finance 팀이 이해하기 쉽게 설명해 주시고 일주일 만에 사전 승인을 받았습니다. 다국어 서비스가 정말 큰 도움이 되었어요.",
    },
    rating: 5,
  },
  {
    name: "Paul & Jenny H.",
    role: { en: "Commercial property buyers", zh: "商业物业买家", kr: "상업용 부동산 구매자" },
    location: "Queenstown",
    text: {
      en: "We purchased a commercial unit for our tourism business. Lion Finance structured the loan around our seasonal income, which most banks wouldn't consider. Their understanding of commercial lending is outstanding.",
      zh: "我们为旅游生意买了一间商业铺面。Lion Finance 根据我们的季节性收入设计了贷款结构，大多数银行不会考虑这种情况。他们对商业贷款的理解非常出色。",
      kr: "관광 사업을 위해 상업용 부동산을 구매했습니다. Lion Finance가 대부분 은행이 고려하지 않는 계절적 수입에 맞춰 대출을 구성해 주었어요. 상업 대출에 대한 이해가 뛰어납니다.",
    },
    rating: 5,
  },
];
