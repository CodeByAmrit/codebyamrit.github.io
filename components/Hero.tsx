"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import Magnetic from "./ui/Magnetic";

import HeroBackground from "./ui/HeroBackground";

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
    <div className="inline-flex text-indigo-300" aria-live="polite">
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
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 min-h-screen flex items-center pt-20 pb-10 overflow-hidden"
    >
      <HeroBackground />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center -mt-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center md:text-left flex flex-col items-center md:items-start"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-8">
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                Available for New Projects
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-black text-white font-[var(--font-poppins)] leading-[0.92] tracking-tighter"
            >
              Hi, I&apos;m <span className="gradient-text">Amrit</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl lg:text-[2rem] font-medium text-gray-400 mt-4 font-[var(--font-poppins)]"
            >
              Senior Full Stack Developer & Software Architect
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="text-4xl sm:text-6xl md:text-4xl lg:text-8xl font-black text-white/90 font-[var(--font-poppins)] leading-[1] mt-2 mb-3 min-h-[3rem] md:min-h-[4rem] lg:min-h-[4.75rem] flex items-center flex-wrap gap-x-3"
            >
              <FlipWord />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl lg:text-[2rem] font-medium text-gray-400 mb-4 font-[var(--font-poppins)]"
            >
              Architecting Digital Excellence
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
              <Magnetic>
                <a
                  href="#contact"
                  className="btn-gradient flex items-center gap-3 px-6 py-3.5 rounded-2xl font-bold shadow-2xl shadow-indigo-500/40 text-xs sm:text-sm group"
                >
                  <span>Start a Conversation</span>
                  <i className="fi fi-rr-arrow-right text-xs group-hover:translate-x-1 transition-transform" />
                </a>
              </Magnetic>

              <div className="flex items-center gap-3 flex-wrap">
                <Magnetic>
                  <a
                    href="/profile.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass px-5 py-3.5 rounded-2xl border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-indigo-400 transition-all duration-300 text-[11px] sm:text-xs font-black uppercase tracking-[0.18em]"
                  >
                    Resume
                  </a>
                </Magnetic>
                <Magnetic>
                  <a
                    href="https://github.com/CodeByAmrit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-2xl glass border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-indigo-400 transition-all duration-300"
                  >
                    <i className="fi fi-brands-github text-lg" />
                  </a>
                </Magnetic>
                <Magnetic>
                  <a
                    href="https://www.linkedin.com/in/amrit-sharma-b11b88124"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-2xl glass border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-indigo-400 transition-all duration-300"
                  >
                    <i className="fi fi-brands-linkedin text-lg" />
                  </a>
                </Magnetic>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute w-[120%] h-[120%] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[34rem] lg:h-[34rem]">
              <Image
                src="/amritnew.png"
                alt="Amrit Sharma - Senior Full Stack Developer and Software Architect in Sonipat, Haryana"
                fill
                priority
                className="object-contain drop-shadow-[0_20px_50px_rgba(99,102,241,0.3)]"
                style={{
                  maskImage: "linear-gradient(to bottom, black 60%, transparent 98%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 98%)",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
