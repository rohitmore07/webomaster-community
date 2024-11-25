import React from 'react';
import { Book, Video, Code, Download } from 'lucide-react';

export default function Resources() {
  const resources = [
    {
      title: "React Fundamentals",
      type: "Tutorial",
      icon: Book,
      description: "A comprehensive guide to React basics and best practices",
      link: "#",
      category: "React"
    },
    {
      title: "TypeScript Deep Dive",
      type: "Course",
      icon: Video,
      description: "Master TypeScript with this in-depth video series",
      link: "#",
      category: "TypeScript"
    },
    {
      title: "CSS Grid Playground",
      type: "Tool",
      icon: Code,
      description: "Interactive tool to learn and experiment with CSS Grid",
      link: "#",
      category: "CSS"
    },
    {
      title: "Web Dev Starter Kit",
      type: "Template",
      icon: Download,
      description: "A collection of boilerplate code and best practices",
      link: "#",
      category: "Tools"
    }
  ];

  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Learning Resources</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Curated resources to help you master web development.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-6">
        {resources.map((resource, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <resource.icon className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{resource.title}</h3>
                <span className="text-sm text-indigo-600">{resource.type}</span>
              </div>
            </div>
            <p className="mt-4 text-gray-600">{resource.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                {resource.category}
              </span>
              <a
                href={resource.link}
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                Access Resource →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}