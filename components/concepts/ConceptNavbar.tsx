"use client";

interface ConceptNavbarProps {
  clinicName: string;
  accentColor: string;
  accentTextClass?: string; // e.g. "text-blue-400"
  bgClass: string;          // e.g. "bg-[#08080f]"
  textClass: string;        // e.g. "text-zinc-300"
  borderClass: string;      // e.g. "border-white/10"
  ctaBg: string;            // inline style bg for CTA button
  ctaText: string;          // e.g. "#08080f"
}

export default function ConceptNavbar({
  clinicName,
  accentColor,
  bgClass,
  textClass,
  borderClass,
  ctaBg,
  ctaText,
}: ConceptNavbarProps) {
  const links = ["Services", "About", "Testimonials", "Contact"];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between border-b ${borderClass}`}
      style={{ backgroundColor: `${ctaBg}cc`, backdropFilter: "blur(16px)" }}
    >
      {/* Clinic name / logo */}
      <a href="#" className="flex items-center gap-2">
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold"
          style={{ backgroundColor: accentColor, color: ctaText }}
        >
          {clinicName[0]}
        </div>
        <span className={`font-light text-lg tracking-wide ${textClass}`}>{clinicName}</span>
      </a>

      {/* Desktop links */}
      <div className="hidden sm:flex items-center gap-8">
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className={`text-sm tracking-widest uppercase transition-colors duration-200 opacity-50 hover:opacity-100 ${textClass}`}
          >
            {l}
          </a>
        ))}
        <a
          href="#contact"
          className="px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
          style={{ backgroundColor: accentColor, color: ctaText }}
        >
          Book Online
        </a>
      </div>

      {/* Mobile CTA */}
      <a
        href="#contact"
        className="sm:hidden px-4 py-2 rounded-full text-xs font-medium tracking-wide"
        style={{ backgroundColor: accentColor, color: ctaText }}
      >
        Book
      </a>
    </nav>
  );
}
