import React, { useState } from 'react';
import { SERVICES } from '../data/portfolioData';
import { Service } from '../types';
import { ArrowUpRight, Check, X, Shield, Cpu, Flame, Layers } from 'lucide-react';

interface ServicesSectionProps {
  onOpenQuoteWithService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuoteWithService }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Custom technical icons matching the reference image's visual language
  const renderServiceIcon = (id: string) => {
    switch (id) {
      case 'mig':
        return (
          <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9 text-[#ff6b00]">
            {/* Welding mask & spool wire */}
            <path
              d="M10 8C10 5.5 13 4 20 4C27 4 30 5.5 30 8V24C30 30 26 34 20 34C14 34 10 30 10 24V8Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <rect x="14" y="12" width="12" height="7" rx="1.5" stroke="#38bdf8" strokeWidth="1.8" fill="#0284c7" fillOpacity="0.3" />
            <circle cx="28" cy="28" r="2" fill="#ff6b00" />
            <path d="M28 25V23M31 28H33M30 30L32 32" stroke="#ff6b00" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        );
      case 'tig':
        return (
          <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9 text-[#ff6b00]">
            {/* TIG torch needle & tungsten electrode */}
            <path d="M7 33L22 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M22 18L26 14L28 16L24 20L22 18Z" fill="#ff6b00" stroke="currentColor" strokeWidth="1.5" />
            <path d="M26 14L34 6" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
            <circle cx="34" cy="6" r="2" fill="#ffffff" />
            <path d="M33 3V6M37 6H40M36 8L39 11" stroke="#38bdf8" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        );
      case 'stick':
        return (
          <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9 text-[#ff6b00]">
            {/* Stick electrode holder with sparking rod */}
            <rect x="6" y="28" width="14" height="6" rx="2" stroke="currentColor" strokeWidth="2" transform="rotate(-45 6 28)" />
            <line x1="17" y1="21" x2="33" y2="5" stroke="#e2e8f0" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="34" cy="4" r="2.5" fill="#ff6b00" />
            <path d="M31 2L35 6M36 2L32 6" stroke="#ff6b00" strokeWidth="1.5" />
          </svg>
        );
      case 'custom-fab':
        return (
          <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9 text-[#ff6b00]">
            {/* Precision ruler / square & gear */}
            <path d="M8 8V32H32" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M8 14H12M8 20H14M8 26H12" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="24" cy="18" r="6" stroke="#ff6b00" strokeWidth="2" />
            <path d="M24 10V12M24 24V26M16 18H18M30 18H32" stroke="#ff6b00" strokeWidth="1.8" />
          </svg>
        );
      case 'steel-structures':
        return (
          <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9 text-[#ff6b00]">
            {/* Structural I-beam cross section */}
            <path d="M8 8H32M10 8V14M30 8V14M16 14H24V26H16V14ZM8 32H32M10 32V26M30 32V26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9 text-[#ff6b00]">
            {/* Gate railing bars */}
            <rect x="6" y="8" width="28" height="24" rx="2" stroke="currentColor" strokeWidth="2" />
            <line x1="13" y1="8" x2="13" y2="32" stroke="currentColor" strokeWidth="1.5" />
            <line x1="20" y1="8" x2="20" y2="32" stroke="currentColor" strokeWidth="1.5" />
            <line x1="27" y1="8" x2="27" y2="32" stroke="currentColor" strokeWidth="1.5" />
            <path d="M16 16L20 20L24 16" stroke="#ff6b00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
    }
  };

  return (
    <section id="services" className="relative py-20 lg:py-28 bg-[#090b10]">
      {/* Background ambient lighting */}
      <div className="absolute left-1/3 top-1/4 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching the reference image */}
        <div className="mb-14">
          <span className="text-xs font-bold tracking-[0.2em] text-[#ff7700] uppercase font-mono-numbers mb-3 block">
            MY SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
            What I <span className="text-[#ff6b00]">Offer</span>
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-3">
            From precision architectural stainless fabrication to certified structural steel, each weld is executed with metallurgical mastery and rigorous standards.
          </p>
        </div>

        {/* 6 Services Grid matching reference style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group relative rounded-2xl bg-[#0c1017] border border-slate-800/90 p-6 sm:p-7 hover:border-orange-500/50 hover:bg-[#101522] transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(255,107,0,0.18)] hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Header row: Icon & Badge */}
                <div className="flex items-start justify-between mb-5">
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 group-hover:border-orange-500/40 group-hover:bg-orange-500/10 transition-colors">
                    {renderServiceIcon(service.id)}
                  </div>
                  <span className="text-[11px] font-mono-numbers font-medium text-slate-400 bg-slate-900 px-2.5 py-1 rounded border border-slate-800 group-hover:text-orange-300 group-hover:border-orange-500/30 transition-colors">
                    {service.badge}
                  </span>
                </div>

                {/* Title & Subtitle matching the reference image */}
                <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors mb-1">
                  {service.title}
                </h3>
                <span className="text-xs font-semibold text-orange-400/90 block mb-3">
                  {service.subtitle}
                </span>

                <p className="text-sm text-slate-300 leading-relaxed line-clamp-3 mb-6">
                  {service.shortDesc}
                </p>
              </div>

              {/* Bottom bar */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="text-slate-400">Learn specifications</span>
                <span className="text-orange-400 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  View Details <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-2xl bg-[#0d121c] border border-slate-700 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="Close Service Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                {renderServiceIcon(selectedService.id)}
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-400 font-mono-numbers">
                  {selectedService.badge}
                </span>
                <h3 id="service-modal-title" className="text-2xl font-bold font-display text-white">
                  {selectedService.title}
                </h3>
                <span className="text-sm text-slate-400">
                  {selectedService.subtitle}
                </span>
              </div>
            </div>

            {/* Body */}
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {selectedService.description}
            </p>

            {/* Capabilities */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Check className="w-4 h-4 text-orange-400" />
                <span>Process Capabilities</span>
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedService.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Materials handled */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Materials & Alloys Handled
              </h4>
              <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                {selectedService.materials.map((mat) => (
                  <span key={mat} className="px-3 py-1 bg-slate-900 rounded-md border border-slate-800 font-mono-numbers">
                    {mat}
                  </span>
                ))}
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="pt-6 border-t border-slate-800 flex items-center justify-between gap-4">
              <span className="text-xs text-slate-400 hidden sm:inline">
                Ready to fabricate your project?
              </span>
              <button
                onClick={() => {
                  const serviceName = selectedService.title;
                  setSelectedService(null);
                  onOpenQuoteWithService(serviceName);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white bg-[#ff6b00] hover:bg-[#ff7b1a] shadow-[0_0_20px_rgba(255,107,0,0.5)] transition-all cursor-pointer"
              >
                <span>Request {selectedService.title} Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
