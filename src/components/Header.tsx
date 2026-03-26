import { BarChart3, Database } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-indigo-100/50 shadow-lg shadow-indigo-500/5">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-lg flex items-center justify-center transform rotate-45">
              <div className="transform -rotate-45">
                <Database className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Darpan
              </h1>
              <p className="text-[10px] sm:text-xs text-gray-500 hidden xs:block">Global Intelligence Engine</p>
            </div>
            <div className="ml-2 hidden md:flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-200 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-green-700">Live</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            <button className="px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
              Intelligence
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors">
              Knowledge Graph
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors">
              Evidence
            </button>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button className="p-2 sm:px-4 sm:py-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-all">
              <BarChart3 className="w-5 h-5" />
            </button>
            <button className="px-3 sm:px-6 py-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-indigo-500/50 transition-all transform hover:scale-105">
              <span className="hidden sm:inline">Ingest Data</span>
              <span className="sm:hidden">+</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
