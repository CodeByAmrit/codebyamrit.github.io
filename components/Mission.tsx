"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "User-First Design",
    description: "Interfaces designed with the end-user in mind, ensuring ease of use and accessibility.",
    iconClass: "fi fi-rr-user",
    color: "from-blue-500/20 to-indigo-500/20",
    iconColor: "text-blue-400",
  },
  {
    title: "Clean & Modern Code",
    description: "Writing scalable, maintainable code using the latest industry standards and patterns.",
    iconClass: "fi fi-rr-code-branch",
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400",
  },
  {
    title: "Performance Mapping",
    description: "Obsessed with Core Web Vitals, ensuring lightning-fast load times and smooth interactions.",
    iconClass: "fi fi-rr-bolt",
    color: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-400",
  },
];

export default function Mission() {
  return (
    <section className="section-pad relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-4 block">
              My Mission
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight font-[var(--font-poppins)]">
              Building Digital <span className="gradient-text">Experiences</span> That Matter
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              I don&apos;t just build websites; I create digital solutions that help brands connect
              with their audience. My approach combines technical excellence with a deep
              understanding of user psychology.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-indigo-400 bg-indigo-500/5 px-4 py-2 rounded-full border border-indigo-500/10">
                <i className="fi fi-rr-check text-xs" />
                <span className="text-sm font-medium">Problem Solver</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400 bg-purple-500/5 px-4 py-2 rounded-full border border-purple-500/10">
                <i className="fi fi-rr-check text-xs" />
                <span className="text-sm font-medium">Performance Driven</span>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {features.map((feature, i) => {
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`group p-6 rounded-2xl glass border border-white/5 hover:border-white/10 transition-all duration-300 relative overflow-hidden`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <div className="relative flex gap-5">
                    <div
                      className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500`}
                    >
                      <i className={`${feature.iconClass} text-xl ${feature.iconColor}`} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
