import React, { useState } from 'react';
import { Snowflake, Leaf, Sun, TreePine, Calendar, CheckCircle } from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('spring');

  const seasons = {
    spring: {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Spring Services',
      color: 'green',
      services: [
        { name: 'Spring Cleanups', price: 'Starting at $220', description: 'Complete property cleanup after winter' },
        { name: 'Fertilizer Application', price: '$55', description: 'Nutrient boost for healthy growth' },
        { name: 'Clear Leaves and Branches', price: 'Included', description: 'Remove winter debris' },
        { name: 'Haul Away Composting & Debris', price: 'Included', description: 'Complete cleanup service' },
        { name: 'Mow the Lawn', price: 'Included', description: 'First cut of the season' },
        { name: 'Redefine Lawn Borders', price: 'Included', description: 'Clean, crisp edges' }
      ]
    },
    summer: {
      icon: <Sun className="w-8 h-8" />,
      title: 'Summer Services',
      color: 'yellow',
      services: [
        { name: 'Lawn Mowing', price: 'Starting at $55', description: 'Regular maintenance cuts' },
        { name: 'Take Clippings', price: '$3 per bag', description: 'Clean removal of grass clippings' },
        { name: 'Midsummer Fertilizer', price: '$55 per bag', description: 'Keep your lawn healthy all season' },
        { name: 'Weed Control', price: 'Starting at $85', description: 'Targeted weed elimination' },
        { name: 'Pruning', price: 'Custom quote', description: 'Tree and shrub maintenance' },
        { name: 'Clean Up Branches and Debris', price: 'Included', description: 'Keep your property pristine' }
      ]
    },
    fall: {
      icon: <TreePine className="w-8 h-8" />,
      title: 'Fall Services',
      color: 'orange',
      services: [
        { name: 'Fall Cleanups', price: 'Starting at $220', description: 'Prepare your property for winter' },
        { name: 'Weed Control', price: 'Starting at $85', description: 'Pre-winter weed treatment' },
        { name: 'Mulch Leaves and Grass Clippings', price: 'Included', description: 'Natural lawn protection' },
        { name: 'Pruning', price: 'Custom quote', description: 'Prepare plants for winter' },
        { name: 'Clean Up Branches and Debris', price: 'Included', description: 'Complete fall preparation' }
      ]
    },
    winter: {
      icon: <Snowflake className="w-8 h-8" />,
      title: 'Winter Services',
      color: 'blue',
      services: [
        { name: 'Snow Plow Services', price: 'Starting at $55', description: 'Keep your driveway clear' },
        { name: 'Plow Driveway', price: 'Included', description: 'Safe vehicle access' },
        { name: 'Remove Snow from Walkway', price: 'Included', description: 'Safe pedestrian access' },
        { name: 'Lay Sand on Paths', price: 'Safety service', description: 'Prevent slips and falls' },
        { name: 'Sanding Services', price: 'Starting at $85', description: 'Enhanced traction and safety' }
      ]
    }
  };

  const getColorClasses = (color: string, active: boolean) => {
    const colors = {
      green: active ? 'bg-gradient-to-r from-brand-light to-brand-dark text-white' : 'text-brand-light hover:bg-blue-50',
      yellow: active ? 'bg-gradient-to-r from-brand-light to-brand-dark text-white' : 'text-brand-dark hover:bg-blue-50',
      orange: active ? 'bg-gradient-to-r from-brand-light to-brand-dark text-white' : 'text-brand-light hover:bg-blue-50',
      blue: active ? 'bg-gradient-to-r from-brand-light to-brand-dark text-white' : 'text-brand-dark hover:bg-blue-50'
    };
    return colors[color as keyof typeof colors];
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Year-Round Property Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional lawn care and snow removal services for all four seasons in Alaska. 
            We keep your property beautiful and accessible year-round.
          </p>
        </div>

        {/* Season Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(seasons).map(([key, season]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                getColorClasses(season.color, activeTab === key)
              }`}
            >
              {season.icon}
              <span>{season.title}</span>
            </button>
          ))}
        </div>

        {/* Active Season Services */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center justify-center mb-8">
            <div className={`p-4 rounded-full ${
              activeTab === 'spring' ? 'bg-gradient-to-r from-brand-light/20 to-brand-dark/20 text-brand-dark' :
              activeTab === 'summer' ? 'bg-gradient-to-r from-brand-light/20 to-brand-dark/20 text-brand-dark' :
              activeTab === 'fall' ? 'bg-gradient-to-r from-brand-light/20 to-brand-dark/20 text-brand-dark' :
              'bg-gradient-to-r from-brand-light/20 to-brand-dark/20 text-brand-dark'
            }`}>
              {seasons[activeTab as keyof typeof seasons].icon}
            </div>
            <h3 className="text-3xl font-bold text-gray-900 ml-4">
              {seasons[activeTab as keyof typeof seasons].title}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seasons[activeTab as keyof typeof seasons].services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-gray-900 text-lg">{service.name}</h4>
                  <CheckCircle className="w-5 h-5 text-brand-light flex-shrink-0 mt-1" />
                </div>
                <p className="text-gray-600 mb-3">{service.description}</p>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                  activeTab === 'spring' ? 'bg-gradient-to-r from-brand-light/20 to-brand-dark/20 text-brand-dark' :
                  activeTab === 'summer' ? 'bg-gradient-to-r from-brand-light/20 to-brand-dark/20 text-brand-dark' :
                  activeTab === 'fall' ? 'bg-gradient-to-r from-brand-light/20 to-brand-dark/20 text-brand-dark' :
                  'bg-gradient-to-r from-brand-light/20 to-brand-dark/20 text-brand-dark'
                }`}>
                  {service.price}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Us?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-light/20 to-brand-dark/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-brand-dark" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Book Online in 60 Seconds</h4>
              <p className="text-gray-600">
                We've made it simple to easily book your services for any season of the year. 
                Quick, convenient, and hassle-free scheduling.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-light/20 to-brand-dark/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-brand-light" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Professional & Reliable</h4>
              <p className="text-gray-600">
                Licensed and insured with years of experience serving Anchorage and Palmer. 
                Your property is in expert hands.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-light/20 to-brand-dark/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Snowflake className="w-8 h-8 text-brand-dark" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">All Four Seasons</h4>
              <p className="text-gray-600">
                From spring cleanups to winter snow removal, we provide comprehensive 
                year-round property maintenance services.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-brand-light to-brand-dark text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-brand-dark hover:to-brand-light transition-all duration-300 shadow-lg"
          >
            Get Your Free Estimate
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;