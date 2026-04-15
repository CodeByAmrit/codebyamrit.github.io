"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "./ui/Magnetic";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#technologies", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Expertise" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 border ${
          scrolled 
            ? "glass border-white/10 shadow-2xl shadow-black/40" 
            : "bg-transparent border-transparent"
        }`}>
          {/* Logo */}
          <Magnetic>
            <Link href="/" className="flex items-center gap-3 group relative z-10">
              <div className="relative w-10 h-10 transition-transform duration-500 group-hover:scale-110">
                <Image src="/logo.svg" alt="Logo" fill className="object-contain logo-glow" />
              </div>
              <span className="text-white font-black text-xl tracking-tighter hidden sm:block">
                AMRIT<span className="text-indigo-400">.</span>
              </span>
            </Link>
          </Magnetic>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2 bg-white/5 rounded-full p-1 border border-white/5">
            {navLinks.map((link) => (
              <Magnetic key={link.href}>
                <a
                  href={link.href}
                  className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 relative ${
                    activeSection === link.href.slice(1)
                      ? "text-white bg-white/10"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              </Magnetic>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <Magnetic>
              <a
                href="/profile.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors px-4 py-2"
              >
                Resume
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="https://wa.me/919817044885"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest shadow-xl shadow-indigo-500/20"
              >
                Connect
              </a>
            </Magnetic>
          </div>

          {/* Mobile Menu Btn */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-white"
          >
            <i className={`fi ${mobileOpen ? "fi-rr-cross" : "fi-rr-menu-burger"} text-sm`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-full left-6 right-6 mt-4 md:hidden"
          >
            <div className="glass rounded-[2rem] border border-white/10 p-8 shadow-2xl">
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-black text-white hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="h-px bg-white/10 my-4" />
                <a
                  href="/profile.html"
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-bold text-gray-400 hover:text-white"
                >
                  View Full Resume
                </a>
                <a
                  href="https://wa.me/919817044885"
                  onClick={() => setMobileOpen(false)}
                  className="btn-gradient text-center py-4 rounded-2xl text-xs font-black uppercase tracking-widest"
                >
                  Let&apos;s Talk
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

