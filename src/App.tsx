import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SearchSection from './components/SearchSection';
import IntelligenceGrid from './components/IntelligenceGrid';
import KnowledgeGraph from './components/KnowledgeGraph';
import MobileNav from './components/MobileNav';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50/20">
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 lg:ml-64 pb-24 lg:pb-8">
          <SearchSection />
          <IntelligenceGrid />
          <KnowledgeGraph />
        </main>
      </div>

      <MobileNav />
    </div>
  );
}

export default App;
