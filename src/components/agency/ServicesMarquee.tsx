import React from 'react';

interface PillItem {
  label: string;
  isAccent?: boolean;
}

const ROW_1: PillItem[] = [
  { label: 'Web Design', isAccent: true },
  { label: 'Web Development', isAccent: false },
  { label: 'UI/UX Systems', isAccent: false },
  { label: 'Landing Pages', isAccent: true },
  { label: 'Technical SEO', isAccent: false },
  { label: 'Conversion Optimization', isAccent: false },
  { label: 'Creative Engineering', isAccent: true },
  { label: 'Responsive Experiences', isAccent: false },
];

const ROW_2: PillItem[] = [
  { label: 'Brand Websites', isAccent: false },
  { label: 'Digital Strategy', isAccent: true },
  { label: 'Agency Partnerships', isAccent: false },
  { label: 'Website Performance', isAccent: false },
  { label: 'Core Web Vitals', isAccent: true },
  { label: 'White-Label Dev', isAccent: false },
  { label: 'Next.js & React', isAccent: true },
  { label: 'Lead Capture Funnels', isAccent: false },
];

export const ServicesMarquee: React.FC = () => {
  return (
    <div className="w-full overflow-hidden py-8 space-y-4 select-none">
      
      {/* Row 1: Moves Left */}
      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee-left flex items-center gap-3">
          {/* Double array for seamless loop */}
          {[...ROW_1, ...ROW_1, ...ROW_1].map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className={`shrink-0 px-6 py-3 rounded-full text-xs sm:text-sm font-heading font-semibold uppercase tracking-wider transition-transform hover:scale-105 ${
                item.isAccent
                  ? 'bg-lime text-ink border border-lime shadow-subtle'
                  : 'bg-deepOlive text-lime/80 border border-lime/20'
              }`}
            >
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Moves Right */}
      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee-right flex items-center gap-3">
          {/* Double array for seamless loop */}
          {[...ROW_2, ...ROW_2, ...ROW_2].map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className={`shrink-0 px-6 py-3 rounded-full text-xs sm:text-sm font-heading font-semibold uppercase tracking-wider transition-transform hover:scale-105 ${
                item.isAccent
                  ? 'bg-lime text-ink border border-lime shadow-subtle'
                  : 'bg-darkGreen text-white/80 border border-white/10'
              }`}
            >
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ServicesMarquee;
