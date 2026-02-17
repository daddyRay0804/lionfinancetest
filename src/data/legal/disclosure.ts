import type { Lang } from "@/lib/i18n";

export type LegalBlock =
  | { type: "p"; text: Record<Lang, string> }
  | { type: "ul"; items: Record<Lang, string[]> }
  | { type: "subhead"; text: Record<Lang, string> };

export type LegalSection = { title: Record<Lang, string>; blocks: LegalBlock[] };

// Source provided by client (Lion Financial Services Ltd FAP Disclosure Document)
// We present this on the website in a clean, readable format.

export const disclosureSubtitle: Record<Lang, string> = {
  en: "FAP disclosure: license, services, fees, conflicts, complaints, and privacy.",
  zh: "FAP 披露：牌照、服务范围、费用、利益冲突、投诉与隐私。",
  kr: "FAP 공시: 라이선스, 서비스 범위, 수수료, 이해상충, 불만 처리 및 개인정보.",
};

export const disclosureSections: LegalSection[] = [
  {
    title: { en: "Version", zh: "版本", kr: "버전" },
    blocks: [
      {
        type: "ul",
        items: {
          en: ["Document version: V3.0", "Effective date: 21 January 2026"],
          zh: ["文件版本：V3.0", "生效日期：2026 年 1 月 21 日"],
          kr: ["문서 버전: V3.0", "시행일: 2026년 1월 21일"],
        },
      },
    ],
  },
  {
    title: { en: "License status and conditions", zh: "牌照状态与条件", kr: "라이선스 상태 및 조건" },
    blocks: [
      {
        type: "p",
        text: {
          en: "Lion Financial Services Limited is a Financial Advice Provider (FAP) licensed and regulated by the Financial Markets Authority (FMA) to provide financial advice.",
          zh: "Lion Financial Services Limited 为金融建议提供方（FAP），受新西兰金融市场管理局（FMA）许可并监管，提供金融建议服务。",
          kr: "Lion Financial Services Limited는 뉴질랜드 금융시장감독청(FMA)의 허가 및 감독을 받는 금융 자문 제공자(FAP)입니다.",
        },
      },
      {
        type: "ul",
        items: {
          en: ["Financial Services Provider (FSP) number: 1011137", "Licensing status: Full Licence"],
          zh: ["金融服务提供方（FSP）编号：1011137", "牌照状态：全牌照（Full Licence）"],
          kr: ["금융 서비스 제공자(FSP) 번호: 1011137", "라이선스 상태: Full Licence"],
        },
      },
    ],
  },
  {
    title: {
      en: "Nature and scope of the financial advice given",
      zh: "所提供金融建议的性质与范围",
      kr: "제공되는 금융 자문의 성격 및 범위",
    },
    blocks: [
      {
        type: "p",
        text: {
          en: "Lion only provides financial advice in the following areas:",
          zh: "Lion 仅在以下范围内提供金融建议：",
          kr: "Lion은 아래 범위에 한해 금융 자문을 제공합니다:",
        },
      },
      {
        type: "ul",
        items: {
          en: [
            "Mortgages: home loans, business loans, commercial loans, construction loans, refix, refinance, top-up.",
            "Personal risk insurance products (excluding general insurance such as house/contents/cars/liability): life, trauma, permanent disability, income & mortgage protection, and health insurance.",
            "Business owner protection products: business overheads protection and key person cover.",
          ],
          zh: [
            "按揭/贷款：住房贷款、商业贷款、商业地产贷款、建筑贷款、利率重定（refix）、再融资（refinance）、加贷（top-up）。",
            "个人风险保险产品（不含一般保险，如房屋/财产/车辆/责任险）：人寿险、重疾险、永久伤残、收入及房贷保障、健康保险。",
            "企业主保障：企业运营费用保障（business overheads）及关键人物保障（key person）。",
          ],
          kr: [
            "모기지/대출: 주택 대출, 사업자 대출, 상업용 대출, 건축 대출, 금리 재고정(refix), 재융자(refinance), 탑업(top-up).",
            "개인 위험 보험(일반 보험 제외: 주택/가재도구/자동차/책임 등): 생명, 트라우마, 영구 장애, 소득 및 모기지 보호, 건강 보험.",
            "사업자 보호: 사업 운영비 보호 및 핵심인물(Key Person) 보장.",
          ],
        },
      },
      {
        type: "p",
        text: {
          en: "General insurance: Lion has a business relationship with Tower Insurance. Tower provides financial advice on general insurance product lines. Where clients need general insurance, we may refer them to Tower.",
          zh: "一般保险：Lion 与 Tower Insurance 有业务合作关系。Tower 为一般保险产品线提供金融建议。如客户需要一般保险，我们可能会转介至 Tower。",
          kr: "일반 보험: Lion은 Tower Insurance와 업무 제휴 관계가 있습니다. Tower는 일반 보험 상품군에 대한 자문을 제공합니다. 고객이 일반 보험이 필요한 경우 Tower에 소개할 수 있습니다.",
        },
      },
    ],
  },
  {
    title: { en: "Providers we work with", zh: "合作机构（产品提供方）", kr: "제휴 기관(상품 제공자)" },
    blocks: [
      {
        type: "subhead",
        text: { en: "Mortgages", zh: "贷款/按揭", kr: "모기지/대출" },
      },
      {
        type: "ul",
        items: {
          en: [
            "ANZ, ASB, BNZ, Westpac, Asap Finance, Kiwibank, AVANTI Finance, Basecorp Finance, Cressida, Co-operative Bank, DBR Property Finance, First Mortgage Trust, Heartland, Liberty, NZCU, Pepper Money, Plus Finance, Prospa, SBS Bank, Southern Cross Partners, Lendr, Sovereign Home Loans.",
          ],
          zh: [
            "ANZ、ASB、BNZ、Westpac、Asap Finance、Kiwibank、AVANTI Finance、Basecorp Finance、Cressida、Co-operative Bank、DBR Property Finance、First Mortgage Trust、Heartland、Liberty、NZCU、Pepper Money、Plus Finance、Prospa、SBS Bank、Southern Cross Partners、Lendr、Sovereign Home Loans。",
          ],
          kr: [
            "ANZ, ASB, BNZ, Westpac, Asap Finance, Kiwibank, AVANTI Finance, Basecorp Finance, Cressida, Co-operative Bank, DBR Property Finance, First Mortgage Trust, Heartland, Liberty, NZCU, Pepper Money, Plus Finance, Prospa, SBS Bank, Southern Cross Partners, Lendr, Sovereign Home Loans.",
          ],
        },
      },
      {
        type: "subhead",
        text: { en: "Life insurance", zh: "人寿保险", kr: "생명보험" },
      },
      {
        type: "ul",
        items: {
          en: ["AIA, Asteron Life, Fidelity Life, Chubb, Partners Life."],
          zh: ["AIA、Asteron Life、Fidelity Life、Chubb、Partners Life。"],
          kr: ["AIA, Asteron Life, Fidelity Life, Chubb, Partners Life."],
        },
      },
      {
        type: "subhead",
        text: { en: "Health insurance", zh: "健康保险", kr: "건강보험" },
      },
      {
        type: "ul",
        items: {
          en: ["Accuro, AIA, NIB, Partners Life, Southern Cross."],
          zh: ["Accuro、AIA、NIB、Partners Life、Southern Cross。"],
          kr: ["Accuro, AIA, NIB, Partners Life, Southern Cross."],
        },
      },
      {
        type: "subhead",
        text: { en: "Business insurance", zh: "商业保险", kr: "사업자 보험" },
      },
      {
        type: "ul",
        items: {
          en: ["AIA, Asteron Life, Fidelity Life, Partners Life."],
          zh: ["AIA、Asteron Life、Fidelity Life、Partners Life。"],
          kr: ["AIA, Asteron Life, Fidelity Life, Partners Life."],
        },
      },
      {
        type: "p",
        text: {
          en: "Not all of our advisers can advise on all product areas. Please refer to the financial adviser’s personal disclosure statements to see who can advise on which areas.",
          zh: "并非所有顾问都可就所有产品领域提供建议。请参阅相关金融顾问的个人披露声明，以了解其可提供建议的范围。",
          kr: "모든 어드바이저가 모든 상품 영역에 대해 자문할 수 있는 것은 아닙니다. 각 어드바이저의 개인 공시 문서를 통해 자문 가능 범위를 확인해 주세요.",
        },
      },
    ],
  },
  {
    title: { en: "Reliability history", zh: "可靠性记录", kr: "신뢰성 이력" },
    blocks: [
      {
        type: "p",
        text: {
          en: "Lion Financial Services Ltd has not been subject to a reliability event. A reliability event is something that might materially influence you in deciding whether to seek advice from us (for example, legal proceedings against us, or bankruptcy in the last four years).",
          zh: "Lion Financial Services Ltd 未发生任何“可靠性事件”。所谓可靠性事件，是指可能会对您是否选择向我们寻求建议产生重大影响的事件（例如：对我们提起的重大法律程序，或过去四年内破产等）。",
          kr: "Lion Financial Services Ltd는 신뢰성 사건(reliability event)의 대상이 된 적이 없습니다. 신뢰성 사건이란 당사에 자문을 구할지 여부에 중대한 영향을 미칠 수 있는 사건(예: 법적 절차, 최근 4년 내 파산 등)을 의미합니다.",
        },
      },
      {
        type: "p",
        text: {
          en: "There have been no professional indemnity insurance or negligence claims, dispute resolution actions, or disciplinary actions.",
          zh: "전문직 배상책임 보험 또는 과실 관련 청구, 분쟁 해결 조치, 징계 조치 등이 발생한 적이 없습니다。",
          kr: "전문직 배상책임보험(PI) 또는 과실 청구, 분쟁 해결 조치, 징계 조치 등이 없었습니다.",
        },
      },
    ],
  },
  {
    title: { en: "Fees, expenses and other amounts", zh: "费用、开支及其他应付金额", kr: "수수료, 비용 및 기타 금액" },
    blocks: [
      {
        type: "p",
        text: {
          en: "Generally, you do not pay a fee directly for our mortgage advice because we are usually paid by the lender. However, we may charge a one-off fee in the situations below.",
          zh: "通常情况下，您的按揭/贷款建议服务无需直接向我们支付费用（我们通常由贷款机构支付）。但在以下情形下，我们可能会收取一次性费用。",
          kr: "일반적으로 모기지 자문에 대해 고객이 당사에 직접 수수료를 지불하지 않습니다(통상 대출기관이 당사에 지급). 다만 아래 경우에는 1회성 수수료가 발생할 수 있습니다.",
        },
      },
      {
        type: "ul",
        items: {
          en: [
            "(A) Commission clawback: If, within 25 months after loan drawdown, your loan is fully/partially repaid or materially changed and the lender requires us to repay commission, we may charge a one-off fee. The fee will be no more than NZD 3,000 + GST (if any), calculated at NZD 300 + GST per hour, and will not exceed the commission amount we must repay. You will be invoiced and have 30 days to pay.",
            "(B) You discontinue after approval: If we obtain a pre-approval/approval that meets your requirements and you then discontinue using our service and engage another broker or approach the same lender directly, we may charge a one-off fee (no more than NZD 3,000 + GST, calculated at NZD 300 + GST per hour).",
            "(C) No commission is paid: If you request advice and we do not receive commission from the lender, we may charge a one-off fee. Any such fee will be agreed and authorised by you in writing before services are completed, based on an estimate of the time spent.",
          ],
          zh: [
            "(A) 佣金追回：在贷款放款后 25 个月内，如您的贷款被全部/部分提前还款或条款发生重大变更，且贷款机构要求我们退还佣金，我们可能会收取一次性费用。该费用不超过 3,000 纽币 + GST（如适用），按每小时 300 纽币 + GST 计算，且不超过我们需要退还的佣金金额。我们将开具发票，您有 30 天付款期。",
            "(B) 获批后中止服务：若我们已为您取得满足需求的预批/批复，而您随后停止使用我们的服务并转用其他中介或直接向同一贷款机构办理，我们可能会收取一次性费用（不超过 3,000 纽币 + GST，按每小时 300 纽币 + GST 计算）。",
            "(C) 未获得佣金：若您要求我们提供建议，但我们未从贷款机构获得佣金，我们可能会收取一次性费用。该费用将在服务完成前由您书面同意并授权，基于预计投入时间计算。",
          ],
          kr: [
            "(A) 커미션 환수: 대출 실행 후 25개월 이내에 대출이 전부/일부 상환되거나 조건이 중대하게 변경되어 대출기관이 당사에 커미션을 반환하도록 요구하는 경우, 1회성 수수료가 발생할 수 있습니다. 수수료는 최대 NZD 3,000 + GST(해당 시)이며, 시간당 NZD 300 + GST로 산정되고, 당사가 반환해야 하는 커미션 금액을 초과하지 않습니다. 청구서 발행 후 30일 이내에 납부합니다.",
            "(B) 승인 후 서비스 중단: 당사가 고객 요구에 맞는 사전승인/승인을 확보했음에도 고객이 서비스를 중단하고 다른 브로커를 이용하거나 동일 대출기관에 직접 진행하는 경우, 1회성 수수료(최대 NZD 3,000 + GST, 시간당 NZD 300 + GST)를 청구할 수 있습니다.",
            "(C) 커미션 미지급: 고객 요청에 따라 자문을 제공했으나 대출기관으로부터 커미션을 받지 못하는 경우, 1회성 수수료가 발생할 수 있습니다. 해당 수수료는 서비스 완료 전 서면 합의/승인을 받은 후, 예상 소요시간을 기준으로 산정합니다.",
          ],
        },
      },
    ],
  },
  {
    title: { en: "Conflicts of interest and incentives", zh: "利益冲突与激励", kr: "이해상충 및 인센티브" },
    blocks: [
      {
        type: "subhead",
        text: { en: "Mortgages", zh: "贷款/按揭", kr: "모기지/대출" },
      },
      {
        type: "ul",
        items: {
          en: [
            "We receive commissions from banks and lenders when we arrange mortgages. The commission amount is based on the loan amount.",
            "We receive brokerage fees from some finance companies. The brokerage amount is based on the loan amount.",
            "We may receive trail commission each year if the loan remains in force (e.g. BNZ, Kiwibank and some other lenders).",
            "We may receive a re-fix commission from ANZ, ASB and Bank of China.",
          ],
          zh: [
            "在我们协助安排按揭/贷款后，我们会从相关银行/贷款机构收取佣金，佣金金额通常与贷款金额相关。",
            "我们也可能从部分金融公司收取经纪费（brokerage fee），金额通常与贷款金额相关。",
            "若贷款持续有效，我们可能每年获得续期/跟踪佣金（trail commission）（例如：BNZ、Kiwibank 及部分其他机构）。",
            "我们可能从 ANZ、ASB、Bank of China 获得利率重定（re-fix）佣金。",
          ],
          kr: [
            "당사가 모기지를 주선하는 경우 은행/대출기관으로부터 커미션을 받습니다. 커미션은 대출 금액을 기준으로 산정됩니다.",
            "일부 금융회사로부터 브로커리지 수수료를 받을 수 있으며, 이는 대출 금액을 기준으로 산정됩니다.",
            "대출이 유지되는 경우 연간 트레일 커미션을 받을 수 있습니다(예: BNZ, Kiwibank 등).",
            "ANZ, ASB, Bank of China로부터 리픽스 커미션을 받을 수 있습니다.",
          ],
        },
      },
      {
        type: "subhead",
        text: { en: "Insurance (including referrals)", zh: "保险（含转介）", kr: "보험(소개 포함)" },
      },
      {
        type: "ul",
        items: {
          en: [
            "For general insurance: we and our advisers may receive referral fees from our partner Tower Insurance Ltd if you take out policies with them (the fee is based on the commission Tower receives).",
            "For life and health insurance: we may receive commissions from the relevant insurer if you take out insurance following our advice.",
            "We may also receive ongoing commissions each year if the insurance policy remains in force.",
          ],
          zh: [
            "一般保险：如您通过我们的转介与合作方 Tower Insurance Ltd 投保，我们及相关顾问可能会获得转介费（金额通常与 Tower 获得的佣金相关）。",
            "人寿/健康保险：若您采纳我们的建议并投保，我们可能会从相关保险公司获得佣金。",
            "如保单持续有效，我们也可能每年获得续期佣金。",
          ],
          kr: [
            "일반 보험: 고객이 Tower Insurance Ltd를 통해 가입하는 경우, 당사 및 어드바이저가 소개 수수료를 받을 수 있습니다(금액은 Tower가 받는 커미션 기준).",
            "생명/건강 보험: 당사 자문에 따라 가입하는 경우 해당 보험사로부터 커미션을 받을 수 있습니다.",
            "보험이 유지되는 동안 연간 지속 커미션을 받을 수도 있습니다.",
          ],
        },
      },
      {
        type: "p",
        text: {
          en: "We follow an advice process designed to ensure our recommendations are based on your goals and circumstances. Our advisers undergo annual training on managing conflicts of interest, and our compliance programme is reviewed annually.",
          zh: "我们遵循一套建议流程，以确保推荐基于您的目标与实际情况。我们的顾问每年接受利益冲突管理培训，并且我们的合规计划每年都会接受审查。",
          kr: "당사는 고객의 목표와 상황을 기반으로 권고가 이루어지도록 자문 프로세스를 운영합니다. 어드바이저는 이해상충 관리에 대한 연간 교육을 받으며, 컴플라이언스 프로그램은 매년 검토됩니다.",
        },
      },
      {
        type: "p",
        text: {
          en: "We have no financial interest in any insurer, bank, finance company or other provider that would create a general conflict of interest in giving advice. If an actual or potential conflict arises, we will disclose it to you promptly and manage or avoid it where possible. If it cannot be managed to your satisfaction, we will resign and assist with a replacement adviser.",
          zh: "我们在任何保险公司、银行、金融公司或其他机构中均无可能影响建议独立性的财务利益。如出现实际或潜在的利益冲突，我们会及时向您披露，并尽力管理或避免；如无法在令您满意的前提下妥善处理，我们将退出该委托并协助您对接更合适的顾问。",
          kr: "당사는 자문 제공에 있어 일반적인 이해상충을 초래할 수 있는 보험사/은행/금융회사 등에 대한 재정적 이해관계가 없습니다. 실제 또는 잠재적 이해상충이 발생하면 즉시 고지하고 가능한 경우 관리 또는 회피합니다. 고객 만족 수준으로 관리가 불가능한 경우, 당사는 업무에서 물러나고 대체 어드바이저 선임을 지원합니다.",
        },
      },
    ],
  },
  {
    title: { en: "Complaints handling and dispute resolution", zh: "投诉处理与争议解决", kr: "불만 처리 및 분쟁 해결" },
    blocks: [
      {
        type: "p",
        text: {
          en: "If you are not satisfied with our financial advice service, you can make a complaint using the contact details below.",
          zh: "如您对我们的金融建议服务不满意，您可以通过以下方式提出投诉。",
          kr: "당사의 금융 자문 서비스에 만족하지 않으시는 경우, 아래 연락처로 불만을 제기하실 수 있습니다.",
        },
      },
      {
        type: "ul",
        items: {
          en: [
            "Email: allan@lionfinance.co.nz",
            "Address: 2/24 Aberfeldy Ave, Highland Park, Auckland 2010",
            "We will acknowledge and consider your complaint. We aim to resolve complaints within 10 working days. If we need more time, we will contact you within that timeframe and provide a realistic timeframe.",
          ],
          zh: [
            "邮箱：allan@lionfinance.co.nz",
            "地址：2/24 Aberfeldy Ave, Highland Park, Auckland 2010",
            "我们会在收到投诉后进行审阅并与您沟通处理方式。一般目标是在 10 个工作日内解决；如需更长时间，我们会在该期限内联系您并提供预计时间。",
          ],
          kr: [
            "이메일: allan@lionfinance.co.nz",
            "주소: 2/24 Aberfeldy Ave, Highland Park, Auckland 2010",
            "불만 접수 후 검토 및 처리 방안을 안내드립니다. 통상 10영업일 내 해결을 목표로 하며, 추가 시간이 필요한 경우 해당 기간 내 연락드리고 예상 일정을 안내드립니다.",
          ],
        },
      },
      {
        type: "p",
        text: {
          en: "If we can’t resolve your complaint, or you are not satisfied with the proposed resolution, you can contact our external dispute resolution scheme: Financial Disputes Resolution Service (FDRS).",
          zh: "如我们无法解决您的投诉，或您对处理方案不满意，您可联系外部争议解决机构：Financial Disputes Resolution Service（FDRS）。",
          kr: "불만이 해결되지 않거나 제안된 해결 방안에 만족하지 않으시는 경우, 외부 분쟁 해결 기구인 Financial Disputes Resolution Service(FDRS)에 문의하실 수 있습니다.",
        },
      },
      {
        type: "ul",
        items: {
          en: [
            "Website: www.fdrs.org.nz",
            "Email: enquiries@fdrs.org.nz",
            "Phone: 0508 337 337",
            "Mail: Freepost 231075, PO Box 2272, Wellington 6140",
          ],
          zh: [
            "网站：www.fdrs.org.nz",
            "邮箱：enquiries@fdrs.org.nz",
            "电话：0508 337 337",
            "邮寄：Freepost 231075, PO Box 2272, Wellington 6140",
          ],
          kr: [
            "웹사이트: www.fdrs.org.nz",
            "이메일: enquiries@fdrs.org.nz",
            "전화: 0508 337 337",
            "우편: Freepost 231075, PO Box 2272, Wellington 6140",
          ],
        },
      },
    ],
  },
  {
    title: { en: "Our duties", zh: "我们的义务", kr: "당사의 의무" },
    blocks: [
      {
        type: "p",
        text: {
          en: "Lion, and anyone who gives financial advice on our behalf, have duties under the Financial Markets Conduct Act 2013 relating to the way we give advice.",
          zh: "Lion 以及代表我们提供金融建议的人员，在《2013 年金融市场行为法》（Financial Markets Conduct Act 2013）下对建议的提供方式负有法定义务。",
          kr: "Lion 및 당사를 대신하여 금융 자문을 제공하는 자는 2013년 금융시장행위법(Financial Markets Conduct Act 2013)에 따른 의무가 있습니다.",
        },
      },
      {
        type: "ul",
        items: {
          en: [
            "Give priority to your interests and take all reasonable steps to ensure our advice isn’t materially influenced by our own interests.",
            "Exercise care, diligence, and skill in providing advice.",
            "Meet the standards of competence, knowledge, and skill set by the Code of Professional Conduct for Financial Advice Services.",
            "Meet the standards of ethical behaviour, conduct, and client care set by the Code of Professional Conduct for Financial Advice Services.",
          ],
          zh: [
            "将您的利益放在首位，并采取一切合理步骤确保我们的建议不受我们自身利益的实质性影响。",
            "在提供建议时尽到应有的谨慎、勤勉与专业技能。",
            "满足《金融建议服务职业操守准则》所规定的能力、知识与技能标准。",
            "满足《金融建议服务职业操守准则》所规定的伦理行为、职业操守与客户关怀标准。",
          ],
          kr: [
            "고객의 이익을 우선하며, 당사의 자문이 당사의 이해관계에 의해 중대하게 영향을 받지 않도록 합리적인 조치를 취합니다.",
            "주의, 성실, 전문성을 가지고 자문을 제공합니다.",
            "금융자문 서비스 직업윤리 규정(Code of Professional Conduct)의 역량/지식/기술 기준을 충족합니다.",
            "금융자문 서비스 직업윤리 규정의 윤리적 행동/업무 수행/고객 케어 기준을 충족합니다.",
          ],
        },
      },
      {
        type: "p",
        text: {
          en: "This is only a summary of our duties. More information is available by contacting us or by visiting the FMA website at https://www.fma.govt.nz.",
          zh: "以上仅为义务概要。更多信息可通过联系我们或访问 FMA 官网 https://www.fma.govt.nz 获取。",
          kr: "위 내용은 의무의 요약입니다. 자세한 내용은 당사에 문의하거나 FMA 웹사이트(https://www.fma.govt.nz)를 참고하시기 바랍니다.",
        },
      },
    ],
  },
  {
    title: { en: "Your privacy", zh: "您的隐私", kr: "개인정보" },
    blocks: [
      {
        type: "p",
        text: {
          en: "When working with you we may collect personal and financial information to deliver personalised advice. This typically includes information about your age, health, financial situation, and your instructions.",
          zh: "在为您提供个性化建议的过程中，我们可能会收集您的个人信息与财务信息，通常包括年龄、健康状况、财务状况以及您的指示/需求等。",
          kr: "맞춤형 자문 제공을 위해 개인 및 재정 정보를 수집할 수 있으며, 일반적으로 연령, 건강 상태, 재정 상황 및 고객의 지시사항 등이 포함됩니다.",
        },
      },
      {
        type: "p",
        text: {
          en: "Under the Privacy Act 2020, you may request access to information we hold about you and request corrections. We can provide a copy of information we hold (at our cost), while retaining original records for legal and compliance requirements.",
          zh: "根据《2020 年隐私法》（Privacy Act 2020），您有权访问我们所持有的关于您的信息，并可要求更正。我们可在我们承担成本的前提下向您提供信息副本，同时会为满足法律与合规要求保留原始记录。",
          kr: "개인정보보호법(Privacy Act 2020)에 따라 고객은 당사가 보유한 정보에 대한 열람 및 정정을 요청할 수 있습니다. 당사는 보유 정보 사본을 제공할 수 있으며(비용은 당사 부담), 법적/규정 준수 목적을 위해 원본 기록을 보관합니다.",
        },
      },
      {
        type: "p",
        text: {
          en: "Records are stored in secure premises and secured computer systems. Lion staff have access to client files. Other parties may access information as required by law or to provide specific advice in accordance with your instructions or our agreed scope of service.",
          zh: "记录将存放在安全的场所及受保护的计算机系统中。Lion 员工可访问客户文件；在法律要求或为履行与您指示/约定服务范围一致的特定建议服务时，其他方也可能依法访问相关信息。",
          kr: "기록은 안전한 시설 및 보안된 컴퓨터 시스템에 보관됩니다. Lion 직원은 고객 파일에 접근할 수 있으며, 법률상 요구되거나 고객 지시/합의된 서비스 범위에 따른 특정 자문 제공을 위해 필요한 경우 제3자가 접근할 수 있습니다.",
        },
      },
    ],
  },
  {
    title: { en: "Contact details", zh: "联系方式", kr: "연락처" },
    blocks: [
      {
        type: "ul",
        items: {
          en: [
            "Financial Advice Provider: Lion (FSP 1011137)",
            "Phone: 022 161 9172 or 021 153 1918",
            "Email: gary@lionfinance.co.nz or allan@lionfinance.co.nz",
            "Address: 2/24 Aberfeldy Ave, Highland Park, Auckland 2010",
          ],
          zh: [
            "金融建议提供方：Lion（FSP 1011137）",
            "电话：022 161 9172 或 021 153 1918",
            "邮箱：gary@lionfinance.co.nz 或 allan@lionfinance.co.nz",
            "地址：2/24 Aberfeldy Ave, Highland Park, Auckland 2010",
          ],
          kr: [
            "금융 자문 제공자: Lion (FSP 1011137)",
            "전화: 022 161 9172 또는 021 153 1918",
            "이메일: gary@lionfinance.co.nz 또는 allan@lionfinance.co.nz",
            "주소: 2/24 Aberfeldy Ave, Highland Park, Auckland 2010",
          ],
        },
      },
    ],
  },
];
