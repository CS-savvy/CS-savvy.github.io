"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Project = {
  number: string;
  badge: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  approach: string;
  stack: string[];
  metrics: { value: string; label: string }[];
  highlights: string[];
  dotColor: string;
  metricColor: string;
  badgeClass: string;
};

const projects: Project[] = [
  {
    number: "01",
    badge: "Flagship · 4 Patents Filed",
    title: "Receipt Intelligence System",
    category: "Document AI · Computer Vision · NLP",
    description:
      "End-to-end document intelligence pipeline for automated extraction of structured data from millions of diverse receipt formats across 10+ countries.",
    problem:
      "Enterprises needed accurate, scalable extraction from highly variable receipt layouts — different languages, currencies, and merchant formats.",
    approach:
      "Combined OCR preprocessing, Graph Attention Networks for layout understanding, and NER pipelines for entity extraction. Optimized with TensorRT for production inference.",
    stack: ["PyTorch", "TensorRT", "Graph Attention Networks", "OCR", "NER", "Triton", "Docker"],
    metrics: [
      { value: "94%+", label: "Extraction Accuracy" },
      { value: "60%", label: "Latency Reduction" },
      { value: "4", label: "Patents Filed" },
    ],
    highlights: [
      "Graph Attention Networks for receipt layout detection",
      "Multi-language OCR with custom preprocessing pipeline",
      "NER pipeline for key-field extraction",
      "TensorRT optimization for production inference",
      "Deployed and serving across 10+ countries",
    ],
    dotColor: "bg-indigo-400",
    metricColor: "text-indigo-400",
    badgeClass: "text-indigo-300 bg-indigo-500/10 border-indigo-500/30",
  },
  {
    number: "02",
    badge: "Edge AI · Multi-Camera Scale",
    title: "Real-Time Social Distancing Monitor",
    category: "Computer Vision · Edge AI · Deployment",
    description:
      "Large-scale CCTV monitoring system for automated compliance detection, deployed on 40+ cameras with real-time edge inference and sub-100ms latency.",
    problem:
      "Organizations needed reliable, real-time monitoring across distributed camera networks without cloud latency or data-privacy concerns.",
    approach:
      "NVIDIA DeepStream pipeline on Jetson edge devices with homography-based distance estimation, spatial zone mapping, and a distributed alert system.",
    stack: ["DeepStream", "TensorRT", "YOLO", "NVIDIA Jetson", "OpenCV", "CUDA", "Python"],
    metrics: [
      { value: "40+", label: "Cameras Deployed" },
      { value: "<100ms", label: "Inference Latency" },
      { value: "12×", label: "GPU vs CPU Speedup" },
    ],
    highlights: [
      "Multi-camera real-time processing pipeline",
      "Edge deployment on NVIDIA Jetson devices",
      "DeepStream for high-throughput inference",
      "Custom homography-based distance estimation",
      "Distributed alert and spatial zone management",
    ],
    dotColor: "bg-emerald-400",
    metricColor: "text-emerald-400",
    badgeClass: "text-emerald-300 bg-emerald-500/10 border-emerald-500/30",
  },
  {
    number: "03",
    badge: "Research · MDPI Biomimetics 2023",
    title: "Parkinson's Disease Classifier",
    category: "Healthcare AI · Transformers · Research",
    description:
      "Transformer-based classification model for early Parkinson's detection using vocal biomarkers. Achieved 97.2% accuracy, published in MDPI Biomimetics, July 2023.",
    problem:
      "Early Parkinson's detection requires expensive clinical assessments. Objective, non-invasive screening using voice biomarkers could democratize access.",
    approach:
      "Fine-tuned Transformer architectures on voice recordings, with novel feature engineering from acoustic biomarkers. Evaluated on open benchmarks against traditional ML baselines.",
    stack: ["Transformers", "PyTorch", "Signal Processing", "scikit-learn", "librosa", "Python"],
    metrics: [
      { value: "97.2%", label: "Classification Accuracy" },
      { value: "0.96", label: "F1 Score" },
      { value: "MDPI '23", label: "Publication Venue" },
    ],
    highlights: [
      "Transformer architecture for acoustic biomarker time-series",
      "Novel feature engineering from complex vocal biomarkers",
      "Outperforms traditional ML baselines across all metrics",
      "Published in MDPI Biomimetics, July 2023",
      "Evaluated on open, public benchmark datasets",
    ],
    dotColor: "bg-violet-400",
    metricColor: "text-violet-400",
    badgeClass: "text-violet-300 bg-violet-500/10 border-violet-500/30",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-32 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label mb-3">Selected Work</p>
          <h2 className="section-heading mb-5">Featured Projects</h2>
          <p className="text-zinc-500 max-w-2xl text-lg leading-relaxed">
            Deep case studies on production AI systems — from patent-filed document intelligence
            to real-time edge deployment at scale.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
              className="card-base card-hover p-8 lg:p-10"
            >
              <div className="flex flex-col xl:flex-row gap-8">
                {/* Main content */}
                <div className="flex-1 min-w-0">
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-5">
                    <span className="text-6xl font-bold text-zinc-800 leading-none select-none flex-shrink-0">
                      {project.number}
                    </span>
                    <div className="min-w-0">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold border mb-2 ${project.badgeClass}`}
                      >
                        {project.badge}
                      </span>
                      <h3 className="text-2xl font-bold text-white leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm text-zinc-500 mt-1 font-medium">{project.category}</p>
                    </div>
                  </div>

                  <p className="text-zinc-400 mb-6 leading-relaxed">{project.description}</p>

                  {/* Problem / Approach */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="bg-zinc-950/60 rounded-xl p-4 border border-zinc-800/40">
                      <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-2">
                        Problem
                      </p>
                      <p className="text-sm text-zinc-400 leading-relaxed">{project.problem}</p>
                    </div>
                    <div className="bg-zinc-950/60 rounded-xl p-4 border border-zinc-800/40">
                      <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-2">
                        Approach
                      </p>
                      <p className="text-sm text-zinc-400 leading-relaxed">{project.approach}</p>
                    </div>
                  </div>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1.5 bg-zinc-800/70 text-zinc-400 rounded-full border border-zinc-700/40 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-500">
                        <span
                          className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${project.dotColor}`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics column */}
                <div className="xl:w-44 flex xl:flex-col gap-3 flex-wrap">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="flex-1 xl:flex-none bg-zinc-950/80 rounded-xl p-4 border border-zinc-800/50 text-center min-w-[100px]"
                    >
                      <div className={`text-2xl font-bold mb-1 tabular-nums ${project.metricColor}`}>
                        {metric.value}
                      </div>
                      <div className="text-xs text-zinc-500 leading-snug">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
