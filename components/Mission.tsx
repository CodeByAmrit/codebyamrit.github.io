"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { MouseEvent } from "react";
import Magnetic from "./ui/Magnetic";

const features = [
  {
    title: "User-First Design",
    description: "Interfaces designed with the end-user in mind, ensuring ease of use and accessibility.",
    iconClass: "fi fi-rr-user",
    color: "from-blue-500/10 to-transparent",
    iconColor: "text-blue-400",
  },
  {
    title: "Clean & Modern Code",
    description: "Writing scalable, maintainable code using the latest industry standards and patterns.",
    iconClass: "fi fi-rr-code-branch",
    color: "from-purple-500/10 to-transparent",
    iconColor: "text-purple-400",
  },
  {
    title: "Performance Mapping",
    description: "Obsessed with Core Web Vitals, ensuring lightning-fast load times and smooth interactions.",
    iconClass: "fi fi-rr-bolt",
    color: "from-amber-500/10 to-transparent",
    iconColor: "text-amber-400",
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0], index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-8 hover:border-indigo-500/30 transition-all duration-500"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(350px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.1), transparent 80%)`
          ),
        }}
      />
      
      <div className="relative z-10 flex gap-6">
        <Magnetic>
          <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 shadow-xl group-hover:scale-110 transition-transform duration-500">
            <i className={`${feature.iconClass} text-2xl ${feature.iconColor}`} />
          </div>
        </Magnetic>
        <div>
          <h4 className="text-xl font-black text-white mb-2 group-hover:text-indigo-400 transition-colors uppercase tracking-tight">
            {feature.title}
          </h4>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Mission() {
  return (
    <section className="section-pad relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold tracking-[0.4em] text-indigo-400 uppercase mb-6 block">
              The Vision
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1] font-[var(--font-poppins)] tracking-tighter">
              Crafting <span className="gradient-text">Experiences</span> <br /> Beyond Digital
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed font-medium">
              I transcend conventional development, engineering digital ecosystems that harmonize technical excellence with human intuition.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 text-indigo-400 bg-indigo-500/5 px-6 py-3 rounded-2xl border border-indigo-500/10 font-bold text-xs uppercase tracking-widest">
                <i className="fi fi-rr-check text-[10px]" />
                <span>Problem Solving Architecture</span>
              </div>
              <div className="flex items-center gap-3 text-purple-400 bg-purple-500/5 px-6 py-3 rounded-2xl border border-purple-500/10 font-bold text-xs uppercase tracking-widest">
                <i className="fi fi-rr-star text-[10px]" />
                <span>Performance Focused</span>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {features.map((feature, i) => (
              <FeatureCard key={feature.title} feature={feature} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

