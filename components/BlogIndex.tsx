"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { BlogPost } from "@/lib/blog";

export default function BlogIndex({ posts }: { posts: BlogPost[] }) {
  const [activeTag, setActiveTag] = useState("All");
  const tags = ["All", ...new Set(posts.flatMap((post) => post.tags))];
  const filteredPosts = useMemo(
    () =>
      activeTag === "All"
        ? posts
        : posts.filter((post) => post.tags.includes(activeTag)),
    [activeTag, posts],
  );

  return (
    <>
      <div className="mb-12 flex flex-col gap-6 border-y border-zinc-800/80 py-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-500">
          Showing <span className="font-semibold text-zinc-200">{filteredPosts.length}</span>{" "}
          {filteredPosts.length === 1 ? "article" : "articles"}
        </p>
        <div className="flex flex-wrap gap-2" aria-label="Filter articles by topic">
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                activeTag === tag
                  ? "border-indigo-400 bg-indigo-500 text-white"
                  : "border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-zinc-200"
              }`}
              aria-pressed={activeTag === tag}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {filteredPosts.map((post, index) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className={`group flex min-h-72 flex-col justify-between rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/50 hover:bg-zinc-900/80 ${
              index === 0
                ? "border-indigo-500/30 bg-indigo-500/[0.06] md:col-span-2 md:min-h-80"
                : "border-zinc-800/80 bg-zinc-900/40"
            }`}
          >
            <div>
              <div className="mb-6 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-700/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-indigo-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className={`font-semibold leading-tight text-white group-hover:text-indigo-300 ${index === 0 ? "text-3xl sm:text-4xl" : "text-xl"}`}>
                {post.title}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-500">{post.excerpt}</p>
            </div>
            <div className="mt-8 flex items-center justify-between text-xs text-zinc-600">
              <span>{post.date}</span>
              <span>{post.readingTime} <span className="ml-2 text-indigo-300">Read article →</span></span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}