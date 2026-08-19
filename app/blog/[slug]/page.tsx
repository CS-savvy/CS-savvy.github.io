import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import AuthorBlock from "@/components/AuthorBlock";
import { getBlogPosts } from "@/lib/blog";

function slugifyHeading(heading: string) {
  return heading
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

function getTableOfContents(content: string) {
  return [...content.matchAll(/^(#{2,3})\s+(.+)$/gm)].map(([, hashes, title]) => ({
    depth: hashes.length,
    title: title.trim(),
    id: slugifyHeading(title),
  }));
}

export async function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getBlogPosts().find((candidate) => candidate.slug === params.slug);

  return post
    ? { title: `${post.title} | Mukul Kumar`, description: post.excerpt }
    : {};
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPosts().find((candidate) => candidate.slug === params.slug);

  if (!post) {
    notFound();
  }

  const tableOfContents = getTableOfContents(post.content);

  return (
    <main className="mx-auto max-w-7xl px-6 pb-24 pt-32 sm:px-10 sm:pt-36">
      <header className="mb-12 sm:mb-16">
        <div className="mb-5 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-indigo-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
          {post.title}
        </h1>
        <p className="mb-7 max-w-3xl text-lg leading-8 text-zinc-400">{post.excerpt}</p>
        <p className="text-sm text-zinc-600">
          {post.date} · {post.readingTime}
        </p>
        {post.image && (
          <div className="relative mt-10 aspect-[16/8] overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900">
            <Image
              src={post.image}
              alt={post.imageAlt ?? post.title}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
            />
          </div>
        )}
      </header>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-start">
        <article className="prose prose-invert prose-zinc max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:mb-5 prose-h2:mt-14 prose-h3:mb-4 prose-h3:mt-10 prose-p:leading-8 prose-li:leading-7 prose-a:text-indigo-300 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-indigo-400 prose-blockquote:text-zinc-300 prose-code:text-indigo-200 prose-pre:border prose-pre:border-zinc-800 prose-pre:bg-zinc-900/80 prose-table:text-sm">
          <MDXRemote
            source={post.content}
            options={{ mdxOptions: { rehypePlugins: [rehypeSlug] } }}
          />
        </article>

        <aside className="lg:sticky lg:top-24">
          {tableOfContents.length > 0 && (
            <>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Table of Contents
              </p>
              <nav aria-label="Table of contents" className="border-l border-zinc-800">
                <ol className="space-y-2">
                  {tableOfContents.map((item) => (
                    <li key={item.id} className={item.depth === 3 ? "pl-5" : "pl-4"}>
                      <a
                        href={`#${item.id}`}
                        className="text-sm leading-5 text-zinc-500 transition-colors hover:text-indigo-300"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </>
          )}
          <AuthorBlock />
        </aside>
      </div>
    </main>
  );
}