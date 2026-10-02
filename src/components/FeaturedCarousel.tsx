import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight, Sparkles, Layers } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';

interface FeaturedCarouselProps {
  onSelectProject: (project: Project) => void;
  onViewAllProjects: () => void;
}

export const FeaturedCarousel: React.FC<FeaturedCarouselProps> = ({
  onSelectProject,
  onViewAllProjects,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 380;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
    setTimeout(checkScroll, 350);
  };

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-[#090b10]">
      {/* Background ambient lighting */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-orange-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Heading, description, and carousel controls */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full pt-2">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-[#ff7700] uppercase font-mono-numbers mb-3 block">
                MY WORKS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white mb-5 leading-tight">
                Featured <span className="text-[#ff6b00]">Projects</span>
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-8">
                Here are some of the projects I’ve worked on, showcasing my welding skills, attention to detail, and commitment to quality.
              </p>
              
              <button
                onClick={onViewAllProjects}
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-orange-500/50 hover:text-white transition-all shadow-md cursor-pointer"
              >
                <span>View All Projects</span>
                <ArrowUpRight className="w-4 h-4 text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Desktop Carousel Arrow Navigation matching the image */}
            <div className="hidden lg:flex items-center gap-3 pt-10">
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                aria-label="Previous Project"
                className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
                  canScrollLeft
                    ? 'border-slate-700 bg-slate-900/90 text-white hover:border-orange-500 hover:bg-orange-500/10 cursor-pointer shadow-lg'
                    : 'border-slate-800 bg-slate-950/40 text-slate-600 cursor-not-allowed opacity-50'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                aria-label="Next Project"
                className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
                  canScrollRight
                    ? 'border-slate-700 bg-slate-900/90 text-white hover:border-orange-500 hover:bg-orange-500/10 cursor-pointer shadow-lg'
                    : 'border-slate-800 bg-slate-950/40 text-slate-600 cursor-not-allowed opacity-50'
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Column: Horizontal Scrollable Cards */}
          <div className="lg:col-span-8 relative">
            <div
              ref={scrollContainerRef}
              onScroll={checkScroll}
              className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory focus:outline-none"
              tabIndex={0}
              role="region"
              aria-label="Featured Projects Carousel"
            >
              {PROJECTS.map((project) => (
                <div
                  key={project.id}
                  onClick={() => onSelectProject(project)}
                  className="snap-start shrink-0 w-[290px] sm:w-[340px] md:w-[370px] group cursor-pointer"
                >
                  {/* Card Container */}
                  <div className="relative rounded-2xl overflow-hidden bg-[#0d121c] border border-slate-800/90 transition-all duration-300 group-hover:border-orange-500/60 group-hover:shadow-[0_0_30px_rgba(255,107,0,0.22)] group-hover:-translate-y-1">
                    
                    {/* Project Image */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Dark gradient shadow */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d121c] via-transparent to-transparent opacity-80" />

                      {/* Hover Spec Quick Reveal */}
                      <div className="absolute inset-0 bg-[#07090e]/85 backdrop-blur-xs p-5 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="text-xs text-orange-400 font-semibold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5" />
                          <span>{project.specs.process}</span>
                        </div>
                        <p className="text-xs text-slate-200 line-clamp-3 mb-3">
                          {project.description}
                        </p>
                        <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
                          <span>{project.specs.timeline}</span>
                          <span className="text-orange-400 font-medium flex items-center gap-1">
                            Inspect Details <ArrowUpRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card Title & Info Bar matching reference image */}
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                        {project.title}
                      </h3>
                      
                      {/* Orange dot + Category label */}
                      <div className="flex items-center gap-2 mt-2">
                        <span className="w-2 h-2 rounded-full bg-[#ff6b00] shadow-[0_0_8px_#ff6b00]" />
                        <span className="text-xs font-medium text-slate-400">
                          {project.clientType}
                        </span>
                        <span className="text-slate-600">·</span>
                        <span className="text-xs text-slate-500">
                          {project.categoryLabel}
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Swipe / Arrow indicator */}
            <div className="flex lg:hidden items-center justify-between mt-4">
              <span className="text-xs text-slate-500 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                Swipe horizontally to browse projects
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => scroll('left')}
                  className="p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-300"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-300"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
