import type { Lang } from "@/lib/i18n";

export const aboutContent: Record<Lang, { title: string; h2: string; paragraphs: string[] }> = {
  en: {
    title: "About Lion Finance",
    h2: "Your trusted partner in New Zealand lending",
    paragraphs: [
      "Lion Finance is a licensed mortgage and loan broking company based in New Zealand. We specialise in home loans, construction loans, business and commercial finance, refinancing, top-ups, and interest rate refixing.",
      "Our mission is to simplify the lending process and secure the best possible outcomes for our clients. We work with a wide panel of lenders—including major banks and second-tier institutions—so we can compare the market and fight for your interests.",
      "Whether you are a first-home buyer, an investor, or a business owner, we take the time to understand your goals and structure finance that works for you. We don't just aim for approval; we aim for the most financially savvy result for your future.",
    ],
  },
  zh: {
    title: "关于 Lion Finance",
    h2: "新西兰贷款领域您可信赖的伙伴",
    paragraphs: [
      "Lion Finance 是新西兰持牌房贷与贷款经纪公司，专注房屋贷款、建筑贷款、商业与商业地产融资、再融资、加贷及利率重定。",
      "我们的使命是简化贷款流程并为客户争取最佳结果。我们与多家贷款机构合作，包括主要银行与二级机构，从而对比市场、为您的利益争取最优方案。",
      "无论您是首购、投资者还是企业主，我们都会花时间理解您的目标并为您设计合适的融资方案。我们不仅追求获批，更追求对您未来最有利的财务结果。",
    ],
  },
  kr: {
    title: "Lion Finance 소개",
    h2: "뉴질랜드 대출에서 신뢰할 수 있는 파트너",
    paragraphs: [
      "Lion Finance는 뉴질랜드에 기반을 둔 자격을 갖춘 모기지 및 대출 브로킹 회사입니다. 주택 대출, 건축 대출, 사업자 및 상업용 금융, 재융자, 탑업, 금리 재설정을 전문으로 합니다.",
      "당사의 미션은 대출 절차를 단순화하고 고객에게 최상의 결과를 확보하는 것입니다. 주요 은행과 2차 기관을 포함한 다양한 대출 기관과 협력하여 시장을 비교하고 귀하의 이익을 위해 노력합니다.",
      "첫 집 구매자, 투자자, 사업주이든 귀하의 목표를 이해하고 귀하에게 맞는 금융을 구성하는 데 시간을 투자합니다. 승인만 목표로 하는 것이 아니라 귀하의 미래를 위한 가장 재정적으로 현명한 결과를 목표로 합니다.",
    ],
  },
};
