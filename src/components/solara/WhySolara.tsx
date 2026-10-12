import React from 'react';

export const WhySolara: React.FC = () => {
  return (
    <section
      id="why-solara"
      aria-labelledby="why-heading"
      className="py-16 sm:py-24 border-b border-borderLight bg-white"
    >
      <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-borderLight pb-6 mb-12 gap-4">
          <div>
            <div className="font-mono text-xs text-vermilion font-bold uppercase tracking-widest mb-1.5">
              03 // PHILOSOPHY &amp; APPROACH
            </div>
            <h2
              id="why-heading"
              className="font-serif text-3xl sm:text-5xl text-ink font-normal tracking-tight"
            >
              Small enough to care about the details. Technical enough to build the right thing.
            </h2>
          </div>
          <p className="text-muted text-sm sm:text-base font-sans max-w-md leading-relaxed">
            We avoid agency bloat, unverified promises, and endless handoffs in favor of direct collaboration and disciplined engineering.
          </p>
        </div>

        {/* Editorial Split Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Two Major Focus Pillars */}
          <div className="lg:col-span-7 space-y-8">
            {/* Pillar 1: Direct Collaboration */}
            <div className="border border-borderLight p-6 sm:p-8 bg-porcelain">
              <div className="flex items-center gap-2 font-mono text-xs text-vermilion font-bold uppercase tracking-wider mb-2">
                <span>01</span>
                <span>//</span>
                <span>Direct Collaboration</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-ink mb-3">
                Work directly with the engineer building your product.
              </h3>
              <p className="text-muted text-sm sm:text-base leading-relaxed font-sans mb-4">
                At Solara Studios, you communicate directly with founder and engineer Atreya Kamat. There are no layers of account executives, non-technical project managers, or junior offshore subcontractors translating your requirements. Questions get answered immediately, and feedback is implemented cleanly.
              </p>
              <div className="inline-flex items-center gap-2 font-mono text-xs text-ink font-semibold">
                <span className="text-aqua">✓</span> Zero communication lag
              </div>
            </div>

            {/* Pillar 2: Design and Engineering Together */}
            <div className="border border-borderLight p-6 sm:p-8 bg-porcelain">
              <div className="flex items-center gap-2 font-mono text-xs text-ink font-bold uppercase tracking-wider mb-2">
                <span>02</span>
                <span>//</span>
                <span>Design &amp; Engineering Together</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-ink mb-3">
                Visual aesthetics grounded in technical feasibility.
              </h3>
              <p className="text-muted text-sm sm:text-base leading-relaxed font-sans mb-4">
                Design decisions are never made in a bubble. Every layout, typography scale, and interaction is engineered with responsive viewports, Core Web Vitals, accessibility standards, and long-term code maintainability in mind.
              </p>
              <div className="inline-flex items-center gap-2 font-mono text-xs text-ink font-semibold">
                <span className="text-aqua">✓</span> No broken responsive surprises
              </div>
            </div>
          </div>

          {/* Right Column: Two Strategic Execution Pillars */}
          <div className="lg:col-span-5 space-y-8">
            {/* Pillar 3: Clear Scope */}
            <div className="border border-borderLight p-6 sm:p-8 bg-white">
              <div className="flex items-center gap-2 font-mono text-xs text-vermilion font-bold uppercase tracking-wider mb-2">
                <span>03</span>
                <span>//</span>
                <span>Explicit Project Scope</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-ink mb-3">
                No ambiguous billable hours or creeping surprises.
              </h3>
              <p className="text-muted text-sm leading-relaxed font-sans mb-4">
                Every sprint begins with a clearly documented brief, specific deliverables, explicit exclusions, fixed investment, and an agreed delivery timeline before writing any code.
              </p>
              <div className="p-3 bg-porcelain border border-borderLight font-mono text-xs text-ink">
                Fixed scope · Defined revision rounds · Agreed payment
              </div>
            </div>

            {/* Pillar 4: Practical Delivery */}
            <div className="border border-borderLight p-6 sm:p-8 bg-white">
              <div className="flex items-center gap-2 font-mono text-xs text-ink font-bold uppercase tracking-wider mb-2">
                <span>04</span>
                <span>//</span>
                <span>Practical Commercial Delivery</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-ink mb-3">
                A useful business asset, not an over-engineered science project.
              </h3>
              <p className="text-muted text-sm leading-relaxed font-sans mb-4">
                The objective of every website or landing page is simple: communicate clearly, build credibility, and turn qualified visitors into direct inquiries. We focus relentlessly on what moves the needle for your business.
              </p>
              <div className="p-3 bg-porcelain border border-borderLight font-mono text-xs text-ink">
                Clean handover · Deployed assets · Documented code
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhySolara;
