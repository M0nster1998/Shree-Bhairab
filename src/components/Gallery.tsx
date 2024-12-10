import React, { useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Group1 from '../assets/Group1.jpg';

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);

  const photos = [
    {
      url: "/assets/Group1.jpg",
      title: "Concert Performance",
      description: "Live at Symphony Hall"
    },
    {
      url: "/path/to/your/photo2.jpg",
      title: "Rehearsal Session",
      description: "Preparing for the big night"
    },
    {
      url: "/path/to/your/photo3.jpg",
      title: "Studio Recording",
      description: "Creating magic in the studio"
    },
    {
      url: "/path/to/your/photo4.jpg",
      title: "Backstage Moments",
      description: "Behind the scenes"
    },
    {
      url: "/path/to/your/photo5.jpg",
      title: "Fan Meet & Greet",
      description: "Connecting with our amazing fans"
    },
    {
      url: "/path/to/your/photo6.jpg",
      title: "World Tour",
      description: "Performing across the globe"
    }
  ];

  const visiblePhotos = showAll ? photos : photos.slice(0, 3);

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Gallery</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our performances and behind-the-scenes moments.
          </p>
        </div>

        <PhotoProvider>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visiblePhotos.map((photo, index) => (
              <PhotoView key={index} src={photo.url}>
                <div className="group cursor-pointer overflow-hidden rounded-lg relative">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-lg font-semibold text-white">{photo.title}</h3>
                    <p className="text-sm text-gray-300">{photo.description}</p>
                  </div>
                </div>
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>

        {photos.length > 3 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-colors"
            >
              <span>{showAll ? 'Show Less' : 'View More'}</span>
              {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        )}

        <div className="mt-4 text-center text-gray-400 text-sm">
          <p>Click images to view in full screen</p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
