import React from 'react';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';

interface BlogPostProps {
  onBack: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ onBack }) => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
            Back to Home
          </button>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How to Prepare Your Anchorage Lawn for Winter: A Local's Guide
          </h1>
          
          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>October 15, 2024</span>
            </div>
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Jesse Miessner</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>5 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Image */}
        <div className="mb-12">
          <img 
            src="https://storage.googleapis.com/msgsndr/wnfQfg2IIyeI7768WeGf/media/68cb74e1e819a313722f6a68.webp"
            alt="A cozy suburban home in Anchorage, Alaska, with a well-manicured lawn and snow-capped mountains in the background"
            className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            As the days shorten and the first frost nips at the air, it's a bittersweet time for any Anchorage homeowner. You're ready for the snowy slopes and cozy nights, but you also want to ensure your lawn survives the long, harsh winter. A little work now can prevent a lot of headaches (and expense) come spring cleanup.
          </p>

          <p className="text-gray-700 mb-8 leading-relaxed">
            Winterizing your lawn isn't just about making it look tidy; it's about giving it the strength it needs to endure months under a blanket of snow. In Anchorage, where our cool-season grasses are resilient but face unique challenges, a few key steps make all the difference.
          </p>

          <p className="text-gray-700 mb-8 leading-relaxed font-semibold">
            Here's your checklist to get your lawn winter-ready:
          </p>

          {/* Step 1 */}
          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-gradient-to-r from-brand-light to-brand-dark text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
              The Final Mow: Don't Go Too Short!
            </h2>
            <div className="mb-6">
              <img 
                src="https://storage.googleapis.com/msgsndr/wnfQfg2IIyeI7768WeGf/media/68cb74e1357b4ee88fa82f76.webp"
                alt="Person using a push mower for the final cut of the season, with lawn cut to proper height"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The last mow of the season is critical. You want to cut the grass low, but not so short that you scalp it. A good height for your final cut is around 2 inches.
            </p>
            <div className="bg-gradient-to-r from-brand-light/10 to-brand-dark/10 rounded-lg p-4">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-brand-dark">Why it matters:</strong> Taller grass blades will mat down under the weight of the snow, which can lead to a fungal disease called snow mold. But cutting it too short can stress the root system, which needs to store energy for the winter. That 2-inch sweet spot helps the blades stay upright and healthy.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-gradient-to-r from-brand-light to-brand-dark text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
              Clear Away Debris (Especially Leaves)
            </h2>
            <div className="mb-6">
              <img 
                src="https://storage.googleapis.com/msgsndr/wnfQfg2IIyeI7768WeGf/media/68cb74e13ad39551aaf9c9f7.webp"
                alt="Person wearing gardening gloves raking colorful fallen leaves from residential lawn in Anchorage"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Fall in Anchorage brings beautiful colors, but those fallen leaves are your lawn's enemy. While a thin layer of leaves can decompose and add nutrients, a thick, matted layer will suffocate your grass and trap moisture, inviting mold and pests.
            </p>
            <div className="bg-gradient-to-r from-brand-light/10 to-brand-dark/10 rounded-lg p-4">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-brand-dark">Why it matters:</strong> Snow mold thrives on matted grass and debris. Get those leaves off your lawn. Use a rake or a leaf blower to clear them completely. This also applies to any branches, toys, or other items left on the lawn.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-gradient-to-r from-brand-light to-brand-dark text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
              The Most Important Meal: Fall Fertilization
            </h2>
            <div className="mb-6">
              <img 
                src="https://storage.googleapis.com/msgsndr/wnfQfg2IIyeI7768WeGf/media/68cb74e12a25a172c847cbd5.webp"
                alt="Close-up of person applying granular fertilizer to lawn using broadcast spreader"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              If you only fertilize your lawn once a year, this is the time to do it. Fall fertilization, often called "winterizing," uses a slow-release, phosphorus-rich fertilizer that feeds the grass roots.
            </p>
            <div className="bg-gradient-to-r from-brand-light/10 to-brand-dark/10 rounded-lg p-4">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-brand-dark">Why it matters:</strong> Unlike spring and summer fertilizers that promote blade growth, a winterizer focuses on strengthening the root system. This allows your lawn to store nutrients all winter long, leading to a faster green-up and a healthier, more resilient turf come spring.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-gradient-to-r from-brand-light to-brand-dark text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
              Aeration and Thatching: Give It Room to Breathe
            </h2>
            <div className="mb-6">
              <img 
                src="https://storage.googleapis.com/msgsndr/wnfQfg2IIyeI7768WeGf/media/68cb74e13ad3954584f9c9fc.webp"
                alt="Professional lawn care technician using core aerator machine on residential lawn in Anchorage"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Over a long Anchorage summer, your soil can become compacted, making it difficult for air, water, and nutrients to reach the roots. A thick layer of thatch (dead grass blades) can also build up, suffocating the lawn.
            </p>
            <div className="bg-gradient-to-r from-brand-light/10 to-brand-dark/10 rounded-lg p-4">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-brand-dark">Why it matters:</strong> Aeration (creating small holes in the soil) and dethatching (removing the thick layer of thatch) improve soil drainage and allow essential nutrients to penetrate to the roots. While this can be done in the spring, a fall aeration is a great way to prepare the soil for winter.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-gradient-to-r from-brand-light to-brand-dark text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
              Don't Forget the Sprinklers!
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              If you have an in-ground sprinkler system, you absolutely must "blow it out" before the ground freezes.
            </p>
            <div className="bg-gradient-to-r from-brand-light/10 to-brand-dark/10 rounded-lg p-4">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-brand-dark">Why it matters:</strong> Water remaining in the pipes will freeze and expand, cracking your pipes and leading to costly repairs in the spring. Call a professional to use an air compressor to remove all the water from the lines.
              </p>
            </div>
          </div>

          {/* Pro Tip */}
          <div className="bg-gradient-to-r from-brand-light to-brand-dark rounded-xl p-8 text-white mb-8">
            <h3 className="text-xl font-bold mb-4">Pro-Tip: Avoid Walking on Snow-Covered Grass</h3>
            <p className="leading-relaxed">
              Once the snow falls, try to avoid walking on your lawn. Repeated foot traffic creates compacted ice patches that can kill the grass underneath, leaving bare spots that won't recover until spring.
            </p>
          </div>

          <p className="text-gray-700 mb-8 leading-relaxed text-lg">
            By following these simple steps, you'll give your Anchorage lawn the best possible chance to survive the long, cold winter.
          </p>

          {/* CTA */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
            {/* Helpful Videos Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Helpful Videos to Guide You
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">🎥 General Winter Preparation</h4>
                  <div className="space-y-4">
                    <div className="aspect-video">
                      <iframe 
                        className="w-full h-full rounded-lg" 
                        src="https://www.youtube.com/embed/sJHPD-wlPVM" 
                        frameBorder="0" 
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    </div>
                    <div className="aspect-video">
                      <iframe 
                        className="w-full h-full rounded-lg" 
                        src="https://www.youtube.com/embed/183kWAh_q8g" 
                        frameBorder="0" 
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">🍃 Final Mowing Height</h4>
                  <div className="space-y-4">
                    <div className="aspect-video">
                      <iframe 
                        className="w-full h-full rounded-lg" 
                        src="https://www.youtube.com/embed/1UcuB0Y3z1w" 
                        frameBorder="0" 
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    </div>
                    <div className="aspect-video">
                      <iframe 
                        className="w-full h-full rounded-lg" 
                        src="https://www.youtube.com/embed/ak-WGZDeyWg" 
                        frameBorder="0" 
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">🌱 Fall Fertilization</h4>
                  <div className="space-y-4">
                    <div className="aspect-video">
                      <iframe 
                        className="w-full h-full rounded-lg" 
                        src="https://www.youtube.com/embed/VugMC4buOdU" 
                        frameBorder="0" 
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    </div>
                    <div className="aspect-video">
                      <iframe 
                        className="w-full h-full rounded-lg" 
                        src="https://www.youtube.com/embed/NmM-uTMLAPI" 
                        frameBorder="0" 
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">💨 Aeration & Sprinkler Winterization</h4>
                  <div className="space-y-4">
                    <div className="aspect-video">
                      <iframe 
                        className="w-full h-full rounded-lg" 
                        src="https://www.youtube.com/embed/KjKY_O1ZNfA" 
                        frameBorder="0" 
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    </div>
                    <div className="aspect-video">
                      <iframe 
                        className="w-full h-full rounded-lg" 
                        src="https://www.youtube.com/embed/8uoeL4DmdIA" 
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
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Helpful Videos to Guide You
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">🎥 General Winter Preparation</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• <strong>How When and Why To Winterize Your Lawn</strong> by Ryan Knorr Lawn Care (5:25, 234K+ views)</li>
                    <li>• <strong>How to Prep Your Lawn For Winter</strong> by The Home Depot Canada (1:23)</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">🍃 Final Mowing Height</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• <strong>How Short Should I Cut My Grass For The Fall?</strong> by Green Grounds Lawn & Pest (0:39)</li>
                    <li>• <strong>Changing Fall Lawn Mowing Height</strong> by Grass Daddy (4:43)</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">🌱 Fall Fertilization</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• <strong>FALL FERTILIZER - The Secret To A Beautiful Lawn Year Round!</strong> by The Lawn Lover (8:10, 4K)</li>
                    <li>• <strong>Why Feeding Your Lawn in Fall Means A Greener Spring</strong> by Scotts Lawn (0:16)</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">💨 Aeration & Sprinkler Winterization</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• <strong>Aeration vs Dethatching // Which should YOU do??</strong> by The Lawn Whisperer (9:32, 770K+ views)</li>
                    <li>• <strong>DIY: How to Winterize Your Sprinkler System</strong> by DIY•BRY (8:40, 94K+ views)</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to get a head start on your fall lawn care?
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Contact Last Frontier Lawns today for a free estimate on our professional winterization services! We handle everything from fall cleanup and leaf removal to final mowing and fertilizing, so you can spend less time working and more time enjoying everything Alaska's winter has to offer.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-brand-light to-brand-dark text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-brand-dark hover:to-brand-light transition-all duration-300 shadow-lg"
            >
              Get Your Free Estimate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;