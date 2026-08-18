const signals = [
  {
    icon: (
      <svg className="w-8 h-8 text-[#d9b665]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Built with modern technology",
    desc: "The same stack used by high-growth UK startups - Next.js, Vercel, and enterprise-grade AI APIs.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#d9b665]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Zero-risk concept first",
    desc: "Every redesign is built to your exact brand colours, logo, and tone before you commit to anything.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#d9b665]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <circle cx="12" cy="11" r="3" />
      </svg>
    ),
    title: "Practices across the UK",
    desc: "Serving clinics in London, Manchester, Birmingham, Southampton, York, and beyond.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#d9b665]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "48-hour turnaround",
    desc: "From your first message to a fully working live demo - in two days, not two weeks.",
  },
];

export default function TrustStrip() {
  return (
    <section className="py-24 px-6 bg-[#08080f] border-y border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#d9b665] text-xs tracking-[0.4em] uppercase mb-4">Why us</p>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
            Built to earn trust, not just attention
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {signals.map((s) => (
            <div
              key={s.title}
              className="flex gap-5 p-6 rounded-2xl border border-white/8 bg-white/[0.02] hover:border-[#d9b665]/20 transition-colors duration-300"
            >
              <div className="flex-shrink-0 mt-0.5">{s.icon}</div>
              <div>
                <h4 className="text-white font-light mb-2">{s.title}</h4>
                <p className="text-white/45 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
