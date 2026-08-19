import React from "react";
import dynamic from "next/dynamic";
import BackToTopButton from "@/components/BackToTopButton";
import BeforeAfterSlider from "@/components/experiences/BeforeAfterSlider";
import { northbridgeTheme, northbridgeHero, northbridgeServices, northbridgeTrust, northbridgeTestimonials } from "../_data/northbridge";

const ConceptFloatingChatbot = dynamic(() => import("@/components/concepts/ConceptFloatingChatbot"), { ssr: false });
const ConceptMagneticReviews = dynamic(() => import("@/components/concepts/ConceptMagneticReviews"), { ssr: true });

export default function NorthbridgeTemplate() {
  const theme = northbridgeTheme;

  return (
    <div className="min-h-screen flex selection:bg-black/10 text-[#0e1a2e]" style={{ backgroundColor: theme.bgColor, color: "#0e1a2e" }}>
      {/* Preload hero video poster to fix LCP */}
      <link rel="preload" as="image" href="https://res.cloudinary.com/xovi1jzh/image/upload/q_auto,f_auto,w_1920/v1787147626/poster_northbridge_pm440l.webp" fetchPriority="high" />

      {/* Sticky Left Sidebar Navigation */}
      <aside className="hidden lg:flex flex-col justify-between w-52 h-screen sticky top-0 border-r py-10 px-6 bg-[#f9f6f1]" style={{ borderColor: theme.borderColor }}>
        <div>
          <a href="#" className="block mb-16 group">
            <span className="font-playfair italic text-2xl font-bold tracking-wider text-[#0e1a2e]">{theme.clinicName.split(" ")[0]}</span>
            <span className="block text-[10px] tracking-[0.3em] uppercase mt-1.5 font-semibold text-[#9e7d2b]">Aesthetics</span>
          </a>
          <nav className="flex flex-col gap-5">
            {["Services", "Philosophy", "Reviews", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-xs tracking-[0.2em] uppercase text-[#0e1a2e]/70 font-medium hover:text-[#0e1a2e] transition-colors">
                {item}
              </a>
            ))}
          </nav>
        </div>
        <div>
          <a href="#contact" className="block w-full py-3.5 text-center text-xs tracking-widest uppercase font-semibold border border-[#0e1a2e] text-[#0e1a2e] transition-all hover:bg-[#0e1a2e] hover:text-white">
            Book Consult
          </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-full overflow-hidden text-[#0e1a2e] flex flex-col">

        {/* Mobile Header (visible only on small screens) */}
        <header className="lg:hidden flex items-center justify-between p-6 border-b bg-[#f9f6f1]" style={{ borderColor: theme.borderColor }}>
          <span className="font-playfair italic text-2xl font-bold tracking-wider text-[#0e1a2e]">{theme.clinicName.split(" ")[0]}</span>
          <a href="#contact" className="text-xs tracking-widest uppercase border border-[#0e1a2e] px-4 py-2 text-[#0e1a2e]">Book</a>
        </header>

        {/* Hero Section: Split Screen */}
        <section id="hero" className="min-h-[85vh] lg:min-h-screen flex flex-col lg:flex-row border-b relative overflow-hidden" style={{ borderColor: theme.borderColor }}>

          {/* Background Demo Video */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#0e1a2e]">
            <video
              src="https://res.cloudinary.com/xovi1jzh/video/upload/q_auto,f_auto/v1785749441/video_high_jfsypo.mp4"
              poster="https://res.cloudinary.com/xovi1jzh/image/upload/q_auto,f_auto,w_1920/v1787147626/poster_northbridge_pm440l.webp"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Controlled text-safe zone: warm gradient only on the left, right stays luminous */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0e1a2e]/80 via-[#0e1a2e]/40 to-transparent" />
          </div>

          {/* Left: Typography - shifted right for balance, content occupies 55% */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center relative z-10
                          px-6 sm:px-16 lg:pl-16 xl:pl-20 lg:pr-6
                          pt-20 pb-16 lg:pt-0 lg:pb-0">
            {/* Eyebrow */}
            <p className="text-[10px] tracking-[0.4em] uppercase mb-5 font-semibold text-[#c9a84c]">London, UK · Harley Street</p>

            {/* Headline - the money shot */}
            <h1 className="font-playfair text-[2.5rem] sm:text-6xl lg:text-6xl xl:text-[5.5rem] 2xl:text-8xl leading-[0.95] tracking-tight mb-7 text-white font-bold">
              Smile<br />
              makeovers.<br />
              <span className="italic text-[#b0b8c4] font-normal">
                Designed for<br />
                you.
              </span>
            </h1>

            {/* Supporting copy - narrower, smaller, quieter */}
            <p className="max-w-[300px] text-sm leading-relaxed text-white/60 mb-9 font-light">
              {northbridgeHero.subTagline}
            </p>

            {/* CTA - editorial, not SaaS */}
            <div>
              <a
                href="#contact"
                className="inline-block px-7 py-3 border border-white/90 text-white text-[10px] tracking-[0.25em] uppercase font-semibold hover:bg-white hover:text-[#0e1a2e] transition-all duration-300"
              >
                Begin your journey
              </a>
            </div>
          </div>

          {/* Right: Empty - video fills this space fully, keeping it luminous */}
          <div className="w-full lg:w-[45%] h-[38vh] lg:h-auto relative z-10" />
        </section>


        {/* Services: Asymmetrical Editorial Layout */}
        <section id="services" className="py-20 sm:py-28 px-6 sm:px-12 xl:px-16 border-b bg-[#f9f6f1]" style={{ borderColor: theme.borderColor }}>
          <div className="max-w-4xl mx-auto">
            <p className="text-xs tracking-[0.3em] uppercase mb-3 text-center font-semibold text-[#9e7d2b]">Bespoke Treatments</p>
            <h2 className="font-playfair text-3xl sm:text-5xl mb-16 sm:mb-20 text-center text-[#0e1a2e] font-normal">Signature Services</h2>

            <div className="flex flex-col gap-16 sm:gap-20">
              {northbridgeServices.map((service, idx) => (
                <div key={idx} className={`flex flex-col sm:flex-row gap-6 sm:gap-12 items-start ${idx % 2 === 1 ? 'sm:flex-row-reverse' : ''}`}>
                  <div className="w-full sm:w-1/3 flex-shrink-0">
                    <span className="font-playfair text-5xl font-bold text-[#0e1a2e]/30 block mb-3">0{idx + 1}</span>
                    <div className="w-12 h-0.5 bg-[#0e1a2e]/20 mb-6" />
                  </div>
                  <div className="w-full sm:w-2/3">
                    <h3 className="font-playfair text-2xl sm:text-3xl font-normal mb-3 text-[#0e1a2e]">{service.title}</h3>
                    <p className="text-sm sm:text-base leading-relaxed text-[#0e1a2e]/80 max-w-lg mb-6">{service.description}</p>
                    <a href="#contact" className="text-xs font-semibold tracking-[0.2em] uppercase border-b-2 border-[#0e1a2e] pb-1 text-[#0e1a2e] hover:text-[#9e7d2b] hover:border-[#9e7d2b] transition-colors">
                      Discover {service.title}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before / After Slider */}
        <section className="py-20 sm:py-28 px-6 sm:px-12 xl:px-16 border-b bg-[#0e1a2e] text-white" style={{ borderColor: theme.borderColor }}>
          <div className="max-w-5xl mx-auto flex flex-col items-center">
            <p className="text-xs tracking-[0.3em] uppercase mb-3 text-center font-semibold text-[#c9a84c]">Clinical Excellence</p>
            <h2 className="font-playfair text-3xl sm:text-5xl mb-12 text-center text-white font-normal">Real Transformations</h2>
            <div className="w-full max-w-4xl mx-auto">
               <BeforeAfterSlider accentColor="#c9a84c" />
            </div>
          </div>
        </section>

        {/* Philosophy (Trust Section) */}
        <section id="philosophy" className="py-20 sm:py-28 px-6 sm:px-12 xl:px-16 bg-white border-b" style={{ borderColor: theme.borderColor }}>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs tracking-[0.3em] uppercase mb-6 font-semibold text-[#9e7d2b]">Our Philosophy</p>
            <h2 className="font-playfair text-3xl sm:text-5xl leading-snug mb-8 text-[#0e1a2e] font-normal">
              {northbridgeTrust.headline} <span className="italic text-[#0e1a2e]/70">Elevated.</span>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#0e1a2e]/80 max-w-xl mx-auto mb-12">
              {northbridgeTrust.subHeadline}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-left">
              {northbridgeTrust.points.map((pt, i) => (
                <div key={i} className="border-t border-[#0e1a2e]/15 pt-6">
                  <h4 className="font-playfair text-xl sm:text-2xl mb-2 text-[#0e1a2e] font-normal">{pt.title}</h4>
                  <p className="text-xs sm:text-sm leading-relaxed text-[#0e1a2e]/75">{pt.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="reviews" className="py-20 sm:py-28 px-6 sm:px-12 xl:px-16 border-b bg-[#0e1a2e] text-white">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs tracking-[0.3em] uppercase mb-3 text-center font-semibold text-[#c9a84c]">Client Stories</p>
            <h2 className="font-playfair text-3xl sm:text-5xl mb-16 text-center text-white font-normal">Patient Experiences</h2>

            <ConceptMagneticReviews testimonials={northbridgeTestimonials} accentColor="#c9a84c" />
          </div>
        </section>

        {/* Floating Chatbot Widget */}
        <ConceptFloatingChatbot {...theme} suggestions={["What is a smile makeover?", "How much do veneers cost?", "Do you offer consultations?"]} />
        <BackToTopButton bgColor={theme.accentColor} color="#ffffff" />
        {/* Footer */}
        <footer id="contact" className="mt-auto pt-20 pb-8 sm:pt-24 sm:pb-8 px-6 sm:px-12 xl:px-16 bg-white border-t border-[#0e1a2e]/15">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12 sm:gap-16 mb-16 sm:mb-20">
              <div className="max-w-md">
                <h2 className="font-playfair text-3xl sm:text-5xl mb-4 text-[#0e1a2e] font-normal">Begin your transformation.</h2>
                <p className="text-sm sm:text-base text-[#0e1a2e]/80 mb-8 leading-relaxed">We invite you to experience London's premier cosmetic dentistry. Contact our concierge team to schedule your private consultation.</p>
                <a href={`mailto:${theme.email}`} className="px-8 py-4 bg-[#0e1a2e] text-white text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[#0e1a2e]/90 transition-colors inline-block shadow-md">
                  Request Consultation
                </a>
              </div>

              <div className="flex gap-12 sm:gap-16">
                <div>
                  <h4 className="text-xs tracking-[0.3em] uppercase text-[#9e7d2b] font-bold mb-4">Contact</h4>
                  <p className="text-sm font-medium text-[#0e1a2e] mb-2">{theme.phone}</p>
                  <p className="text-sm font-medium text-[#0e1a2e]">{theme.email}</p>
                </div>
                <div>
                  <h4 className="text-xs tracking-[0.3em] uppercase text-[#9e7d2b] font-bold mb-4">Location</h4>
                  <p className="text-sm font-medium text-[#0e1a2e] mb-2">Harley Street</p>
                  <p className="text-sm font-medium text-[#0e1a2e]">London, UK</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-[#0e1a2e]/15 text-xs text-[#0e1a2e]/70 font-medium">
              <p>© {new Date().getFullYear()} {theme.clinicName}</p>
              <a href="/" className="hover:text-[#0e1a2e] font-semibold transition-colors">Concept by Codelura</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
