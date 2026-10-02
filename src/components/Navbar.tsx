import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Flame } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090b10]/90 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3.5'
          : 'bg-gradient-to-b from-[#090b10]/95 via-[#090b10]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Lockup matching the reference image */}
          <a
            href="#home"
            className="group flex items-center gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-lg p-1"
          >
            {/* Custom Welder Helmet & Torch Icon */}
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 group-hover:border-orange-500/80 transition-colors shadow-inner overflow-hidden">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-slate-200 group-hover:text-orange-400 transition-colors"
              >
                {/* Welder mask helmet shape */}
                <path
                  d="M12 2C7.5 2 4 5.5 4 10v4c0 3.5 2.5 6.5 6 7.5V22h4v-0.5c3.5-1 6-4 6-7.5v-4c0-4.5-3.5-8-8-8z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Mask dark visor slot */}
                <rect
                  x="7.5"
                  y="8.5"
                  width="9"
                  height="4.5"
                  rx="1"
                  fill="#0284c7"
                  fillOpacity="0.4"
                  stroke="#38bdf8"
                  strokeWidth="1.3"
                />
                {/* Electric welding arc dot */}
                <circle cx="16" cy="15.5" r="1.5" fill="#f97316" />
                <path d="M16 13.5v-1.5M18 15.5h1.5M17.5 17l1 1M14.5 17l-1 1" stroke="#f97316" strokeWidth="1.2" />
              </svg>
              {/* Subtle orange spark ambient blur */}
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-orange-500/40 rounded-full blur-xs" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center text-xl font-bold font-display tracking-tight leading-tight">
                <span className="text-white">Weld</span>
                <span className="text-[#ff6b00]">Pro</span>
              </div>
              <span className="text-[10px] uppercase tracking-widest font-semibold text-slate-400 -mt-0.5">
                Welding Solutions
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors hover:text-white py-1 ${
                    isActive ? 'text-white' : 'text-slate-400'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff6b00] rounded-full shadow-[0_0_8px_#ff6b00]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm text-white bg-[#ff6b00] hover:bg-[#e65c00] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(255,107,0,0.45)] hover:shadow-[0_0_28px_rgba(255,107,0,0.65)] whitespace-nowrap cursor-pointer"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 px-4 pt-2 pb-5 bg-[#0d111a] border-b border-slate-800 shadow-2xl">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-orange-500/10 text-orange-400 font-semibold'
                      : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-orange-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30"
              >
                <Flame className="w-4 h-4" />
                <span>Request Custom Quote</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
