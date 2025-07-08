import React from 'react';

const CTA: React.FC = () => {
  return (
    <div className="py-20 px-4">
      <div className="relative max-w-6xl mx-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6211d4] to-[#4f0eb0] rounded-3xl transform rotate-1 opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#6211d4] to-[#4f0eb0] rounded-3xl transform -rotate-1 opacity-10" />
        
        <div className="relative p-8 md:p-12 bg-gradient-to-br from-[#1d1825] to-[#141118] rounded-3xl border border-[#2f2839] overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-[#6211d4] rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute -bottom-8 right-0 w-72 h-72 bg-[#4f0eb0] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-[#a89db9] text-lg max-w-2xl">
                Join the AI revolution and stay ahead of the competition. Let's discuss how our solutions can drive your business forward.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <button className="flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-[#6211d4] rounded-xl hover:bg-[#4f0eb0] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#6211d4]/50">
                Schedule a Demo
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-[#2f2839] rounded-xl hover:bg-[#3a3346] transform hover:scale-105 transition-all duration-300">
                Contact Sales
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Features grid */}
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-[#2f2839]">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-[#a89db9]">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-sm text-[#a89db9]">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">30+</div>
              <div className="text-sm text-[#a89db9]">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-sm text-[#a89db9]">Projects Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
