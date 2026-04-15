"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#technologies", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track scroll for glass effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section highlighting via IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Close mobile menu on link click
  const handleNavClick = () => setMobileOpen(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-white/10 shadow-xl shadow-black/20" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm font-[var(--font-poppins)] shadow-lg shadow-indigo-500/30">
            AS
          </div>
          <span className="text-white font-semibold text-lg tracking-tight group-hover:text-indigo-300 transition-colors duration-300">
            Amrit Sharma
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-indigo-400 after:transition-all after:duration-300 hover:after:w-full ${
                activeSection === link.href.slice(1)
                  ? "text-indigo-400 after:w-full"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/profile.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold glass border border-white/10 text-gray-200 hover:text-white hover:border-indigo-500/30 transition-all duration-300"
          >
            <i className="fi fi-rr-file-user text-xs" />
            <span>My Resume</span>
          </a>
          <a
            href="https://wa.me/919817044885"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 btn-gradient px-5 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-indigo-500/25"
          >
            <span>Let&apos;s Connect</span>
            <i className="fi fi-rr-arrow-right text-[10px] relative z-10" />
          </a>
        </div>

        {/* Hamburger */}
        <button
          id="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? (
            <i className="fi fi-rr-cross text-sm flex items-center justify-center w-5 h-5" />
          ) : (
            <i className="fi fi-rr-menu-burger text-base flex items-center justify-center w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden glass border-t border-white/10"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className={`text-sm font-medium py-2 transition-colors duration-200 ${
                    activeSection === link.href.slice(1)
                      ? "text-indigo-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/profile.html"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="glass text-center px-5 py-3 rounded-xl text-sm font-semibold mt-2 text-gray-200 border border-white/10"
              >
                <i className="fi fi-rr-file-user mr-2 text-xs" />
                <span>My Resume</span>
              </a>
              <a
                href="https://wa.me/919817044885"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="btn-gradient text-center px-5 py-3 rounded-xl text-sm font-semibold"
              >
                <span>Let&apos;s Connect</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
