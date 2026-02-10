import type { Lang } from "@/lib/i18n";

export type FAQItem = { q: Record<Lang, string>; a: Record<Lang, string> };

export const faqList: FAQItem[] = [
  {
    q: {
      en: "What is a mortgage broker?",
      zh: "什么是房贷经纪人？",
      kr: "모기지 브로커란 무엇인가요?",
    },
    a: {
      en: "A mortgage broker is a licensed professional who compares loans from multiple lenders and helps you find the best deal for your situation. Lion Finance works with major banks and second-tier lenders across New Zealand.",
      zh: "房贷经纪人是持牌专业人士，会对比多家贷款机构的产品并帮您找到最适合的方案。Lion Finance 与新西兰主要银行及二级贷款机构合作。",
      kr: "모기지 브로커는 여러 대출 기관의 대출을 비교하고 귀하의 상황에 가장 적합한 거래를 찾아주는 자격을 갖춘 전문가입니다. Lion Finance는 뉴질랜드 전역의 주요 은행 및 2차 대출 기관과 협력합니다.",
    },
  },
  {
    q: {
      en: "Do I pay for broker services?",
      zh: "使用经纪服务需要付费吗？",
      kr: "브로커 서비스 비용을 지불하나요?",
    },
    a: {
      en: "Many of our services are funded by the lender when your loan settles. We will always disclose any fees before you proceed. Our goal is to save you time and money.",
      zh: "贷款交割后，我们的服务费用通常由贷款方支付。在您继续之前我们会披露任何费用。我们的目标是为您节省时间和金钱。",
      kr: "대출이 정산되면 당사 서비스 비용의 상당 부분은 대출 기관이 부담합니다. 진행 전 항상 수수료를 공개합니다. 목표는 시간과 비용을 절약하는 것입니다.",
    },
  },
  {
    q: {
      en: "How long does pre-approval take?",
      zh: "预批需要多久？",
      kr: "사전 승인에는 얼마나 걸리나요?",
    },
    a: {
      en: "Pre-approval typically takes a few days to two weeks, depending on the lender and your documentation. We will guide you through the required documents to speed up the process.",
      zh: "预批通常需要数天到两周，视贷款方和您提供的材料而定。我们会指导您准备所需文件以加快流程。",
      kr: "사전 승인은 대출 기관과 제출 서류에 따라 보통 며칠에서 2주 정도 걸립니다. 필요한 서류를 안내하여 절차를 빠르게 진행합니다.",
    },
  },
  {
    q: {
      en: "Can I refinance with bad credit?",
      zh: "信用不好可以再融资吗？",
      kr: "신용이 나쁘면 재융자할 수 있나요?",
    },
    a: {
      en: "Some lenders specialise in non-standard situations. Lion Finance has access to a wide panel and can help you explore options even if your credit history is not perfect.",
      zh: "部分贷款机构专做非标准情况。Lion Finance 合作网络广泛，即使信用记录不完美也可协助您探索可行方案。",
      kr: "일부 대출 기관은 비표준 상황에 특화되어 있습니다. Lion Finance는 넓은 패널을 보유하고 있어 신용 이력이 완벽하지 않아도 옵션 탐색을 돕습니다.",
    },
  },
  {
    q: {
      en: "What documents do I need for a home loan?",
      zh: "申请房屋贷款需要哪些材料？",
      kr: "주택 대출에 어떤 서류가 필요하나요?",
    },
    a: {
      en: "Typically you will need ID, proof of income (e.g. payslips or financials), bank statements, and details of existing debts. We provide a clear checklist based on your situation.",
      zh: "通常需要身份证明、收入证明（如工资单或财务报表）、银行对账单及现有债务明细。我们会根据您的情况提供清晰清单。",
      kr: "일반적으로 신분증, 소득 증명(급여 명세 또는 재무제표), 은행 명세서, 기존 부채 내역이 필요합니다. 상황에 맞는 명확한 체크리스트를 제공합니다.",
    },
  },
];
