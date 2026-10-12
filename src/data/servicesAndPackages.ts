export interface ServiceItem {
  id: string;
  code: string;
  title: string;
  description: string;
  deliverables: string[];
  ctaLabel: string;
  preselectService: string;
}

export interface PricingPackage {
  id: string;
  code: string;
  name: string;
  startingPrice: string;
  suitableFor: string;
  deliveryTarget: string;
  inclusions: string[];
  disclaimer?: string;
  ctaLabel: string;
  preselectService: string;
  highlighted?: boolean;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-design-dev',
    code: '01',
    title: 'Website Design and Development',
    description: 'Thoughtful, responsive websites that make your business easier to understand, trust, and engage with.',
    deliverables: [
      'Website strategy and information architecture',
      'UI design and responsive implementation',
      'Business and service websites',
      'Contact forms and lead-capture flows',
      'CMS and agreed integrations',
      'Launch and technical handover',
    ],
    ctaLabel: 'Discuss a website project',
    preselectService: 'Website design and development',
  },
  {
    id: 'landing-pages',
    code: '02',
    title: 'Landing Pages',
    description: 'Focused landing pages built around a specific audience, offer, and next action.',
    deliverables: [
      'Landing page structure and conversion layout',
      'Responsive design and implementation',
      'Clear, accessible calls to action',
      'Lead-capture and form integration',
      'Basic analytics configuration',
      'Performance and accessibility checks',
    ],
    ctaLabel: 'Build a landing page',
    preselectService: 'Landing page',
  },
  {
    id: 'technical-seo',
    code: '03',
    title: 'Technical SEO and Optimization',
    description: 'Practical website improvements that address technical issues, improve clarity, and establish a stronger foundation for search visibility.',
    deliverables: [
      'Technical review and site audit',
      'On-page SEO improvements',
      'Metadata and internal linking architecture',
      'Basic Core Web Vitals & performance optimization',
      'Crawlability and indexability checks',
      'Agreed fixes and before-and-after documentation',
    ],
    ctaLabel: 'Improve my website',
    preselectService: 'SEO and website optimization',
  },
  {
    id: 'white-label',
    code: '04',
    title: 'White-Label Development',
    description: 'Reliable development support for agencies that need to deliver excellent digital work without expanding their internal team.',
    deliverables: [
      'Landing page implementation',
      'Business website development',
      'Frontend implementation from approved Figma/design files',
      'Responsive, cross-browser development',
      'Agreed API and form integrations',
      'Deployment and clean technical handover',
    ],
    ctaLabel: 'Discuss an agency partnership',
    preselectService: 'White-label agency development',
  },
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'conversion-sprint',
    code: 'PACKAGE A',
    name: 'Conversion Website Sprint',
    startingPrice: '$2,500 USD',
    suitableFor: 'Businesses that need a professional, responsive website with a clear information structure and enquiry path.',
    deliveryTarget: 'Typically 7–10 business days after kickoff for an appropriately scoped project, subject to content, approvals, and complexity.',
    inclusions: [
      'Up to five agreed pages',
      'Responsive mobile, tablet, and desktop implementation',
      'Calls to action and verified contact forms',
      'Basic on-page SEO and metadata setup',
      'Analytics configuration',
      'One defined revision round',
      'Complete code handover and deployment assistance',
    ],
    disclaimer: 'Complex integrations, custom backend systems, ecommerce, extensive copywriting, and additional pages may require a separate quote.',
    ctaLabel: 'Discuss a website project',
    preselectService: 'Website design and development',
    highlighted: true,
  },
  {
    id: 'seo-sprint',
    code: 'PACKAGE B',
    name: 'SEO & Conversion Sprint',
    startingPrice: '$1,250 USD',
    suitableFor: 'Businesses with an existing website that needs targeted technical or on-page improvements.',
    deliveryTarget: 'Typically 3–5 business days for a tightly scoped project.',
    inclusions: [
      'Technical and on-page website audit',
      'Prioritized fix recommendations',
      'Implementation of agreed fixes',
      'Metadata and internal linking enhancements',
      'Core Web Vitals & asset performance improvements',
      'Before-and-after benchmark documentation',
    ],
    disclaimer: 'Scope is focused on agreed technical and on-page fixes; search rankings or revenue figures are not guaranteed.',
    ctaLabel: 'Discuss an optimization sprint',
    preselectService: 'SEO and website optimization',
    highlighted: false,
  },
  {
    id: 'white-label-build',
    code: 'PACKAGE C',
    name: 'White-Label Agency Build',
    startingPrice: '$1,500 USD',
    suitableFor: 'Marketing and creative agencies that require reliable external development support.',
    deliveryTarget: 'Typically 5–7 business days for a tightly scoped project.',
    inclusions: [
      'A defined landing page or small website',
      'Responsive frontend implementation from approved design',
      'Agreed third-party integrations',
      'Deployment where included',
      'Technical handover documentation and agency confidentiality',
    ],
    disclaimer: 'Agreed fixed scope per sprint. Revisions and additional feature requests are scoped transparently.',
    ctaLabel: 'Discuss agency partnership',
    preselectService: 'White-label agency development',
    highlighted: false,
  },
];
