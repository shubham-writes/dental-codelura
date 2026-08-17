"use client";
import { useState, useRef, useEffect } from "react";

interface Message {
  role: "assistant" | "user";
  content: string;
}

interface ConceptChatbotProps {
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

export default function ConceptChatbot({
  clinicName,
  phone,
  accentColor,
  headerBg,
  chatBg,
  borderColor,
  textColor,
  mutedColor,
  bgColor,
  suggestions = ["What are your opening hours?", "Do you see nervous patients?", "How do I book an appointment?"],
}: ConceptChatbotProps) {
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

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

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
    <section id="ai" className="py-28 px-6 border-y" style={{ backgroundColor: bgColor, borderColor }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          {/* Left: value props */}
          <div className="w-full lg:w-2/5 flex flex-col gap-5">
            <p className="text-xs tracking-[0.4em] uppercase" style={{ color: accentColor }}>AI Front Desk</p>
            <h2 className={`text-3xl sm:text-4xl font-light tracking-tight ${textColor}`}>
              Always on,<br />
              <span className="font-extralight italic" style={{ color: accentColor }}>even after hours.</span>
            </h2>
            <p className={`text-base leading-relaxed ${mutedColor}`}>
              Our AI assistant answers patient questions instantly - day or night. No voicemail, no waiting.
            </p>
            <div className="flex flex-col gap-4 mt-2">
              {[
                { icon: "🕐", title: "24/7 availability", desc: "Responds at 11pm when your team are asleep." },
                { icon: "🧠", title: "Genuinely intelligent", desc: "Handles treatment questions, anxiety, and emergencies." },
                { icon: "📅", title: "Guides toward booking", desc: "Naturally directs patients to call or book online." },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 items-start p-4 rounded-xl border" style={{ borderColor, backgroundColor: `${accentColor}08` }}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-base" style={{ backgroundColor: `${accentColor}18` }}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className={`font-light text-sm mb-0.5 ${textColor}`}>{item.title}</h4>
                    <p className={`text-xs leading-relaxed ${mutedColor}`}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Chat widget */}
          <div className="w-full lg:w-[380px]">
            <div
              className="rounded-2xl overflow-hidden border shadow-2xl"
              style={{ borderColor, boxShadow: `0 24px 80px ${accentColor}12` }}
            >
              {/* Header */}
              <div className="p-5 flex items-center gap-4" style={{ backgroundColor: headerBg }}>
                <div className="relative flex-shrink-0">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center border"
                    style={{ backgroundColor: `${accentColor}20`, borderColor: `${accentColor}40` }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke={accentColor} strokeWidth="1.5" viewBox="0 0 24 24">
                      <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
                    </svg>
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 rounded-full" style={{ borderColor: headerBg }} />
                </div>
                <div>
                  <h4 className={`font-light tracking-wide ${textColor}`}>AI Front Desk</h4>
                  <p className={`text-xs tracking-widest mt-0.5 ${mutedColor}`}>ONLINE — Ask me anything</p>
                </div>
              </div>

              {/* Messages */}
              <div className="p-4 h-72 overflow-y-auto flex flex-col gap-4" style={{ backgroundColor: chatBg }}>
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
                      className="px-4 py-3 text-[13px] max-w-[85%] leading-[1.6] rounded-[20px]"
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
                      className="px-4 py-3 rounded-[20px] border flex items-center gap-1"
                      style={{ backgroundColor: `${accentColor}10`, borderColor }}
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
                <div className="px-4 pb-3 flex gap-2 flex-wrap" style={{ backgroundColor: chatBg }}>
                  {suggestions.map((s) => (
                    <button
                      key={s}
                      onClick={() => { setInput(s); setTimeout(handleSend, 50); }}
                      className="text-[11px] px-3 py-1.5 rounded-full border transition-colors"
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
                className="p-3 border-t flex gap-2"
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
                  className="flex-grow rounded-full px-4 py-2 text-sm focus:outline-none disabled:opacity-50"
                  style={{
                    backgroundColor: `${accentColor}08`,
                    border: `1px solid ${borderColor}`,
                    color: textColor,
                  }}
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-105 disabled:opacity-30 flex-shrink-0"
                  style={{ backgroundColor: accentColor }}
                  aria-label="Send"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
