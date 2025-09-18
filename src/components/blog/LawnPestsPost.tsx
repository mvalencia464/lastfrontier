import React from 'react';
import { ArrowLeft, Calendar, User, Clock, Bug, AlertTriangle, CheckCircle } from 'lucide-react';

interface LawnPestsPostProps {
  onBack: () => void;
}

const LawnPestsPost: React.FC<LawnPestsPostProps> = ({ onBack }) => {
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
            Common Anchorage Lawn Pests and How to Get Rid of Them
          </h1>
          
          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>September 28, 2024</span>
            </div>
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Jesse Miessner</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>7 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Image */}
        <div className="mb-12">
          <img 
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_320/u_https://storage.googleapis.com/msgsndr/wnfQfg2IIyeI7768WeGf/media/68cb74e12a25a1089947cbd4.webp"
            alt="Vivid macro photograph showing close-up of damaged lawn with visible grub worm near surface"
            className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            You've been watering, fertilizing, and mowing religiously. Your Anchorage lawn should be the envy of the neighborhood. 
            So why are there brown patches appearing? Why does your grass look thin and weak despite all your efforts? 
            The answer might be lurking just beneath the surface—literally.
          </p>

          <p className="text-gray-700 mb-8 leading-relaxed">
            Alaska's unique climate creates the perfect conditions for some specific lawn pests that many homeowners don't even know exist. 
            The good news? Once you know what you're dealing with, most of these problems are totally fixable.
          </p>

          {/* Leatherjackets */}
          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Bug className="w-6 h-6 text-red-600 mr-3" />
              Leatherjackets (Crane Fly Larvae)
            </h2>
            <div className="mb-6">
              <img 
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_320/u_https://storage.googleapis.com/msgsndr/wnfQfg2IIyeI7768WeGf/media/68cb74e1e819a30d742f6a6a.webp"
                alt="Close-up photo of person's hand pointing to small irregular patch of dead brown grass indicating pest damage"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              These are probably the #1 lawn pest in Anchorage, and most homeowners have never heard of them. 
              Leatherjackets are the larvae of crane flies (those big mosquito-looking bugs that aren't actually mosquitoes).
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Signs You Have Them
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Brown, dying patches of grass</li>
                  <li>• Grass that pulls up easily (roots eaten)</li>
                  <li>• Increased bird activity on your lawn</li>
                  <li>• Gray-brown, worm-like larvae in soil</li>
                  <li>• Damage appears in late summer/early fall</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  How to Get Rid of Them
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Apply beneficial nematodes in late summer</li>
                  <li>• Reduce watering (they love moisture)</li>
                  <li>• Encourage birds with feeders</li>
                  <li>• Professional treatment in severe cases</li>
                  <li>• Overseed damaged areas in spring</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-brand-light/10 to-brand-dark/10 rounded-lg p-4 mt-4">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-brand-dark">Pro tip:</strong> If you see a lot of crane flies around your outdoor lights in late summer, 
                you're probably going to have leatherjackets. They lay eggs in moist soil, so reducing irrigation can help prevent infestations.
              </p>
            </div>
          </div>

          {/* Chafer Beetles */}
          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Bug className="w-6 h-6 text-orange-600 mr-3" />
              Chafer Beetle Grubs
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              These white, C-shaped grubs are the larvae of chafer beetles. They're less common than leatherjackets in Anchorage, 
              but when they show up, they can do serious damage to your lawn's root system.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Signs You Have Them
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Irregular brown patches in lawn</li>
                  <li>• Grass feels spongy underfoot</li>
                  <li>• Turf can be rolled back like carpet</li>
                  <li>• White, C-shaped grubs in soil</li>
                  <li>• Increased raccoon or skunk activity</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  How to Get Rid of Them
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Apply milky spore disease (organic)</li>
                  <li>• Use beneficial nematodes</li>
                  <li>• Professional grub control treatment</li>
                  <li>• Maintain proper soil moisture</li>
                  <li>• Reseed damaged areas</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Slugs */}
          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Bug className="w-6 h-6 text-green-600 mr-3" />
              Slugs and Snails
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Alaska's cool, moist climate is basically slug paradise. While they don't usually kill grass outright, 
              they can damage young seedlings and create unsightly slime trails across your lawn.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Signs You Have Them
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Silvery slime trails on grass</li>
                  <li>• Holes in grass blades</li>
                  <li>• Damage to new seedlings</li>
                  <li>• Most active at night/early morning</li>
                  <li>• Worse in shady, moist areas</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  How to Get Rid of Them
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Remove hiding spots (debris, boards)</li>
                  <li>• Improve drainage in problem areas</li>
                  <li>• Use copper strips as barriers</li>
                  <li>• Apply diatomaceous earth</li>
                  <li>• Beer traps (seriously, it works)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Voles */}
          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Bug className="w-6 h-6 text-brown-600 mr-3" />
              Voles (Meadow Mice)
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              These small rodents create tunnels and runways through your lawn, especially under snow cover. 
              You might not notice the damage until spring when the snow melts and reveals their highway system.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Signs You Have Them
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Surface runways in grass</li>
                  <li>• Small holes (1-2 inches) in lawn</li>
                  <li>• Gnawed bark on trees/shrubs</li>
                  <li>• Damage visible after snow melts</li>
                  <li>• Trails connect to garden areas</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  How to Get Rid of Them
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Keep grass short in fall</li>
                  <li>• Remove brush piles and debris</li>
                  <li>• Use hardware cloth around trees</li>
                  <li>• Trapping in severe cases</li>
                  <li>• Encourage natural predators</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Prevention Strategy */}
          <div className="bg-gradient-to-r from-brand-light to-brand-dark rounded-xl p-8 text-white mb-8">
            <h2 className="text-2xl font-bold mb-6">The Best Defense is a Good Offense</h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Most lawn pest problems can be prevented with good cultural practices. Here's your prevention game plan:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Maintain Healthy Soil</h3>
                <ul className="text-blue-100 space-y-1 text-sm">
                  <li>• Test soil pH annually</li>
                  <li>• Aerate compacted areas</li>
                  <li>• Add organic matter</li>
                  <li>• Ensure proper drainage</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Smart Watering Practices</h3>
                <ul className="text-blue-100 space-y-1 text-sm">
                  <li>• Water deeply, less frequently</li>
                  <li>• Water early morning</li>
                  <li>• Avoid overwatering</li>
                  <li>• Fix drainage problems</li>
                </ul>
              </div>
            </div>
          </div>

          {/* When to Call Professionals */}
          <div className="bg-yellow-50 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">When to Call in the Professionals</h2>
            <div className="mb-6">
              <img 
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_320/u_https://storage.googleapis.com/msgsndr/wnfQfg2IIyeI7768WeGf/media/68cb74e1357b4e9ff5a82f77.webp"
                alt="Professional lawn care technician inspecting residential lawn in Anchorage using magnifying glass"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Some pest problems are beyond DIY solutions. Consider professional help if:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Damage covers more than 30% of your lawn</li>
              <li>• You've tried DIY methods without success</li>
              <li>• The problem keeps coming back</li>
              <li>• You're not sure what pest you're dealing with</li>
              <li>• You want to prevent problems before they start</li>
            </ul>
            
            <div className="bg-gradient-to-r from-brand-light/10 to-brand-dark/10 rounded-lg p-4 mt-4">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-brand-dark">Remember:</strong> Professional pest control isn't just about killing bugs—it's about 
                creating conditions where your lawn can thrive and naturally resist pest problems.
              </p>
            </div>
          </div>

          <p className="text-gray-700 mb-8 leading-relaxed text-lg">
            The key to pest-free lawns in Anchorage isn't just treatment—it's prevention. 
            A healthy, well-maintained lawn is your best defense against these common invaders.
          </p>

          {/* CTA */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
            {/* Helpful Videos Section */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                🎥 Video Guides for Pest Control
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Professional Grub Control</h4>
                  <div className="space-y-4">
                    <div className="aspect-video">
                      <iframe 
                        className="w-full h-full rounded-lg" 
                        src="https://www.youtube.com/embed/FkQZiY_zykE" 
                        frameBorder="0" 
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Natural Pest Control Methods</h4>
                  <div className="space-y-4">
                    <div className="aspect-video">
                      <iframe 
                        className="w-full h-full rounded-lg" 
                        src="https://www.youtube.com/embed/H_LMbJRVt_8" 
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
                🎥 Video Guides for Pest Control
              </h3>
              <div className="bg-white rounded-xl p-6">
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <strong>How to Get Rid of Grubs Guaranteed (4 Easy Steps)</strong> by Solutions Pest & Lawn (5:49, 718K+ views, verified)</li>
                  <li>• <strong>Chafer Grubs & Leatherjackets: The Damage They Do & How to Get Rid of Them</strong> by GreensleevesLawnCare (2:16)</li>
                  <li>• <strong>8 Natural Ways to Exterminate Garden GRUBS Naturally</strong> by Natural Health Remedies (9:18, 292K+ views, verified)</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Tired of Fighting Lawn Pests?
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our comprehensive lawn care program includes pest monitoring and treatment as part of regular maintenance. 
              We'll identify problems early and treat them before they damage your lawn—so you can enjoy a beautiful, 
              pest-free yard all season long.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-brand-light to-brand-dark text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-brand-dark hover:to-brand-light transition-all duration-300 shadow-lg"
            >
              Get Professional Pest Control
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawnPestsPost;