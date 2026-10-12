import React from 'react';
import { trackEvent } from '../../lib/analytics';

interface AgencyPartnershipProps {
  onDiscussPartnership: () => void;
}

export const AgencyPartnership: React.FC<AgencyPartnershipProps> = ({ onDiscussPartnership }) => {
  const agencyBenefits = [
    {
      title: 'White-Label Execution',
      desc: 'Seamless behind-the-scenes frontend development under your agency brand, with direct git repo access and strict confidentiality.',
    },
    {
      title: 'Defined Sprint Scopes',
      desc: 'Fixed-price, fixed-deliverable commitments so your agency maintains reliable margins on client projects.',
    },
    {
      title: 'Design-Accurate Coding',
      desc: 'Precision conversion of Figma and design systems into fluid, responsive, accessible React or Next.js code.',
    },
    {
      title: 'Structured Handover',
      desc: 'Full documentation, clean component hierarchies, and deployment guidance provided directly to your team or client.',
    },
  ];

  const handleCta = () => {
    trackEvent('agency_partnership_enquiry', { label: 'Agency Section CTA' });
    onDiscussPartnership();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="agencies"
      aria-labelledby="agency-heading"
      className="py-16 sm:py-24 border-b border-borderLight bg-ink text-porcelain"
    >
      <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Agency Messaging */}
          <div className="lg:col-span-6">
            <div className="font-mono text-xs text-aqua font-bold uppercase tracking-widest mb-3">
              06 // FOR MARKETING &amp; CREATIVE AGENCIES
            </div>
            
            <h2
              id="agency-heading"
              className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white mb-6 leading-tight"
            >
              Your creative vision. <br />
              <span className="italic font-normal text-aqua">Our</span> development support.
            </h2>

            <p className="text-porcelain/80 text-base sm:text-lg leading-relaxed mb-8 font-sans">
              Need a dependable technical partner for your next website or landing page? Solara Studios can support defined development projects behind the scenes, with an agreed brief, timeline, and handover process.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={handleCta}
                className="btn-solara-accent py-3.5 px-6 text-sm"
              >
                <span>Discuss an agency partnership</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          {/* Right Column: Key Pillars */}
          <div className="lg:col-span-6">
            <div className="border border-white/20 divide-y divide-white/15 bg-ink-light">
              {agencyBenefits.map((item, idx) => (
                <div key={item.title} className="p-5 sm:p-6">
                  <div className="flex items-center gap-2 font-mono text-xs text-aqua uppercase tracking-wider mb-1">
                    <span>0{idx + 1}</span>
                    <span>//</span>
                    <span className="text-white font-bold">{item.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-porcelain/75 font-sans leading-relaxed mt-1">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 font-mono text-[11px] text-porcelain/60 flex items-center gap-2">
              <span className="text-aqua">●</span>
              <span>Available for project-based and retainer development sprints.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AgencyPartnership;
