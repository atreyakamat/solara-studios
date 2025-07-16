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
          {/* Home Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleDropdownToggle('home')}
              onMouseEnter={() => setActiveDropdown('home')}
              className="text-sm font-medium text-white hover:text-white/80 transition-colors flex items-center gap-1"
            >
              Home
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === 'home' && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-[#1f1c26] border border-[#433c53] rounded-lg shadow-lg p-4">
                <div className="grid gap-4">
                  <div className="bg-gradient-to-br from-[#2d1a4a] to-[#1a1620] rounded-lg p-4">
                    <div className="text-lg font-medium text-white mb-2">Solara Studios</div>
                    <p className="text-[#a89db8] text-sm">
                      Empowering businesses with AI and automation solutions.
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <Link to="/" className="block p-2 rounded hover:bg-[#2d2938] transition-colors">
                      <div className="text-sm font-medium text-white">Overview</div>
                      <p className="text-[#a89db8] text-xs">Learn about our AI solutions</p>
                    </Link>
                    <Link to="/about" className="block p-2 rounded hover:bg-[#2d2938] transition-colors">
                      <div className="text-sm font-medium text-white">About Us</div>
                      <p className="text-[#a89db8] text-xs">Our mission and team</p>
                    </Link>
                    <Link to="/contact" className="block p-2 rounded hover:bg-[#2d2938] transition-colors">
                      <div className="text-sm font-medium text-white">Contact</div>
                      <p className="text-[#a89db8] text-xs">Get in touch with us</p>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

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
                    <h3 className="text-sm font-semibold text-white mb-3">AI Solutions</h3>
                    <div className="space-y-2">
                      <Link to="/services" className="block p-2 rounded hover:bg-[#2d2938] transition-colors">
                        <div className="text-sm font-medium text-white">AI Development</div>
                        <p className="text-[#a89db8] text-xs">Custom AI models and applications</p>
                      </Link>
                      <Link to="/services" className="block p-2 rounded hover:bg-[#2d2938] transition-colors">
                        <div className="text-sm font-medium text-white">Machine Learning</div>
                        <p className="text-[#a89db8] text-xs">Predictive analytics and insights</p>
                      </Link>
                      <Link to="/services" className="block p-2 rounded hover:bg-[#2d2938] transition-colors">
                        <div className="text-sm font-medium text-white">Natural Language Processing</div>
                        <p className="text-[#a89db8] text-xs">Text analysis and chatbots</p>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-3">Automation</h3>
                    <div className="space-y-2">
                      <Link to="/services" className="block p-2 rounded hover:bg-[#2d2938] transition-colors">
                        <div className="text-sm font-medium text-white">Process Automation</div>
                        <p className="text-[#a89db8] text-xs">Streamline business operations</p>
                      </Link>
                      <Link to="/services" className="block p-2 rounded hover:bg-[#2d2938] transition-colors">
                        <div className="text-sm font-medium text-white">RPA Solutions</div>
                        <p className="text-[#a89db8] text-xs">Robotic process automation</p>
                      </Link>
                      <Link to="/services" className="block p-2 rounded hover:bg-[#2d2938] transition-colors">
                        <div className="text-sm font-medium text-white">Workflow Optimization</div>
                        <p className="text-[#a89db8] text-xs">Improve efficiency and productivity</p>
                      </Link>
                      <Link to="/globe-demo" className="block p-2 rounded hover:bg-[#2d2938] transition-colors">
                        <div className="text-sm font-medium text-white">3D Globe Demo</div>
                        <p className="text-[#a89db8] text-xs">Interactive 3D visualization</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Solutions Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleDropdownToggle('solutions')}
              onMouseEnter={() => setActiveDropdown('solutions')}
              className="text-sm font-medium text-white hover:text-white/80 transition-colors flex items-center gap-1"
            >
              Solutions
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === 'solutions' && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-[#1f1c26] border border-[#433c53] rounded-lg shadow-lg p-4">
                <div className="space-y-3">
                  <Link to="/pricing" className="block p-3 rounded hover:bg-[#2d2938] transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#6211d4] rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">Pricing Plans</div>
                        <p className="text-[#a89db8] text-xs">Choose the right plan for your business</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/case-studies" className="block p-3 rounded hover:bg-[#2d2938] transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#6211d4] rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">Case Studies</div>
                        <p className="text-[#a89db8] text-xs">See how we've helped other businesses</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="/consultation" className="block p-3 rounded hover:bg-[#2d2938] transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#6211d4] rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">Consultation</div>
                        <p className="text-[#a89db8] text-xs">Get expert advice for your project</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>

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
              <div className="absolute top-full left-0 mt-2 w-64 bg-[#1f1c26] border border-[#433c53] rounded-lg shadow-lg p-4">
                <div className="space-y-2">
                  <Link to="/documentation" className="block p-2 rounded hover:bg-[#2d2938] transition-colors">
                    <div className="text-sm font-medium text-white">Documentation</div>
                  </Link>
                  <Link to="/api-reference" className="block p-2 rounded hover:bg-[#2d2938] transition-colors">
                    <div className="text-sm font-medium text-white">API Reference</div>
                  </Link>
                  <Link to="/tutorials" className="block p-2 rounded hover:bg-[#2d2938] transition-colors">
                    <div className="text-sm font-medium text-white">Tutorials</div>
                  </Link>
                  <Link to="/blog" className="block p-2 rounded hover:bg-[#2d2938] transition-colors">
                    <div className="text-sm font-medium text-white">Blog</div>
                  </Link>
                  <Link to="/support" className="block p-2 rounded hover:bg-[#2d2938] transition-colors">
                    <div className="text-sm font-medium text-white">Support</div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Simple Links */}
          <Link to="/about" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
            Contact
          </Link>
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
