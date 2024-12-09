import React from 'react';
import { Calendar } from 'lucide-react';

const Events = () => {
  const events = [
    {
      date: "2024-03-15",
      title: "Spring Classical Night",
      location: "Symphony Hall, Boston",
      description: "An evening of classical masterpieces featuring our signature fusion style."
    },
    {
      date: "2024-04-20",
      title: "World Music Festival",
      location: "Central Park, New York",
      description: "Join us for an outdoor celebration of global musical traditions."
    },
    {
      date: "2024-05-10",
      title: "Contemporary Classics",
      location: "Opera House, Sydney",
      description: "A unique blend of classical and modern instrumental performances."
    }
  ];

  return (
    <section id="events" className="py-20 bg-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Join us at our upcoming performances and experience the magic live.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-purple-700">
                <th className="py-4 px-6">Date</th>
                <th className="py-4 px-6">Event</th>
                <th className="py-4 px-6">Location</th>
                <th className="py-4 px-6">Description</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr key={index} className="border-b border-purple-800/30 hover:bg-purple-800/20">
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-purple-400" />
                      {new Date(event.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                  </td>
                  <td className="py-4 px-6 font-medium">{event.title}</td>
                  <td className="py-4 px-6">{event.location}</td>
                  <td className="py-4 px-6 text-gray-300">{event.description}</td>
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