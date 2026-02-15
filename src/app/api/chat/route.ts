import { NextRequest, NextResponse } from "next/server";
import { getSystemPrompt } from "@/data/aiPrompt";
import { API_NOT_CONFIGURED } from "@/data/aiPrompt";
import type { Lang } from "@/lib/i18n";
import { faqList } from "@/data/faq";

/**
 * AI_MODE:
 * - bot (default): 纯规则/知识库命中，不消耗 token
 * - llm: 调用大模型（DeepSeek 官方 / OpenRouter）
 */
const AI_MODE = (process.env.AI_MODE ?? "bot").toLowerCase();

/**
 * LLM_PROVIDER:
 * - deepseek (default)
 * - openrouter
 */
const LLM_PROVIDER = (process.env.LLM_PROVIDER ?? "deepseek").toLowerCase();

/* ---- DeepSeek 官方（OpenAI 兼容） ---- */
const DEEPSEEK_API_URL = "https://api.deepseek.com/chat/completions";
const DEEPSEEK_MODEL = process.env.DEEPSEEK_MODEL ?? "deepseek-chat";

/* ---- OpenRouter（可选） ---- */
const OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions";
const OPENROUTER_MODEL = process.env.OPENROUTER_MODEL ?? "meta-llama/llama-3.3-70b-instruct:free";

type ChatMessage = { role: "user" | "assistant"; content: string };

function isValidLang(lang: string): lang is Lang {
  return lang === "en" || lang === "zh" || lang === "kr";
}

