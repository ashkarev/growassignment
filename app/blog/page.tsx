"use client";

import Link from "next/link";
import { BLOGS } from "./data";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BlogPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <main>
      {/* ================= BLOG HERO ================= */}
      <section className="bg-[var(--color-secondary)] min-h-screen flex items-center">
        <div className="max-w-[1600px] mx-auto w-full px-6 md:px-20">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center"
            data-aos="fade-up"
          >
            {/* LEFT IMAGE */}
            <div className="flex justify-center md:justify-start">
              <div className="w-[340px] md:w-[420px] h-[520px] md:h-[620px] rounded-t-full bg-[var(--color-muted)]" />
            </div>

            {/* RIGHT CONTENT */}
            <div className="text-[var(--color-primary)]">
              <h1 className="text-[42px] md:text-[64px] leading-tight mb-8 font-extrabold">
                Insights on Anxiety, Trauma, and Burnout
              </h1>

              <p className="text-[18px] leading-relaxed max-w-md mb-6 text-[var(--text-secondary)]">
                Articles exploring anxiety, trauma, perfectionism, and burnout,
                with grounded, evidence-based perspectives on healing and nervous
                system regulation.
              </p>

              <p className="text-[18px] font-semibold">
                Thoughtful writing for thoughtful adults.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BLOG LIST ================= */}
      <section className="bg-[var(--color-muted)] min-h-screen px-10 py-32">
        <div className="max-w-[1400px] mx-auto" data-aos="fade-up">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-24">
            {BLOGS.map((blog) => (
              <div key={blog.slug} className="flex flex-col">
                <Link
                  href={`/blog/${blog.slug}`}
                  className="block mb-8 aspect-[1.3/1] overflow-hidden"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </Link>

                <p className="text-[13px] mb-4 text-[var(--text-secondary)] font-semibold">
                  {blog.date}
                </p>

                <h2 className="text-[42px] md:text-[48px] mb-8 text-[var(--color-primary)] leading-[1.1] font-extrabold">
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="hover:text-[var(--color-accent)] transition-colors"
                  >
                    {blog.title}
                  </Link>
                </h2>

                <Link
                  href={`/blog/${blog.slug}`}
                  className="text-[var(--color-primary)] border-b border-[var(--color-primary)] w-fit pb-0.5 text-[15px] font-semibold hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SUBSCRIBE ================= */}
      <section className="bg-[var(--color-accent)] py-32 px-6">
        <div
          className="max-w-5xl mx-auto border border-white/60 px-10 py-20 text-center text-white"
          data-aos="fade-up"
        >
          <h2 className="text-[48px] font-extrabold mb-6">
            Stay Connected
          </h2>

          <p className="text-[18px] mb-12">
            Receive thoughtful insights and updates directly in your inbox.
          </p>

          <form className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full md:w-[360px] px-6 py-4 text-[var(--color-primary)] outline-none bg-white"
            />

            <button
              type="submit"
              className="border border-white px-8 py-4 tracking-widest text-sm hover:bg-white hover:text-[var(--color-accent)] transition font-semibold"
            >
              SIGN UP
            </button>
          </form>

          <p className="text-sm opacity-90">
            Your privacy is always respected.
          </p>
        </div>
      </section>
    </main>
  );
}
