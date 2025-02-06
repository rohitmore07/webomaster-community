import React from 'react';
import { Users, Github, Globe, Star, MessageSquare } from 'lucide-react';

const teams = [
  {
    name: 'Web Warriors',
    description: 'Frontend and backend development experts',
    members: 12,
    projects: [
      {
        name: 'Community Learning Platform',
        tech: ['React', 'Node.js', 'PostgreSQL'],
        stars: 156
      },
      {
        name: 'Code Review Assistant',
        tech: ['TypeScript', 'Express', 'MongoDB'],
        stars: 89
      }
    ],
    openForMembers: true,
    tags: ['Web Development', 'Full Stack', 'Open Source']
  },
  {
    name: 'AI Innovators',
    description: 'Machine learning and AI enthusiasts',
    members: 8,
    projects: [
      {
        name: 'Student Mentor Bot',
        tech: ['Python', 'TensorFlow', 'FastAPI'],
        stars: 234
      }
    ],
    openForMembers: true,
    tags: ['AI', 'Machine Learning', 'Python']
  },
  {
    name: 'Mobile Mavens',
    description: 'Cross-platform mobile app developers',
    members: 10,
    projects: [
      {
        name: 'Study Group Finder',
        tech: ['React Native', 'Firebase'],
        stars: 167
      }
    ],
    openForMembers: false,
    tags: ['Mobile Development', 'React Native', 'iOS/Android']
  },
  {
    name: 'Cloud Champions',
    description: 'Cloud architecture and DevOps specialists',
    members: 15,
    projects: [
      {
        name: 'Serverless Learning Path',
        tech: ['AWS Lambda', 'Terraform'],
        stars: 198
      }
    ],
    openForMembers: true,
    tags: ['Cloud', 'DevOps', 'AWS']
  }
];

function Teams() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Community Teams</h2>
        <p className="mt-2 text-gray-600">Join specialized teams and contribute to exciting projects</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {teams.map((team, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">{team.name}</h3>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-indigo-600" />
                  <span className="text-gray-600">{team.members} members</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{team.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {team.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 flex items-center">
                  <Github className="w-5 h-5 mr-2" />
                  Active Projects
                </h4>
                {team.projects.map((project, projectIndex) => (
                  <div
                    key={projectIndex}
                    className="bg-gray-50 rounded-lg p-4 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">{project.name}</span>
                      <div className="flex items-center text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1 text-sm">{project.stars}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-white text-gray-600 rounded text-sm border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Globe className="w-4 h-4 mr-1" />
                  <span>{team.openForMembers ? 'Open for new members' : 'Team full'}</span>
                </div>
                <button
                  className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    team.openForMembers
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                  disabled={!team.openForMembers}
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  {team.openForMembers ? 'Request to Join' : 'Currently Full'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teams;