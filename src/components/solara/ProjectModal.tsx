import React, { useEffect } from 'react';
import type { Project } from '../../data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/70 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white border border-borderLight shadow-elevated p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-borderLight mb-6">
          <div>
            <div className="font-mono text-xs text-vermilion font-bold tracking-wider uppercase mb-1">
              {project.number} // {project.category}
            </div>
            <h3 id="modal-project-title" className="font-serif text-2xl sm:text-3xl font-bold text-ink">
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-muted hover:text-ink border border-borderLight rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Problem - Build - Outcome Triad */}
        <div className="space-y-5 text-sm font-sans mb-8">
          <div className="p-4 bg-porcelain border border-borderLight">
            <span className="font-mono text-xs font-bold text-vermilion uppercase tracking-wider block mb-1">
              The Problem:
            </span>
            <p className="text-ink leading-relaxed">{project.problem}</p>
          </div>

          <div className="p-4 bg-porcelain border border-borderLight">
            <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider block mb-1">
              The Build:
            </span>
            <p className="text-ink leading-relaxed">{project.build}</p>
          </div>

          <div className="p-4 bg-porcelain border border-borderLight">
            <span className="font-mono text-xs font-bold text-aqua uppercase tracking-wider block mb-1">
              The Outcome:
            </span>
            <p className="text-ink leading-relaxed">{project.outcome}</p>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="mb-8">
          <div className="font-mono text-xs text-muted uppercase tracking-wider mb-2">
            Verified Technologies:
          </div>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="font-mono text-xs px-2.5 py-1 bg-surfaceMuted border border-borderLight text-ink font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* External links */}
        <div className="pt-4 border-t border-borderLight flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-solara-primary text-xs"
              >
                <span>Visit Live Application</span>
                <span className="text-aqua" aria-hidden="true">↗</span>
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-solara-secondary text-xs"
              >
                <span>View Source Code</span>
                <span className="text-muted" aria-hidden="true">↗</span>
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-xs font-mono uppercase tracking-wider text-muted hover:text-ink ml-auto"
          >
            Close Window ✕
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
