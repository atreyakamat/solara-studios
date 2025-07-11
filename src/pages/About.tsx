import React from 'react';

const About: React.FC = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#141118] dark group/design-root overflow-x-hidden" style={{ fontFamily: 'Space Grotesk, Noto Sans, sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 flex-col items-center w-full bg-transparent">
          <div className="w-full max-w-6xl mx-auto px-4 py-16">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-black text-white mb-6">About Solara Studios</h1>
              <p className="text-white/80 text-lg max-w-3xl mx-auto">
                We are a team of passionate AI and automation experts dedicated to transforming businesses through innovative technology solutions.
              </p>
            </div>

            {/* Mission Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-[#a89db8] text-lg leading-relaxed mb-6">
                  To democratize AI and automation technology, making it accessible to businesses of all sizes. We believe that every organization deserves the opportunity to leverage cutting-edge technology to drive growth and efficiency.
                </p>
                <p className="text-[#a89db8] text-lg leading-relaxed">
                  Our team combines deep technical expertise with business acumen to deliver solutions that not only work technically but also drive measurable business value.
                </p>
              </div>
              <div className="bg-[#1f1c26] rounded-xl p-8 border border-[#433c53]">
                <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#6211d4] rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Expert Team</h4>
                      <p className="text-[#a89db8] text-sm">Years of experience in AI and automation</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#6211d4] rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Custom Solutions</h4>
                      <p className="text-[#a89db8] text-sm">Tailored to your specific business needs</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#6211d4] rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Proven Results</h4>
                      <p className="text-[#a89db8] text-sm">Track record of successful implementations</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Team Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-32 h-32 bg-[#6211d4] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">👨‍💻</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">AI Engineers</h3>
                  <p className="text-[#a89db8]">Specialists in machine learning and deep learning</p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 bg-[#6211d4] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">⚙️</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Automation Experts</h3>
                  <p className="text-[#a89db8]">Process optimization and workflow automation</p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 bg-[#6211d4] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">📊</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Data Scientists</h3>
                  <p className="text-[#a89db8]">Analytics and business intelligence</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-[#2d1a4a] to-[#1a1620] rounded-xl p-12">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Work Together?</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Let's discuss how our team can help transform your business with AI and automation solutions.
              </p>
              <button className="bg-[#6211d4] hover:bg-[#4f0eb0] text-white px-8 py-3 rounded-lg font-bold transition-colors">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
