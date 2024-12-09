import React from 'react';
import { Youtube } from 'lucide-react';

const Media = () => {
  const videos = [
    {
      id: "dQw4w9WgXcQ",
      title: "Live at Symphony Hall"
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Behind the Scenes"
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Latest Performance"
    }
  ];

  const YOUTUBE_CHANNEL = "https://www.youtube.com/@YourChannel";

  return (
    <section id="media" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Media</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Watch our performances and subscribe to our channel for the latest updates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="space-y-4">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full rounded-lg"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={YOUTUBE_CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full transition-colors"
          >
            <Youtube className="w-5 h-5 mr-2" />
            Subscribe to Our Channel
          </a>
        </div>
      </div>
    </section>
  );
};

export default Media;