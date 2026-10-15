// Every word on the site lives here. Only true Solara Studios facts: no invented
// clients, press, years or offices.

export const WHATSAPP_NUMBER = "917744020601";
export const EMAIL = "atkamat1204@gmail.com";

export const whatsappLink = (text = "Hi Solara Studios, I want a website for my business.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const brand = "Solara Studios";

export const nav = [
  { label: "About", href: "#about" },
  { label: "What you get", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const cta = { label: "Start for ₹2,500", href: "#pricing" };

export const hero = {
  title: "Websites for Goa\nBuilt to Be Found",
  subtitle:
    "A website, a digital library of your business and your first posts, set up in about four days from ₹2,500.",
  action: { label: "See the starter", href: "#pricing" },
  est: "Est. MMXXVI",
  edition: "Panjim · Goa",
};

// The ticker under the hero lists what the studio sets up, not client names.
export const clientsLabel = "Drawn in Goa, built to be found";
export const clients = [
  "Mobile-first websites",
  "Google Business Profile",
  "WhatsApp booking",
  "Digital library",
  "Social posting",
  "Local SEO",
  "Enquiry forms",
  "Care plan",
];

export const about = {
  kicker: "About the studio",
  statement:
    "We build with the patience of *Goan craft* and the precision of modern search, so every business we touch is found, trusted and chosen.",
  body: "Solara Studios is a web design and digital marketing studio in Goa, India, led by Atreya Kamat. We build fast, mobile-first websites for local businesses, and every project starts with a written scope, fixed deliverables and agreed dates. The person you speak to is the person who does the work.",
  stats: [
    { value: 2500, label: "Rupees to get started" },
    { value: 4, label: "Days to go live" },
    { value: 1, label: "Person, start to finish" },
  ],
  seal: "Solara Studios · Goa · Built to be found · ",
};

export const solutionsCopy = {
  kicker: "What you get",
  title: "One starter, *four foundations*",
  intro:
    "Pull a bookmark from the shelf. Each one is part of the ₹2,500 Business Starter, done for you.",
};

export const solutions = [
  {
    kicker: "Website",
    title: "Your Website",
    quote: "Open, active and worth a visit, at a glance.",
    body: "A fast, mobile-first page with your photos, services, hours, map and reviews, and a one-tap WhatsApp or call button so customers reach you while they are still deciding.",
    points: ["Mobile-first design", "WhatsApp and call buttons", "Enquiry form to your email"],
    art: "tower",
    tone: "paper",
  },
  {
    kicker: "Library",
    title: "Starter Digital Library",
    quote: "Everything about your business, written down once.",
    body: "We gather your logo, photos, menu or price list, timings and key details into one organised digital library, so the website, Google and every post tell the same story.",
    points: ["Photos and logo, organised", "Services, prices and timings", "Ready to share on WhatsApp"],
    art: "typewriter",
    tone: "ink",
  },
  {
    kicker: "Posting",
    title: "Posting & Getting Found",
    quote: "Be the place people can find on the map.",
    body: "Your Google Business Profile set up or tidied, and your first posts published, so the people searching on their phones find you, not only your neighbours.",
    points: ["Google Business Profile", "First social posts", "Local search basics"],
    art: "steamer",
    tone: "paper",
  },
  {
    kicker: "Care",
    title: "Care Plan",
    quote: "A website is a house. Someone should keep the lights on.",
    body: "Small edits, price and photo updates, and checks that the site stays up and fast. Normally ₹899, free to begin with, then ₹799 for the whole year.",
    points: ["Content and photo updates", "Uptime and speed checks", "₹799 a year after the free start"],
    art: "monogram",
    tone: "ink",
  },
];

export const servicesCopy = {
  kicker: "Pricing",
  title: "A ledger of *what you pay*",
  intro:
    "Two lines, both priced up front and agreed in writing before you pay. Nothing hidden, nothing extra unless you ask for it.",
};

export const services = [
  {
    title: "Business Starter · ₹2,500",
    summary: "Website, starter digital library and posting, done for you.",
    details:
      "A one-page website for your business, your details organised into a starter digital library, and your Google Business Profile and first posts set up. Paid once, live in about four days.",
    deliverables: ["One-page website", "Starter digital library", "Google profile and first posts", "WhatsApp booking"],
    duration: "About 4 days · paid once",
  },
  {
    title: "Care Plan · Free to start",
    summary: "Normally ₹899. Included free when you begin.",
    details:
      "Your care plan starts free with the Business Starter, so updates and checks are covered from day one while you settle in.",
    deliverables: ["Content updates", "Photo and price changes", "Uptime checks"],
    duration: "Normally ₹899 · free at the start",
  },
  {
    title: "Care Plan · ₹799 a year",
    summary: "Then one simple yearly fee to stay looked after.",
    details:
      "After the free start, the care plan continues for ₹799 for the full year: edits when you need them, regular checks and a person to call when something changes.",
    deliverables: ["Yearly renewal", "Edits on request", "Speed and uptime checks"],
    duration: "₹799 · per year",
  },
];

// Short notes shown on the toile scene and the contact band.
export const notes = [
  {
    title: "Stays",
    body: "Villas and homestays that take enquiries directly, and depend less on listing sites.",
  },
  {
    title: "Food",
    body: "Cafes, restaurants and shacks with menu, hours, location and a one-tap WhatsApp.",
  },
  {
    title: "Venues",
    body: "Turfs, gyms and event spaces with slot booking and WhatsApp confirmations.",
  },
  {
    title: "Shops",
    body: "Local brands with a catalogue and a WhatsApp ordering flow, without heavy platform fees.",
  },
];

export const contactBand = {
  title: "Let us build something *lasting*.",
  body: "Tell us about your business. Atreya reads every message and replies personally.",
  action: { label: "WhatsApp us", href: whatsappLink() },
  secondary: { label: "See a sample site", href: "/demo/" },
};

export const contact = {
  email: EMAIL,
  phone: "+91 77440 20601",
  location: "Panjim · Goa · India",
};

export const tagline =
  "Website design and digital marketing for Goa's local businesses, from ₹2,500.";

export const columns = [
  {
    title: "Studio",
    links: [
      { label: "About", href: "#about" },
      { label: "Sample site", href: "/demo/" },
      { label: "Atreya Kamat", href: "https://atreyakamat.dev" },
    ],
  },
  {
    title: "Starter",
    links: [
      { label: "Website", href: "#solutions" },
      { label: "Digital library", href: "#solutions" },
      { label: "Posting", href: "#solutions" },
      { label: "Care plan", href: "#pricing" },
    ],
  },
  {
    title: "Reach us",
    links: [
      { label: "WhatsApp", href: whatsappLink() },
      { label: "Email", href: `mailto:${EMAIL}` },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export const socials = [
  { kind: "linkedin", href: "https://www.linkedin.com/in/atreya-kamat" },
];

export const legal: { label: string; href: string }[] = [];
