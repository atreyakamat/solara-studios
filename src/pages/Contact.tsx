import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: 'ai-development'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="relative flex min-h-screen flex-col bg-[#141118] dark group/design-root overflow-x-hidden" style={{ fontFamily: 'Space Grotesk, Noto Sans, sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 flex-col items-center w-full bg-transparent">
          <div className="w-full max-w-6xl mx-auto px-4 py-16">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Get in Touch</h1>
              <p className="text-white/80 text-lg max-w-3xl mx-auto">
                Ready to transform your business with AI and automation? Let's discuss your project and explore how we can help you achieve your goals.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-[#1f1c26] rounded-xl p-8 border border-[#433c53]">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#2d2938] border border-[#433c53] rounded-lg text-white placeholder-[#a89db8] focus:border-[#6211d4] focus:outline-none transition-colors"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#2d2938] border border-[#433c53] rounded-lg text-white placeholder-[#a89db8] focus:border-[#6211d4] focus:outline-none transition-colors"
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-white font-medium mb-2">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#2d2938] border border-[#433c53] rounded-lg text-white placeholder-[#a89db8] focus:border-[#6211d4] focus:outline-none transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-white font-medium mb-2">Service Interest</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#2d2938] border border-[#433c53] rounded-lg text-white focus:border-[#6211d4] focus:outline-none transition-colors"
                    >
                      <option value="ai-development">AI Development</option>
                      <option value="process-automation">Process Automation</option>
                      <option value="data-analytics">Data Analytics</option>
                      <option value="ai-consulting">AI Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-[#2d2938] border border-[#433c53] rounded-lg text-white placeholder-[#a89db8] focus:border-[#6211d4] focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project and how we can help..."
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-[#6211d4] hover:bg-[#4f0eb0] text-white py-3 rounded-lg font-bold transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#6211d4] rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Email</h3>
                        <p className="text-[#a89db8]">hello@solara-studios.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#6211d4] rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Phone</h3>
                        <p className="text-[#a89db8]">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#6211d4] rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Location</h3>
                        <p className="text-[#a89db8]">San Francisco, CA<br />United States</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-[#1f1c26] rounded-xl p-6 border border-[#433c53]">
                  <h3 className="text-xl font-bold text-white mb-4">Business Hours</h3>
                  <div className="space-y-2 text-[#a89db8]">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM PST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM PST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-gradient-to-r from-[#2d1a4a] to-[#1a1620] rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Response Time</h3>
                  <p className="text-[#a89db8]">We typically respond to all inquiries within 24 hours during business days.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
