import React from 'react';
import { useLibrary, Bookmark } from '../contexts/LibraryContext';
import { Library, Trash2, ExternalLink, FileText, BarChart3, Clock, ArrowRight } from 'lucide-react';

export default function LibraryPanel() {
  const { bookmarks, removeBookmark } = useLibrary();

  const getIcon = (type: Bookmark['type']) => {
    switch (type) {
      case 'trend': return <BarChart3 className="w-5 h-5 text-indigo-500" />;
      case 'evidence': return <FileText className="w-5 h-5 text-violet-500" />;
      case 'report': return <ExternalLink className="w-5 h-5 text-cyan-500" />;
    }
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getSourceUrl = (bookmark: Bookmark) => {
    if (bookmark.type === 'evidence') {
      return bookmark.data.sourceUrl || 'https://www.reuters.com/business/';
    }
    if (bookmark.type === 'trend') {
      // Mapping trend labels to relevant sources if not provided
      const label = bookmark.data.label?.toLowerCase() || '';
      if (label.includes('signal')) return 'https://www.reuters.com/business/';
      if (label.includes('source')) return 'https://www.bloomberg.com/markets';
      if (label.includes('confidence')) return 'https://www.imf.org/en/Data';
      return 'https://www.reuters.com/business/';
    }
    return 'https://www.reuters.com/business/';
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200">
          <Library className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Personal Library</h2>
          <p className="text-gray-500">Your bookmarked intelligence and resources</p>
        </div>
      </div>

      {bookmarks.length === 0 ? (
        <div className="bg-white/70 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-12 text-center">
          <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <Library className="w-10 h-10 text-gray-300" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">No bookmarks yet</h3>
          <p className="text-gray-500 max-w-sm mx-auto">
            Items you bookmark across the dashboard will appear here for quick access.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookmarks.map((bookmark) => (
            <div 
              key={bookmark.id}
              className="group bg-white/70 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-6 hover:shadow-xl hover:shadow-indigo-500/10 transition-all border-l-4 border-l-indigo-500"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-indigo-50 transition-colors">
                    {getIcon(bookmark.type)}
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    {bookmark.type}
                  </span>
                </div>
                <button 
                  onClick={() => removeBookmark(bookmark.id)}
                  className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <h4 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                {bookmark.title}
              </h4>

              <div className="flex items-center gap-4 text-xs text-gray-500 mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {formatDate(bookmark.timestamp)}
                </div>
                <a 
                  href={getSourceUrl(bookmark)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto flex items-center gap-1 text-indigo-600 font-bold hover:underline"
                >
                  View Source
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
