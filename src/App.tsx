import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlogPost from './components/BlogPost';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'blog'>('home');

  if (currentPage === 'blog') {
    return <BlogPost onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="min-h-screen">
      <Header onNavigateToBlog={() => setCurrentPage('blog')} />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;