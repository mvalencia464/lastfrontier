import React from 'react';
import { ArrowLeft, Calendar, User, Clock, Scissors, Sun, Leaf, Snowflake } from 'lucide-react';

interface MowingGuidePostProps {
  onBack: () => void;
}

const MowingGuidePost: React.FC<MowingGuidePostProps> = ({ onBack }) => {
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
            How Often Should I Mow My Lawn in Anchorage? A Seasonal Guide
          </h1>
          
          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>May 20, 2024</span>
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
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_320/u_https://storage.googleapis.com/msgsndr/wnfQfg2IIyeI7768WeGf/media/68cb74e110510f58243125cf.webp"
            alt="Landscape shot of person on riding lawn mower cutting large lush green lawn in Anchorage on sunny day"
            className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            "How often should I mow my lawn?" It's the question I get asked most, and honestly, 
            the answer isn't as simple as "every week" or "every two weeks." 
            In Anchorage, our unique growing season means your mowing schedule needs to adapt to what Mother Nature throws at us.
          </p>

          <p className="text-gray-700 mb-8 leading-relaxed">
            The truth is, your grass doesn't care what day of the week it is. It grows based on temperature, moisture, and sunlight—
            and in Alaska, those factors change dramatically throughout the year. 
            Here's your month-by-month guide to keeping your Anchorage lawn looking its best.
          </p>

          {/* The Golden Rule */}
          <div className="bg-gradient-to-r from-brand-light to-brand-dark rounded-xl p-8 text-white mb-8">
            <h2 className="text-2xl font-bold mb-4">The Golden Rule of Mowing</h2>
            <p className="text-blue-100 mb-4 leading-relaxed text-lg">
              Never cut more than 1/3 of the grass blade at once.
            </p>
            <p className="text-blue-100 leading-relaxed">
              This isn't just some arbitrary rule—it's based on plant biology. When you cut more than a third of the blade, 
              you shock the grass and force it to use energy from its roots to regrow. This weakens the entire plant and makes it more susceptible to disease, drought, and pests.
            </p>
          </div>

          {/* Spring Schedule */}
          <div className="bg-green-50 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Leaf className="w-6 h-6 text-green-600 mr-3" />
              Spring (April - May): The Awakening
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Your grass is waking up from its winter nap, but it's not quite ready to party yet. 
              Growth is slow and inconsistent during this period.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Mowing Frequency:</h4>
                <p className="text-gray-700 mb-3">Every 10-14 days (or when grass reaches 4+ inches)</p>
                
                <h4 className="font-semibold text-gray-900 mb-2">Cutting Height:</h4>
                <p className="text-gray-700 mb-3">3-3.5 inches (keep it high for root development)</p>
                
                <h4 className="font-semibold text-gray-900 mb-2">Special Notes:</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Wait until soil is firm (not soggy)</li>
                  <li>• First cut may need to be higher</li>
                  <li>• Don't rush—let the grass establish</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-brand-light/10 to-brand-dark/10 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Why This Schedule Works:</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Cool soil temperatures mean slow growth. Cutting too frequently stresses grass that's already working hard to establish after winter. 
                  Higher cutting height helps develop strong root systems.
                </p>
              </div>
            </div>
          </div>

          {/* Summer Schedule */}
          <div className="bg-yellow-50 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Sun className="w-6 h-6 text-yellow-600 mr-3" />
              Summer (June - August): Peak Growing Season
            </h2>
            <div className="mb-6">
              <img 
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_320/u_https://storage.googleapis.com/msgsndr/wnfQfg2IIyeI7768WeGf/media/68cb74e110510f935b3125d0.webp"
                alt="Photo of well-maintained lawn with perfect straight mowing stripes receding into distance"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              This is when your lawn really takes off. Long daylight hours, warm temperatures, and (hopefully) adequate moisture 
              create perfect growing conditions. Your mower is about to become your best friend.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Mowing Frequency:</h4>
                <p className="text-gray-700 mb-3">Every 5-7 days during peak growth</p>
                
                <h4 className="font-semibold text-gray-900 mb-2">Cutting Height:</h4>
                <p className="text-gray-700 mb-3">2.5-3 inches (can go slightly lower)</p>
                
                <h4 className="font-semibold text-gray-900 mb-2">Special Notes:</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Mow in early morning or evening</li>
                  <li>• Leave clippings to decompose</li>
                  <li>• Adjust frequency based on rainfall</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-brand-light/10 to-brand-dark/10 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Pro Tips for Summer:</h4>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• After heavy rain, you might need to mow twice in one week</li>
                  <li>• During dry spells, raise the cutting height to 3+ inches</li>
                  <li>• Sharp blades are crucial—dull blades stress grass in heat</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Fall Schedule */}
          <div className="bg-orange-50 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Leaf className="w-6 h-6 text-orange-600 mr-3" />
              Fall (September - October): Slowing Down
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              As temperatures drop and daylight hours shorten, grass growth slows significantly. 
              Your lawn is preparing for winter, and your mowing schedule should reflect that.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Mowing Frequency:</h4>
                <p className="text-gray-700 mb-3">Every 10-14 days (gradually decreasing)</p>
                
                <h4 className="font-semibold text-gray-900 mb-2">Cutting Height:</h4>
                <p className="text-gray-700 mb-3">Gradually lower to 2 inches for final cut</p>
                
                <h4 className="font-semibold text-gray-900 mb-2">Special Notes:</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Final cut should be around 2 inches</li>
                  <li>• Remove all leaves before final mow</li>
                  <li>• Don't cut too short too early</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-brand-light/10 to-brand-dark/10 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">The Final Cut Strategy:</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Your last mow of the season is critical. Too long and grass will mat under snow (hello, snow mold). 
                  Too short and you stress the root system before winter. Aim for 2 inches—it's the sweet spot.
                </p>
              </div>
            </div>
          </div>

          {/* Winter */}
          <div className="bg-blue-50 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Snowflake className="w-6 h-6 text-blue-600 mr-3" />
              Winter (November - March): Rest Time
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Your mower gets a well-deserved break, and so do you! But this is a great time to maintain your equipment 
              and plan for next season.
            </p>
            
            <div className="bg-white rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Winter Mower Maintenance:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Clean and oil all metal parts</li>
                <li>• Sharpen or replace blades</li>
                <li>• Change oil and air filter</li>
                <li>• Store in a dry location</li>
                <li>• Run engine dry or use fuel stabilizer</li>
              </ul>
            </div>
          </div>

          {/* Factors That Change Everything */}
          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Factors That Change Everything</h2>
          <div className="mb-6">
            <img 
              src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_320/u_https://storage.googleapis.com/msgsndr/wnfQfg2IIyeI7768WeGf/media/68cb74e12a25a1267a47cbd8.webp"
              alt="Close-up shot of person's hands holding tape measure against lawn to measure grass height"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              These schedules are guidelines, but several factors can throw them out the window:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Weather Conditions</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Heavy rain:</strong> Grass grows faster, mow more frequently</li>
                  <li>• <strong>Drought:</strong> Growth slows, mow less often and higher</li>
                  <li>• <strong>Cool spell:</strong> Growth stops, skip a week</li>
                  <li>• <strong>Heat wave:</strong> Raise cutting height, mow early/late</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Grass Type & Health</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>New grass:</strong> Mow less frequently until established</li>
                  <li>• <strong>Fertilized lawn:</strong> Expect faster growth for 2-3 weeks</li>
                  <li>• <strong>Shaded areas:</strong> Grow slower, need less frequent cutting</li>
                  <li>• <strong>High-traffic areas:</strong> May need more frequent attention</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Reference */}
          <div className="bg-gradient-to-r from-brand-light to-brand-dark rounded-xl p-8 text-white mb-8">
            <h2 className="text-2xl font-bold mb-6">Quick Reference: Anchorage Mowing Calendar</h2>
            
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <h3 className="font-semibold mb-2">Spring</h3>
                <p className="text-blue-100 text-sm">Every 10-14 days</p>
                <p className="text-blue-100 text-sm">3-3.5" height</p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <h3 className="font-semibold mb-2">Summer</h3>
                <p className="text-blue-100 text-sm">Every 5-7 days</p>
                <p className="text-blue-100 text-sm">2.5-3" height</p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <h3 className="font-semibold mb-2">Fall</h3>
                <p className="text-blue-100 text-sm">Every 10-14 days</p>
                <p className="text-blue-100 text-sm">Lower to 2" final</p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <h3 className="font-semibold mb-2">Winter</h3>
                <p className="text-blue-100 text-sm">No mowing</p>
                <p className="text-blue-100 text-sm">Maintenance time</p>
              </div>
            </div>
          </div>

          <p className="text-gray-700 mb-8 leading-relaxed text-lg">
            Remember, these are guidelines, not rules carved in stone. Your lawn will tell you what it needs—
            you just need to know how to listen. When in doubt, follow the 1/3 rule and adjust based on what you see.
          </p>

          {/* CTA */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
            {/* Helpful Videos Section */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                🎥 Expert Mowing Guides
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Mowing Frequency & Timing</h4>
                  <div className="space-y-4">
                    <div className="aspect-video">
                      <iframe 
                        className="w-full h-full rounded-lg" 
                        src="https://www.youtube.com/embed/DLnYqk_Nc0Q" 
                        frameBorder="0" 
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Cool Season Lawn Care</h4>
                  <div className="space-y-4">
                    <div className="aspect-video">
                      <iframe 
                        className="w-full h-full rounded-lg" 
                        src="https://www.youtube.com/embed/pE6PaJ0_hXk" 
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
                🎥 Expert Mowing Guides
              </h3>
              <div className="bg-white rounded-xl p-6">
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <strong>How Often Should You Mow The Lawn?</strong> by The Lawn Care Nut (1:02, verified channel)</li>
                  <li>• <strong>Year-Round Cool-Season Lawn Care Calendar</strong> by DoMyOwn (4:16, 4K, CC available)</li>
                  <li>• <strong>How to Mow Your Lawn Correctly // Cool Season Lawn Guide</strong> by The Perfect Cut Lawn Care (2:48, 4K, CC available)</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Don't Want to Worry About Your Mowing Schedule?
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Let us handle the guesswork! Our professional mowing service adjusts to your lawn's needs throughout the season. 
              We know exactly when and how to cut for optimal health and appearance—so you can enjoy your weekends instead of spending them behind a mower.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-brand-light to-brand-dark text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-brand-dark hover:to-brand-light transition-all duration-300 shadow-lg"
            >
              Get Professional Mowing Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MowingGuidePost;