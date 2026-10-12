import React, { useState } from 'react';
import { VERIFIED_PROJECTS } from '../../data/projects';
import type { Project } from '../../data/projects';
import ProjectModal from './ProjectModal';
import { trackEvent } from '../../lib/analytics';

export const SelectedWork: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const flagship = VERIFIED_PROJECTS.find((p) => p.isFlagship) || VERIFIED_PROJECTS[0];
  const otherProjects = VERIFIED_PROJECTS.filter((p) => p.id !== flagship.id);

  const handleOpenProject = (project: Project) => {
    trackEvent('portfolio_project_click', { label: project.title });
    setSelectedProject(project);
  };

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="py-16 sm:py-24 border-b border-borderLight"
    >
      <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-borderLight pb-6 mb-12 gap-4">
          <div>
            <div className="font-mono text-xs text-vermilion font-bold uppercase tracking-widest mb-1.5">
              01 // SELECTED WORK
            </div>
            <h2
              id="work-heading"
              className="font-serif text-3xl sm:text-5xl text-ink font-normal tracking-tight"
            >
              Built with purpose. Designed to move business forward.
            </h2>
          </div>
          <p className="text-muted text-sm sm:text-base font-sans max-w-md leading-relaxed">
            Explore digital experiences and implementation work shaped around clear goals, thoughtful design, and reliable engineering.
          </p>
        </div>

        {/* Flagship Project Showcase */}
        <div className="border border-ink/20 bg-white mb-12 shadow-subtle hover:border-ink transition-colors duration-200">
          <div className="p-4 sm:p-5 border-b border-borderLight flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
            <span className="font-bold text-ink uppercase tracking-wider">
              {flagship.number} // {flagship.category}
            </span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-aqua" aria-hidden="true" />
              <span className="text-ink font-semibold uppercase tracking-wider text-[11px]">
                {flagship.tag}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual / Mockup Preview Panel */}
            <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-borderLight bg-porcelain p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-borderLight text-[10px] font-mono uppercase font-semibold text-ink">
                  <span>PRODUCTION DEPLOYED</span>
                  <span className="text-aqua">●</span>
                </div>
                
                {/* Visual Agency Architecture Mockup Card */}
                <div className="border border-borderLight bg-white p-5 space-y-3">
                  <div className="flex items-center justify-between border-b border-borderLight pb-2">
                    <span className="font-serif text-lg text-ink font-bold">Pixel N Purpose</span>
                    <span className="font-mono text-[9px] text-muted">agency.client.sys</span>
                  </div>
                  <div className="space-y-1.5 text-xs text-muted font-sans">
                    <div className="flex justify-between font-mono text-[11px]">
                      <span>Page Load (LCP):</span>
                      <span className="text-ink font-bold">&lt; 0.6s</span>
                    </div>
                    <div className="flex justify-between font-mono text-[11px]">
                      <span>Inquiry Funnel:</span>
                      <span className="text-ink font-bold">Single-Page Multi-step</span>
                    </div>
                    <div className="flex justify-between font-mono text-[11px]">
                      <span>Architecture:</span>
                      <span className="text-ink font-bold">Next.js App Router</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-borderLight flex items-center gap-1.5 text-[10px] font-mono text-muted">
                    <span className="text-aqua font-bold">✓</span> Fluid mobile storytelling
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-borderLight/60 font-mono text-[11px] text-muted">
                Verified Client Deployment · Production Live
              </div>
            </div>

            {/* Content & Triad Panel */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-ink font-bold tracking-tight mb-4">
                  {flagship.title}
                </h3>

                <div className="space-y-3 text-sm font-sans mb-6">
                  <div>
                    <span className="font-mono text-xs text-vermilion font-bold uppercase tracking-wider block mb-0.5">
                      Problem:
                    </span>
                    <span className="text-ink leading-relaxed">{flagship.problem}</span>
                  </div>
                  <div>
                    <span className="font-mono text-xs text-ink font-bold uppercase tracking-wider block mb-0.5">
                      The Build:
                    </span>
                    <span className="text-ink leading-relaxed">{flagship.build}</span>
                  </div>
                  <div>
                    <span className="font-mono text-xs text-aqua font-bold uppercase tracking-wider block mb-0.5">
                      The Outcome:
                    </span>
                    <span className="text-ink leading-relaxed">{flagship.outcome}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-borderLight flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {flagship.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] px-2 py-0.5 bg-porcelain border border-borderLight text-ink"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleOpenProject(flagship)}
                    className="btn-solara-secondary text-xs"
                  >
                    <span>View Architecture Details</span>
                    <span aria-hidden="true">→</span>
                  </button>
                  {flagship.liveUrl && (
                    <a
                      href={flagship.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-solara-primary text-xs"
                    >
                      <span>Visit Live Site</span>
                      <span className="text-aqua" aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid of Other Genuine Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <article
              key={project.id}
              className="border border-borderLight bg-white flex flex-col justify-between hover:border-ink transition-colors duration-200"
            >
              <div className="p-5 border-b border-borderLight flex items-center justify-between font-mono text-xs">
                <span className="text-vermilion font-bold tracking-wider uppercase">
                  {project.number}
                </span>
                <span className="text-muted uppercase text-[10px] tracking-wider">
                  {project.tag}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="font-mono text-[10px] uppercase text-muted tracking-widest mb-1">
                    {project.category}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-ink mb-3 leading-snug">
                    {project.title}
                  </h3>
                  
                  <div className="space-y-2.5 text-xs font-sans text-ink mb-6">
                    <div>
                      <span className="font-mono text-[10px] font-bold text-vermilion uppercase mr-1">Problem:</span>
                      <span>{project.problem}</span>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] font-bold text-ink uppercase mr-1">Build:</span>
                      <span>{project.build}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-borderLight">
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] px-1.5 py-0.5 bg-porcelain border border-borderLight text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => handleOpenProject(project)}
                      className="font-mono text-xs font-semibold text-ink hover:text-vermilion flex items-center gap-1 transition-colors uppercase tracking-wider"
                    >
                      <span>Case Study</span>
                      <span aria-hidden="true">→</span>
                    </button>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-aqua font-bold hover:underline uppercase tracking-wider"
                      >
                        Live App ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Verification note */}
        <div className="mt-8 text-center font-mono text-xs text-muted">
          All case studies represent genuine engineering work developed by founder Atreya Kamat. Explore the complete engineering portfolio at{' '}
          <a
            href="https://atreyakamat.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline hover:text-vermilion font-semibold"
          >
            atreyakamat.dev
          </a>
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default SelectedWork;
