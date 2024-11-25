import React from 'react';
import { MessageCircle, ThumbsUp } from 'lucide-react';

interface DiscussionCardProps {
  title: string;
  author: string;
  avatar: string;
  preview: string;
  replies: number;
  likes: number;
  tags: string[];
}

export default function DiscussionCard({
  title,
  author,
  avatar,
  preview,
  replies,
  likes,
  tags
}: DiscussionCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center space-x-3">
        <img
          src={avatar}
          alt={author}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h3 className="font-medium text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">Posted by {author}</p>
        </div>
      </div>
      <p className="mt-3 text-gray-600">{preview}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-4 flex items-center space-x-4 text-gray-500">
        <div className="flex items-center space-x-1">
          <MessageCircle className="h-5 w-5" />
          <span>{replies}</span>
        </div>
        <div className="flex items-center space-x-1 group">
          <ThumbsUp className="h-5 w-5 group-hover:text-indigo-600 transition-colors" />
          <span className="group-hover:text-indigo-600 transition-colors">{likes}</span>
        </div>
      </div>
    </div>
  );
}