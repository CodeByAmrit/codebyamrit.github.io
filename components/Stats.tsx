"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
const stats = [
  {
    iconClass: "fi fi-rr-rocket-lunch",
    value: 2,
    suffix: "+",
    label: "Years Experience",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
  },
  {
    iconClass: "fi fi-rr-code-simple",
    value: 15,
    suffix: "+",
    label: "Projects Completed",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    iconClass: "fi fi-rr-star",
    value: 10,
    suffix: "+",
    label: "Happy Clients",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
  },
  {
    iconClass: "fi fi-rr-shield-check",
    value: 100,
    suffix: "%",
    label: "Commitment",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
];

function CountUp({
  target,
  suffix,
  trigger,
}: {
  target: number;
  suffix: string;
  trigger: boolean;
}) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!trigger) return;
    const start = Date.now();
    const duration = 2000;

    const animate = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [trigger, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, i) => {
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className={`glass-card rounded-2xl p-6 text-center ${stat.border}`}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center mx-auto mb-4`}
                >
                  <i className={`${stat.iconClass} text-xl ${stat.color}`}></i>
                </div>
                <div className={`text-3xl font-bold ${stat.color} mb-1 font-[var(--font-poppins)]`}>
                  <CountUp target={stat.value} suffix={stat.suffix} trigger={triggered} />
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
