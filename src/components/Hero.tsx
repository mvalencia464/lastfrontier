import React from 'react';
import { Calendar, Video, CheckCircle } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Snow Removal & Lawn Care in 
              <span className="bg-gradient-to-r from-brand-light to-brand-dark bg-clip-text text-transparent"> Anchorage, Palmer</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Year-round property services for all four seasons in Alaska. Professional, reliable, and convenient.
            </p>
            
            {/* Key Benefits */}
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <Calendar className="w-8 h-8 text-brand-light" />
                <div>
                  <h3 className="font-semibold text-gray-900">Book Online</h3>
                  <p className="text-sm text-gray-600">In 60 seconds</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Video className="w-8 h-8 text-brand-dark" />
                <div>
                  <h3 className="font-semibold text-gray-900">Quick Estimate</h3>
                  <p className="text-sm text-gray-600">Upload video</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-8 h-8 text-brand-light" />
                <div>
                  <h3 className="font-semibold text-gray-900">All Seasons</h3>
                  <p className="text-sm text-gray-600">Year-round care</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-brand-light to-brand-dark text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-brand-dark hover:to-brand-light transition-all duration-300 shadow-lg"
              >
                Get Free Estimate
              </button>
              <a 
                href="tel:907-440-7160"
                className="border-2 border-brand-light text-brand-dark px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gradient-to-r hover:from-brand-light hover:to-brand-dark hover:text-white hover:border-transparent transition-all duration-300 text-center"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <img 
              src="/SCR-20250826-sttt.webp"
              alt="Professional lawn care service"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-light/20 to-brand-dark/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-brand-dark" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Professional Service</p>
                  <p className="text-sm text-gray-600">Licensed & Insured</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;