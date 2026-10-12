import React from 'react';

export const CapabilityStrip: React.FC = () => {
  const capabilities = [
    { title: 'Web Design', desc: 'Editorial typography & UI systems' },
    { title: 'Frontend Development', desc: 'React, Next.js, TypeScript' },
    { title: 'Landing Pages', desc: 'Single-offer conversion funnels' },
    { title: 'Technical SEO', desc: 'Core Web Vitals & indexability' },
    { title: 'Agency Partnerships', desc: 'White-label implementation' },
  ];

  return (
    <section
      aria-label="Capabilities"
      className="border-b border-borderLight bg-white py-6"
    >
      <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="font-mono text-[11px] tracking-widest uppercase text-vermilion font-bold shrink-0">
            CORE CAPABILITIES //
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8 divide-y sm:divide-y-0 divide-borderLight">
            {capabilities.map((item, idx) => (
              <div key={item.title} className="pt-2 sm:pt-0">
                <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-ink uppercase tracking-wider">
                  <span className="text-aqua text-[10px]">0{idx + 1}</span>
                  <span>{item.title}</span>
                </div>
                <div className="text-[11px] text-muted font-sans mt-0.5 leading-snug">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilityStrip;
