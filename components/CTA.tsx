"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="section-pad relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/15 to-pink-600/10" />
          <div className="absolute inset-0 border border-white/10 rounded-3xl" />

          {/* Glow blobs */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative z-10 text-center py-16 px-8 md:py-20 md:px-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
              <i className="fi fi-rr-sparkles text-xs" />
              Open for Opportunities
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-[var(--font-poppins)]">
              Ready to Build{" "}
              <span className="gradient-text">Something Amazing?</span>
            </h2>

            <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you need a custom web application, system integration, or technical
              consultation — I&apos;m here to help bring your ideas to life with clean code and
              great design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919817044885"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-semibold shadow-xl shadow-indigo-500/25 text-sm"
              >
                <i className="fi fi-brands-whatsapp text-base relative z-10" />
                <span>Discuss Project</span>
              </a>
              <a
                href="mailto:amritsharma2617@gmail.com"
                className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl glass border border-white/10 text-gray-200 hover:text-white hover:border-indigo-400/30 transition-all duration-300 font-semibold text-sm hover:shadow-lg hover:shadow-indigo-500/10"
              >
                <i className="fi fi-rr-envelope text-base" />
                Email Me
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
