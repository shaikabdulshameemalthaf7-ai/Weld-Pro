import React, { useState } from 'react';
import { Project, ProjectCategory } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { ArrowUpRight, Filter, Eye, X, Check, Shield, Layers, Calendar, UserCheck } from 'lucide-react';

interface PortfolioGalleryProps {
  onOpenQuoteForProject: (projectTitle: string) => void;
  selectedProjectFromOutside?: Project | null;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({
  onOpenQuoteForProject,
}) => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filterCategories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'gates', label: 'Gates' },
    { id: 'railings', label: 'Railings' },
    { id: 'structures', label: 'Structures' },
    { id: 'furniture', label: 'Furniture' },
    { id: 'industrial', label: 'Industrial' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="relative py-20 lg:py-28 bg-[#090b10]">
      {/* Background glow */}
      <div className="absolute left-1/2 top-10 -translate-x-1/2 w-[700px] h-[500px] bg-orange-600/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-[0.2em] text-[#ff7700] uppercase font-mono-numbers mb-3 block">
            PORTFOLIO SHOWCASE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            Forged in Fire. <span className="text-[#ff6b00]">Built to Endure.</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Browse our extensive portfolio of architectural railings, custom security gates, certified heavy structural frames, and bespoke metal designs.
          </p>
        </div>

        {/* Filter Bar (Interactive segmented controls as required by zero-pill discipline) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterCategories.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#ff6b00] text-white shadow-[0_0_16px_rgba(255,107,0,0.4)]'
                    : 'bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="group relative rounded-2xl overflow-hidden bg-[#0c1017] border border-slate-800/90 hover:border-orange-500/60 hover:shadow-[0_0_35px_rgba(255,107,0,0.25)] transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1017] via-transparent to-transparent opacity-80" />

                {/* Hover Quick Action */}
                <div className="absolute inset-0 bg-[#07090e]/75 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="px-4 py-2 rounded-full bg-[#ff6b00] text-white font-semibold text-xs flex items-center gap-1.5 shadow-lg shadow-orange-500/40">
                    <Eye className="w-3.5 h-3.5" />
                    Inspect Project Specs
                  </span>
                </div>

                {/* Client category badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded bg-black/75 backdrop-blur-md text-[11px] font-semibold text-slate-200 border border-slate-800">
                    {project.clientType}
                  </span>
                </div>
              </div>

              {/* Information Content */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-orange-400 font-mono-numbers">
                      {project.categoryLabel}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {project.specs.timeline}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2 mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Micro Specs strip */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="truncate pr-2 font-mono-numbers text-[11px] text-slate-400">
                    {project.specs.process}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-orange-400 shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Project Detailed Viewer Modal */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="portfolio-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="relative w-full max-w-4xl rounded-2xl bg-[#0c1017] border border-slate-700 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-900/90 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Body */}
            <div className="overflow-y-auto">
              {/* Big High-Res Media Header */}
              <div className="relative aspect-[16/9] w-full bg-black overflow-hidden">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1017] via-transparent to-transparent opacity-90" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                    <span className="text-xs uppercase tracking-widest font-bold text-orange-400 font-mono-numbers">
                      {activeModalProject.categoryLabel} · {activeModalProject.clientType} Project
                    </span>
                  </div>
                  <h3 id="portfolio-modal-title" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-white">
                    {activeModalProject.title}
                  </h3>
                </div>
              </div>

              {/* Details & Specs Container */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Project Overview
                  </h4>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {activeModalProject.fullDetails || activeModalProject.description}
                  </p>
                </div>

                {/* Technical Specifications Bento Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">
                      Material Base
                    </span>
                    <strong className="text-xs text-white block">
                      {activeModalProject.specs.material}
                    </strong>
                  </div>

                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">
                      Welding Process
                    </span>
                    <strong className="text-xs text-orange-400 block">
                      {activeModalProject.specs.process}
                    </strong>
                  </div>

                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">
                      Surface Finish
                    </span>
                    <strong className="text-xs text-white block">
                      {activeModalProject.specs.finish}
                    </strong>
                  </div>

                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">
                      Lead Timeline
                    </span>
                    <strong className="text-xs text-white block">
                      {activeModalProject.specs.timeline}
                    </strong>
                  </div>
                </div>

                {/* Footer action bar */}
                <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Shield className="w-4 h-4 text-orange-400" />
                    <span>Includes Lifetime Structural Weld Warranty</span>
                  </div>

                  <button
                    onClick={() => {
                      const title = activeModalProject.title;
                      setActiveModalProject(null);
                      onOpenQuoteForProject(title);
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white bg-[#ff6b00] hover:bg-[#ff7b1a] shadow-[0_0_20px_rgba(255,107,0,0.5)] transition-all cursor-pointer"
                  >
                    <span>Request Similar Project</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
