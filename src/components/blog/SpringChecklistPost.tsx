import React from 'react';
import { ArrowLeft, Calendar, User, Clock, CheckCircle, Leaf, Droplets, Scissors } from 'lucide-react';

interface SpringChecklistPostProps {
  onBack: () => void;
}

const SpringChecklistPost: React.FC<SpringChecklistPostProps> = ({ onBack }) => {
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
            Your Spring Cleanup Checklist for a Beautiful Palmer Lawn
          </h1>
          
          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>April 15, 2024</span>
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
            src="https://storage.googleapis.com/msgsndr/wnfQfg2IIyeI7768WeGf/media/68cb74e1357b4e3daea82f78.webp"
            alt="Aerial view of well-manicured suburban lawn in Palmer after spring cleanup with freshly raked piles of debris"
            className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            The snow is finally melting, the days are getting longer, and you can actually see your lawn again! 
            But before you break out the lawn chairs and fire up the grill, there's work to be done. 
            Spring cleanup isn't just about making your Palmer property look good—it's about setting your lawn up for success all season long.
          </p>

          <p className="text-gray-700 mb-8 leading-relaxed">
            After a long Alaska winter, your lawn needs some TLC to bounce back. The good news? 
            With this step-by-step checklist, you'll have your yard looking amazing in no time. 
            Let's get started!
          </p>

          {/* Checklist Items */}
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="bg-green-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-green-200 text-green-800 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                <Leaf className="w-6 h-6 text-green-600 mr-3" />
                Clear Away Winter Debris
              </h2>
              <div className="mb-6">
                <img 
                  src="https://storage.googleapis.com/msgsndr/wnfQfg2IIyeI7768WeGf/media/68cb74e13ad39551aaf9c9f7.webp"
                  alt="Person wearing gardening gloves raking colorful fallen leaves from residential lawn in Anchorage"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                First things first—get all that winter mess off your lawn. We're talking leaves, branches, 
                trash that blew in, and any other debris that accumulated over the winter months.
              </p>
              
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">What to do:</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Rake up all leaves and organic debris</li>
                  <li>• Remove any branches or sticks</li>
                  <li>• Pick up trash, toys, or other objects</li>
                  <li>• Clear gutters and downspouts while you're at it</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-brand-light/10 to-brand-dark/10 rounded-lg p-4 mt-4">
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-brand-dark">Why it matters:</strong> Debris blocks sunlight and traps moisture, 
                  creating perfect conditions for disease and preventing new growth. Plus, you can't see what you\'re working with until it\'s all cleared away.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-blue-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-200 text-blue-800 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                <CheckCircle className="w-6 h-6 text-blue-600 mr-3" />
                Assess Winter Damage
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Now that you can see your lawn clearly, take a walk around and make note of any problem areas. 
                This will help you prioritize your efforts and budget for any repairs needed.
              </p>
              
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Look for:</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Brown or dead patches (could be snow mold)</li>
                  <li>• Bare spots where grass didn't survive</li>
                  <li>• Compacted areas from snow or foot traffic</li>
                  <li>• Damage from salt or ice melt</li>
                  <li>• Vole tunnels or other pest damage</li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-yellow-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-yellow-200 text-yellow-800 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                <Droplets className="w-6 h-6 text-yellow-600 mr-3" />
                Rake and Dethatch
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Give your lawn a good raking to remove any remaining debris and dead grass. 
                This also helps break up the soil surface and allows air and water to penetrate better.
              </p>
              
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">How to do it:</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Use a leaf rake for light debris</li>
                  <li>• Switch to a dethatching rake for dead grass</li>
                  <li>• Work in different directions for thorough coverage</li>
                  <li>• Don't be too aggressive—you want to help, not hurt</li>
                </ul>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-purple-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-purple-200 text-purple-800 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                <CheckCircle className="w-6 h-6 text-purple-600 mr-3" />
                Aerate Compacted Areas
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Winter snow and ice can compact your soil, making it hard for grass roots to get the air and water they need. 
                Aeration creates small holes that allow these essentials to penetrate.
              </p>
              
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Focus on:</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• High-traffic areas</li>
                  <li>• Areas where snow was piled</li>
                  <li>• Spots that stay wet longer than others</li>
                  <li>• Anywhere the soil feels hard when you walk on it</li>
                </ul>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-green-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-green-200 text-green-800 rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
                <Leaf className="w-6 h-6 text-green-600 mr-3" />
                Overseed Bare Spots
              </h2>
            <div className="mb-6">
              <img 
                src="https://storage.googleapis.com/msgsndr/wnfQfg2IIyeI7768WeGf/media/68cb74e12a25a147d247cbd7.webp"
                alt="Professional landscaper using power edger to create sharp clean line between lawn and sidewalk"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Those bare patches won't fix themselves. Early spring is the perfect time to overseed in Palmer—
                the soil is moist, temperatures are cool, and grass has the whole growing season ahead of it.
              </p>
              
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Best practices:</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Choose a grass seed blend suitable for Alaska</li>
                  <li>• Lightly scratch the soil surface first</li>
                  <li>• Apply seed at recommended rates</li>
                  <li>• Cover with a thin layer of compost or topsoil</li>
                  <li>• Keep seeded areas moist until germination</li>
                </ul>
              </div>
            </div>

            {/* Step 6 */}
            <div className="bg-blue-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-200 text-blue-800 rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
                <Droplets className="w-6 h-6 text-blue-600 mr-3" />
                Apply Spring Fertilizer
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                After months under snow, your lawn is hungry. A good spring fertilizer gives grass the nutrients it needs 
                to green up quickly and grow strong roots.
              </p>
              
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Timing is key:</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Wait until soil temperature reaches 55°F</li>
                  <li>• Usually late April to early May in Palmer</li>
                  <li>• Choose a slow-release, balanced fertilizer</li>
                  <li>• Follow package directions for application rates</li>
                  <li>• Water in lightly after application</li>
                </ul>
              </div>
            </div>

            {/* Step 7 */}
            <div className="bg-orange-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-orange-200 text-orange-800 rounded-full flex items-center justify-center text-sm font-bold mr-3">7</span>
                <Scissors className="w-6 h-6 text-orange-600 mr-3" />
                First Mow of the Season
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Once your grass starts growing (usually when it reaches about 3-4 inches), it's time for that first cut. 
                But don't get too aggressive—your lawn is still waking up from winter.
              </p>
              
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">First mow guidelines:</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Set mower to highest setting (3+ inches)</li>
                  <li>• Only cut when grass is dry</li>
                  <li>• Sharpen mower blades first</li>
                  <li>• Don't bag clippings—let them decompose</li>
                  <li>• Take your time—no need to rush</li>
                </ul>
              </div>
            </div>

            {/* Step 8 */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-gray-200 text-gray-800 rounded-full flex items-center justify-center text-sm font-bold mr-3">8</span>
                <CheckCircle className="w-6 h-6 text-gray-600 mr-3" />
                Edge and Define Borders
              </h2>
            <div className="mb-6">
              <img 
                src="https://storage.googleapis.com/msgsndr/wnfQfg2IIyeI7768WeGf/media/68cb74e12a25a1183b47cbd6.webp"
                alt="Person's hands in gardening gloves spreading dark topsoil over bare patch with grass seed bag nearby"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Clean, defined edges make your entire lawn look more professional and well-maintained. 
                Plus, it helps prevent grass from creeping into flower beds and walkways.
              </p>
              
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Don't forget:</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Edge along walkways and driveways</li>
                  <li>• Define borders around flower beds</li>
                  <li>• Trim around trees and obstacles</li>
                  <li>• Clean up any grass clippings</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-gradient-to-r from-brand-light to-brand-dark rounded-xl p-8 text-white mt-12 mb-8">
            <h2 className="text-2xl font-bold mb-6">Palmer Spring Cleanup Timeline</h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Here's when to tackle each task for best results:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Early April</h3>
                <ul className="text-blue-100 space-y-1 text-sm">
                  <li>• Clear debris</li>
                  <li>• Assess damage</li>
                  <li>• Light raking</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Late April/Early May</h3>
                <ul className="text-blue-100 space-y-1 text-sm">
                  <li>• Aerate and overseed</li>
                  <li>• Apply fertilizer</li>
                  <li>• First mow and edge</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-gray-700 mb-8 leading-relaxed text-lg">
            Spring cleanup might seem like a lot of work, but breaking it down into these manageable steps makes it totally doable. 
            Plus, the payoff is huge—a beautiful, healthy lawn that you can enjoy all summer long.
          </p>

          {/* CTA */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
            {/* Helpful Videos Section */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                🎥 Alaska-Specific Spring Cleanup Videos
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Alaska Spring Lawn Care</h4>
                  <div className="space-y-4">
                    <div className="aspect-video">
                      <iframe 
                        className="w-full h-full rounded-lg" 
                        src="https://www.youtube.com/embed/c4WKM_IaxCA" 
                        frameBorder="0" 
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Complete Spring Cleanup Guide</h4>
                  <div className="space-y-4">
                    <div className="aspect-video">
                      <iframe 
                        className="w-full h-full rounded-lg" 
                        src="https://www.youtube.com/embed/35iODq0hB0A" 
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
                🎥 Alaska-Specific Spring Cleanup Videos
              </h3>
              <div className="bg-white rounded-xl p-6">
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <strong>Spring lawn care tips to get your yard in top shape</strong> by Your Alaska Link TV (1:35, Alaska-specific!)</li>
                  <li>• <strong>Anchorage Spring Clean Up</strong> by Alaska Premier Services (Anchorage-specific)</li>
                  <li>• <strong>All 10 Spring Lawn Care Steps // In Order</strong> by Turf Mechanic (10:34, 73K+ views)</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want to Skip the Spring Cleanup Hassle?
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our comprehensive spring cleanup service covers everything on this checklist and more. 
              We'll have your Palmer lawn looking amazing while you enjoy your free time. 
              Plus, we know exactly what Alaska lawns need to thrive.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-brand-light to-brand-dark text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-brand-dark hover:to-brand-light transition-all duration-300 shadow-lg"
            >
              Book Your Spring Cleanup Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpringChecklistPost;