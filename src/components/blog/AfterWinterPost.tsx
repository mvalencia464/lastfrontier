import React from 'react';
import { ArrowLeft, Calendar, User, Clock, Heart, Droplets, Scissors, Leaf, Sun } from 'lucide-react';

interface AfterWinterPostProps {
  onBack: () => void;
}

const AfterWinterPost: React.FC<AfterWinterPostProps> = ({ onBack }) => {
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
            5 Things Your Anchorage Lawn Needs After the Long Winter
          </h1>
          
          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>April 8, 2024</span>
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
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_320/u_https://storage.googleapis.com/msgsndr/wnfQfg2IIyeI7768WeGf/media/68cb74e12a25a165dd47cbd3.webp"
            alt="Person using power rake or dethatcher to remove matted dead grass from lawn in early spring"
            className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            The snow has finally melted, and you're standing in your yard surveying the damage. 
            Your once-beautiful lawn looks like it went ten rounds with Mike Tyson—and lost. 
            Brown patches, bare spots, and what looks like a crime scene where your grass used to be.
          </p>

          <p className="text-gray-700 mb-8 leading-relaxed">
            Don't panic. This is totally normal for Anchorage lawns after our brutal winters. 
            Your grass isn't dead (well, most of it isn't)—it's just traumatized. 
            With the right care, you can nurse it back to health and have it looking amazing by summer. 
            Here are the five essential things your lawn needs right now.
          </p>

          {/* Thing 1 */}
          <div className="bg-red-50 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-red-200 text-red-800 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
              <Heart className="w-6 h-6 text-red-600 mr-3" />
              Immediate First Aid
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Think of this as triage for your lawn. Before you can help it recover, you need to assess the damage and remove anything that's actively hurting it.
            </p>
            
            <div className="bg-white rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">What to do right now:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Remove all debris:</strong> Leaves, branches, trash—anything sitting on your grass needs to go</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Gently rake matted areas:</strong> Break up any grass that's matted down, but be gentle</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Stay off wet areas:</strong> Walking on soggy soil compacts it and makes recovery harder</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-brand-light/10 to-brand-dark/10 rounded-lg p-4 mt-4">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-brand-dark">Why this matters:</strong> Your grass has been suffocating under debris all winter. 
                Getting that stuff off is like giving CPR—it allows your lawn to start breathing again.
              </p>
            </div>
          </div>

          {/* Thing 2 */}
          <div className="bg-blue-50 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-blue-200 text-blue-800 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
              <Droplets className="w-6 h-6 text-blue-600 mr-3" />
              Soil Decompaction
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Months of snow weight, ice, and freeze-thaw cycles have turned your soil into concrete. 
              Grass roots can't grow in compacted soil, and water just runs off instead of soaking in.
            </p>
            
            <div className="bg-white rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">How to fix it:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Core aeration:</strong> Rent an aerator or hire a pro to pull plugs from your soil</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Focus on problem areas:</strong> Anywhere you walked during winter, where snow was piled, or that stays soggy</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Leave the plugs:</strong> Those soil cores will break down and add organic matter</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-brand-light/10 to-brand-dark/10 rounded-lg p-4 mt-4">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-brand-dark">Pro tip:</strong> Wait until the soil is moist but not soggy. 
                If mud sticks to your shoes, it's too wet for aeration.
              </p>
            </div>
          </div>

          {/* Thing 3 */}
          <div className="bg-green-50 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-green-200 text-green-800 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
              <Leaf className="w-6 h-6 text-green-600 mr-3" />
              Overseeding Bare Spots
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Those bare patches aren't going to magically fill in on their own. Spring is the perfect time to overseed in Anchorage—
              cool temperatures, moist soil, and a full growing season ahead.
            </p>
            
            <div className="bg-white rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">The right way to overseed:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Choose the right seed:</strong> Use a cold-hardy blend designed for Alaska</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Prep the soil:</strong> Lightly scratch bare areas with a rake</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Apply seed evenly:</strong> Follow package rates—more isn't better</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Cover lightly:</strong> A thin layer of compost or topsoil helps</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Keep it moist:</strong> Water lightly but frequently until germination</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Thing 4 */}
          <div className="bg-yellow-50 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-yellow-200 text-yellow-800 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
              <Sun className="w-6 h-6 text-yellow-600 mr-3" />
              Proper Nutrition
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Your lawn has been living off stored energy all winter, and those reserves are depleted. 
              It needs a good meal to fuel recovery and new growth.
            </p>
            
            <div className="bg-white rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Spring feeding strategy:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Wait for the right time:</strong> Soil temperature should be consistently above 55°F</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Use a balanced fertilizer:</strong> Look for something like 20-10-10 or similar</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Choose slow-release:</strong> Feeds your lawn gradually over months</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Water it in:</strong> Light watering helps activate the fertilizer</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-brand-light/10 to-brand-dark/10 rounded-lg p-4 mt-4">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-brand-dark">Timing matters:</strong> In Anchorage, this is usually late April to early May. 
                Too early and you're wasting money—the grass can\'t use it yet.
              </p>
            </div>
          </div>

          {/* Thing 5 */}
          <div className="bg-purple-50 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-purple-200 text-purple-800 rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
              <Scissors className="w-6 h-6 text-purple-600 mr-3" />
              Patience and Proper Mowing
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              I know you're eager to get that mower out, but hold your horses. Your lawn needs time to recover, 
              and cutting it too early or too short can set back its recovery by weeks.
            </p>
            
            <div className="bg-white rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Smart mowing for recovery:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Wait until it's actively growing:</strong> Grass should be 3-4 inches tall</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Set mower high:</strong> Cut at 3+ inches for the first few mows</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Sharp blades only:</strong> Dull blades tear grass and stress it further</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Never cut wet grass:</strong> Wait for dry conditions</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Leave clippings:</strong> They'll decompose and feed your recovering lawn</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Recovery Timeline */}
          <div className="bg-gradient-to-r from-brand-light to-brand-dark rounded-xl p-8 text-white mb-8">
            <h2 className="text-2xl font-bold mb-6">What to Expect: Recovery Timeline</h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Lawn recovery doesn't happen overnight. Here's a realistic timeline for Anchorage:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Weeks 1-2</h3>
                <ul className="text-blue-100 space-y-1 text-sm">
                  <li>• Cleanup and assessment</li>
                  <li>• Aeration and overseeding</li>
                  <li>• Still looks rough</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Weeks 3-6</h3>
                <ul className="text-blue-100 space-y-1 text-sm">
                  <li>• New growth starts</li>
                  <li>• First fertilizer application</li>
                  <li>• Gradual improvement</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Weeks 7-12</h3>
                <ul className="text-blue-100 space-y-1 text-sm">
                  <li>• Significant improvement</li>
                  <li>• Regular mowing begins</li>
                  <li>• Lawn looks great!</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-gray-700 mb-8 leading-relaxed text-lg">
            Remember, your lawn has been through a lot. With these five essential steps and a little patience, 
            it'll bounce back stronger than ever. By mid-summer, you'll have neighbors asking for your secret.
          </p>

          {/* CTA */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
            {/* Helpful Videos Section */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                🎥 Videos for Post-Winter Lawn Recovery
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Fixing Compacted Soil</h4>
                  <div className="space-y-4">
                    <div className="aspect-video">
                      <iframe 
                        className="w-full h-full rounded-lg" 
                        src="https://www.youtube.com/embed/KS5vPl7-zKk" 
                        frameBorder="0" 
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Repairing Dead Lawn Spots</h4>
                  <div className="space-y-4">
                    <div className="aspect-video">
                      <iframe 
                        className="w-full h-full rounded-lg" 
                        src="https://www.youtube.com/embed/3KjYrEVxKkU" 
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
                🎥 Videos for Post-Winter Lawn Recovery
              </h3>
              <div className="bg-white rounded-xl p-6">
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <strong>3 Simple Tips to Fix Compacted Soil</strong> by Chuck Morgan (6:04, 133K+ views)</li>
                  <li>• <strong>Fixing a dead spot in the lawn</strong> by The Lawn Review (0:34, 4K quality)</li>
                  <li>• <strong>How to Fix Dead Lawn?</strong> by AMSLandscaping (0:19, 96K+ views)</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want Professional Help with Lawn Recovery?
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Nursing a lawn back to health takes time, knowledge, and the right equipment. 
              Our spring recovery program includes everything your Anchorage lawn needs: 
              aeration, overseeding, fertilization, and expert care throughout the growing season.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-brand-light to-brand-dark text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-brand-dark hover:to-brand-light transition-all duration-300 shadow-lg"
            >
              Get Professional Lawn Recovery Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterWinterPost;