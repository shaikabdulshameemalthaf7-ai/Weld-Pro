import React, { useState, useRef, useCallback } from 'react';
import { BEFORE_AFTER_DATA } from '../data/portfolioData';
import { CheckCircle2, AlertTriangle, Sparkles, SlidersHorizontal } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percent = Math.round((clampedX / rect.width) * 100);
    setSliderPosition(percent);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    handleMove(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Ignored if already released
    }
  };

  return (
    <section className="relative py-20 lg:py-28 bg-[#07090e] border-t border-slate-800/80">
      {/* Background ambient lighting */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-96 h-96 bg-orange-600/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute left-10 top-1/2 -translate-y-1/2 w-96 h-96 bg-sky-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-bold tracking-[0.2em] text-[#ff7700] uppercase font-mono-numbers">
              WELDING CRAFTSMANSHIP
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            Before & After <span className="text-[#ff6b00]">Restoration</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {BEFORE_AFTER_DATA.description}
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Comparison Slider Box */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-black select-none cursor-ew-resize group touch-none"
            >
              {/* AFTER Image (Full width background) */}
              <img
                src={BEFORE_AFTER_DATA.afterImage}
                alt={BEFORE_AFTER_DATA.afterLabel}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                referrerPolicy="no-referrer"
              />

              {/* BEFORE Image (Clipped overlay) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <div
                  className="absolute inset-0 w-full h-full"
                  style={{
                    width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100vw',
                    height: '100%',
                  }}
                >
                  <img
                    src={BEFORE_AFTER_DATA.beforeImage}
                    alt={BEFORE_AFTER_DATA.beforeLabel}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle rust tone tint */}
                  <div className="absolute inset-0 bg-amber-950/20 mix-blend-multiply" />
                </div>
              </div>

              {/* Vertical Divider Line with glowing orange weld bead */}
              <div
                className="absolute inset-y-0 w-1 bg-gradient-to-b from-orange-400 via-white to-orange-400 pointer-events-none shadow-[0_0_15px_#ff6b00]"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                {/* Center Knob Handle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0a0d14] border-2 border-orange-500 shadow-[0_0_20px_rgba(255,107,0,0.8)] flex items-center justify-center text-white transition-transform group-hover:scale-110">
                  <SlidersHorizontal className="w-4 h-4 text-orange-400" />
                </div>
              </div>

              {/* Badges on images */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-red-950/80 border border-red-500/40 text-red-200 backdrop-blur-md">
                  <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                  <span>Damaged / Corroded Before</span>
                </span>
              </div>

              <div className="absolute top-4 right-4 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 backdrop-blur-md">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>TIG Weld Restored After</span>
                </span>
              </div>

              {/* Instruction banner bottom */}
              <div className="absolute bottom-3 inset-x-0 flex justify-center pointer-events-none">
                <span className="text-[11px] text-slate-300 bg-slate-900/80 backdrop-blur-md px-3.5 py-1 rounded-full border border-slate-700">
                  Drag slider horizontally to inspect weld quality
                </span>
              </div>
            </div>

            {/* Quick preset percentage buttons */}
            <div className="flex items-center justify-between mt-3 text-xs text-slate-400">
              <span className="font-mono-numbers">Current view: {sliderPosition}% Before</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSliderPosition(25)}
                  className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800"
                >
                  25%
                </button>
                <button
                  onClick={() => setSliderPosition(50)}
                  className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800"
                >
                  50%
                </button>
                <button
                  onClick={() => setSliderPosition(75)}
                  className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800"
                >
                  75%
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Technical Inspection Breakdown */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <div className="p-6 rounded-2xl bg-[#0c1017] border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-400 mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Micro-Inspection Details</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Zero Undercut. Uniform Puddle.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {BEFORE_AFTER_DATA.details}
              </p>

              <div className="space-y-3 pt-3 border-t border-slate-800 text-xs">
                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-white block font-medium">100% Root Penetration</strong>
                    <span className="text-slate-400">Ensures structural strength rated beyond base parent metal tensile limits.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-white block font-medium">Controlled Heat Input (HAZ)</strong>
                    <span className="text-slate-400">Prevents metal embrittlement and preserves grain boundary integrity.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 shrink-0" />
                  <div>
                    <strong className="text-white block font-medium">Stack-of-Dimes Symmetry</strong>
                    <span className="text-slate-400">Flawless rhythmic filler rod additions for mirror-smooth visual finish.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Guarantee Quote */}
            <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center gap-3">
              <span className="text-2xl text-orange-400 font-bold font-mono-numbers">100%</span>
              <p className="text-xs text-orange-200 leading-snug">
                Every weld seam we produce undergoes rigorous non-destructive visual and dye penetrant inspection.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
