import React from 'react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: 2024 Trends",
      excerpt: "Discover the latest AI trends that are reshaping how businesses operate and compete in the digital age.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "AI Trends",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "How to Implement RPA in Your Organization",
      excerpt: "A comprehensive guide to successfully implementing robotic process automation in your business.",
      author: "Michael Chen",
      date: "March 12, 2024",
      readTime: "8 min read",
      category: "Automation",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Machine Learning for Predictive Analytics",
      excerpt: "Learn how to leverage machine learning algorithms to predict customer behavior and optimize business decisions.",
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Machine Learning",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Building Scalable AI Infrastructure",
      excerpt: "Best practices for building and maintaining scalable AI infrastructure that grows with your business.",
      author: "David Kim",
      date: "March 8, 2024",
      readTime: "7 min read",
      category: "Infrastructure",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Natural Language Processing in Customer Service",
      excerpt: "How NLP is revolutionizing customer service and improving customer satisfaction scores.",
      author: "Lisa Wang",
      date: "March 5, 2024",
      readTime: "4 min read",
      category: "NLP",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "The ROI of AI Implementation",
      excerpt: "Understanding the return on investment when implementing AI solutions in your business.",
      author: "Robert Taylor",
      date: "March 3, 2024",
      readTime: "9 min read",
      category: "Business",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop"
    }
  ];

  const categories = ["All", "AI Trends", "Automation", "Machine Learning", "Infrastructure", "NLP", "Business"];

  return (
    <div className="min-h-screen bg-[#141118] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[#a89db8] bg-clip-text text-transparent">
            Blog
          </h1>
          <p className="text-xl text-[#a89db8] max-w-3xl mx-auto">
            Insights, tutorials, and updates from the world of AI and automation.
          </p>
        </div>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map(post => (
          <div key={post.id} className="mb-16">
            <div className="bg-[#1f1c26] rounded-lg overflow-hidden border border-[#433c53]">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-medium text-[#6211d4] bg-[#6211d4]/10 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-[#a89db8]">Featured</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                  <p className="text-[#a89db8] mb-6">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-[#a89db8] mb-6">
                    <span>By {post.author}</span>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <button className="bg-[#6211d4] hover:bg-[#4f0eb0] text-white font-medium py-2 px-6 rounded transition-colors">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0 
                    ? 'bg-[#6211d4] text-white' 
                    : 'bg-[#2d2938] text-[#a89db8] hover:bg-[#433c53]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => !post.featured).map((post) => (
            <article key={post.id} className="bg-[#1f1c26] rounded-lg overflow-hidden border border-[#433c53] hover:border-[#6211d4] transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-[#6211d4] bg-[#6211d4]/10 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-[#a89db8] text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-[#a89db8] mb-4">
                  <span>{post.author}</span>
                  <span>{post.readTime}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#a89db8]">{post.date}</span>
                  <button className="text-[#6211d4] hover:text-[#4f0eb0] font-medium text-sm transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-[#2d1a4a] to-[#1a1620] rounded-lg p-8 border border-[#433c53] text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-[#a89db8] mb-6">
              Get the latest insights on AI and automation delivered to your inbox.
            </p>
            <div className="flex max-w-md mx-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-[#1f1c26] border border-[#433c53] rounded-lg px-4 py-3 text-white placeholder-[#a89db8] focus:outline-none focus:border-[#6211d4] transition-colors"
              />
              <button className="bg-[#6211d4] hover:bg-[#4f0eb0] text-white font-medium py-3 px-6 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog; 