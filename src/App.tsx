import React from 'react';
import { Rocket, Shield, Zap, ChevronRight, Github } from 'lucide-react';

export default function App() {
  return (
    <div className="h-full w-full flex flex-col overflow-y-auto rounded-xl bg-slate-900 border border-slate-800 shadow-2xl no-scrollbar">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Rocket className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight">NovaCore</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#" className="hover:text-blue-400 transition-colors">Features</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Solutions</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Pricing</a>
          <a href="#" className="hover:text-blue-400 transition-colors">About</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-medium hover:text-blue-400 transition-colors">Sign In</button>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-blue-900/20">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="px-6 py-20 md:py-32 flex flex-col items-center text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            V1.0 NOW AVAILABLE
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
            Build the future of <br /> 
            <span className="text-blue-500">scalable web apps</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
            NovaCore provides the industrial-grade foundation your startup needs. Ship faster with pre-built components, global edge scaling, and enterprise security.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-200 transition-all group">
              Start Building 
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-slate-800 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-700 transition-all border border-slate-700">
              <Github className="w-5 h-5" />
              View on GitHub
            </button>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 w-full text-left">
            <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 transition-colors group">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <Zap className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
              <p className="text-slate-400 leading-relaxed">
                Optimized for performance with Zero-JS payloads and edge-first delivery mechanisms.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/50 transition-colors group">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                <Shield className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Secure by Design</h3>
              <p className="text-slate-400 leading-relaxed">
                Enterprise-grade security protocols baked into every layer of the architecture.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/50 transition-colors group">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                <Rocket className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Infinite Scale</h3>
              <p className="text-slate-400 leading-relaxed">
                Automatically scales from side projects to global platforms without touching a line of code.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="p-10 border-t border-slate-800 bg-slate-900/80">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 opacity-50">
            <Rocket className="w-4 h-4" />
            <span className="font-bold text-sm">NovaCore © 2024</span>
          </div>
          <div className="flex gap-8 text-xs font-medium text-slate-500">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
