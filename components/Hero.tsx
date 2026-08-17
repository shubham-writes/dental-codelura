"use client";
import { useState, useEffect, useRef } from "react";

const LOOM_EMBED_URL = "https://www.loom.com/embed/fdb58c07374b49928449e7bdac1b1f2b?autoplay=1&hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true";

const GoldDust = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;
    
    const particles = Array.from({ length: 50 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      speedY: -Math.random() * 0.2 - 0.05, // float slowly up
      speedX: (Math.random() - 0.5) * 0.1, // slow sway
      opacity: Math.random() * 0.3 + 0.05,
    }));
    
    let animationFrameId: number;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Wrap around vertically
        if (p.y < 0) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        
        // Wrap around horizontally
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(217, 182, 101, ${p.opacity})`;
        ctx.fill();
      }
      animationFrameId = requestAnimationFrame(render);
    };
    render();
    
    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true" style={{ mixBlendMode: 'screen' }}>
      <canvas 
        ref={canvasRef} 
        className="w-full h-full opacity-70 blur-[1px]"
      />
    </div>
  );
};

export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 sm:pt-20 pb-32 sm:pb-36 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-[#05050a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(var(--color-gold-raw),0.08),transparent)]" />
        
        {/* Subtle grid (starts below the navbar height of 80px) */}
        <div
          className="absolute inset-x-0 bottom-0 top-[65px] opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "83px 83px",
          }}
        />

        {/* Ambient Gold Dust Animation */}
        <GoldDust />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto my-auto">
          {/* Eyebrow */}
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-6 sm:mb-8 opacity-80">
            Codelura · Dental Division
          </p>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-zinc-300 leading-[1.1] tracking-tight mb-6">
            Digital experiences for
            <br />
            <span className="relative inline-block mt-2">
              <span 
                className="absolute inset-0 bg-gold/10 blur-2xl rounded-full" 
                style={{ animation: 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
              />
              <span className="relative text-gold font-extralight italic">dental practices.</span>
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-zinc-500 text-base sm:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-12">
            We design websites that build trust before a patient ever calls —
            and keep them engaged long after hours with an AI front desk.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setShowModal(true)}
              className="group flex items-center gap-3 px-8 py-4 bg-gold text-[#05050a] font-medium tracking-wide rounded-full hover:bg-gold-hover transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-gold/20"
            >
              <span className="w-5 h-5 rounded-full bg-black/20 flex items-center justify-center">
                <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor" className="translate-x-[1px]">
                  <path d="M0 0l10 6-10 6z" />
                </svg>
              </span>
              See a 45-second example
            </button>
            <a
              href="#work"
              className="flex items-center gap-2 px-8 py-4 border border-white/10 text-zinc-400 hover:text-zinc-200 hover:border-white/20 tracking-wide rounded-full transition-all duration-200"
            >
              View our work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M8 3v10M3 8l5 5 5-5" />
              </svg>
            </a>
          </div>
        </div>

        {/* Glow source behind trust bar */}
        <div className="absolute bottom-0 left-0 right-0 h-24 z-[9]"
          style={{
            background: "radial-gradient(ellipse 60% 100% at 50% 100%, rgba(217,182,101,0.18) 0%, rgba(217,182,101,0.06) 50%, transparent 100%)"
          }}
        />

        {/* Trust bar */}
        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/[0.12] backdrop-blur-2xl"
          style={{ background: "rgba(19, 19, 19, 0.697)" }}
        >
          <div className="max-w-4xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-16">
            {[
              { value: "12+", label: "Practices redesigned" },
              { value: "UK & US", label: "Markets served" },
              { value: "AI included", label: "In every concept" },
            ].map((stat) => (
              <div key={stat.value} className="flex flex-col items-center gap-1">
                <span className="text-gold text-lg font-light tracking-wide">{stat.value}</span>
                <span className="text-zinc-500 text-xs tracking-widest uppercase">{stat.label}</span>
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
