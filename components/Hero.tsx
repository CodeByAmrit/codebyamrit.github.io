"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import Magnetic from "./ui/Magnetic";

import InteractiveBackground from "./ui/InteractiveBackground";

const words = ["Secure", "Modern", "Scalable"];
type FlipPhase = "in" | "hold" | "out";

function FlipWord() {
  const [{ index, phase }, setFlipState] = useState<{ index: number; phase: FlipPhase }>({
    index: 0,
    phase: "in",
  });
  const chars = words[index].split("");

  useEffect(() => {
    if (phase === "in") {
      const t = setTimeout(() => {
        setFlipState((prev) => ({ ...prev, phase: "hold" }));
      }, 600 + words[index].length * 40 + 300);
      return () => clearTimeout(t);
    }
    if (phase === "hold") {
      const t = setTimeout(() => {
        setFlipState((prev) => ({ ...prev, phase: "out" }));
      }, 2000);
      return () => clearTimeout(t);
    }
    if (phase === "out") {
      const t = setTimeout(() => {
        setFlipState((prev) => ({
          index: (prev.index + 1) % words.length,
          phase: "in",
        }));
      }, 600 + words[index].length * 30);
      return () => clearTimeout(t);
    }
  }, [phase, index]);

  return (
    <div className="inline-flex" aria-live="polite">
      {chars.map((char, i) => (
        <motion.span
          key={`${index}-${i}`}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={
            phase === "out"
              ? { opacity: 0, y: -20, filter: "blur(8px)" }
              : { opacity: 1, y: 0, filter: "blur(0px)" }
          }
          transition={{ duration: 0.4, delay: i * 0.04, ease: "easeOut" }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 min-h-screen flex items-center pt-24 pb-12 overflow-hidden"
    >
      {/* High-end interactive background texture */}
      <InteractiveBackground />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ── Left Content ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center md:text-left flex flex-col items-center md:items-start"
          >
            {/* Tag */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-8">
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                Available for New Projects
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-8xl font-black text-white font-[var(--font-poppins)] leading-tight tracking-tighter"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">Amrit</span>
            </motion.h1>

            {/* Flip word line */}
            <motion.div
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-7xl font-black text-white/90 font-[var(--font-poppins)] leading-none my-4 h-20 md:h-24 lg:h-28 flex items-center"
            >
              <FlipWord />
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-400 mb-6 font-[var(--font-poppins)]"
            >
              Architecting Digital Excellence
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-6 items-center">
              <Magnetic>
                <a
                  href="https://wa.me/919817044885"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient flex items-center gap-3 px-8 py-4 rounded-2xl font-bold shadow-2xl shadow-indigo-500/40 text-sm group"
                >
                  <span>Start a Project</span>
                  <i className="fi fi-rr-arrow-right text-xs group-hover:translate-x-1 transition-transform" />
                </a>
              </Magnetic>

              <div className="flex items-center gap-4">
                <Magnetic>
                  <a
                    href="https://github.com/CodeByAmrit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-2xl glass border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-indigo-400 transition-all duration-300"
                  >
                    <i className="fi fi-brands-github text-xl" />
                  </a>
                </Magnetic>
                <Magnetic>
                  <a
                    href="https://www.linkedin.com/in/amrit-sharma-b11b88124"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-2xl glass border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-indigo-400 transition-all duration-300"
                  >
                    <i className="fi fi-brands-linkedin text-xl" />
                  </a>
                </Magnetic>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right Content: Static Profile ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center"
          >
            {/* Ambient Background Glows */}
            <div className="absolute w-[120%] h-[120%] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 w-80 h-80 md:w-96 md:h-96 lg:w-[600px] lg:h-[600px]">
              <Image
                src="/amritnew.png"
                alt="Amrit Sharma — Senior Full Stack Developer"
                fill
                priority
                className="object-contain drop-shadow-[0_20px_50px_rgba(99,102,241,0.3)]"
                style={{
                  maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

