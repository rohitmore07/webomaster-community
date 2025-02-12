import React from 'react';
import { Code2, Database, Globe, Server, Smartphone, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const roadmaps = [
  {
    title: 'Frontend Development',
    description: 'Master modern web development',
    icon: Globe,
    path: [
      'HTML, CSS & JavaScript',
      'React & TypeScript',
      'State Management',
      'Testing & Deployment'
    ],
    url: '#'
  },
  {
    title: 'Backend Development',
    description: 'Build scalable server applications',
    icon: Server,
    path: [
      'Node.js Fundamentals',
      'API Development',
      'Database Design',
      'Server Architecture'
    ],
    url: '#'
  },
  {
    title: 'Mobile Development',
    description: 'Create cross-platform mobile apps',
    icon: Smartphone,
    path: [
      'React Native Basics',
      'Native APIs',
      'App State Management',
      'Publishing Apps'
    ],
    url: '#'
  },
  {
    title: 'DevOps & Cloud',
    description: 'Master cloud infrastructure',
    icon: Terminal,
    path: [
      'Linux & Shell Scripting',
      'Docker & Kubernetes',
      'CI/CD Pipelines',
      'Cloud Services'
    ],
    url: '#'
  },
  {
    title: 'Database Engineering',
    description: 'Design efficient data systems',
    icon: Database,
    path: [
      'SQL Fundamentals',
      'Database Design',
      'Performance Tuning',
      'Data Warehousing'
    ],
    url: '#'
  },
  {
    title: 'Full Stack Development',
    description: 'Become a complete developer',
    icon: Code2,
    path: [
      'Frontend & Backend',
      'Database Integration',
      'Authentication & Security',
      'System Architecture'
    ],
    url: '#'
  }
];

function Roadmaps() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">Learning Roadmaps</h2>
        <p className="mt-2 text-gray-400">Choose your path and start learning</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roadmaps.map((roadmap, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-effect rounded-xl p-6 border border-indigo-500/10 hover:border-indigo-500/20 transition-all"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-lg bg-indigo-600">
                <roadmap.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="ml-3 text-xl font-semibold text-white">{roadmap.title}</h3>
            </div>
            <p className="text-gray-400 mb-4">{roadmap.description}</p>
            <div className="space-y-3">
              {roadmap.path.map((step, stepIndex) => (
                <div key={stepIndex} className="flex items-center text-sm text-gray-300">
                  <div className="w-6 h-6 flex items-center justify-center bg-violet-600 rounded-full text-white font-medium">
                    {stepIndex + 1}
                  </div>
                  <span className="ml-2">{step}</span>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <a
                href={roadmap.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                View Full Roadmap
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Roadmaps;