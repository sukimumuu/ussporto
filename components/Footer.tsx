"use client";

import React from "react";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="py-10 text-xs text-zinc-500">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-zinc-200">
        <div>
          <span className="font-semibold text-zinc-900">
            Rizqy Bagus Saputra
          </span>
          <p className="text-zinc-500 mt-0.5">
            Backend Developer &amp; Web Engineer · Purwokerto, Indonesia
          </p>
        </div>

        {/* Quick Nav */}
        <div className="flex items-center gap-4">
          <a href="#about" className="hover:text-zinc-900 transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-zinc-900 transition-colors">
            Projects
          </a>
          <a href="#experience" className="hover:text-zinc-900 transition-colors">
            Experience
          </a>
          <a href="#contact" className="hover:text-zinc-900 transition-colors">
            Contact
          </a>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 transition-colors cursor-pointer no-print"
        >
          <FaArrowUp className="text-[10px]" />
          <span>Back to Top</span>
        </button>
      </div>

      <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-zinc-400 text-[11px]">
        <p>
          &copy; {new Date().getFullYear()} Rizqy Bagus Saputra. All rights reserved.
        </p>
        <p>
          Built with Next.js, Tailwind CSS, and TypeScript.
        </p>
      </div>
    </footer>
  );
}
