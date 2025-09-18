import React from 'react';
import { Phone, Mail, MapPin, Award, Users, Clock } from 'lucide-react';

const About = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Meet Jesse Miessner
            </h2>
            <p className="text-xl text-green-600 font-semibold mb-4">
            <span className="text-xl bg-gradient-to-r from-brand-light to-brand-dark bg-clip-text text-transparent font-semibold mb-4">
              Your New Property Manager
            </span>
            </p>
            <p className="text-lg text-gray-600 mb-6">
              My goal is to make you fall in love with your property again.
            </p>
            <p className="text-gray-600 mb-6">
              From booking services all the way through to fulfillment, this is the most convenient way to save time and energy. 
              I'd love to take over this role to maintain your yard for you.
            </p>
            <p className="text-gray-600 mb-8">
              With years of experience serving the Anchorage and Palmer communities, I understand the unique challenges 
              of Alaska's climate and terrain. Whether it's preparing your property for the harsh winter months or 
              bringing it back to life in spring, I'm here to help.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-light" />
                <span className="text-gray-700">907-440-7160</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-light" />
                <span className="text-gray-700">lastfrontierlawnco@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-brand-light" />
                <span className="text-gray-700">Serving Anchorage & Palmer, Alaska</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-brand-light to-brand-dark text-white px-6 py-3 rounded-lg font-semibold hover:from-brand-dark hover:to-brand-light transition-all duration-300"
              >
                Schedule a Consultation
              </button>
              <a 
                href="tel:907-440-7160"
                className="border-2 border-brand-light text-brand-dark px-6 py-3 rounded-lg font-semibold hover:bg-gradient-to-r hover:from-brand-light hover:to-brand-dark hover:text-white hover:border-transparent transition-all duration-300 text-center"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <img 
                src="https://storage.googleapis.com/msgsndr/wnfQfg2IIyeI7768WeGf/media/63520ffbe6c6189d014f8525.webp"
                alt="Jesse Miessner - Owner/Operator"
                className="rounded-xl shadow-lg w-full h-80 object-cover mb-6"
              />
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Jesse Miessner</h3>
                <p className="bg-gradient-to-r from-brand-light to-brand-dark bg-clip-text text-transparent font-semibold mb-4">Owner / Operator</p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-light/20 to-brand-dark/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Award className="w-6 h-6 text-brand-dark" />
                    </div>
                    <p className="text-sm font-semibold text-gray-900">Licensed</p>
                    <p className="text-xs text-gray-600">& Insured</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-light/20 to-brand-dark/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Users className="w-6 h-6 text-brand-light" />
                    </div>
                    <p className="text-sm font-semibold text-gray-900">Local</p>
                    <p className="text-xs text-gray-600">Expert</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-light/20 to-brand-dark/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Clock className="w-6 h-6 text-brand-dark" />
                    </div>
                    <p className="text-sm font-semibold text-gray-900">Year-Round</p>
                    <p className="text-xs text-gray-600">Service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-4">
            How You Can Get An Estimate Much Quicker with Us
          </h3>
          <p className="text-xl text-gray-600 text-center mb-12">
            🎥 QUICK ESTIMATE - Our process is so simple
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-light/20 to-brand-dark/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-dark">1</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Fill out the form</h4>
              <p className="text-gray-600">
                Fill out all your contact information. Select your services. Leave any special notes in the "Message" field.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-light/20 to-brand-dark/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-light">2</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Send us Video</h4>
              <p className="text-gray-600">
                Send us a video of your yard to expedite the estimate process. If we can see your yard, it answers lots of smaller questions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-light/20 to-brand-dark/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-dark">3</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Book a time</h4>
              <p className="text-gray-600">
                We arrange a time to start servicing your property that works with your schedule.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-light/20 to-brand-dark/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-light">4</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Recurring Service</h4>
              <p className="text-gray-600">
                Most of our clients like to set up a recurring service to save time and money. Ask us about bundling services for a discount.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;