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
      {/* ================= MAIN FOOTER ================= */}
      <div className="bg-[var(--color-secondary)]" data-aos="fade-up">
        <div
          className="max-w-[1600px] mx-auto
                 px-28 py-32
                 flex justify-between items-start
                 text-[var(--color-primary)]"
        >
          {/* LEFT */}
          <div className="max-w-sm">
            <h2 className="text-[40px] font-medium mb-10">
              Dr. Maya Reynolds, PsyD
            </h2>

            <p className="text-[16px] leading-7 mb-10">
              Private practice in <br />
              Santa Monica, CA
            </p>

            <a
              href="mailto:email@example.com"
              className="block underline mb-2 hover:text-[var(--color-accent)] transition-colors"
            >
              email@example.com
            </a>
            <a
              href="tel:5555555555"
              className="block underline hover:text-[var(--color-accent)] transition-colors"
            >
              (555) 555-5555
            </a>
          </div>

          {/* CENTER */}
          <div>
            <h3 className="text-[28px] font-medium mb-8">
              Hours
            </h3>
            <p className="mb-2">Monday – Friday</p>
            <p>10am – 6pm</p>
          </div>

          {/* RIGHT */}
          <div className="text-right">
            <h3 className="text-[28px] font-medium mb-8">
              Find
            </h3>

            <ul className="space-y-4 underline">
              <li>
                <Link
                  href="/"
                  className="hover:text-[var(--color-accent)] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[var(--color-accent)] transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-[var(--color-accent)] transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM FOOTER ================= */}
      <div
        className="bg-[var(--color-primary)] py-14 text-[var(--color-secondary)]"
        data-aos="fade-up"
      >
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
            All Rights Reserved © 2026 Dr. Maya Reynolds, PsyD.
          </p>
        </div>
      </div>
    </footer>
  );
}
