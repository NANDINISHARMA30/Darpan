import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Bookmark {
  id: string;
  type: 'trend' | 'evidence' | 'report';
  title: string;
  timestamp: string;
  data: any;
}

interface LibraryContextType {
  bookmarks: Bookmark[];
  addBookmark: (bookmark: Omit<Bookmark, 'timestamp'>) => void;
  removeBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;
}

const LibraryContext = createContext<LibraryContextType | undefined>(undefined);

export function LibraryProvider({ children }: { children: React.ReactNode }) {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('darpan_library');
    if (saved) {
      setBookmarks(JSON.parse(saved));
    }
  }, []);

  const addBookmark = (bookmark: Omit<Bookmark, 'timestamp'>) => {
    const newBookmark: Bookmark = {
      ...bookmark,
      timestamp: new Date().toISOString(),
    };
    const updated = [newBookmark, ...bookmarks];
    setBookmarks(updated);
    localStorage.setItem('darpan_library', JSON.stringify(updated));
  };

  const removeBookmark = (id: string) => {
    const updated = bookmarks.filter(b => b.id !== id);
    setBookmarks(updated);
    localStorage.setItem('darpan_library', JSON.stringify(updated));
  };

  const isBookmarked = (id: string) => bookmarks.some(b => b.id === id);

  return (
    <LibraryContext.Provider value={{ bookmarks, addBookmark, removeBookmark, isBookmarked }}>
      {children}
    </LibraryContext.Provider>
  );
}

export function useLibrary() {
  const context = useContext(LibraryContext);
  if (context === undefined) {
    throw new Error('useLibrary must be used within a LibraryProvider');
  }
  return context;
}
