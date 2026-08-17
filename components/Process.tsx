const steps = [
  {
    number: "01",
    title: "We audit your current site",
    description:
      "Speed, mobile experience, booking flow, trust signals — we review everything in detail and identify exactly where patients are dropping off.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "We build your concept",
    description:
      "A fully working redesign — branded to your practice with your colours, logo, and tone. Includes a live AI receptionist. Built in 48 hours.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "You see it, then decide",
    description:
      "We send you a live link. No pitch call, no pressure. You test it with your team, share it with patients — and only move forward if you love it.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section id="process" className="py-28 px-6 bg-[#08080f] border-y border-white/5">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">How it works</p>
          <h2 className="text-3xl sm:text-5xl font-light text-zinc-300 tracking-tight">
            From concept to live — in 48 hours
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* Connecting line on desktop (z-0, sits behind cards) */}
          <div className="hidden lg:block absolute top-16 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent z-0" />

          {steps.map((step, i) => (
            <div
              key={i}
              className="relative z-10 flex flex-col items-center text-center p-8 rounded-2xl border border-white/8 bg-[#0b0b14] hover:border-gold/30 transition-colors duration-300 group shadow-xl"
            >
              {/* Number */}
              <span className="absolute top-5 left-6 text-gold/25 text-3xl font-light tracking-tight">
                {step.number}
              </span>
              {/* Icon */}
              <div className="w-14 h-14 rounded-full border border-gold/30 bg-[#05050a] flex items-center justify-center mb-6 text-gold group-hover:border-gold/60 transition-colors duration-300 shadow-md">
                {step.icon}
              </div>
              <h3 className="text-lg font-light text-zinc-300 mb-3 tracking-wide">{step.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Trust line */}
        <p className="text-center text-zinc-600 text-sm mt-14 italic">
          &ldquo;Every mockup is built to your exact brand — before you pay a penny.&rdquo;
        </p>
      </div>
    </section>
  );
}
