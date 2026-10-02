import React, { useState } from 'react';
import { X, Calculator, ArrowRight, ShieldCheck, Check, Sparkles, Phone, MessageSquare } from 'lucide-react';

interface QuoteCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  onContinueToContact: (calculatedDetails: string) => void;
}

export const QuoteCalculatorModal: React.FC<QuoteCalculatorModalProps> = ({
  isOpen,
  onClose,
  initialService,
  onContinueToContact,
}) => {
  const [projectType, setProjectType] = useState<string>(initialService || 'Staircase Railing');
  const [material, setMaterial] = useState<string>('Mild Carbon Steel');
  const [lengthFeet, setLengthFeet] = useState<number>(20);
  const [finish, setFinish] = useState<string>('Architectural Powder Coat');
  const [installRequired, setInstallRequired] = useState<boolean>(true);

  if (!isOpen) return null;

  // Calculation logic based on industrial rates
  const getBaseRatePerFoot = () => {
    switch (projectType) {
      case 'Staircase Railing':
        return 95;
      case 'Driveway Gate':
        return 160;
      case 'Commercial Steel Structure':
        return 220;
      case 'Balcony Railing':
        return 115;
      case 'Custom Metal Furniture':
        return 140;
      default:
        return 90;
    }
  };

  const getMaterialMultiplier = () => {
    switch (material) {
      case '304 Stainless Steel':
        return 1.45;
      case 'Marine 316 Stainless':
        return 1.85;
      case '6061 Structural Aluminum':
        return 1.35;
      case 'Wrought Ornamental Iron':
        return 1.25;
      default:
        return 1.0; // Mild Steel
    }
  };

  const getFinishCostPerFoot = () => {
    switch (finish) {
      case 'Hot-Dip Galvanized':
        return 25;
      case 'Architectural Powder Coat':
        return 18;
      case 'Hand-Rubbed Patina':
        return 22;
      default:
        return 0; // Raw / Shop Primer
    }
  };

  const baseFabrication = Math.round(lengthFeet * getBaseRatePerFoot() * getMaterialMultiplier());
  const surfaceFinishTotal = Math.round(lengthFeet * getFinishCostPerFoot());
  const installationTotal = installRequired ? Math.round(baseFabrication * 0.22) : 0;
  const totalEstimate = baseFabrication + surfaceFinishTotal + installationTotal;
  const lowEstimate = Math.round(totalEstimate * 0.9);
  const highEstimate = Math.round(totalEstimate * 1.15);

  const handleProceed = () => {
    const details = `Estimated ${projectType} (${lengthFeet} ft) in ${material} with ${finish} finish. Estimated range: $${lowEstimate.toLocaleString()} - $${highEstimate.toLocaleString()}`;
    onContinueToContact(details);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="calculator-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-3xl bg-[#0c1017] border border-slate-700 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
          aria-label="Close Calculator"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-orange-500/20 border border-orange-500/40 text-orange-400">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h3 id="calculator-modal-title" className="text-2xl font-bold font-display text-white">
              Instant Welding & Fabrication Estimator
            </h3>
            <p className="text-xs text-slate-400">
              Configure your project parameters to get a real-time ballpark cost range.
            </p>
          </div>
        </div>

        {/* Form Options */}
        <div className="space-y-5">
          {/* Project Type */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
              1. Project Category
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                'Staircase Railing',
                'Driveway Gate',
                'Balcony Railing',
                'Commercial Steel Structure',
                'Custom Metal Furniture',
              ].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setProjectType(type)}
                  className={`p-2.5 rounded-xl text-xs font-semibold border text-left transition-all ${
                    projectType === type
                      ? 'bg-orange-500/20 border-orange-500 text-white shadow-sm'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Material Selection */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
              2. Metal & Alloy Specification
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                'Mild Carbon Steel',
                '304 Stainless Steel',
                'Marine 316 Stainless',
                '6061 Structural Aluminum',
                'Wrought Ornamental Iron',
              ].map((mat) => (
                <button
                  key={mat}
                  type="button"
                  onClick={() => setMaterial(mat)}
                  className={`p-2.5 rounded-xl text-xs font-medium border text-left transition-all ${
                    material === mat
                      ? 'bg-orange-500/20 border-orange-500 text-white shadow-sm'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  {mat}
                </button>
              ))}
            </div>
          </div>

          {/* Size / Length Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                3. Total Length / Span (Linear Feet)
              </label>
              <span className="text-sm font-bold text-orange-400 font-mono-numbers">
                {lengthFeet} Feet
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="150"
              step="1"
              value={lengthFeet}
              onChange={(e) => setLengthFeet(Number(e.target.value))}
              className="w-full accent-orange-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 mt-1">
              <span>5 ft (Small repair/gate)</span>
              <span>75 ft (Medium commercial)</span>
              <span>150 ft (Large installation)</span>
            </div>
          </div>

          {/* Finish & Treatment */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
              4. Surface Protective Treatment
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                'Architectural Powder Coat',
                'Hot-Dip Galvanized',
                'Hand-Rubbed Patina',
                'Standard Shop Primer',
              ].map((fin) => (
                <button
                  key={fin}
                  type="button"
                  onClick={() => setFinish(fin)}
                  className={`p-2.5 rounded-xl text-xs font-medium border text-left transition-all ${
                    finish === fin
                      ? 'bg-orange-500/20 border-orange-500 text-white shadow-sm'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  {fin}
                </button>
              ))}
            </div>
          </div>

          {/* On-site Installation toggle */}
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-white block">
                Include Professional On-Site Installation & Welding Rig
              </span>
              <span className="text-[11px] text-slate-400">
                Turnkey anchoring, core drilling, alignment, and final inspection.
              </span>
            </div>
            <button
              type="button"
              onClick={() => setInstallRequired(!installRequired)}
              className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
                installRequired ? 'bg-orange-500' : 'bg-slate-700'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white transition-transform absolute top-0.5 ${
                  installRequired ? 'left-6.5' : 'left-0.5'
                }`}
              />
            </button>
          </div>

          {/* Live Calculated Estimate Box */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-[#121927] to-[#0c1017] border border-orange-500/40 shadow-inner">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-orange-400 font-mono-numbers font-semibold block">
                  Ballpark Estimation
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono-numbers mt-0.5">
                  ${lowEstimate.toLocaleString()} – ${highEstimate.toLocaleString()}
                </div>
                <span className="text-[11px] text-slate-400 block mt-1">
                  *Includes shop labor, AWS welding inspection, materials, and {finish}.
                </span>
              </div>

              <button
                type="button"
                onClick={handleProceed}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white bg-[#ff6b00] hover:bg-[#ff7b1a] shadow-[0_0_20px_rgba(255,107,0,0.5)] transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Lock In Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
