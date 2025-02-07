import React from 'react';
import { motion } from 'framer-motion';

export function BlurredBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gray-900">
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-fuchsia-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-indigo-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob" />
      </motion.div>
    </div>
  );
}