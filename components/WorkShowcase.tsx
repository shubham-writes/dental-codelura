"use client";

export default function WorkShowcase() {
  const examples = [
    {
      id: 1,
      slug: "oakwell",
      name: "Oakwell Dental",
      location: "Leeds, UK",
      tagline: "A cluttered NHS-style homepage rebuilt into a sleek, modern patient experience with AI booking.",
      style: "dark",
      accentColor: "#4FA3E0",
    },
    {
      id: 2,
      slug: "northbridge",
      name: "Northbridge Dental",
      location: "London, UK",
      tagline: "Premium cosmetic practice — elevated from generic to luxury with AI front desk and veneers-first flow.",
      style: "light",
      accentColor: "#c9a84c",
    },
    {
      id: 3,
      slug: "riverside",
      name: "Riverside Dental",
      location: "Bristol, UK",
      tagline: "Family practice transformed — warm, approachable, with 24/7 AI for after-hours patient enquiries.",
      style: "dark",
      accentColor: "#2d5a4e",
    },
  ];

  return (
    <section id="concepts" className="py-28 px-6 bg-[#05050a]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">Redesign Concepts</p>
          <h2 className="text-3xl sm:text-5xl font-light text-zinc-300 tracking-tight">
            Dental website concepts we&apos;ve designed
          </h2>
          <p className="text-zinc-500 mt-4 max-w-xl mx-auto text-base">
            Exploring better digital experiences for modern dental practices — built to show what&apos;s possible,
            not to claim delivery.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-12">
          {examples.map((ex, i) => (
            <WorkCard key={ex.id} example={ex} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkCard({ example, reverse }: { example: any; reverse: boolean }) {
  return (
    <div
      className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 items-center rounded-2xl border border-white/8 bg-white/[0.02] p-6 lg:p-10`}
    >
      {/* Preview panel */}
      <div className="w-full lg:w-3/5 aspect-[16/10] rounded-xl overflow-hidden relative bg-white/5 border border-white/10 group">
        {/* Browser chrome */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-white/5 border-b border-white/10 flex items-center px-3 gap-2 z-10">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <div className="flex-1 mx-3 h-4 rounded-full bg-white/5 text-white/20 text-[10px] flex items-center px-3">
            codelura.com/concepts/{example.slug}
          </div>
        </div>

        {/* Placeholder preview with accent */}
        <div className="absolute inset-0 mt-8 flex flex-col items-center justify-center gap-3">
          <div
            className="w-10 h-10 rounded-full opacity-30 flex items-center justify-center"
            style={{ backgroundColor: example.accentColor }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
              <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
            </svg>
          </div>
          <span className="text-white/20 text-sm">{example.name} — full concept inside</span>
        </div>

        {/* Hover overlay — View Concept CTA */}
        <a
          href={`/concepts/${example.slug}`}
          className="absolute inset-0 mt-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `rgba(0,0,0,0.7)` }}
        >
          <span
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-[#05050a] transition-transform duration-200 hover:scale-105"
            style={{ backgroundColor: example.accentColor }}
          >
            View Full Concept
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8h10M8 3l5 5-5 5"/>
            </svg>
          </span>
        </a>

        {/* Color accent bar at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[3px]"
          style={{ backgroundColor: example.accentColor }}
        />
      </div>

      {/* Text */}
      <div className="w-full lg:w-2/5">
        {/* Independent concept badge */}
        <span className="inline-flex items-center gap-1.5 text-[10px] tracking-widest uppercase font-medium border border-white/10 rounded-full px-3 py-1 text-white/35 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-white/30 inline-block" />
          Independent concept
        </span>
        <span
          className="block text-xs tracking-widest uppercase font-medium mb-1"
          style={{ color: example.accentColor }}
        >
          {example.location}
        </span>
        <h3 className="text-2xl sm:text-3xl font-light text-zinc-300 mt-1 mb-4">
          {example.name}
        </h3>
        <p className="text-zinc-500 leading-relaxed mb-6">{example.tagline}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {["Custom Design", "AI Receptionist", "Booking Flow", "Mobile-First"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-[11px] tracking-wide border border-white/10 rounded-full text-white/35"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={`/concepts/${example.slug}`}
          className="inline-flex items-center gap-2 text-sm tracking-wide transition-all duration-200 hover:gap-3"
          style={{ color: example.accentColor }}
        >
          View full concept
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 8h10M8 3l5 5-5 5"/>
          </svg>
        </a>
      </div>
    </div>
  );
}
