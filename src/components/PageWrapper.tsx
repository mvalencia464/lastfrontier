'use client';

import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import QuoteModal from './QuoteModal';

interface PageWrapperProps {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-stone-50 selection:bg-emerald-200 selection:text-emerald-900">
      <Header onQuoteClick={() => setIsQuoteModalOpen(true)} />
      
      <main className="flex-grow">
        {children}
      </main>

      <Footer onQuoteClick={() => setIsQuoteModalOpen(true)} />

      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </div>
  );
}
