import React from 'react';
import { BookOpen, Star } from 'lucide-react';

const notes = [
  {
    title: 'Data Structures & Algorithms',
    topics: [
      'Arrays and Strings',
      'Linked Lists',
      'Trees and Graphs',
      'Dynamic Programming',
    ],
    featured: true,
  },
  {
    title: 'System Design',
    topics: [
      'Scalability',
      'Load Balancing',
      'Caching',
      'Database Sharding',
    ],
    featured: true,
  },
  {
    title: 'Web Security',
    topics: [
      'HTTPS & SSL/TLS',
      'Cross-Site Scripting (XSS)',
      'SQL Injection',
      'Authentication',
    ],
    featured: false,
  },
  {
    title: 'Design Patterns',
    topics: [
      'Creational Patterns',
      'Structural Patterns',
      'Behavioral Patterns',
      'Anti-patterns',
    ],
    featured: false,
  },
];

function Notes() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">Technical Notes</h2>
        <p className="mt-2 text-white">Comprehensive study materials for key topics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {notes.map((note, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 relative"
          >
            {note.featured && (
              <div className="absolute top-4 right-4">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
              </div>
            )}
            <div className="flex items-center mb-4">
              <BookOpen className="w-6 h-6 text-blue-800" />
              <h3 className="ml-3 text-xl font-semibold text-gray-900">{note.title}</h3>
            </div>
            <ul className="space-y-2">
              {note.topics.map((topic, topicIndex) => (
                <li
                  key={topicIndex}
                  className="flex items-center text-gray-700 hover:text-blue-800 cursor-pointer"
                >
                  <span className="w-2 h-2 bg-blue-800 rounded-full mr-2"></span>
                  {topic}
                </li>
              ))}
            </ul>
            <button className="mt-4 text-blue-800 hover:text-indigo-700 font-medium">
              View Full Notes →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;