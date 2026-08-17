"use client";
import { useState, useRef } from "react";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

function MagneticCard({ t, accentColor }: { t: Testimonial; accentColor: string }) {
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
    <div className="flex-1 flex flex-col justify-center w-full" style={{ perspective: "1000px" }}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setMousePosition({ x: 0, y: 0 });
        }}
        className="relative w-full h-full rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 ease-out cursor-default"
        style={{
          transform: isHovered
            ? `rotateX(${(mousePosition.y - 150) / -20}deg) rotateY(${(mousePosition.x - 150) / 20}deg) scale3d(1.02, 1.02, 1.02)`
            : "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
          transformStyle: "preserve-3d"
        }}
      >
        {/* Spotlight Glow */}
        <div
          className="absolute inset-0 z-0 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle 120px at ${mousePosition.x}px ${mousePosition.y}px, ${accentColor}30, transparent)`,
            opacity: isHovered ? 1 : 0
          }}
        />

        <div className="relative z-10 h-full flex flex-col justify-between" style={{ transform: 'translateZ(20px)' }}>
          <div>
            <div className="flex mb-6 gap-1 drop-shadow-md" style={{ color: accentColor }}>
              {[...Array(t.rating)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <p className="font-playfair italic text-base sm:text-lg leading-relaxed mb-8 text-zinc-200">
              "{t.quote}"
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase font-semibold mb-1" style={{ color: accentColor }}>{t.name}</p>
            <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-medium">{t.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ConceptMagneticReviews({ testimonials, accentColor }: { testimonials: Testimonial[], accentColor: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((t, i) => (
        <MagneticCard key={i} t={t} accentColor={accentColor} />
      ))}
    </div>
  );
}
