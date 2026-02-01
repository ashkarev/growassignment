"use client";
import Link from "next/link";
import { BLOGS } from "./data";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";


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

     <section className="bg-[#f7f2eb] min-h-screen flex items-center">
  <div className="max-w-[1600px] mx-auto w-full px-6 md:px-20" data-aos="fade-up">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

      {/* LEFT IMAGE */}
      <div className="flex justify-center md:justify-start">
        <div className="w-[340px] md:w-[420px] h-[520px] md:h-[620px] rounded-t-full overflow-hidden bg-gray-300">
          {/* replace bg-gray-300 with next/image later */}
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="text-[#24371b]">
        <h1 className="text-[42px] md:text-[64px] leading-tight mb-8">
          The Lilac Blog
        </h1>

        <p className="text-[18px] leading-relaxed max-w-md mb-6">
          My tiny corner of the internet where I talk about all things
          healing, heart, and wholeness.
        </p>

        <p className="text-[18px] font-medium">
          Glad you’re here.
        </p>
      </div>

    </div>
  </div>
</section>






   {/* sec--2 */}
     <section className="bg-[#e5e0da] min-h-screen px-10 py-32">
      <div className="max-w-[1400px] mx-auto" data-aos="fade-up">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-24">
          {BLOGS.map((blog) => (
            <div key={blog.slug} className="flex flex-col">
              <Link href={`/blog/${blog.slug}`} className="block mb-8 aspect-[1.3/1] overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </Link>

              <p className="text-[13px] mb-4 text-[#24371b] font-medium tracking-tight">
                {blog.date}
              </p>

              <h2 className="text-[48px] mb-8 text-[#24371b] leading-[1.1] font-medium">
                <Link href={`/blog/${blog.slug}`} className="hover:opacity-70 transition-opacity">
                  {blog.title}
                </Link>
              </h2>

              <Link
                href={`/blog/${blog.slug}`}
                className="text-[#24371b] border-b border-[#24371b] w-fit pb-0.5 text-[15px] font-medium hover:text-[#24371b]/60 hover:border-[#24371b]/60 transition-all"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* sec------------------3 */}

       <section className="bg-[#7c7a45] py-32 px-6">
      <div className="max-w-5xl mx-auto border border-white/60 px-10 py-20 text-center text-white" data-aos="fade-up">

        {/* TITLE */}
        <h2 className="text-[48px] font-medium mb-6">
          Subscribe
        </h2>

        {/* SUBTITLE */}
        <p className="text-[18px] mb-12">
          Sign up with your email address to receive news and updates.
        </p>

        {/* FORM */}
        <form className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full md:w-[360px] px-6 py-4 text-[#24371b] outline-none bg-white"
          />

          <button
            type="submit"
            className="border border-white px-8 py-4 tracking-widest text-sm hover:bg-white hover:text-[#7c7a45] transition"
          >
            SIGN UP
          </button>
        </form>

        {/* FOOT NOTE */}
        <p className="text-sm opacity-90">
          We respect your privacy.
        </p>

      </div>
    </section>
   </main>
  );
}
