"use client";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ConceptServicesProps {
  services: Service[];
  accentColor: string;
  bgColor: string;
  cardBg: string;
  borderColor: string;
  textColor: string;
  mutedColor: string;
}

export default function ConceptServices({
  services,
  accentColor,
  bgColor,
  cardBg,
  borderColor,
  textColor,
  mutedColor,
}: ConceptServicesProps) {
  return (
    <section id="services" className="py-28 px-6" style={{ backgroundColor: bgColor }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: accentColor }}>
            What We Offer
          </p>
          <h2 className={`text-3xl sm:text-5xl font-light tracking-tight ${textColor}`}>
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="group p-7 rounded-2xl border flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: cardBg,
                borderColor: borderColor,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `${accentColor}50`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = borderColor;
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${accentColor}18`, color: accentColor }}
              >
                {s.icon}
              </div>
              <h3 className={`font-light text-lg ${textColor}`}>{s.title}</h3>
              <p className={`text-sm leading-relaxed ${mutedColor}`}>{s.description}</p>
              <a
                href="#contact"
                className="text-xs tracking-widest uppercase mt-auto flex items-center gap-1 opacity-60 hover:opacity-100 transition-opacity"
                style={{ color: accentColor }}
              >
                Learn more
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M8 3l5 5-5 5"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
