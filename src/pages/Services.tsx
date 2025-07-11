import React, { useState } from 'react';

interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
  icon: string;
  category: 'ai' | 'automation' | 'analytics' | 'consulting';
}

const services: Service[] = [
  {
    id: 1,
    title: 'AI Development',
    description: 'Custom AI solutions tailored to your business needs, from machine learning models to intelligent applications.',
    features: [
      'Custom AI Model Development',
      'Machine Learning Implementation',
      'Natural Language Processing',
      'Computer Vision Solutions',
      'Predictive Analytics',
      'AI Integration Services'
    ],
    icon: '🤖',
    category: 'ai'
  },
  {
    id: 2,
    title: 'Process Automation',
    description: 'Streamline your operations with intelligent automation that reduces manual work and increases efficiency.',
    features: [
      'Robotic Process Automation (RPA)',
      'Workflow Automation',
      'Business Process Optimization',
      'Integration Automation',
      'Document Processing',
      'Quality Assurance Automation'
    ],
    icon: '⚙️',
    category: 'automation'
  },
  {
    id: 3,
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights with advanced analytics and visualization solutions.',
    features: [
      'Data Mining & Analysis',
      'Business Intelligence',
      'Real-time Analytics',
      'Predictive Modeling',
      'Data Visualization',
      'Performance Metrics'
    ],
    icon: '📊',
    category: 'analytics'
  },
  {
    id: 4,
    title: 'AI Consulting',
    description: 'Strategic guidance to help you navigate the AI landscape and implement the right solutions for your business.',
    features: [
      'AI Strategy Development',
      'Technology Assessment',
      'Implementation Planning',
      'Team Training',
      'ROI Analysis',
      'Ongoing Support'
    ],
    icon: '💡',
    category: 'consulting'
  }
];

const Services: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="relative flex min-h-screen flex-col bg-[#141118] dark group/design-root overflow-x-hidden" style={{ fontFamily: 'Space Grotesk, Noto Sans, sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 flex-col items-center w-full bg-transparent">
          <div className="w-full max-w-6xl mx-auto px-4 py-16">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Our Services</h1>
              <p className="text-white/80 text-lg max-w-3xl mx-auto">
                Comprehensive AI and automation solutions designed to transform your business operations and drive growth.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="bg-[#1f1c26] rounded-xl border border-[#433c53] p-8 hover:border-[#6211d4] transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-4xl">{service.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-[#a89db8]">{service.description}</p>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleToggle(index)}
                    className="text-[#6211d4] hover:text-[#4f0eb0] font-medium transition-colors"
                  >
                    {openIndex === index ? 'Hide Features' : 'View Features'}
                  </button>
                  
                  {openIndex === index && (
                    <div className="mt-4 space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[#a89db8]">
                          <svg className="w-4 h-4 text-[#6211d4]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-[#2d1a4a] to-[#1a1620] rounded-xl p-12">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI and automation solutions can transform your business operations.
              </p>
              <button className="bg-[#6211d4] hover:bg-[#4f0eb0] text-white px-8 py-3 rounded-lg font-bold transition-colors">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
