import React from 'react';
import { PRICING_PACKAGES } from '../../data/servicesAndPackages';
import { trackEvent } from '../../lib/analytics';

interface PricingSectionProps {
  onSelectPackage: (serviceName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPackage }) => {
  const handlePackageClick = (packageName: string, preselect: string) => {
    trackEvent('primary_cta_click', { label: `Pricing: ${packageName}` });
    onSelectPackage(preselect);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="py-16 sm:py-24 border-b border-borderLight bg-white"
    >
      <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-borderLight pb-6 mb-12 gap-4">
          <div>
            <div className="font-mono text-xs text-vermilion font-bold uppercase tracking-widest mb-1.5">
              05 // SERVICE PACKAGES
            </div>
            <h2
              id="pricing-heading"
              className="font-serif text-3xl sm:text-5xl text-ink font-normal tracking-tight"
            >
              Transparent investment. Predictable delivery.
            </h2>
          </div>
          <p className="text-muted text-sm sm:text-base font-sans max-w-md leading-relaxed">
            Clearly scoped sprint packages for businesses seeking defined deliverables without opaque agency estimates.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {PRICING_PACKAGES.map((pkg) => (
            <article
              key={pkg.id}
              className={`border p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 ${
                pkg.highlighted
                  ? 'border-ink bg-porcelain shadow-elevated relative'
                  : 'border-borderLight bg-white hover:border-ink'
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-3 left-6 px-3 py-0.5 bg-ink text-white font-mono text-[10px] uppercase font-bold tracking-widest">
                  MOST POPULAR SPRINT
                </div>
              )}

              <div>
                {/* Header & Starting Price */}
                <div className="pb-5 border-b border-borderLight mb-6">
                  <div className="font-mono text-xs text-vermilion font-bold uppercase tracking-widest mb-1">
                    {pkg.code}
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-3 leading-tight">
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mt-4">
                    <span className="font-mono text-xs uppercase text-muted">Starting at</span>
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-ink">
                      {pkg.startingPrice}
                    </span>
                  </div>
                </div>

                {/* Suitability */}
                <div className="mb-6">
                  <div className="font-mono text-[10px] uppercase text-muted tracking-wider mb-1">
                    Suitable For:
                  </div>
                  <p className="text-xs sm:text-sm text-ink leading-relaxed font-sans">
                    {pkg.suitableFor}
                  </p>
                </div>

                {/* Delivery Target */}
                <div className="p-3 bg-white border border-borderLight mb-6 font-mono text-xs">
                  <div className="text-[10px] uppercase text-muted tracking-wider mb-0.5">
                    Delivery Target:
                  </div>
                  <div className="text-ink font-semibold">
                    {pkg.deliveryTarget}
                  </div>
                </div>

                {/* Inclusions */}
                <div className="mb-8">
                  <div className="font-mono text-xs uppercase text-ink font-bold tracking-wider mb-3">
                    Scope Inclusions:
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-ink font-sans">
                    {pkg.inclusions.map((inc) => (
                      <li key={inc} className="flex items-start gap-2">
                        <span className="text-aqua font-bold text-sm leading-none mt-0.5" aria-hidden="true">✓</span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button & Disclaimer */}
              <div className="pt-6 border-t border-borderLight mt-auto">
                <button
                  type="button"
                  onClick={() => handlePackageClick(pkg.name, pkg.preselectService)}
                  className={`w-full py-3 text-xs sm:text-sm font-mono tracking-wider uppercase font-semibold transition-all duration-200 ${
                    pkg.highlighted
                      ? 'btn-solara-primary'
                      : 'btn-solara-secondary'
                  }`}
                >
                  <span>{pkg.ctaLabel}</span>
                  <span className={pkg.highlighted ? 'text-aqua' : 'text-muted'} aria-hidden="true">→</span>
                </button>

                {pkg.disclaimer && (
                  <p className="font-mono text-[10px] text-muted leading-relaxed mt-3">
                    *{pkg.disclaimer}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Pricing Rules & Transparency Strip */}
        <div className="p-6 bg-porcelain border border-borderLight space-y-3 font-sans text-xs text-muted leading-relaxed">
          <div className="font-mono text-xs uppercase font-bold text-ink tracking-wider">
            Pricing &amp; Commercial Terms:
          </div>
          <p>
            • Listed rates represent baseline starting investments for clearly defined sprint scopes. Final proposals are provided in writing following discovery and requirements review.
          </p>
          <p>
            • All payments are invoiced electronically in USD. Applicable taxes or local statutory fees are detailed prior to agreement.
          </p>
          <p>
            • We do not display fabricated discounts, false countdown timers, or artificial scarcity. Tailored enterprise quotes are available for complex integrations or multi-stage builds.
          </p>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
