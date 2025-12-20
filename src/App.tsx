import React from 'react';
import { ArrowRight, Zap, Shield, Globe } from 'lucide-react';

export default function App() {
  return (
    <div className="w-full h-full flex flex-col bg-neutral-950 rounded-xl overflow-hidden border border-neutral-800">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Zap className="text-white w-5 h-5 fill-current" />
          </div>
          <span className="text-xl font-bold tracking-tight">Vortex</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
          <a href="#" className="hover:text-white transition-colors">Platform</a>
          <a href="#" className="hover:text-white transition-colors">Solutions</a>
          <a href="#" className="hover:text-white transition-colors">Developers</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
        </div>
        <button className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-neutral-200 transition-colors">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          v4.0 is now live
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent">
          The next generation <br /> of digital interfaces.
        </h1>
        
        <p className="max-w-2xl text-lg text-neutral-400 mb-10 leading-relaxed">
          Build stunning, high-performance applications with our modern toolkit. 
          Engineered for speed, designed for beauty, and ready for the future.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="group px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all flex items-center gap-2">
            Start Building
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white font-semibold rounded-xl transition-all">
            View Documentation
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 w-full max-w-5xl">
          {[
            { icon: Zap, title: "Ultra Fast", desc: "Built with the latest Vite and Tailwind v4 engine." },
            { icon: Shield, title: "Secure", desc: "Enterprise-grade security baked into every component." },
            { icon: Globe, title: "Global", desc: "Deploy to the edge with zero configuration." }
          ].map((feature, i) => (
            <div key={i} className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 text-left hover:border-neutral-700 transition-colors">
              <feature.icon className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="py-8 px-8 border-t border-neutral-900 text-neutral-500 text-xs flex justify-between items-center">
        <p>© 2025 Vortex Inc. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </div>
      </footer>
    </div>
  );
}
