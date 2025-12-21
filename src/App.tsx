import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Shield, Zap, ChevronRight, Github } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col bg-background rounded-xl overflow-y-auto overflow-x-hidden border border-white/5">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Rocket className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight">Vortex</span>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-white/60">
          <a href="#" className="hover:text-white transition-colors">Solutions</a>
          <a href="#" className="hover:text-white transition-colors">Resources</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
        </div>
        <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/90 transition-all">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs font-medium text-primary mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span>v2.0 is now live</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl leading-[1.1] mb-8"
        >
          Build the future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">digital experiences</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-white/40 max-w-2xl mb-10 leading-relaxed"
        >
          A high-performance template powered by Vite, React, and Tailwind CSS. 
          Craft stunning interfaces with unparalleled speed and developer experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <button className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-primary/90 transition-all group">
            <span>Start Building</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-white/10 transition-all">
            <Github className="w-4 h-4" />
            <span>Star on GitHub</span>
          </button>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 w-full max-w-5xl mb-12"
        >
          {[
            { icon: <Zap className="w-6 h-6 text-yellow-400" />, title: "Instant HMR", desc: "Lightning fast hot module replacement for rapid development." },
            { icon: <Shield className="w-6 h-6 text-emerald-400" />, title: "Type Safe", desc: "Full TypeScript support ensures robust and bug-free codebases." },
            { icon: <Rocket className="w-6 h-6 text-primary" />, title: "Production Ready", desc: "Optimized builds with Tailwind's JIT and Vite's rollup pipeline." },
          ].map((feature, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl text-left hover:border-primary/50 transition-colors group">
              <div className="mb-4 p-3 bg-white/5 w-fit rounded-xl group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 px-8 py-10 text-center text-white/20 text-sm">
        <p>&copy; 2024 Vortex Studio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;