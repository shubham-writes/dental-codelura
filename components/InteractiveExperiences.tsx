import BeforeAfterSlider from "./experiences/BeforeAfterSlider";
import TreatmentExplorer from "./experiences/TreatmentExplorer";
import TrustBuilder from "./experiences/TrustBuilder";

export default function InteractiveExperiences() {
  return (
    <section className="bg-[#05050a] py-16 sm:py-20 border-t border-white/[0.05]" id="experiences">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-gold text-[10px] tracking-[0.2em] uppercase font-semibold mb-4">
            Interactive Experiences
          </h2>
          <h3 className="text-2xl sm:text-4xl font-light text-white leading-tight mb-4 tracking-tight">
            Not just a website.<br />
            <span className="text-zinc-500 italic">An experience patients can feel.</span>
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
            We build custom digital experiences that allow your prospective patients to interact with your services, visualize results, and build trust before they ever walk through the door.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="flex flex-col gap-5">
          
          {/* Top Large Row */}
          <div className="w-full bg-[#0a0a0f] rounded-2xl border border-white/10 p-5 sm:p-7 flex flex-col relative overflow-hidden group">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gold/5 rounded-full blur-[100px] -z-10 group-hover:bg-gold/10 transition-colors duration-1000" />
            
            <div className="mb-6 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <p className="text-gold text-[10px] tracking-[0.2em] uppercase font-semibold mb-2">Experience 01</p>
                <h3 className="text-xl sm:text-2xl text-white font-light tracking-tight mb-1">Transformations</h3>
                <p className="text-xs text-zinc-500">Let patients visualize the difference with an interactive before & after slider.</p>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-[10px] text-zinc-500 tracking-widest uppercase font-semibold">
                <svg className="w-3.5 h-3.5 text-gold/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 9l-3 3 3 3M16 9l3 3-3 3M5 12h14"/></svg>
                Drag to reveal
              </div>
            </div>
            
            <div className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 ring-1 ring-white/5">
              <BeforeAfterSlider />
            </div>
          </div>

          {/* Bottom Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <TreatmentExplorer />
            <TrustBuilder />
          </div>

        </div>

      </div>
    </section>
  );
}
