import React from 'react';
import { ArrowLeft, Calendar, User, Clock, DollarSign, Clock3, AlertTriangle, CheckCircle } from 'lucide-react';

interface DIYVsProfessionalPostProps {
  onBack: () => void;
}

const DIYVsProfessionalPost: React.FC<DIYVsProfessionalPostProps> = ({ onBack }) => {
  const scrollToContact = () => {
    onBack();
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="flex items-center text-brand-light hover:text-brand-dark transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blog
          </button>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            DIY vs. Professional Snow Plowing in Palmer: Which is Right for Your Driveway?
          </h1>
          
          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>October 8, 2024</span>
            </div>
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Jesse Miessner</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>6 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Image */}
        <div className="mb-12">
          <img 
            src="https://storage.googleapis.com/msgsndr/wnfQfg2IIyeI7768WeGf/media/68cb74e22a25a152df47cbe3.webp"
            alt="Split image showing person struggling to shovel snow versus professional snow plow truck efficiently clearing driveway"
            className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            It's 5:30 AM. Your alarm goes off, and you peek outside to see 8 inches of fresh snow covering your driveway. 
            Again. You've got to be at work in an hour, and you're faced with the same question every Palmer homeowner asks: 
            "Should I grab the shovel, or is it time to call in the pros?"
          </p>

          <p className="text-gray-700 mb-8 leading-relaxed">
            Look, I'm not here to sell you on professional snow removal (okay, maybe a little). 
            But after years of helping Palmer families with their snow removal needs, I've learned that the "right" choice 
            depends on your specific situation. Let's break it down honestly.
          </p>

          {/* DIY Section */}
          <div className="bg-blue-50 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-8 h-8 bg-blue-200 text-blue-800 rounded-full flex items-center justify-center text-sm font-bold mr-3">DIY</span>
              The Case for Doing It Yourself
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  The Pros
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <DollarSign className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Lower upfront cost:</strong> Just the price of a shovel or snow blower</span>
                  </li>
                  <li className="flex items-start">
                    <Clock3 className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Complete control:</strong> Clear your driveway exactly when you want</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Good exercise:</strong> Burns calories and gets you moving</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Immediate availability:</strong> No waiting for service calls</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  The Cons
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-red-600 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Time-intensive:</strong> 30-60 minutes per snowfall</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-red-600 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Physical strain:</strong> Risk of back injury, especially with wet snow</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-red-600 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Equipment costs:</strong> Quality snow blowers run $800-$3,000+</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-red-600 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Weather dependency:</strong> You're out there in every storm</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Professional Section */}
          <div className="bg-green-50 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-8 h-8 bg-green-200 text-green-800 rounded-full flex items-center justify-center text-sm font-bold mr-3">PRO</span>
              The Case for Professional Service
            </h2>
            <div className="mb-6">
              <img 
                src="https://storage.googleapis.com/msgsndr/wnfQfg2IIyeI7768WeGf/media/68cb74e1357b4ecfb1a82f75.webp"
                alt="Wide shot of neatly plowed driveway in Palmer with snow perfectly cleared and professional plow truck in distance"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  The Pros
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <Clock3 className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Time savings:</strong> Your driveway is clear when you wake up</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Reliability:</strong> Service regardless of weather conditions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Professional equipment:</strong> Faster, more thorough clearing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>No physical risk:</strong> Avoid injury from heavy lifting or slipping</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  The Cons
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <DollarSign className="w-4 h-4 text-red-600 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Ongoing cost:</strong> Seasonal contracts typically $400-$800</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-red-600 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Less control:</strong> Service timing depends on provider's schedule</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-red-600 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Service quality varies:</strong> Need to find a reliable provider</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cost Breakdown */}
          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Real Cost Comparison</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Let's talk numbers. Here's what you're really looking at for a typical Palmer driveway over a winter season:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">DIY Costs (First Year)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between">
                    <span>Quality snow shovel</span>
                    <span>$40-80</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Ice melt/salt (season)</span>
                    <span>$50-100</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Snow blower (optional)</span>
                    <span>$800-3,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Maintenance/gas</span>
                    <span>$100-200</span>
                  </li>
                  <li className="border-t pt-2 flex justify-between font-semibold">
                    <span>Total</span>
                    <span>$990-3,380</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Professional Service</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between">
                    <span>Seasonal contract</span>
                    <span>$400-800</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Per-storm service</span>
                    <span>$55-85/visit</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Salt/sand application</span>
                    <span>Included</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Equipment/maintenance</span>
                    <span>$0</span>
                  </li>
                  <li className="border-t pt-2 flex justify-between font-semibold">
                    <span>Total (seasonal)</span>
                    <span>$400-800</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-brand-light/10 to-brand-dark/10 rounded-lg p-4 mt-6">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-brand-dark">The hidden costs:</strong> Don't forget to factor in your time. 
                If you value your time at $25/hour and spend 45 minutes per snowfall (Palmer averages 20+ snow events per winter), 
                that's another $375 in "opportunity cost" for DIY.
              </p>
            </div>
          </div>

          {/* Decision Framework */}
          <div className="bg-gradient-to-r from-brand-light to-brand-dark rounded-xl p-8 text-white mb-8">
            <h2 className="text-2xl font-bold mb-6">So, Which Should You Choose?</h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Here's my honest recommendation based on different situations:
            </p>
            
            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Choose DIY if you:</h4>
                <ul className="text-blue-100 space-y-1 text-sm">
                  <li>• Have a small, simple driveway</li>
                  <li>• Enjoy physical activity and have the time</li>
                  <li>• Are home during most snowfalls</li>
                  <li>• Want to minimize ongoing expenses</li>
                </ul>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Choose Professional Service if you:</h4>
                <ul className="text-blue-100 space-y-1 text-sm">
                  <li>• Have a long or steep driveway</li>
                  <li>• Travel frequently or work early hours</li>
                  <li>• Have physical limitations or back problems</li>
                  <li>• Value convenience over cost savings</li>
                  <li>• Want guaranteed access to your driveway</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-gray-700 mb-8 leading-relaxed text-lg">
            The truth is, there's no universally "right" answer. It comes down to your priorities, budget, and lifestyle. 
            But whatever you choose, make sure you're prepared before the first snowfall hits.
          </p>

          {/* CTA */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
            {/* Helpful Videos Section */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                🎥 Learn More About Snow Removal Pricing & Equipment
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Professional Snow Removal Pricing</h4>
                  <div className="space-y-4">
                    <div className="aspect-video">
                      <iframe 
                        className="w-full h-full rounded-lg" 
                        src="https://www.youtube.com/embed/2Ei9TnvcvhQ" 
                        frameBorder="0" 
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Snow Removal Equipment Guide</h4>
                  <div className="space-y-4">
                    <div className="aspect-video">
                      <iframe 
                        className="w-full h-full rounded-lg" 
                        src="https://www.youtube.com/embed/0xF-4tCFGzE" 
                        frameBorder="0" 
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Helpful Videos Section */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                🎥 Learn More About Snow Removal Pricing & Equipment
              </h3>
              <div className="bg-white rounded-xl p-6">
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <strong>How WE Price SNOW REMOVAL! 100% TRANSPARENT PRICING</strong> by Brian's Lawn Maintenance (17:54, 74K+ views)</li>
                  <li>• <strong>How to Price Residential Snow Clearing</strong> by Lawn Thumbs (7:30, 4K quality)</li>
                  <li>• <strong>The Ultimate Snow Clearing Equipment Showdown</strong> by DIY PETE (19:14, 520K+ views)</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Skip the 5 AM Snow Shovel Routine?
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              If professional snow removal sounds like the right fit for your Palmer property, 
              we'd love to give you a free estimate. Our seasonal contracts include unlimited plowing, 
              walkway clearing, and sand application—so you can sleep in while we handle the snow.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-brand-light to-brand-dark text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-brand-dark hover:to-brand-light transition-all duration-300 shadow-lg"
            >
              Get Your Free Snow Removal Estimate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DIYVsProfessionalPost;