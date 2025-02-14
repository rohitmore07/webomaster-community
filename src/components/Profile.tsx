import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Star, GitBranch, Award, Briefcase, Book, ArrowUpRight, Github, ArrowLeft } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { AnimatedCard } from './AnimatedCard';

interface ProfileProps {
  onClose: () => void;
}

interface Skill {
  name: string;
  level: number;
  endorsements: number;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  previewUrl: string;
  stars: number;
}

interface Contribution {
  type: string;
  description: string;
  date: string;
  url: string;
}

interface Achievement {
  title: string;
  description: string;
  date: string;
  icon: string;
}

export default function Profile({ onClose }: ProfileProps) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('skills');

  const skills: Skill[] = [
    { name: 'React', level: 90, endorsements: 45 },
    { name: 'TypeScript', level: 85, endorsements: 38 },
    { name: 'Node.js', level: 80, endorsements: 32 },
    { name: 'GraphQL', level: 75, endorsements: 28 },
    { name: 'AWS', level: 70, endorsements: 25 },
  ];

  const projects: Project[] = [
    {
      title: 'E-Learning Platform',
      description: 'A comprehensive platform for online education with real-time collaboration features.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'WebRTC'],
      githubUrl: '#',
      previewUrl: '#',
      stars: 128
    },
    {
      title: 'Developer Portfolio Generator',
      description: 'Automated portfolio generator for developers using GitHub API integration.',
      technologies: ['TypeScript', 'Next.js', 'Tailwind CSS'],
      githubUrl: '#',
      previewUrl: '#',
      stars: 89
    }
  ];

  const contributions: Contribution[] = [
    {
      type: 'Pull Request',
      description: 'Implemented dark mode support in documentation site',
      date: '2024-03-10',
      url: '#'
    },
    {
      type: 'Issue',
      description: 'Fixed memory leak in WebSocket connection',
      date: '2024-03-08',
      url: '#'
    }
  ];

  const achievements: Achievement[] = [
    {
      title: 'Top Contributor',
      description: 'Ranked in top 1% of contributors for React documentation',
      date: '2024-03',
      icon: 'trophy'
    },
    {
      title: 'Bug Hunter',
      description: 'Found and fixed 50+ critical bugs in open source projects',
      date: '2024-02',
      icon: 'bug'
    }
  ];

  useEffect(() => {
    async function getProfile() {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', session.user.id)
            .single();

          if (error) throw error;
          setUser(data);
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setLoading(false);
      }
    }

    getProfile();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  const renderSkills = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skills.map((skill, index) => (
        <AnimatedCard key={skill.name} delay={index * 0.1}>
          <div className="glass-effect rounded-xl p-6 border border-indigo-500/10">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
              <span className="text-indigo-400">{skill.endorsements} endorsements</span>
            </div>
            <div className="relative h-2 bg-[#1E293B] rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-indigo-600 rounded-full"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        </AnimatedCard>
      ))}
    </div>
  );

  const renderProjects = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <AnimatedCard key={project.title} delay={index * 0.1}>
          <div className="glass-effect rounded-xl p-6 border border-indigo-500/10">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="ml-1 text-gray-400">{project.stars}</span>
              </div>
            </div>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              <a
                href={project.githubUrl}
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4 mr-1" />
                Repository
              </a>
              <a
                href={project.previewUrl}
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <ArrowUpRight className="w-4 h-4 mr-1" />
                Live Preview
              </a>
            </div>
          </div>
        </AnimatedCard>
      ))}
    </div>
  );

  const renderContributions = () => (
    <div className="space-y-6">
      {contributions.map((contribution, index) => (
        <AnimatedCard key={index} delay={index * 0.1}>
          <div className="glass-effect rounded-xl p-6 border border-indigo-500/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <GitBranch className="w-5 h-5 text-indigo-400 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold text-white">{contribution.type}</h3>
                  <p className="text-gray-400">{contribution.description}</p>
                </div>
              </div>
              <span className="text-gray-500">{contribution.date}</span>
            </div>
          </div>
        </AnimatedCard>
      ))}
    </div>
  );

  const renderAchievements = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {achievements.map((achievement, index) => (
        <AnimatedCard key={index} delay={index * 0.1}>
          <div className="glass-effect rounded-xl p-6 border border-indigo-500/10">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-indigo-600">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{achievement.title}</h3>
                <p className="text-gray-400">{achievement.description}</p>
                <span className="text-sm text-gray-500">{achievement.date}</span>
              </div>
            </div>
          </div>
        </AnimatedCard>
      ))}
    </div>
  );

  const tabs = [
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contributions', label: 'Contributions', icon: GitBranch },
    { id: 'achievements', label: 'Achievements', icon: Book },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4 mb-6">
        <button
          onClick={onClose}
          className="p-2 hover:bg-indigo-500/10 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h2 className="text-2xl font-bold text-white">Your Profile</h2>
      </div>

      <div className="glass-effect rounded-xl p-8 border border-indigo-500/10">
        <div className="flex items-center space-x-6">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-2 border-indigo-500"
          />
          <div>
            <h2 className="text-2xl font-bold text-white">John Developer</h2>
            <p className="text-gray-400">Senior Full Stack Engineer</p>
            <div className="flex items-center space-x-4 mt-2">
              <a
                href="#"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4 mr-1" />
                @johndeveloper
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex space-x-1 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? 'bg-indigo-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-indigo-500/10'
            }`}
          >
            <tab.icon className="w-4 h-4 mr-2" />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-8">
        {activeTab === 'skills' && renderSkills()}
        {activeTab === 'projects' && renderProjects()}
        {activeTab === 'contributions' && renderContributions()}
        {activeTab === 'achievements' && renderAchievements()}
      </div>
    </div>
  );
}