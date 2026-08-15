"use client";
import { useState } from "react";

const LOOM_EMBED_URL = "https://www.loom.com/embed/fdb58c07374b49928449e7bdac1b1f2b?autoplay=1&hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true";

export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-[#05050a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(201,168,76,0.08),transparent)]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Eyebrow */}
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-8 opacity-80">
            Codelura · Dental Division
          </p>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white leading-[1.1] tracking-tight mb-6">
            Digital experiences for
            <br />
            <span className="text-[#C9A84C] font-extralight italic">dental practices.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-white/50 text-lg sm:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-12">
            We design websites that build trust before a patient ever calls — 
            and keep them engaged long after hours with an AI front desk.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setShowModal(true)}
              className="group flex items-center gap-3 px-8 py-4 bg-[#C9A84C] text-[#05050a] font-medium tracking-wide rounded-full hover:bg-[#d4b560] transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-[#C9A84C]/20"
            >
              <span className="w-5 h-5 rounded-full bg-[#05050a]/20 flex items-center justify-center">
                <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor">
                  <path d="M0 0l10 6-10 6z" />
                </svg>
              </span>
              See a 45-second example
            </button>
            <a
              href="#work"
              className="flex items-center gap-2 px-8 py-4 border border-white/15 text-white/70 hover:text-white hover:border-white/30 tracking-wide rounded-full transition-all duration-200"
            >
              View our work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M8 3v10M3 8l5 5 5-5" />
              </svg>
            </a>
          </div>
        </div>

        {/* Trust bar */}
        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/5 bg-white/[0.02] backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-16">
            {[
              { value: "12+", label: "Practices redesigned" },
              { value: "UK & US", label: "Markets served" },
              { value: "AI included", label: "In every concept" },
            ].map((stat) => (
              <div key={stat.value} className="flex flex-col items-center gap-1">
                <span className="text-[#C9A84C] text-lg font-light tracking-wide">{stat.value}</span>
                <span className="text-white/40 text-xs tracking-widest uppercase">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loom Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={LOOM_EMBED_URL}
              className="w-full h-full"
              allowFullScreen
              allow="autoplay; fullscreen"
            />
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
              aria-label="Close video"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
