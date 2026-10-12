# Solara Studios — Creative Agency Production Website

> A contemporary creative agency website designed and built for **Solara Studios**, specializing in digital design, website development, landing pages, technical SEO, and white-label development for marketing agencies. Founded & engineered by **Atreya Kamat** ([atreyakamat.dev](https://atreyakamat.dev)).

---

## 1. Architectural Overview

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) (strict mode, `verbatimModuleSyntax`)
- **Bundler & Tooling**: [Vite 5](https://vitejs.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Styling Architecture**: [Tailwind CSS 3.4](https://tailwindcss.com/) with creative agency design tokens:
  - **Ink** (`#070A05`): Deepest black-green canvas background for cinematic hero and footer
  - **Dark Green** (`#111B0B`): Deep secondary green container surface
  - **Deep Olive** (`#20320B`): Subdued container and pill background
  - **Electric Lime** (`#A6FF19`): Primary brand accent, glowing CTAs, vibrant cards, and highlights
  - **Lime Light** (`#C4FF77`): Hover states and soft vector highlights
  - **Cream** (`#F7F9EF`): Warm off-white background with subtle square grid (`#DCE4CF`)
  - **White** (`#FFFFFF`): Elevated cards and clean contrast
  - **Muted** (`#73776C`): Secondary descriptions and captions
- **Typography**:
  - Headings: *Space Grotesk* (bold, geometric, compact, large)
  - Body & UI: *Inter* (clean, neutral, readable)
  - Labels & Kickers: *JetBrains Mono* (uppercase monospace accents)
- **Motion & Interaction**:
  - Motion / Framer Motion integration
  - Continuous alternating horizontal marquee with paused state on hover
  - Smooth horizontal portfolio carousel with keyboard arrow keys and buttons
  - Subtle hero glow meshes and organic curved vector accents
  - Responsive focus states and `@media (prefers-reduced-motion: reduce)` compliance

---

## 2. Section Hierarchy

1. **Header & Navigation**: Sticky header with brand wordmark, desktop navigation anchors (*About*, *Services*, *Work*, *Capabilities*, *Contact*), prominent right pill button (`LET'S TALK ↗`), and an accessible mobile drawer.
2. **Dark Cinematic Hero**: Deep black-green background, organic glossy curved meshes, upper-central 3-panel image strip, primary bold headline (`IDEAS BUILT TO MOVE.`), supporting copy, and neon-lime CTA pill (`START YOUR PROJECT ↗`).
3. **About Solara Studios**: Cream background with subtle square grid, bold uppercase statement (`WE BUILD DIGITAL EXPERIENCES FOR BRANDS READY TO MOVE FORWARD.`), supporting paragraph, and a 3-pillar value proposition.
4. **Animated Services Marquee**: Dual horizontal marquee rows of rounded pills moving in alternating directions continuously (deep olive & neon-lime pills).
5. **Services Grid**: 4 bright neon-lime graphic panels in a 2-column desktop grid (*Website Design & Development*, *Landing Pages*, *Technical SEO*, *Digital Growth*) with custom SVG illustrations and preselection CTAs.
6. **Selected Work (Horizontal Portfolio Carousel)**: Editorial carousel featuring verified projects from Atreya Kamat (*Pixel N Purpose*, *Amthane Valley*, *TRACK.NOW*, *Agnel Arena Futsal*, *PulseWatch*, *Stix 'N' Vibes*) with previous/next controls and interactive case study modal dialogs.
7. **Technical & Digital Capabilities Feature**: Distinctive split layout (*"More than a good-looking website."*) with capability checklist and an interactive digital implementation schematic.
8. **Contact Section ("Let's talk.")**: Cream background with subtle square grid, 2-column layout with founder credibility on the left and a complete project enquiry form on the right (Name, Email, Company, Service, Budget, Message, "Send message ↗").
9. **Footer**: Deep black-green background, wordmark, positioning statement, navigation anchors, legal links, and link to founder portfolio.
10. **Privacy Policy Page**: Accessible at `/privacy` covering data protection, collection, retention, and contact channels.

---

## 3. Quick Start & Local Development

### Prerequisites
- Node.js 18+ (tested with Node 20 / 24)
- npm 10+

### Setup Commands

```bash
# Clone and enter directory
cd solara-studios

# Install dependencies
npm install

# Start local development server (runs on http://localhost:5173)
npm run dev

# Run TypeScript checks and production build
npm run build

# Run ESLint checks
npm run lint

# Preview the production build locally (runs on http://localhost:4173)
npm run preview
```

---

## 4. Environment Variables & Form Integration

Configuration is managed via environment variables. See `.env.example`:

```bash
cp .env.example .env
```

| Variable | Description | Default / Example |
| :--- | :--- | :--- |
| `VITE_SITE_URL` | Canonical URL of the production deployment | `https://solarastudios.com` |
| `VITE_FOUNDER_PORTFOLIO_URL` | Founder Atreya Kamat's personal website | `https://atreyakamat.dev` |
| `VITE_FORM_ENDPOINT` | Custom backend webhook or API endpoint for enquiries | Optional |
| `VITE_FORMSPREE_ID` | Formspree form ID for direct email delivery | Optional |
| `VITE_ANALYTICS_ID` | GA4 Measurement ID (`G-XXXXX`) or Plausible domain | Optional |

### Enquiry Handling:
* **Local & Preview Mode**: Operates out of the box with client-side validation, honeypot spam protection, duplicate submission prevention, and realistic network simulation.
* **Production Live Inbox**: Add `VITE_FORMSPREE_ID=your_id` to route submissions directly to founder Atreya Kamat's inbox.

---

## 5. Technical SEO & Accessibility

- Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- Single `<h1>` on the homepage (`IDEAS BUILT TO MOVE.`).
- Tested contrast for WCAG 2.2 AA.
- Keyboard accessible navigation, carousel controls, and dialog dismissal (`Escape` key).
- Complete Open Graph tags, Twitter cards, and Schema.org `ProfessionalService` structured data.
- Search engine crawling via `robots.txt` and `sitemap.xml`.

---

## 6. Deployment Readiness

The production build in `/dist` is a pure static single-page application compatible with **Vercel**, **Netlify**, **Cloudflare Pages**, or **GitHub Pages**. Ensure single-page application rewriting (routing all requests to `index.html`) is active.
