import React, { useState } from 'react';
import { Phone, MessageSquare, Mail, MapPin, Send, CheckCircle, Clock, ShieldCheck, Flame, ArrowUpRight } from 'lucide-react';

interface ContactSectionProps {
  prefilledProject?: string;
  onOpenQuoteCalculator?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefilledProject = '',
  onOpenQuoteCalculator,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: prefilledProject || 'Staircase Railing',
    timeline: 'Within 2 weeks',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-[#07090e] border-t border-slate-800/80">
      {/* Background glow */}
      <div className="absolute right-1/4 bottom-10 w-[550px] h-[550px] bg-orange-600/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold tracking-[0.2em] text-[#ff7700] uppercase font-mono-numbers mb-3 block">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            Have a project in mind? <br />
            <span className="text-[#ff6b00]">Let’s build something permanent.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Send us your drawings, CAD files, or project specifications. We respond with formal itemized quotes and structural feasibility reviews within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Direct Contact Info, WhatsApp, Phone & Workshop Location */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Phone Dispatch */}
              <a
                href="tel:+15553829353"
                className="group flex items-center gap-4 p-5 rounded-2xl bg-[#0c1017] border border-slate-800 hover:border-orange-500/50 hover:bg-[#101522] transition-all"
              >
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-mono-numbers">
                    Direct Workshop Phone
                  </span>
                  <strong className="text-base font-bold text-white group-hover:text-orange-400 transition-colors">
                    +1 (555) 382-9353
                  </strong>
                  <span className="text-[11px] text-emerald-400 mt-0.5">
                    ● Mon–Sat 7:00 AM – 6:00 PM EST
                  </span>
                </div>
              </a>

              {/* WhatsApp Direct */}
              <a
                href="https://wa.me/15553829353?text=Hi%20WeldPro,%20I%20have%20a%20welding%20project%20inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 rounded-2xl bg-[#0c1017] border border-slate-800 hover:border-emerald-500/50 hover:bg-[#0c1618] transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-mono-numbers">
                      Instant WhatsApp Chat
                    </span>
                    <strong className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                      Chat on WhatsApp
                    </strong>
                    <span className="text-[11px] text-slate-400 mt-0.5">
                      Send photos or sketches for rapid ballpark estimates
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              {/* Email */}
              <a
                href="mailto:quotes@weldprowelding.com"
                className="group flex items-center gap-4 p-5 rounded-2xl bg-[#0c1017] border border-slate-800 hover:border-orange-500/50 hover:bg-[#101522] transition-all"
              >
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-mono-numbers">
                    Engineering Blueprints & RFQs
                  </span>
                  <strong className="text-base font-bold text-white group-hover:text-orange-400 transition-colors">
                    quotes@weldprowelding.com
                  </strong>
                  <span className="text-[11px] text-slate-400 mt-0.5">
                    Guaranteed response within 24 business hours
                  </span>
                </div>
              </a>

              {/* Workshop Location */}
              <div className="p-5 rounded-2xl bg-[#0c1017] border border-slate-800 flex items-start gap-4">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-orange-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-mono-numbers">
                    Fabrication Workshop
                  </span>
                  <strong className="text-base font-bold text-white">
                    1420 Ironworks Parkway, Suite 100
                  </strong>
                  <span className="text-xs text-slate-300 mt-0.5">
                    Metro Industrial Logistics Park, East Bay Area
                  </span>
                  <span className="text-[11px] text-slate-400 mt-2">
                    Client visits & material inspections welcomed by appointment.
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Estimator Callout */}
            {onOpenQuoteCalculator && (
              <div className="p-5 rounded-2xl bg-gradient-to-br from-orange-950/40 via-slate-900/60 to-slate-900/80 border border-orange-500/30">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-wider mb-1">
                  <Flame className="w-4 h-4" />
                  <span>Need an Instant Cost Estimate?</span>
                </div>
                <p className="text-xs text-slate-300 mb-3">
                  Calculate ballpark pricing for railings, gates, structural steel, or custom furniture based on linear feet and materials.
                </p>
                <button
                  onClick={onOpenQuoteCalculator}
                  className="px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <span>Launch Interactive Quote Calculator</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#0c1017] border border-slate-800 p-7 sm:p-9 shadow-2xl relative">
              
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-5">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-white mb-2">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Our senior estimator has received your project details for <strong className="text-orange-400">{formData.projectType}</strong>. We will review the specs and reach back out at <strong className="text-white">{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        projectType: 'Staircase Railing',
                        timeline: 'Within 2 weeks',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 rounded-full bg-slate-900 border border-slate-700 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-800 pb-4 mb-2">
                    <h3 className="text-xl font-bold text-white">
                      Request Official Consultation & Quote
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Fill out the form below and an AWS-certified welder will assess your requirements.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@domain.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Project Category
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-sm"
                      >
                        <option value="Staircase Railing">Staircase Railing</option>
                        <option value="Main Gate">Main Driveway Gate</option>
                        <option value="Steel Structure">Commercial Steel Structure</option>
                        <option value="Industrial Piping & Manifolds">Industrial Piping & Manifolds</option>
                        <option value="Custom Metal Furniture">Custom Metal Furniture</option>
                        <option value="Balcony Railing">Balcony Railing</option>
                        <option value="Mobile On-Site Welding Repair">Mobile On-Site Welding Repair</option>
                        <option value="Other Bespoke Fabrication">Other Bespoke Fabrication</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Target Completion Timeline
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Urgent (< 1 week)', 'Standard (2-4 weeks)', 'Planning Phase'].map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setFormData({ ...formData, timeline: time })}
                          className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-all ${
                            formData.timeline === time
                              ? 'bg-orange-500/20 border-orange-500 text-orange-300 font-semibold'
                              : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Project Specifications & Dimensions *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe dimensions, preferred material (e.g. stainless steel, mild steel), site location, and any specific structural requirements..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-sm"
                    />
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                    <span>Have blueprint PDFs or photos?</span>
                    <span className="text-orange-400 font-medium">
                      Email to quotes@weldprowelding.com
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-full font-bold text-sm sm:text-base text-white bg-[#ff6b00] hover:bg-[#ff7b1a] active:scale-[0.99] transition-all shadow-[0_0_25px_rgba(255,107,0,0.5)] hover:shadow-[0_0_35px_rgba(255,107,0,0.7)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting Project Details...
                      </span>
                    ) : (
                      <>
                        <span>Submit Project For Free Quote</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
