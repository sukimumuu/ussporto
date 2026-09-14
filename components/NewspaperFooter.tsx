"use client";

import React from "react";
import { FaArrowUp, FaNewspaper, FaHeart } from "react-icons/fa";

export default function NewspaperFooter() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="pt-6 pb-12 border-t-4 border-[#181615] text-[#181615]">
      {/* Decorative Fleuron Bar */}
      <div className="ornament-rule text-[#8b2621] text-sm tracking-widest font-typewriter mb-6">
        <span>❖ ❖ ❖</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 text-xs font-news leading-relaxed">
        {/* Colophon Left */}
        <div className="border-b md:border-b-0 md:border-r border-[#181615]/30 pb-4 md:pb-0 md:pr-4">
          <h5 className="font-headline font-bold text-sm uppercase tracking-wider text-[#181615] mb-2 flex items-center gap-1.5">
            <FaNewspaper className="text-[#8b2621]" /> Kolofon Percetakan Digital
          </h5>
          <p className="text-[#4a453f] text-justify">
            Surat kabar digital ini disusun menggunakan tipografi editorial klasik yang terinspirasi dari era keemasan media cetak abad ke-20. Ditenagai oleh Next.js 16, Tailwind CSS, dan komponen React modern.
          </p>
        </div>

        {/* Redaksi Center */}
        <div className="border-b md:border-b-0 md:border-r border-[#181615]/30 pb-4 md:pb-0 md:px-4 text-center flex flex-col justify-center">
          <span className="font-typewriter text-[11px] font-bold text-[#8b2621] uppercase">
            REDAKSI PELAKSANA
          </span>
          <h4 className="font-headline font-black text-lg text-[#181615] uppercase mt-1">
            Rizqy Bagus Saputra
          </h4>
          <p className="font-typewriter text-[11px] text-[#4a453f] mt-1">
            Purwokerto, Jawa Tengah &bull; Indonesia
          </p>
          <p className="font-typewriter text-[10px] text-[#8b2621] mt-1 font-bold">
            HANDLE: @SUKIMUMUU
          </p>
        </div>

        {/* Back to top & navigation right */}
        <div className="flex flex-col justify-between items-start md:items-end md:pl-4">
          <div>
            <h5 className="font-headline font-bold text-sm uppercase tracking-wider text-[#181615] mb-2">
              Navigasi Cepat
            </h5>
            <div className="flex flex-wrap gap-2 text-xs font-typewriter">
              <a href="#headline" className="underline hover:text-[#8b2621]">
                Halaman Depan
              </a>
              <span>&bull;</span>
              <a href="#proyek" className="underline hover:text-[#8b2621]">
                Arsip Proyek
              </a>
              <span>&bull;</span>
              <a href="#pengalaman" className="underline hover:text-[#8b2621]">
                Hugo Studio
              </a>
              <span>&bull;</span>
              <a href="#iklan-baris" className="underline hover:text-[#8b2621]">
                Iklan Baris
              </a>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 border-2 border-[#181615] bg-[#ede4d1] hover:bg-[#181615] hover:text-[#fbf7ee] transition-colors text-xs font-typewriter uppercase font-bold cursor-pointer shadow-retro-sm no-print"
          >
            <FaArrowUp />
            <span>Kembali ke Atas Koran</span>
          </button>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-[#181615] pt-4 text-center text-xs font-typewriter text-[#4a453f] flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>
          &copy; {new Date().getFullYear()} <strong>The Sukimumuu Chronicle</strong>. Seluruh hak cipta dilindungi.
        </p>
        <p className="flex items-center gap-1">
          Dibuat dengan dedikasi rekayasa perangkat lunak &bull; Purwokerto
        </p>
      </div>
    </footer>
  );
}
