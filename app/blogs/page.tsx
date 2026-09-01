import type { Metadata } from "next";
import BlogIndex from "@/components/BlogIndex";
import { getBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Our Blog | Mukul Kumar",
  description: "Notes from building production AI systems, computer vision pipelines, and document intelligence products.",
};

export default function BlogsPage() {
  const posts = getBlogPosts();

  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-32 sm:pt-40">
      <header className="mb-16 max-w-3xl">
        <p className="section-label mb-4">Notes on applied AI</p>
        <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-7xl">
          Our <span className="text-indigo-400">Blog</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-400 sm:text-xl">
          Field notes on building, optimizing, and deploying AI systems that have to work in the real world.
        </p>
      </header>

      <BlogIndex posts={posts} />
    </main>
  );
}