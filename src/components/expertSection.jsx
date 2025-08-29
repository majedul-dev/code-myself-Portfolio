"use client";

import { motion } from "framer-motion";

const stacks = [
  "Node.js",
  "Express.js",
  "Typescript",
  "Next.js",
  "React",
  "React Native",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "tRPC",
  "Redux",
  "& More as requirements"
];

export function ExpertSection() {
  return (
    <section className="relative py-10 px-6 md:px-12 lg:px-20 bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.15),transparent_70%)] pointer-events-none" />
    
      {/* Chip (Next.js style) */}
      <div className="relative flex justify-center mb-16">
        <div className="relative">
          {/* <div className="relative z-10 rounded-lg bg-neutral-900/70 px-6 py-3 text-lg font-semibold text-white shadow-[0_0_20px_rgba(139,92,246,0.25)] overflow-hidden">
            Experts on
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "linear",
              }}
            />
          </div> */}

          {/* Glowing Border Outline */}
          <motion.div
            className="absolute -inset-[2px] rounded-lg bg-gradient-to-r from-purple-500/40 via-fuchsia-500/40 to-purple-500/40 opacity-30 blur-md"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-3 text-xl text-gray-400"
        >
          These are the technologies I use to build scalable and modern
          applications.
        </motion.p>
      </div>

      {/* Tech Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {stacks.map((tech, idx) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="relative rounded-xl border border-gray-800 bg-gradient-to-br from-zinc-900 to-black 
                       p-4 text-center hover:border-purple-500/60 hover:shadow-lg 
                       hover:shadow-purple-500/20 transition-all"
          >
            <p className="text-base font-medium">{tech}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
