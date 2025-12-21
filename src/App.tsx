import React from 'react';
import { ArrowRight, Github, Rocket, Shield, Zap } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#0a0a0a] text-white rounded-lg overflow-hidden flex flex-col font-sans">
      {/* Header */}
      <nav className="flex items-center justify-between p-6 border-b border-white/10">
        <div className="flex items-center gap-2 font-bold text-xl">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Rocket size={18} />
          </div>
          <span>Konnekt: <span className="text-red-500">FORGE</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Features</a>
          <a href="#" className="hover:text-white transition-colors">Solutions</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
        </div>
        <button className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-200 transition-colors">
          Get Started
        </button>
      </nav>

      {/* Hero Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          v2.0 is now live
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
          Build faster than <br /> ever before.
        </h1>
        
        <p className="max-w-2xl text-lg text-gray-400 mb-10">
          The ultimate foundation for your next project. High performance, 
          secure by design, and crafted for developers who care about speed.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="group flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all">
            Start Building
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold border border-white/10 rounded-xl transition-all">
            <Github size={18} />
            View Source
          </button>
        </div>

        {/* Features Grid Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 w-full max-w-5xl">
          {[
            { icon: <Zap className="text-yellow-400" />, title: "Instant Load", desc: "Optimized for the modern web with zero bloat." },
            { icon: <Shield className="text-green-400" />, title: "Secure", desc: "Enterprise-grade security baked into every layer." },
            { icon: <Rocket className="text-purple-400" />, title: "Scale", desc: "From MVP to millions of users without friction." }
          ].map((feature, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-left hover:border-white/20 transition-colors">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="p-6 text-center text-gray-500 text-sm border-t border-white/5">
        © 2024 Konnekt Forge. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
