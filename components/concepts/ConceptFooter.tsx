interface ConceptFooterProps {
  clinicName: string;
  location: string;
  phone: string;
  email: string;
  accentColor: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  mutedColor: string;
  ctaText: string;
}

export default function ConceptFooter({
  clinicName,
  location,
  phone,
  email,
  accentColor,
  bgColor,
  borderColor,
  textColor,
  mutedColor,
  ctaText,
}: ConceptFooterProps) {
  return (
    <footer id="contact" className="pt-20 pb-8 px-6 border-t" style={{ backgroundColor: bgColor, borderColor }}>
      <div className="max-w-6xl mx-auto">
        {/* CTA Banner */}
        <div
          className="rounded-3xl p-10 sm:p-16 text-center mb-16 relative overflow-hidden"
          style={{ backgroundColor: accentColor }}
        >
          {/* Subtle pattern */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `linear-gradient(${ctaText} 1px, transparent 1px), linear-gradient(90deg, ${ctaText} 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative z-10">
            <p className="text-xs tracking-[0.4em] uppercase mb-4 opacity-60" style={{ color: ctaText }}>
              Ready to Begin?
            </p>
            <h2 className="text-3xl sm:text-4xl font-light mb-4" style={{ color: ctaText }}>
              Book your first appointment
            </h2>
            <p className="max-w-md mx-auto text-sm leading-relaxed mb-8 opacity-70" style={{ color: ctaText }}>
              New patients always welcome. Our team will respond within 24 hours.
            </p>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium tracking-wide transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: ctaText, color: accentColor }}
            >
              Get in Touch
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M8 3l5 5-5 5"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Footer columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
          <div>
            <h4 className={`font-light text-lg mb-3 ${textColor}`}>{clinicName}</h4>
            <p className={`text-sm leading-relaxed ${mutedColor}`}>{location}</p>
          </div>
          <div>
            <h4 className={`text-xs tracking-widest uppercase mb-3 ${mutedColor}`}>Contact</h4>
            <p className={`text-sm ${mutedColor}`}>{phone}</p>
            <p className={`text-sm ${mutedColor}`}>{email}</p>
          </div>
          <div>
            <h4 className={`text-xs tracking-widest uppercase mb-3 ${mutedColor}`}>Hours</h4>
            <p className={`text-sm ${mutedColor}`}>Mon-Fri: 8am - 6pm</p>
            <p className={`text-sm ${mutedColor}`}>Sat: 9am - 2pm</p>
            <p className={`text-sm mt-1 flex items-center gap-1.5`} style={{ color: accentColor }}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
              AI available 24/7
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={`pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3`} style={{ borderColor }}>
          <p className={`text-xs ${mutedColor}`}>
            © {new Date().getFullYear()} {clinicName}. All rights reserved.
          </p>
          {/* Codelura credit — subtle but visible */}
          <a
            href="/"
            className="flex items-center gap-2 text-xs tracking-wide opacity-50 hover:opacity-100 transition-opacity duration-200"
            style={{ color: accentColor }}
          >
            Concept by Codelura
          </a>
        </div>
      </div>
    </footer>
  );
}
