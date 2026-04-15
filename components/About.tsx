"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Clock, GraduationCap } from "lucide-react";

const timeline = [
  {
    period: "2023 – 2026",
    title: "B.Tech in AI & ML",
    institution: "Maharshi Dayanand University, Rohtak",
    icon: "🎓",
  },
  {
    period: "2021 – 2023",
    title: "Diploma in Computer Engineering",
    institution: "Government Polytechnic, Sonipat",
    icon: "📜",
  },
  {
    period: "2018 – 2021",
    title: "Secondary & Sr. Secondary",
    institution: "Rishikul Vidyapeeth, Sonipat",
    icon: "🏫",
  },
];

const contactInfo = [
  { icon: MapPin, label: "Location", value: "Sonipat, Haryana, India" },
  {
    icon: Mail,
    label: "Email",
    value: "amritsharma2617@gmail.com",
    href: "mailto:amritsharma2617@gmail.com",
  },
  { icon: Clock, label: "Availability", value: "Open to freelance & full-time" },
];

export default function About() {
  return (
    <section id="about" className="section-pad relative z-10">
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
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            My journey, background, and what drives me to build great software.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* ── Left: Bio + Contact ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-2xl p-8 mb-6">
              <span className="text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-3 block">
                My Journey
              </span>
              <h3 className="text-2xl font-bold text-white mb-4 font-[var(--font-poppins)]">
                Turning Ideas into Digital Reality
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I&apos;m a passionate full-stack developer currently pursuing B.Tech in AI &amp; ML
                at Maharshi Dayanand University. I started coding during my diploma and quickly fell
                in love with building real-world solutions.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I specialise in building everything from sleek, responsive frontends to robust,
                scalable backends. My focus is always on writing clean, maintainable code that
                solves real problems.
              </p>
            </div>

            {/* Contact Info */}
            <div className="glass-card rounded-2xl p-6 space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-gray-200 hover:text-indigo-400 transition-colors text-sm"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-200 text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* ── Right: Timeline ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="w-5 h-5 text-indigo-400" />
                <h3 className="text-xl font-bold text-white font-[var(--font-poppins)]">
                  Academic Journey
                </h3>
              </div>

              <div className="relative pl-8 border-l-2 border-indigo-500/20 space-y-8">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {/* Dot */}
                    <div className="timeline-dot animate-pulse" />

                    <time className="text-xs font-medium text-indigo-400 tracking-wide">
                      {item.period}
                    </time>
                    <h4 className="text-base font-semibold text-white mt-1 mb-0.5">
                      {item.icon} {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{item.institution}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
