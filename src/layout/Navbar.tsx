import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#2f2839] bg-[#141118]/80 px-4 py-4 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-6 w-6 items-center justify-center">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-white">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <span className="text-lg font-bold text-white">Solara Studios</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" onMouseLeave={handleMouseLeave}>
          {/* Home */}
          <Link to="/" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
            Home
          </Link>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleDropdownToggle('services')}
              onMouseEnter={() => setActiveDropdown('services')}
              className="text-sm font-medium text-white hover:text-white/80 transition-colors flex items-center gap-1"
            >
              Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === 'services' && (
              <div className="absolute top-full left-0 mt-2 w-96 bg-[#1f1c26] border border-[#433c53] rounded-lg shadow-lg p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-3">Core Services</h3>
                    <div className="space-y-2">
                      <Link to="/services#web-design" className="block p-2 rounded hover:bg-[#2d2938] transition-colors">
                        <div className="text-sm font-medium text-white">Website Design</div>
                        <p className="text-[#a89db8] text-xs">Modern, responsive websites</p>
                      </Link>
                      <Link to="/services#automation" className="block p-2 rounded hover:bg-[#2d2938] transition-colors">
                        <div className="text-sm font-medium text-white">Automation Services</div>
                        <p className="text-[#a89db8] text-xs">Streamline your business</p>
                      </Link>
                      <Link to="/services#subscriptions" className="block p-2 rounded hover:bg-[#2d2938] transition-colors">
                        <div className="text-sm font-medium text-white">Subscription Plans</div>
                        <p className="text-[#a89db8] text-xs">Flexible monthly packages</p>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-3">Advanced Solutions</h3>
                    <div className="space-y-2">
                      <Link to="/services#mobile-app" className="block p-2 rounded hover:bg-[#2d2938] transition-colors">
                        <div className="text-sm font-medium text-white">Mobile App Development</div>
                        <p className="text-[#a89db8] text-xs">iOS & Android apps</p>
                      </Link>
                      <Link to="/services#custom" className="block p-2 rounded hover:bg-[#2d2938] transition-colors">
                        <div className="text-sm font-medium text-white">Custom Solutions</div>
                        <p className="text-[#a89db8] text-xs">Tailored for your business</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Work Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleDropdownToggle('work')}
              onMouseEnter={() => setActiveDropdown('work')}
              className="text-sm font-medium text-white hover:text-white/80 transition-colors flex items-center gap-1"
            >
              Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === 'work' && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-[#1f1c26] border border-[#433c53] rounded-lg shadow-lg p-4">
                <div className="grid gap-2">
                  <Link to="/portfolio" className="block p-2 rounded hover:bg-[#2d2938] transition-colors">
                    <div className="text-sm font-medium text-white">Portfolio / Projects</div>
                    <p className="text-[#a89db8] text-xs">Our recent work</p>
                  </Link>
                  <Link to="/case-studies" className="block p-2 rounded hover:bg-[#2d2938] transition-colors">
                    <div className="text-sm font-medium text-white">Case Studies</div>
                    <p className="text-[#a89db8] text-xs">Success stories</p>
                  </Link>
                  <Link to="/testimonials" className="block p-2 rounded hover:bg-[#2d2938] transition-colors">
                    <div className="text-sm font-medium text-white">Testimonials</div>
                    <p className="text-[#a89db8] text-xs">What clients say</p>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Pricing */}
          <Link to="/pricing" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
            Pricing
          </Link>

          {/* Resources Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleDropdownToggle('resources')}
              onMouseEnter={() => setActiveDropdown('resources')}
              className="text-sm font-medium text-white hover:text-white/80 transition-colors flex items-center gap-1"
            >
              Resources
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === 'resources' && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-[#1f1c26] border border-[#433c53] rounded-lg shadow-lg p-4">
                <div className="grid gap-2">
                  <Link to="/free-tools" className="block p-2 rounded hover:bg-[#2d2938] transition-colors">
                    <div className="text-sm font-medium text-white">Free Tools</div>
                    <p className="text-[#a89db8] text-xs">SEO audit, chatbot demo, etc.</p>
                  </Link>
                  <Link to="/guides" className="block p-2 rounded hover:bg-[#2d2938] transition-colors">
                    <div className="text-sm font-medium text-white">Guides / PDFs</div>
                    <p className="text-[#a89db8] text-xs">Downloadable resources</p>
                  </Link>
                  <Link to="/videos" className="block p-2 rounded hover:bg-[#2d2938] transition-colors">
                    <div className="text-sm font-medium text-white">Videos & Reels</div>
                    <p className="text-[#a89db8] text-xs">Instagram & YouTube content</p>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* About Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleDropdownToggle('about')}
              onMouseEnter={() => setActiveDropdown('about')}
              className="text-sm font-medium text-white hover:text-white/80 transition-colors flex items-center gap-1"
            >
              About
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === 'about' && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-[#1f1c26] border border-[#433c53] rounded-lg shadow-lg p-4">
                <div className="grid gap-2">
                  <Link to="/about#story" className="block p-2 rounded hover:bg-[#2d2938] transition-colors">
                    <div className="text-sm font-medium text-white">Our Story</div>
                  </Link>
                  <Link to="/about#team" className="block p-2 rounded hover:bg-[#2d2938] transition-colors">
                    <div className="text-sm font-medium text-white">Team</div>
                  </Link>
                  <Link to="/about#vision" className="block p-2 rounded hover:bg-[#2d2938] transition-colors">
                    <div className="text-sm font-medium text-white">Vision</div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Contact Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleDropdownToggle('contact')}
              onMouseEnter={() => setActiveDropdown('contact')}
              className="text-sm font-medium text-white hover:text-white/80 transition-colors flex items-center gap-1"
            >
              Contact
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === 'contact' && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-[#1f1c26] border border-[#433c53] rounded-lg shadow-lg p-4">
                <div className="grid gap-2">
                  <Link to="/contact#lead-form" className="block p-2 rounded hover:bg-[#2d2938] transition-colors">
                    <div className="text-sm font-medium text-white">Lead Form</div>
                  </Link>
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="block p-2 rounded hover:bg-[#2d2938] transition-colors">
                    <div className="text-sm font-medium text-white">WhatsApp</div>
                  </a>
                  <Link to="/contact#book-call" className="block p-2 rounded hover:bg-[#2d2938] transition-colors">
                    <div className="text-sm font-medium text-white">Book a Call</div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Get Started CTA */}
          <a
            href="#contact"
            className="ml-4 px-5 py-2 rounded-lg bg-[#6211d4] text-white font-semibold shadow hover:bg-[#7d3cf8] transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-[#6211d4]"
            style={{ whiteSpace: 'nowrap' }}
          >
            Get Started
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#6211d4]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Open menu"
        >
          <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile menu drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 md:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div className="absolute top-0 right-0 w-64 h-full bg-[#1f1c26] shadow-lg p-6 flex flex-col gap-6" onClick={e => e.stopPropagation()}>
            <button
              className="self-end mb-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#6211d4]"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Link to="/" className="text-white text-lg font-bold" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/about" className="text-white text-lg font-bold" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
            <Link to="/services" className="text-white text-lg font-bold" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link to="/case-studies" className="text-white text-lg font-bold" onClick={() => setMobileMenuOpen(false)}>Case Studies</Link>
            <Link to="/pricing" className="text-white text-lg font-bold" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
            <Link to="/consultation" className="text-white text-lg font-bold" onClick={() => setMobileMenuOpen(false)}>Consultation</Link>
            <Link to="/contact" className="text-white text-lg font-bold" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
