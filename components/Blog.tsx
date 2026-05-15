"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const posts = [
  {
    title: "Optimizing OCR Pipelines Using TensorRT",
    excerpt:
      "How we reduced inference latency by 60% on a production OCR system processing millions of receipts — the exact techniques, trade-offs, and lessons learned.",
    date: "Coming Soon",
    readTime: "8 min read",
    tags: ["OCR", "TensorRT", "Optimization"],
    color: "indigo",
  },
  {
    title: "Lessons from Deploying CV Models on 40+ Cameras",
    excerpt:
      "What nobody tells you about edge AI at scale. Camera calibration, model drift, hardware failures, and why the deployment phase takes longer than training.",
    date: "Coming Soon",
    readTime: "10 min read",
    tags: ["Computer Vision", "Edge AI", "DeepStream"],
    color: "emerald",
  },
  {
    title: "Why Document AI Fails in Production",
    excerpt:
      "The gap between benchmark accuracy and real-world performance in document intelligence. Layout variance, multi-language edge cases, and how to design for them.",
    date: "Coming Soon",
    readTime: "7 min read",
    tags: ["Document AI", "Production ML", "NLP"],
    color: "violet",
  },
  {
    title: "Graph Neural Networks for Document Understanding",
    excerpt:
      "A practical walkthrough of using GATs to model spatial relationships between text regions — with code, architecture diagrams, and performance results.",
    date: "Coming Soon",
    readTime: "12 min read",
    tags: ["GNNs", "Document AI", "PyTorch"],
    color: "amber",
  },
];

const colorMap: Record<string, string> = {
  indigo: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
  emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  violet: "bg-violet-500/10 text-violet-300 border-violet-500/20",
  amber: "bg-amber-500/10 text-amber-300 border-amber-500/20",
};

const dotMap: Record<string, string> = {
  indigo: "bg-indigo-400",
  emerald: "bg-emerald-400",
  violet: "bg-violet-400",
  amber: "bg-amber-400",
};

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="blog" className="py-32 px-6 bg-zinc-900/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label mb-3">Writing</p>
          <h2 className="section-heading mb-5">Technical Insights</h2>
          <p className="text-zinc-500 max-w-2xl text-lg leading-relaxed">
            Practical lessons from building production AI systems. No theory — only what
            actually works (and what doesn&apos;t) in the real world.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-5">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="card-base p-6 group cursor-pointer hover:border-zinc-700/60 transition-all duration-300"
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-[10px] px-2.5 py-0.5 rounded-full font-semibold border uppercase tracking-wider ${colorMap[post.color]}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-lg font-semibold text-white mb-3 leading-snug group-hover:text-indigo-300 transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed mb-5">{post.excerpt}</p>

              <div className="flex items-center justify-between text-xs text-zinc-600">
                <div className="flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${dotMap[post.color]}`} />
                  {post.date}
                </div>
                <span>{post.readTime}</span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Coming soon notice */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-zinc-600 text-sm mt-8"
        >
          Articles launching soon. Follow on{" "}
          <a
            href="https://www.linkedin.com/in/mukulkr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors underline underline-offset-2"
          >
            LinkedIn
          </a>{" "}
          for updates.
        </motion.p>
      </div>
    </section>
  );
}
