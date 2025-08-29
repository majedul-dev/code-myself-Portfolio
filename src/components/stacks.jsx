"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaNodeJs, FaReact, FaDatabase } from "react-icons/fa";
import { 
  SiExpress, SiTypescript, SiNextdotjs, SiPostgresql, 
  SiMongodb, SiTailwindcss, SiTrpc, SiRedux 
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const stacks = [
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-2xl" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300 text-2xl" /> },
  { name: "Typescript", icon: <SiTypescript className="text-blue-500 text-2xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white text-2xl" /> },
  { name: "React", icon: <FaReact className="text-sky-400 text-2xl" /> },
  { name: "React Native", icon: <TbBrandReactNative className="text-sky-500 text-2xl" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400 text-2xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-2xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-2xl" /> },
  { name: "tRPC", icon: <SiTrpc className="text-purple-400 text-2xl" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500 text-2xl" /> },
  { name: "& More as requirements", icon: <FaDatabase className="text-gray-400 text-2xl" /> },
];

export function Stacks() {
  const [showAll, setShowAll] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Check if we're on a large screen (lg breakpoint - 1024px and above)
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Show all stacks on large screens, otherwise follow showAll state
  const visibleStacks = isLargeScreen ? stacks : (showAll ? stacks : stacks.slice(0, 4));

  return (
    <section className="relative py-20 px-6 md:px-12 lg:px-20 bg-black text-white bg-gradient-to-br from-zinc-900 to-black border-b border-gray-800">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400"
        >
          I'm Expert on
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-lg text-gray-400"
        >
          Technologies and tools I use to build fast, scalable, and modern applications. Delivering{" "}
          <span className="text-white">high-performance</span> solutions across frontend, backend,
          databases, and cloud infrastructure.
        </motion.p>
      </div>

      {/* Container with fade effect */}
      <div className="relative max-w-5xl mx-auto">
        {/* Fade out effect container - only on small screens when not expanded */}
        <div className={`relative overflow-hidden ${!isLargeScreen && !showAll ? 'rounded-xl' : ''}`}>
          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              {visibleStacks.map((stack, idx) => (
                <motion.div
                  key={stack.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="rounded-xl border border-gray-800 bg-gradient-to-br from-zinc-900 to-black 
                            px-4 py-5 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 
                            transition-all cursor-pointer text-center flex flex-col items-center justify-center"
                >
                  <div className="mb-2">{stack.icon}</div>
                  <span className="text-sm md:text-base">{stack.name}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {/* Fade out overlay - only visible on small screens when not showing all */}
          {!isLargeScreen && !showAll && (
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
          )}
        </div>
        
        {/* Buttons container - positioned below the fade effect */}
        {/* Only show buttons on smaller screens */}
        {!isLargeScreen && (
          <div className="relative z-10 mt-6">
            {/* Show More button */}
            {!showAll && (
              <div className="text-center">
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  onClick={() => setShowAll(true)}
                  className="px-6 py-3 text-sm font-semibold rounded-xl text-white  transition-all"
                >
                  Show More
                </motion.button>
              </div>
            )}
            
            {/* Show Less button when expanded */}
            {showAll && (
              <div className="text-center">
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setShowAll(false)}
                  className="px-6 py-3 text-sm font-semibold rounded-xl text-white  transition-all"
                >
                  Show Less
                </motion.button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}