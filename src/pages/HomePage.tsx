import React from 'react';

const HomePage: React.FC = () => (
  <div className="relative flex size-full min-h-screen flex-col bg-[#131118] dark group/design-root overflow-x-hidden" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>
    <div className="layout-container flex h-full grow flex-col">
      {/* Header */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#2d2938] px-10 py-3">
        <div className="flex items-center gap-4 text-white">
          <div className="size-4">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z" fill="currentColor" />
            </svg>
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Solara Studios</h2>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-9">
            <a className="text-white text-sm font-medium leading-normal" href="#">Home</a>
            <a className="text-white text-sm font-medium leading-normal" href="#">Services</a>
            <a className="text-white text-sm font-medium leading-normal" href="#">Case Studies</a>
            <a className="text-white text-sm font-medium leading-normal" href="#">Pricing</a>
            <a className="text-white text-sm font-medium leading-normal" href="#">Demo</a>
          </div>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#7847ea] text-white text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Get Started</span>
          </button>
        </div>
      </header>
      {/* Main Content */}
      <div className="flex flex-1 flex-col items-center w-full bg-transparent">
        <div className="w-full max-w-4xl mx-auto mt-10">
          {/* Hero Section */}
          <div className="rounded-xl bg-gradient-to-br from-[#2d1a4a] to-[#1a1620] p-10 mb-10">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Empowering Businesses with AI and Automation</h1>
            <p className="text-white/90 text-lg mb-6">Solara Studios delivers cutting-edge AI and automation solutions to transform your business, enhance efficiency, and drive growth. Our tailored strategies and innovative technologies ensure you stay ahead in today's competitive landscape.</p>
            <button className="bg-[#7847ea] hover:bg-[#6a3fd8] text-white px-6 py-2 rounded-lg font-bold">Get Started</button>
          </div>
          {/* Why Choose Us */}
          <h2 className="text-white text-xl font-bold mb-2">Why Choose Solara Studios?</h2>
          <h3 className="text-2xl font-bold text-white mb-2">Key Benefits</h3>
          <p className="text-white/80 mb-6">Discover how Solara Studios can revolutionize your business with our AI and automation solutions.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="rounded-lg border border-[#433c53] bg-[#1f1c26] p-4">
              <div className="mb-2">🔒</div>
              <h4 className="text-white font-bold mb-1">Proven Expertise</h4>
              <p className="text-[#a59db8] text-sm">Our team of AI and automation experts brings years of experience and a track record of success, ensuring your projects are in capable hands.</p>
            </div>
            <div className="rounded-lg border border-[#433c53] bg-[#1f1c26] p-4">
              <div className="mb-2">⏱️</div>
              <h4 className="text-white font-bold mb-1">Efficiency Boost</h4>
              <p className="text-[#a59db8] text-sm">We streamline your operations, automating repetitive tasks and optimizing workflows to significantly increase efficiency.</p>
            </div>
            <div className="rounded-lg border border-[#433c53] bg-[#1f1c26] p-4">
              <div className="mb-2">💸</div>
              <h4 className="text-white font-bold mb-1">Cost Savings</h4>
              <p className="text-[#a59db8] text-sm">Our solutions reduce operational costs by minimizing manual labor and maximizing resource utilization, providing a strong return on investment.</p>
            </div>
          </div>
          {/* Our Services */}
          <h2 className="text-white text-xl font-bold mb-2">Our Services</h2>
          <h3 className="text-2xl font-bold text-white mb-2">Comprehensive Offerings</h3>
          <p className="text-white/80 mb-6">Explore our range of services designed to meet your unique business challenges and drive innovation.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="rounded-lg border border-[#433c53] bg-[#1f1c26] p-4">
              <h4 className="text-white font-bold mb-1">AI Development</h4>
              <p className="text-[#a59db8] text-sm">We build custom AI models and applications tailored to your specific needs, leveraging the latest advancements in machine learning and deep learning.</p>
            </div>
            <div className="rounded-lg border border-[#433c53] bg-[#1f1c26] p-4">
              <h4 className="text-white font-bold mb-1">Automation Solutions</h4>
              <p className="text-[#a59db8] text-sm">We automate business processes, from simple tasks to complex workflows, using robotic process automation (RPA) and intelligent automation tools.</p>
            </div>
            <div className="rounded-lg border border-[#433c53] bg-[#1f1c26] p-4">
              <h4 className="text-white font-bold mb-1">Data Analytics</h4>
              <p className="text-[#a59db8] text-sm">We analyze your data to uncover insights, identify trends, and make data-driven decisions, helping you optimize performance and achieve your business goals.</p>
            </div>
          </div>
          {/* Case Studies */}
          <h2 className="text-white text-xl font-bold mb-2">Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="rounded-lg bg-[#1f1c26] p-4 flex flex-col">
              <div className="aspect-video bg-cover bg-center rounded mb-2" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80)' }} />
              <h4 className="text-white font-bold mb-1">Automating Customer Service for a Retail Giant</h4>
              <p className="text-[#a59db8] text-sm">We implemented an AI-powered chatbot that handles 80% of customer inquiries, reducing response times and improving customer satisfaction.</p>
            </div>
            <div className="rounded-lg bg-[#1f1c26] p-4 flex flex-col">
              <div className="aspect-video bg-cover bg-center rounded mb-2" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80)' }} />
              <h4 className="text-white font-bold mb-1">Streamlining Warehouse Operations for an E-commerce Leader</h4>
              <p className="text-[#a59db8] text-sm">We automated inventory management and order fulfillment processes, resulting in a 30% reduction in operational costs and faster delivery times.</p>
            </div>
            <div className="rounded-lg bg-[#1f1c26] p-4 flex flex-col">
              <div className="aspect-video bg-cover bg-center rounded mb-2" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80)' }} />
              <h4 className="text-white font-bold mb-1">Enhancing Data Analysis for a Financial Institution</h4>
              <p className="text-[#a59db8] text-sm">We developed a machine learning model that analyzes market trends and customer behavior, leading to more informed investment decisions and increased profitability.</p>
            </div>
          </div>
          {/* Pricing Plans */}
          <h2 className="text-white text-xl font-bold mb-2">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="rounded-lg border border-[#433c53] bg-[#1f1c26] p-6 flex flex-col">
              <h4 className="text-white font-bold mb-1">Basic</h4>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">$99</span>
                <span className="text-white text-base font-bold leading-tight">/month</span>
              </div>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#2d2938] text-white text-sm font-bold leading-normal tracking-[0.015em] mb-2">
                <span className="truncate">Get Started</span>
              </button>
              <ul className="text-white text-sm space-y-1">
                <li>AI Consultation</li>
                <li>Basic AI Models</li>
                <li>Email Support</li>
              </ul>
            </div>
            <div className="rounded-lg border border-[#433c53] bg-[#1f1c26] p-6 flex flex-col relative">
              <div className="absolute top-4 right-4 bg-[#7847ea] text-white text-xs font-medium px-3 py-1 rounded">Recommended</div>
              <h4 className="text-white font-bold mb-1">Pro</h4>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">$299</span>
                <span className="text-white text-base font-bold leading-tight">/month</span>
              </div>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#2d2938] text-white text-sm font-bold leading-normal tracking-[0.015em] mb-2">
                <span className="truncate">Get Started</span>
              </button>
              <ul className="text-white text-sm space-y-1">
                <li>Advanced AI Models</li>
                <li>Automation Setup</li>
                <li>Priority Support</li>
              </ul>
            </div>
            <div className="rounded-lg border border-[#433c53] bg-[#1f1c26] p-6 flex flex-col">
              <h4 className="text-white font-bold mb-1">Enterprise</h4>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Custom</span>
              </div>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#2d2938] text-white text-sm font-bold leading-normal tracking-[0.015em] mb-2">
                <span className="truncate">Contact Us</span>
              </button>
              <ul className="text-white text-sm space-y-1">
                <li>Custom AI Solutions</li>
                <li>Full Automation Suite</li>
                <li>Dedicated Account Manager</li>
              </ul>
            </div>
          </div>
          {/* Interactive AI Demo */}
          <h2 className="text-white text-xl font-bold mb-2">Interactive AI Demo</h2>
          <textarea className="w-full min-h-[100px] rounded-lg p-3 bg-[#1f1c26] text-white border border-[#433c53] mb-2" placeholder="Enter your text here..."></textarea>
          <button className="bg-[#7847ea] text-white px-4 py-2 rounded mb-10">Submit</button>
          {/* Client Testimonials */}
          <h2 className="text-white text-xl font-bold mb-2">Client Testimonials</h2>
          <div className="flex flex-col gap-6 mb-10">
            <div className="flex gap-4 items-start">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sophia Carter" className="w-10 h-10 rounded-full" />
              <div>
                <div className="flex gap-2 items-center">
                  <span className="text-white font-bold">Sophia Carter</span>
                  <span className="text-[#a59db8] text-xs">2023-08-15</span>
                </div>
                <div className="flex gap-1 text-yellow-400">{'★★★★★'}</div>
                <p className="text-white text-sm">Solara Studios transformed our customer service with their AI chatbot. Our response times are faster, and customer satisfaction has significantly improved.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Ethan Bennett" className="w-10 h-10 rounded-full" />
              <div>
                <div className="flex gap-2 items-center">
                  <span className="text-white font-bold">Ethan Bennett</span>
                  <span className="text-[#a59db8] text-xs">2023-09-22</span>
                </div>
                <div className="flex gap-1 text-yellow-400">{'★★★★★'}</div>
                <p className="text-white text-sm">The automation solutions provided by Solara Studios have streamlined our warehouse operations, leading to substantial cost savings and increased efficiency.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Olivia Hayes" className="w-10 h-10 rounded-full" />
              <div>
                <div className="flex gap-2 items-center">
                  <span className="text-white font-bold">Olivia Hayes</span>
                  <span className="text-[#a59db8] text-xs">2023-11-10</span>
                </div>
                <div className="flex gap-1 text-yellow-400">{'★★★★★'}</div>
                <p className="text-white text-sm">The data analytics insights from Solara Studios have been invaluable in making informed business decisions and driving growth.</p>
              </div>
            </div>
          </div>
          {/* Final CTA Section */}
          <div className="rounded-xl bg-gradient-to-br from-[#2d1a4a] to-[#1a1620] p-10 mb-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Ready to Transform Your Business?</h2>
            <p className="text-white/80 mb-4">Contact us today to learn how Solara Studios can help you achieve your business goals with AI and automation.</p>
            <button className="bg-[#7847ea] hover:bg-[#6a3fd8] text-white px-6 py-2 rounded-lg font-bold">Get Started</button>
          </div>
        </div>
        {/* Footer */}
        <footer className="w-full py-8 border-t border-[#2d2938] flex flex-col items-center">
          <div className="flex gap-8 mb-4">
            <a className="text-[#a59db8] text-base font-normal leading-normal min-w-40" href="#">Contact</a>
            <a className="text-[#a59db8] text-base font-normal leading-normal min-w-40" href="#">Privacy Policy</a>
            <a className="text-[#a59db8] text-base font-normal leading-normal min-w-40" href="#">Terms of Service</a>
          </div>
          <div className="flex gap-4 mb-4">
            <a href="#" className="text-[#a59db8]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"/></svg>
            </a>
            <a href="#" className="text-[#a59db8]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"/></svg>
            </a>
          </div>
          <p className="text-[#a59db8] text-base font-normal leading-normal">© 2024 Solara Studios. All rights reserved.</p>
        </footer>
      </div>
    </div>
  </div>
);

export default HomePage;
