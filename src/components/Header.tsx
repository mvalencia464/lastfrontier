import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/image.png" 
              alt="Last Frontier Lawn Company" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-brand-light transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-brand-light transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-brand-light transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-brand-light transition-colors">
              Reviews
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-brand-light transition-colors">
              Contact
            </button>
            <a href="tel:907-440-7160" className="flex items-center bg-gradient-to-r from-brand-light to-brand-dark text-white px-4 py-2 rounded-lg hover:from-brand-dark hover:to-brand-light transition-all duration-300">
              <Phone className="w-4 h-4 mr-2" />
              907-440-7160
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-brand-light transition-colors text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-brand-light transition-colors text-left">
                About
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-brand-light transition-colors text-left">
                Gallery
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-brand-light transition-colors text-left">
                Reviews
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-brand-light transition-colors text-left">
                Contact
              </button>
              <a href="tel:907-440-7160" className="flex items-center bg-gradient-to-r from-brand-light to-brand-dark text-white px-4 py-2 rounded-lg hover:from-brand-dark hover:to-brand-light transition-all duration-300 w-fit">
                <Phone className="w-4 h-4 mr-2" />
                907-440-7160
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;