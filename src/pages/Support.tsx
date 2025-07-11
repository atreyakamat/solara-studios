import React from 'react';

const Support: React.FC = () => {
  const faqs = [
    {
      question: "How do I get started with Solara Studios AI solutions?",
      answer: "Getting started is easy! Simply contact our team through the contact form or schedule a consultation. We'll assess your needs and create a customized implementation plan."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We work across various industries including technology, retail, manufacturing, healthcare, and finance. Our AI solutions are adaptable to any business sector."
    },
    {
      question: "How long does implementation typically take?",
      answer: "Implementation timelines vary based on project complexity. Simple automation projects can be completed in 2-4 weeks, while comprehensive AI solutions may take 2-3 months."
    },
    {
      question: "Do you provide ongoing support after implementation?",
      answer: "Yes! We offer comprehensive support packages including maintenance, updates, and technical assistance to ensure your AI solutions continue performing optimally."
    },
    {
      question: "What kind of ROI can I expect from AI implementation?",
      answer: "Our clients typically see 30-60% improvements in efficiency and 20-40% cost reductions. Specific ROI depends on your use case and implementation scope."
    },
    {
      question: "Is my data secure with your AI solutions?",
      answer: "Absolutely. We implement enterprise-grade security measures and comply with industry standards. Your data privacy and security are our top priorities."
    }
  ];

  const supportChannels = [
    {
      title: "Email Support",
      description: "Get detailed responses within 24 hours",
      icon: "📧",
      responseTime: "24 hours",
      bestFor: "Detailed technical questions"
    },
    {
      title: "Live Chat",
      description: "Real-time assistance during business hours",
      icon: "💬",
      responseTime: "Instant",
      bestFor: "Quick questions and troubleshooting"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      icon: "📞",
      responseTime: "Immediate",
      bestFor: "Complex issues and urgent matters"
    },
    {
      title: "Documentation",
      description: "Comprehensive guides and tutorials",
      icon: "📚",
      responseTime: "Self-service",
      bestFor: "Learning and self-help"
    }
  ];

  return (
    <div className="min-h-screen bg-[#141118] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[#a89db8] bg-clip-text text-transparent">
            Support Center
          </h1>
          <p className="text-xl text-[#a89db8] max-w-3xl mx-auto">
            We're here to help you succeed with our AI and automation solutions. Find answers, get assistance, and connect with our expert team.
          </p>
        </div>

        {/* Support Channels */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">How Can We Help?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-[#1f1c26] rounded-lg border border-[#433c53] p-6 text-center hover:border-[#6211d4] transition-all duration-300">
                <div className="text-4xl mb-4">{channel.icon}</div>
                <h3 className="text-lg font-bold mb-2">{channel.title}</h3>
                <p className="text-[#a89db8] text-sm mb-4">{channel.description}</p>
                <div className="space-y-2 text-xs">
                  <div className="text-[#6211d4] font-medium">Response: {channel.responseTime}</div>
                  <div className="text-[#a89db8]">Best for: {channel.bestFor}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-[#2d1a4a] to-[#1a1620] rounded-lg p-6 border border-[#433c53] text-center">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-lg font-bold mb-2">Submit a Ticket</h3>
              <p className="text-[#a89db8] text-sm mb-4">Create a support ticket for detailed assistance</p>
              <button className="bg-[#6211d4] hover:bg-[#4f0eb0] text-white font-medium py-2 px-4 rounded transition-colors">
                Create Ticket
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-[#2d1a4a] to-[#1a1620] rounded-lg p-6 border border-[#433c53] text-center">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="text-lg font-bold mb-2">Schedule a Call</h3>
              <p className="text-[#a89db8] text-sm mb-4">Book a consultation with our experts</p>
              <button className="bg-[#6211d4] hover:bg-[#4f0eb0] text-white font-medium py-2 px-4 rounded transition-colors">
                Book Call
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-[#2d1a4a] to-[#1a1620] rounded-lg p-6 border border-[#433c53] text-center">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="text-lg font-bold mb-2">View Documentation</h3>
              <p className="text-[#a89db8] text-sm mb-4">Access comprehensive guides and tutorials</p>
              <button className="bg-[#6211d4] hover:bg-[#4f0eb0] text-white font-medium py-2 px-4 rounded transition-colors">
                Browse Docs
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#1f1c26] rounded-lg border border-[#433c53] p-6">
                <h3 className="text-lg font-bold mb-3 text-white">{faq.question}</h3>
                <p className="text-[#a89db8]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-[#2d1a4a] to-[#1a1620] rounded-lg p-8 border border-[#433c53]">
          <h2 className="text-2xl font-bold mb-6 text-center">Still Need Help?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Information</h3>
              <div className="space-y-3 text-[#a89db8]">
                <div className="flex items-center gap-3">
                  <span className="text-[#6211d4]">📧</span>
                  <span>support@solara-studios.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#6211d4]">📞</span>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#6211d4]">🕒</span>
                  <span>Mon-Fri: 9AM-6PM EST</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Emergency Support</h3>
              <p className="text-[#a89db8] mb-4">
                For critical issues affecting your production systems, contact our emergency support line available 24/7.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition-colors">
                Emergency Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support; 