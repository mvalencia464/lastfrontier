import React from 'react';
import { Phone, Mail, MapPin, Facebook } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/image.png" 
                alt="Last Frontier Lawn Company" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Professional year-round property services for all four seasons in Alaska. 
              From spring cleanups to winter snow removal, we keep your property beautiful and accessible.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-light" />
                <a href="tel:907-440-7160" className="text-gray-300 hover:text-white transition-colors">
                  907-440-7160
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-light" />
                <a href="mailto:lastfrontierlawnco@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  lastfrontierlawnco@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-brand-light" />
                <span className="text-gray-300">Serving Anchorage & Palmer, Alaska</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('reviews')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Spring Cleanups</li>
              <li>Lawn Mowing</li>
              <li>Fall Cleanups</li>
              <li>Snow Removal</li>
              <li>Fertilizer Application</li>
              <li>Weed Control</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            Copyright 2023 Last Frontier Lawn Company. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 text-sm">Follow us:</span>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Like us on Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;