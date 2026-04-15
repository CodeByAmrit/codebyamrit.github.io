"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { MouseEvent } from "react";
import Magnetic from "./ui/Magnetic";

const experiences = [
  {
    iconClass: "fi fi-rr-layers",
    title: "Full Stack Engineering",
    subtitle: "Architecture & Implementation",
    description: "Specializing in high-performance digital ecosystems. From reactive frontends in Next.js to robust, scalable backends in Node.js and Go. Expert in full-cycle product development.",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    span: "md:col-span-3 md:row-span-1",
  },
  {
    iconClass: "fi fi-rr-settings-sliders",
    title: "System Design",
    subtitle: "Cloud & DevOps",
    description: "Designing cloud-native architectures using AWS and Docker. Implementing CI/CD pipelines and microservices orchestration for maximum reliability.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    span: "md:col-span-2 md:row-span-1",
  },
];

function ExperienceCard({ exp, index }: { exp: typeof experiences[0], index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      className={`group relative ${exp.span}`}
    >
      <div className="relative h-full rounded-[2.5rem] glass border border-white/5 bg-gradient-to-br from-white/5 to-transparent p-10 md:p-12 overflow-hidden hover:border-indigo-500/30 transition-all duration-500">
        {/* Spotlight Effect */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useTransform(
              [mouseX, mouseY],
              ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.1), transparent 80%)`
            ),
          }}
        />

        <div className="flex flex-col md:flex-row md:items-center gap-8 relative z-10">
          <Magnetic>
            <div className={`w-20 h-20 rounded-[1.5rem] ${exp.bg} flex items-center justify-center flex-shrink-0 shadow-2xl`}>
              <i className={`${exp.iconClass} text-3xl ${exp.color}`}></i>
            </div>
          </Magnetic>
          
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h3 className="text-2xl md:text-3xl font-black text-white font-[var(--font-poppins)] tracking-tight">
                {exp.title}
              </h3>
              <span className={`text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest border border-white/10 ${exp.color}`}>
                Experience
              </span>
            </div>
            <p className={`text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4 ${exp.color} opacity-80`}>
              {exp.subtitle}
            </p>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base font-medium max-w-2xl">
              {exp.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-xs font-bold tracking-[0.4em] text-indigo-400 uppercase mb-6 block">Expertise</span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 font-[var(--font-poppins)] tracking-tighter">
            Development <span className="gradient-text">Philosophy</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-medium">
            Bridging the gap between ambitious business goals and elite technical execution.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-8">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.title} exp={exp} index={i} />
          ))}
          
          {/* Decorative Bento Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="hidden md:flex md:col-span-5 rounded-[2.5rem] border border-white/5 bg-indigo-500/5 items-center justify-between px-12 py-8 group hover:border-indigo-500/20 transition-all duration-500"
          >
            <div className="flex items-center gap-6">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
              <p className="text-white font-bold tracking-tight">Currently architecting high-performance web systems.</p>
            </div>
            <Magnetic>
              <button className="text-xs font-black uppercase tracking-widest text-indigo-400 group-hover:text-white transition-colors">
                View Philosophy →
              </button>
            </Magnetic>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

