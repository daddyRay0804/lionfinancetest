import type { Lang } from "@/lib/i18n";

type ContentMap = Record<Lang, string>;

export const siteName: ContentMap = {
  en: "Lion Finance",
  zh: "Lion Finance",
  kr: "Lion Finance",
};

export const siteTagline: ContentMap = {
  en: "Your trusted mortgage and loan broker in New Zealand",
  zh: "新西兰值得信赖的贷款与房贷经纪",
  kr: "뉴질랜드 신뢰할 수 있는 모기지 및 대출 브로커",
};

export const nav: Record<string, ContentMap> = {
  home: { en: "Home", zh: "首页", kr: "홈" },
  products: { en: "Products", zh: "产品", kr: "상품" },
  about: { en: "About Us", zh: "关于我们", kr: "회사 소개" },
  team: { en: "Team", zh: "团队", kr: "팀" },
  faq: { en: "FAQ", zh: "常见问题", kr: "자주 묻는 질문" },
  contact: { en: "Contact", zh: "联系我们", kr: "연락처" },
};

/** 公司联络地址 */
export const contactAddress = "Unit 5, 20 Northcroft Road, Takapuna, Auckland";
export const contactEmail = "info@lionfinance.co.nz";

/** 页脚法律/政策导航（二级页面） */
export const footerLegalSlugs = ["disclosure", "complaints", "terms"] as const;
export type FooterLegalSlug = (typeof footerLegalSlugs)[number];
export const footerLegal: Record<FooterLegalSlug, ContentMap> = {
  disclosure: { en: "Disclosure", zh: "披露声明", kr: "공시" },
  complaints: { en: "Complaints", zh: "投诉", kr: "불만 접수" },
  terms: { en: "Terms & Conditions", zh: "条款与条件", kr: "이용 약관" },
};
/** 短标签（如 T&C） */
export const footerLegalShort: Record<FooterLegalSlug, ContentMap> = {
  disclosure: { en: "Disclosure", zh: "披露", kr: "공시" },
  complaints: { en: "Complaints", zh: "投诉", kr: "불만" },
  terms: { en: "T&C", zh: "条款", kr: "약관" },
};

export const productSlugs = [
  "home-loans",
  "construction-loans",
  "business-loans",
  "commercial-loans",
  "refinance",
  "top-up",
  "interest-rate-refix",
] as const;

export type ProductSlug = (typeof productSlugs)[number];

export const productTitles: Record<ProductSlug, ContentMap> = {
  "home-loans": { en: "Home Loans", zh: "房屋贷款", kr: "주택 대출" },
  "construction-loans": { en: "Construction Loans", zh: "建筑贷款", kr: "건축 대출" },
  "business-loans": { en: "Business Loans", zh: "商业贷款", kr: "사업자 대출" },
  "commercial-loans": { en: "Commercial Loans", zh: "商业地产贷款", kr: "상업용 대출" },
  refinance: { en: "Refinance", zh: "再融资", kr: "재융자" },
  "top-up": { en: "Top-up", zh: "加贷", kr: "탑업 대출" },
  "interest-rate-refix": { en: "Interest Rate Refix", zh: "利率重定", kr: "금리 재설정" },
};

