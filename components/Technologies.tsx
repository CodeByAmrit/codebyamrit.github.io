"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const technologies = [
  {
    name: "React",
    icon: (
      <Image
        src="/logo_dark.svg"
        alt="React"
        width={48}
        height={48}
        className="w-10 h-10 md:w-12 md:h-12 object-contain"
      />
    ),
  },
  {
    name: "Next.js",
    icon: (
      <Image
        src="/next-js-svgrepo-com.svg"
        alt="Next.js"
        width={48}
        height={48}
        className="w-10 h-10 md:w-12 md:h-12 object-contain"
      />
    ),
  },
  {
    name: "Node.js",
    icon: (
      <Image
        src="/nodejs-svgrepo-com.svg"
        alt="Node.js"
        width={48}
        height={48}
        className="w-10 h-10 md:w-12 md:h-12 object-contain"
      />
    ),
  },
  { name: "Docker", iconClass: "fi fi-brands-docker", color: "text-blue-400" },
  {
    name: "AWS",
    icon: (
      <Image
        src="/aws-svgrepo-com.svg"
        alt="AWS"
        width={48}
        height={48}
        className="w-10 h-10 md:w-12 md:h-12 object-contain"
      />
    ),
  },
  { name: "PostgreSQL", iconClass: "fi fi-brands-postgre", color: "text-blue-400" },
  {
    name: "MongoDB",
    icon: (
      <Image
        src="/mongodb-svgrepo-com.svg"
        alt="MongoDB"
        width={48}
        height={48}
        className="w-10 h-10 md:w-12 md:h-12 object-contain"
      />
    ),
  },
  {
    name: "Redis",
    icon: (
      <Image
        src="/redis-svgrepo-com.svg"
        alt="Redis"
        width={48}
        height={48}
        className="w-10 h-10 md:w-12 md:h-12 object-contain"
      />
    ),
  },
  {
    name: "Prisma",
    icon: (
      <Image
        src="/prisma-svgrepo-com.svg"
        alt="Prisma"
        width={48}
        height={48}
        className="w-10 h-10 md:w-12 md:h-12 object-contain"
      />
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <Image
        src="/tailwindcss-icon-svgrepo-com.svg"
        alt="Tailwind CSS"
        width={48}
        height={48}
        className="w-10 h-10 md:w-12 md:h-12 object-contain"
      />
    ),
  },
  { name: "Git", iconClass: "fi fi-brands-github", color: "text-orange-500" },
];

export default function Technologies() {
  return (
    <section id="technologies" className="section-pad relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-4 block">
            Skills & Technologies
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-[var(--font-poppins)]">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {technologies.map((tech, i) => {
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative aspect-square rounded-2xl glass border border-white/5 flex flex-col items-center justify-center p-4 hover:border-indigo-500/30 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-indigo-500/10 overflow-hidden">
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {tech.icon ? (
                    <div className="relative z-10 group-hover:scale-110 transition-all duration-500">
                      {tech.icon}
                    </div>
                  ) : (
                    <i className={`${tech.iconClass} text-4xl md:text-5xl group-hover:scale-110 transition-all duration-500 ${tech.color}`}></i>
                  )}
                  
                  <span className="mt-3 text-xs md:text-sm font-medium text-gray-500 group-hover:text-gray-200 transition-colors">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
