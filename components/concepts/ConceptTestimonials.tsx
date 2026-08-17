interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

interface ConceptTestimonialsProps {
  testimonials: Testimonial[];
  accentColor: string;
  bgColor: string;
  cardBg: string;
  borderColor: string;
  textColor: string;
  mutedColor: string;
}

export default function ConceptTestimonials({
  testimonials,
  accentColor,
  bgColor,
  cardBg,
  borderColor,
  textColor,
  mutedColor,
}: ConceptTestimonialsProps) {
  return (
    <section id="testimonials" className="py-28 px-6" style={{ backgroundColor: bgColor }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: accentColor }}>
            Patient Reviews
          </p>
          <h2 className={`text-3xl sm:text-5xl font-light tracking-tight ${textColor}`}>
            What our patients say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border p-8 flex flex-col gap-5"
              style={{ backgroundColor: cardBg, borderColor }}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <svg key={si} width="14" height="14" viewBox="0 0 24 24" fill={accentColor}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className={`text-sm leading-relaxed flex-grow ${mutedColor}`}>
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t" style={{ borderColor }}>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-medium"
                  style={{ backgroundColor: `${accentColor}20`, color: accentColor }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <p className={`text-sm font-light ${textColor}`}>{t.name}</p>
                  <p className={`text-xs ${mutedColor}`}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
