import React from 'react';
import { Code2, Globe, Database, File as Mobile, Cloud, ArrowRight } from 'lucide-react';

const roadmaps = [
  {
    title: 'Frontend Development',
    icon: Globe,
    description: 'Master HTML, CSS, JavaScript, and modern frameworks',
    path: [
      'HTML & CSS Fundamentals',
      'JavaScript Basics',
      'React/Vue/Angular',
      'State Management',
      'Build Tools',
    ],
    url: 'https://roadmap.sh/frontend',
  },
  {
    title: 'Backend Development',
    icon: Code2,
    description: 'Learn server-side programming and APIs',
    path: [
      'Programming Basics',
      'Node.js/Python/Java',
      'Databases',
      'REST APIs',
      'Authentication',
    ],
    url: 'https://roadmap.sh/backend',
  },
  {
    title: 'Database Engineering',
    icon: Database,
    description: 'Understanding data storage and management',
    path: [
      'SQL Basics',
      'Database Design',
      'NoSQL Databases',
      'Data Modeling',
      'Performance',
    ],
    url: 'https://roadmap.sh/postgresql-dba',
  },
  {
    title: 'Mobile Development',
    icon: Mobile,
    description: 'Build iOS and Android applications',
    path: [
      'Mobile UI Design',
      'React Native/Flutter',
      'Native Development',
      'App Store Deploy',
      'Mobile Security',
    ],
    url: 'https://roadmap.sh/android',
  },
  {
    title: 'Cloud Computing',
    icon: Cloud,
    description: 'Master cloud platforms and services',
    path: [
      'Cloud Basics',
      'AWS/Azure/GCP',
      'DevOps',
      'Containerization',
      'Serverless',
    ],
    url: 'https://roadmap.sh/devops',
  },
];

function Roadmaps() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Technology Roadmaps</h2>
        <p className="mt-2 text-gray-600">Choose your learning path and start your journey</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roadmaps.map((roadmap, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center mb-4">
              <roadmap.icon className="w-8 h-8 text-indigo-600" />
              <h3 className="ml-3 text-xl font-semibold text-gray-900">{roadmap.title}</h3>
            </div>
            <p className="text-gray-600 mb-4">{roadmap.description}</p>
            <div className="space-y-2 mb-6">
              {roadmap.path.map((step, stepIndex) => (
                <div
                  key={stepIndex}
                  className="flex items-center text-sm text-gray-700"
                >
                  <div className="w-6 h-6 flex items-center justify-center bg-indigo-100 rounded-full text-indigo-600 font-medium">
                    {stepIndex + 1}
                  </div>
                  <span className="ml-2">{step}</span>
                </div>
              ))}
            </div>
            <a
              href={roadmap.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              View Full Roadmap
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Roadmaps;