"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [open, setOpen] = useState<number | null>(null);
const [openBg, setOpenBg] = useState<number | null>(null);

useEffect(() => {
  AOS.init({
    duration: 800,
    easing: "ease-out",
    once: true,
  });
}, []);



  return (
    <main>

{/* ================= SECTION 1 ================= */}
<section className="min-h-screen flex items-center px-6 bg-[rgb(250,246,240)]">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 w-full" data-aos="fade-up"
   >

    <div className="flex justify-center md:justify-start">
      <div className="bg-gray-300 w-full max-w-md h-[360px] md:h-[480px] rounded-[240px]" />
    </div>

    <div className="flex flex-col justify-center">
      <h1 className="text-[40px] md:text-[64px] leading-[1.15] font-normal text-[rgb(42,61,32)] mb-8">
        Live your life <br /> in full bloom
      </h1>

      <p className="text-lg text-[rgb(42,61,32)] mb-10 max-w-md">
        Therapy for Adults in Minneapolis, MN.
      </p>

    <Link
  href="/contact"
  className="
    border border-[rgb(42,61,32)]
    text-[rgb(42,61,32)]
    px-10 py-4
    text-sm tracking-wide
    w-fit
    hover:bg-[rgb(42,61,32)]
    hover:text-white
    transition-colors
  "
>
  CONNECT WITH ME →
</Link>

    </div>
  </div>
</section>

{/* ================= SECTION 2 ================= */}
<section className="min-h-screen flex flex-col md:flex-row">
  <div className="w-full md:w-1/2 bg-[#e5e0da] flex flex-col px-8 md:px-24 pt-24 md:pt-32" data-aos="fade-up">
    <h2 className="text-[36px] md:text-[48px] mb-10 text-[#24371b]">
      Live a fulfilling life.
    </h2>

    <p className="text-[18px] mb-6 max-w-md text-[#24371b]">
      Life can be challenging—especially when you're trying to balance
      your personal and professional life.
    </p>

    <p className="text-[18px] max-w-md text-[#24371b]">
      It's easy to feel like you're alone in facing these challenges,
      but I want you to know that I'm here to help.
    </p>

    <Link href='/contact' className="mt-auto -mx-8 md:-mx-24 w-[calc(100%+4rem)] md:w-[calc(100%+12rem)]
      bg-[#e5e0da] text-[#24371b] py-6 text-[13px] tracking-widest
      hover:bg-[#1b2a14] hover:text-white transition border-t text-center">
      GET IN TOUCH →
    </Link>
  </div>

  <div className="w-full md:w-1/2 bg-gray-300" />
</section>

{/* ================= SECTION 3 ================= */}
<section className="bg-[#f7f2eb] py-24">
  <div className="max-w-[1600px] mx-auto px-6 md:px-16" data-aos="fade-up">
    <h2 className="text-[40px] md:text-[56px] text-center text-[#24371b] mb-16">
      My Specialties
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {["Self-Esteem", "Relationships", "Burnout"].map((title, i) => (
        <div key={i} className="bg-[#e5e0da] border border-[#24371b] px-12 py-10 flex flex-col">
          <h3 className="text-[22px] mb-5 text-[#24371b]">{title}</h3>
          <p className="text-[16px] mb-8 text-[#24371b]">
            Sample description text goes here.
          </p>
          <div className="flex justify-center">
            <div className="w-[260px] h-[260px] rounded-full bg-gray-300" />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* ================= SECTION 4 ================= */}
<section className="min-h-screen flex flex-col md:flex-row" data-aos="fade-up">
  <div className="w-full md:w-1/2 bg-gray-300" />

  <div className="w-full md:w-1/2 bg-[#c2bfca] flex flex-col px-8 md:px-20 pt-24">
    <h2 className="text-[36px] md:text-[56px] mb-10 text-[#24371b]">
      You don’t have to do this all alone.
    </h2>

    <ul className="list-disc pl-6 space-y-4 text-[18px] text-[#24371b] mb-16">
      <li>Persistent sadness</li>
      <li>Trouble focusing</li>
      <li>Relationship difficulty</li>
      <li>Constant exhaustion</li>
      <li>Feeling overwhelmed</li>
    </ul>

    <div className="mt-auto border-t border-[#24371b] -mx-8 md:-mx-20">
  <Link
    href="/contact"
    className="
      block
      w-full
      py-6
      text-center
      text-[13px]
      tracking-widest
      text-[#24371b]
      hover:bg-[#1b2a14]
      hover:text-white
      transition-colors
    "
  >
    GET IN TOUCH →
  </Link>
</div>

  </div>
</section>

{/* ================= SECTION 5 ================= */}
<section className="bg-[#e5e0da] min-h-screen flex items-center">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 px-8 md:px-20" data-aos="fade-up">
    <div className="pt-32">
      <h2 className="text-[40px] md:text-[56px] mb-10 text-[#24371b]">
        Hi, I’m Lilac.
      </h2>
      <p className="text-[18px] mb-14 max-w-md text-[#24371b]">
        I'm committed to providing a safe, supportive environment.
      </p>
      <Link href='/contact' className="border px-10 py-4 text-[13px] tracking-widest hover:bg-[#24371b] hover:text-white transition">
        LET'S CHAT →
      </Link>
    </div>

    <div className="relative flex justify-center md:justify-end">
      <div className="w-[320px] md:w-[420px] h-[520px] md:h-[620px] rounded-t-full bg-gray-300" />
      <div className="hidden md:block absolute bottom-[-40px] right-[-40px] w-[240px] h-[240px] rounded-full bg-gray-300" />
    </div>
  </div>
</section>

{/* ================= SECTION 6 (FAQ) ================= */}
<section className="bg-[#fbf7f1] py-28">
  <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-[48%_52%] gap-8 px-6 md:px-24" data-aos="fade-up">

    <div className="flex justify-center md:justify-end">
      <div className="w-[360px] md:w-[560px] h-[520px] md:h-[720px] rounded-[320px] bg-gray-300" />
    </div>

    <div>
      <h2 className="text-[36px] md:text-[46px] mb-16 text-[#24371b]">FAQs</h2>

      {[ "Do you take insurance?", "What are your rates?", "Do you have any openings?" ].map((q, i) => (
        <div key={i} className="border-b">
          <button onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-start gap-8 py-10 text-left">
            <span className="text-[30px]">{open === i ? "–" : "+"}</span>
            <span className="text-[22px] md:text-[28px]">{q}</span>
          </button>
          <div className={`overflow-hidden transition-all duration-700 ${open === i ? "max-h-40" : "max-h-0"}`}>
            <p className="pl-[64px] pb-10 text-[16px]">Answer goes here.</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* ================= SECTION 7 ================= */}
<section className="bg-[#e5e0da] py-20">
  <div className="max-w-4xl mx-auto px-6 text-[#24371b]" data-aos="fade-up">

    <h2 className="text-[44px] font-medium text-center mb-12">
      My Professional Background
    </h2>

    <div className="border-t border-[#24371b]/60">

      {/* Education */}
      <div className="border-b border-[#24371b]/60">
        <button
          onClick={() => setOpenBg(openBg === 0 ? null : 0)}
          className="w-full flex justify-between items-center py-6 text-left"
        >
          <span className="text-[24px]">Education</span>
          <span className="text-[24px]">{openBg === 0 ? "–" : "+"}</span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
            ${openBg === 0 ? "max-h-32 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <p className="pb-6 text-[15px] max-w-3xl">
            Education details go here.
          </p>
        </div>
      </div>

      {/* Licensure */}
      <div className="border-b border-[#24371b]/60">
        <button
          onClick={() => setOpenBg(openBg === 1 ? null : 1)}
          className="w-full flex justify-between items-center py-6 text-left"
        >
          <span className="text-[24px]">Licensure</span>
          <span className="text-[24px]">{openBg === 1 ? "–" : "+"}</span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
            ${openBg === 1 ? "max-h-32 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <p className="pb-6 text-[15px] max-w-3xl">
            Licensure details go here.
          </p>
        </div>
      </div>

      {/* Certifications */}
      <div className="border-b border-[#24371b]/60">
        <button
          onClick={() => setOpenBg(openBg === 2 ? null : 2)}
          className="w-full flex justify-between items-center py-6 text-left"
        >
          <span className="text-[24px]">Certifications</span>
          <span className="text-[24px]">{openBg === 2 ? "–" : "+"}</span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
            ${openBg === 2 ? "max-h-32 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <p className="pb-6 text-[15px] max-w-3xl">
            Certification details go here.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>


{/* ================= SECTION 8 ================= */}
<section className="bg-[#7c7a45] py-32 text-white">
  <div className="max-w-3xl mx-auto px-6 text-center " data-aos="fade-up">
    <h2 className="text-[32px] md:text-[44px] mb-6">Get started today.</h2>
    <p className="text-[16px] md:text-[17px] mb-14">
      Ready to take the first step toward a healthier you?
    </p>
    <Link href='/contact' className="border px-10 py-4 hover:bg-white hover:text-[#7c7a45] transition">
      GET IN TOUCH →
    </Link>
  </div>
</section>

    </main>
  );
}
