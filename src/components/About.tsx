import React, { useState } from 'react';
import { Users, ChevronDown, ChevronUp } from 'lucide-react';

const About = () => {
  const [showAll, setShowAll] = useState(false);

  const members = [
    {
      name: 'Pratik Maharjan',
      instrument: 'Violin',
      image:
        'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    {
      name: 'Marcus Rodriguez',
      instrument: 'Piano',
      image:
        'https://images.unsplash.com/photo-1549442523-5426dd285c30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    {
      name: 'Elena Petrov',
      instrument: 'Cello',
      image:
        'https://images.unsplash.com/photo-1516307365426-bea591f05011?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    {
      name: 'David Kim',
      instrument: 'Percussion',
      image:
        'https://images.unsplash.com/photo-1461784121038-f088ca1e7714?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    {
      name: 'Sarah Chen',
      instrument: 'Viola',
      image:
        'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    {
      name: 'John Smith',
      instrument: 'Bass',
      image:
        'https://images.unsplash.com/photo-1511192336575-5a79af67a629?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    {
      name: 'Maria Garcia',
      instrument: 'Flute',
      image:
        'https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    {
      name: 'Alex Wong',
      instrument: 'Clarinet',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
  ];

  const visibleMembers = showAll ? members : members.slice(0, 4);

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-black to-purple-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-justify mb-16">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Shree Bhairab is a Traditional Musical Band and it is a cultural
            ensemble renowned for its vibrant performances deeply rooted in
            traditional Nepali music. The band typically consists of skilled
            musicians proficient in playing a variety of traditional instruments
            such as the madal (a type of hand drum), tabla, sarangi (a bowed
            string instrument), bansuri (bamboo flute), and various percussion
            instruments. We are an instrumental musical band dedicated to
            bringing soulful music to life through our performances. Our passion
            is to connect people through music. Our repertoire encompasses a
            wide range of traditional Nepali folk tunes, bhajans (devotional
            songs), and classical compositions. Shree Bhairab often performs at
            cultural events, festivals, weddings, and other celebratory
            occasions, where their energetic performances captivate audiences
            and evoke a sense of cultural pride. Our music reflects the rich
            cultural heritage of Nepal, incorporating elements of Hindu and
            Buddhist traditions, as well as influences from various ethnic
            communities across the country. Through their music, Shree Bhairab
            Musical Traditional Band preserves and promotes Nepal's musical
            heritage, contributing to the preservation of traditional art forms
            in the modern era. Shree Bhairab is a groundbreaking instrumental
            ensemble that bridges the gap between classical masterpieces and
            contemporary innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleMembers.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-purple-400">{member.instrument}</p>
              </div>
            </div>
          ))}
        </div>

        {members.length > 4 && (
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
      </div>
    </section>
  );
};

export default About;
