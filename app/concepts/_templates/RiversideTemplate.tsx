"use client";
import React, { useState, useEffect, useRef } from "react";
import BeforeAfterSlider from "@/components/experiences/BeforeAfterSlider";
import BackToTopButton from "@/components/BackToTopButton";
import { riversideTheme, riversideHero, riversideServices, riversideTestimonials } from "../_data/riverside";

export default function RiversideTemplate() {
  const theme = riversideTheme;
  const primaryColor = theme.accentColor; // #2d5a4e
  const secondaryColor = "#C9A84C"; // Gold accent for luxury

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: "assistant", content: `Hi! 👋 I'm the front desk assistant for ${theme.clinicName}. How can I help you today?` }]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { role: "user", content: input }]);
    setInput("");
    setTimeout(() => {
      setMessages(prev => [...prev, { role: "assistant", content: "Thanks for reaching out! Please call us to book your appointment." }]);
    }, 1000);
  };

  return (
    <div className="font-sans antialiased selection:bg-black/10 min-h-screen relative bg-white text-[#1c2b20]">
      {/* ── Luxury Navbar (Always solid background) ── */}
      <header
        className="fixed top-0 w-full z-50 transition-all duration-300"
        style={{
          backgroundColor: primaryColor,
          borderBottom: `2px solid ${secondaryColor}`,
        }}
      >
        <div className="w-full px-5 md:px-[60px] py-3 max-w-[1320px] mx-auto grid items-center gap-4" style={{ gridTemplateColumns: "1fr auto 1fr", minHeight: "70px" }}>
          <div className="justify-self-start flex md:hidden">
            <button className="p-2 text-white/85" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle Menu">
              {mobileOpen ? (
                <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
              ) : (
                <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
              )}
            </button>
          </div>
          
          <div className="flex items-center gap-3 shrink-0 justify-self-center md:justify-self-start min-w-0">
            <a href="#main-content" className="flex items-center gap-3 md:gap-4 transition-opacity hover:opacity-80">
              <div className="w-10 h-10 md:w-12 md:h-12 border border-white/40 flex items-center justify-center rounded-none" style={{ borderColor: secondaryColor }}>
                <span className="text-[20px] md:text-[24px] text-white font-playfair">{theme.clinicName.charAt(0)}</span>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-[12px] md:text-[14px] tracking-[0.25em] uppercase font-medium leading-tight text-white font-playfair">{theme.clinicName}</span>
                <span className="text-[8px] md:text-[9px] tracking-[0.3em] uppercase mt-1 opacity-70 text-white">Private Clinic</span>
              </div>
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center justify-center gap-8 justify-self-center">
            {["#services", "#about", "#reviews", "#footer"].map((href) => (
              <a key={href} href={href} className="text-[11px] font-medium tracking-[0.15em] uppercase text-white/75 hover:text-white transition-colors">
                {href === "#footer" ? "Contact" : href.replace("#", "").charAt(0).toUpperCase() + href.replace("#", "").slice(1)}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3 justify-self-end">
            <a href={`tel:${theme.phone}`} className="text-[11px] font-medium tracking-[0.12em] uppercase py-2 px-5 rounded-none transition-all duration-200 hover:opacity-80 border border-white/40 text-white">{theme.phone}</a>
            <a href="#contact" className="text-[11px] font-semibold tracking-[0.12em] uppercase py-2 px-5 rounded-none transition-all duration-200 hover:opacity-90 text-white" style={{ backgroundColor: secondaryColor }}>Book Online</a>
          </div>
        </div>

        {mobileOpen && (
          <div className="px-5 py-5 flex flex-col gap-5 border-t rounded-none md:hidden" style={{ backgroundColor: primaryColor, borderColor: "rgba(255,255,255,0.08)" }}>
            {["#about", "#services", "#reviews", "#footer"].map(href => (
              <a key={href} href={href} onClick={() => setMobileOpen(false)} className="text-[12px] font-medium tracking-[0.15em] uppercase text-white/75">{href.replace("#", "").charAt(0).toUpperCase() + href.replace("#", "").slice(1)}</a>
            ))}
            <a href="#contact" className="text-[12px] font-semibold tracking-[0.12em] uppercase py-3 text-center rounded-none text-white" style={{ backgroundColor: secondaryColor }}>Book Online</a>
          </div>
        )}
      </header>

      {/* ── Luxury Hero (Split Style) ── */}
      <section id="main-content" className="relative w-full min-h-screen flex flex-col md:flex-row pt-[70px]">
        <div className="w-full md:w-[48%] flex flex-col justify-start px-8 md:px-[60px] pt-[30px] md:pt-[40px] pb-20 relative z-10 rounded-none" style={{ backgroundColor: primaryColor }}>
          <p className="text-[10px] font-medium tracking-[0.3em] uppercase mb-5" style={{ color: secondaryColor }}>{theme.location}</p>
          <h1 className="font-playfair text-[40px] sm:text-[50px] md:text-[54px] lg:text-[62px] leading-[1.08] font-normal mb-6 text-white/90">
            {riversideHero.tagline.split("·")[0]}
            <em className="not-italic block mt-2 text-white font-playfair italic">
              {riversideHero.tagline.split("·")[1]}
            </em>
          </h1>
          <div className="w-10 h-[1px] mb-6 rounded-none" style={{ backgroundColor: secondaryColor }} />
          <p className="text-[14px] leading-[1.8] mb-8 text-white/70 max-w-md">{riversideHero.subTagline}</p>
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a href="#contact" className="inline-flex items-center justify-center text-[11px] font-semibold tracking-[0.15em] uppercase py-4 px-8 rounded-none transition-all duration-300 hover:opacity-85 text-white" style={{ backgroundColor: secondaryColor }}>Book a Consultation</a>
            <a href="#services" className="inline-flex items-center justify-center gap-2 text-[11px] font-medium tracking-[0.15em] uppercase py-4 px-8 rounded-none transition-all duration-300 hover:opacity-70 text-white/80 border border-white/30">
              Our Treatments 
              <svg className="w-3.5 h-3.5 stroke-current" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
          </div>
          <div className="flex items-center gap-4 pt-6 border-t border-white/10 rounded-none">
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-[#F5A623]" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
                <span className="text-[13px] font-semibold ml-1 text-white">5.0</span>
              </div>
              <p className="text-[11px] tracking-[0.06em] text-white/50">{riversideHero.stats[0].value} Google Reviews</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[52%] relative min-h-[380px] md:min-h-screen overflow-hidden rounded-none">
          <img src="/riverside_heroImage.png" alt="Riverside Dental Hero" className="absolute inset-0 w-full h-full object-cover rounded-none" />
          <div className="absolute inset-0 rounded-none" style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 60%)" }} />
          <div className="absolute bottom-8 left-8 py-3.5 px-4.5 rounded-none flex items-center gap-3.5 bg-white shadow-[0_8px_32px_rgba(0,0,0,0.14)]">
            <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#0e2a85]">
              <svg className="w-6 h-6 fill-[#F5A623]" viewBox="0 0 24 24">
                <path d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.7l-3.61.81.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82 1.89 3.2 3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"/>
              </svg>
            </div>
            <div>
              <p className="text-[13px] font-bold text-[#0e2a85] leading-tight">Accepting New Patients</p>
              <p className="text-[10px] text-gray-500 mt-0.5">Book your first consultation today</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Luxury Services ── */}
      <section id="services" className="w-full py-[100px] px-5 md:px-[60px] max-w-[1320px] mx-auto rounded-none">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-[60px]">
          <div>
            <p className="text-[10px] font-medium tracking-[0.3em] uppercase mb-3" style={{ color: secondaryColor }}>What We Offer</p>
            <h2 className="text-[34px] md:text-[42px] font-normal leading-[1.2] font-playfair" style={{ color: primaryColor }}>
              Treatments Tailored <em style={{ fontStyle: "italic" }}>to You</em>
            </h2>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.12em] uppercase transition-opacity hover:opacity-70 shrink-0" style={{ color: primaryColor }}>
            Book a Consultation 
            <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e8e8e8] rounded-none">
          {riversideServices.map((svc, i) => (
            <article key={i} className="group bg-white p-8 flex flex-col gap-4 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] relative overflow-hidden rounded-none">
              <div className="absolute top-0 left-0 w-0 h-[2px] transition-all duration-500 group-hover:w-full rounded-none" style={{ backgroundColor: secondaryColor }} />
              <div className="w-10 h-10 rounded-none flex items-center justify-center shrink-0" style={{ backgroundColor: `${primaryColor}10` }}>
                <span className="text-[20px]" style={{ color: primaryColor }}>{svc.icon}</span>
              </div>
              <h3 className="text-[18px] font-normal leading-[1.3] font-playfair" style={{ color: primaryColor }}>{svc.title}</h3>
              <p className="text-[13px] leading-[1.7] text-[#5a5a6a]">{svc.description}</p>
              <div className="flex gap-3 mt-auto pt-4">
                <a href="#contact" className="text-[11px] font-medium tracking-[0.1em] uppercase py-2 px-4 border transition-all duration-200 hover:opacity-70 rounded-none" style={{ color: primaryColor, borderColor: `${primaryColor}40` }}>Learn More</a>
                <a href="#contact" className="text-[11px] font-semibold tracking-[0.1em] uppercase py-2 px-4 transition-all duration-200 hover:opacity-85 text-white rounded-none" style={{ backgroundColor: secondaryColor }}>Book Now</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Transformations ── */}
      <section className="w-full py-[100px] px-5 md:px-[60px] bg-[#f7f9f8] rounded-none border-t border-[#e2e8e5]">
        <div className="max-w-[1320px] mx-auto flex flex-col items-center">
          <p className="text-[10px] font-medium tracking-[0.3em] uppercase mb-3" style={{ color: secondaryColor }}>Our Results</p>
          <h2 className="text-[34px] md:text-[42px] font-normal leading-[1.2] font-playfair mb-[60px]" style={{ color: primaryColor }}>
            Smile <em style={{ fontStyle: "italic" }}>Transformations</em>
          </h2>
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
             <div className="group flex flex-col rounded-none relative overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(45,90,78,0.15)] hover:-translate-y-1 shadow-sm bg-white border border-[#e2e8e5]">
               <div className="p-3 pb-0">
                 <BeforeAfterSlider 
                   accentColor={secondaryColor} 
                   rounded="rounded-none"
                   caseData={{ id: "veneers", label: "Porcelain Veneers", before: "/chipped_before.png", after: "/chipped_after.png" }} 
                 />
               </div>
               <div className="p-8 flex flex-col items-center justify-center text-center bg-white relative">
                 <h3 className="font-playfair text-[24px] md:text-[28px] mb-2 transition-colors duration-300 group-hover:text-black" style={{ color: primaryColor }}>Porcelain Veneers</h3>
                 <p className="text-[10px] font-semibold tracking-[0.2em] uppercase" style={{ color: secondaryColor }}>Full Restoration</p>
                 <div className="w-8 h-[1px] mt-6 transition-all duration-500 group-hover:w-16" style={{ backgroundColor: secondaryColor }} />
               </div>
             </div>
             
             <div className="group flex flex-col rounded-none relative overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(45,90,78,0.15)] hover:-translate-y-1 shadow-sm bg-white border border-[#e2e8e5]">
               <div className="p-3 pb-0">
                 <BeforeAfterSlider 
                   accentColor={secondaryColor} 
                   rounded="rounded-none"
                   caseData={{ id: "invisalign", label: "Invisalign", before: "/misaligned_before.png", after: "/misaligned_after.png" }} 
                 />
               </div>
               <div className="p-8 flex flex-col items-center justify-center text-center bg-white relative">
                 <h3 className="font-playfair text-[24px] md:text-[28px] mb-2 transition-colors duration-300 group-hover:text-black" style={{ color: primaryColor }}>Invisalign</h3>
                 <p className="text-[10px] font-semibold tracking-[0.2em] uppercase" style={{ color: secondaryColor }}>Clear Aligners</p>
                 <div className="w-8 h-[1px] mt-6 transition-all duration-500 group-hover:w-16" style={{ backgroundColor: secondaryColor }} />
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="reviews" className="w-full py-[100px] px-5 md:px-[60px] bg-white rounded-none border-t border-[#e2e8e5]">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex flex-col items-center mb-[60px] text-center">
            <p className="text-[10px] font-medium tracking-[0.3em] uppercase mb-3" style={{ color: secondaryColor }}>Patient Stories</p>
            <h2 className="text-[34px] md:text-[42px] font-normal leading-[1.2] font-playfair" style={{ color: primaryColor }}>
              What Our <em style={{ fontStyle: "italic" }}>Patients Say</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 rounded-none">
            {riversideTestimonials.map((testimonial, i) => (
              <div key={i} className="bg-[#f7f9f8] p-8 md:p-10 border border-[#e2e8e5] flex flex-col justify-between rounded-none shadow-sm transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(45,90,78,0.15)] hover:-translate-y-1">
                <div>
                  <div className="flex items-center gap-1.5 mb-6">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <svg key={j} className="w-4 h-4 fill-[#F5A623]" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    ))}
                  </div>
                  <p className="text-[15px] leading-[1.8] text-[#1c2b20]/80 italic font-playfair mb-8">"{testimonial.quote}"</p>
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-[#1c2b20] font-playfair tracking-wide">{testimonial.name}</h4>
                  <p className="text-[10px] tracking-[0.1em] uppercase text-[#1c2b20]/50 mt-1">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Luxury Footer ── */}
      <BackToTopButton bgColor={secondaryColor} color="#ffffff" />
      <footer id="footer" className="w-full rounded-none" style={{ backgroundColor: primaryColor }}>
        <div className="max-w-[1320px] mx-auto px-5 md:px-[60px] pt-[80px] pb-[32px] rounded-none">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 rounded-none">
            <div className="md:col-span-4 flex flex-col gap-5 rounded-none">
              <a href="#main-content" className="block transition-opacity hover:opacity-80">
                <span className="text-[18px] font-normal tracking-[0.06em] font-playfair text-white">{theme.clinicName}</span>
              </a>
              <p className="text-[13px] leading-[1.8] max-w-[280px] text-white/55">Delivering exceptional dental care with a personal, compassionate touch.</p>
              <div className="w-8 h-[1px] shadow-[0_1px_2px_rgba(0,0,0,0.4)] rounded-none" style={{ backgroundColor: secondaryColor }} />
              <div className="flex flex-wrap gap-2 rounded-none">
                {["HIPAA Compliant", "ADA Certified"].map(badge => (
                  <span key={badge} className="inline-flex items-center gap-1 px-3 py-1 text-[10px] tracking-[0.08em] font-medium uppercase border border-white/15 text-white/60 rounded-none">{badge}</span>
                ))}
              </div>
            </div>
            <nav className="md:col-span-2 rounded-none">
              <h4 className="text-[10px] font-medium tracking-[0.25em] uppercase mb-5" style={{ color: secondaryColor }}>Navigation</h4>
              <ul className="flex flex-col gap-3 list-none rounded-none">
                {[{ href: "#about", label: "About Us" }, { href: "#services", label: "Treatments" }, { href: "#reviews", label: "Reviews" }, { href: "#footer", label: "Contact" }].map(link => (
                  <li key={link.href} className="rounded-none"><a href={link.href} className="text-[12px] transition-opacity hover:opacity-60 text-white/60">{link.label}</a></li>
                ))}
              </ul>
            </nav>
            <div className="md:col-span-3 rounded-none">
              <h4 className="text-[10px] font-medium tracking-[0.25em] uppercase mb-5" style={{ color: secondaryColor }}>Contact & Hours</h4>
              <address className="not-italic flex flex-col gap-4 text-[12px] text-white/60 rounded-none">
                <p className="flex items-start gap-2">
                  <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke={secondaryColor} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  <span>{theme.location}</span>
                </p>
                <p className="flex items-center gap-2">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke={secondaryColor} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  <a href={`tel:${theme.phone}`} className="hover:opacity-70">{theme.phone}</a>
                </p>
                <p className="flex items-start gap-2">
                  <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke={secondaryColor} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <span>Monday - Friday: 9am - 6pm</span>
                </p>
              </address>
            </div>
            <div className="md:col-span-3 rounded-none">
              <h4 className="text-[10px] font-medium tracking-[0.25em] uppercase mb-5" style={{ color: secondaryColor }}>Find Us</h4>
              <div className="w-full h-[160px] overflow-hidden relative border border-white/10 rounded-none bg-white/5 flex items-center justify-center">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d159043.51307689163!2d-2.7306935272648434!3d51.468494191060974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718364817a3a9b%3A0xc66572e01df222d4!2sBristol!5e0!3m2!1sen!2suk!4v1689104030613!5m2!1sen!2suk" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(80%) opacity(70%)" }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Clinic Location"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 rounded-none">
          <div className="max-w-[1320px] mx-auto px-5 md:px-[60px] py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-[10px] tracking-[0.06em] text-white/40 rounded-none">
            <p className="rounded-none">© {new Date().getFullYear()} {theme.clinicName}. All Rights Reserved.</p>
            <div className="flex gap-5 rounded-none items-center">
              <a href="#" className="hover:opacity-70 transition-opacity">Privacy Policy</a>
              <a href="#" className="hover:opacity-70 transition-opacity">Terms of Service</a>
              <span className="hidden md:block">|</span>
              <a href="/" className="hover:opacity-70 transition-opacity font-semibold">Concept by Codelura</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ── Luxury Chatbot UI ── */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 rounded-none">
        {chatOpen && (
          <div className="bg-white overflow-hidden border border-[#e3e1e9] w-[calc(100vw-48px)] sm:w-[350px] flex flex-col shadow-[0_12px_40px_rgba(0,0,0,0.12)] rounded-none">
            <div className="p-5 flex items-center gap-4 rounded-none" style={{ backgroundColor: primaryColor }}>
              <div className="relative flex-shrink-0 rounded-none">
                <div className="w-11 h-11 flex items-center justify-center border border-white/10 bg-white/5 rounded-none">
                  <svg className="w-5 h-5 stroke-[#C9A84C]" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4z"/></svg>
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#4ade80] border-[2px] rounded-none" style={{ borderColor: primaryColor }} />
              </div>
              <div className="flex-1 min-w-0 rounded-none">
                <h4 className="text-[16px] font-normal text-white truncate tracking-wide font-playfair">Concierge Assistant</h4>
                <p className="text-[11px] text-white/60 uppercase tracking-widest mt-0.5">Typically replies instantly</p>
              </div>
              <button onClick={() => setChatOpen(false)} className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-none">
                <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>
            <div className="p-4 bg-[#f4f3fa] h-64 overflow-y-auto flex flex-col gap-4 rounded-none">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"} rounded-none`}>
                  {msg.role === "assistant" && (
                    <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center mt-1 bg-black/5 rounded-none">
                      <svg className="w-4 h-4 stroke-[#2d5a4e]" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4z"/></svg>
                    </div>
                  )}
                  <div className={`px-4 py-3 text-[13px] max-w-[85%] leading-[1.6] shadow-sm rounded-none ${msg.role === "user" ? "text-white" : "bg-white text-[#222] border border-[#eee]"}`} style={msg.role === "user" ? { backgroundColor: primaryColor } : {}}>
                    {msg.content}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <div className="p-3 bg-white border-t border-[#e3e1e9] flex gap-2 rounded-none">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-grow bg-[#f4f3fa] border-none px-4 py-2 text-sm focus:outline-none focus:ring-2 rounded-none"
                style={{ "--tw-ring-color": secondaryColor } as React.CSSProperties}
              />
              <button onClick={handleSend} className="w-10 h-10 text-white flex items-center justify-center transition-all hover:scale-105 shadow-md rounded-none" style={{ backgroundColor: secondaryColor, color: primaryColor }}>
                <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
            </div>
          </div>
        )}
        <button onClick={() => setChatOpen(!chatOpen)} className="w-[60px] h-[60px] rounded-full flex items-center justify-center transition-transform hover:scale-105 shadow-[0_12px_40px_rgba(0,0,0,0.18)]" style={{ backgroundColor: secondaryColor, color: primaryColor }}>
          {chatOpen ? (
            <svg className="w-6 h-6 stroke-white" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
          ) : (
            <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/></svg>
          )}
        </button>
      </div>
    </div>
  );
}
