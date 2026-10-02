import React, { useState, useEffect } from 'react';
import { workshopImg, STATS } from '../data/portfolioData';
import { Award, ShieldCheck, CheckCircle2, Flame, Wrench, HardHat } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    // Smooth animated counters for stats
    const duration = 1800; // ms
    const steps = 40;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = Math.min(1, step / steps);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);

      setCounts(
        STATS.map((s) => {
          const target = s.value;
          return target % 1 === 0 ? Math.round(target * ease) : parseFloat((target * ease).toFixed(1));
        })
      );

      if (step >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="relative py-20 lg:py-28 bg-[#07090e] border-t border-slate-800/80">
      {/* Background ambient lighting */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Workshop Facility Imagery & Trust Callout */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-950 group">
              <img
                src={workshopImg}
                alt="WeldPro modern metal fabrication facility workshop"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-80" />

              {/* Floating Workshop Stat Pill */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-md flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-orange-500/20 border border-orange-500/40 text-orange-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Full-Service Facility</h4>
                    <p className="text-xs text-slate-400">12,000 sq. ft. CNC & welding shop</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Open for Projects
                  </span>
                </div>
              </div>
            </div>

            {/* Experience Badge overlay */}
            <div className="hidden sm:flex absolute -top-5 -left-5 p-4 rounded-2xl bg-[#0d121c] border border-orange-500/40 shadow-[0_0_30px_rgba(255,107,0,0.25)] items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white">
                <Flame className="w-6 h-6" />
              </div>
              <div>
                <span className="text-lg font-extrabold text-white font-mono-numbers">15+ Years</span>
                <span className="text-xs text-slate-400 block -mt-1">Master Fabricator</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Philosophy & Certified Standards */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs font-bold tracking-[0.2em] text-[#ff7700] uppercase font-mono-numbers mb-3 block">
              ABOUT WELDPRO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white mb-6 leading-tight">
              Master Craftsmanship. <br />
              <span className="text-[#ff6b00]">Industrial Integrity.</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed mb-4">
              At WeldPro, metal isn’t just material — it’s an engineered art form. Founded on deep metallurgical precision and decades of hands-on fabrication experience, we build custom solutions that stand the test of time, weather, and structural strain.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Whether you need bespoke architectural railings for a private residence, structural steel erection for a commercial building, or sanitary high-purity TIG manifolds for industrial plants, our workshop guarantees micron-level fitment and zero-defect welds.
            </p>

            {/* Quality Standard Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <ShieldCheck className="w-5 h-5 text-orange-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200">AWS D1.1 Structural Certified</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <Wrench className="w-5 h-5 text-orange-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200">ASME Section IX Pressure Welds</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <HardHat className="w-5 h-5 text-orange-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200">OSHA 30 Safety Compliant</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-orange-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200">100% NDT & Visual Inspection</span>
              </div>
            </div>

            {/* Animated Counters Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800">
              {STATS.map((stat, idx) => (
                <div key={stat.label} className="flex flex-col">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono-numbers flex items-center">
                    <span>{counts[idx]}</span>
                    <span className="text-orange-400">{stat.suffix}</span>
                  </div>
                  <span className="text-xs font-medium text-slate-400 mt-1 leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
