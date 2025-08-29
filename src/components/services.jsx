"use client";

import { motion } from "framer-motion";
import { FaRocket, FaShoppingCart, FaBlog, FaRobot, FaBriefcase, FaCloud, FaUsers } from "react-icons/fa";
import { DotGrid } from "./reactBits/DotGrid";

const services = [
  {
    title: "Starter",
    description: "Kickstart your project with clean, scalable, and well-structured starter templates ready for production.",
    icon: <FaRocket className="text-purple-400 text-3xl" />,
  },
  {
    title: "Ecommerce",
    description: "Build modern e-commerce platforms with product management, payments, and secure checkout flows.",
    icon: <FaShoppingCart className="text-purple-400 text-3xl" />,
  },
  {
    title: "Blog",
    description: "SEO-friendly blog platforms with markdown, CMS integration, and blazing-fast performance.",
    icon: <FaBlog className="text-purple-400 text-3xl" />,
  },
  {
    title: "Portfolio",
    description: "Craft professional portfolio websites that highlight your skills, experience, and achievements.",
    icon: <FaBriefcase className="text-purple-400 text-3xl" />,
  },
  {
    title: "SaaS",
    description: "Develop scalable SaaS applications with authentication, subscriptions, and cloud integration.",
    icon: <FaCloud className="text-purple-400 text-3xl" />,
  },
  {
    title: "Multi-tenant App",
    description: "Architect multi-tenant systems with role-based access, isolation, and high performance.",
    icon: <FaUsers className="text-purple-400 text-3xl" />,
  },
];

export function Services() {
  return (
    <section className="relative">
      <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
        <DotGrid
          dotSize={1}
          gap={15}
          baseColor="#292429"
          activeColor="#93489D"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
      <div className="relative py-20 px-6 md:px-12 lg:px-20 text-white">
        
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16 z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400"
          >
            What I Can Build for You
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-lg text-gray-400"
          >
            From simple starter templates to full-scale SaaS solutions, I build modern, scalable applications tailored to your needs.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="border border-gray-800 bg-gradient-to-br from-zinc-900 to-black p-6 hover:border-gray-600 hover:shadow-xl hover:shadow-purple-500/10 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
