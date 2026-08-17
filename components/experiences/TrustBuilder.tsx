"use client";
import { useState, useRef, useEffect } from "react";

export default function TrustBuilder() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <div className="w-full h-full min-h-[360px] rounded-2xl bg-[#0a0a0f] border border-white/10 p-6 sm:p-8 flex flex-col relative overflow-hidden group">
      {/* Background ambient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03),transparent)]" />

      <p className="text-gold text-[10px] tracking-[0.2em] uppercase font-semibold mb-6">Experience 03</p>
      <h3 className="text-xl sm:text-2xl text-white font-light tracking-tight mb-2">Magnetic Trust</h3>
      <p className="text-sm text-zinc-500 mb-8">Elevate testimonials from text to interactive social proof.</p>

      {/* Magnetic Review Card */}
      <div className="flex-1 flex flex-col justify-center w-full max-w-sm mx-auto" style={{ perspective: "1000px" }}>
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setMousePosition({ x: 0, y: 0 });
          }}
          className="relative w-full rounded-xl bg-zinc-900/50 border border-white/10 p-6 overflow-hidden transition-all duration-300 ease-out cursor-default"
          style={{
            transform: isHovered
              ? `rotateX(${(mousePosition.y - 100) / -15}deg) rotateY(${(mousePosition.x - 150) / 15}deg) scale3d(1.02, 1.02, 1.02)`
              : "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
            transformStyle: "preserve-3d"
          }}
        >
          {/* Spotlight Glow that follows cursor */}
          <div
            className="absolute inset-0 z-0 transition-opacity duration-300 pointer-events-none"
            style={{
              background: `radial-gradient(circle 120px at ${mousePosition.x}px ${mousePosition.y}px, rgba(217,182,101,0.15), transparent)`,
              opacity: isHovered ? 1 : 0
            }}
          />

          <div className="relative z-10" style={{ transform: 'translateZ(20px)' }}>
            <div className="flex text-gold mb-4 gap-1 drop-shadow-md">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <p className="text-sm text-zinc-300 italic mb-5 leading-relaxed">"The team didn't just build a website, they built a patient-generating engine. Our Invisalign consultations doubled in month one."</p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-[10px] font-bold text-white tracking-widest">DR</div>
              <div>
                <p className="text-xs font-semibold text-white tracking-wide">Dr. Sarah Jenkins</p>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-0.5">London, UK</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
