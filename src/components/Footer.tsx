import React from 'react';
import { Link } from 'react-router-dom';
import { Meteors } from './magicui/Meteors';

// Lucide/Tabler icons (SVGs)
const InstagramIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5"/>
    <circle cx="12" cy="12" r="5"/>
    <circle cx="17.5" cy="6.5" r="1.5"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5"/>
    <path d="M7 10v7M7 7v.01M12 17v-4a2 2 0 1 1 4 0v4"/>
  </svg>
);
const YouTubeIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <rect x="2" y="6" width="20" height="12" rx="4"/>
    <path d="M10 9.5v5l5-2.5-5-2.5z"/>
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#0e0e0e] text-white px-6 md:px-8 py-12 font-sans overflow-hidden">
      {/* Meteors background */}
      <Meteors number={30} />
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
        {/* Brand & Vision */}
        <div>
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-[#6211d4] to-[#8444e3] text-transparent bg-clip-text mb-2 inline-block">
            Solara Studios
          </Link>
          <p className="text-[#d1cbe7] text-sm mt-2 mb-1">Crafting future-ready websites & automation systems for modern businesses.</p>
          <p className="text-[#a89db9] text-xs mb-4">Built in Goa, designed for India’s digital leap.</p>
          <div className="flex space-x-4 mt-2">
            <a href="https://instagram.com/solarastudios" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#e1306c] transition-colors"><InstagramIcon /></a>
            <a href="https://linkedin.com/company/solarastudios" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[#0a66c2] transition-colors"><LinkedInIcon /></a>
            <a href="https://youtube.com/@solarastudios" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-[#ff0000] transition-colors"><YouTubeIcon /></a>
          </div>
        </div>
        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services#web-design" className="text-[#a89db9] hover:text-white transition-colors">Website Design</Link></li>
            <li><Link to="/services#automation" className="text-[#a89db9] hover:text-white transition-colors">Automation Services</Link></li>
            <li><Link to="/services#subscriptions" className="text-[#a89db9] hover:text-white transition-colors">Subscription Plans</Link></li>
            <li><Link to="/services#custom" className="text-[#a89db9] hover:text-white transition-colors">Custom Solutions</Link></li>
            <li><Link to="/services#mobile-app" className="text-[#a89db9] hover:text-white transition-colors">Mobile Apps</Link></li>
          </ul>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="text-[#a89db9] hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/portfolio" className="text-[#a89db9] hover:text-white transition-colors">Work / Portfolio</Link></li>
            <li><Link to="/pricing" className="text-[#a89db9] hover:text-white transition-colors">Pricing</Link></li>
            <li><Link to="/blog" className="text-[#a89db9] hover:text-white transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="text-[#a89db9] hover:text-white transition-colors">Contact</Link></li>
            <li><Link to="/privacy" className="text-[#a89db9] hover:text-white transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="mailto:hello@solarastudios.in" className="text-[#a89db9] hover:text-white transition-colors">📧 hello@solarastudios.in</a></li>
            {/* <li><span className="text-[#a89db9]">📞 +91-XXXXXXXXXX</span></li> */}
            <li>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#25d366] text-[#0e0e0e] font-medium hover:bg-[#1ebe57] transition-colors">
                💬 WhatsApp Us
              </a>
            </li>
            <li><span className="text-[#a89db9]">🕒 Mon–Sat, 10am–7pm IST</span></li>
            <li>
              <a href="https://calendly.com/solarastudios/discovery-call" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 px-4 py-2 rounded bg-[#6211d4] text-white font-semibold shadow hover:bg-[#7d3cf8] transition-colors text-sm">Book a Free Discovery Call</a>
            </li>
          </ul>
        </div>
      </div>
      {/* Divider */}
      <div className="relative z-10 border-t border-[#232323] mt-10 mb-0"></div>
      {/* Bottom Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between text-xs text-[#a89db9]">
        <div>
          © 2025 Solara Studios. All rights reserved. | Made with <span className="text-red-400">❤️</span> in Goa
        </div>
        {/* <div className="mt-2 md:mt-0">Powered by Notion, Webflow & GPT</div> */}
        {/* <div className="mt-2 md:mt-0">GSTIN: 22AAAAA0000A1Z5</div> */}
      </div>
    </footer>
  );
};

export default Footer;
