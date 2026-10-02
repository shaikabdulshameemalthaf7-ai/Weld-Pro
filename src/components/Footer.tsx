import React from 'react';
import { ArrowUp, Phone, Mail, MapPin, ShieldCheck, Flame } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#05070a] border-t border-slate-900 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-orange-400">
                  <Flame className="w-5 h-5 text-[#ff6b00]" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center text-xl font-bold font-display tracking-tight leading-tight">
                    <span className="text-white">Weld</span>
                    <span className="text-[#ff6b00]">Pro</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-slate-400">
                    Welding Solutions
                  </span>
                </div>
              </div>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
                Premier architectural and industrial metal fabrication workshop. Precision TIG/MIG/Stick welding for residential railings, security gates, heavy commercial steel structures, and bespoke commissions.
              </p>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-orange-400 shrink-0" />
                <span>AWS D1.1 Certified & ASME Section IX Compliant</span>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-900 text-xs text-slate-400">
              © {new Date().getFullYear()} WeldPro Welding Solutions. All rights reserved.
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-mono-numbers">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-orange-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-orange-400 transition-colors">
                  About Workshop
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  Welding Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-orange-400 transition-colors">
                  Project Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-400 transition-colors">
                  Get a Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Capabilities */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-mono-numbers">
              Processes & Metal
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="hover:text-slate-200">MIG / GMAW Pulsed Welding</li>
              <li className="hover:text-slate-200">TIG / GTAW Stainless Sanitary</li>
              <li className="hover:text-slate-200">Stick / SMAW Structural 7018</li>
              <li className="hover:text-slate-200">Staircase & Balcony Railings</li>
              <li className="hover:text-slate-200">Automated Driveway Gates</li>
              <li className="hover:text-slate-200">Commercial Steel Erection</li>
            </ul>
          </div>

          {/* Workshop Dispatch */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-mono-numbers">
                Shop Dispatch
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <span>1420 Ironworks Parkway, Suite 100, Metro Industrial Park</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>+1 (555) 382-9353</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>quotes@weldprowelding.com</span>
                </li>
              </ul>
            </div>

            {/* Back to top button */}
            <div className="pt-6 mt-6 border-t border-slate-900 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">
                24/7 Emergency Mobile Rig Available
              </span>
              <button
                onClick={scrollToTop}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-orange-500/50 transition-colors cursor-pointer"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
