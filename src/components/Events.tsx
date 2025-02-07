import React from 'react';
import { Calendar, Trophy, Users, MapPin } from 'lucide-react';

const events = [
  {
    title: 'Web Development Hackathon 2024',
    date: '2024-04-15',
    type: 'Hackathon',
    location: 'Virtual',
    registrationUrl: '#',
    description: 'Build innovative web applications in 48 hours',
  },
  {
    title: 'Cloud Computing Workshop',
    date: '2024-04-20',
    type: 'Workshop',
    location: 'Online',
    registrationUrl: '#',
    description: 'Learn AWS fundamentals and best practices',
  },
  {
    title: 'Mobile App Development Challenge',
    date: '2024-05-01',
    type: 'Hackathon',
    location: 'Hybrid',
    registrationUrl: '#',
    description: 'Create the next revolutionary mobile app',
  },
];

function Events() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">Upcoming Events</h2>
        <p className="mt-2 text-white">Join exciting hackathons and workshops</p>
      </div>

      <div className="space-y-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(event.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {event.location}
                  </div>
                  <div className="flex items-center">
                    <Trophy className="w-4 h-4 mr-1" />
                    {event.type}
                  </div>
                </div>
                <p className="text-gray-600">{event.description}</p>
              </div>
              <div className="mt-4 md:mt-0">
                <a
                  href={event.registrationUrl}
                  className="inline-flex items-center px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition-colors"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Register Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;