"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const categories = [
  {
    title: "AI & Machine Learning",
    color: "indigo",
    items: [
      "PyTorch",
      "TensorFlow",
      "Transformers (HuggingFace)",
      "Diffusion Models",
      "Graph Neural Networks",
      "Reinforcement Learning",
      "scikit-learn",
      "XGBoost",
    ],
    tagClass: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
  },
  {
    title: "Computer Vision",
    color: "emerald",
    items: [
      "OpenCV",
      "NVIDIA DeepStream",
      "TensorRT",
      "YOLO (v5–v10)",
      "Detectron2",
      "SAM",
      "ControlNet",
      "Stable Diffusion",
    ],
    tagClass: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  },
  {
    title: "NLP & Document AI",
    color: "violet",
    items: [
      "Named Entity Recognition",
      "Knowledge Graphs",
      "Coreference Resolution",
      "OCR Pipelines",
      "LangChain / RAG",
      "spaCy",
      "NLTK",
      "Document Layout Analysis",
    ],
    tagClass: "bg-violet-500/10 text-violet-300 border-violet-500/20",
  },
  {
    title: "Infrastructure & MLOps",
    color: "amber",
    items: [
      "Docker",
      "NVIDIA Triton",
      "TF Serving",
      "AWS (EC2, S3, SageMaker)",
      "GCP (Vertex AI)",
      "Kubernetes",
      "CUDA / cuDNN",
      "MLflow",
    ],
    tagClass: "bg-amber-500/10 text-amber-300 border-amber-500/20",
  },
];

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="stack" className="py-32 px-6 bg-zinc-900/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label mb-3">Capabilities</p>
          <h2 className="section-heading mb-5">Technical Depth</h2>
          <p className="text-zinc-500 max-w-2xl text-lg leading-relaxed">
            Organized by capability — not thrown on a page as a sticker collection.
          </p>
        </motion.div>

        {/* Category grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="card-base p-7"
            >
              <h3 className="text-base font-semibold text-zinc-300 mb-5 flex items-center gap-2">
                <span className="w-1.5 h-4 rounded-full bg-current opacity-60" style={{ color: `var(--${cat.color})` }} />
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className={`text-xs px-3 py-1.5 rounded-full border font-medium ${cat.tagClass}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-5 card-base p-7 flex flex-col sm:flex-row sm:items-center gap-4"
        >
          <span className="text-sm font-semibold text-zinc-500 flex-shrink-0 uppercase tracking-wider text-xs">
            Languages
          </span>
          <div className="flex flex-wrap gap-2">
            {["Python", "TypeScript", "C++", "CUDA", "SQL", "Bash"].map((lang) => (
              <span
                key={lang}
                className="text-xs px-3 py-1.5 rounded-full bg-zinc-800/80 text-zinc-300 border border-zinc-700/50 font-medium"
              >
                {lang}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
