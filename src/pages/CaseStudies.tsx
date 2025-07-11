import React from 'react';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Customer Service Automation",
      company: "TechCorp Solutions",
      industry: "Technology",
      description: "Implemented an AI chatbot that reduced customer service response time by 80% and increased customer satisfaction scores by 35%.",
      results: ["80% faster response times", "35% increase in satisfaction", "60% reduction in support costs"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Predictive Analytics for Retail",
      company: "Global Retail Chain",
      industry: "Retail",
      description: "Developed a machine learning model that predicts inventory needs, reducing stockouts by 45% and increasing revenue by 22%.",
      results: ["45% reduction in stockouts", "22% revenue increase", "30% inventory cost savings"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Process Automation for Manufacturing",
      company: "Industrial Manufacturing Co.",
      industry: "Manufacturing",
      description: "Automated quality control processes using computer vision, improving defect detection accuracy by 95% and reducing production delays.",
      results: ["95% defect detection accuracy", "40% faster quality checks", "25% reduction in production delays"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-[#141118] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[#a89db8] bg-clip-text text-transparent">
            Case Studies
          </h1>
          <p className="text-xl text-[#a89db8] max-w-3xl mx-auto">
            Discover how we've helped businesses transform their operations with AI and automation solutions.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-[#1f1c26] rounded-lg overflow-hidden border border-[#433c53] hover:border-[#6211d4] transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-[#6211d4] bg-[#6211d4]/10 px-2 py-1 rounded-full">
                    {study.industry}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                <p className="text-[#a89db8] text-sm mb-4">{study.company}</p>
                <p className="text-[#a89db8] mb-4">{study.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white">Key Results:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, index) => (
                      <li key={index} className="text-sm text-[#a89db8] flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#6211d4] rounded-full"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#2d1a4a] to-[#1a1620] rounded-lg p-8 border border-[#433c53]">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-[#a89db8] mb-6">
              Let's discuss how our AI and automation solutions can help you achieve similar results.
            </p>
            <button className="bg-[#6211d4] hover:bg-[#4f0eb0] text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies; 