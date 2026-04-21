"use client";

import { AnimatePresence, motion, useMotionValue, useTransform } from "framer-motion";
import { type FormEvent, type MouseEvent, useEffect, useState } from "react";
import Magnetic from "./ui/Magnetic";

type InquiryKind = "Project" | "Full-time Role" | "Consulting" | "Quick Question";

const inquiryOptions: {
  kind: InquiryKind;
  title: string;
  detail: string;
  iconClass: string;
}[] = [
  {
    kind: "Project",
    title: "Project Build",
    detail: "For founders, teams, or businesses planning a new product or platform.",
    iconClass: "fi fi-rr-briefcase",
  },
  {
    kind: "Full-time Role",
    title: "Full-time Role",
    detail: "For recruiters and hiring managers exploring long-term engineering roles.",
    iconClass: "fi fi-rr-badge",
  },
  {
    kind: "Consulting",
    title: "Consulting",
    detail: "For audits, architecture direction, performance, and technical strategy.",
    iconClass: "fi fi-rr-chart-tree-map",
  },
  {
    kind: "Quick Question",
    title: "Quick Question",
    detail: "For a short introduction before deciding the right next step.",
    iconClass: "fi fi-rr-comment-alt",
  },
];

export default function CTA() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [inquiryKind, setInquiryKind] = useState<InquiryKind>("Project");
  const [briefReady, setBriefReady] = useState(false);
  const [copied, setCopied] = useState(false);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  useEffect(() => {
    if (!copied) return;
    const timeout = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  function selectIntent(kind: InquiryKind) {
    setInquiryKind(kind);
    setModalOpen(false);
    setBriefReady(false);

    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function handlePrepareBrief(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBriefReady(true);
  }

  const inquiryText = [
    `Inquiry Type: ${inquiryKind}`,
    `Name: ${name || "Not provided"}`,
    `Email: ${email || "Not provided"}`,
    `Company / Role: ${company || "Not provided"}`,
    `Budget / Scope: ${budget || "Not provided"}`,
    "",
    "Message:",
    message || "Not provided",
  ].join("\n");

  const whatsappHref = `https://wa.me/919817044885?text=${encodeURIComponent(inquiryText)}`;
  const emailHref = `mailto:contact@amritsharma.dev?subject=${encodeURIComponent(
    `${inquiryKind} inquiry for Amrit Sharma`
  )}&body=${encodeURIComponent(inquiryText)}`;

  async function copyBrief() {
    await navigator.clipboard.writeText(inquiryText);
    setCopied(true);
  }

  return (
    <>
      <section id="contact" className="section-pad relative z-10 overflow-hidden scroll-mt-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            className="group relative rounded-[2.5rem] border border-white/5 bg-gradient-to-br from-indigo-500/10 via-slate-500/5 to-transparent p-5 sm:p-6 md:p-10 overflow-hidden border-indigo-500/20 shadow-2xl"
          >
            <motion.div
              className="pointer-events-none absolute -inset-px rounded-[3rem] opacity-0 transition duration-300 group-hover:opacity-100"
              style={{
                background: useTransform(
                  [mouseX, mouseY],
                  ([x, y]) =>
                    `radial-gradient(800px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.15), transparent 80%)`
                ),
              }}
            />

            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] -mr-48 -mt-48 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -ml-48 -mb-48 animate-pulse" />

            <div className="relative z-10 grid gap-6 md:gap-8 lg:grid-cols-[1fr_1fr]">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-indigo-400 text-[11px] font-black uppercase tracking-[0.22em] mb-6 shadow-xl"
                >
                  <i className="fi fi-rr-comments text-[10px]" />
                  Start the conversation your way
                </motion.div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-[0.96] font-[var(--font-poppins)] tracking-tighter">
                  Professional contact,
                  <br />
                  <span className="gradient-text">without the friction.</span>
                </h2>

                <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mb-6 leading-relaxed font-medium">
                  Use the guided conversation starter or fill the form directly below. Once your
                  context is ready, choose the channel that feels right, whether that is WhatsApp,
                  LinkedIn, or email.
                </p>

                <div className="flex flex-wrap gap-2.5 mb-6">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-white/80">
                    Response within 24 hours
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-white/80">
                    Recruiter and founder friendly
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-white/80">
                    No forced email first
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                  <Magnetic>
                    <button
                      type="button"
                      onClick={() => setModalOpen(true)}
                      className="btn-gradient min-w-[220px] flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl font-black uppercase tracking-[0.18em] shadow-2xl shadow-indigo-500/40 text-[11px] sm:text-xs transition-transform active:scale-95"
                    >
                      <i className="fi fi-rr-comment-dots text-base" />
                      <span>Start a Conversation</span>
                    </button>
                  </Magnetic>

                  <Magnetic>
                    <a
                      href="/profile.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass min-w-[200px] flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl border border-white/10 text-white font-black uppercase tracking-[0.18em] text-[11px] sm:text-xs hover:bg-white/10 transition-all active:scale-95"
                    >
                      <i className="fi fi-rr-document text-base" />
                      View Resume
                    </a>
                  </Magnetic>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 sm:p-5 md:p-6">
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400 mb-1.5">
                      Inquiry Builder
                    </p>
                    <h3 className="text-xl sm:text-2xl md:text-[1.75rem] font-black text-white font-[var(--font-poppins)]">
                      Build your brief on-site
                    </h3>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-white/80">
                    {inquiryKind}
                  </div>
                </div>

                <form onSubmit={handlePrepareBrief} className="space-y-3">
                  <div className="grid gap-3 md:grid-cols-2">
                    <input
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="Your name"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-gray-500 outline-none transition-colors focus:border-indigo-400"
                    />
                    <input
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      type="email"
                      placeholder="Email address"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-gray-500 outline-none transition-colors focus:border-indigo-400"
                    />
                  </div>

                  <div className="grid gap-3 md:grid-cols-2">
                    <input
                      value={company}
                      onChange={(event) => setCompany(event.target.value)}
                      placeholder="Company or role"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-gray-500 outline-none transition-colors focus:border-indigo-400"
                    />
                    <input
                      value={budget}
                      onChange={(event) => setBudget(event.target.value)}
                      placeholder="Budget or scope"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-gray-500 outline-none transition-colors focus:border-indigo-400"
                    />
                  </div>

                  <textarea
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Tell me what you want to build, hire for, or improve."
                    rows={5}
                    className="w-full rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-gray-500 outline-none transition-colors focus:border-indigo-400 resize-none"
                  />

                  <button
                    type="submit"
                    className="btn-gradient w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl font-black uppercase tracking-[0.18em] text-[11px] sm:text-xs shadow-xl shadow-indigo-500/30"
                  >
                    <i className="fi fi-rr-check text-sm" />
                    Prepare Conversation Brief
                  </button>
                </form>

                <AnimatePresence>
                  {briefReady && (
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 16 }}
                      className="mt-5 rounded-[1.7rem] border border-white/10 bg-black/20 p-4"
                    >
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-emerald-400 mb-1.5">
                            Brief Ready
                          </p>
                          <p className="text-[13px] sm:text-sm leading-relaxed text-gray-400">
                            Your context is ready. Choose the conversation channel that feels most
                            comfortable.
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={copyBrief}
                          className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white hover:bg-white/10 transition-colors"
                        >
                          {copied ? "Copied" : "Copy Brief"}
                        </button>
                      </div>

                      <div className="grid gap-2.5 sm:grid-cols-3">
                        <a
                          href={whatsappHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-center text-[10px] font-black uppercase tracking-[0.16em] text-white hover:border-green-400/40 hover:bg-green-500/10 transition-colors"
                        >
                          Continue on WhatsApp
                        </a>
                        <a
                          href="https://www.linkedin.com/in/amrit-sharma-b11b88124"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-center text-[10px] font-black uppercase tracking-[0.16em] text-white hover:border-blue-400/40 hover:bg-blue-500/10 transition-colors"
                        >
                          Open LinkedIn
                        </a>
                        <a
                          href={emailHref}
                          className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-center text-[10px] font-black uppercase tracking-[0.16em] text-white hover:border-indigo-400/40 hover:bg-indigo-500/10 transition-colors"
                        >
                          Email as Fallback
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/70 backdrop-blur-md px-4 sm:px-6 py-6 flex items-center justify-center"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-4xl rounded-[2rem] border border-white/10 bg-[#050816]/90 p-4 sm:p-5 md:p-6 shadow-2xl"
            >
              <div className="flex items-start justify-between gap-3 mb-6">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-indigo-400 mb-1.5">
                    Guided Start
                  </p>
                  <h3 className="text-2xl sm:text-3xl md:text-[2rem] font-black text-white font-[var(--font-poppins)] tracking-tighter">
                    What kind of conversation
                    <br />
                    <span className="gradient-text">do you want to start?</span>
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="w-10 h-10 rounded-2xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors"
                >
                  <i className="fi fi-rr-cross text-sm" />
                </button>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                {inquiryOptions.map((option) => (
                  <button
                    key={option.kind}
                    type="button"
                    onClick={() => selectIntent(option.kind)}
                    className="text-left rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-4 sm:p-5 hover:border-indigo-400/40 hover:bg-white/[0.05] transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-indigo-300">
                        <i className={`${option.iconClass} text-base`} />
                      </div>
                      <div>
                        <h4 className="text-[12px] sm:text-sm font-black uppercase tracking-[0.16em] text-white mb-1.5">
                          {option.title}
                        </h4>
                        <p className="text-[13px] sm:text-sm leading-relaxed text-gray-400">{option.detail}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
