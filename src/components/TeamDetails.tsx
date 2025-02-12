import React from 'react';
import { ArrowLeft, Github, Globe, MessageSquare, Users, Star, Calendar, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface TeamDetailsProps {
  teamId: string;
  onBack: () => void;
}

const teamDetails = {
  id: '1',
  name: 'Web Warriors',
  description: 'Frontend and backend development experts focused on building scalable web applications and mentoring new developers.',
  founded: '2024-01-15',
  members: [
    {
      id: '1',
      name: 'Sarah Chen',
      role: 'Team Lead',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      github: 'sarahchen',
      contributions: 156
    },
    {
      id: '2',
      name: 'Alex Kumar',
      role: 'Senior Developer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      github: 'alexkumar',
      contributions: 143
    },
    {
      id: '3',
      name: 'Maria Garcia',
      role: 'Full Stack Developer',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      github: 'mariagarcia',
      contributions: 98
    }
  ],
  projects: [
    {
      id: '1',
      name: 'Community Learning Platform',
      description: 'A collaborative platform for sharing programming knowledge and resources.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'GraphQL'],
      stars: 156,
      status: 'Active',
      lastUpdated: '2024-03-10'
    },
    {
      id: '2',
      name: 'Code Review Assistant',
      description: 'AI-powered tool for automated code reviews and suggestions.',
      tech: ['TypeScript', 'Express', 'MongoDB', 'TensorFlow.js'],
      stars: 89,
      status: 'In Development',
      lastUpdated: '2024-03-08'
    }
  ],
  achievements: [
    'Best Open Source Contribution 2024',
    'Community Choice Award',
    '1000+ Pull Requests Merged'
  ]
};

export default function TeamDetails({ teamId, onBack }: TeamDetailsProps) {
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4">
        <button
          onClick={onBack}
          className="p-2 hover:bg-indigo-500/10 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h2 className="text-3xl font-bold text-white">{teamDetails.name}</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Team Info */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-effect rounded-xl p-6 border border-indigo-500/10"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <Calendar className="w-5 h-5 text-indigo-400" />
                <span className="text-gray-400">Founded {new Date(teamDetails.founded).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-indigo-400" />
                <span className="text-gray-400">{teamDetails.members.length} members</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6">{teamDetails.description}</p>
            
            <h3 className="text-xl font-semibold text-white mb-4">Achievements</h3>
            <div className="space-y-3">
              {teamDetails.achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 text-gray-300">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span>{achievement}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-effect rounded-xl p-6 border border-indigo-500/10"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              <MessageSquare className="w-5 h-5 mr-2" />
              Request to Join
            </button>
            <button className="w-full flex items-center justify-center px-4 py-2 bg-[#24292F] text-white rounded-lg hover:bg-[#1a1f24] transition-colors">
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </button>
            <button className="w-full flex items-center justify-center px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors">
              <Globe className="w-5 h-5 mr-2" />
              Visit Team Page
            </button>
          </div>
        </motion.div>
      </div>

      {/* Projects */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-white">Active Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamDetails.projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-effect rounded-xl p-6 border border-indigo-500/10"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-semibold text-white">{project.name}</h4>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="text-gray-400">{project.stars}</span>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className={`px-2 py-1 rounded-full ${
                  project.status === 'Active' ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'
                }`}>
                  {project.status}
                </span>
                <span className="text-gray-400">
                  Updated {new Date(project.lastUpdated).toLocaleDateString()}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team Members */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-white">Team Members</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamDetails.members.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-effect rounded-xl p-6 border border-indigo-500/10"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold text-white">{member.name}</h4>
                  <p className="text-gray-400">{member.role}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <a
                  href={`https://github.com/${member.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4 mr-1" />
                  {member.github}
                </a>
                <div className="flex items-center text-gray-400">
                  <Code2 className="w-4 h-4 mr-1" />
                  {member.contributions} contributions
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}