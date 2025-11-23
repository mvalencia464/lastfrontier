"use client";

import React, { useEffect } from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';

const ReviewsSection = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://reputationhub.site/reputation/assets/review-widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="relative bg-stone-50 py-20 px-4 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
         <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="leaf-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M20 40C20 30 30 20 40 20C30 20 20 10 20 0C20 10 10 20 0 20C10 20 20 30 20 40Z" fill="currentColor" className="text-green-800"/>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#leaf-pattern)" />
         </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <iframe
          className='lc_reviews_widget'
          src='https://reputationhub.site/reputation/widgets/review_widget/wnfQfg2IIyeI7768WeGf?widgetId=691fa3e79fb28d0b060867c7'
          frameBorder='0'
          scrolling='no'
          style={{ minWidth: '100%', width: '100%', height: '800px' }}
        ></iframe>
      </div>
    </section>
  );
};

export default ReviewsSection;