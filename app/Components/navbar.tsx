"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isContact = pathname === "/contact";
  const isBlog = pathname?.startsWith("/blog");

  return (
    <header
      className={`${
        isContact ? "bg-[var(--color-muted)]" : "bg-[var(--color-secondary)]"
      } transition-colors duration-300`}
    >
      <nav className="max-w-[1600px] mx-auto px-10 py-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-[28px] font-medium text-[var(--color-primary)]"
        >
          Dr. Maya Reynolds
        </Link>

        <div className="flex gap-12 text-[18px] text-[var(--color-primary)]">
          <Link
            href="/blog"
            className="hover:underline hover:decoration-[var(--color-accent)] decoration-2 underline-offset-4"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="hover:underline hover:decoration-[var(--color-accent)] decoration-2 underline-offset-4"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
