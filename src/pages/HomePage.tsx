import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import SearchSection from '../components/SearchSection';
import IntelligenceGrid from '../components/IntelligenceGrid';
import KnowledgeGraph from '../components/KnowledgeGraph';
import EvidencePanel from '../components/EvidencePanel';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

export default function HomePage() {
  const [searchParams] = useSearchParams();
  const activePanel = searchParams.get('panel') ?? 'intelligence';
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50/50">
      <Header 
        onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)} 
        isSidebarOpen={isSidebarOpen}
      />

      <div className="flex relative">
        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        <main className="flex-1 w-full p-4 sm:p-6 lg:p-8 min-h-[calc(100vh-5rem)]">
          <div className="max-w-screen-2xl mx-auto">
            {activePanel === 'statistics' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <IntelligenceGrid mode="statistics" />
              </div>
            )}
            {activePanel === 'knowledge-graph' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <KnowledgeGraph />
              </div>
            )}
            {activePanel === 'evidence' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <EvidencePanel />
              </div>
            )}
            {activePanel === 'intelligence' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <SearchSection />
                <IntelligenceGrid />
                <KnowledgeGraph />
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
