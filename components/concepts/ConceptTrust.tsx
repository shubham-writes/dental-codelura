interface TrustPoint {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface TrustStat {
  value: string;
  label: string;
}

interface ConceptTrustProps {
  headline: string;
  subHeadline: string;
  stats: TrustStat[];
  points: TrustPoint[];
  accentColor: string;
  bgColor: string;
  cardBg: string;
  borderColor: string;
  textColor: string;
  mutedColor: string;
}

export default function ConceptTrust({
  headline,
  subHeadline,
  stats,
  points,
  accentColor,
  bgColor,
  cardBg,
  borderColor,
  textColor,
  mutedColor,
}: ConceptTrustProps) {
  return (
    <section id="about" className="py-28 px-6 border-y" style={{ backgroundColor: bgColor, borderColor }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: accentColor }}>
              Why Choose Us
            </p>
            <h2 className={`text-3xl sm:text-4xl font-light tracking-tight mb-4 ${textColor}`}>
              {headline}
            </h2>
            <p className={`text-base leading-relaxed mb-10 ${mutedColor}`}>{subHeadline}</p>

            {/* Trust points */}
            <div className="flex flex-col gap-6">
              {points.map((p, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${accentColor}18`, color: accentColor }}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <h4 className={`font-light mb-1 ${textColor}`}>{p.title}</h4>
                    <p className={`text-sm leading-relaxed ${mutedColor}`}>{p.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl border p-7 flex flex-col gap-2"
                style={{ backgroundColor: cardBg, borderColor }}
              >
                <span className="text-3xl font-light" style={{ color: accentColor }}>{s.value}</span>
                <span className={`text-xs tracking-widest uppercase ${mutedColor}`}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
