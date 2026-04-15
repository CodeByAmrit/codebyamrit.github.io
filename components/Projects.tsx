"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from 'next/image';
import { MouseEvent, useRef, useEffect, useState } from "react";
import Magnetic from "./ui/Magnetic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

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

function Card({ project }: { project: typeof projects[0] }) {
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
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set(clientX - centerX);
    y.set(clientY - centerY);
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, perspective: 1000 }}
      className={`project-card shrink-0 w-[85vw] md:w-[600px] h-[500px] md:h-[600px] relative glass-card rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br ${project.accentColor} flex flex-col p-8 md:p-12 transition-colors duration-300 hover:border-indigo-500/40`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([sx, sy]) => `radial-gradient(400px circle at ${sx}px ${sy}px, rgba(99, 102, 241, 0.15), transparent 80%)`
          ),
        }}
      />

      <div className="flex items-start justify-between mb-8 relative z-10">
        <div className="flex items-center gap-6">
          <Magnetic>
            <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-3.5 shadow-xl transition-transform">
              <Image width={80} height={80} src={project.icon} alt={`${project.title} icon`} className="object-contain logo-glow" />
            </div>
          </Magnetic>
          <div>
            <h3 className="text-3xl font-black text-white font-[var(--font-poppins)] tracking-tight mb-1">
              {project.title}
            </h3>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">{project.subtitle}</span>
          </div>
        </div>
        <span className={`text-[10px] px-4 py-1.5 rounded-full font-black uppercase tracking-widest ${project.statusColor}`}>
          {project.status}
        </span>
      </div>

      <p className="text-gray-300 text-lg leading-relaxed mb-8 font-medium relative z-10">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-3 mb-12 relative z-10">
        {project.badges.map((badge) => (
          <span key={badge.name} className={`text-[10px] px-4 py-2 rounded-xl border font-black uppercase tracking-widest ${badge.color}`}>
            {badge.name}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between mt-auto pt-8 border-t border-white/5 relative z-10">
        <div className="flex gap-8">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-white/60 hover:text-white transition-colors font-black uppercase tracking-[0.2em] group/link">
            Live Demo
            <i className="fi fi-rr-arrow-up-right text-[10px] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-white/60 hover:text-white transition-colors font-black uppercase tracking-[0.2em] group/link">
            <i className="fi fi-brands-github text-base" />
            Codebase
          </a>
        </div>
        <span className="text-xs font-black text-white/20 tracking-widest">{project.year}</span>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useGSAP(() => {
    if (!containerRef.current || !triggerRef.current) return;
    if (window.innerWidth < 768) return; // Disable on mobile

    const sections = gsap.utils.toArray(".project-card");
    const amountToScroll = containerRef.current.scrollWidth - window.innerWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: `+=${containerRef.current.scrollWidth}`,
        pin: true,
        scrub: 1,
        onUpdate: (self) => setProgress(self.progress),
      },
    });

    tl.to(containerRef.current, {
      x: -amountToScroll,
      ease: "none",
    });

    // Individual card focus animations
    sections.forEach((section: any) => {
      gsap.to(section, {
        opacity: 1,
        scale: 1.05,
        duration: 0.5,
        scrollTrigger: {
          trigger: section,
          containerAnimation: tl,
          start: "left center",
          end: "right center",
          toggleActions: "play reverse play reverse",
          scrub: true,
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, { scope: triggerRef });

  return (
    <section id="projects" ref={triggerRef} className="relative z-10 overflow-hidden bg-black/50">
      {/* Ambient Glow Background */}
      <motion.div 
        animate={{ opacity: progress > 0 && progress < 1 ? 1 : 0 }}
        className="absolute inset-0 pointer-events-none transition-opacity duration-1000"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-indigo-500/10 blur-[150px] rounded-full" />
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-purple-500/5 blur-[120px] rounded-full" />
      </motion.div>

      <div className="min-h-screen flex flex-col justify-center py-24">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-left"
          >
            <span className="text-indigo-400 text-xs font-black uppercase tracking-[0.4em] mb-4 block">Archive 01</span>
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-white mb-6 font-[var(--font-poppins)] tracking-tighter">
              Digital <span className="gradient-text">Masterpieces</span>
            </h2>
          </motion.div>
        </div>

        {/* Horizontal Container */}
        <div className="overflow-x-auto md:overflow-visible pb-12 md:pb-0">
          <div 
            ref={containerRef} 
            className="flex flex-col md:flex-row gap-8 px-6 md:px-[10vw] w-max md:w-auto"
          >
            {projects.map((project, i) => (
              <Card key={project.title} project={project} />
            ))}
            
            {/* View More Card */}
            <div className="shrink-0 w-[85vw] md:w-[400px] h-[500px] md:h-[600px] flex items-center justify-center">
              <Magnetic>
                <a
                  href="https://github.com/CodeByAmrit"
                  target="_blank"
                  className="group flex flex-col items-center gap-6 p-12 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500"
                >
                  <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:bg-indigo-500/10 transition-all duration-500">
                    <i className="fi fi-rr-arrow-right" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 group-hover:text-white transition-colors">Full Archive</span>
                </a>
              </Magnetic>
            </div>
          </div>
        </div>

        {/* Progress Bar (Desktop Only) */}
        <div className="hidden md:block absolute bottom-12 left-1/2 -translate-x-1/2 w-[40vw] h-px bg-white/10 overflow-hidden">
          <motion.div 
            className="h-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]"
            style={{ width: `${progress * 100}%` }}
          />
        </div>

        {/* Mobile Swipe Hint */}
        <div className="md:hidden text-center mt-8 text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 animate-pulse">
          Swipe to explore masterpieces
        </div>
      </div>
    </section>
  );
}


