"use client";
import { useState, useEffect } from "react";

export default function BackToTopButton({ 
  className = "", 
  color = "#fff",
  bgColor = "#000"
}: { 
  className?: string;
  color?: string;
  bgColor?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-1.5 transition-all duration-500 hover:-translate-y-1 ${
        isVisible ? "opacity-50 hover:opacity-100" : "opacity-0 translate-y-4 pointer-events-none"
      } ${className}`}
      aria-label="Back to top"
    >
      <svg className="w-3.5 h-3.5" style={{ color: bgColor }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
      <span 
        className="text-[9px] tracking-[0.3em] uppercase font-semibold" 
        style={{ color: bgColor, textShadow: "0 2px 10px rgba(0,0,0,0.1)" }}
      >
        Top
      </span>
    </button>
  );
}
