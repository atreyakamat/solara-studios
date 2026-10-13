import React from 'react';
import { motion } from 'motion/react';
import { Reveal, Stagger, fadeUpItem } from '../motion/Reveal';
import { trackEvent } from '../../lib/analytics';

interface AgencyServicesGridProps {
  onSelectService: (serviceName: string) => void;
}

export const AgencyServicesGrid: React.FC<AgencyServicesGridProps> = ({ onSelectService }) => {
  const services = [
    {
      id: 'web-design',
      num: '01',
      title: 'Website Design & Development',
      description: 'Responsive, thoughtfully designed websites that make your business easier to understand and engage with.',
      formService: 'Website design and development',
      illustration: (
        <svg className="w-full h-32" viewBox="0 0 240 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          {/* Browser frame */}
          <rect x="20" y="10" width="200" height="100" rx="6" fill="#070A05" />
          <rect x="20" y="10" width="200" height="20" rx="6" fill="#111B0B" />
          <circle cx="32" cy="20" r="3" fill="#A6FF19" />
          <circle cx="42" cy="20" r="3" fill="#C4FF77" />
          <circle cx="52" cy="20" r="3" fill="#73776C" />
          <rect x="70" y="16" width="90" height="8" rx="2" fill="#20320B" />
          {/* Layout blocks */}
          <rect x="30" y="40" width="70" height="18" rx="2" fill="#A6FF19" />
          <rect x="30" y="64" width="85" height="6" rx="2" fill="#FFFFFF" fillOpacity="0.8" />
          <rect x="30" y="74" width="60" height="6" rx="2" fill="#FFFFFF" fillOpacity="0.5" />
          <rect x="30" y="88" width="40" height="12" rx="6" fill="#A6FF19" />
          {/* Responsive viewport preview */}
          <rect x="135" y="40" width="75" height="60" rx="4" fill="#20320B" stroke="#A6FF19" strokeWidth="1" />
          <line x1="145" y1="55" x2="195" y2="55" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <line x1="145" y1="65" x2="180" y2="65" stroke="#A6FF19" strokeWidth="2" strokeLinecap="round" />
          <rect x="145" y="75" width="24" height="15" rx="2" fill="#070A05" />
          <rect x="175" y="75" width="24" height="15" rx="2" fill="#070A05" />
        </svg>
      ),
    },
    {
      id: 'landing-pages',
      num: '02',
      title: 'Landing Pages',
      description: 'Focused digital experiences designed around your audience, offer, and next action.',
      formService: 'Landing page',
      illustration: (
        <svg className="w-full h-32" viewBox="0 0 240 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          {/* Conversion funnel & layout */}
          <rect x="30" y="10" width="180" height="100" rx="6" fill="#070A05" />
          <circle cx="120" cy="35" r="14" fill="#20320B" stroke="#A6FF19" strokeWidth="2" />
          <path d="M120 28V42M113 35H127" stroke="#A6FF19" strokeWidth="2" strokeLinecap="round" />
          <rect x="60" y="58" width="120" height="8" rx="2" fill="#A6FF19" />
          <rect x="80" y="72" width="80" height="6" rx="2" fill="#FFFFFF" fillOpacity="0.7" />
          <rect x="90" y="86" width="60" height="14" rx="7" fill="#A6FF19" />
          {/* Conversion arrows */}
          <path d="M45 45L55 55L45 65" stroke="#C4FF77" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M195 45L185 55L195 65" stroke="#C4FF77" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 'technical-seo',
      num: '03',
      title: 'Technical SEO',
      description: 'Practical improvements to site structure, metadata, performance, and search visibility foundations.',
      formService: 'SEO and website optimization',
      illustration: (
        <svg className="w-full h-32" viewBox="0 0 240 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          {/* Search audit illustration */}
          <rect x="25" y="15" width="190" height="90" rx="6" fill="#070A05" />
          {/* Search bar */}
          <rect x="40" y="28" width="160" height="20" rx="10" fill="#20320B" stroke="#A6FF19" strokeWidth="1" />
          <circle cx="55" cy="38" r="4" stroke="#A6FF19" strokeWidth="1.5" />
          <line x1="58" y1="41" x2="62" y2="45" stroke="#A6FF19" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="70" y="35" width="60" height="6" rx="1" fill="#FFFFFF" fillOpacity="0.8" />
          {/* Performance dials */}
          <rect x="45" y="60" width="40" height="32" rx="4" fill="#111B0B" />
          <text x="53" y="76" fill="#A6FF19" fontFamily="monospace" fontSize="12" fontWeight="bold">FAST</text>
          <text x="48" y="86" fill="#FFFFFF" fillOpacity="0.6" fontFamily="sans-serif" fontSize="7">PERF</text>

          <rect x="95" y="60" width="40" height="32" rx="4" fill="#111B0B" />
          <text x="100" y="76" fill="#A6FF19" fontFamily="monospace" fontSize="12" fontWeight="bold">CLEAN</text>
          <text x="100" y="86" fill="#FFFFFF" fillOpacity="0.6" fontFamily="sans-serif" fontSize="7">SEO</text>

          <rect x="145" y="60" width="40" height="32" rx="4" fill="#111B0B" />
          <text x="150" y="76" fill="#A6FF19" fontFamily="monospace" fontSize="12" fontWeight="bold">OPEN</text>
          <text x="150" y="86" fill="#FFFFFF" fillOpacity="0.6" fontFamily="sans-serif" fontSize="7">A11Y</text>
        </svg>
      ),
    },
    {
      id: 'digital-growth',
      num: '04',
      title: 'Digital Growth',
      description: 'Useful website improvements, integrations, and optimization work aligned with your business objectives.',
      formService: 'White-label agency development',
      illustration: (
        <svg className="w-full h-32" viewBox="0 0 240 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          {/* Growth curve & modular nodes */}
          <rect x="25" y="15" width="190" height="90" rx="6" fill="#070A05" />
          <path d="M45 85 L90 70 L135 50 L185 25" stroke="#A6FF19" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="45" cy="85" r="4" fill="#20320B" stroke="#A6FF19" strokeWidth="2" />
          <circle cx="90" cy="70" r="4" fill="#20320B" stroke="#A6FF19" strokeWidth="2" />
          <circle cx="135" cy="50" r="4" fill="#20320B" stroke="#A6FF19" strokeWidth="2" />
          <circle cx="185" cy="25" r="5" fill="#A6FF19" />
          {/* Node cards */}
          <rect x="40" y="30" width="35" height="16" rx="2" fill="#20320B" />
          <rect x="90" y="25" width="45" height="16" rx="2" fill="#20320B" />
          <path d="M175 45L195 25M195 25V37M195 25H183" stroke="#A6FF19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  const handleServiceClick = (serviceTitle: string, formService: string) => {
    trackEvent('service_cta_click', { label: serviceTitle });
    onSelectService(formService);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-20 sm:py-32 bg-cream-grid text-ink border-b border-borderLine relative"
    >
      <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-deepOlive text-lime font-mono text-xs uppercase tracking-widest font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
            <span>Services</span>
          </div>

          <h2
            id="services-heading"
            className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-ink uppercase leading-none mb-4"
          >
            Capabilities engineered for momentum.
          </h2>

          <p className="font-sans text-muted text-base sm:text-lg max-w-xl leading-relaxed">
            Everything your business needs for a clearer digital presence, stronger positioning, and useful growth.
          </p>
        </Reveal>

        {/* 4 Bright Lime Service Panels in 2-Column Grid */}
        <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {services.map((service) => (
            <motion.article
              key={service.id}
              variants={fadeUpItem}
              whileHover={{ y: -6 }}
              className="group relative bg-lime rounded-2xl p-8 sm:p-10 flex flex-col justify-between border-2 border-lime transition-shadow duration-300 hover:shadow-lime-glow overflow-hidden"
            >
              {/* Graphic Illustration Container */}
              <div className="mb-6 rounded-xl overflow-hidden border border-ink/15 bg-ink p-2 transition-transform duration-300 group-hover:scale-[1.02]">
                {service.illustration}
              </div>

              {/* Title & Description */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3 font-mono text-xs text-ink/70 font-bold uppercase tracking-widest">
                  <span>SERVICE // {service.num}</span>
                  <span className="text-ink">SPECIFIED SPRINT</span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-ink leading-tight mb-3">
                  {service.title}
                </h3>

                <p className="font-sans text-ink/80 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-ink/20">
                <button
                  type="button"
                  onClick={() => handleServiceClick(service.title, service.formService)}
                  className="w-full py-4 rounded-full bg-ink text-white font-heading font-bold text-sm tracking-wider uppercase transition-all duration-200 group-hover:bg-deepOlive group-hover:text-lime flex items-center justify-center gap-2 active:scale-98"
                >
                  <span>Explore service</span>
                  <span className="text-lime group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true">
                    ↗
                  </span>
                </button>
              </div>
            </motion.article>
          ))}
        </Stagger>

      </div>
    </section>
  );
};

export default AgencyServicesGrid;
