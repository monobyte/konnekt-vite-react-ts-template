import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Globe, Github, Twitter, Linkedin } from 'lucide-react';
import { cn } from './lib/utils';

const Navbar = () => (
  <nav className="flex items-center justify-between py-6 px-8 bg-zinc-900/50 backdrop-blur-md rounded-2xl border border-zinc-800 mb-6">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
        <Zap className="text-white w-5 h-5 fill-current" />
      </div>
      <span className="font-bold text-xl tracking-tight text-white">FORGE</span>
    </div>
    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
      <a href="#" className="hover:text-white transition-colors">Features</a>
      <a href="#" className="hover:text-white transition-colors">Solutions</a>
      <a href="#" className="hover:text-white transition-colors">Documentation</a>
      <a href="#" className="hover:text-white transition-colors">Pricing</a>
    </div>
    <button className="bg-white text-black px-5 py-2 rounded-full font-semibold text-sm hover:bg-zinc-200 transition-colors">
      Get Started
    </button>
  </nav>
);

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="p-8 bg-zinc-900/50 rounded-3xl border border-zinc-800 hover:border-indigo-500/50 transition-colors group">
    <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="text-indigo-400 w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-zinc-400 leading-relaxed">{description}</p>
  </div>
);

export default function App() {
  return (
    <div className="w-full h-full flex flex-col overflow-y-auto scrollbar-hide">
      <Navbar />
      
      <main className="flex-1 flex flex-col gap-6">
        {/* Hero Section */}
        <section className="relative flex-1 min-h-[500px] flex items-center justify-center rounded-[2rem] overflow-hidden bg-zinc-900 border border-zinc-800">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent opacity-50" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-6">
                Now in Private Beta
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[1.1]">
                Build faster with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                  Modern Infrastructure.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                The most advanced development platform for modern teams. Ship higher quality software without managing servers.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-2 group">
                  Start Building Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="w-full sm:w-auto px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white rounded-2xl font-bold transition-all">
                  View Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard 
            icon={Zap}
            title="Blazing Fast"
            description="Optimized for performance with global edge deployment and instant updates."
          />
          <FeatureCard 
            icon={Shield}
            title="Enterprise Secure"
            description="Built-in security protocols ensuring your data and applications stay protected."
          />
          <FeatureCard 
            icon={Globe}
            title="Global Scale"
            description="Deploy your applications to a global network of regions with a single click."
          />
        </section>

        {/* Footer */}
        <footer className="py-12 px-8 bg-zinc-950 rounded-[2rem] border border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-8 mt-auto">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-zinc-800 rounded flex items-center justify-center">
              <Zap className="text-zinc-400 w-4 h-4 fill-current" />
            </div>
            <span className="font-bold text-zinc-400">FORGE © 2024</span>
          </div>
          <div className="flex items-center gap-6">
            <Github className="w-5 h-5 text-zinc-500 hover:text-white cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-zinc-500 hover:text-white cursor-pointer transition-colors" />
            <Linkedin className="w-5 h-5 text-zinc-500 hover:text-white cursor-pointer transition-colors" />
          </div>
        </footer>
      </main>
    </div>
  );
}
