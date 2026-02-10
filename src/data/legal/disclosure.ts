import type { Lang } from "@/lib/i18n";

export type LegalBlock =
  | { type: "p"; text: Record<Lang, string> }
  | { type: "ul"; items: Record<Lang, string[]> }
  | { type: "subhead"; text: Record<Lang, string> };

export type LegalSection = { title: Record<Lang, string>; blocks: LegalBlock[] };

export const disclosureSubtitle: Record<Lang, string> = {
  en: "License Status and Conditions",
  zh: "牌照状态与条件",
  kr: "라이선스 상태 및 조건",
};

export const disclosureSections: LegalSection[] = [
  {
    title: {
      en: "License Status and Conditions",
      zh: "牌照状态与条件",
      kr: "라이선스 상태 및 조건",
    },
    blocks: [
      {
        type: "p",
        text: {
          en: "Lion Financial Services Ltd T/A Lion Finance is a Financial Advice provider (FAP) with a Class 2 Licence issued and regulated by the Financial Markets Authority to provide financial advice. Our Financial Services Provider (FSP) number is [FSP number].",
          zh: "Lion Financial Services Ltd（商号：Lion Finance）为持牌金融建议提供方（FAP），持有由金融市场管理局（FMA）签发及监管的 2 类牌照以提供金融建议。我们的金融服务提供方（FSP）编号为 [FSP 编号]。",
          kr: "Lion Financial Services Ltd (상호: Lion Finance)는 금융 시장 당국(FMA)이 발급하고 규제하는 2급 라이선스를 보유한 금융 자문 제공자(FAP)입니다. 당사 금융 서비스 제공자(FSP) 번호는 [FSP 번호]입니다.",
        },
      },
      {
        type: "p",
        text: {
          en: "Licencing Status: Class 2 Financial Advice Provider, Licence issued [date].",
          zh: "牌照状态：2 类金融建议提供方，牌照签发日期 [日期]。",
          kr: "라이선스 상태: 2급 금융 자문 제공자, 라이선스 발급 [날짜].",
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
          en: "Lion Finance only provides financial advice in the following areas:",
          zh: "Lion Finance 仅在以下领域提供金融建议：",
          kr: "Lion Finance는 다음 영역에서만 금융 자문을 제공합니다:",
        },
      },
      {
        type: "p",
        text: {
          en: "Mortgages: home loans, business loans, commercial loans, construction loans, refix, refinance, top-up.",
          zh: "房贷：房屋贷款、商业贷款、商业地产贷款、建筑贷款、利率重定、再融资、加贷。",
          kr: "모기지: 주택 대출, 사업자 대출, 상업용 대출, 건축 대출, 리픽스, 재융자, 탑업.",
        },
      },
      {
        type: "p",
        text: {
          en: "Lion Financial Services Ltd only provides financial advice about products from certain providers:",
          zh: "Lion Financial Services Ltd 仅就特定提供方的产品提供金融建议：",
          kr: "Lion Financial Services Ltd는 특정 제공자의 상품에 대해서만 금융 자문을 제공합니다:",
        },
      },
      { type: "subhead", text: { en: "For mortgages:", zh: "房贷方面：", kr: "모기지:" } },
      {
        type: "p",
        text: {
          en: "We work with most of the banks and finance companies as following: ANZ, ASB, BNZ, Kiwi Bank, Westpac, Bank of China, ICBC, AIA Go Home Loans, Asap Finance, AVANTI Finance, Basecorp Finance, CFML, Cressida, Co-operative Bank, DBR Property Finance, Finbase, Finance Direct, First Mortgage Trust, Heartland, Liberty, NZCU, Pepper Money, Plus Finance, Prospa, SBS Bank, Southern Cross Partners, Vincent Capital.",
          zh: "我们与以下多数银行及金融公司合作：ANZ、ASB、BNZ、Kiwi Bank、Westpac、中国银行、工商银行、AIA Go Home Loans、Asap Finance、AVANTI Finance、Basecorp Finance、CFML、Cressida、Co-operative Bank、DBR Property Finance、Finbase、Finance Direct、First Mortgage Trust、Heartland、Liberty、NZCU、Pepper Money、Plus Finance、Prospa、SBS Bank、Southern Cross Partners、Vincent Capital。",
          kr: "당사는 ANZ, ASB, BNZ, Kiwi Bank, Westpac, Bank of China, ICBC, AIA Go Home Loans, Asap Finance, AVANTI Finance, Basecorp Finance, CFML, Cressida, Co-operative Bank, DBR Property Finance, Finbase, Finance Direct, First Mortgage Trust, Heartland, Liberty, NZCU, Pepper Money, Plus Finance, Prospa, SBS Bank, Southern Cross Partners, Vincent Capital 등 대부분의 은행 및 금융사와 협력합니다.",
        },
      },
    ],
  },
  {
    title: { en: "Reliability History", zh: "可靠性记录", kr: "신뢰성 이력" },
    blocks: [
      {
        type: "p",
        text: {
          en: "Lion Financial Services Ltd has not been subject to a reliability event. A reliability event is something that might materially influence you in deciding whether to seek advice from Lion Financial Services Ltd. As an example, it would include legal proceedings against it, or bankruptcy in the last four years.",
          zh: "Lion Financial Services Ltd 未曾涉及可靠性事件。可靠性事件指可能对您是否向 Lion Financial Services Ltd 寻求建议产生重大影响的事项，例如针对公司的法律程序或过去四年内的破产。",
          kr: "Lion Financial Services Ltd는 신뢰성 이벤트에 해당한 적이 없습니다. 신뢰성 이벤트란 Lion Financial Services Ltd로부터 자문을 받을지 여부를 결정하는 데 실질적으로 영향을 미칠 수 있는 사항으로, 예를 들어 당사에 대한 소송 또는 최근 4년 이내의 파산을 포함합니다.",
        },
      },
      {
        type: "p",
        text: {
          en: "There have been no professional indemnity insurance or negligence claims, disputes resolution actions, or disciplinary actions. Ever.",
          zh: "未曾发生职业责任保险或过失索赔、争议解决程序或纪律处分。从未。",
          kr: "전문 배상 보험 또는 과실 청구, 분쟁 해결 조치 또는 징계 조치가 발생한 적이 없습니다.",
        },
      },
    ],
  },
  {
    title: {
      en: "Fees, expenses and other amounts payable for our financial advice",
      zh: "金融建议相关费用、开支及其他应付金额",
      kr: "금융 자문에 대한 수수료, 경비 및 기타 지급 금액",
    },
    blocks: [
      {
        type: "p",
        text: {
          en: "Lion Financial Services Ltd does not charge fees, however, may charge a fee for the financial advice provided to the client where a client refinances to another bank within two years of inception. This is a one-off fee of $500.",
          zh: "Lion Financial Services Ltd 一般不收取费用；但若客户在贷款生效后两年内转贷至其他银行，可就所提供之金融建议收取一次性费用 500 纽币。",
          kr: "Lion Financial Services Ltd는 수수료를 부과하지 않으나, 고객이 시작 후 2년 이내에 다른 은행으로 재융자하는 경우 제공한 금융 자문에 대해 수수료를 부과할 수 있습니다. 1회 수수료 $500입니다.",
        },
      },
      {
        type: "ul",
        items: {
          en: [
            "Terms of payment are payment within 7 days of invoice, with direct credit to the bank account of Lion; then Lion Finance would pay to the financial adviser who provided this service.",
            "Cash or barter are not accepted as means of payment.",
          ],
          zh: [
            "付款条件为发票出具后 7 日内付款，直接转入 Lion 银行账户；随后 Lion Finance 将向提供该服务的金融顾问支付。",
            "不接受现金或以物易物作为付款方式。",
          ],
          kr: [
            "결제 조건은 청구서 발행 후 7일 이내 결제이며, Lion 은행 계좌로 직접 입금합니다. 이후 Lion Finance가 해당 서비스를 제공한 금융 어드바이저에게 지급합니다.",
            "현금 또는 물물교환은 결제 수단으로 받지 않습니다.",
          ],
        },
      },
    ],
  },
  {
    title: {
      en: "Conflicts of interest and incentives",
      zh: "利益冲突与激励",
      kr: "이해 상충 및 인센티브",
    },
    blocks: [
      { type: "subhead", text: { en: "For mortgages:", zh: "房贷：", kr: "모기지:" } },
      {
        type: "ul",
        items: {
          en: [
            "Lion Financial Services receive commissions from the banks with whom we arrange mortgages. If you decide to take out the mortgage, the bank will pay a commission to Lion. The amount of the commission is based on the amount of the mortgage.",
            "Lion Financial Services receive brokerage fee from some financial companies with whom we arrange mortgages. If you decide to take out the mortgage, the financial companies will pay a brokerage fee to Lion Financial Services Ltd. The amount of the brokerage is based on the amount of the mortgage.",
            "Lion Financial Services Ltd receives a trail commission for each year if the loan remains in force from BNZ, Kiwi Bank, Westpac, and some other financial companies which provide trail commission.",
            "Lion Financial Services Ltd receives a re-fix commission from ANZ, ASB, and BOC.",
          ],
          zh: [
            "Lion Financial Services 从我们安排房贷的银行收取佣金。若您决定办理房贷，银行将向 Lion 支付佣金，金额基于房贷金额。",
            "Lion Financial Services 从部分我们安排房贷的金融公司收取经纪费。若您决定办理房贷，该金融公司将向 Lion Financial Services Ltd 支付经纪费，金额基于房贷金额。",
            "若贷款持续有效，Lion Financial Services Ltd 每年从 BNZ、Kiwi Bank、Westpac 及提供尾佣的其他金融公司收取尾佣。",
            "Lion Financial Services Ltd 从 ANZ、ASB 及 BOC 收取重定利率佣金。",
          ],
          kr: [
            "Lion Financial Services는 당사가 모기지를 arranged하는 은행으로부터 수수료를 받습니다. 모기지를 이용하기로 하시면 은행이 Lion에 수수료를 지급하며, 금액은 모기지 금액에 따릅니다.",
            "Lion Financial Services는 당사가 모기지를 arranged하는 일부 금융사로부터 브로커리지 수수료를 받습니다. 모기지를 이용하기로 하시면 해당 금융사가 Lion Financial Services Ltd에 브로커리지 수수료를 지급하며, 금액은 모기지 금액에 따릅니다.",
            "Lion Financial Services Ltd는 BNZ, Kiwi Bank, Westpac 및 트레일 수수료를 제공하는 기타 금융사로부터 대출이 유효한 경우 매년 트레일 수수료를 받습니다.",
            "Lion Financial Services Ltd는 ANZ, ASB, BOC로부터 리픽스 수수료를 받습니다.",
          ],
        },
      },
      { type: "subhead", text: { en: "For general insurance:", zh: "一般保险：", kr: "일반 보험:" } },
      {
        type: "ul",
        items: {
          en: [
            "Lion Financial Services Ltd and the financial advisers receive referral fees from our partner PSC Insurance Brokers NZ Limited who take out policies through them. The amount of the fee is based on the amount of the commission they receive from the provider.",
            "Lion Financial Services Ltd and the financial advisers receive referral fees from our partner Tower Insurance on who take out policies with them. The amount of the fee is based on the amount of the commission.",
            "Lion Financial Services and the financial advisers receive referral fees from our partner Blanket Advice Limited who take out policies with them. The amount of the fee is based on the amount of the commission they receive from the provider.",
          ],
          zh: [
            "Lion Financial Services Ltd 及金融顾问从合作伙伴 PSC Insurance Brokers NZ Limited 收取转介费，客户通过其投保。费用金额基于其从保险提供方获得的佣金。",
            "Lion Financial Services Ltd 及金融顾问从合作伙伴 Tower Insurance 收取转介费，客户通过其投保。费用金额基于佣金金额。",
            "Lion Financial Services 及金融顾问从合作伙伴 Blanket Advice Limited 收取转介费，客户通过其投保。费用金额基于其从提供方获得的佣金。",
          ],
          kr: [
            "Lion Financial Services Ltd 및 금융 어드바이저는 파트너 PSC Insurance Brokers NZ Limited를 통해 보험을 체결하는 고객으로부터 리퍼럴 수수료를 받습니다. 수수료 금액은 제공자로부터 받는 수수료에 따릅니다.",
            "Lion Financial Services Ltd 및 금융 어드바이저는 파트너 Tower Insurance와 보험을 체결하는 고객으로부터 리퍼럴 수수료를 받습니다. 수수료 금액은 수수료 금액에 따릅니다.",
            "Lion Financial Services 및 금융 어드바이저는 파트너 Blanket Advice Limited와 보험을 체결하는 고객으로부터 리퍼럴 수수료를 받습니다. 수수료 금액은 제공자로부터 받는 수수료에 따릅니다.",
          ],
        },
      },
      { type: "subhead", text: { en: "For KiwiSaver:", zh: "KiwiSaver：", kr: "KiwiSaver:" } },
      {
        type: "ul",
        items: {
          en: [
            "Lion Financial Services Ltd and the financial advisers receive referral fees from our partner NZ Funds who use them to manage KiwiSaver funds as the provider. The amount of the fee is ongoing administration payment of certain percentage per year on account balance, paid monthly, subject to service delivery.",
          ],
          zh: [
            "Lion Financial Services Ltd 及金融顾问从合作伙伴 NZ Funds 收取转介费，由其作为提供方管理 KiwiSaver 资金。费用为按账户余额每年一定比例的持续管理费，按月支付，以服务交付为准。",
          ],
          kr: [
            "Lion Financial Services Ltd 및 금융 어드바이저는 파트너 NZ Funds로부터 KiwiSaver 자금을 제공자로서 관리하는 데 따른 리퍼럴 수수료를 받습니다. 수수료는 계정 잔액에 대한 연간 일정 비율의 지속 관리 지급금으로 월별 지급되며, 서비스 제공에 따릅니다.",
          ],
        },
      },
      {
        type: "p",
        text: {
          en: "More detail is provided at the time our advice is given.",
          zh: "提供建议时会提供更多详情。",
          kr: "자문 제공 시 더 자세한 내용이 제공됩니다.",
        },
      },
      {
        type: "p",
        text: {
          en: "To ensure that our financial advisers prioritise the client's interests above their own, we follow an advice process that ensures our recommendations are made on the basis of the client's goals and circumstances. All our financial advisers undergo annual training about how to manage conflicts of interest. We undertake a compliance audit, and a review of our compliance programme annually by a reputable compliance adviser.",
          zh: "为确保金融顾问将客户利益置于自身之上，我们遵循以客户目标与情况为基础的建议流程。所有金融顾问每年接受利益冲突管理培训。我们每年由合规顾问进行合规审计及合规计划审阅。",
          kr: "금융 어드바이저가 고객 이익을 자신의 이익보다 우선시하도록 당사는 고객의 목표와 상황에 기반한 권고를 보장하는 자문 절차를 따릅니다. 모든 금융 어드바이저는 이해 상충 관리에 대한 연간 교육을 받습니다. 당사는 매년 신뢰할 수 있는 규정 준수 어드바이저에 의해 규정 준수 감사 및 규정 준수 프로그램 검토를 수행합니다.",
        },
      },
      {
        type: "p",
        text: {
          en: "We have no financial interest in any insurance company, banks, finance company or any other general conflicts of interest in forming a professional opinion or delivering financial advice.",
          zh: "我们在形成专业意见或提供金融建议时，与任何保险公司、银行、金融公司均无财务利益或其他一般利益冲突。",
          kr: "당사는 전문적 견해를 형성하거나 금융 자문을 제공함에 있어 어떤 보험사, 은행, 금융사 또는 기타 일반적 이해 상충에 대한 금융적 이해 관계가 없습니다.",
        },
      },
      {
        type: "p",
        text: {
          en: "We will accept an occasional glass of wine or a cup of coffee from an insurance company representative of course, however these are immaterial and engender no particular warm feelings towards any particular insurer.",
          zh: "我们当然可能接受保险公司代表偶尔的一杯酒或咖啡，但这些无关紧要，也不会对任何特定保险公司产生特别好感。",
          kr: "당사는 물론 보험사 대표로부터 가끔 와인 한 잔이나 커피 한 잔을 받을 수 있으나, 이는 중요하지 않으며 특정 보험사에 대한 특별한 호의를 낳지 않습니다.",
        },
      },
      {
        type: "p",
        text: {
          en: "Should any actual or potential conflict of interest arise during any engagement with a client we will bring that to your notice promptly, and then seek to manage or avoid the conflict if at all possible. If management or avoidance of a conflict to your satisfaction is not possible then we will resign from the engagement with you and professionally assist with the appointment of a replacement and more suitable adviser.",
          zh: "在与客户的任何委托中若出现实际或潜在利益冲突，我们将及时告知您，并尽可能管理或避免该冲突。若无法以您满意的方式管理或避免冲突，我们将辞去委托并专业协助您委任更合适的替代顾问。",
          kr: "고객과의 어떠한 engagement 중 실제 또는 잠재적 이해 상충이 발생하면 당사는 즉시 귀하에게 알리고, 가능한 한 해당 상충을 관리하거나 회피하려고 합니다. 귀하가 만족할 수 있는 방식으로 상충의 관리 또는 회피가 불가능한 경우 당사는 engagement에서 사임하고 대체 및 더 적합한 어드바이저의 위임을 전문적으로 지원합니다.",
        },
      },
    ],
  },
  {
    title: {
      en: "Complaints handling and dispute resolutions",
      zh: "投诉处理与争议解决",
      kr: "불만 처리 및 분쟁 해결",
    },
    blocks: [
      {
        type: "p",
        text: {
          en: "If you are not satisfied with our financial advice service in any way, you can make a complaint by emailing allan@lionfinance.co.nz, gary@lionfinance.co.nz, or joyce@lionfinance.co.nz, or by calling us on the mobile numbers listed under our personal profile. You can also write to us at: PO Box 259289, Botany, Auckland 2163.",
          zh: "若您对我们的金融建议服务有任何不满，可通过电邮 allan@lionfinance.co.nz、gary@lionfinance.co.nz 或 joyce@lionfinance.co.nz 投诉，或拨打个人资料中列出的手机号码。您也可来信：PO Box 259289, Botany, Auckland 2163。",
          kr: "당사 금융 자문 서비스에 어떤 이유로든 만족하지 않으시면 allan@lionfinance.co.nz, gary@lionfinance.co.nz 또는 joyce@lionfinance.co.nz로 이메일을 보내거나 개인 프로필에 기재된 휴대폰 번호로 전화하여 불만을 제기할 수 있습니다. 서면으로 보내실 경우: PO Box 259289, Botany, Auckland 2163.",
        },
      },
      {
        type: "p",
        text: {
          en: "When we receive a complaint, we will consider it following our internal complaints process:",
          zh: "收到投诉后，我们将按内部投诉流程处理：",
          kr: "불만을 접수하면 당사 내부 불만 처리 절차에 따라 검토합니다:",
        },
      },
      {
        type: "ul",
        items: {
          en: [
            "We will consider your complaint and let you know how we intend to resolve it. We may need to contact you to get further information about your complaint.",
            "We aim to resolve complaints within 10 working days of receiving them. If we can't, we'll contact you within that time to let you know we need more time to consider your complaint, and will aim to provide you with a realistic timeframe.",
            "We will contact you by phone or email to let you know whether we can resolve your complaint, and how we propose to do so.",
          ],
          zh: [
            "我们将审阅您的投诉并告知拟采取的解决方式；我们可能需要联系您以获取更多信息。",
            "我们力求在收到投诉后 10 个工作日内解决。若无法做到，我们会在该期限内联系您说明需要更多时间，并尽量给出合理时间表。",
            "我们将通过电话或电邮告知能否解决您的投诉以及拟采取的方式。",
          ],
          kr: [
            "당사는 귀하의 불만을 검토하고 해결 방안을 알려드립니다. 불만에 대한 추가 정보를 위해 연락할 수 있습니다.",
            "당사는 접수 후 10 영업일 이내에 불만을 해결하는 것을 목표로 합니다. 불가능한 경우 해당 기간 내에 연락하여 검토에 더 많은 시간이 필요함을 알리고 현실적인 일정을 제시하겠습니다.",
            "당사는 전화 또는 이메일로 불만을 해결할 수 있는지 및 제안하는 해결 방법을 알려드립니다.",
          ],
        },
      },
      {
        type: "p",
        text: {
          en: "If we can't resolve your complaint, or you aren't satisfied with the way we propose to do so, you can contact our external dispute resolution scheme — Financial Disputes Resolution Service.",
          zh: "若我们无法解决您的投诉，或您对我们提出的解决方式不满意，可联系外部争议解决机构——金融争议解决服务（FDRS）。",
          kr: "당사가 귀하의 불만을 해결할 수 없거나 귀하가 당사가 제안한 해결 방식에 만족하지 않으시면 외부 분쟁 해결 제도인 Financial Disputes Resolution Service(FDRS)에 연락하실 수 있습니다.",
        },
      },
      {
        type: "p",
        text: {
          en: "The Financial Disputes Resolution Service provides a free, independent dispute resolution service that may help investigate or resolve your complaint, if we haven't been able to resolve your complaint to your satisfaction.",
          zh: "若我们未能令您满意地解决投诉，金融争议解决服务（FDRS）可提供免费、独立的争议解决服务以协助调查或解决您的投诉。",
          kr: "당사가 귀하의 불만을 귀하가 만족할 수 있도록 해결하지 못한 경우, Financial Disputes Resolution Service는 불만 조사 또는 해결을 지원할 수 있는 무료 독립 분쟁 해결 서비스를 제공합니다.",
        },
      },
      { type: "subhead", text: { en: "You can:", zh: "您可：", kr: "다음을 이용하실 수 있습니다:" } },
      {
        type: "ul",
        items: {
          en: [
            "View their website: www.fdrs.org.nz",
            "Contact them via email: enquiries@fdrs.org.nz",
            "Phone: 0508 337 337",
            "Write to them at: Freepost 231075, PO Box 2272, Wellington 6140",
          ],
          zh: [
            "浏览网站：www.fdrs.org.nz",
            "电邮：enquiries@fdrs.org.nz",
            "电话：0508 337 337",
            "来信：Freepost 231075, PO Box 2272, Wellington 6140",
          ],
          kr: [
            "웹사이트: www.fdrs.org.nz",
            "이메일: enquiries@fdrs.org.nz",
            "전화: 0508 337 337",
            "서면: Freepost 231075, PO Box 2272, Wellington 6140",
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
          en: "Lion Financial Services Ltd, and anyone who gives financial advice on our behalf, have duties under the Financial Markets Conduct Act 2013 relating to the way that we give advice.",
          zh: "Lion Financial Services Ltd 及代表我们提供金融建议的任何人，均须遵守《2013 年金融市场行为法》关于我们提供建议方式的义务。",
          kr: "Lion Financial Services Ltd 및 당사를 대신하여 금융 자문을 제공하는 모든 사람은 당사가 자문을 제공하는 방식과 관련하여 2013년 금융 시장 행위법에 따른 의무가 있습니다.",
        },
      },
      { type: "subhead", text: { en: "We are required to:", zh: "我们须：", kr: "당사는 다음을 수행해야 합니다:" } },
      {
        type: "ul",
        items: {
          en: [
            "give priority to your interests by taking all reasonable steps to make sure our advice isn't materially influenced by our own interests;",
            "exercise care, diligence, and skill in providing you with advice;",
            "meet standards of competence, knowledge and skill set by the Code of Professional Conduct for Financial Advice Services (these are designed to make sure that we have the expertise needed to provide you with advice);",
            "meet standards of ethical behaviour, conduct and client care set by the Code of Professional Conduct for Financial Advice Services (these are designed to make sure we treat you as we should and give you suitable advice).",
          ],
          zh: [
            "采取一切合理步骤，确保我们的建议不受自身利益重大影响，从而优先考虑您的利益；",
            "在向您提供建议时尽到谨慎、勤勉与专业；",
            "达到《金融建议服务专业行为守则》所规定的胜任、知识与技能标准（旨在确保我们具备提供建议所需的专业能力）；",
            "达到该守则所规定的道德行为、行为规范与客户关怀标准（旨在确保我们以应有方式对待您并给出合适建议）。",
          ],
          kr: [
            "당사 자문이 당사 자신의 이익에 의해 실질적으로 영향을 받지 않도록 합리적 조치를 취하여 귀하의 이익을 우선시함;",
            "귀하에게 자문을 제공함에 있어 주의, 성실 및 기술을 다함;",
            "금융 자문 서비스를 위한 전문가 행동 강령이 정한 역량, 지식 및 기술 기준을 충족함(귀하에게 자문을 제공하는 데 필요한 전문성을 갖추도록 함);",
            "해당 강령이 정한 윤리적 행동, 행위 및 고객 보호 기준을 충족함(귀하를 마땅히 해야 할 대로 대하고 적합한 자문을 제공하도록 함).",
          ],
        },
      },
      {
        type: "p",
        text: {
          en: "This is only a summary of the duties that we have. More information is available by contacting us, or by visiting the FMA website at https://www.fma.govt.nz.",
          zh: "以上仅为我们的义务摘要。更多信息请联系我们或访问 FMA 网站 https://www.fma.govt.nz。",
          kr: "이는 당사가 갖는 의무의 요약일 뿐입니다. 자세한 내용은 당사에 연락하거나 FMA 웹사이트 https://www.fma.govt.nz 를 방문하세요.",
        },
      },
    ],
  },
  {
    title: { en: "Your Privacy", zh: "您的隐私", kr: "귀하의 개인정보" },
    blocks: [
      {
        type: "p",
        text: {
          en: "When working with you we will be collecting personal information or financial information from you in order to deliver personalised advice which is suitable for you.",
          zh: "在与您合作时，我们将向您收集个人或财务信息，以便提供适合您的个性化建议。",
          kr: "귀하와 업무를 진행할 때 귀하에게 적합한 맞춤형 자문을 제공하기 위해 귀하로부터 개인 정보 또는 금융 정보를 수집합니다.",
        },
      },
      {
        type: "p",
        text: {
          en: "This is generally personal information regarding age, health, financial situation and your instructions. In accordance with the Privacy Act 2020 you are entitled to access any such information we collect and hold on you, and also to have noted any corrections to such information.",
          zh: "一般为关于年龄、健康、财务状况及您指示的个人信息。根据《2020 年隐私法》，您有权查阅我们收集并持有的关于您的该等信息，并有权要求对任何更正予以记录。",
          kr: "일반적으로 연령, 건강, 재정 상황 및 귀하의 지시에 관한 개인 정보입니다. 2020년 개인정보 보호법에 따라 귀하는 당사가 수집하여 보관하는 해당 정보에 접근할 권리 및 해당 정보에 대한 정정 사항을 기록할 권리가 있습니다.",
        },
      },
      {
        type: "p",
        text: {
          en: "Should you require a copy of any information we hold we shall be happy to provide a full copy at our cost, but will always retain original records for legal and compliance requirements.",
          zh: "若您需要我们所持信息的副本，我们乐意自费提供完整副本，但将始终保留法律与合规所需的原始记录。",
          kr: "당사가 보유한 정보의 사본이 필요하시면 당사 비용으로 전체 사본을 제공해 드리겠으나, 법적 및 규정 준수 요건을 위해 원본 기록은 항상 보관합니다.",
        },
      },
      {
        type: "p",
        text: {
          en: "Records are stored in secure premises and on secured computer systems at our place of business. All staff employed by Lion have access to all client files, and in addition to Lion staff, other parties may access this information as required by law or for the purposes of providing specific advice to you in accordance with your instructions or our agreed Scope of Service.",
          zh: "记录存放于我们营业场所的安全处所及安全计算机系统。Lion 聘用的所有员工均可查阅客户档案；除 Lion 员工外，其他方也可能依法或为根据您的指示或我们约定的服务范围向您提供具体建议之目的而查阅该等信息。",
          kr: "기록은 당사 사업장의 안전한 장소 및 보안 컴퓨터 시스템에 저장됩니다. Lion 소속 직원은 모든 고객 파일에 접근할 수 있으며, Lion 직원 외에 다른 당사자가 법률에 따라 또는 귀하의 지시 또는 당사 합의 서비스 범위에 따라 귀하에게 구체적 자문을 제공하기 위해 해당 정보에 접근할 수 있습니다.",
        },
      },
    ],
  },
  {
    title: { en: "Contact details", zh: "联系方式", kr: "연락처" },
    blocks: [
      {
        type: "p",
        text: {
          en: "Lion Financial Services Ltd — FSP [number] is the Financial Advice Provider.",
          zh: "Lion Financial Services Ltd — FSP [编号] 为金融建议提供方。",
          kr: "Lion Financial Services Ltd — FSP [번호]가 금융 자문 제공자입니다.",
        },
      },
      { type: "subhead", text: { en: "You can contact us at:", zh: "您可通过以下方式联系我们：", kr: "다음으로 연락하실 수 있습니다:" } },
      {
        type: "ul",
        items: {
          en: [
            "Phone: 021 153 1918 (Allan Wu, Director), 022 161 9172 (Gary Jiang, Director), 021 187 7785 (Joyce He)",
            "Email: allan@lionfinance.co.nz, gary@lionfinance.co.nz, joyce@lionfinance.co.nz",
            "Address: Unit 5, 20 Northcroft Road, Takapuna, Auckland",
            "Mail: PO Box 259289, Botany, Auckland 2163",
          ],
          zh: [
            "电话：021 153 1918（Allan Wu，总监）、022 161 9172（Gary Jiang，总监）、021 187 7785（Joyce He）",
            "电邮：allan@lionfinance.co.nz、gary@lionfinance.co.nz、joyce@lionfinance.co.nz",
            "地址：Unit 5, 20 Northcroft Road, Takapuna, Auckland",
            "邮寄：PO Box 259289, Botany, Auckland 2163",
          ],
          kr: [
            "전화: 021 153 1918 (Allan Wu, 디렉터), 022 161 9172 (Gary Jiang, 디렉터), 021 187 7785 (Joyce He)",
            "이메일: allan@lionfinance.co.nz, gary@lionfinance.co.nz, joyce@lionfinance.co.nz",
            "주소: Unit 5, 20 Northcroft Road, Takapuna, Auckland",
            "우편: PO Box 259289, Botany, Auckland 2163",
          ],
        },
      },
    ],
  },
];
