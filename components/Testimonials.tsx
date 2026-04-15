"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { MouseEvent } from "react";
import Magnetic from "./ui/Magnetic";

const testimonials = [
  {
    content: "Working with Amrit was a game-changer. His ability to understand our complex requirements and translate them into a high-performance web application was impressive.",
    author: "James Wilson",
    role: "Founding Engineer, TechVision",
    avatar: "JW",
  },
  {
    content: "Amrit is not just a developer; he's a problem solver. He built our entire dashboard from scratch, ensuring it was both beautiful and incredibly fast.",
    author: "Sarah Chen",
    role: "Product Manager, Apex Solutions",
    avatar: "SC",
  },
  {
    content: "The level of detail and commitment Amrit brings to the table is unmatched. Our conversion rates increased by 40% after the redesign he implemented.",
    author: "David Miller",
    role: "CEO, InnovateX",
    avatar: "DM",
  },
];

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-10 md:p-12 hover:border-indigo-500/40 transition-all duration-500 shadow-2xl"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(450px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.1), transparent 85%)`
          ),
        }}
      />
      
      <div className="absolute top-10 right-12 opacity-5 transition-opacity group-hover:opacity-20">
        <i className="fi fi-rr-quote-right text-6xl text-indigo-400" />
      </div>

      <div className="flex items-center gap-6 mb-10 relative z-10">
        <Magnetic>
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-black text-white text-lg shadow-2xl transition-transform duration-500 group-hover:scale-110">
            {testimonial.avatar}
          </div>
        </Magnetic>
        <div>
          <h4 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300 tracking-tight">
            {testimonial.author}
          </h4>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">{testimonial.role}</p>
        </div>
      </div>

      <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-medium relative z-10 italic">
        &ldquo;{testimonial.content}&rdquo;
      </p>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-xs font-bold tracking-[0.5em] text-indigo-400 uppercase mb-6 block">Legacy</span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white font-[var(--font-poppins)] tracking-tighter">
            Global <span className="gradient-text">Recognition</span>
          </h2>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg font-medium">
            Testimonials from industry leaders who have experienced the power of architectural excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={testimonial.author} testimonial={testimonial} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

