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
import BlogList from './components/BlogList';
import SnowMoldPost from './components/blog/SnowMoldPost';
import DIYVsProfessionalPost from './components/blog/DIYVsProfessionalPost';
import LawnPestsPost from './components/blog/LawnPestsPost';
import SpringChecklistPost from './components/blog/SpringChecklistPost';
import AfterWinterPost from './components/blog/AfterWinterPost';
import MowingGuidePost from './components/blog/MowingGuidePost';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'blog-list' | 'blog-post'>('home');
  const [selectedBlogPost, setSelectedBlogPost] = useState<string>('');

  const handleNavigateToBlog = () => {
    setCurrentPage('blog-list');
  };

  const handleSelectPost = (postId: string) => {
    setSelectedBlogPost(postId);
    setCurrentPage('blog-post');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSelectedBlogPost('');
  };

  const handleBackToBlogList = () => {
    setCurrentPage('blog-list');
    setSelectedBlogPost('');
  };

  if (currentPage === 'blog-list') {
    return <BlogList onBack={handleBackToHome} onSelectPost={handleSelectPost} />;
  }

  if (currentPage === 'blog-post') {
    switch (selectedBlogPost) {
      case 'winter-prep':
        return <BlogPost onBack={handleBackToBlogList} />;
      case 'snow-mold':
        return <SnowMoldPost onBack={handleBackToBlogList} />;
      case 'diy-vs-professional':
        return <DIYVsProfessionalPost onBack={handleBackToBlogList} />;
      case 'lawn-pests':
        return <LawnPestsPost onBack={handleBackToBlogList} />;
      case 'spring-checklist':
        return <SpringChecklistPost onBack={handleBackToBlogList} />;
      case 'after-winter':
        return <AfterWinterPost onBack={handleBackToBlogList} />;
      case 'mowing-guide':
        return <MowingGuidePost onBack={handleBackToBlogList} />;
      default:
        return <BlogList onBack={handleBackToHome} onSelectPost={handleSelectPost} />;
    }
  }

  return (
    <div className="min-h-screen">
      <Header onNavigateToBlog={handleNavigateToBlog} />
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