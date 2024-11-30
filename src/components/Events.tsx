import React from 'react';
import { Calendar } from 'lucide-react';

const Events = () => {
  const events = [
    {
      date: "2024-03-15",
      description: "Spring Classical Concert - Featuring Mozart's Symphony No. 40",
      location: "Carnegie Hall, New York"
    },
    {
      date: "2024-03-22",
      description: "Chamber Music Evening - Intimate performance of Beethoven's String Quartets",
      location: "Royal Albert Hall, London"
    },
    {
      date: "2024-04-05",
      description: "Contemporary Fusion Night - Blending Classical with Modern Elements",
      location: "Suntory Hall, Tokyo"
    },
    {
      date: "2024-04-15",
      description: "Annual Gala Performance - Celebrating Classical Innovation",
      location: "Sydney Opera House, Sydney"
    }
  ];

  return (
    <section id="events" className="py-20 bg-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Join us at our upcoming performances and special events.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-black/30">
                <th className="px-6 py-4 text-left">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-purple-400" />
                    Date
                  </div>
                </th>
                <th className="px-6 py-4 text-left">Description</th>
                <th className="px-6 py-4 text-left">Location</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr 
                  key={index} 
                  className="border-t border-purple-800 hover:bg-black/20 transition-colors"
                >
                  <td className="px-6 py-4">
                    {new Date(event.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </td>
                  <td className="px-6 py-4">{event.description}</td>
                  <td className="px-6 py-4">{event.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Events;