"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

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
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 min-h-screen flex items-center pt-20 pb-10"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* ── Left ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center md:text-left flex flex-col items-center md:items-start"
          >
            {/* Tag */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                A Developer Dedicated to Crafting
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 font-[var(--font-poppins)] leading-tight"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">Amrit</span>
            </motion.h1>

            {/* Flip word line */}
            <motion.div
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-7xl font-black text-white font-[var(--font-poppins)] leading-none my-2 h-20 md:h-24 lg:h-28 flex items-center"
            >
              <FlipWord />
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300 mb-5 font-[var(--font-poppins)]"
            >
              Web Solutions
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-base md:text-lg max-w-lg mb-8 leading-relaxed"
            >
              Full Stack developer with a passion for building performant, accessible, and
              beautifully crafted web applications. From database design to pixel-perfect UIs.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
              <a
                href="https://wa.me/919817044885"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold shadow-lg shadow-indigo-500/25 text-sm"
              >
                <span>Get in Touch</span>
                <ChevronRight className="w-4 h-4 relative z-10" />
              </a>

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/CodeByAmrit"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-11 h-11 rounded-xl glass border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-indigo-400 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/amrit-sharma-b11b88124"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 rounded-xl glass border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-indigo-400 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Profile Image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full profile-glow" />

            {/* Floating animation wrapper */}
            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96"
            >
              <Image
                src="/amritnew.png"
                alt="Amrit Sharma — Full Stack Developer"
                fill
                priority
                className="object-contain drop-shadow-2xl"
                style={{
                  maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                }}
              />
            </motion.div>

            {/* Decorative rings */}
            <div className="absolute inset-0 rounded-full border border-indigo-500/10 scale-110" />
            <div className="absolute inset-0 rounded-full border border-purple-500/5 scale-125" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
