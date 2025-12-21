import React from 'react';
import { 
  Rocket, 
  Shield, 
  Zap, 
  ChevronRight, 
  Github, 
  Twitter, 
  Layers,
  ArrowRight
} from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="w-full h-full bg-neutral-950 text-white rounded-xl overflow-y-auto overflow-x-hidden flex flex-col border border-neutral-800">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-neutral-800 bg-neutral-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Layers size={20} />
          </div>
          <span>NEXUS</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-neutral-400 font-medium">
          <a href="#" className="hover:text-white transition-colors">Features</a>
          <a href="#" className="hover:text-white transition-colors">Solution</a>
          <a href="#" className="hover:text-white transition-colors">Resources</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-neutral-400 hover:text-white transition-colors font-medium">
            Sign In
          </button>
          <button className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-neutral-200 transition-colors flex items-center gap-2">
            Get Started <ChevronRight size={16} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 pt-20 pb-32 text-center relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          New: AI-Powered Analytics v2.0
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl mb-6 bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent">
          Accelerate your workflow with modern engineering
        </h1>
        
        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          The all-in-one platform for high-performance teams. Deploy faster, scale instantly, and focus on building what matters.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2">
            Start Building Free <ArrowRight size={20} />
          </button>
          <button className="bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
            Documentation
          </button>
        </div>

        {/* Hero Visual Mockup */}
        <div className="mt-20 w-full max-w-5xl mx-auto rounded-2xl border border-neutral-800 bg-neutral-900/50 p-2 backdrop-blur-sm shadow-2xl relative">
          <div className="w-full aspect-video rounded-xl bg-neutral-950 flex items-center justify-center border border-neutral-800 overflow-hidden">
             <div className="grid grid-cols-12 w-full h-full p-4 gap-4">
                <div className="col-span-3 border-r border-neutral-800 pr-4 flex flex-col gap-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className={`h-8 rounded-lg ${i === 1 ? 'bg-blue-600/20' : 'bg-neutral-900'}`}></div>
                  ))}
                </div>
                <div className="col-span-9 flex flex-col gap-4">
                  <div className="h-12 w-1/3 bg-neutral-900 rounded-lg"></div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-32 bg-neutral-900 rounded-xl"></div>
                    <div className="h-32 bg-neutral-900 rounded-xl"></div>
                    <div className="h-32 bg-neutral-900 rounded-xl"></div>
                  </div>
                  <div className="flex-1 bg-neutral-900 rounded-xl"></div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-8 py-32 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for performance</h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              We've obsessed over the details so you don't have to. Every feature is engineered for maximum efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-blue-500/50 transition-colors group">
              <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                <Zap size={24} fill="currentColor" />
              </div>
              <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
              <p className="text-neutral-400 leading-relaxed">
                Optimized at every level to ensure your users get the fastest experience possible. 0ms latency goals.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-blue-500/50 transition-colors group">
              <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Secure by Default</h3>
              <p className="text-neutral-400 leading-relaxed">
                Enterprise-grade security baked into the core. Your data and your customers' data stay protected.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-blue-500/50 transition-colors group">
              <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                <Rocket size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Auto Scaling</h3>
              <p className="text-neutral-400 leading-relaxed">
                Don't worry about traffic spikes. Our infrastructure scales automatically to meet any demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-20 bg-black border-t border-neutral-900 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Layers size={20} />
            </div>
            <span>NEXUS</span>
          </div>
          
          <div className="flex gap-8 text-neutral-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:text-white cursor-pointer transition-colors">
              <Twitter size={18} />
            </div>
            <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:text-white cursor-pointer transition-colors">
              <Github size={18} />
            </div>
          </div>
        </div>
        <div className="text-center mt-12 text-neutral-600 text-sm">
          © 2024 Nexus Technologies Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
