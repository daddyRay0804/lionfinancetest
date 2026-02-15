import { NextRequest, NextResponse } from "next/server";
import { getSystemPrompt } from "@/data/aiPrompt";
import { API_NOT_CONFIGURED } from "@/data/aiPrompt";
import type { Lang } from "@/lib/i18n";

/* ---- OpenRouter 配置 ---- */
const API_URL = "https://openrouter.ai/api/v1/chat/completions";
// Prefer a stable chat model for customer-facing Q&A (free models tend to be flaky)
const MODEL = "deepseek/deepseek-chat";

type ChatMessage = { role: "user" | "assistant"; content: string };

function isValidLang(lang: string): lang is Lang {
  return lang === "en" || lang === "zh" || lang === "kr";
}

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { messages = [], lang = "en" } = reqBody as {
      messages?: ChatMessage[];
      lang?: string;
    };

    const language = isValidLang(lang) ? lang : "en";
    /* Vercel 环境变量名: aibot */
    const apiKey = process.env.aibot?.trim();

    if (!apiKey) {
      return NextResponse.json(
        { content: API_NOT_CONFIGURED[language], stream: false },
        { status: 200 }
      );
    }

    const systemPrompt = getSystemPrompt(language);

    /* DeepSeek R1 使用标准 system 角色 */
    const apiMessages: { role: string; content: string }[] = [
      { role: "system", content: systemPrompt },
      ...messages.map((m) => ({
        role: m.role,
        content: m.content,
      })),
    ];

    console.log("[api/chat] Calling OpenRouter:", MODEL, "messages:", apiMessages.length);

    /* ---------- 使用 non-streaming 请求（免费模型更稳定） ---------- */
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        "HTTP-Referer": "https://lionfinance.co.nz",
        "X-Title": "Lion Finance AI Assistant",
      },
      body: JSON.stringify({
        model: MODEL,
        messages: apiMessages,
        // Give the model enough room to finish an answer; low temperature reduces hallucination.
        max_tokens: 800,
        temperature: 0.3,
        include_reasoning: false,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("[api/chat] OpenRouter error:", res.status, errText.slice(0, 800));

      /* 400/422：尝试极简请求（去掉 temperature/max_tokens） */
      if (res.status === 400 || res.status === 422) {
        console.log("[api/chat] Retrying with minimal params...");
        const retry = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
            "HTTP-Referer": "https://lionfinance.co.nz",
            "X-Title": "Lion Finance AI Assistant",
          },
          body: JSON.stringify({
            model: MODEL,
            messages: apiMessages,
            include_reasoning: false,
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
        ? "API key 无效，请检查 Vercel 环境变量 aibot 的值"
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
