"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isContact = pathname === "/contact";
  const isBlog = pathname?.startsWith("/blog");

  return (
    <header
      className={`${isContact ? "bg-[#c2bfca]"  : "bg-[#fbf7f1]"
        } transition-colors duration-300`}
    >
      <nav className="max-w-[1600px] mx-auto px-10 py-6 flex items-center justify-between">

        <Link href="/" className="text-[28px] font-medium text-[#24371b]">
          Lilac Template
        </Link>

        <div className="flex gap-12 text-[18px] text-[#24371b]">
          <Link href="/blog" className="hover:underline">Blog</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>

      </nav>
    </header>
  );
}
