import React from 'react';
import { Calendar } from 'lucide-react';

const Tour = () => {
  const tourDates = [
    {
      date: "Mar 15, 2024",
      city: "New York",
      venue: "Carnegie Hall",
      status: "On Sale"
    },
    {
      date: "Mar 22, 2024",
      city: "London",
      venue: "Royal Albert Hall",
      status: "Sold Out"
    },
    {
      date: "Apr 5, 2024",
      city: "Tokyo",
      venue: "Suntory Hall",
      status: "On Sale"
    },
    {
      date: "Apr 15, 2024",
      city: "Sydney",
      venue: "Opera House",
      status: "On Sale"
    }
  ];

  return (
    <section id="tour" className="py-20 bg-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Tour Dates</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Join us on our world tour and experience the magic of live performance.
          </p>
        </div>

        <div className="space-y-4">
          {tourDates.map((event, index) => (
            <div key={index} className="bg-black/30 rounded-lg p-6 flex flex-wrap items-center justify-between hover:bg-black/40 transition-colors">
              <div className="flex items-center space-x-6">
                <Calendar className="w-6 h-6 text-purple-400" />
                <div>
                  <p className="font-semibold">{event.date}</p>
                  <p className="text-gray-400">{event.venue}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-lg font-medium">{event.city}</span>
                <button
                  className={`px-6 py-2 rounded-full ${
                    event.status === "Sold Out"
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-purple-600 hover:bg-purple-700"
                  }`}
                  disabled={event.status === "Sold Out"}
                >
                  {event.status}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tour;