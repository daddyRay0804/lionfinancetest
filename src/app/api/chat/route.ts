import { NextRequest, NextResponse } from "next/server";
import { getSystemPrompt } from "@/data/aiPrompt";
import { API_NOT_CONFIGURED } from "@/data/aiPrompt";
import type { Lang } from "@/lib/i18n";

const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";
const MODEL = "gpt-4o-mini";

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
    const apiKey = process.env.OPENAI_API_KEY?.trim();

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

    const res = await fetch(OPENAI_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages: openAiMessages,
        stream: true,
        max_tokens: 800,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      return NextResponse.json(
        {
          error: "OpenAI request failed",
          detail: res.status === 401 ? "Invalid API key" : errText.slice(0, 200),
        },
        { status: res.status >= 500 ? 502 : 400 }
      );
    }

    const responseBody = res.body;
    if (!responseBody) {
      return NextResponse.json(
        { error: "No response body" },
        { status: 502 }
      );
    }

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
                  // ignore parse errors for non-JSON lines
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
