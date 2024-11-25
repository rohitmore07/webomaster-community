import React from 'react';
import { Github, Twitter, Globe } from 'lucide-react';

interface FeaturedMemberProps {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  github?: string;
  twitter?: string;
  website?: string;
}

export default function FeaturedMember({
  name,
  role,
  avatar,
  bio,
  github,
  twitter,
  website
}: FeaturedMemberProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transform transition-all hover:scale-105">
      <div className="flex items-center space-x-4">
        <img
          src={avatar}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
          <p className="text-indigo-600">{role}</p>
        </div>
      </div>
      <p className="mt-4 text-gray-600">{bio}</p>
      <div className="mt-4 flex space-x-4">
        {github && (
          <a href={github} className="text-gray-600 hover:text-gray-900">
            <Github className="h-5 w-5" />
          </a>
        )}
        {twitter && (
          <a href={twitter} className="text-gray-600 hover:text-gray-900">
            <Twitter className="h-5 w-5" />
          </a>
        )}
        {website && (
          <a href={website} className="text-gray-600 hover:text-gray-900">
            <Globe className="h-5 w-5" />
          </a>
        )}
      </div>
    </div>
  );
}