import { NextRequest, NextResponse } from "next/server";
import { getSystemPrompt } from "@/data/aiPrompt";
import { API_NOT_CONFIGURED } from "@/data/aiPrompt";
import type { Lang } from "@/lib/i18n";

/* ---- OpenRouter 配置 ---- */
const API_URL = "https://openrouter.ai/api/v1/chat/completions";
const MODEL = "openai/gpt-oss-120b:free";

type ChatMessage = { role: "user" | "assistant"; content: string };

function isValidLang(lang: string): lang is Lang {
  return lang === "en" || lang === "zh" || lang === "kr";
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { messages = [], lang = "en" } = body as {
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
    const openAiMessages: { role: "system" | "user" | "assistant"; content: string }[] = [
      { role: "system", content: systemPrompt },
      ...messages.map((m) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      })),
    ];

    /* ---------- 先尝试 streaming ---------- */
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
        messages: openAiMessages,
        stream: true,
        max_tokens: 300,
        temperature: 0.7,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("[api/chat] OpenRouter error:", res.status, errText.slice(0, 500));

      /* 如果 streaming 被拒（如 400），回退到 non-streaming */
      if (res.status === 400 || res.status === 422) {
        console.log("[api/chat] Retrying without streaming...");
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
            messages: openAiMessages,
            stream: false,
            max_tokens: 300,
            temperature: 0.7,
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
        console.error("[api/chat] Retry also failed:", retry.status, retryErr.slice(0, 500));
      }

      const detail = res.status === 401
        ? "API key 无效，请检查 Vercel 环境变量 aibot"
        : errText.slice(0, 300);
      return NextResponse.json(
        { content: `⚠️ 连接出了点问题 (${res.status})：${detail}\n\n请联系管理员检查配置。` },
        { status: 200 }
      );
    }

    /* ---------- 检查响应是否真的是 SSE 流 ---------- */
    const responseContentType = res.headers.get("Content-Type") ?? "";
    const responseBody = res.body;

    /* 如果 OpenRouter 返回的是 JSON（非流），直接解析 */
    if (responseContentType.includes("application/json") || !responseBody) {
      const json = (await res.json()) as {
        choices?: Array<{ message?: { content?: string } }>;
      };
      const content = json.choices?.[0]?.message?.content ?? "";
      return NextResponse.json({ content, stream: false }, { status: 200 });
    }

    /* ---------- SSE 流正常处理 ---------- */
    const stream = new ReadableStream({
      async start(controller) {
        const reader = responseBody.getReader();
        const decoder = new TextDecoder();
        let buffer = "";
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split("\n");
            buffer = lines.pop() ?? "";
            for (const line of lines) {
              if (line.startsWith("data: ")) {
                const data = line.slice(6);
                if (data === "[DONE]") continue;
                try {
                  const parsed = JSON.parse(data) as {
                    choices?: Array<{ delta?: { content?: string } }>;
                  };
                  const content = parsed.choices?.[0]?.delta?.content;
                  if (typeof content === "string" && content) {
                    controller.enqueue(new TextEncoder().encode(content));
                  }
                } catch {
                  // ignore parse errors
                }
              }
            }
          }
          if (buffer.trim()) {
            const data = buffer.startsWith("data: ") ? buffer.slice(6) : null;
            if (data && data !== "[DONE]") {
              try {
                const parsed = JSON.parse(data) as {
                  choices?: Array<{ delta?: { content?: string } }>;
                };
                const content = parsed.choices?.[0]?.delta?.content;
                if (typeof content === "string" && content) {
                  controller.enqueue(new TextEncoder().encode(content));
                }
              } catch {
                // ignore
              }
            }
          }
        } catch (e) {
          controller.error(e);
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (e) {
    console.error("[api/chat]", e);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
