import React from 'react';
import { Calendar, User, Clock } from 'lucide-react';

export default function Blog() {
  const blogs = [
    {
      title: "Getting Started with React 18",
      preview: "Learn about the latest features in React 18 and how to implement them in your projects...",
      author: "Sarah Chen",
      date: "2024-03-15",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800",
      category: "React"
    },
    {
      title: "Modern CSS Techniques",
      preview: "Explore modern CSS features and best practices for better web development...",
      author: "Alex Rodriguez",
      date: "2024-03-14",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&w=800",
      category: "CSS"
    },
    {
      title: "TypeScript Best Practices",
      preview: "Discover how to write better TypeScript code with these essential tips and tricks...",
      author: "David Kim",
      date: "2024-03-13",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800",
      category: "TypeScript"
    }
  ];

  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Latest Blog Posts</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay updated with the latest web development trends, tutorials, and best practices.
        </p>
      </section>

      <div className="grid gap-8">
        {blogs.map((blog, index) => (
          <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full md:w-48 object-cover"
                  src={blog.image}
                  alt={blog.title}
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">
                  {blog.category}
                </div>
                <h2 className="mt-2 text-xl font-semibold text-gray-900">
                  {blog.title}
                </h2>
                <p className="mt-3 text-gray-600">
                  {blog.preview}
                </p>
                <div className="mt-4 flex items-center text-gray-500 space-x-6">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    {blog.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {blog.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {blog.readTime}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}