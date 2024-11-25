import React from 'react';
import FeaturedMember from '../components/FeaturedMember';

export default function Team() {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Lead Developer",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400",
      bio: "Full-stack developer with 8 years of experience in React and Node.js",
      github: "https://github.com",
      twitter: "https://twitter.com",
      website: "https://example.com"
    },
    {
      name: "Alex Rodriguez",
      role: "UI/UX Designer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400",
      bio: "Passionate about creating beautiful and intuitive user interfaces",
      github: "https://github.com",
      twitter: "https://twitter.com"
    },
    {
      name: "David Kim",
      role: "Content Lead",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400",
      bio: "Technical writer and educator specializing in web development",
      twitter: "https://twitter.com",
      website: "https://example.com"
    }
  ];

  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Team</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Meet the passionate individuals behind Webo Master who work tirelessly to support our community.
        </p>
      </section>

      <div className="grid md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <FeaturedMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
}