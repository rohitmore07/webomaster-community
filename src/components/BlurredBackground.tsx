import React from 'react';
import { motion } from 'framer-motion';

export function BlurredBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0F172A]">
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full mix-blend-screen filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full mix-blend-screen filter blur-3xl" />
      </motion.div>
    </div>
  );
}