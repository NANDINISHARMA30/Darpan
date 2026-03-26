import { Brain, Network, FileText, BarChart3 } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="hidden lg:block fixed left-0 top-20 h-[calc(100vh-5rem)] w-64 bg-white/50 backdrop-blur-sm border-r border-gray-200/50 p-6">
      <div className="flex flex-col h-full">
        <div className="mb-6">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Systems Ready
          </p>
          <nav className="space-y-1">
            <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-violet-600 rounded-xl shadow-lg shadow-indigo-500/30 transition-all">
              <Brain className="w-5 h-5" />
              Intelligence
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all">
              <Network className="w-5 h-5" />
              Knowledge Graph
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all">
              <FileText className="w-5 h-5" />
              Evidence
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all">
              <BarChart3 className="w-5 h-5" />
              Statistics
            </button>
          </nav>
        </div>

        <div className="mt-auto">
          <div className="bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-100 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-gray-700">System Health</span>
              <span className="text-xs font-mono font-semibold text-indigo-600">98.7</span>
            </div>
            <div className="w-full bg-white rounded-full h-2 overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-500 to-violet-500 h-2 rounded-full transition-all duration-1000" style={{ width: '98.7%' }}></div>
            </div>
            <p className="text-xs text-gray-500 mt-3">Neural Accuracy</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
