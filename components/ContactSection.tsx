"use client";
import { useState } from "react";

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="pt-28 pb-8 px-6 bg-[#05050a] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(217,182,101,0.06),transparent)]" />

      <div className="max-w-2xl mx-auto relative z-10 text-center">
        <p className="text-[#d9b665] text-xs tracking-[0.4em] uppercase mb-6">Get started</p>
        <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight mb-4">
          See what your practice
          <br />
          <span className="text-[#d9b665] italic font-extralight">could look like.</span>
        </h2>
        <p className="text-white/45 text-base leading-relaxed mb-12 max-w-lg mx-auto">
          Send us your website and we&apos;ll put together a concept. No pitch call. No obligation. Just a working demo — in 48 hours.
        </p>

        {submitted ? (
          <div className="p-8 rounded-2xl border border-[#d9b665]/30 bg-[#d9b665]/5 flex flex-col items-center justify-center">
            <svg className="w-8 h-8 text-[#d9b665] mb-4 animate-bounce" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-white text-xl font-light mb-2">Got it — thank you!</h3>
            <p className="text-white/50 text-sm">We&apos;ll review your site and reach out within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/25 focus:outline-none focus:border-[#d9b665]/50 transition-colors"
              />
              <input
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="yourpractice.com"
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/25 focus:outline-none focus:border-[#d9b665]/50 transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-[#d9b665] text-[#05050a] font-medium tracking-wide rounded-xl hover:bg-[#e0c483] transition-all duration-200 hover:scale-[1.01] shadow-lg shadow-[#d9b665]/20"
            >
              Request a free concept →
            </button>
          </form>
        )}

        <p className="text-white/20 text-xs mt-6">
          Or reach us directly on{" "}
          <a
            href="https://instagram.com/codelura"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d9b665]/60 hover:text-[#d9b665] transition-colors"
          >
            Instagram @codelura
          </a>
        </p>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-white/20 text-sm tracking-widest">
          <span className="font-semibold text-white/40">Code</span><span className="text-[#d9b665]/40">lura</span> · Dental Division
        </span>
        <span className="text-white/15 text-xs">© 2025 Codelura. All rights reserved.</span>
      </div>
    </section>
  );
}
