import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type BlogPost = {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  image?: string;
  imageAlt?: string;
  published: boolean;
  readingTime: string;
  tags: string[];
  content: string;
};

const blogDirectory = path.join(process.cwd(), "content", "blog");

export function getBlogPosts(): BlogPost[] {
  return fs
    .readdirSync(blogDirectory)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const filePath = path.join(blogDirectory, fileName);
      const { data, content } = matter(fs.readFileSync(filePath, "utf8"));

      return {
        title: String(data.title),
        slug: String(data.slug),
        date: String(data.date),
        excerpt: String(data.excerpt),
        image: data.image ? String(data.image) : undefined,
        imageAlt: data.imageAlt ? String(data.imageAlt) : undefined,
        published: Boolean(data.published),
        readingTime: String(data.readingTime),
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        content,
      };
    })
    .sort((firstPost, secondPost) => secondPost.date.localeCompare(firstPost.date));
}