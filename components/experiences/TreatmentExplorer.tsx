"use client";
import { useState, useEffect } from "react";

const TREATMENTS = [
  {
    id: "gaps",
    label: "Gaps & crooked teeth",
    title: "Invisalign",
    description: "A discreet approach to improving tooth alignment and spacing.",
    timeline: "6-18 months",
    match: "AI MATCHED"
  },
  {
    id: "whiter",
    label: "Whiter smile",
    title: "Professional Whitening",
    description: "Lift deep stains and brighten your smile significantly in a single session.",
    timeline: "1 session (60 mins)",
    match: "AI MATCHED"
  },
  {
    id: "missing",
    label: "Missing teeth",
    title: "Dental Implants",
    description: "A permanent, natural-looking foundation for replacing missing teeth.",
    timeline: "3-6 months",
    match: "AI MATCHED"
  },
  {
    id: "chipped",
    label: "Chipped / worn teeth",
    title: "Porcelain Veneers",
    description: "Handcrafted porcelain shells that restore the natural shape and strength of your teeth.",
    timeline: "2-3 weeks",
    match: "AI MATCHED"
  }
];

export default function TreatmentExplorer() {
  const [active, setActive] = useState(TREATMENTS[0]);
  const [status, setStatus] = useState<'idle' | 'scanning' | 'complete'>('complete');

  const handleSelect = (t: typeof TREATMENTS[0]) => {
    if (active.id === t.id && status === 'complete') return;
    setActive(t);
    setStatus('scanning');
  };

  useEffect(() => {
    if (status === 'scanning') {
      const timeout = setTimeout(() => {
        setStatus('complete');
      }, 1600);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [status]);

  return (
    <div className="w-full h-full min-h-[380px] rounded-xl bg-[#0a0a0f] border border-white/10 p-5 sm:p-7 flex flex-col relative overflow-hidden group">
      
      <style>{`
        @keyframes scannerLine {
          0% { transform: translateY(0px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(250px); opacity: 0; }
        }
        .animate-scanner {
          animation: scannerLine 1.6s ease-in-out infinite;
        }

        @keyframes microLabelFade {
          0% { opacity: 0; transform: scale(0.9) translateY(4px); }
          20% { opacity: 1; transform: scale(1) translateY(0); }
          80% { opacity: 1; transform: scale(1) translateY(0); }
          100% { opacity: 0; transform: scale(0.9) translateY(-4px); }
        }
        .animate-micro-label {
          opacity: 0;
          animation: microLabelFade 0.6s ease-in-out forwards;
        }
      `}</style>

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-[80px] -z-10 group-hover:bg-gold/10 transition-colors duration-700" />
      
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl sm:text-2xl text-white font-light tracking-tight">AI Treatment Match</h3>
        {status === 'scanning' && (
          <span className="flex items-center gap-1.5 text-[9px] text-gold uppercase tracking-widest font-mono bg-gold/10 px-2 py-0.5 rounded-full border border-gold/20">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            AI Active
          </span>
        )}
      </div>

      {/* Interactive Pills Area */}
      <div className="mb-6">
        <p className="text-xs text-white/70 mb-3 font-medium">What are you looking to improve?</p>
        <div className="flex flex-wrap gap-2">
          {TREATMENTS.map(t => (
            <button
              key={t.id}
              onClick={() => handleSelect(t)}
              disabled={status === 'scanning'}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 border ${
                active.id === t.id && status !== 'idle'
                  ? "bg-white text-black border-white shadow-lg shadow-white/10" 
                  : "bg-transparent text-zinc-400 border-white/10 hover:border-white/30 hover:text-white"
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Display Area (Height determined by Complete State UI) */}
      <div className="mt-auto relative w-full rounded-xl overflow-hidden border border-white/5 bg-[#05050a]/50 backdrop-blur-md">
        
        {/* Scanning State UI (Absolute overlay) */}
        <div 
          className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 ${status === 'scanning' ? 'opacity-100 z-20' : 'opacity-0 z-0 pointer-events-none'}`}
        >
          {/* Grid Background */}
          <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: "linear-gradient(#d6b362 1px, transparent 1px), linear-gradient(90deg, #d6b362 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
          
          {/* Scanner Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold shadow-[0_0_15px_rgba(217,182,101,0.8)] animate-scanner" />
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-gold/10 animate-scanner -translate-y-full" />

          {/* Central Animated Text */}
          <div className="relative z-10 flex flex-col items-center gap-3">
             <p className="text-[10px] text-gold font-mono tracking-[0.3em] uppercase text-center w-full px-4 drop-shadow-[0_0_8px_rgba(217,182,101,0.5)]">
               ANALYZING YOUR GOALS
             </p>
          </div>

          {/* Micro Labels (Simulating AI processing points) */}
          {status === 'scanning' && (
            <>
              <div className="absolute top-[25%] left-[15%] text-[8px] font-mono text-gold/80 bg-black/40 px-1.5 py-0.5 rounded border border-gold/20 animate-micro-label" style={{ animationDelay: '0.1s' }}>
                [ ALIGNMENT ]
              </div>
              <div className="absolute top-[60%] right-[15%] text-[8px] font-mono text-gold/80 bg-black/40 px-1.5 py-0.5 rounded border border-gold/20 animate-micro-label" style={{ animationDelay: '0.5s' }}>
                [ SPACING ]
              </div>
              <div className="absolute bottom-[20%] left-[25%] text-[8px] font-mono text-gold/80 bg-black/40 px-1.5 py-0.5 rounded border border-gold/20 animate-micro-label" style={{ animationDelay: '0.9s' }}>
                [ AESTHETIC GOAL ]
              </div>
            </>
          )}
        </div>

        {/* Complete State UI (Relative, dictates container height) */}
        <div 
          className={`relative p-5 sm:p-6 flex flex-col transition-all duration-500 delay-100 ${status === 'complete' ? 'opacity-100 z-10 translate-y-0 scale-100' : 'opacity-0 z-0 translate-y-4 scale-95 pointer-events-none'}`}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] text-gold font-bold tracking-[0.2em] uppercase">YOUR MATCH</span>
            <span className="text-[9px] font-mono text-zinc-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">{active.match}</span>
          </div>
          
          <h4 className="text-xl text-white font-medium mb-1 truncate">{active.title}</h4>
          <p className="text-xs text-zinc-400 leading-relaxed mb-3 line-clamp-2">{active.description}</p>
          
          <div className="flex flex-col gap-0.5 mb-4">
            <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-semibold">Typical timeline</span>
            <span className="text-xs font-mono text-zinc-300">{active.timeline}</span>
          </div>
          
          <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
            <span className="text-[10px] text-zinc-400 hidden sm:block">Want to know if you're a candidate?</span>
            <button className="text-[10px] font-bold tracking-wider uppercase text-white group flex items-center gap-1.5 transition-colors hover:text-gold sm:ml-auto">
              Start consultation 
              <svg className="w-3 h-3 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
