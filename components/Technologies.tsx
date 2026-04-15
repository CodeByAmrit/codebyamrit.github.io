"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { MouseEvent } from "react";
import Magnetic from "./ui/Magnetic";

const technologies = [
  { name: "Framework", tech: "React 19", src: "/logo_dark.svg" },
  { name: "Architecture", tech: "Next.js 15", src: "/next-js-svgrepo-com.svg" },
  { name: "Runtime", tech: "Node.js", src: "/nodejs-svgrepo-com.svg" },
  { name: "Infrastructure", tech: "Docker", icon: "fi fi-brands-docker", color: "text-blue-400" },
  { name: "Cloud", tech: "AWS", src: "/aws-svgrepo-com.svg" },
  { name: "Database", tech: "Postgres", icon: "fi fi-brands-postgre", color: "text-blue-400" },
  { name: "Database", tech: "MongoDB", src: "/mongodb-svgrepo-com.svg" },
  { name: "Caching", tech: "Redis", src: "/redis-svgrepo-com.svg" },
  { name: "ORM", tech: "Prisma", src: "/prisma-svgrepo-com.svg" },
  { name: "Styling", tech: "Tailwind 4", src: "/tailwindcss-icon-svgrepo-com.svg" },
  { name: "DevOps", tech: "CI/CD", icon: "fi fi-brands-github", color: "text-white" },
];

function TechCard({ tech, index }: { tech: typeof technologies[0], index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      className="group relative"
    >
      <div className="relative h-full aspect-square rounded-3xl glass border border-white/5 bg-gradient-to-br from-white/5 to-transparent flex flex-col items-center justify-center p-6 hover:border-indigo-500/40 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
        {/* Spotlight Effect */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useTransform(
              [mouseX, mouseY],
              ([x, y]) => `radial-gradient(250px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.1), transparent 80%)`
            ),
          }}
        />

        <Magnetic>
          <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-4 transition-transform duration-500">
            {tech.src ? (
              <Image
                src={tech.src}
                alt={tech.tech}
                width={64}
                height={64}
                className="w-full h-full object-contain logo-glow"
              />
            ) : (
              <i className={`${tech.icon} text-4xl md:text-5xl ${tech.color} logo-glow`}></i>
            )}
          </div>
        </Magnetic>

        <div className="text-center relative z-10">
          <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-1 opacity-60 group-hover:opacity-100 transition-opacity">
            {tech.name}
          </p>
          <span className="text-sm font-black text-white/50 group-hover:text-white transition-colors duration-300">
            {tech.tech}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Technologies() {
  return (
    <section id="technologies" className="section-pad relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-xs font-bold tracking-[0.4em] text-indigo-400 uppercase mb-6 block">
            The Stack
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white font-[var(--font-poppins)] tracking-tighter">
            Architectural <span className="gradient-text">DNA</span>
          </h2>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Engineering robust digital ecosystems with high-performance, industry-standard modern tooling.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
          {technologies.map((tech, i) => (
            <TechCard key={tech.tech} tech={tech} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

