import React from 'react';
import { Code, Users, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Webo Master</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're a passionate community dedicated to advancing web development education and collaboration.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: Code,
            title: "Our Mission",
            description: "To provide a collaborative platform where web developers can learn, share, and grow together."
          },
          {
            icon: Users,
            title: "Our Community",
            description: "A diverse group of developers, from beginners to experts, all united by their passion for web development."
          },
          {
            icon: Heart,
            title: "Our Values",
            description: "We believe in open knowledge sharing, mutual respect, and continuous learning."
          }
        ].map((item, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-md">
            <item.icon className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </section>

      <section className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
        <div className="prose max-w-none text-gray-600">
          <p className="mb-4">
            Founded in 2024, Webo Master began as a small group of passionate developers who wanted to create
            a space where knowledge sharing and collaboration could thrive. Today, we've grown into a vibrant
            community with members from all around the world.
          </p>
          <p className="mb-4">
            Our platform serves as a hub for web development resources, discussions, and networking. We believe
            that everyone has something valuable to contribute, regardless of their experience level.
          </p>
          <p>
            Through our various initiatives - from blog posts to resource sharing and team collaborations -
            we're working to make web development more accessible and enjoyable for everyone.
          </p>
        </div>
      </section>
    </div>
  );
}