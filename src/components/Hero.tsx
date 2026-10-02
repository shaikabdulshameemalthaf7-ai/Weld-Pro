import React, { useState } from 'react';
import { ArrowUpRight, Mail, Sparkles, Shield, Wrench, Flame } from 'lucide-react';
import { heroImg } from '../data/portfolioData';
import { WeldingSparkCanvas } from './WeldingSparkCanvas';

interface HeroProps {
  onOpenQuote: () => void;
  onViewWork: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onViewWork, onContactClick }) => {
  const [arcIntense, setArcIntense] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-[96vh] flex items-center justify-center pt-24 pb-16 lg:pt-28 lg:pb-20 overflow-hidden bg-[#07090e]"
    >
      {/* Background Gradients & Industrial Mesh */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Deep ambient dark backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.08),rgba(255,255,255,0))]" />
        
        {/* Orange atmospheric heat glow from bottom right */}
        <div className="absolute -right-20 bottom-10 w-[550px] h-[550px] bg-gradient-to-tr from-orange-600/20 via-amber-500/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
        
        {/* Blue electric arc backglow */}
        <div className="absolute right-[22%] top-[35%] w-[380px] h-[380px] bg-sky-500/15 rounded-full blur-[100px] pointer-events-none animate-pulse" />

        {/* Industrial subtle grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Action Copy */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center text-left">
            {/* Tagline Badge matching image */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-xs sm:text-sm font-bold tracking-[0.22em] text-[#ff7700] uppercase font-mono-numbers">
                STRONGER CONNECTIONS <span className="text-slate-600 font-normal mx-1">|</span> BUILT TO LAST
              </span>
            </div>

            {/* Main Headline matching the reference image */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-extrabold font-display tracking-tight text-white leading-[1.08] mb-6 text-balance">
              Professional Welding <br className="hidden sm:inline" />
              <span className="text-[#ff6b00] drop-shadow-[0_0_35px_rgba(255,107,0,0.4)]">
                Services & Solutions
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mb-9 font-normal">
              We deliver high-quality welding services for residential, commercial, and industrial projects. Precision, safety and durability — that’s our promise.
            </p>

            {/* Action Buttons matching the reference image */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-10">
              {/* Primary View My Work button */}
              <button
                onClick={onViewWork}
                className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm sm:text-base text-white bg-[#ff6b00] hover:bg-[#ff7b1a] active:scale-[0.98] transition-all shadow-[0_0_25px_rgba(255,107,0,0.5)] hover:shadow-[0_0_38px_rgba(255,107,0,0.7)] cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              {/* Secondary Contact Me button */}
              <button
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base text-slate-200 bg-slate-900/60 hover:bg-slate-800/80 border border-slate-700/80 hover:border-slate-500 active:scale-[0.98] transition-all backdrop-blur-sm cursor-pointer hover:text-white"
              >
                <span>Contact Me</span>
                <Mail className="w-4 h-4 text-slate-400 group-hover:text-white" />
              </button>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-6 border-t border-slate-800/70 flex items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-orange-400 shrink-0" />
                <span>AWS D1.1 Certified</span>
              </div>
              <span className="text-slate-700">·</span>
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Mobile Rig Available</span>
              </div>
              <span className="text-slate-700">·</span>
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Same-Day Estimates</span>
              </div>
            </div>
          </div>

          {/* Right Column: Cinematic Welder Visual + Dynamic Sparks + Neon Cursive */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center">
            
            {/* Visual Container */}
            <div 
              className="relative w-full max-w-xl lg:max-w-none rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-700/60 shadow-[0_0_50px_rgba(0,0,0,0.8)] bg-slate-950 group"
              onMouseEnter={() => setArcIntense(true)}
              onMouseLeave={() => setArcIntense(false)}
            >
              {/* Welder Photo */}
              <img
                src={heroImg}
                alt="Professional industrial welder creating brilliant electric arc and sparks"
                className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Dynamic Welding Spark Canvas Overlay */}
              <WeldingSparkCanvas 
                intensity={arcIntense ? 'high' : 'high'} 
                enableInteraction={true}
              />

              {/* Electric Arc Flare Core Pulsing Effect */}
              <div 
                className="absolute right-[26%] bottom-[32%] w-16 h-16 pointer-events-none rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(56,189,248,0.8) 40%, rgba(255,107,0,0.5) 70%, transparent 100%)',
                  boxShadow: '0 0 45px 15px rgba(56,189,248,0.7), 0 0 70px 30px rgba(255,107,0,0.4)',
                  animation: 'pulse 1.8s infinite ease-in-out'
                }}
              />

              {/* Top-Right Handwritten Cursive Motto matching image */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 pointer-events-none z-20 rotate-[-4deg] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-1.5 text-amber-200 font-handwriting text-2xl sm:text-3xl lg:text-4xl tracking-wide select-none">
                    <span>Welding</span>
                    <Sparkles className="w-4 h-4 text-orange-400 animate-spin" style={{ animationDuration: '8s' }} />
                  </div>
                  <span className="text-white font-handwriting text-2xl sm:text-3xl lg:text-4xl tracking-wide -mt-1 sm:-mt-2 select-none">
                    Ideas into
                  </span>
                  <span className="text-[#ff7b1a] font-handwriting text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide -mt-1 select-none text-glow-orange">
                    Reality!
                  </span>
                </div>
              </div>

              {/* Cinematic Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#090b10]/40 via-transparent to-transparent pointer-events-none" />

              {/* Interactive Torch Tip prompt */}
              <div className="absolute bottom-3 left-4 text-[11px] text-slate-400 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-slate-800 flex items-center gap-1.5 pointer-events-none">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping" />
                <span>Click image to strike welding arc sparks</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
