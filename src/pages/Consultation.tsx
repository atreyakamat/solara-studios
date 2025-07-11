import React, { useState } from 'react';

const Consultation: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you! We\'ll be in touch within 24 hours to schedule your consultation.');
  };

  const consultationTypes = [
    {
      title: "AI Strategy Consultation",
      description: "Develop a comprehensive AI roadmap for your business",
      icon: "🧠",
      duration: "60 min",
      price: "Free"
    },
    {
      title: "Technical Deep Dive",
      description: "Detailed technical assessment and implementation planning",
      icon: "⚙️",
      duration: "90 min",
      price: "$500"
    },
    {
      title: "Project Scoping",
      description: "Define project requirements and create implementation timeline",
      icon: "📋",
      duration: "120 min",
      price: "$750"
    }
  ];

  return (
    <div className="min-h-screen bg-[#141118] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[#a89db8] bg-clip-text text-transparent">
            Schedule a Consultation
          </h1>
          <p className="text-xl text-[#a89db8] max-w-3xl mx-auto">
            Get expert advice on implementing AI and automation solutions for your business. Our team will help you identify opportunities and create a customized strategy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Consultation Types */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Consultation Types</h2>
            <div className="space-y-6">
              {consultationTypes.map((type, index) => (
                <div key={index} className="bg-[#1f1c26] rounded-lg border border-[#433c53] p-6 hover:border-[#6211d4] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{type.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2">{type.title}</h3>
                      <p className="text-[#a89db8] mb-4">{type.description}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-[#6211d4] font-medium">Duration: {type.duration}</span>
                        <span className="text-[#a89db8]">Price: {type.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6">What You'll Get</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#6211d4] rounded-full"></div>
                  <span className="text-[#a89db8]">Customized AI strategy</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#6211d4] rounded-full"></div>
                  <span className="text-[#a89db8]">Technical feasibility assessment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#6211d4] rounded-full"></div>
                  <span className="text-[#a89db8]">ROI projections</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#6211d4] rounded-full"></div>
                  <span className="text-[#a89db8]">Implementation roadmap</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#6211d4] rounded-full"></div>
                  <span className="text-[#a89db8]">Resource requirements</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#6211d4] rounded-full"></div>
                  <span className="text-[#a89db8]">Risk assessment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-[#1f1c26] rounded-lg border border-[#433c53] p-8">
              <h2 className="text-2xl font-bold mb-6">Request Consultation</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-[#2d2938] border border-[#433c53] rounded-lg px-4 py-3 text-white placeholder-[#a89db8] focus:outline-none focus:border-[#6211d4] transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-[#2d2938] border border-[#433c53] rounded-lg px-4 py-3 text-white placeholder-[#a89db8] focus:outline-none focus:border-[#6211d4] transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full bg-[#2d2938] border border-[#433c53] rounded-lg px-4 py-3 text-white placeholder-[#a89db8] focus:outline-none focus:border-[#6211d4] transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-[#2d2938] border border-[#433c53] rounded-lg px-4 py-3 text-white placeholder-[#a89db8] focus:outline-none focus:border-[#6211d4] transition-colors"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Project Type *</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-[#2d2938] border border-[#433c53] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#6211d4] transition-colors"
                  >
                    <option value="">Select project type</option>
                    <option value="ai-strategy">AI Strategy Consultation</option>
                    <option value="technical-deep-dive">Technical Deep Dive</option>
                    <option value="project-scoping">Project Scoping</option>
                    <option value="custom">Custom Project</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full bg-[#2d2938] border border-[#433c53] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#6211d4] transition-colors"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-50k">Under $50K</option>
                      <option value="50k-100k">$50K - $100K</option>
                      <option value="100k-250k">$100K - $250K</option>
                      <option value="250k-500k">$250K - $500K</option>
                      <option value="over-500k">Over $500K</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Timeline</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full bg-[#2d2938] border border-[#433c53] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#6211d4] transition-colors"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate (1-3 months)</option>
                      <option value="short-term">Short-term (3-6 months)</option>
                      <option value="medium-term">Medium-term (6-12 months)</option>
                      <option value="long-term">Long-term (1+ years)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Project Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full bg-[#2d2938] border border-[#433c53] rounded-lg px-4 py-3 text-white placeholder-[#a89db8] focus:outline-none focus:border-[#6211d4] transition-colors"
                    placeholder="Tell us about your project goals, challenges, and what you hope to achieve..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#6211d4] hover:bg-[#4f0eb0] text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Schedule Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation; 