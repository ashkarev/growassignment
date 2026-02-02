import Link from "next/link";
import { BLOGS } from "../data";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blogIndex = BLOGS.findIndex((b) => b.slug === slug);
  const blog = BLOGS[blogIndex];

  if (!blog) {
    return (
      <div className="p-20 text-xl bg-[var(--color-secondary)] min-h-screen text-[var(--color-primary)]">
        Blog not found
      </div>
    );
  }

  const nextBlog = BLOGS[(blogIndex + 1) % BLOGS.length];

  return (
    <main className="bg-[var(--color-secondary)] min-h-screen py-32 px-10 text-[var(--color-primary)]">
      <div className="max-w-4xl mx-auto">
        {/* BACK LINK */}
        <Link
          href="/blog"
          className="text-sm tracking-widest border-b border-[var(--color-primary)] pb-1 hover:opacity-60 transition-all mb-16 inline-block"
        >
          ← BACK TO BLOG
        </Link>

        {/* META */}
        <p className="mb-6 text-[15px] font-medium tracking-tight text-[var(--text-secondary)]">
          {blog.date}
        </p>

        {/* TITLE */}
        <h1 className="text-[48px] md:text-[64px] mb-12 leading-[1.15] font-extrabold">
          {blog.title}
        </h1>

        {/* CONTENT */}
        <div className="text-[20px] leading-relaxed max-w-3xl space-y-8 text-[var(--text-secondary)]">
          <p>{blog.content}</p>

          <p>
            Therapy often begins by slowing down and paying attention to what
            your body and nervous system are communicating. Over time, this
            awareness helps reduce reactivity and builds a greater sense of
            stability in daily life.
          </p>

          <p>
            Evidence-based therapy is not about fixing yourself—it is about
            understanding patterns, increasing choice, and developing a more
            compassionate relationship with your internal experience.
          </p>
        </div>

        {/* NAVIGATION */}
        <div className="mt-32 pt-16 border-t border-[var(--color-primary)]/20 flex flex-col md:flex-row justify-between items-center gap-12">
          <Link
            href="/blog"
            className="text-sm tracking-widest border-b border-[var(--color-primary)] pb-1 hover:opacity-60 transition-all"
          >
            ← BACK TO BLOG
          </Link>

          <Link
            href={`/blog/${nextBlog.slug}`}
            className="group flex flex-col items-end"
          >
            <span className="text-[13px] uppercase tracking-widest text-[var(--text-secondary)] mb-3 font-medium">
              Next Post
            </span>
            <span className="text-[28px] md:text-[32px] font-medium group-hover:opacity-60 transition-opacity">
              {nextBlog.title} →
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
