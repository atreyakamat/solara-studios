export interface Project {
  id: string;
  number: string;
  category: string;
  tag: string;
  title: string;
  problem: string;
  build: string;
  outcome: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  isFlagship?: boolean;
}

export const VERIFIED_PROJECTS: Project[] = [
  {
    id: 'pixel-n-purpose',
    number: 'PROJECT 01',
    category: 'Client Platform & Brand Engine',
    tag: 'Agency Web Platform',
    title: 'Pixel N Purpose — Agency Web Platform',
    problem: 'Creative social media agencies require high-converting client showcases with fast initial page loads and mobile-optimized inquiry funnels.',
    build: 'Production agency web platform built with Next.js and Tailwind CSS featuring optimized media delivery and structured client onboarding.',
    outcome: 'Deployed live client platform at PixelNPurpose.com with fast Core Web Vitals and fluid responsive storytelling.',
    stack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Responsive Storytelling'],
    liveUrl: 'https://pixelnpurpose.com',
    repoUrl: 'https://github.com/atreyakamat/pixelnpurpose',
    isFlagship: true,
  },
  {
    id: 'amthane-valley',
    number: 'PROJECT 02',
    category: 'Hospitality Web Platform',
    tag: 'Direct Booking Engine',
    title: 'Amthane Valley — Hospitality Reservation Engine',
    problem: 'Over-reliance on third-party aggregators with high commissions and disconnected direct reservation experience.',
    build: 'Self-hosted direct reservation platform for farm activities and stay bookings, SEO-optimized and mobile responsive.',
    outcome: 'Direct reservation flow with fast page load metrics, zero middleman booking commissions, and organic search discovery.',
    stack: ['React', 'Tailwind CSS', 'Technical SEO', 'Direct Booking Architecture'],
    isFlagship: false,
  },
  {
    id: 'tracknow',
    number: 'PROJECT 03',
    category: 'Productivity & Habit Engine',
    tag: '100+ Active Users',
    title: 'TRACK.NOW — Habit & Productivity PWA',
    problem: 'Teams and individuals struggle with bloated tracking tools that lack habit-focused workflows and quick voice capture.',
    build: 'Mission-based habit product with Quasar/Vue 3 PWA, browser extension, voice-to-task capture, and dual Demo/Firebase runtimes.',
    outcome: 'Reached 100+ active users with instant offline local mode and production Firebase cloud synchronization.',
    stack: ['Vue 3', 'Quasar PWA', 'Firebase', 'Voice API'],
    isFlagship: false,
  },
  {
    id: 'futsal',
    number: 'PROJECT 04',
    category: 'High-Concurrency Facility Platform',
    tag: 'Sports Turf Platform',
    title: 'Agnel Arena — Futsal & Turf Booking Platform',
    problem: 'Turf double-bookings, manual cash handling friction, and payment drop-offs during peak reservation hours.',
    build: 'Multi-arena turf booking platform built with Next.js 15 App Router, PostgreSQL, PayU Gateway, and AiSensy WhatsApp OTP.',
    outcome: 'Concurrent 10-minute session slot locking, automated ticket security, and restricted payment modes.',
    stack: ['Next.js 15', 'PostgreSQL', 'Slot Concurrency', 'WhatsApp OTP API'],
    isFlagship: false,
  },
  {
    id: 'pulsewatch',
    number: 'PROJECT 05',
    category: 'Uptime & Reliability Monitoring',
    tag: 'Infrastructure Service',
    title: 'PulseWatch — Uptime & Response-Time Service',
    problem: 'Silent service outages and slow response times go unnoticed without automated alerting and incident logs.',
    build: 'Uptime monitoring and response-time tracking service built with React, Express, PostgreSQL, and Drizzle ORM.',
    outcome: 'Automated health checks, status ping intervals, and instant incident logs across monitored endpoints.',
    stack: ['React', 'Express', 'PostgreSQL', 'Drizzle ORM'],
    isFlagship: false,
  },
  {
    id: 'stix-n-vibes',
    number: 'PROJECT 06',
    category: 'Commerce Engine',
    tag: 'Dynamic Pricing',
    title: 'Stix \'N\' Vibes — Custom Merch Storefront',
    problem: 'Custom merchandise requires multi-variant pricing logic and low-friction mobile checkout.',
    build: 'Modular e-commerce platform with material-aware cart logic, dynamic pricing multipliers, and WhatsApp checkout.',
    outcome: 'Seamless catalog browsing and automated order messaging without heavy third-party fees.',
    stack: ['React', 'Tailwind CSS', 'Dynamic Pricing Multipliers', 'WhatsApp Cart API'],
    isFlagship: false,
  },
];
