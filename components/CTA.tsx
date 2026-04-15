"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { MouseEvent } from "react";
import Magnetic from "./ui/Magnetic";

export default function CTA() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section className="section-pad relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          onMouseMove={handleMouseMove}
          className="group relative rounded-[3rem] border border-white/5 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent p-12 md:p-24 overflow-hidden border-indigo-500/20 shadow-2xl"
        >
          {/* Spotlight Effect */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-[3rem] opacity-0 transition duration-300 group-hover:opacity-100"
            style={{
              background: useTransform(
                [mouseX, mouseY],
                ([x, y]) => `radial-gradient(800px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.15), transparent 80%)`
              ),
            }}
          />

          {/* Background Dynamics */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] -mr-48 -mt-48 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -ml-48 -mb-48 animate-pulse" />

          {/* Content */}
          <div className="relative z-10 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-indigo-400 text-xs font-black uppercase tracking-[0.3em] mb-12 shadow-xl"
            >
              <i className="fi fi-rr-sparkles text-[10px]" />
              Status: Available for High-Grade Projects
            </motion.div>

            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-white mb-10 leading-[0.9] font-[var(--font-poppins)] tracking-tighter">
              Ready to architect <br />
              <span className="gradient-text">the future?</span>
            </h2>

            <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed font-medium">
              Bridging the gap between ambitious business goals and elite technical execution. Let&apos;s build something that survives the test of time.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Magnetic>
                <a
                  href="https://wa.me/919817044885"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient min-w-[240px] flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-black uppercase tracking-widest shadow-2xl shadow-indigo-500/40 text-xs transition-transform active:scale-95"
                >
                  <i className="fi fi-brands-whatsapp text-lg relative z-10" />
                  <span>Start a Conversation</span>
                </a>
              </Magnetic>
              
              <Magnetic>
                <a
                  href="mailto:amritsharma2617@gmail.com"
                  className="glass min-w-[240px] flex items-center justify-center gap-3 px-10 py-5 rounded-2xl border border-white/10 text-white font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all active:scale-95"
                >
                  <i className="fi fi-rr-envelope text-lg" />
                  Email Infrastructure
                </a>
              </Magnetic>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

