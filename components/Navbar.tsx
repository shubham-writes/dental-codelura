"use client";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-[#05050a]/80 backdrop-blur-md border-b border-white/5" />

      {/* Logo */}
      <a href="#" className="relative z-10 flex items-center gap-2 group">
        <span className="text-lg sm:text-xl tracking-[0.12em] uppercase">
          <span className="text-white font-semibold">Code</span>
          <span className="text-gold font-light">lura</span>
        </span>
        <span className="text-white/30 text-xs tracking-widest hidden sm:inline">/ Dental</span>
      </a>

      {/* Desktop links */}
      <div className="relative z-10 hidden sm:flex items-center gap-8">
        <a href="#concepts" className="text-white/60 hover:text-white text-sm tracking-widest uppercase transition-colors duration-200">
          Concepts
        </a>
        <a href="#process" className="text-white/60 hover:text-white text-sm tracking-widest uppercase transition-colors duration-200">
          Process
        </a>
        <a href="#demo" className="text-white/60 hover:text-white text-sm tracking-widest uppercase transition-colors duration-200">
          AI Demo
        </a>
        <a
          href="#contact"
          className="px-5 py-2 border border-gold/50 text-gold text-sm tracking-widest uppercase rounded-full hover:bg-gold/10 transition-all duration-200"
        >
          Get in Touch
        </a>
      </div>

      {/* Mobile CTA */}
      <a
        href="#contact"
        className="relative z-10 sm:hidden px-3 py-1.5 border border-gold/50 text-gold text-[10px] tracking-widest uppercase rounded-full"
      >
        Get in Touch
      </a>
    </nav>
  );
}
