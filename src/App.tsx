import { Zap } from 'lucide-react';

function App() {
  return (
    <div className="w-screen h-screen p-[10px] box-border bg-slate-50">
      <div className="w-full h-full flex flex-col items-center justify-center bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="flex flex-col items-center gap-4">
          <div className="p-4 bg-yellow-100 rounded-full">
            <Zap className="w-12 h-12 text-yellow-600 fill-yellow-600" />
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
              Vite + React
            </h1>
            <p className="text-slate-500 mt-2 text-lg">
              TypeScript & Tailwind CSS Template
            </p>
          </div>
          <div className="flex gap-3 mt-6">
            <code className="px-3 py-1 bg-slate-100 rounded text-slate-600 font-mono text-sm border border-slate-200">
              src/App.tsx
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
