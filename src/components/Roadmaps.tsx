import React from 'react';
import { Code2, Globe, Database, File as Mobile, Cloud, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface RoadmapsProps {
  onNext: () => void;
}

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

function Roadmaps({ onNext }: RoadmapsProps) {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">Technology Roadmaps</h2>
        <p className="mt-2 text-white">Choose your learning path and start your journey</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roadmaps.map((roadmap, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-effect card-hover rounded-xl p-6 border border-gray-800"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-lg gradient-secondary">
                <roadmap.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="ml-3 text-xl font-semibold text-gray-100 neon-text">{roadmap.title}</h3>
            </div>
            <p className="text-gray-400 mb-4">{roadmap.description}</p>
            <div className="space-y-2 mb-6">
              {roadmap.path.map((step, stepIndex) => (
                <div
                  key={stepIndex}
                  className="flex items-center text-sm text-gray-300"
                >
                  <div className="w-6 h-6 flex items-center justify-center gradient-accent rounded-full text-white font-medium">
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
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="flex justify-end mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <button
          onClick={onNext}
          className="flex items-center px-6 py-3 gradient-secondary text-white rounded-lg transition-all duration-300 hover:scale-105 neon-glow"
        >
          Next: Cheatsheets
          <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </motion.div>
    </div>
  );
}

export default Roadmaps;