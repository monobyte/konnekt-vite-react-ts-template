import { Zap } from 'lucide-react';

function App() {
  return (
    <div className="w-screen h-screen p-[10px] box-border bg-zinc-950 text-zinc-100">
      <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-900 rounded-xl shadow-2xl border border-zinc-800">
        <div className="flex flex-col items-center gap-4">
          <div className="p-4 bg-orange-500/10 rounded-full border border-orange-500/20">
            <Zap className="w-12 h-12 text-orange-500 fill-orange-500" />
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-black text-white tracking-tighter uppercase italic">
              Konnekt: <span className="text-red-600">FORGE</span>
            </h1>
            <p className="text-zinc-400 mt-2 text-lg font-medium">
              Next-Gen React Development Environment
            </p>
          </div>
          <div className="flex gap-3 mt-6">
            <code className="px-3 py-1 bg-zinc-800 rounded text-orange-400 font-mono text-sm border border-zinc-700">
              src/App.tsx
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
