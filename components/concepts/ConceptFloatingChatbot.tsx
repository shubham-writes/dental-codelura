"use client";
import { useState, useRef, useEffect } from "react";

interface Message {
  role: "assistant" | "user";
  content: string;
}

interface ConceptFloatingChatbotProps {
  clinicName: string;
  phone: string;
  accentColor: string;
  headerBg: string;
  chatBg: string;
  borderColor: string;
  textColor: string;
  mutedColor: string;
  bgColor: string;
  suggestions?: string[];
}

export default function ConceptFloatingChatbot({
  clinicName,
  phone,
  accentColor,
  headerBg,
  chatBg,
  borderColor,
  textColor,
  mutedColor,
  bgColor,
  suggestions = ["What is a smile makeover?", "How much do veneers cost?", "Do you offer consultations?"],
}: ConceptFloatingChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: `Hi! I'm the AI front desk for ${clinicName}. How can I help you today?`,
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [messages, isLoading, isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  async function handleSend() {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;
    const userMessage: Message = { role: "user", content: trimmed };
    setMessages((p) => [...p, userMessage]);
    setInput("");
    setIsLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          clinicName,
          phone,
        }),
      });
      const data = await res.json();
      setMessages((p) => [...p, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages((p) => [
        ...p,
        { role: "assistant", content: "Something went wrong - please try again!" },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div 
          className="mb-4 w-[350px] h-[550px] max-w-[calc(100vw-3rem)] max-h-[calc(100vh-7rem)] rounded-2xl overflow-hidden border shadow-2xl flex flex-col origin-bottom-right transition-all duration-300 animate-in zoom-in-95"
          style={{ borderColor, boxShadow: `0 24px 80px ${accentColor}20` }}
        >
          {/* Header */}
          <div className="p-4 flex flex-shrink-0 items-center justify-between border-b" style={{ backgroundColor: headerBg, borderColor }}>
            <div className="flex items-center gap-3">
              <div className="relative flex-shrink-0">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center border"
                  style={{ backgroundColor: `${accentColor}20`, borderColor: `${accentColor}40` }}
                >
                  <svg className="w-5 h-5" fill="none" stroke={accentColor} strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
                  </svg>
                </div>
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 rounded-full" style={{ borderColor: headerBg }} />
              </div>
              <div>
                <h4 className={`font-light text-sm tracking-wide ${textColor}`}>AI Front Desk</h4>
                <p className={`text-[10px] tracking-widest mt-0.5 ${mutedColor}`}>ONLINE</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-black/5"
              style={{ color: mutedColor }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollContainerRef} className="p-4 flex-1 min-h-0 overflow-y-auto flex flex-col gap-4 scroll-smooth" style={{ backgroundColor: chatBg }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                {msg.role === "assistant" && (
                  <div
                    className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-1"
                    style={{ backgroundColor: `${accentColor}18` }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke={accentColor} strokeWidth="1.5" viewBox="0 0 24 24">
                      <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
                    </svg>
                  </div>
                )}
                <div
                  className="px-4 py-3 text-[13px] max-w-[85%] leading-[1.6]"
                  style={
                    msg.role === "user"
                      ? { backgroundColor: accentColor, color: "#fff", borderRadius: "20px 20px 4px 20px" }
                      : { backgroundColor: `${accentColor}10`, color: textColor, border: `1px solid ${borderColor}`, borderRadius: "20px 20px 20px 4px" }
                  }
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-2">
                <div
                  className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-1"
                  style={{ backgroundColor: `${accentColor}18` }}
                >
                  <svg className="w-4 h-4" fill="none" stroke={accentColor} strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
                  </svg>
                </div>
                <div
                  className="px-4 py-3 border flex items-center gap-1"
                  style={{ backgroundColor: `${accentColor}10`, borderColor, borderRadius: "20px 20px 20px 4px" }}
                >
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-2 h-2 rounded-full inline-block animate-pulse"
                      style={{ backgroundColor: accentColor, animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick suggestions */}
          {messages.length === 1 && (
            <div className="px-4 pb-3 flex-shrink-0 flex gap-2 flex-wrap" style={{ backgroundColor: chatBg }}>
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => { setInput(s); setTimeout(handleSend, 50); }}
                  className="text-[11px] px-3 py-1.5 rounded-full border transition-colors hover:bg-black/5"
                  style={{ borderColor, color: mutedColor }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = accentColor;
                    (e.currentTarget as HTMLButtonElement).style.color = accentColor;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = borderColor;
                    (e.currentTarget as HTMLButtonElement).style.color = mutedColor;
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div
            className="p-3 border-t flex-shrink-0 flex gap-2"
            style={{ backgroundColor: chatBg, borderColor }}
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask anything..."
              disabled={isLoading}
              className="flex-grow rounded-full px-4 py-2 text-[13px] focus:outline-none disabled:opacity-50"
              style={{
                backgroundColor: `${accentColor}08`,
                border: `1px solid ${borderColor}`,
                color: textColor,
              }}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-105 disabled:opacity-30 flex-shrink-0"
              style={{ backgroundColor: accentColor }}
              aria-label="Send"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-transform"
        style={{ backgroundColor: accentColor || '#c9a84c' }}
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>
    </div>
  );
}
