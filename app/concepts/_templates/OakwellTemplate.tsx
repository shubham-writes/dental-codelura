import ConceptNavbar from "@/components/concepts/ConceptNavbar";
import ConceptHero from "@/components/concepts/ConceptHero";
import ConceptServices from "@/components/concepts/ConceptServices";
import ConceptTrust from "@/components/concepts/ConceptTrust";
import ConceptTestimonials from "@/components/concepts/ConceptTestimonials";
import ConceptFloatingChatbot from "@/components/concepts/ConceptFloatingChatbot";
import ConceptFooter from "@/components/concepts/ConceptFooter";
import TreatmentExplorer from "@/components/experiences/TreatmentExplorer";
import BeforeAfterSlider from "@/components/experiences/BeforeAfterSlider";
import BackToTopButton from "@/components/BackToTopButton";

import { oakwellTheme, oakwellHero, oakwellServices, oakwellTrust, oakwellTestimonials } from "../_data/oakwell";

export default function OakwellTemplate() {
  return (
    <div className="font-sans antialiased selection:bg-white/10 relative z-0" style={{ backgroundColor: oakwellTheme.bgColor, color: oakwellTheme.textColor }}>
      {/* ── Custom Transparent Navbar for Oakwell ── */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 py-4 sm:py-6 md:px-12 w-full max-w-[1400px] mx-auto">
        {/* Hamburger Menu (Left) */}
        <div className="w-auto lg:flex-1">
          <button className="text-white hover:opacity-70 transition-opacity" aria-label="Menu">
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>

        {/* Logo (Center) */}
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-sm border border-white/10">
            <svg className="w-5 h-5 sm:w-8 sm:h-8" style={{ color: oakwellTheme.accentColor }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            <div className="flex flex-col">
              <span className="text-white font-playfair text-base sm:text-xl leading-none">Oakwell Dental</span>
              <span className="hidden sm:block text-[9px] font-medium tracking-wide" style={{ color: "#2c2a2a" }}>Caring for your smile</span>
            </div>
          </div>
        </div>

        {/* CTAs (Right) */}
        <div className="w-auto lg:flex-1 flex items-center justify-end gap-4">
          <a href={`tel:${oakwellTheme.phone}`} className="hidden md:flex items-center text-white text-xs tracking-widest px-5 py-2.5 border border-white/30 rounded-sm hover:bg-white/10 transition-colors">
            {oakwellTheme.phone}
          </a>
          <a href="#contact" className="text-[#05050a] text-[10px] sm:text-xs font-semibold tracking-widest px-3 sm:px-6 py-2 sm:py-2.5 rounded-sm hover:opacity-90 transition-opacity text-center" style={{ backgroundColor: oakwellTheme.accentColor }}>
            BOOK <span className="hidden sm:inline">ONLINE</span>
          </a>
        </div>
      </nav>

      {/* ── Oakwell Premium Hero (Full Video) ── */}
      <section
        id="hero"
        className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-5 pt-28 pb-20 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <video
            src="https://res.cloudinary.com/xovi1jzh/video/upload/v1785749441/video_high_jfsypo.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "radial-gradient(circle at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.85) 100%)",
          }}
        />

        <div className="relative z-10 max-w-[800px] flex flex-col items-center">
          <p
            className="text-[10px] md:text-xs font-medium tracking-[0.25em] md:tracking-[0.35em] uppercase mb-6 md:mb-8"
            style={{ color: oakwellTheme.accentColor }}
          >
            Premium Dentistry in {oakwellTheme.location}
          </p>
          <h1
            className="text-[36px] sm:text-[42px] md:text-[56px] lg:text-[68px] leading-[1.05] font-playfair font-normal tracking-tight mb-8 text-white/95"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}
          >
            Your Smile, <br />
            <em
              className="not-italic block mt-1"
              style={{ color: oakwellTheme.accentColor, fontStyle: "italic" }}
            >
              Transformed.
            </em>
          </h1>
          <p className="text-sm md:text-[16px] leading-[1.8] mb-12 max-w-[650px] text-center font-light px-4" style={{ color: "rgba(255,255,255,0.9)", textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}>
            Experience world-class dentistry in a calm, welcoming environment. We combine cutting-edge technology with a gentle approach so every visit feels effortless.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mb-12 w-full sm:w-auto px-6">
            <a
              href="#contact"
              className="inline-flex w-full sm:w-auto items-center justify-center text-[11px] md:text-[13px] font-semibold tracking-[0.15em] uppercase py-4 md:py-5 px-8 md:px-10 rounded-sm transition-all duration-300 hover:opacity-90 hover:-translate-y-1"
              style={{ backgroundColor: oakwellTheme.accentColor, color: "#05050a", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
            >
              Book a Consultation
            </a>
            <a
              href="#services"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 text-[11px] md:text-[13px] font-medium tracking-[0.15em] uppercase py-4 md:py-5 px-8 md:px-10 rounded-sm transition-all duration-300 hover:opacity-70 hover:bg-white/5"
              style={{ color: "white", border: "1px solid rgba(255,255,255,0.3)" }}
            >
              Our Treatments
            </a>
          </div>

          {/* ── Review Stars ── */}
          <div className="w-full max-w-[300px] border-t border-white/10 pt-6 flex flex-col items-center">
            <div className="flex items-center gap-1.5 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-[#F5A623]" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="text-white text-[13px] font-semibold mb-1">4.9 / 5.0 Average</p>
            <p className="text-white/50 text-[10px] uppercase tracking-widest">Based on 442 Google Reviews</p>
          </div>
        </div>
      </section>

      {/* Before / After Slider */}
      <section className="py-20 sm:py-28 px-6 bg-[#05050a] border-y border-white/5 relative z-10">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-10 text-center">Transformations</h2>
          <div className="w-full max-w-4xl mx-auto">
            <BeforeAfterSlider accentColor={oakwellTheme.accentColor} />
          </div>
        </div>
      </section>

      {/* AI Treatment Match (TreatmentExplorer) */}
      <section className="py-20 sm:py-28 px-6 bg-[#0a0a0f] border-b border-white/5 relative z-10">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 items-center justify-between">
          <div className="lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-6">Discover your perfect treatment.</h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-lg mb-8">Not sure what you need? Use our proprietary AI matching system to find the optimal cosmetic solution for your smile goals in seconds.</p>
            <ul className="flex flex-col gap-4 text-sm text-zinc-300">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Instant personalized recommendations
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                No consultation fee required
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Accurate clinical timelines
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2 w-full max-w-lg">
            <TreatmentExplorer />
          </div>
        </div>
      </section>

      <ConceptServices {...oakwellTheme} services={oakwellServices} />
      <ConceptTrust {...oakwellTheme} {...oakwellTrust} />
      <ConceptTestimonials {...oakwellTheme} testimonials={oakwellTestimonials} />
      <ConceptFloatingChatbot {...oakwellTheme} suggestions={["What is a smile makeover?", "How much do veneers cost?", "Do you offer consultations?"]} />
      <BackToTopButton bgColor={oakwellTheme.accentColor} color="#05050a" />
      <ConceptFooter {...oakwellTheme} />
    </div>
  );
}
