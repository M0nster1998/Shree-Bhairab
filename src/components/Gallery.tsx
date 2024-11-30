import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, ChevronDown, ChevronUp } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  
  const images = [
    "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1516307365426-bea591f05011?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  ];

  const visibleImages = showAll ? images : images.slice(0, 3);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      } else if (e.key === 'ArrowRight') {
        navigateImage('next');
      } else if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(prev => (prev === 0 ? images.length - 1 : prev - 1));
    } else {
      setSelectedImage(prev => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Gallery</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Capturing moments from our performances around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {visibleImages.map((src, index) => (
            <div
              key={index}
              className="aspect-[4/3] overflow-hidden rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {images.length > 3 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors"
            >
              {showAll ? (
                <>
                  View Less <ChevronUp className="ml-2 w-5 h-5" />
                </>
              ) : (
                <>
                  View More <ChevronDown className="ml-2 w-5 h-5" />
                </>
              )}
            </button>
          </div>
        )}

        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
              onClick={() => navigateImage('prev')}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <img
              src={images[selectedImage]}
              alt={`Full screen image ${selectedImage + 1}`}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
            
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
              onClick={() => navigateImage('next')}
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;