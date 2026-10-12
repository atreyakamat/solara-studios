import React from 'react';

interface AnnouncementStripProps {
  onCtaClick?: () => void;
}

export const AnnouncementStrip: React.FC<AnnouncementStripProps> = ({ onCtaClick }) => {
  return (
    <aside
      aria-label="Studio Announcement"
      className="bg-ink text-porcelain text-xs font-mono py-2.5 px-4 border-b border-ink-subtle/40"
    >
      <div className="max-w-page mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-aqua animate-pulse" aria-hidden="true" />
          <span className="tracking-wider uppercase font-semibold text-[11px] sm:text-xs">
            Sprint Slots Open: Accepting select website &amp; landing page projects for Q4
          </span>
        </div>
        <a
          href="#contact"
          onClick={onCtaClick}
          className="text-aqua hover:text-white underline underline-offset-4 font-semibold text-[11px] sm:text-xs tracking-wider uppercase transition-colors"
        >
          Inquire for Next Sprint →
        </a>
      </div>
    </aside>
  );
};

export default AnnouncementStrip;
