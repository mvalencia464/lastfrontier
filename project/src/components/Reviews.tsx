import React from 'react';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      location: "Anchorage, AK",
      rating: 5,
      text: "The yard looked amazing when he and his team were done. I would highly recommend Last Frontier Lawn Company, and I will definitely use them again in the future.",
      service: "Spring Cleanup"
    },
    {
      name: "Mike Thompson",
      location: "Palmer, AK",
      rating: 5,
      text: "Jesse and his crew did an outstanding job with our snow removal this winter. Always prompt, professional, and thorough. Our driveway was always clear when we needed it.",
      service: "Snow Removal"
    },
    {
      name: "Lisa Chen",
      location: "Anchorage, AK",
      rating: 5,
      text: "Fantastic service! They transformed our overgrown yard into something beautiful. The attention to detail and professionalism was impressive. Highly recommend!",
      service: "Lawn Care"
    },
    {
      name: "Robert Davis",
      location: "Palmer, AK",
      rating: 5,
      text: "Been using Last Frontier for two years now. Reliable, fair pricing, and excellent work quality. Jesse is great to work with and always goes above and beyond.",
      service: "Year-Round Service"
    },
    {
      name: "Jennifer Martinez",
      location: "Anchorage, AK",
      rating: 5,
      text: "The fall cleanup service was exceptional. They removed all the leaves, trimmed the bushes, and prepared our yard perfectly for winter. Very satisfied!",
      service: "Fall Cleanup"
    },
    {
      name: "David Wilson",
      location: "Palmer, AK",
      rating: 5,
      text: "Professional, punctual, and reasonably priced. The online booking system made it so easy to schedule services. Will definitely continue using their services.",
      service: "Multiple Services"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers 
            throughout Anchorage and Palmer have to say about our services.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 relative"
            >
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-green-200" />
              </div>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(review.rating)}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{review.text}"
              </p>

              {/* Service Badge */}
              <div className="mb-4">
                <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  {review.service}
                </span>
              </div>

              {/* Customer Info */}
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900">{review.name}</h4>
                <p className="text-gray-600 text-sm">{review.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-brand-light to-brand-dark rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5★</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Join Our Happy Customers?
          </h3>
          <p className="text-gray-600 mb-6">
            Experience the Last Frontier difference for yourself
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-gradient-to-r from-brand-light to-brand-dark text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-brand-dark hover:to-brand-light transition-all duration-300 shadow-lg"
          >
            Get Your Free Estimate
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;