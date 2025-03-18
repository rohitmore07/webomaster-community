import React, { useState, useEffect, useRef } from 'react';
import { Bot, BookOpen, Map, FileText, Trophy, Newspaper, X, LogIn, LogOut, Users, ArrowRight, User, Cookie } from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import Roadmaps from './components/Roadmaps';
import Cheatsheets from './components/Cheatsheets';
import Notes from './components/Notes';
import Teams from './components/Teams';
import Events from './components/Events';
import News from './components/News';
import ChatBot from './components/ChatBot';
import Auth from './components/Auth';
import Profile from './components/Profile';
import { BlurredBackground } from './components/BlurredBackground';
import { IntroAnimation } from './components/IntroAnimation';
import { supabase } from './lib/supabase';

function App() {
  const [activeTab, setActiveTab] = useState('roadmaps');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showIntro, setShowIntro] = useState(true);
  const headerRef = useRef(null);
  const [cookieToastShown, setCookieToastShown] = useState(false);

  const tabs = [
    { id: 'roadmaps', label: 'Roadmaps', icon: Map },
    { id: 'cheatsheets', label: 'Cheatsheets', icon: BookOpen },
    { id: 'notes', label: 'Notes', icon: FileText },
    { id: 'teams', label: 'Teams', icon: Users },
    { id: 'events', label: 'Events', icon: Trophy },
    { id: 'news', label: 'Tech News', icon: Newspaper },
  ];

  useEffect(() => {
    if (!showIntro && !cookieToastShown) {
      const cookieChoice = localStorage.getItem('cookieConsent');
      if (!cookieChoice) {
        setCookieToastShown(true);
        const toastId = toast.custom(
          (t) => (
            <div className="glass-effect max-w-md w-full bg-[#1E293B] shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5">
              <div className="flex-1 w-0 p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 pt-0.5">
                    <Cookie className="h-10 w-10 text-indigo-500" />
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-white">
                      We use cookies to enhance your experience
                    </p>
                    <p className="mt-1 text-sm text-gray-400">
                      Choose your cookie preferences to continue browsing
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col border-l border-indigo-500/10">
                <button
                  onClick={() => {
                    localStorage.setItem('cookieConsent', 'accepted');
                    toast.dismiss(t.id);
                  }}
                  className="w-full border border-transparent rounded-none rounded-tr-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-400 hover:text-indigo-300 focus:outline-none"
                >
                  Sweet!
                </button>
                <button
                  onClick={() => {
                    localStorage.setItem('cookieConsent', 'rejected');
                    toast.dismiss(t.id);
                  }}
                  className="w-full border border-transparent rounded-none rounded-br-lg p-4 flex items-center justify-center text-sm font-medium text-gray-400 hover:text-gray-300 focus:outline-none"
                >
                  I'm on a diet
                </button>
              </div>
            </div>
          ),
          {
            duration: Infinity,
            position: 'bottom-center',
            id: 'cookie-consent'
          }
        );

        return () => toast.dismiss(toastId);
      }
    }
  }, [showIntro, cookieToastShown]);

  const handleNextTab = () => {
    const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1].id);
    }
  };

  useEffect(() => {
    async function initializeAuth() {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) throw error;
        setUser(session?.user ?? null);

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
          setUser(session?.user ?? null);
        });

        return () => subscription.unsubscribe();
      } catch (error) {
        console.error('Auth initialization error:', error);
        toast.error('Authentication service is currently unavailable');
      } finally {
        setIsLoading(false);
      }
    }

    initializeAuth();
  }, []);

  useEffect(() => {
    if (headerRef.current && !showIntro) {
      gsap.from(headerRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    }
  }, [showIntro]);

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      toast.success('Successfully logged out');
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Failed to log out');
    }
  };

  const renderContent = () => {
    if (isProfileOpen) {
      return (
        <AnimatePresence mode="wait">
          <motion.div
            key="profile"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Profile onClose={() => setIsProfileOpen(false)} />
          </motion.div>
        </AnimatePresence>
      );
    }

    const content = {
      roadmaps: <Roadmaps onNext={handleNextTab} />,
      cheatsheets: <Cheatsheets onNext={handleNextTab} />,
      notes: <Notes onNext={handleNextTab} />,
      teams: <Teams onNext={handleNextTab} />,
      events: <Events onNext={handleNextTab} />,
      news: <News onNext={handleNextTab} />,
    }[activeTab] || <Roadmaps onNext={handleNextTab} />;

    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {content}
        </motion.div>
      </AnimatePresence>
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0F172A] flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <>
      {showIntro ? (
        <IntroAnimation onComplete={() => setShowIntro(false)} />
      ) : (
        <div className="min-h-screen bg-[#0F172A] relative">
          <BlurredBackground />
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 5000,
              style: {
                background: '#1E293B',
                color: '#fff',
                border: '1px solid rgba(99, 102, 241, 0.1)',
              },
            }}
          />
          
          <header ref={headerRef} className="bg-[#0F172A]/90 backdrop-blur-lg border-b border-indigo-500/10 text-white py-6 sticky top-0 z-50">
            <div className="container mx-auto px-4 flex justify-between items-center">
              <div>
                <motion.h1 
                  className="text-3xl font-bold text-white neon-text"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Webo Master Community
                </motion.h1>
                <motion.p 
                  className="mt-2 text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Empowering Students in Tech
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center space-x-4"
              >
                {user ? (
                  <>
                    <button
                      onClick={() => setIsProfileOpen(true)}
                      className="flex items-center px-4 py-2 bg-indigo-500/10 rounded-lg text-sm font-medium text-white hover:bg-indigo-500/20 transition-colors"
                    >
                      <User className="w-4 h-4 mr-2" />
                      Profile
                    </button>
                    <button
                      onClick={handleLogout}
                      className="flex items-center px-4 py-2 bg-indigo-600 rounded-lg text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setIsAuthOpen(true)}
                    className="flex items-center px-4 py-2 bg-indigo-600 rounded-lg text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
                  >
                    <LogIn className="w-4 h-4 mr-2" />
                    Login
                  </button>
                )}
              </motion.div>
            </div>
          </header>

          <nav className="bg-[#0F172A]/90 backdrop-blur-lg border-b border-indigo-500/10 sticky top-20 z-40">
            <div className="container mx-auto px-4">
              <div className="flex space-x-1 overflow-x-auto">
                {tabs.map((tab, index) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setIsProfileOpen(false);
                    }}
                    className={`flex items-center px-4 py-3 text-sm font-medium transition-all ${
                      activeTab === tab.id && !isProfileOpen
                        ? 'bg-indigo-600 text-white rounded-lg'
                        : 'text-gray-400 hover:text-white hover:bg-indigo-500/10 rounded-lg'
                    }`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    <tab.icon className="w-4 h-4 mr-2" />
                    {tab.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </nav>

          <main className="container mx-auto px-4 py-8 relative z-10">
            <div className="glass-effect rounded-xl p-6 shadow-lg border border-indigo-500/10">
              {renderContent()}
            </div>
          </main>

          <div className="fixed bottom-4 right-4 z-40">
            <AnimatePresence>
              {!isChatOpen && (
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setIsChatOpen(true)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <Bot className="w-6 h-6" />
                </motion.button>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {isChatOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  className="glass-effect rounded-lg shadow-xl w-80 h-96 flex flex-col border border-indigo-500/10"
                >
                  <div className="bg-indigo-600 text-white p-4 rounded-t-lg flex justify-between items-center">
                    <div className="flex items-center">
                      <Bot className="w-5 h-5 mr-2" />
                      <span className="font-medium">Webomate</span>
                    </div>
                    <button
                      onClick={() => setIsChatOpen(false)}
                      className="text-white hover:text-indigo-200"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <ChatBot />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <AnimatePresence>
            {isAuthOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-[#0F172A]/80 backdrop-blur-sm flex items-center justify-center z-50"
              >
                <Auth onClose={() => setIsAuthOpen(false)} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </>
  );
}

export default App;