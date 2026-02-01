import Link from "next/link";
import { BLOGS } from "../data";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blogIndex = BLOGS.findIndex(b => b.slug === slug);
  const blog = BLOGS[blogIndex];

  if (!blog) {
    return (
      <div className="p-20 text-xl bg-[#f7f2eb] min-h-screen">
        Blog not found
      </div>
    );
  }

  const nextBlog = BLOGS[(blogIndex + 1) % BLOGS.length];

  return (
    <main className="bg-[#e5e0da] min-h-screen py-32 px-10 text-[#24371b]">
      <div className="max-w-4xl mx-auto">
        <Link href="/blog" className="text-sm tracking-widest border-b border-[#24371b] pb-1 hover:text-[#24371b]/60 hover:border-[#24371b]/60 transition-all mb-16 inline-block">
          ← BACK TO BLOG
        </Link>

        <div className="aspect-video w-full overflow-hidden mb-16">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>

        <p className="mb-6 text-[15px] font-medium tracking-tight">{blog.date}</p>

        <h1 className="text-[56px] md:text-[72px] mb-12 leading-[1.1] font-medium">{blog.title}</h1>

        <div className="text-[20px] leading-relaxed max-w-3xl space-y-8 font-light italic">
          <p>{blog.content}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="mt-32 pt-16 border-t border-[#24371b]/20 flex flex-col md:flex-row justify-between items-center gap-12">
          <Link href="/blog" className="text-sm tracking-widest border-b border-[#24371b] pb-1 hover:text-[#24371b]/60 hover:border-[#24371b]/60 transition-all">
            ← BACK TO BLOG
          </Link>

          <Link href={`/blog/${nextBlog.slug}`} className="group flex flex-col items-end">
            <span className="text-[13px] uppercase tracking-widest text-[#24371b]/60 mb-3 font-medium">Next Post</span>
            <span className="text-[32px] font-medium group-hover:opacity-60 transition-opacity">
              {nextBlog.title} →
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
