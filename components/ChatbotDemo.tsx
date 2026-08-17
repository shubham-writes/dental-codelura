"use client";
import { useState, useRef, useEffect } from "react";

interface Message {
  role: "assistant" | "user";
  content: string;
}

const CLINIC_NAME = "Codelura Dental Demo";
const PHONE = "your practice number";
const accentColor = "#d9b665"; // gold
const headerBg = "#0e0e1a"; 
const chatBg = "#0a0a0f"; 
const borderColor = "rgba(255,255,255,0.1)";
const textColor = "#ffffff";
const mutedColor = "rgba(255,255,255,0.45)";
const bgColor = "#05050a";

export default function ChatbotDemo() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: `Hi! I'm the AI front desk for ${CLINIC_NAME}. How can I help you today?`,
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
          clinicName: CLINIC_NAME,
          phone: PHONE,
        }),
      });
      const data = await res.json();
      setMessages((p) => [...p, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages((p) => [
        ...p,
        { role: "assistant", content: "Something went wrong — please try again!" },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); }
  }

  const suggestions = ["What is a smile makeover?", "How much do veneers cost?", "Do you offer consultations?"];

  return (
    <section id="demo" className="py-28 px-6 border-y" style={{ backgroundColor: bgColor, borderColor }}>
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
              Our AI assistant answers patient questions instantly — day or night. No voicemail, no waiting.
            </p>
            <div className="flex flex-col gap-4 mt-2">
              {[
                { 
                  icon: (
                    <svg className="w-5 h-5" style={{ color: accentColor }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  ), 
                  title: "24/7 availability", 
                  desc: "Responds at 11pm when your team are asleep." 
                },
                { 
                  icon: (
                    <svg className="w-5 h-5" style={{ color: accentColor }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ), 
                  title: "Genuinely intelligent", 
                  desc: "Handles treatment questions, anxiety, and emergencies." 
                },
                { 
                  icon: (
                    <svg className="w-5 h-5" style={{ color: accentColor }} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  ), 
                  title: "Guides toward booking", 
                  desc: "Naturally directs patients to call or book online." 
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 items-start p-4 rounded-xl border transition-all duration-300 hover:bg-white/[0.02]" style={{ borderColor, backgroundColor: `${accentColor}08` }}>
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
              className="rounded-2xl overflow-hidden border shadow-2xl relative"
              style={{ borderColor, boxShadow: `0 24px 80px ${accentColor}12` }}
            >
              {/* Header */}
              <div className="p-5 flex items-center gap-4 border-b" style={{ backgroundColor: headerBg, borderColor }}>
                <div className="relative flex-shrink-0">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center border"
                    style={{ backgroundColor: `${accentColor}10`, borderColor: `${accentColor}30` }}
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
              <div className="p-4 h-72 overflow-y-auto flex flex-col gap-4 relative" style={{ backgroundColor: chatBg }}>
                {messages.map((msg, i) => (
                  <div key={i} className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                    {msg.role === "assistant" && (
                      <div
                        className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-1"
                        style={{ backgroundColor: `${accentColor}10` }}
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
                          ? { backgroundColor: accentColor, color: "#05050a", borderRadius: "20px 20px 4px 20px" }
                          : { backgroundColor: `${accentColor}08`, color: textColor, border: `1px solid ${borderColor}`, borderRadius: "20px 20px 20px 4px" }
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
                      style={{ backgroundColor: `${accentColor}10` }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke={accentColor} strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
                      </svg>
                    </div>
                    <div
                      className="px-4 py-3 border flex items-center gap-1"
                      style={{ backgroundColor: `${accentColor}08`, borderColor, borderRadius: "20px 20px 20px 4px" }}
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
                      className="text-[11px] px-3 py-1.5 rounded-full border transition-colors hover:bg-white/5"
                      style={{ borderColor, color: mutedColor }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}

              {/* Input */}
              <div
                className="p-3 border-t flex gap-2"
                style={{ backgroundColor: headerBg, borderColor }}
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
                    backgroundColor: `rgba(255,255,255,0.03)`,
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
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#05050a" strokeWidth="2.5">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </button>
              </div>
            </div>
            <p className="text-center text-white/20 text-[10px] mt-6 uppercase tracking-[0.2em]">
              Live Demo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
