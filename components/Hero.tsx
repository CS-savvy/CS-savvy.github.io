"use client";

import { motion } from "framer-motion";

const proofSignals = [
  { value: "8+", label: "Years Building\nML Systems" },
  { value: "5", label: "Filed\nPatents" },
  { value: "2", label: "Published\nResearch Papers" },
  { value: "50+", label: "Projects \& POCs\ncompleted" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] },
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-indigo-600/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
        {/* Available badge */}
        <motion.div {...fadeUp(0)} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-800 text-sm text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
            Available for consulting &amp; freelance projects
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.1)}
          className="text-6xl sm:text-7xl lg:text-[88px] font-bold tracking-tight text-white mb-4 leading-none"
        >
          Mukul Kumar
        </motion.h1>

        {/* Role */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-2xl sm:text-3xl font-medium text-indigo-400 mb-6"
        >
          Applied AI Engineer
        </motion.p>

        {/* Description */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-lg text-zinc-500 max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          Specializing in{" "}
          <span className="text-zinc-300 font-medium">Computer Vision</span>,{" "}
          <span className="text-zinc-300 font-medium">NLP</span>, and{" "}
          <span className="text-zinc-300 font-medium">Production ML Systems</span>.
          Senior Data Scientist with 8+ years building enterprise-grade AI that ships, scales,
          and delivers measurable impact. MTech AI at BITS Pilani.
        </motion.p>

        {/* Proof signals */}
        <motion.div
          {...fadeUp(0.4)}
          className="flex flex-wrap justify-center gap-10 sm:gap-16 mb-14"
        >
          {proofSignals.map((signal) => (
            <div key={signal.value} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-1.5 tabular-nums">
                {signal.value}
              </div>
              <div className="text-xs sm:text-sm text-zinc-500 whitespace-pre-line leading-snug">
                {signal.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.5)}
          className="flex flex-wrap justify-center gap-3"
        >
          <a
            href="#projects"
            className="px-7 py-3.5 bg-indigo-500 hover:bg-indigo-400 text-white rounded-xl font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-400/35 hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-7 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-white rounded-xl font-semibold text-sm border border-zinc-800 hover:border-zinc-700 transition-all duration-200 hover:-translate-y-0.5"
          >
            Hire Me
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 text-zinc-400 hover:text-white rounded-xl font-semibold text-sm border border-zinc-800/60 hover:border-zinc-600 transition-all duration-200 hover:-translate-y-0.5"
          >
            ↓ Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-600"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
