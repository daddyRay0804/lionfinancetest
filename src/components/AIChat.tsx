"use client";

import { useState, useRef, useEffect } from "react";
import type { Lang } from "@/lib/i18n";

const PLACEHOLDER: Record<Lang, string> = {
  en: "Ask about home loans, refinance, or get a quick quote...",
  zh: "咨询房屋贷款、再融资或获取快速报价…",
  kr: "주택 대출, 재융자 또는 빠른 견적 문의…",
};

const WELCOME: Record<Lang, string> = {
  en: "Hello! I'm the Lion Finance assistant. I can help with general questions about home loans, refinancing, construction loans, and more. For personalised advice, please contact our team. How can I help you today?",
  zh: "您好！我是 Lion Finance 咨询助手。我可以回答关于房屋贷款、再融资、建筑贷款等一般问题。如需个性化建议，请联系我们的团队。今天有什么可以帮您？",
  kr: "안녕하세요! Lion Finance 상담 도우미입니다. 주택 대출, 재융자, 건축 대출 등 일반적인 질문에 답변해 드립니다. 맞춤 상담은 팀에 연락해 주세요. 오늘 무엇을 도와드릴까요?",
};

const ERROR_MSG: Record<Lang, string> = {
  en: "Something went wrong. Please try again or contact us for help.",
  zh: "出了点问题，请重试或联系我们。",
  kr: "오류가 발생했습니다. 다시 시도하거나 연락해 주세요.",
};

const SEND_LABEL: Record<Lang, string> = {
  en: "Send",
  zh: "发送",
  kr: "보내기",
};

type AIChatProps = { lang: Lang };

export function AIChat({ lang }: AIChatProps) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; text: string }[]>([]);
  const [streaming, setStreaming] = useState(false);
  const [streamText, setStreamText] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const hasWelcomed = useRef(false);

  useEffect(() => {
    if (open && messages.length === 0 && !hasWelcomed.current) {
      hasWelcomed.current = true;
      setMessages([{ role: "assistant", text: WELCOME[lang] }]);
    }
  }, [open, messages.length, lang]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streamText]);

  const appendStreamThenFinish = (fullText: string) => {
    setStreaming(true);
    setStreamText("");
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setStreamText((prev) => prev + fullText[i]);
        i++;
      } else {
        clearInterval(interval);
        setMessages((prev) => [...prev, { role: "assistant", text: fullText }]);
        setStreamText("");
        setStreaming(false);
      }
    }, 16);
  };

  const send = async () => {
    const text = input.trim();
    if (!text || streaming) return;
    setInput("");
    const newMessages = [...messages, { role: "user" as const, text }];
    setMessages(newMessages);

    const apiMessages = newMessages.map((m) => ({
      role: m.role,
      content: m.text,
    }));

    setStreaming(true);
    setStreamText("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages, lang }),
      });

      const contentType = res.headers.get("Content-Type") ?? "";

      if (contentType.includes("application/json")) {
        const data = (await res.json()) as { content?: string; error?: string; detail?: string };
        setStreaming(false);
        setStreamText("");
        if (!res.ok) {
          setMessages((prev) => [
            ...prev,
            { role: "assistant", text: data.content ?? data.error ?? ERROR_MSG[lang] },
          ]);
          return;
        }
        const content = data.content ?? "";
        if (content) {
          appendStreamThenFinish(content);
        } else {
          setStreaming(false);
        }
        return;
      }

      if (!res.body) {
        setStreaming(false);
        setMessages((prev) => [...prev, { role: "assistant", text: ERROR_MSG[lang] }]);
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let full = "";
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });
          full += chunk;
          setStreamText(full);
        }
      } finally {
        reader.releaseLock();
      }
      setMessages((prev) => [...prev, { role: "assistant", text: full }]);
      setStreamText("");
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", text: ERROR_MSG[lang] }]);
    } finally {
      setStreaming(false);
      setStreamText("");
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 min-w-[56px] min-h-[56px] rounded-full bg-lion-gold text-white shadow-lg hover:bg-lion-gold/90 focus:outline-none focus:ring-2 focus:ring-lion-gold focus:ring-offset-2 flex items-center justify-center transition touch-manipulation ${open ? "animate-none" : "animate-bounce-hint"}`}
        aria-label="Open AI assistant"
      >
        <span className="text-2xl" aria-hidden>💬</span>
      </button>

      {open && (
        <div
          className="fixed bottom-20 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-24 z-50 w-auto sm:w-[380px] max-w-[calc(100vw-2rem)] sm:max-w-[380px] bg-white rounded-xl shadow-xl border border-lion-gold/30 flex flex-col overflow-hidden animate-slide-up max-h-[85vh]"
          role="dialog"
          aria-label="AI consultation assistant"
        >
          <div className="flex items-center justify-between px-4 py-3 bg-lion-navy text-white min-h-[48px]">
            <h3 className="font-semibold text-sm">Lion Finance AI</h3>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 -m-1 hover:bg-white/20 rounded touch-manipulation"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
          <div className="flex-1 overflow-y-auto max-h-[min(320px,50vh)] sm:max-h-[320px] p-4 space-y-3 text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-3 py-2 rounded-lg ${
                    m.role === "user"
                      ? "bg-lion-gold text-white"
                      : "bg-lion-cream text-lion-dark"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {streaming && (
              <div className="flex justify-start">
                <div className="max-w-[85%] px-3 py-2 rounded-lg bg-lion-cream text-lion-dark">
                  {streamText || " "}
                  <span className="animate-pulse">|</span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>
          <div className="p-3 border-t border-lion-gold/20 flex-shrink-0">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder={PLACEHOLDER[lang]}
                className="flex-1 min-h-[44px] px-3 py-2 text-sm border border-lion-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-lion-gold"
                disabled={streaming}
              />
              <button
                type="button"
                onClick={send}
                disabled={streaming || !input.trim()}
                className="min-h-[44px] px-4 py-2 text-sm font-medium bg-lion-gold text-white rounded-lg hover:bg-lion-gold/90 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
              >
                {SEND_LABEL[lang]}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
