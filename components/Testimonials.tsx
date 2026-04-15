"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    content:
      "Working with Amrit was a game-changer. His ability to understand our complex requirements and translate them into a high-performance web application was impressive.",
    author: "James Wilson",
    role: "Founding Engineer, TechVision",
    avatar: "JW",
  },
  {
    content:
      "Amrit is not just a developer; he's a problem solver. He built our entire dashboard from scratch, ensuring it was both beautiful and incredibly fast.",
    author: "Sarah Chen",
    role: "Product Manager, Apex Solutions",
    avatar: "SC",
  },
  {
    content:
      "The level of detail and commitment Amrit brings to the table is unmatched. Our conversion rates increased by 40% after the redesign he implemented.",
    author: "David Miller",
    role: "CEO, InnovateX",
    avatar: "DM",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-[var(--font-poppins)]">
            Client <span className="gradient-text">Feedback</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 relative group hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <i className="fi fi-rr-quote-right text-4xl text-indigo-400" />
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white shrink-0">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.author}</h4>
                  <p className="text-gray-500 text-xs">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed italic">&quot;{testimonial.content}&quot;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
