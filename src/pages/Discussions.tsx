import React, { useState } from 'react';
import { MessageSquarePlus } from 'lucide-react';
import DiscussionCard from '../components/DiscussionCard';
import NewDiscussionModal from '../components/NewDiscussionModal';

interface Discussion {
  title: string;
  author: string;
  avatar: string;
  preview: string;
  replies: number;
  likes: number;
  tags: string[];
}

export default function Discussions() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [discussions, setDiscussions] = useState<Discussion[]>([
    {
      title: "Best practices for React performance optimization",
      author: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400",
      preview: "I've been working on optimizing a large React application and wanted to share some tips...",
      replies: 15,
      likes: 32,
      tags: ["React", "Performance", "JavaScript"]
    },
    {
      title: "How to structure a large Next.js project?",
      author: "Alex Rodriguez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400",
      preview: "Looking for advice on organizing a complex Next.js project with multiple features...",
      replies: 8,
      likes: 24,
      tags: ["Next.js", "Architecture", "TypeScript"]
    },
    {
      title: "CSS Grid vs Flexbox - When to use what?",
      author: "David Kim",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400",
      preview: "Let's discuss the pros and cons of CSS Grid and Flexbox in different scenarios...",
      replies: 21,
      likes: 45,
      tags: ["CSS", "Layout", "Design"]
    }
  ]);

  const handleNewDiscussion = ({ title, preview, tags }: {
    title: string;
    preview: string;
    tags: string[];
  }) => {
    const newDiscussion: Discussion = {
      title,
      author: "Current User", // In a real app, this would come from auth
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400",
      preview,
      replies: 0,
      likes: 0,
      tags
    };
    setDiscussions([newDiscussion, ...discussions]);
  };

  const handleLike = (index: number) => {
    setDiscussions(discussions.map((discussion, i) => {
      if (i === index) {
        return { ...discussion, likes: discussion.likes + 1 };
      }
      return discussion;
    }));
  };

  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Community Discussions</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Join the conversation, share your knowledge, and learn from fellow developers.
        </p>
      </section>

      <div className="flex justify-end">
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
        >
          <MessageSquarePlus className="h-5 w-5 mr-2" />
          Start New Discussion
        </button>
      </div>

      <div className="space-y-6">
        {discussions.map((discussion, index) => (
          <div key={index} onClick={() => handleLike(index)} className="cursor-pointer">
            <DiscussionCard {...discussion} />
          </div>
        ))}
      </div>

      <NewDiscussionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleNewDiscussion}
      />
    </div>
  );
}