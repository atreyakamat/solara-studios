import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-[#2f2839] bg-[#141118]/80 px-4 py-4 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-3">
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
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-sm font-medium text-white hover:text-white/80 transition-colors">Home</a>
          <a href="#" className="text-sm font-medium text-white hover:text-white/80 transition-colors">Services</a>
          <a href="#" className="text-sm font-medium text-white hover:text-white/80 transition-colors">Case Studies</a>
          <a href="#" className="text-sm font-medium text-white hover:text-white/80 transition-colors">Pricing</a>
          <a href="#" className="text-sm font-medium text-white hover:text-white/80 transition-colors">AI Demo</a>
          <a href="#" className="text-sm font-medium text-white hover:text-white/80 transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-full bg-[#6211d4] px-6 py-2 text-sm font-bold text-white hover:bg-[#4f0eb0] transition-colors md:block">
            Get Started
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2f2839] text-white hover:bg-[#453b54] transition-colors md:hidden">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
