import React, { useState, useRef } from 'react';
import { VERIFIED_PROJECTS } from '../../data/projects';
import type { Project } from '../../data/projects';
import ProjectModal from '../solara/ProjectModal';
import { trackEvent } from '../../lib/analytics';

export const AgencyPortfolioCarousel: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth * 0.75;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      scroll('left');
    } else if (e.key === 'ArrowRight') {
      scroll('right');
    }
  };

  const handleOpenProject = (project: Project) => {
    trackEvent('portfolio_project_click', { label: project.title });
    setSelectedProject(project);
  };

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="py-20 sm:py-32 bg-cream-grid text-ink border-b border-borderLine relative overflow-hidden"
    >
      <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-deepOlive text-lime font-mono text-xs uppercase tracking-widest font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
              <span>Our Work</span>
            </div>
            
            <h2
              id="work-heading"
              className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-ink uppercase leading-none mb-4"
            >
              Curated work. Verified outcomes.
            </h2>

            <p className="font-sans text-muted text-base sm:text-lg leading-relaxed">
              A curated look at websites, digital experiences, and visual systems built with care and engineered for real commercial performance.
            </p>
          </div>

          {/* Carousel Next / Prev Controls */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scroll('left')}
              aria-label="Previous portfolio project"
              className="w-12 h-12 rounded-full border border-borderLine bg-white text-ink hover:bg-lime hover:border-lime transition-all flex items-center justify-center font-bold text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime shadow-subtle active:scale-95"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              aria-label="Next portfolio project"
              className="w-12 h-12 rounded-full border border-borderLine bg-white text-ink hover:bg-lime hover:border-lime transition-all flex items-center justify-center font-bold text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime shadow-subtle active:scale-95"
            >
              →
            </button>
          </div>
        </div>

      </div>

      {/* Horizontal Carousel Track */}
      <div className="w-full">
        <div
          ref={scrollContainerRef}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          role="region"
          aria-label="Portfolio projects carousel"
          className="flex gap-6 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-6 no-scrollbar snap-x snap-mandatory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
        >
          {VERIFIED_PROJECTS.map((project) => (
            <article
              key={project.id}
              className="shrink-0 w-[300px] sm:w-[380px] lg:w-[440px] snap-start bg-white border border-borderLine rounded-2xl overflow-hidden flex flex-col justify-between hover:shadow-elevated hover:border-ink transition-all duration-300"
            >
              {/* Card Image / Visual Header */}
              <div className="relative h-52 sm:h-60 bg-gradient-to-br from-ink to-darkGreen p-6 flex flex-col justify-between overflow-hidden group">
                {/* Decorative mesh */}
                <div className="absolute inset-0 bg-dark-grid opacity-30 pointer-events-none" />
                <div className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-lime/20 blur-2xl pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between font-mono text-[11px] text-lime font-bold uppercase tracking-wider">
                  <span>{project.number}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-deepOlive text-lime border border-lime/30 text-[10px]">
                    {project.tag}
                  </span>
                </div>

                <div className="relative z-10">
                  <span className="font-mono text-[10px] uppercase text-muted tracking-widest block mb-1">
                    {project.category}
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white group-hover:text-lime transition-colors leading-tight">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Content & Triad */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3 mb-6 text-xs sm:text-sm font-sans text-muted">
                  <div>
                    <strong className="text-ink font-semibold block font-mono text-[11px] uppercase tracking-wider">
                      Problem:
                    </strong>
                    <p className="line-clamp-2 leading-relaxed mt-0.5">{project.problem}</p>
                  </div>
                  <div>
                    <strong className="text-ink font-semibold block font-mono text-[11px] uppercase tracking-wider">
                      The Build:
                    </strong>
                    <p className="line-clamp-2 leading-relaxed mt-0.5">{project.build}</p>
                  </div>
                </div>

                {/* Stack and Action */}
                <div className="pt-4 border-t border-borderLine flex flex-col gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] px-2 py-0.5 rounded bg-cream border border-borderLine text-ink"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => handleOpenProject(project)}
                      className="font-heading font-bold text-xs uppercase tracking-wider text-ink hover:text-lime-muted flex items-center gap-1 transition-colors"
                    >
                      <span>Case Study</span>
                      <span>→</span>
                    </button>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-lime-muted font-bold hover:underline uppercase"
                      >
                        Visit Live ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Verification note */}
      <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center font-mono text-xs text-muted">
        All projects represent genuine full-stack software and platforms engineered by founder Atreya Kamat. Explore the complete engineering portfolio at{' '}
        <a
          href="https://atreyakamat.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink underline hover:text-lime-muted font-semibold"
        >
          atreyakamat.dev
        </a>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default AgencyPortfolioCarousel;
