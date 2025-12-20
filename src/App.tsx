import React from 'react';
import { Globe } from 'lucide-react';

function App() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-slate-50 rounded-xl border border-slate-200 shadow-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="p-4 bg-blue-100 rounded-full">
          <Globe className="w-12 h-12 text-blue-600 animate-pulse" />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
          Hello World
        </h1>
        <p className="text-slate-500 text-lg">
          Welcome to your new React application.
        </p>
      </div>
    </div>
  );
}

export default App;
