import React from 'react';

interface SectionDividerProps {
  glowColor?: 'orange' | 'blue';
  className?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  glowColor = 'orange',
  className = '',
}) => {
  const isOrange = glowColor === 'orange';

  return (
    <div className={`relative w-full h-px my-12 md:my-16 overflow-hidden ${className}`}>
      {/* Base steel seam line */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      
      {/* Hot welded glow trail */}
      <div 
        className={`absolute inset-0 ${
          isOrange 
            ? 'bg-gradient-to-r from-transparent via-orange-500/25 to-transparent' 
            : 'bg-gradient-to-r from-transparent via-sky-500/25 to-transparent'
        }`} 
      />

      {/* Travelling electric welding arc spark */}
      <div 
        className="weld-spark-runner absolute top-1/2 -translate-y-1/2 w-48 h-[3px] pointer-events-none"
        style={{
          background: isOrange
            ? 'linear-gradient(90deg, transparent 0%, #ff7700 40%, #ffffff 80%, #60a5fa 95%, transparent 100%)'
            : 'linear-gradient(90deg, transparent 0%, #0284c7 40%, #ffffff 80%, #38bdf8 95%, transparent 100%)',
          boxShadow: isOrange
            ? '0 0 16px 2px #ff6600, 0 0 6px 1px #ffffff'
            : '0 0 16px 2px #38bdf8, 0 0 6px 1px #ffffff'
        }}
      />
    </div>
  );
};
