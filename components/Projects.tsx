"use client";

import { motion } from "framer-motion";
import Image from 'next/image';

const projects = [
  {
    title: "StreamVision",
    subtitle: "Food & Supply Dept (FSD), Haryana Govt",
    status: "Live",
    statusColor: "bg-green-500/20 text-green-400 border border-green-500/20",
    year: "2024",
    description:
      "A high-performance CCTV management platform developed for the Haryana Government Food and Supply Department. Features real-time streaming, motion detection, and advanced analytics using FFmpeg and HLS.",
    badges: [
      { name: "Node.js", color: "bg-indigo-500/15 text-indigo-300 border-indigo-500/20" },
      { name: "Express.js v5", color: "bg-indigo-500/15 text-indigo-300 border-indigo-500/20" },
      { name: "MySQL 8.0+", color: "bg-indigo-500/15 text-indigo-300 border-indigo-500/20" },
      { name: "FFmpeg", color: "bg-indigo-500/15 text-indigo-300 border-indigo-500/20" },
      { name: "Docker", color: "bg-indigo-500/15 text-indigo-300 border-indigo-500/20" },
      { name: "EJS", color: "bg-indigo-500/15 text-indigo-300 border-indigo-500/20" },
    ],
    liveUrl: "https://cctvcameralive.in",
    githubUrl: "https://github.com/CodeByAmrit/streamVision",
    accentColor: "from-indigo-500/10 to-purple-500/5",
    iconBg: "bg-indigo-500/15",
    icon: "https://github.com/CodeByAmrit/StreamVision/blob/master/public/images/favicon.png?raw=true",
  },
  {
    title: "Student Tracker",
    subtitle: "Bajrang Vidya Mandir, Sonipat",
    status: "Live",
    statusColor: "bg-green-500/20 text-green-400 border border-green-500/20",
    year: "2023",
    description:
      "A sophisticated Education Management System specially designed for Bajrang Vidya Mandir, Sonipat. Features a robust multi-tenant architecture, student tracking, and automated reporting, scalable for any institution.",
    badges: [
      { name: "Express.js", color: "bg-blue-500/15 text-blue-300 border-blue-500/20" },
      { name: "Vue.js", color: "bg-blue-500/15 text-blue-300 border-blue-500/20" },
      { name: "MySQL", color: "bg-blue-500/15 text-blue-300 border-blue-500/20" },
      { name: "Redis", color: "bg-blue-500/15 text-blue-300 border-blue-500/20" },
      { name: "Docker", color: "bg-blue-500/15 text-blue-300 border-blue-500/20" },
    ],
    liveUrl: "https://edu.amritsharma.dev",
    githubUrl: "https://github.com/codebyamrit/school",
    accentColor: "from-blue-500/10 to-cyan-500/5",
    iconBg: "bg-blue-500/15",
    icon: "https://raw.githubusercontent.com/CodeByAmrit/StudentTracker-Pro/refs/heads/master/public/favicon.png",
  },
  {
    title: "File Manager",
    subtitle: "Desktop File Management",
    status: "Live",
    statusColor: "bg-green-500/20 text-green-400 border border-green-500/20",
    year: "2024",
    description:
      "Secure desktop-based file management system with role-based access control and advanced search capabilities. Optimized for educational and organizational document workflows.",
    badges: [
      { name: "Python", color: "bg-purple-500/15 text-purple-300 border-purple-500/20" },
      { name: "SQLite", color: "bg-purple-500/15 text-purple-300 border-purple-500/20" },
      { name: "MySQL", color: "bg-purple-500/15 text-purple-300 border-purple-500/20" },
      { name: "PyQt", color: "bg-purple-500/15 text-purple-300 border-purple-500/20" },
    ],
    liveUrl: "https://amritsharma.dev/File-Manager",
    githubUrl: "https://github.com/codebyamrit/File-Manager/",
    accentColor: "from-purple-500/10 to-pink-500/5",
    iconBg: "bg-purple-500/15",
    icon: "https://raw.githubusercontent.com/CodeByAmrit/File-Manager/refs/heads/main/icons/1.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-[var(--font-poppins)]">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my recent work. Each project showcases problem-solving, technical expertise, and
            attention to detail.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`group glass-card rounded-2xl overflow-hidden border border-white/7 bg-gradient-to-br ${project.accentColor} flex flex-col`}
            >
              <div className="p-6 flex flex-col h-full">
                {/* Card Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-xl ${project.iconBg} flex items-center justify-center text-xl`}
                    >
                      <Image 
                        width={50} 
                        height={50} 
                        src={project.icon} 
                        alt={`${project.title} logo — ${project.subtitle}`} 
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white font-[var(--font-poppins)]">
                        {project.title}
                      </h3>
                      <span className="text-xs text-gray-400">{project.subtitle}</span>
                    </div>
                  </div>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${project.statusColor}`}>
                    {project.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-5 line-clamp-3 flex-1">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.badges.map((badge) => (
                    <span
                      key={badge.name}
                      className={`text-xs px-2.5 py-1 rounded-full border font-medium ${badge.color}`}
                    >
                      {badge.name}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/7">
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live demo of ${project.title}`}
                      className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-white transition-colors font-medium group/link"
                    >
                      Live Demo
                      <i className="fi fi-rr-arrow-up-right text-[10px] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code on GitHub`}
                      className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-white transition-colors font-medium group/link"
                    >
                      <i className="fi fi-brands-github text-xs" />
                      GitHub
                    </a>
                  </div>
                  <span className="text-xs text-gray-500">{project.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/CodeByAmrit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl glass border border-white/10 text-gray-300 hover:text-white hover:border-indigo-500/40 transition-all duration-300 font-medium text-sm hover:shadow-lg hover:shadow-indigo-500/10"
          >
            <i className="fi fi-brands-github text-base" />
            View All Projects on GitHub
            <i className="fi fi-rr-arrow-right text-xs" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
