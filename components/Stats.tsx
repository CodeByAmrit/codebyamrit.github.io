"use client";

import { useEffect, useRef, useState, MouseEvent } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Magnetic from "./ui/Magnetic";

function SpotlightCard({ children, className, span }: { children: React.ReactNode, className?: string, span: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={onMouseMove}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 ${span} ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.1), transparent 40%)`
          ),
        }}
      />
      {children}
    </motion.div>
  );
}

function CountUp({ target, suffix, trigger }: { target: number; suffix: string; trigger: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const end = target;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [trigger, target]);
  return <span>{count}{suffix}</span>;
}

export default function Stats() {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTriggered(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-pad relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 auto-rows-[180px]">
          {/* Main Stat 1 */}
          <SpotlightCard span="md:col-span-2 md:row-span-2 flex flex-col justify-center items-center text-center">
            <Magnetic>
              <div className="w-20 h-20 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6">
                <i className="fi fi-rr-rocket-lunch text-4xl text-indigo-400"></i>
              </div>
            </Magnetic>
            <h3 className="text-6xl font-bold text-white mb-2 font-[var(--font-poppins)]">
              <CountUp target={2} suffix="+" trigger={triggered} />
            </h3>
            <p className="text-gray-400 text-lg">Years of Experience</p>
          </SpotlightCard>

          {/* Stat 2 */}
          <SpotlightCard span="md:col-span-2 md:row-span-1 flex items-center justify-between p-10">
            <div>
              <h3 className="text-5xl font-bold text-purple-400 mb-1 font-[var(--font-poppins)]">
                <CountUp target={15} suffix="+" trigger={triggered} />
              </h3>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <Magnetic>
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center">
                <i className="fi fi-rr-code-simple text-3xl text-purple-400"></i>
              </div>
            </Magnetic>
          </SpotlightCard>

          {/* Stat 3 */}
          <SpotlightCard span="md:col-span-1 md:row-span-1 flex flex-col justify-center">
            <div className="text-3xl font-bold text-pink-400 font-[var(--font-poppins)]">
              <CountUp target={10} suffix="+" trigger={triggered} />
            </div>
            <p className="text-gray-400 text-sm mt-1">Happy Clients</p>
          </SpotlightCard>

          {/* Status Badge Card */}
          <SpotlightCard span="md:col-span-1 md:row-span-1 flex flex-col justify-center border-indigo-500/20 bg-indigo-500/5">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-bold text-green-400 uppercase tracking-widest">Available</span>
            </div>
            <p className="text-white font-bold text-sm">For new projects</p>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}

