import React from 'react';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';

interface SnowMoldPostProps {
  onBack: () => void;
}

const SnowMoldPost: React.FC<SnowMoldPostProps> = ({ onBack }) => {
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
            What is Snow Mold and How to Prevent It on Your Anchorage Lawn
          </h1>
          
          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>October 12, 2024</span>
            </div>
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Jesse Miessner</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>4 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Image */}
        <div className="mb-12">
          <img 
            src="https://storage.googleapis.com/msgsndr/wnfQfg2IIyeI7768WeGf/media/68cb74e110510f22eb3125cb.webp"
            alt="Close-up macro photo of snow mold showing circular, matted patch of white and gray fungus on lawn"
            className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            You know that sinking feeling. The snow finally melts, you step outside excited to see your lawn again, and... there it is. 
            Those ugly brown, matted patches that look like someone spilled coffee all over your grass. 
            That's not just winter damage—that's snow mold, and it's more common in Anchorage than you might think.
          </p>

          <p className="text-gray-700 mb-8 leading-relaxed">
            The good news? Snow mold is preventable. The bad news? If you're reading this in spring and already seeing those telltale patches, 
            you're dealing with cleanup mode. But don't worry—we'll cover both prevention and treatment.
          </p>

          {/* What is Snow Mold */}
          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Exactly is Snow Mold?</h2>
            <div className="mb-6">
              <img 
                src="https://storage.googleapis.com/msgsndr/wnfQfg2IIyeI7768WeGf/media/68cb74e1e819a3fbe62f6a69.webp"
                alt="Landscape shot of healthy lawn in Anchorage with thin layer of hoarfrost covering grass blades"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Snow mold is a fungal disease that thrives under snow cover. In Anchorage, we see two main types:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Gray Snow Mold (Typhula blight):</strong> Creates circular, grayish-brown patches with a fuzzy appearance</li>
              <li><strong>Pink Snow Mold (Microdochium patch):</strong> Shows up as reddish-brown patches, often with a pinkish edge</li>
            </ul>
            <div className="bg-gradient-to-r from-brand-light/10 to-brand-dark/10 rounded-lg p-4 mt-4">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-brand-dark">Here's the thing:</strong> Snow mold doesn't just happen randomly. 
                It needs specific conditions—prolonged snow cover, matted grass, and trapped moisture. 
                Sound familiar? That's basically every Anchorage winter.
              </p>
            </div>
          </div>

          {/* Why It Happens */}
          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Your Lawn Gets Snow Mold (And Your Neighbor's Doesn't)</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Snow mold loves these conditions—and if your lawn has them, you're basically rolling out the red carpet:
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 text-sm font-bold">✗</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Matted leaves and debris</h4>
                  <p className="text-gray-600 text-sm">Those fall leaves you didn't rake? They're creating a perfect breeding ground.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 text-sm font-bold">✗</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Grass that's too long</h4>
                  <p className="text-gray-600 text-sm">Long grass blades bend and mat under snow, trapping moisture.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 text-sm font-bold">✗</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Late fall nitrogen fertilizer</h4>
                  <p className="text-gray-600 text-sm">Nitrogen promotes soft, lush growth that's more susceptible to disease.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 text-sm font-bold">✗</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Compacted snow from foot traffic</h4>
                  <p className="text-gray-600 text-sm">Walking on snow-covered grass creates the perfect storm for mold development.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Prevention */}
          <div className="bg-gradient-to-r from-brand-light to-brand-dark rounded-xl p-8 text-white mb-8">
            <h2 className="text-2xl font-bold mb-4">How to Prevent Snow Mold (Do This in Fall)</h2>
            <div className="mb-6">
              <img 
                src="https://storage.googleapis.com/msgsndr/wnfQfg2IIyeI7768WeGf/media/68cb74e13ad3954fe5f9c9f8.webp"
                alt="Professional lawn care technician in branded uniform applying preventative fungicide to lawn"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Prevention is way easier than treatment. Here's your fall action plan:
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold">Rake up ALL the leaves</h4>
                  <p className="text-blue-100 text-sm">Don't leave any matted debris on your lawn going into winter.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold">Final mow at 2 inches</h4>
                  <p className="text-blue-100 text-sm">Not too short (stresses roots), not too long (mats under snow).</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold">Use a winterizing fertilizer</h4>
                  <p className="text-blue-100 text-sm">High potassium, low nitrogen. Strengthens grass without promoting soft growth.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold">Avoid walking on snow-covered grass</h4>
                  <p className="text-blue-100 text-sm">Create designated pathways instead of cutting across your lawn.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Treatment */}
          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Already Have Snow Mold? Here's How to Fix It</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Don't panic. Snow mold looks worse than it usually is. Most of the time, the grass crowns are still alive—it's just the blades that are damaged.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Step 1: Rake gently</h4>
                <p className="text-gray-600">Remove the matted, dead grass to allow air circulation. Be gentle—you don't want to damage healthy crowns.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Step 2: Let it dry</h4>
                <p className="text-gray-600">Allow the area to dry completely. Mold can't survive without moisture.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Step 3: Overseed if needed</h4>
                <p className="text-gray-600">If the damage is severe, overseed with a cold-hardy grass variety in late spring.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Step 4: Improve drainage</h4>
                <p className="text-gray-600">Consider aeration if the area tends to stay wet—poor drainage makes snow mold worse.</p>
              </div>
            </div>
          </div>

          <p className="text-gray-700 mb-8 leading-relaxed text-lg">
            The bottom line? Snow mold is preventable, but it requires some fall preparation. 
            A little effort in October can save you a lot of frustration (and money) in April.
          </p>

          {/* CTA */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
            {/* Helpful Videos Section */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                🎥 Helpful Videos About Snow Mold
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Snow Mold Prevention & Treatment</h4>
                  <div className="space-y-4">
                    <div className="aspect-video">
                      <iframe 
                        className="w-full h-full rounded-lg" 
                        src="https://www.youtube.com/embed/fkGmFA4hJnM" 
                        frameBorder="0" 
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Quick Snow Mold Fixes</h4>
                  <div className="space-y-4">
                    <div className="aspect-video">
                      <iframe 
                        className="w-full h-full rounded-lg" 
                        src="https://www.youtube.com/embed/8XFnJ3a0cJg" 
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
                🎥 Helpful Videos About Snow Mold
              </h3>
              <div className="bg-white rounded-xl p-6">
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <strong>How to Get Rid of Snow Mold [Fungus & Lawn Disease]</strong> by Solutions Pest & Lawn (4:45, verified channel)</li>
                  <li>• <strong>Snow Mold? Here's How to Fix It!</strong> by Summit Lawns (0:27, recent)</li>
                  <li>• <strong>Preventing Snow Mold In The Lawn : Early Spring Tips</strong> by The Lawn Care Nut (2:06, verified channel)</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Don't Want to Deal with Snow Mold This Year?
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our fall cleanup and winterization service includes everything you need to prevent snow mold: 
              complete leaf removal, proper final mowing, and professional-grade winterizing fertilizer. 
              Let us handle the prep work so you can enjoy a healthy, green lawn come spring.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-brand-light to-brand-dark text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-brand-dark hover:to-brand-light transition-all duration-300 shadow-lg"
            >
              Schedule Fall Cleanup Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnowMoldPost;