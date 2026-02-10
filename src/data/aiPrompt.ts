import type { Lang } from "@/lib/i18n";
import { productSlugs, productTitles, productDescriptions, contactAddress, contactEmail } from "@/data/content";
import { aboutContent } from "@/data/about";
import { faqList } from "@/data/faq";

/** 业务知识库（英文，供模型参考后按用户语言回答） */
export function getKnowledgeBase(): string {
  const products = productSlugs
    .map(
      (slug) =>
        `- ${productTitles[slug].en}: ${productDescriptions[slug].en}`
    )
    .join("\n");

  const about = aboutContent.en.paragraphs.join("\n");

  const faq = faqList
    .map((item) => `Q: ${item.q.en}\nA: ${item.a.en}`)
    .join("\n\n");

  return `
## Company
Lion Finance – Your trusted mortgage and loan broker in New Zealand.

## About
${about}

## Products & Services
${products}

## FAQ
${faq}

## Contact
Address: ${contactAddress}
Email: ${contactEmail}
`.trim();
}

/** 根据用户语言返回“拒绝回答非业务问题”的示例句（模型需用该语言礼貌拒绝） */
export const OFF_TOPIC_REFUSE_EXAMPLE: Record<Lang, string> = {
  en: "I can only help with questions about Lion Finance and our mortgage and loan services in New Zealand. For anything else, please contact us for finance-related enquiries.",
  zh: "我只能回答与 Lion Finance 及我们在新西兰的房贷与贷款服务相关的问题。其他问题请通过联系我们进行咨询。",
  kr: "Lion Finance와 뉴질랜드 모기지 및 대출 서비스에 대한 질문에만 답변할 수 있습니다. 그 외 문의는 연락처로 부탁드립니다.",
};

/** API 未配置时返回的提示（按语言） */
export const API_NOT_CONFIGURED: Record<Lang, string> = {
  en: "The AI assistant is not configured yet. For personalised advice on home loans, refinance, or any of our services, please email us at " + contactEmail + " or visit our contact section. We're happy to help.",
  zh: "AI 助手暂未开放。如需房屋贷款、再融资或任何服务的个性化咨询，请发邮件至 " + contactEmail + " 或通过网站联系板块与我们联系。",
  kr: "AI 어시스턴트가 아직 설정되지 않았습니다. 주택 대출, 재융자 또는 서비스에 대한 맞춤 상담은 " + contactEmail + " 로 이메일을 보내시거나 연락처 섹션을 이용해 주세요.",
};

/** 构建系统提示：知识库 + 仅用指定语言回答 + 仅业务范围内，拒绝娱乐/历史/政治等 */
export function getSystemPrompt(lang: Lang): string {
  const langName = lang === "en" ? "English" : lang === "zh" ? "简体中文" : "한국어";
  const refuseExample = OFF_TOPIC_REFUSE_EXAMPLE[lang];

  return `You are the official AI assistant for Lion Finance, a mortgage and loan broker in New Zealand. Your role is to answer questions about our services only.

## Language
- You MUST reply ONLY in ${langName} (${lang}). Use the same language as the user's interface at all times.

## Scope – STRICT
- You may ONLY answer questions about: Lion Finance, mortgage broking, home loans, construction loans, business loans, commercial loans, refinance, top-up, interest rate refix, pre-approval, settlement, and related finance services in New Zealand.
- You must NOT answer questions about: entertainment, history, politics, general knowledge, sports, celebrities, or any topic outside our business. If the user asks such a question, politely decline in ${langName} and redirect to our services. Example of a short decline: "${refuseExample}"
- Do not make up rates, fees, or eligibility criteria. Suggest they contact us for personalised quotes.

## Knowledge base (use to answer; reply in ${langName})
${getKnowledgeBase()}

## Rules
- Keep answers concise and helpful. For detailed or personalised advice, always suggest contacting us at ${contactEmail} or visiting our website.
- Do not invent information not in the knowledge base.`;
}
