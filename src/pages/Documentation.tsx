import React from 'react';

const Documentation: React.FC = () => {
  const sections = [
    {
      title: "Getting Started",
      items: [
        { name: "Quick Start Guide", description: "Get up and running in 5 minutes", icon: "🚀" },
        { name: "Installation", description: "Step-by-step installation instructions", icon: "📦" },
        { name: "Configuration", description: "Configure your AI solutions", icon: "⚙️" },
        { name: "First Project", description: "Build your first AI application", icon: "🎯" }
      ]
    },
    {
      title: "AI Development",
      items: [
        { name: "Model Training", description: "Train custom AI models", icon: "🧠" },
        { name: "Data Preparation", description: "Prepare and clean your data", icon: "📊" },
        { name: "API Integration", description: "Integrate AI APIs into your applications", icon: "🔗" },
        { name: "Deployment", description: "Deploy models to production", icon: "🚀" }
      ]
    },
    {
      title: "Automation",
      items: [
        { name: "Process Automation", description: "Automate business processes", icon: "⚡" },
        { name: "RPA Setup", description: "Set up robotic process automation", icon: "🤖" },
        { name: "Workflow Design", description: "Design efficient workflows", icon: "📋" },
        { name: "Monitoring", description: "Monitor automation performance", icon: "📈" }
      ]
    },
    {
      title: "Advanced Topics",
      items: [
        { name: "Machine Learning", description: "Advanced ML techniques", icon: "🔬" },
        { name: "Natural Language Processing", description: "NLP and text analysis", icon: "💬" },
        { name: "Computer Vision", description: "Image and video processing", icon: "👁️" },
        { name: "Optimization", description: "Performance optimization", icon: "⚡" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#141118] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[#a89db8] bg-clip-text text-transparent">
            Documentation
          </h1>
          <p className="text-xl text-[#a89db8] max-w-3xl mx-auto">
            Comprehensive guides and tutorials to help you build AI-powered applications and automate your business processes.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full bg-[#1f1c26] border border-[#433c53] rounded-lg px-4 py-3 text-white placeholder-[#a89db8] focus:outline-none focus:border-[#6211d4] transition-colors"
            />
            <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#a89db8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Documentation Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-[#1f1c26] rounded-lg border border-[#433c53] p-6">
              <h2 className="text-xl font-bold mb-6 text-white">{section.title}</h2>
              <div className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center gap-4 p-3 rounded-lg hover:bg-[#2d2938] transition-colors cursor-pointer">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <h3 className="font-medium text-white">{item.name}</h3>
                      <p className="text-sm text-[#a89db8]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Quick Links</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-[#2d1a4a] to-[#1a1620] rounded-lg p-6 border border-[#433c53] text-center">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="text-lg font-bold mb-2">API Reference</h3>
              <p className="text-[#a89db8] text-sm mb-4">Complete API documentation with examples</p>
              <button className="bg-[#6211d4] hover:bg-[#4f0eb0] text-white font-medium py-2 px-4 rounded transition-colors">
                View API Docs
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-[#2d1a4a] to-[#1a1620] rounded-lg p-6 border border-[#433c53] text-center">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-lg font-bold mb-2">Tutorials</h3>
              <p className="text-[#a89db8] text-sm mb-4">Step-by-step tutorials for beginners</p>
              <button className="bg-[#6211d4] hover:bg-[#4f0eb0] text-white font-medium py-2 px-4 rounded transition-colors">
                Start Learning
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-[#2d1a4a] to-[#1a1620] rounded-lg p-6 border border-[#433c53] text-center">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="text-lg font-bold mb-2">Support</h3>
              <p className="text-[#a89db8] text-sm mb-4">Get help from our support team</p>
              <button className="bg-[#6211d4] hover:bg-[#4f0eb0] text-white font-medium py-2 px-4 rounded transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation; 