import { useState } from 'react'
import { Rocket, Github, Zap, Shield } from 'lucide-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full h-full flex flex-col gap-4">
      {/* Header */}
      <header className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-teal-600 p-2 rounded-lg">
            <Rocket className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl font-bold text-white">Konnekt: FORGE</h1>
        </div>
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 hover:bg-gray-800 rounded-full transition-colors"
        >
          <Github className="w-6 h-6 text-gray-400" />
        </a>
      </header>

      {/* Main Content */}
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Column - Hero */}
        <section className="bg-gray-900 border border-gray-800 rounded-xl p-8 shadow-sm flex flex-col justify-center items-start">
          <h2 className="text-4xl font-extrabold text-white mb-4 leading-tight">
            Build your next idea <span className="text-teal-500">faster</span>.
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-md">
            A minimalist starting point with Vite, React, TypeScript, and Tailwind CSS. Pre-configured for speed and type safety.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button 
              onClick={() => setCount((count) => count + 1)}
              className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4 fill-current" />
              Counter: {count}
            </button>
            <button className="px-6 py-3 bg-gray-800 border border-gray-700 hover:border-gray-600 text-gray-200 font-semibold rounded-lg transition-all shadow-sm flex items-center justify-center gap-2">
              <Shield className="w-4 h-4" />
              Docs
            </button>
          </div>
        </section>

        {/* Right Column - Tech Stack */}
        <section className="bg-gray-900 border border-gray-800 rounded-xl p-8 shadow-sm flex flex-col text-white">
          <h3 className="text-xl font-bold mb-6 text-teal-400 uppercase tracking-wider">The Stack</h3>
          <div className="space-y-6 flex-1">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 shrink-0 bg-teal-500/10 rounded flex items-center justify-center text-teal-400 border border-teal-500/20 font-bold">V</div>
              <div>
                <h4 className="font-semibold text-lg">Vite</h4>
                <p className="text-gray-400 text-sm">Next Generation Frontend Tooling</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 shrink-0 bg-cyan-500/10 rounded flex items-center justify-center text-cyan-400 border border-cyan-500/20 font-bold">R</div>
              <div>
                <h4 className="font-semibold text-lg">React</h4>
                <p className="text-gray-400 text-sm">A JavaScript library for building user interfaces</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 shrink-0 bg-blue-400/10 rounded flex items-center justify-center text-blue-300 border border-blue-400/20 font-bold">TS</div>
              <div>
                <h4 className="font-semibold text-lg">TypeScript</h4>
                <p className="text-gray-400 text-sm">Typed JavaScript at Scale</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 shrink-0 bg-teal-500/10 rounded flex items-center justify-center text-teal-400 border border-teal-500/20 font-bold">T</div>
              <div>
                <h4 className="font-semibold text-lg">Tailwind CSS</h4>
                <p className="text-gray-400 text-sm">A utility-first CSS framework</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-800 text-xs text-gray-500 flex justify-between items-center">
            <span>Ready to develop</span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Live Preview Active
            </span>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border border-gray-800 rounded-xl px-6 py-4 shadow-sm flex items-center justify-center text-sm text-gray-500">
        Template created for rapid prototyping • {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default App
