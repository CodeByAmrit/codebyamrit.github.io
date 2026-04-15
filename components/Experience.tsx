"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    iconClass: "fi fi-rr-layers",
    title: "Full Stack Development",
    subtitle: "3+ Years Experience",
    description:
      "Building complete web applications from database design to frontend interfaces. Specialising in Node.js/Express backends paired with React/Next.js frontends, with a focus on performance and scalability.",
    color: "text-indigo-400",
    iconBg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    glow: "hover:shadow-indigo-500/10",
  },
  {
    iconClass: "fi fi-rr-settings-sliders",
    title: "System Architecture",
    subtitle: "Enterprise Solutions",
    description:
      "Designing scalable system architectures with microservices, load balancing, and cloud infrastructure. Hands-on experience with Docker, Kubernetes, and AWS for high-traffic production environments.",
    color: "text-purple-400",
    iconBg: "bg-purple-500/10",
    border: "border-purple-500/20",
    glow: "hover:shadow-purple-500/10",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative z-10">
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
            Development <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            With hands-on experience across various domains, I bring practical knowledge and
            problem-solving skills to every project.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {experiences.map((exp, i) => {
            return (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className={`glass-card rounded-2xl p-8 border ${exp.border} hover:shadow-xl ${exp.glow} transition-all duration-300`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${exp.iconBg} flex items-center justify-center mb-6`}
                >
                  <i className={`${exp.iconClass} text-2xl ${exp.color}`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-1 font-[var(--font-poppins)]">
                  {exp.title}
                </h3>
                <p className={`text-sm mb-4 ${exp.color}`}>{exp.subtitle}</p>
                <p className="text-gray-300 leading-relaxed text-sm">{exp.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
