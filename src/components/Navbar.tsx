import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Info, BookOpen, Users, Library, MessageSquare, Menu } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/about', icon: Info, label: 'About' },
    { path: '/blog', icon: BookOpen, label: 'Blog' },
    { path: '/team', icon: Users, label: 'Team' },
    { path: '/resources', icon: Library, label: 'Resources' },
    { path: '/discussions', icon: MessageSquare, label: 'Discussions' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-indigo-950 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="./src/logo.png" 
              alt="Webo Master Logo" 
              className="h-10 w-10 rounded-full"
            />
            <span className="text-xl font-bold">Webo Master Community</span>
          </Link>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {navItems.map(({ path, icon: Icon, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center px-3 py-2 rounded-md transition-colors ${
                    isActive(path) ? 'bg-indigo-700' : 'hover:bg-indigo-700'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-2" />
                  {label}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-indigo-700"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center px-3 py-2 rounded-md transition-colors ${
                  isActive(path) ? 'bg-indigo-700' : 'hover:bg-indigo-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Icon className="h-5 w-5 mr-2" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}