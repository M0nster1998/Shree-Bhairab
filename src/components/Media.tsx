import React from 'react';
import YouTube from 'react-youtube';
import { Play, Youtube as YoutubeIcon } from 'lucide-react';

const Media = () => {
  const videos = [
    { id: 'uOVzqqKgd9g', title: 'Puwacha Nipucha × Asaraya Sina Jya' },
    { id: 'dQw4w9WgXcQ', title: 'Behind the Scenes' },
    { id: 'dQw4w9WgXcQ', title: 'Music Video - Ethereal Dreams' }
  ];

  return (
    <section id="media" className="py-20 bg-gradient-to-b from-purple-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Media</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Watch our latest performances and music videos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="bg-black/30 rounded-lg overflow-hidden">
              <div className="aspect-video">
                <YouTube
                  videoId={video.id}
                  opts={{
                    width: '100%',
                    height: '100%',
                    playerVars: {
                      modestbranding: 1,
                      rel: 0
                    }
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                <button className="flex items-center text-purple-400 hover:text-purple-300">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.youtube.com/@shreebhairab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full transition-colors"
          >
            <YoutubeIcon className="w-5 h-5 mr-2" />
            Subscribe to Our Channel
          </a>
        </div>
      </div>
    </section>
  );
};

export default Media;
