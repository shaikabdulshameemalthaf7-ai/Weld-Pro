import React from 'react';
import { ShieldCheck, Cog, Clock, Handshake } from 'lucide-react';
import { TRUST_POINTS } from '../data/portfolioData';

export const TrustBar: React.FC = () => {
  const icons = [
    <ShieldCheck className="w-8 h-8 text-[#ff6b00]" strokeWidth={1.75} />,
    <Cog className="w-8 h-8 text-[#ff6b00]" strokeWidth={1.75} />,
    <Clock className="w-8 h-8 text-[#ff6b00]" strokeWidth={1.75} />,
    <Handshake className="w-8 h-8 text-[#ff6b00]" strokeWidth={1.75} />,
  ];

  return (
    <div className="relative z-20 border-y border-slate-800/80 bg-[#0c1017]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-9">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6 divide-y sm:divide-y-0 lg:divide-x divide-slate-800/80">
          {TRUST_POINTS.map((item, idx) => (
            <div
              key={item.title}
              className={`flex items-center gap-4 transition-all duration-300 group ${
                idx > 0 ? 'pt-5 sm:pt-0 lg:pl-6' : ''
              }`}
            >
              {/* Icon Container with subtle orange halo on hover */}
              <div className="relative shrink-0 p-3 rounded-2xl bg-slate-900/90 border border-slate-800 group-hover:border-orange-500/50 group-hover:shadow-[0_0_20px_rgba(255,107,0,0.25)] transition-all">
                {icons[idx]}
                <div className="absolute inset-0 rounded-2xl bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <h4 className="text-base font-bold text-white tracking-tight group-hover:text-orange-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 mt-0.5 leading-snug">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
