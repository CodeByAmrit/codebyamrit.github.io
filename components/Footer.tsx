import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#technologies", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
];

const socials = [
  {
    href: "https://github.com/CodeByAmrit",
    iconClass: "fi fi-brands-github",
    label: "GitHub",
    hoverColor: "hover:text-white hover:bg-white/10",
  },
  {
    href: "https://www.linkedin.com/in/amrit-sharma-b11b88124",
    iconClass: "fi fi-brands-linkedin",
    label: "LinkedIn",
    hoverColor: "hover:text-blue-400 hover:bg-blue-500/10",
  },
  {
    href: "https://www.instagram.com/warrior_amrit",
    iconClass: "fi fi-brands-instagram",
    label: "Instagram",
    hoverColor: "hover:text-pink-400 hover:bg-pink-500/10",
  },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 mt-8">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-9 h-9">
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  fill
                  className="object-contain logo-glow"
                />
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">Amrit Sharma</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Full Stack Developer dedicated to crafting scalable, performant, and beautiful web
              experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/profile.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-sm"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">
              Connect
            </h4>
            <div className="flex gap-3">
              {socials.map((social) => {
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-300 ${social.hoverColor}`}
                  >
                    <i className={`${social.iconClass} text-base`} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 Amrit Sharma. All Rights Reserved.
          </p>
          <p className="text-gray-600 text-xs flex items-center gap-1.5">
            Built with <i className="fi fi-ss-heart text-[10px] text-pink-500" /> Next.js &amp; Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
