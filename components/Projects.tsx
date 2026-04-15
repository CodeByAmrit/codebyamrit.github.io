"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from 'next/image';
import { MouseEvent } from "react";
import Magnetic from "./ui/Magnetic";

const projects = [
  {
    title: "StreamVision",
    subtitle: "Govt Infrastructure",
    status: "Live",
    statusColor: "bg-green-500/20 text-green-400 border border-green-500/20",
    year: "2024",
    description: "Architected a high-concurrency CCTV monitoring system for the Haryana Government. Features low-latency RTSP-to-HLS transcoding and real-time motion forensics.",
    badges: [
      { name: "FFmpeg", color: "bg-indigo-500/15 text-indigo-300 border-indigo-500/20" },
      { name: "Node.js", color: "bg-indigo-500/15 text-indigo-300 border-indigo-500/20" },
      { name: "Docker", color: "bg-indigo-500/15 text-indigo-300 border-indigo-500/20" },
    ],
    liveUrl: "https://cctvcameralive.in",
    githubUrl: "https://github.com/CodeByAmrit/streamVision",
    accentColor: "from-indigo-500/10 to-purple-500/5",
    icon: "https://github.com/CodeByAmrit/StreamVision/blob/master/public/images/favicon.png?raw=true",
  },
  {
    title: "Student Tracker",
    subtitle: "Enterprise SMS",
    status: "Live",
    statusColor: "bg-blue-500/20 text-blue-400 border border-blue-500/20",
    year: "2023",
    description: "A sophisticated educational ERP featuring multi-tenant architecture, automated reporting, and secure RBAC. Designed for seamless academic administration.",
    badges: [
      { name: "Vue.js 3", color: "bg-blue-500/15 text-blue-300 border-blue-500/20" },
      { name: "Express", color: "bg-blue-500/15 text-blue-300 border-blue-500/20" },
      { name: "Redis", color: "bg-blue-500/15 text-blue-300 border-blue-500/20" },
    ],
    liveUrl: "https://edu.amritsharma.dev",
    githubUrl: "https://github.com/codebyamrit/school",
    accentColor: "from-blue-500/10 to-cyan-500/5",
    icon: "https://raw.githubusercontent.com/CodeByAmrit/StudentTracker-Pro/refs/heads/master/public/favicon.png",
  },
  {
    title: "File Manager",
    subtitle: "Internal Utility",
    status: "Active",
    statusColor: "bg-purple-500/20 text-purple-400 border border-purple-500/20",
    year: "2024",
    description: "Advanced desktop file management system with encrypted vaults and role-based permissions. Streamlines complex organizational document workflows.",
    badges: [
      { name: "Python", color: "bg-purple-500/15 text-purple-300 border-purple-500/20" },
      { name: "SQLite", color: "bg-purple-500/15 text-purple-300 border-purple-500/20" },
      { name: "PyQt6", color: "bg-purple-500/15 text-purple-300 border-purple-500/20" },
    ],
    liveUrl: "https://amritsharma.dev/File-Manager",
    githubUrl: "https://github.com/codebyamrit/File-Manager/",
    accentColor: "from-purple-500/10 to-pink-500/5",
    icon: "https://raw.githubusercontent.com/CodeByAmrit/File-Manager/refs/heads/main/icons/1.png",
  },
];

function Card({ project, index }: { project: typeof projects[0], index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const mouseSpringConfig = { damping: 20, stiffness: 100 };
  const springX = useSpring(x, mouseSpringConfig);
  const springY = useSpring(y, mouseSpringConfig);

  const rotateX = useTransform(springY, [-100, 100], [10, -10]);
  const rotateY = useTransform(springX, [-100, 100], [-10, 10]);

  function handleMouseMove(event: MouseEvent) {
    const { currentTarget, clientX, clientY } = event;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    
    // For tilt
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set(clientX - centerX);
    y.set(clientY - centerY);

    // For spotlight
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, perspective: 1000 }}
      className={`group relative glass-card rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br ${project.accentColor} flex flex-col p-8 transition-colors duration-300 hover:border-indigo-500/40`}
    >
      {/* Dynamic Cursor Light (Spotlight) */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([sx, sy]) => `radial-gradient(400px circle at ${sx}px ${sy}px, rgba(99, 102, 241, 0.15), transparent 80%)`
          ),
        }}
      />

      {/* Card Header */}
      <div className="flex items-start justify-between mb-6 relative z-10">
        <div className="flex items-center gap-4">
          <Magnetic>
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-2.5 shadow-xl transition-transform">
              <Image 
                width={60} 
                height={60} 
                src={project.icon} 
                alt={`${project.title} icon`} 
                className="object-contain logo-glow"
              />
            </div>
          </Magnetic>
          <div>
            <h3 className="text-xl font-black text-white font-[var(--font-poppins)] tracking-tight">
              {project.title}
            </h3>
            <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">{project.subtitle}</span>
          </div>
        </div>
        <span className={`text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-tighter ${project.statusColor}`}>
          {project.status}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-300 text-sm leading-relaxed mb-6 font-medium relative z-10">
        {project.description}
      </p>

      {/* Tech Badges */}
      <div className="flex flex-wrap gap-2 mb-8 relative z-10">
        {project.badges.map((badge) => (
          <span
            key={badge.name}
            className={`text-[10px] px-3 py-1.5 rounded-xl border font-bold uppercase tracking-widest ${badge.color}`}
          >
            {badge.name}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5 relative z-10">
        <div className="flex gap-6">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-white/60 hover:text-white transition-colors font-bold uppercase tracking-widest group/link"
          >
            Live Demo
            <i className="fi fi-rr-arrow-up-right text-[10px] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-white/60 hover:text-white transition-colors font-bold uppercase tracking-widest group/link"
          >
            <i className="fi fi-brands-github text-xs" />
            Code base
          </a>
        </div>
        <span className="text-[10px] font-black text-white/20">{project.year}</span>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-indigo-400 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Portfolio</span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 font-[var(--font-poppins)] tracking-tighter">
            Digital <span className="gradient-text">Masterpieces</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            A curated selection of my most challenging and impactful engineering feats.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <Card key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Magnetic>
            <a
              href="https://github.com/CodeByAmrit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl glass border border-white/10 text-white hover:border-indigo-500/40 transition-all duration-500 font-bold text-xs uppercase tracking-widest hover:shadow-2xl hover:shadow-indigo-500/20"
            >
              <i className="fi fi-brands-github text-lg" />
              Explore full archive
              <i className="fi fi-rr-arrow-right text-xs" />
            </a>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}

