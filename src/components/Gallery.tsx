import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      title: "Beautiful Lawn Care",
      category: "Summer",
      url: "https://storage.googleapis.com/msgsndr/wnfQfg2IIyeI7768WeGf/media/68cb62a2a17f97796e1f75c2.webp"
    },
    {
      title: "Professional Landscaping",
      category: "Spring",
      url: "https://storage.googleapis.com/msgsndr/wnfQfg2IIyeI7768WeGf/media/6352aed8be5fbddaf682d627.webp"
    },
    {
      url: "https://storage.googleapis.com/msgsndr/wnfQfg2IIyeI7768WeGf/media/6352aed8be5fbd09fa82d625.webp",
      title: "Property Care",
      category: "Fall"
    },
    {
      url: "https://storage.googleapis.com/msgsndr/wnfQfg2IIyeI7768WeGf/media/6352aed8be5fbd30f682d628.webp",
      title: "Seasonal Cleanup",
      category: "Spring"
    },
    {
      url: "https://storage.googleapis.com/msgsndr/wnfQfg2IIyeI7768WeGf/media/6352aed8be5fbd30f682d628.webp",
      title: "Yard Work",
      category: "Summer"
    },
    {
      url: "https://storage.googleapis.com/msgsndr/wnfQfg2IIyeI7768WeGf/media/6352aed8be5fbd30ed82d623.webp",
      title: "Professional Results",
      category: "Fall"
    },
    {
      url: "/snowy-plow.png",
      title: "Snow Plow in Action",
      category: "Winter"
    },
    {
      url: "/plow.png",
      title: "Snow Removal Equipment", 
      category: "Winter"
    }
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      Spring: 'bg-gradient-to-r from-brand-light/20 to-brand-dark/20 text-brand-dark',
      Summer: 'bg-gradient-to-r from-brand-light/20 to-brand-dark/20 text-brand-dark',
      Fall: 'bg-gradient-to-r from-brand-light/20 to-brand-dark/20 text-brand-dark',
      Winter: 'bg-gradient-to-r from-brand-light/20 to-brand-dark/20 text-brand-dark'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Work Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the quality and attention to detail that goes into every project. 
            From spring cleanups to winter snow removal, we take pride in our work.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white">
                  <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(image.category)}`}>
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X className="w-8 h-8" />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <img
                src={images[selectedImage].url}
                alt={images[selectedImage].title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold mb-1">{images[selectedImage].title}</h3>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(images[selectedImage].category)}`}>
                  {images[selectedImage].category}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;