import type { Lang } from "@/lib/i18n";

export const complaintsIntro: Record<Lang, string[]> = {
  en: [
    "Although we always try to do our best by our clients and prospects, we may not always get things right the first time.",
    "Please take the time to answer the following questions so we can make things right as soon as possible. Your complaint will go through our internal complaint handling process.",
    "We will keep you informed through all stages of the process. Your complaint will also be kept confidential and confined only to the involved parties, except with your consent.",
  ],
  zh: [
    "我们始终尽力为客户与潜在客户做到最好，但有时可能无法一次做对。",
    "请花时间回答下列问题，以便我们尽快纠正。您的投诉将按我们的内部投诉处理流程办理。",
    "我们将在流程各阶段及时告知您。除经您同意外，您的投诉将予以保密，仅限相关方知悉。",
  ],
  kr: [
    "당사는 항상 고객과 잠재 고객에게 최선을 다하지만, 때로는 한 번에 모든 것을 맞추지 못할 수 있습니다.",
    "가능한 한 빨리 시정할 수 있도록 다음 질문에 답해 주시기 바랍니다. 귀하의 불만은 당사 내부 불만 처리 절차를 거칩니다.",
    "절차의 모든 단계에서 귀하에게 알려 드립니다. 귀하의 동의가 없는 한 불만은 기밀로 유지되며 관련 당사자에게만 제한됩니다.",
  ],
};

export const complaintsSteps: Record<Lang, { title: string; content: string[] }>[] = [
  {
    en: {
      title: "Step 1",
      content: [
        "If you are dissatisfied with any part of our service, or your products, please contact us through phone, email, or post. We will ensure your complaint is at the top of our priority list.",
        "Phone: 021 153 1918, 022 161 9172, 021 187 7785",
        "Email: allan@lionfinance.co.nz, gary@lionfinance.co.nz, joyce@lionfinance.co.nz",
        "In writing — Complaints officer: Joyce He",
        "PO Box 259289, Botany, Auckland 2163",
      ],
    },
    zh: {
      title: "第一步",
      content: [
        "若您对我们的服务或产品任何部分不满意，请通过电话、电邮或信函联系我们。我们将把您的投诉置于优先处理。",
        "电话：021 153 1918、022 161 9172、021 187 7785",
        "电邮：allan@lionfinance.co.nz、gary@lionfinance.co.nz、joyce@lionfinance.co.nz",
        "书面投诉负责人：Joyce He",
        "PO Box 259289, Botany, Auckland 2163",
      ],
    },
    kr: {
      title: "1단계",
      content: [
        "당사 서비스 또는 상품의 어떤 부분에 불만이 있으시면 전화, 이메일 또는 우편으로 연락해 주세요. 귀하의 불만을 최우선으로 처리하겠습니다.",
        "전화: 021 153 1918, 022 161 9172, 021 187 7785",
        "이메일: allan@lionfinance.co.nz, gary@lionfinance.co.nz, joyce@lionfinance.co.nz",
        "서면 — 불만 담당: Joyce He",
        "PO Box 259289, Botany, Auckland 2163",
      ],
    },
  },
  {
    en: {
      title: "Step 2",
      content: [
        "We will try to resolve this complaint with you within 10 working days. This may mean we will contact you via phone or email to request further information about your complaint, or to arrange a meeting. We will do our very best to solve the complaint with you internally. We will let you know how we intend to resolve it.",
      ],
    },
    zh: {
      title: "第二步",
      content: [
        "我们将在 10 个工作日内尽力与您一起解决投诉。我们可能通过电话或电邮联系您以获取更多信息或安排会面。我们将尽最大努力在内部与您解决投诉，并告知拟采取的解决方式。",
      ],
    },
    kr: {
      title: "2단계",
      content: [
        "당사는 10 영업일 이내에 귀하와 함께 불만을 해결하려고 합니다. 불만에 대한 추가 정보를 요청하거나 회의를 arranged하기 위해 전화 또는 이메일로 연락할 수 있습니다. 당사는 내부적으로 귀하와 불만을 해결하기 위해 최선을 다하며, 해결 방안을 알려 드립니다.",
      ],
    },
  },
  {
    en: {
      title: "Step 3",
      content: [
        "We will contact you via phone or email to let you know whether we can resolve your complaint, and how we propose to do so.",
      ],
    },
    zh: {
      title: "第三步",
      content: [
        "我们将通过电话或电邮告知能否解决您的投诉以及拟采取的方式。",
      ],
    },
    kr: {
      title: "3단계",
      content: [
        "당사는 전화 또는 이메일로 귀하의 불만을 해결할 수 있는지 및 제안하는 해결 방법을 알려 드립니다.",
      ],
    },
  },
  {
    en: {
      title: "Step 4",
      content: [
        "If we can't resolve your complaint, or you aren't satisfied with the way we propose to do so, you can contact our external dispute resolution scheme — Financial Disputes Resolution Service.",
        "Financial Dispute Resolutions Scheme",
        "Address: Freepost 231075, PO Box 2272, Wellington 6140",
        "Phone: 0508 337 337",
        "Email: Enquiries@FDRS.org.nz",
        "Website: www.fdrs.org.nz/complaints",
      ],
    },
    zh: {
      title: "第四步",
      content: [
        "若我们无法解决您的投诉，或您对我们提出的解决方式不满意，可联系外部争议解决机构——金融争议解决服务（FDRS）。",
        "金融争议解决计划（FDRS）",
        "地址：Freepost 231075, PO Box 2272, Wellington 6140",
        "电话：0508 337 337",
        "电邮：Enquiries@FDRS.org.nz",
        "网站：www.fdrs.org.nz/complaints",
      ],
    },
    kr: {
      title: "4단계",
      content: [
        "당사가 귀하의 불만을 해결할 수 없거나 귀하가 당사가 제안한 해결 방식에 만족하지 않으시면 외부 분쟁 해결 제도인 Financial Disputes Resolution Service(FDRS)에 연락하실 수 있습니다.",
        "Financial Dispute Resolutions Scheme",
        "주소: Freepost 231075, PO Box 2272, Wellington 6140",
        "전화: 0508 337 337",
        "이메일: Enquiries@FDRS.org.nz",
        "웹사이트: www.fdrs.org.nz/complaints",
      ],
    },
  },
];
