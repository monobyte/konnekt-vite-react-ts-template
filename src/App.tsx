import React from 'react';
import { ArrowRight, Box, Cpu, Globe, Zap } from 'lucide-react';

export default function App() {
  return (
    <div className="w-full h-full min-h-[calc(100vh-20px)] flex flex-col bg-zinc-900/50 rounded-2xl border border-zinc-800 overflow-hidden">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-zinc-800 bg-zinc-950/50 backdrop-blur-md">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
            <Box className="w-5 h-5 text-white" />
          </div>
          <span>Konnekt: <span className="text-red-500">FORGE</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#" className="hover:text-white transition-colors">Platform</a>
          <a href="#" className="hover:text-white transition-colors">Solutions</a>
          <a href="#" className="hover:text-white transition-colors">Enterprise</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
        </div>
        <button className="px-5 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-zinc-200 transition-colors">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col">
        <section className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center relative overflow-hidden">
          {/* Background Blobs */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full -z-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px]" />
          </div>

          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700 text-xs font-medium text-indigo-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              v2.0 is now live
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              Deploy at the edge of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">innovation</span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              Our high-performance infrastructure allows you to build, scale, and secure your applications globally with unprecedented speed.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 group">
                Start Building Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-xl transition-all border border-zinc-700">
                Documentation
              </button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="px-8 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <FeatureCard 
              icon={<Cpu className="w-6 h-6" />}
              title="Next-Gen Compute"
              description="Low-latency execution environments optimized for modern frameworks."
            />
            <FeatureCard 
              icon={<Globe className="w-6 h-6" />}
              title="Global Network"
              description="Distributed nodes in over 100+ locations for sub-50ms latency."
            />
            <FeatureCard 
              icon={<Zap className="w-6 h-6" />}
              title="Instant Scaling"
              description="Scale from zero to millions of requests without manual configuration."
            />
          </div>
        </section>
      </main>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors group">
      <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="mt-6 font-bold text-xl text-white">{title}</h3>
      <p className="mt-2 text-zinc-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
