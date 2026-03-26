import { Search, Network, FileText, BarChart3 } from 'lucide-react';

export default function MobileNav() {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-t border-gray-200/50 shadow-2xl shadow-gray-900/10 rounded-t-3xl pb-safe">
      <div className="flex items-center justify-around px-2 py-3">
        <button className="flex flex-col items-center gap-1 px-3 py-2 text-indigo-600 transition-all active:scale-90">
          <div className="p-2 bg-indigo-100 rounded-xl">
            <Search className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-semibold">Query</span>
        </button>
        <button className="flex flex-col items-center gap-1 px-3 py-2 text-gray-600 transition-all active:scale-90">
          <div className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
            <Network className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-semibold">Graph</span>
        </button>
        <button className="flex flex-col items-center gap-1 px-3 py-2 text-gray-600 transition-all active:scale-90">
          <div className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
            <FileText className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-semibold">Source</span>
        </button>
        <button className="flex flex-col items-center gap-1 px-3 py-2 text-gray-600 transition-all active:scale-90">
          <div className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
            <BarChart3 className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-semibold">Stats</span>
        </button>
      </div>
    </nav>
  );
}
