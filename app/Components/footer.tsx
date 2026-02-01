"use client";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function Footer() {
    useEffect(() => {
      AOS.init({
        duration: 800,
        easing: "ease-out",
        once: true,
      });
    }, []);
    
  return (
    <footer className="w-full">

      {/* MAIN FOOTER */}
      <div className="bg-[#fbf7f1] " data-aos="fade-up">
        <div
          className="max-w-[1600px] mx-auto
                 px-28 py-32
                 flex justify-between items-start text-[#24371b]"
        >
          {/* LEFT */}
          <div className="max-w-sm">
            <h2 className="text-[40px] font-medium mb-10 text-[#1f3b1b]">
              Lilac Template
            </h2>

            <p className="text-[16px] leading-7 mb-10">
              123 Example Road <br />
              Minneapolis, MN
            </p>

            <a href="mailto:email@example.com" className="block underline mb-2 hover:text-[#1f3b1b]/60 transition-colors">email@example.com</a>
            <a href="tel:5555555555" className="block underline hover:text-[#1f3b1b]/60 transition-colors">(555) 555-5555</a>
          </div>

          {/* CENTER */}
          <div>
            <h3 className="text-[28px] font-medium mb-8 text-[#1f3b1b]">
              Hours
            </h3>
            <p className="mb-2">Monday – Friday</p>
            <p>10am – 6pm</p>
          </div>

          {/* RIGHT */}
          <div className="text-right">
            <h3 className="text-[28px] font-medium mb-8 text-[#1f3b1b]">
              Find
            </h3>

            <ul className="space-y-4 underline">
              <li><Link href="/" className="hover:text-[#1f3b1b]/60 transition-colors">Home</Link></li>
              <li><Link href="/contact" className="hover:text-[#1f3b1b]/60 transition-colors">Contact</Link></li>
              <li><Link href="/blog" className="hover:text-[#1f3b1b]/60 transition-colors">Blog</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="bg-[#e9e5df] py-14" data-aos="fade-up">
        <div className="max-w-[1600px] mx-auto px-28 text-center">
          <div className="flex justify-center gap-8 mb-6 underline text-[15px]">
            <span>Privacy & Cookies Policy</span>
            <span>Good Faith Estimate</span>
            <span>Website Terms & Conditions</span>
            <span>Disclaimer</span>
          </div>

          <p className="mb-6 text-[15px]">
            Website Template Credits:{" "}
            <span className="underline">Go Bloom Creative</span>
          </p>

          <p className="text-[14px]">
            All Rights Reserved © 2024 Your Business Name Here, LLC.
          </p>
        </div>
      </div>

    </footer>

  );
}
