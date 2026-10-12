import React from 'react';

export const ProcessSection: React.FC = () => {
  const stages = [
    {
      num: '01',
      title: 'Discover',
      kicker: 'STAGE 01 // FOUNDATION',
      desc: 'Understand the business, audience, objectives, current problems, constraints, and required functionality.',
      deliverable: 'A clear project brief, deliverable list, and scope boundaries.',
      tag: 'Alignment',
    },
    {
      num: '02',
      title: 'Define',
      kicker: 'STAGE 02 // ARCHITECTURE',
      desc: 'Establish the information architecture, content structure, visual direction, technical approach, and implementation priorities.',
      deliverable: 'An agreed direction, content wireframe, and implementation plan.',
      tag: 'Direction',
    },
    {
      num: '03',
      title: 'Build',
      kicker: 'STAGE 03 // ENGINEERING',
      desc: 'Implement the approved experience, test responsive behavior across viewports, integrate required functionality, and collect structured feedback.',
      deliverable: 'A working, high-fidelity project ready for client review.',
      tag: 'Implementation',
    },
    {
      num: '04',
      title: 'Launch',
      kicker: 'STAGE 04 // HANDOVER',
      desc: 'Complete quality and accessibility checks, resolve agreed revisions, deploy to production where included, and provide the technical handover.',
      deliverable: 'A deployed or cleanly handed-over digital asset according to contract.',
      tag: 'Deployment',
    },
  ];

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="py-16 sm:py-24 border-b border-borderLight bg-porcelain"
    >
      <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-borderLight pb-6 mb-12 gap-4">
          <div>
            <div className="font-mono text-xs text-vermilion font-bold uppercase tracking-widest mb-1.5">
              04 // HOW WE WORK
            </div>
            <h2
              id="process-heading"
              className="font-serif text-3xl sm:text-5xl text-ink font-normal tracking-tight"
            >
              A clear process. Fewer surprises.
            </h2>
          </div>
          <p className="text-muted text-sm sm:text-base font-sans max-w-md leading-relaxed">
            Every engagement follows a structured, milestone-driven execution sequence with documented deliverables at each stage.
          </p>
        </div>

        {/* 4-Stage Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-borderLight bg-white divide-y md:divide-y-0 md:divide-x divide-borderLight mb-8">
          {stages.map((stage) => (
            <article
              key={stage.num}
              className="p-6 sm:p-8 flex flex-col justify-between hover:bg-porcelain/50 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-vermilion font-bold tracking-widest uppercase">
                    {stage.num}
                  </span>
                  <span className="font-mono text-[10px] text-muted tracking-wider uppercase px-2 py-0.5 bg-porcelain border border-borderLight">
                    {stage.tag}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-ink mb-3">
                  {stage.title}
                </h3>

                <p className="text-muted text-sm leading-relaxed font-sans mb-6">
                  {stage.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-borderLight">
                <div className="font-mono text-[10px] uppercase text-muted tracking-wider mb-1">
                  Stage Deliverable:
                </div>
                <div className="font-mono text-xs text-ink font-semibold">
                  {stage.deliverable}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Scope and Timeline Notice */}
        <div className="p-4 sm:p-5 bg-white border border-borderLight flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-muted">
          <div className="flex items-start sm:items-center gap-2">
            <span className="text-vermilion font-bold">ℹ</span>
            <span>
              Specific delivery targets depend strictly on agreed project scope, timely receipt of content/assets, and responsive feedback cycles.
            </span>
          </div>
          <a
            href="#contact"
            className="text-ink font-bold hover:text-vermilion underline shrink-0 uppercase tracking-wider text-[11px]"
          >
            Review Your Timeline With Us →
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
