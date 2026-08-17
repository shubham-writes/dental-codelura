interface ConceptHeroProps {
  clinicName: string;
  tagline: string;
  subTagline: string;
  location: string;
  accentColor: string;
  bgColor: string;
  textColor: string;       // e.g. "text-zinc-300" or "text-[#0e1a2e]"
  mutedColor: string;      // e.g. "text-zinc-500" or "text-[#0e1a2e]/60"
  ctaText: string;         // color for text on accent bg
  stats: { value: string; label: string }[];
  gridOpacity?: number;    // default 0.03
}

export default function ConceptHero({
  clinicName,
  tagline,
  subTagline,
  location,
  accentColor,
  bgColor,
  textColor,
  mutedColor,
  ctaText,
  stats,
  gridOpacity = 0.03,
}: ConceptHeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-36 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0" style={{ backgroundColor: bgColor }} />
      {/* Subtle grid */}
      <div
        className="absolute inset-x-0 bottom-0 top-20"
        style={{
          opacity: gridOpacity,
          backgroundImage: `linear-gradient(${accentColor}55 1px, transparent 1px), linear-gradient(90deg, ${accentColor}55 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 70% 50% at 50% -5%, ${accentColor}14, transparent)`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p
          className="text-xs tracking-[0.4em] uppercase mb-6 opacity-80"
          style={{ color: accentColor }}
        >
          {location} · Dental Practice
        </p>

        {/* Headline */}
        <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight mb-6 ${textColor}`}>
          {tagline.split("·")[0]}
          {tagline.includes("·") && (
            <>
              <br />
              <span className="font-extralight italic" style={{ color: accentColor }}>
                {tagline.split("·")[1].trim()}
              </span>
            </>
          )}
        </h1>

        {/* Sub-headline */}
        <p className={`text-base sm:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-12 ${mutedColor}`}>
          {subTagline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-4 rounded-full font-medium tracking-wide text-sm transition-all duration-200 hover:scale-[1.02] shadow-lg"
            style={{ backgroundColor: accentColor, color: ctaText, boxShadow: `0 8px 32px ${accentColor}30` }}
          >
            Book a Free Consultation
          </a>
          <a
            href="#services"
            className={`flex items-center gap-2 px-8 py-4 border rounded-full text-sm tracking-wide transition-all duration-200 ${mutedColor}`}
            style={{ borderColor: `${accentColor}30` }}
          >
            Our Services
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M8 3v10M3 8l5 5 5-5" />
            </svg>
          </a>
        </div>
      </div>

      {/* Trust bar */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 border-t"
        style={{ borderColor: `${accentColor}18`, backdropFilter: "blur(20px)", background: `${accentColor}08` }}
      >
        <div className="max-w-4xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-16">
          {stats.map((s) => (
            <div key={s.value} className="flex flex-col items-center gap-1">
              <span className="text-lg font-light tracking-wide" style={{ color: accentColor }}>{s.value}</span>
              <span className={`text-xs tracking-widest uppercase ${mutedColor}`}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
