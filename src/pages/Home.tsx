import React from 'react';

const Home = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#141118] dark group/design-root overflow-x-hidden" style={{fontFamily: '"Space Grotesk", "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#2f2839] px-10 py-3">
          <div className="flex items-center gap-4 text-white">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Solara Studios</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <nav className="flex items-center gap-9">
              <a className="text-white text-sm font-medium leading-normal hover:text-[#6211d4] transition-colors" href="#">Home</a>
              <a className="text-white text-sm font-medium leading-normal hover:text-[#6211d4] transition-colors" href="#">Services</a>
              <a className="text-white text-sm font-medium leading-normal hover:text-[#6211d4] transition-colors" href="#">About</a>
              <a className="text-white text-sm font-medium leading-normal hover:text-[#6211d4] transition-colors" href="#">Contact</a>

            </nav>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#6211d4] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#4f0eb0] transition-colors">
              <span className="truncate">Get Started</span>
            </button>
          </div>
        </header>
        <div className="px-4 md:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <Hero />
            <WhyChooseUs />
            <Services />
            <AIDemo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
