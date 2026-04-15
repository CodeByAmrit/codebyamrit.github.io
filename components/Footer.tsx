"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Magnetic from "./ui/Magnetic";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#technologies", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Expertise" },
];

const socials = [
  {
    href: "https://github.com/CodeByAmrit",
    iconClass: "fi fi-brands-github",
    label: "GitHub",
    color: "group-hover:text-white",
  },
  {
    href: "https://www.linkedin.com/in/amrit-sharma-b11b88124",
    iconClass: "fi fi-brands-linkedin",
    label: "LinkedIn",
    color: "group-hover:text-blue-400",
  },
  {
    href: "https://www.instagram.com/warrior_amrit",
    iconClass: "fi fi-brands-instagram",
    label: "Instagram",
    color: "group-hover:text-pink-400",
  },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-black/20 backdrop-blur-3xl overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Brand - Span 5 */}
          <div className="md:col-span-12 lg:col-span-5">
            <Magnetic>
              <Link href="/" className="flex items-center gap-3 mb-8 group">
                <div className="relative w-12 h-12 transition-transform duration-500 group-hover:scale-110">
                  <Image src="/logo.svg" alt="Logo" fill className="object-contain logo-glow" />
                </div>
                <span className="text-white font-black text-2xl tracking-tighter">
                  AMRIT<span className="text-indigo-400">.</span>
                </span>
              </Link>
            </Magnetic>
            <p className="text-gray-400 text-lg leading-relaxed max-w-sm font-medium">
              Architecting high-performance digital ecosystems with a focus on technical purity and visionary engineering.
            </p>
          </div>

          {/* Navigation - Span 3 */}
          <div className="md:col-span-6 lg:col-span-3">
            <h4 className="text-white font-black text-xs mb-8 tracking-[0.3em] uppercase opacity-40">System</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300 font-bold text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="/profile.html" target="_blank" className="text-indigo-400 hover:text-white transition-colors duration-300 font-black text-sm uppercase tracking-widest">
                  View Dossier
                </a>
              </li>
            </ul>
          </div>

          {/* Social - Span 4 */}
          <div className="md:col-span-6 lg:col-span-4">
            <h4 className="text-white font-black text-xs mb-8 tracking-[0.3em] uppercase opacity-40">Global Network</h4>
            <div className="flex gap-4">
              {socials.map((social) => (
                <Magnetic key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-14 h-14 rounded-2xl glass border border-white/5 flex items-center justify-center text-gray-400 transition-all duration-500 group hover:border-indigo-500/40"
                  >
                    <i className={`${social.iconClass} text-xl transition-colors duration-500 ${social.color}`} />
                  </a>
                </Magnetic>
              ))}
            </div>
            <p className="mt-8 text-gray-500 text-sm font-medium">
              Active engineering nodes in India.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 font-bold text-[10px] uppercase tracking-widest">
            © 2026 Architectural Division. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-gray-600 text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
              Status <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </span>
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">
              Built with <span className="text-white">Next.js 15</span> & <span className="text-white">Framer</span>
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

