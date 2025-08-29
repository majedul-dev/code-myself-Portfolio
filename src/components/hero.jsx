"use client"
import { motion } from "framer-motion";
// import { SplitText } from "@/components/reactBits/SplitText";
import { LightRays } from "@/components/reactBits/LightRays";
import { StarBorder } from "@/components/reactBits/StarBorder";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden pt-16 md:px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_70%)]"></div>

      <div style={{ width: '100%', height: '600px', position: 'absolute' }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="absolute top-0/4 left-1/2 w-[28rem] h-[28rem] bg-purple-500/20 rounded-full blur-3xl animate-float"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
      >
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <div className="w-110 h-100 overflow-hidden border-gray-700 shadow-lg mb-4">
          <img
            src="me.png"
            alt="Mazedul"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-6xl font-extrabold tracking-tight 
          bg-clip-text text-transparent 
          bg-gradient-to-r from-gray-200 to-gray-400">
          Hi, I am Mazedul
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-lg text-gray-400"
        >
          Full-Stack Web and Mobile Application Developer since 2020. Working on personal and freelance projects
        </motion.p>
        <div className="flex items-center gap-4 justify-center h-full text-center py-8">
          <StarBorder
            as="button"
            className="cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95"
            color="#ff00ff"
            speed="5s"
          >
            My Works
          </StarBorder>
          <StarBorder
            as="button"
            className="cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95"
            color="#ff00ff"
            speed="5s"
          >
            Hire me
          </StarBorder>
        </div>
      </div>
      </motion.div>
    </section>
  );
}
