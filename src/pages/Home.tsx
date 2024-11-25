import React from 'react';
import { ArrowRight, Github, Twitter, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Welcome to Webo Master Community</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Join our thriving community of web developers, designers & digital creators.
          <br/>Learn, share and grow together.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Learn Together",
            description: "Access curated resources and learn from experienced developers",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800",
            link: "/resources"
          },
          {
            title: "Share Knowledge",
            description: "Contribute to discussions and help others grow",
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800",
            link: "/discussions"
          },
          {
            title: "Stay Updated",
            description: "Read the latest blogs and stay on top of web development trends",
            image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800",
            link: "/blog"
          }
        ].map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <Link
                to={item.link}
                className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-indigo-50 rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Join?</h2>
        <p className="text-lg text-gray-600 mb-6">
          Become part of our growing community and take your web development skills to the next level.
        </p>
        <Link
          to="/about"
          className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
        >
          Get Started <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </section>

      <section className="text-center border-t border-gray-200 pt-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect With Us</h3>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/webomaster"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-8 w-8" />
          </a>
          <a
            href="https://x.com/webo_master"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-400 transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="h-8 w-8" />
          </a>
          <a
            href="https://www.linkedin.com/company/webo-master/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-700 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-8 w-8" />
          </a>
        </div>
      </section>
    </div>
  );
}