import React from 'react';
import { Globe } from '../components/Globe';

const GlobeDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Interactive 3D Globe
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience our interactive 3D globe powered by the Cobe library. 
            Drag to rotate, explore the markers, and see the world in a new dimension.
          </p>
        </div>

        <div className="relative h-[600px] w-full max-w-4xl mx-auto">
          <Globe className="w-full h-full" />
          
          {/* Overlay with information */}
          <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
            <h3 className="font-semibold mb-2">Global Presence</h3>
            <p className="text-sm text-gray-300">
              Our services reach across 10 major cities worldwide
            </p>
          </div>

          {/* Interactive instructions */}
          <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
            <h3 className="font-semibold mb-2">How to Interact</h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Drag to rotate the globe</li>
              <li>• Click and hold to grab</li>
              <li>• Explore the glowing markers</li>
            </ul>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Global Coverage</h3>
            <p className="text-gray-300">
              Our services span across major cities worldwide, ensuring comprehensive coverage for all your needs.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Real-time Updates</h3>
            <p className="text-gray-300">
              Experience smooth, real-time interactions with our optimized rendering engine and responsive design.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Mobile Optimized</h3>
            <p className="text-gray-300">
              Fully responsive design that works seamlessly on desktop, tablet, and mobile devices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobeDemo; 