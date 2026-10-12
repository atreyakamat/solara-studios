import React from 'react';
import { SERVICES } from '../../data/servicesAndPackages';
import { trackEvent } from '../../lib/analytics';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const handleCtaClick = (serviceTitle: string, preselect: string) => {
    trackEvent('service_cta_click', { label: serviceTitle });
    onSelectService(preselect);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-16 sm:py-24 border-b border-borderLight bg-porcelain"
    >
      <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-borderLight pb-6 mb-12 gap-4">
          <div>
            <div className="font-mono text-xs text-vermilion font-bold uppercase tracking-widest mb-1.5">
              02 // WHAT WE DO
            </div>
            <h2
              id="services-heading"
              className="font-serif text-3xl sm:text-5xl text-ink font-normal tracking-tight"
            >
              Everything your digital presence needs to work harder.
            </h2>
          </div>
          <p className="text-muted text-sm sm:text-base font-sans max-w-md leading-relaxed">
            Clearly scoped engagements combining modern frontend engineering, conversion thinking, and transparent deliverables.
          </p>
        </div>

        {/* Services Grid (4 Categories) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="border border-borderLight bg-white p-6 sm:p-8 flex flex-col justify-between hover:border-ink transition-colors duration-200"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-borderLight mb-5">
                  <span className="font-mono text-xs font-bold text-vermilion tracking-widest uppercase">
                    SERVICE // {service.code}
                  </span>
                  <span className="font-mono text-[10px] text-muted tracking-wider uppercase">
                    Fully Scoped
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-3 leading-tight">
                  {service.title}
                </h3>

                <p className="text-muted text-sm sm:text-base leading-relaxed mb-6 font-sans">
                  {service.description}
                </p>

                <div className="pt-4 border-t border-borderLight/60 mb-8">
                  <div className="font-mono text-xs text-ink font-bold uppercase tracking-wider mb-3">
                    Deliverables Include:
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-ink/90 font-sans">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-aqua font-bold text-sm leading-none mt-0.5" aria-hidden="true">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-borderLight">
                <button
                  type="button"
                  onClick={() => handleCtaClick(service.title, service.preselectService)}
                  className="btn-solara-primary w-full text-xs sm:text-sm py-3"
                >
                  <span>{service.ctaLabel}</span>
                  <span className="text-aqua" aria-hidden="true">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
