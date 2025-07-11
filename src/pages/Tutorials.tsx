import React from 'react';

const Tutorials: React.FC = () => {
  const tutorials = [
    {
      id: 1,
      title: "Getting Started with AI Integration",
      description: "Learn the basics of integrating AI into your applications",
      difficulty: "Beginner",
      duration: "30 min",
      category: "AI Integration",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Building Your First Chatbot",
      description: "Step-by-step guide to creating an intelligent chatbot",
      difficulty: "Intermediate",
      duration: "45 min",
      category: "NLP",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Automating Business Processes",
      description: "Learn how to automate repetitive tasks with RPA",
      difficulty: "Beginner",
      duration: "60 min",
      category: "Automation",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Machine Learning Model Deployment",
      description: "Deploy your ML models to production environments",
      difficulty: "Advanced",
      duration: "90 min",
      category: "ML",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Data Preprocessing for AI",
      description: "Clean and prepare your data for AI applications",
      difficulty: "Intermediate",
      duration: "40 min",
      category: "Data Science",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "API Integration Best Practices",
      description: "Learn how to properly integrate AI APIs into your applications",
      difficulty: "Intermediate",
      duration: "50 min",
      category: "API",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop"
    }
  ];

  const categories = ["All", "AI Integration", "NLP", "Automation", "ML", "Data Science", "API"];
  const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

  return (
    <div className="min-h-screen bg-[#141118] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[#a89db8] bg-clip-text text-transparent">
            Tutorials
          </h1>
          <p className="text-xl text-[#a89db8] max-w-3xl mx-auto">
            Step-by-step guides to help you master AI and automation technologies. From beginner basics to advanced implementations.
          </p>
        </div>

        {/* Featured Tutorial */}
        {tutorials.filter(tutorial => tutorial.featured).map(tutorial => (
          <div key={tutorial.id} className="mb-16">
            <div className="bg-[#1f1c26] rounded-lg overflow-hidden border border-[#433c53]">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={tutorial.image} 
                    alt={tutorial.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-medium text-[#6211d4] bg-[#6211d4]/10 px-2 py-1 rounded-full">
                      {tutorial.category}
                    </span>
                    <span className="text-xs text-[#a89db8]">Featured</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{tutorial.title}</h2>
                  <p className="text-[#a89db8] mb-6">{tutorial.description}</p>
                  <div className="flex items-center gap-4 text-sm text-[#a89db8] mb-6">
                    <span className="flex items-center gap-1">
                      <span className={`w-2 h-2 rounded-full ${
                        tutorial.difficulty === 'Beginner' ? 'bg-green-400' :
                        tutorial.difficulty === 'Intermediate' ? 'bg-yellow-400' :
                        'bg-red-400'
                      }`}></span>
                      {tutorial.difficulty}
                    </span>
                    <span>⏱️ {tutorial.duration}</span>
                  </div>
                  <button className="bg-[#6211d4] hover:bg-[#4f0eb0] text-white font-medium py-2 px-6 rounded transition-colors">
                    Start Learning
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <select className="bg-[#2d2938] border border-[#433c53] rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#6211d4] transition-colors">
                {categories.map((category, index) => (
                  <option key={index} value={category.toLowerCase()}>{category}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Difficulty</label>
              <select className="bg-[#2d2938] border border-[#433c53] rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#6211d4] transition-colors">
                {difficulties.map((difficulty, index) => (
                  <option key={index} value={difficulty.toLowerCase()}>{difficulty}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Tutorials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.filter(tutorial => !tutorial.featured).map((tutorial) => (
            <article key={tutorial.id} className="bg-[#1f1c26] rounded-lg overflow-hidden border border-[#433c53] hover:border-[#6211d4] transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={tutorial.image} 
                  alt={tutorial.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-[#6211d4] bg-[#6211d4]/10 px-2 py-1 rounded-full">
                    {tutorial.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{tutorial.title}</h3>
                <p className="text-[#a89db8] text-sm mb-4">{tutorial.description}</p>
                
                <div className="flex items-center justify-between text-sm text-[#a89db8] mb-4">
                  <span className="flex items-center gap-1">
                    <span className={`w-2 h-2 rounded-full ${
                      tutorial.difficulty === 'Beginner' ? 'bg-green-400' :
                      tutorial.difficulty === 'Intermediate' ? 'bg-yellow-400' :
                      'bg-red-400'
                    }`}></span>
                    {tutorial.difficulty}
                  </span>
                  <span>⏱️ {tutorial.duration}</span>
                </div>
                
                <button className="w-full bg-[#6211d4] hover:bg-[#4f0eb0] text-white font-medium py-2 px-4 rounded transition-colors">
                  Start Tutorial
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Learning Path */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Learning Paths</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-[#2d1a4a] to-[#1a1620] rounded-lg p-6 border border-[#433c53]">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-lg font-bold mb-2">AI Fundamentals</h3>
              <p className="text-[#a89db8] text-sm mb-4">Start your AI journey with the basics</p>
              <div className="space-y-2 text-xs text-[#a89db8]">
                <div>• Introduction to AI</div>
                <div>• Data Preprocessing</div>
                <div>• Basic ML Models</div>
              </div>
              <button className="mt-4 bg-[#6211d4] hover:bg-[#4f0eb0] text-white font-medium py-2 px-4 rounded transition-colors">
                Start Path
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-[#2d1a4a] to-[#1a1620] rounded-lg p-6 border border-[#433c53]">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-lg font-bold mb-2">Automation Expert</h3>
              <p className="text-[#a89db8] text-sm mb-4">Master business process automation</p>
              <div className="space-y-2 text-xs text-[#a89db8]">
                <div>• RPA Basics</div>
                <div>• Workflow Design</div>
                <div>• Advanced Automation</div>
              </div>
              <button className="mt-4 bg-[#6211d4] hover:bg-[#4f0eb0] text-white font-medium py-2 px-4 rounded transition-colors">
                Start Path
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-[#2d1a4a] to-[#1a1620] rounded-lg p-6 border border-[#433c53]">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="text-lg font-bold mb-2">NLP Specialist</h3>
              <p className="text-[#a89db8] text-sm mb-4">Build intelligent language applications</p>
              <div className="space-y-2 text-xs text-[#a89db8]">
                <div>• Text Processing</div>
                <div>• Chatbot Development</div>
                <div>• Advanced NLP</div>
              </div>
              <button className="mt-4 bg-[#6211d4] hover:bg-[#4f0eb0] text-white font-medium py-2 px-4 rounded transition-colors">
                Start Path
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorials; 