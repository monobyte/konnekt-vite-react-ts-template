import { Rocket, Github, Cpu, Layout } from 'lucide-react';

function App() {
  return (
    <div className="w-screen h-screen p-[10px] box-border">
      <div className="w-full h-full bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="p-6 border-b border-slate-100 flex justify-between items-center bg-white">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold tracking-tight">Vite + React + TS + Tailwind</h1>
          </div>
          <div className="flex gap-3">
            <a 
              href="https://github.com" 
              target="_blank" 
              className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-full transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4 py-8">
              <h2 className="text-4xl font-extrabold text-slate-900">
                Ready to build something amazing.
              </h2>
              <p className="text-lg text-slate-600">
                A clean, efficient, and modern starter template for your next project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FeatureCard 
                icon={<Cpu className="w-6 h-6 text-indigo-600" />}
                title="TypeScript"
                description="Fully typed development experience with modern ESM."
              />
              <FeatureCard 
                icon={<Layout className="w-6 h-6 text-indigo-600" />}
                title="Tailwind CSS"
                description="Utility-first styling that stays within your HTML."
              />
              <FeatureCard 
                icon={<Rocket className="w-6 h-6 text-indigo-600" />}
                title="Fast Refresh"
                description="Instant feedback during development with HMR."
              />
            </div>

            <div className="bg-slate-900 rounded-2xl p-8 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Getting Started</h3>
                  <p className="text-slate-400">Edit src/App.tsx to begin your journey.</p>
                </div>
                <div className="flex gap-4">
                  <code className="bg-slate-800 px-4 py-2 rounded-lg text-indigo-400 font-mono text-sm">
                    pnpm install
                  </code>
                  <code className="bg-slate-800 px-4 py-2 rounded-lg text-indigo-400 font-mono text-sm">
                    pnpm dev
                  </code>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="p-4 text-center border-t border-slate-100 text-slate-400 text-xs uppercase tracking-widest bg-slate-50/50">
          Built with speed in mind &bull; 2024
        </footer>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-6 rounded-2xl border border-slate-100 bg-white hover:border-indigo-100 hover:shadow-md transition-all group">
      <div className="mb-4 bg-slate-50 w-fit p-3 rounded-xl group-hover:bg-indigo-50 transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2 text-slate-900">{title}</h3>
      <p className="text-slate-500 leading-relaxed">{description}</p>
    </div>
  );
}

export default App;
