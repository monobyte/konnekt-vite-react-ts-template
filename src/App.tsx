export default function App() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-slate-50 border-2 border-dashed border-slate-200 rounded-lg">
      <h1 className="text-4xl font-bold text-slate-800 mb-4">
        Vite + React + TS
      </h1>
      <p className="text-slate-600 mb-8">
        Tailwind CSS is configured and ready.
      </p>
      <div className="flex gap-4">
        <div className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm">
          Full Viewport Layout
        </div>
        <div className="px-4 py-2 bg-purple-500 text-white rounded-md shadow-sm">
          10px Safe Padding
        </div>
      </div>
    </div>
  )
}
