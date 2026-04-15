"use client";

import { motion } from "framer-motion";
import { Monitor, Server, Database, Cloud } from "lucide-react";

const skillGroups = [
  {
    icon: Monitor,
    title: "Frontend & Design",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    badgeColor: "text-indigo-300",
    badges: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "HTML5 & CSS3",
      "Framer Motion",
      "Figma",
    ],
  },
  {
    icon: Server,
    title: "Backend & Architecture",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    badgeColor: "text-purple-300",
    badges: ["Node.js", "Express.js", "Python", "Socket.io", "REST APIs", "GraphQL", "JWT & Auth"],
  },
  {
    icon: Database,
    title: "Database & ORM",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    badgeColor: "text-pink-300",
    badges: ["MongoDB", "PostgreSQL", "MySQL", "Prisma ORM", "Mongoose", "Redis"],
  },
  {
    icon: Cloud,
    title: "DevOps & Tools",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    badgeColor: "text-cyan-300",
    badges: ["Docker", "Kubernetes", "AWS", "Git & GitHub", "CI/CD (Actions)", "Linux/Bash", "Nginx", "Postman"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative z-10">
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
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A snapshot of the languages, frameworks, and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`glass-card rounded-2xl p-7 border ${group.border}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl ${group.bg} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${group.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white font-[var(--font-poppins)]">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.badges.map((badge) => (
                    <span
                      key={badge}
                      className={`skill-badge px-3 py-1.5 rounded-lg text-xs font-medium ${group.badgeColor}`}
                      style={{
                        background: `rgba(var(--badge-bg, 99, 102, 241), 0.08)`,
                        borderColor: `rgba(var(--badge-bg, 99, 102, 241), 0.18)`,
                      }}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
