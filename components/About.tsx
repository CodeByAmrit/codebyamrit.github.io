"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { MouseEvent } from "react";
import Magnetic from "./ui/Magnetic";

const timeline = [
  {
    period: "2023 - 2026",
    title: "B.Tech AI & ML",
    institution: "MDU Rohtak",
    iconClass: "fi fi-rr-graduation-cap",
  },
  {
    period: "2021 - 2023",
    title: "Diploma CS Eng",
    institution: "GP Sonipat",
    iconClass: "fi fi-rr-document",
  },
];

function Card({
  children,
  className,
  span,
}: {
  children: React.ReactNode;
  className?: string;
  span?: string;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-[2rem] border border-white/5 bg-gradient-to-br from-white/5 to-transparent p-8 md:p-10 ${span} ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) =>
              `radial-gradient(400px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.1), transparent 80%)`
          ),
        }}
      />
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-pad relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 auto-rows-[minmax(200px,auto)]">
          <Card span="md:col-span-8 md:row-span-2 flex flex-col justify-center">
            <span className="text-xs font-bold tracking-[0.3em] text-indigo-400 uppercase mb-6 block">
              Biography
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-8 font-[var(--font-poppins)] tracking-tighter">
              The Mind <span className="gradient-text">Behind</span> The Machines
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-6 font-medium">
              A visionary full-stack architect specializing in the intersection of Artificial
              Intelligence and modern web infrastructure. I bridge the gap between creative
              concepts and high-performance engineering.
            </p>
            <p className="text-gray-500 leading-relaxed max-w-2xl">
              Currently engineering advanced solutions while mastering AI dynamics. My philosophy
              is rooted in architectural purity and user-centric innovation.
            </p>
          </Card>

          <Card span="md:col-span-4 md:row-span-1 border-indigo-500/20 bg-indigo-500/5">
            <h3 className="text-xl font-black text-white mb-6 uppercase tracking-widest">Connect</h3>
            <div className="space-y-4">
              <a
                href="mailto:contact@amritsharma.dev?subject=Project%20Inquiry%20for%20Amrit%20Sharma"
                className="flex items-center gap-4 group/link"
              >
                <Magnetic>
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center transition-colors group-hover/link:bg-indigo-500/20">
                    <i className="fi fi-rr-envelope text-indigo-400" />
                  </div>
                </Magnetic>
                <span className="text-sm font-bold text-gray-300 group-hover/link:text-white transition-colors">
                  Project Email
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/amrit-sharma-b11b88124"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group/link"
              >
                <Magnetic>
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center transition-colors group-hover/link:bg-blue-500/20">
                    <i className="fi fi-brands-linkedin text-blue-400" />
                  </div>
                </Magnetic>
                <span className="text-sm font-bold text-gray-300 group-hover/link:text-white transition-colors">
                  LinkedIn
                </span>
              </a>
              <a
                href="/profile.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group/link"
              >
                <Magnetic>
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center transition-colors group-hover/link:bg-white/10">
                    <i className="fi fi-rr-document text-white" />
                  </div>
                </Magnetic>
                <span className="text-sm font-bold text-gray-300 group-hover/link:text-white transition-colors">
                  View Resume
                </span>
              </a>
            </div>
          </Card>

          <Card span="md:col-span-4 md:row-span-1">
            <h3 className="text-xl font-black text-white mb-6 uppercase tracking-widest">
              Education
            </h3>
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-1 bg-indigo-500/20 rounded-full" />
                  <div>
                    <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">
                      {item.period}
                    </p>
                    <h4 className="text-sm font-black text-white">{item.title}</h4>
                    <p className="text-xs text-gray-500">{item.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