function normalize(s: string) {
  return (s ?? "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[\u200b-\u200f]/g, "")
    .trim();
}

function getLastUserText(messages: ChatMessage[]) {
  for (let i = messages.length - 1; i >= 0; i--) {
    if (messages[i]?.role === "user") return messages[i]?.content ?? "";
  }
  return "";
}

function contactText(lang: Lang) {
  if (lang === "zh") {
    return "如果你愿意，我们的团队可以根据你的情况给到更准确的建议：\n\nGary：gary@lionfinance.co.nz / 022 161 9172\nAllan：allan@lionfinance.co.nz / 021 153 1918";
  }
  if (lang === "kr") {
    return "원하시면 팀이 상황에 맞춰 더 정확히 안내해 드릴게요:\n\nGary: gary@lionfinance.co.nz / 022 161 9172\nAllan: allan@lionfinance.co.nz / 021 153 1918";
  }
  return "If you'd like, our team can give you advice tailored to your situation:\n\nGary: gary@lionfinance.co.nz / 022 161 9172\nAllan: allan@lionfinance.co.nz / 021 153 1918";
}

/**
 * 0-token "fake bot":
 * - 先命中 FAQ
 * - 再做简单意图判断
 * - 否则转人工
 */
function botAnswer(userTextRaw: string, lang: Lang) {
  const userText = normalize(userTextRaw);
  if (!userText) {
    return lang === "zh"
      ? "你想咨询哪一类贷款呢？比如：房贷/再融资/建筑贷款/商业贷款。"
      : lang === "kr"
        ? "어떤 종류의 대출을 문의하시나요? 예: 주택/재융자/건축/사업자 대출"
        : "What kind of loan are you looking at (home loan, refinance, construction, business)?";
  }

  // 1) FAQ 命中（关键词匹配）
  const faqKeywords: Array<{ idx: number; keys: string[] }> = [
    { idx: 0, keys: ["broker", "经纪", "经纪人", "중개", "브로커", "mortgage broker"] },
    { idx: 1, keys: ["fee", "cost", "收费", "费用", "付费", "수수료", "비용"] },
    { idx: 2, keys: ["pre-approval", "preapproval", "预批", "预先批准", "사전 승인", "사전승인"] },
    { idx: 3, keys: ["bad credit", "信用", "征信", "信用不好", "신용", "크레딧"] },
    { idx: 4, keys: ["document", "documents", "材料", "资料", "文件", "需要什么", "서류", "문서"] },
  ];

  for (const item of faqKeywords) {
    if (item.keys.some((k) => userText.includes(normalize(k)))) {
      const hit = faqList[item.idx];
      if (hit) return hit.a[lang];
    }
  }

  // 2) 简单意图
  const isRate = ["rate", "interest", "利率", "利息", "금리"].some((k) => userText.includes(normalize(k)));
  if (isRate) {
    return (lang === "zh"
      ? "利率会经常变化，而且和你的情况有关（收入、首付、房屋类型等）。你方便说下：你是首购/换房/投资？大概首付多少？\n\n"
      : lang === "kr"
        ? "금리는 자주 변하고(소득/보증금/주택 유형 등) 상황에 따라 달라져요. 처음 구매/갈아타기/투자 중 어떤 경우이고, 보증금(다운페이)이 어느 정도인가요?\n\n"
        : "Rates change often and depend on your situation (income, deposit, property type). Are you buying your first home, upgrading, or investing—and roughly what deposit do you have?\n\n") + contactText(lang);
  }

  const isAppointment = ["appointment", "book", "call", "contact", "预约", "约", "电话", "联系", "상담", "예약", "연락"].some((k) => userText.includes(normalize(k)));
  if (isAppointment) {
    return contactText(lang);
  }

  // 3) 兜底转人工
  return (lang === "zh"
    ? "这个问题需要根据你的具体情况才能给到准确建议😊 你方便简单说下：你想咨询哪一类贷款（房贷/再融资/建筑/商业）以及大概首付/收入情况？\n\n"
    : lang === "kr"
      ? "이 부분은 상황에 따라 달라서 몇 가지 정보를 확인해야 정확히 안내드릴 수 있어요😊 어떤 대출(주택/재융자/건축/사업자)인지와 대략적인 보증금/소득 상황을 알려주실 수 있을까요?\n\n"
      : "This depends on your situation, so I’ll need a little more detail 😊 What type of loan is it (home/refinance/construction/business) and roughly your deposit/income?\n\n") + contactText(lang);
}

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { messages = [], lang = "en" } = reqBody as {
      messages?: ChatMessage[];
      lang?: string;
    };

    const language = isValidLang(lang) ? lang : "en";

    // Default: 0-token bot mode
    if (AI_MODE !== "llm") {
      const userText = getLastUserText(messages);
      const content = botAnswer(userText, language);
      return NextResponse.json({ content, stream: false }, { status: 200 });
    }

    const systemPrompt = getSystemPrompt(language);

    const apiMessages: { role: string; content: string }[] = [
      { role: "system", content: systemPrompt },
      ...messages.map((m) => ({
        role: m.role,
        content: m.content,
      })),
    ];

    // ---- provider switch ----
    const provider = LLM_PROVIDER === "openrouter" ? "openrouter" : "deepseek";

    let url = DEEPSEEK_API_URL;
    let model = DEEPSEEK_MODEL;
    let apiKey = process.env.DEEPSEEK_API_KEY?.trim();
    let extraHeaders: Record<string, string> = {};

    if (provider === "openrouter") {
      url = OPENROUTER_API_URL;
      model = OPENROUTER_MODEL;
      apiKey = process.env.aibot?.trim(); // existing var name in this project
      extraHeaders = {
        "HTTP-Referer": "https://lionfinance.co.nz",
        "X-Title": "Lion Finance AI Assistant",
      };
    }

    if (!apiKey) {
      return NextResponse.json(
        { content: API_NOT_CONFIGURED[language], stream: false },
        { status: 200 }
      );
    }

    console.log("[api/chat] Calling LLM:", provider, model, "messages:", apiMessages.length);

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        ...extraHeaders,
      },
      body: JSON.stringify({
        model,
        messages: apiMessages,
        max_tokens: 800,
        temperature: 0.3,
        // OpenRouter supports include_reasoning; DeepSeek may ignore unknown fields.
        include_reasoning: false,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("[api/chat] LLM error:", res.status, errText.slice(0, 800));

      /* 400/422：尝试极简请求（去掉 temperature/max_tokens），对部分 provider 更兼容 */
      if (res.status === 400 || res.status === 422) {
        console.log("[api/chat] Retrying with minimal params...");
        const retry = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
            ...extraHeaders,
          },
          body: JSON.stringify({
            model,
            messages: apiMessages,
          }),
        });

        if (retry.ok) {
          const json = (await retry.json()) as {
            choices?: Array<{ message?: { content?: string } }>;
          };
          const content = json.choices?.[0]?.message?.content ?? "";
          return NextResponse.json({ content, stream: false }, { status: 200 });
        }

        const retryErr = await retry.text();
        console.error("[api/chat] Retry also failed:", retry.status, retryErr.slice(0, 800));
        return NextResponse.json(
          { content: `⚠️ AI 暂时无法连接 (${retry.status})。请稍后再试或直接联系我们的团队！\n\n📧 gary@lionfinance.co.nz / 022 161 9172\n📧 allan@lionfinance.co.nz / 021 153 1918` },
          { status: 200 }
        );
      }

      /* 非 400/422 的其他错误 */
      const detail = res.status === 401
        ? provider === "openrouter"
          ? "API key 无效，请检查 Vercel 环境变量 aibot 的值"
          : "API key 无效，请检查 Vercel 环境变量 DEEPSEEK_API_KEY 的值"
        : res.status === 429
          ? "请求太频繁，请稍后再试"
          : errText.slice(0, 200);
      return NextResponse.json(
        { content: `⚠️ 连接出了点问题 (${res.status})：${detail}` },
        { status: 200 }
      );
    }

    /* ---------- 成功：解析响应 ---------- */
    const json = (await res.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
      error?: { message?: string };
    };

    if (json.error) {
      console.error("[api/chat] OpenRouter response error:", json.error);
      return NextResponse.json(
        { content: `⚠️ ${json.error.message ?? "Unknown error"}` },
        { status: 200 }
      );
    }

    const content = json.choices?.[0]?.message?.content ?? "";
    return NextResponse.json({ content, stream: false }, { status: 200 });
  } catch (e) {
    console.error("[api/chat] Server error:", e);
    return NextResponse.json(
      { content: "⚠️ 服务器出了点问题，请稍后再试！" },
      { status: 200 }
    );
  }
}
