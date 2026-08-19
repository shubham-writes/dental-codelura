"use client";
import { useState, useRef, useEffect } from "react";

const CASES = [
  { id: "whitening", label: "Teeth Whitening", before: "/bad_teeth.png", after: "/good_teeth.png" },
  { id: "veneers", label: "Porcelain Veneers", before: "/chipped_before.png", after: "/chipped_after.png" },
  { id: "invisalign", label: "Invisalign", before: "/misaligned_before.png", after: "/misaligned_after.png" }
];

export default function BeforeAfterSlider({
  accentColor = "#D9B665",
  caseData,
  rounded = "rounded-xl"
}: {
  accentColor?: string;
  caseData?: { id: string; label: string; before: string; after: string };
  rounded?: string;
}) {
  const [activeCaseId, setActiveCaseId] = useState(caseData ? caseData.id : CASES[0].id);
  const activeCase = caseData || CASES.find(c => c.id === activeCaseId) || CASES[0];

  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", () => setIsDragging(false));
      window.addEventListener("touchmove", onTouchMove, { passive: false });
      window.addEventListener("touchend", () => setIsDragging(false));
    }
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", () => setIsDragging(false));
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", () => setIsDragging(false));
    };
  }, [isDragging]);

  return (
    <div className={`w-full flex flex-col ${caseData ? "" : "pt-6"}`}>
      {/* Tabs */}
      {!caseData && (
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 px-2 sm:px-4">
          {CASES.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCaseId(c.id)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold tracking-wide uppercase transition-all duration-300 ${activeCaseId === c.id
                ? "text-white shadow-md"
                : "bg-transparent text-current opacity-60 hover:opacity-100"
                }`}
              style={
                activeCaseId === c.id
                  ? { backgroundColor: accentColor }
                  : { border: "1px solid currentColor", borderColor: "currentColor" }
              }
            >
              {c.label}
            </button>
          ))}
        </div>
      )}

      {/* Main Image Container */}
      <div
        className={`relative w-full aspect-16/10 md:aspect-16/8 ${rounded} overflow-hidden cursor-ew-resize select-none border border-white/10`}
        ref={containerRef}
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onTouchStart={(e) => {
          setIsDragging(true);
          handleMove(e.touches[0].clientX);
        }}
      >
        {/* Images Container with Fade Animation on Tab Switch */}
        <div key={activeCaseId} className="absolute inset-0 animate-in fade-in duration-500">
          {/* Background / Before Image */}
          <div className="absolute inset-0">
            <img src={activeCase.before} alt="Before treatment" className="w-full h-full object-cover" draggable={false} />
          </div>

          {/* Foreground / After Image */}
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img src={activeCase.after} alt="After treatment" className="w-full h-full object-cover" draggable={false} />
          </div>
        </div>

        {/* Dynamic Labels (Fade out when slider gets too close) */}
        <div
          className="absolute top-3 left-3 md:top-5 md:left-5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/90 text-[10px] sm:text-xs font-semibold tracking-widest uppercase border border-white/10 z-10 pointer-events-none transition-opacity duration-300"
          style={{ opacity: sliderPosition > 15 ? 1 : 0 }}
        >
          After
        </div>
        <div
          className="absolute top-3 right-3 md:top-5 md:right-5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/90 text-[10px] sm:text-xs font-semibold tracking-widest uppercase border border-white/10 z-10 pointer-events-none shadow-lg transition-opacity duration-300"
          style={{ opacity: sliderPosition < 85 ? 1 : 0 }}
        >
          Before
        </div>

        {/* Slider Line & Handle Container */}
        <div
          className="absolute top-0 bottom-0 w-10 -ml-5 z-20 pointer-events-none flex justify-center items-center"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Vertical Line */}
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]" />

          {/* Center Circle Handle */}
          <div
            className="relative w-9 h-9 rounded-full border-2 border-white shadow-[0_4px_20px_rgba(0,0,0,0.6)] flex items-center justify-center transition-transform duration-150"
            style={{ transform: `scale(${isDragging ? 1.1 : 1})`, backgroundColor: accentColor }}
          >
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 9l-3 3 3 3M16 9l3 3-3 3M5 12h14" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