export const productDescriptions: Record<ProductSlug, { en: string; zh: string; kr: string }> = {
  "home-loans": {
    en: "Stepping into your dream home is a milestone, and securing the right home loan is the key that turns the lock. At Lion Finance, we simplify the journey to homeownership. We guide you through the entire process, from pre-approval to settlement, ensuring you find a competitive mortgage that fits your budget and lifestyle. Whether you're a first-time buyer or looking to upgrade, we help you plant roots in the right place. We don't just offer loans; we offer a pathway to your future. Our brokers have exclusive access to a wide panel of lenders, including the major banks and second-tier lenders, to hunt down the perfect loan for you. We fight for your interests, aiming not just for approval, but for the most financially savvy outcome for your family's future.",
    zh: "迈入梦想之家是人生里程碑，选对房屋贷款是打开大门的关键。Lion Finance 简化您的置业之路，从预批到交割全程协助，帮您找到符合预算与生活的优质房贷。无论首购还是换房，我们助您安家落户。我们不仅提供贷款，更为您铺就未来之路。我们的经纪人与多家银行及二级贷款机构合作，为您争取最适合的贷款，不仅追求获批，更追求对您家庭最有利的财务结果。",
    kr: "꿈의 집에 들어서는 것은 이정표이며, 적합한 주택 대출을 확보하는 것이 문을 여는 열쇠입니다. Lion Finance는 자가 소유로 가는 여정을 단순화합니다. 사전 승인부터 정산까지 전 과정을 안내하여 예산과 생활 방식에 맞는 경쟁력 있는 모기지를 찾도록 돕습니다. 첫 구매자이든 업그레이드를 원하든, 올바른 곳에 뿌리내리도록 돕습니다. 우리는 단순히 대출만 제공하는 것이 아니라 미래로 가는 길을 제시합니다. 브로커들은 주요 은행과 2차 대출 기관을 포함한 다양한 대출 기관에 대한 독점적 접근권을 갖고 있어 귀하에게 완벽한 대출을 찾아드립니다. 승인뿐 아니라 가족의 미래를 위한 가장 재정적으로 현명한 결과를 목표로 합니다.",
  },
  "construction-loans": {
    en: "Building your dream home requires a financial plan as solid as its foundations. A construction loan is specifically designed for this purpose, releasing funds in stages as your build progresses. Lion Finance will help you navigate this complex process to ensure your cashflow stays healthy. We understand the blueprints of construction finance. Our expertise ensures your loan application clearly communicates the project's viability to lenders. We'll find a loan that accommodates your build schedule and connects you with lenders who are construction-savvy, making the financial process as seamless as the build itself.",
    zh: "建造梦想之家需要像地基一样稳固的财务计划。建筑贷款专为此设计，随工程进度分阶段放款。Lion Finance 协助您应对复杂流程，保持现金流健康。我们熟悉建筑融资的每一个环节，确保您的申请向贷款方清晰展示项目可行性，并为您匹配懂建筑的贷款机构，让财务流程与施工一样顺畅。",
    kr: "꿈의 집을 짓는 것은 기초만큼 견고한 재정 계획이 필요합니다. 건축 대출은 이 목적을 위해 특별히 설계되어 건축이 진행됨에 따라 단계적으로 자금을 공급합니다. Lion Finance는 이 복잡한 과정을 안내하여 현금 흐름이 건강하게 유지되도록 돕습니다. 건축 금융의 청사진을 이해합니다. 전문성으로 대출 신청이 프로젝트의 실행 가능성을 대출 기관에 명확히 전달하도록 합니다. 건축 일정에 맞는 대출을 찾고, 건축에 정통한 대출 기관과 연결하여 재정 과정이 건축 자체만큼 원활하게 진행되도록 합니다.",
  },
  "business-loans": {
    en: "Fuel your business's growth with the right financial support. Whether you're looking to expand, manage cash flow, or purchase new equipment, Lion Finance helps you secure the capital you need. We connect you with a wide range of business loan options from both major banks and agile second-tier lenders who understand the needs of growing businesses. We speak your language. We take the time to understand your business plan and then act as your advocate, presenting a strong case to the right lenders. Our broad panel means we can find flexible solutions that a single bank might not offer, helping you secure the funding to take your business to the next level.",
    zh: "用合适的资金支持推动业务增长。无论您要扩张、管理现金流还是购置设备，Lion Finance 助您获得所需资金。我们对接主要银行与灵活的二线机构，提供丰富商业贷款选择。我们懂您的需求，花时间理解您的商业计划并代表您向合适的贷款方争取最优方案。广泛的合作网络让我们能提供单一银行难以提供的灵活方案，助您把事业推向新高度。",
    kr: "올바른 재정 지원으로 비즈니스 성장을 가속화하세요. 확장, 현금 흐름 관리, 신규 장비 구매를 원하시든 Lion Finance가 필요한 자본을 확보하도록 돕습니다. 성장하는 비즈니스의 요구를 이해하는 주요 은행과 민첩한 2차 대출 기관의 다양한 사업자 대출 옵션과 연결해 드립니다. 귀하의 언어로 소통합니다. 비즈니스 계획을 이해한 후 대변인으로서 적절한 대출 기관에 강력한 사례를 제시합니다. 넓은 패널을 통해 단일 은행이 제공하지 못할 유연한 솔루션을 찾아 비즈니스를 다음 단계로 이끌 자금을 확보하도록 돕습니다.",
  },
  "commercial-loans": {
    en: "Expand your investment portfolio or acquire new commercial premises with finance designed for your ambitions. Lion Finance specialises in commercial loans for purchasing, refinancing, or developing property assets. We structure finance solutions that align with the income-producing potential of your investment, from retail spaces to industrial warehouses. Commercial lending is our specialty. We leverage our strong relationships with both major banks and niche commercial lenders to secure favourable terms. We understand loan structures, LVRs, and the importance of cash flow, ensuring your loan works as hard as you do to maximise your return on investment.",
    zh: "用为您的目标量身定制的融资扩大投资组合或购置商业物业。Lion Finance 专注商业贷款：购买、再融资或开发物业。我们从零售到工业仓储，按投资创收潜力设计融资方案。商业贷款是我们的专长。我们凭借与主要银行及细分商业贷款机构的紧密关系争取优惠条款，精通贷款结构、LVR 与现金流，确保您的贷款与您一样努力，最大化投资回报。",
    kr: "야망에 맞춘 금융으로 투자 포트폴리오를 확장하거나 새로운 상업용 부동산을 취득하세요. Lion Finance는 구매, 재융자 또는 부동산 자산 개발을 위한 상업용 대출 전문입니다. 소매 공간부터 산업용 창고까지 투자의 수익 창출 잠재력에 맞는 금융 솔루션을 구성합니다. 상업 대출이 우리의 전문 분야입니다. 주요 은행과 틈새 상업 대출 기관과의 강력한 관계를 활용하여 유리한 조건을 확보합니다. 대출 구조, LVR, 현금 흐름의 중요성을 이해하여 투자 수익을 극대화하도록 대출이 귀하만큼 열심히 일하도록 합니다.",
  },
  refinance: {
    en: "Your current home loan might be costing you more than it should. Refinancing can unlock a better interest rate, access equity, or consolidate debt. At Lion Finance, we compare the market to find you a superior deal, potentially saving you thousands over the life of your loan. We make switching easy and rewarding. We handle the entire process, from assessing your current loan against the market to managing the application and settlement with your new lender. Our access to a wide panel ensures we find a deal that truly beats your existing one, not just the standard offers.",
    zh: "您目前的房贷可能让您多花了不少钱。再融资可以争取更低利率、释放净值或合并债务。Lion Finance 对比市场为您寻找更优方案，有望在贷款期内为您节省数千元。我们让转换简单且有回报，从评估现有贷款到与新贷款方申请与交割，全程办理。广泛的合作网络确保我们找到真正优于您现有贷款的方案，而非仅标准产品。",
    kr: "현재 주택 대출이 필요한 것보다 더 많은 비용을 들이고 있을 수 있습니다. 재융자를 통해 더 나은 금리, 자산 담보 대출 또는 부채 통합을 할 수 있습니다. Lion Finance는 시장을 비교하여 더 나은 거래를 찾아 대출 기간 동안 수천 달러를 절약할 수 있도록 합니다. 전환을 쉽고 보람 있게 만듭니다. 현재 대출을 시장과 비교 평가하는 것부터 새 대출 기관과의 신청 및 정산 관리까지 전 과정을 처리합니다. 넓은 패널 접근으로 기존 대출을 진정으로 능가하는 거래를 찾습니다.",
  },
  "top-up": {
    en: "Your home's equity is a powerful financial tool. A top-up loan allows you to borrow more against the value you've built up in your property. Whether for renovations, a new car, or investing, Lion Finance can help you access these funds often at a more competitive rate than a personal loan. We help you leverage your equity wisely. We'll negotiate with your existing lender for a top-up or, if better terms are available elsewhere, refinance you to a new lender entirely. This ensures you get the most cost-effective way to access the cash you need for your next big step.",
    zh: "房屋净值是强大的财务工具。加贷让您以已积累的房产价值多借一笔，用于装修、购车或投资。Lion Finance 助您以往往比个人贷款更优的利率获得资金。我们助您明智运用净值：向现有贷款方申请加贷，或在别处条件更优时整体转贷，确保以最划算的方式获得下一步所需资金。",
    kr: "주택 자산은 강력한 재정 도구입니다. 탑업 대출을 통해 부동산에 쌓인 가치를 담보로 더 많이 빌릴 수 있습니다. 리모델링, 새 차, 투자 목적이든 Lion Finance는 개인 대출보다 종종 더 경쟁력 있는 금리로 이 자금에 접근하도록 돕습니다. 자산을 현명하게 활용하도록 돕습니다. 기존 대출 기관과 탑업을 협상하거나, 다른 곳에서 더 나은 조건이 있으면 완전히 새 대출 기관으로 재융자합니다. 다음 큰 단계에 필요한 현금에 가장 비용 효율적으로 접근할 수 있도록 합니다.",
  },
  "interest-rate-refix": {
    en: "In a fluctuating market, locking in your interest rate can provide valuable certainty for your budget. When your fixed-rate term is ending, Lion Finance can help you navigate your refix options, securing a new rate that protects you from future increases. Don't just accept your bank's standard refix offer. We will review the current market on your behalf and negotiate with your lender for a better rate. If they won't play ball, we can quickly explore refinancing options with other lenders on our panel to ensure you're never paying more than you should.",
    zh: "在波动市场中，锁定利率能为预算带来宝贵的确定性。当您的固定利率即将到期时，Lion Finance 协助您评估重定选项，争取新利率以抵御未来加息。不要只接受银行的标准重定报价。我们代您审视当前市场并与贷款方协商更优利率；若对方不让步，我们可迅速与合作机构探讨再融资，确保您不会多付。",
    kr: "변동하는 시장에서 금리를 고정하면 예산에 귀중한 확실성을 제공할 수 있습니다. 고정 금리 기간이 끝날 때 Lion Finance가 리픽스 옵션을 안내하고 미래 인상으로부터 보호하는 새 금리를 확보하도록 돕습니다. 은행의 표준 리픽스 제안을 그대로 받아들이지 마세요. 당사가 귀하를 대신하여 현재 시장을 검토하고 대출 기관과 더 나은 금리를 협상합니다. 협상이 되지 않으면 패널의 다른 대출 기관과 재융자 옵션을 신속히 탐색하여 필요한 것보다 더 많이 지불하지 않도록 합니다.",
  },
};
