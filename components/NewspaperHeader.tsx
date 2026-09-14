"use client";

import React, { useEffect, useState } from "react";
import { FaPrint, FaPaperPlane, FaCode, FaCloudSun } from "react-icons/fa";

export default function NewspaperHeader() {
  const [currentDate, setCurrentDate] = useState<string>("SENIN, 14 SEPTEMBER 2026");

  useEffect(() => {
    try {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const formatted = now.toLocaleDateString("id-ID", options).toUpperCase();
      if (formatted) setCurrentDate(formatted);
    } catch {
      // fallback
    }
  }, []);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <header className="w-full border-b-2 border-[#181615] pb-2 mb-6">
      {/* Top Ticker & Utility Bar */}
      <div className="border-b border-[#181615] pb-1 mb-2 flex flex-wrap items-center justify-between text-xs font-typewriter tracking-tight gap-2">
        <div className="flex items-center gap-3">
          <span className="font-bold border-r border-[#181615] pr-3">VOL. XXIV ... NO. 142</span>
          <span>{currentDate}</span>
          <span className="hidden sm:inline border-l border-[#181615] pl-3">PURWOKERTO, INDONESIA</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden md:flex items-center gap-1.5 text-[#4a453f]">
            <FaCloudSun className="text-amber-700" /> 28°C CERAH • LATENSI API: &lt;15ms
          </span>
          <span className="hidden lg:flex items-center gap-1 text-[#4a453f]">
            <FaCode className="text-[#8b2621]" /> BUILD: PASSING
          </span>
          <div className="flex items-center gap-2 no-print">
            <button
              onClick={handlePrint}
              title="Cetak Halaman Koran"
              className="inline-flex items-center gap-1.5 px-2 py-0.5 border border-[#181615] hover:bg-[#181615] hover:text-[#fbf7ee] transition-colors cursor-pointer text-xs uppercase font-bold"
            >
              <FaPrint />
              <span className="hidden sm:inline">Cetak Koran</span>
            </button>
            <a
              href="mailto:rizqybs.sp@gmail.com"
              className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#8b2621] text-[#fbf7ee] border border-[#8b2621] hover:bg-[#6e1e1a] transition-colors text-xs uppercase font-bold"
            >
              <FaPaperPlane />
              <span>Kirim Telegram</span>
            </a>
          </div>
        </div>
      </div>

      {/* The Broadsheet Nameplate / Masthead */}
      <div className="py-3 text-center relative border-y-2 border-[#181615] my-1">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-3">
          {/* Left Ear Notice */}
          <div className="hidden md:flex md:col-span-3 flex-col justify-center text-left border-r border-[#181615] pr-4 h-full">
            <span className="font-typewriter text-[10px] font-bold tracking-wider text-[#8b2621] uppercase">
              ★ EDISI KHUSUS PORTOFOLIO ★
            </span>
            <p className="text-xs font-news italic text-[#4a453f] leading-snug mt-1">
              &ldquo;Mendedikasikan diri pada kode bersih, arsitektur backend kokoh, dan solusi digital yang berdampak nyata.&rdquo;
            </p>
            <span className="text-[10px] font-typewriter mt-1 text-[#181615] font-semibold">
              KOLABORASI / FULL-TIME READY
            </span>
          </div>

          {/* Central Newspaper Masthead Title */}
          <div className="col-span-1 md:col-span-6 px-2">
            <div className="flex items-center justify-center gap-2 text-[#8b2621] text-xs tracking-widest uppercase font-typewriter mb-1">
              <span>✦</span>
              <span>WARTA REKAYASA & DIGITAL TERPERCAYA</span>
              <span>✦</span>
            </div>
            <h1 className="font-masthead text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#181615] leading-none uppercase select-none">
              The Sukimumuu Chronicle
            </h1>
            <p className="font-headline italic text-sm sm:text-base text-[#4a453f] mt-1.5 tracking-wide">
              Catatan Resmi Rekayasa Perangkat Lunak & Portofolio Rizqy Bagus Saputra
            </p>
          </div>

          {/* Right Ear Notice */}
          <div className="hidden md:flex md:col-span-3 flex-col justify-center text-right border-l border-[#181615] pl-4 h-full">
            <span className="font-typewriter text-[10px] font-bold tracking-wider uppercase text-[#181615]">
              TARIF BERLANGGANAN:
            </span>
            <p className="text-sm font-headline font-bold text-[#8b2621] leading-tight">
              GRATIS & TERBUKA
            </p>
            <p className="text-[11px] font-news text-[#4a453f] leading-snug mt-0.5">
              Siap direkrut untuk posisi Backend Developer & Web Engineering.
            </p>
            <span className="text-[10px] font-typewriter mt-1 text-[#4a453f]">
              PURWOKERTO &bull; JAWA TENGAH
            </span>
          </div>
        </div>
      </div>

      {/* Decorative Bar & Edition Details */}
      <div className="flex flex-wrap items-center justify-between text-[11px] font-typewriter uppercase tracking-wider py-1 border-b border-[#181615] text-[#4a453f]">
        <span>EDISI SORE PURWOKERTO</span>
        <span className="hidden sm:inline">HALAMAN UTAMA: REKAYASA WEB & ARSIP PROYEK</span>
        <span>NO. INDEKS: RBS-2026-PORT</span>
      </div>

      {/* Newspaper Section Navigation Bar */}
      <nav className="border-b-4 border-[#181615] py-1.5 mt-1 no-print">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-headline font-bold uppercase tracking-wider text-[#181615]">
          <li>
            <a href="#headline" className="hover:text-[#8b2621] hover:underline transition-colors">
              I. Berita Utama
            </a>
          </li>
          <span className="text-[#8b2621] hidden sm:inline">&bull;</span>
          <li>
            <a href="#proyek" className="hover:text-[#8b2621] hover:underline transition-colors">
              II. Arsip Proyek (@data)
            </a>
          </li>
          <span className="text-[#8b2621] hidden sm:inline">&bull;</span>
          <li>
            <a href="#pengalaman" className="hover:text-[#8b2621] hover:underline transition-colors">
              III. Laporan Industri (Hugo Studio)
            </a>
          </li>
          <span className="text-[#8b2621] hidden sm:inline">&bull;</span>
          <li>
            <a href="#iklan-baris" className="hover:text-[#8b2621] hover:underline transition-colors">
              IV. Iklan Baris & Jasa
            </a>
          </li>
          <span className="text-[#8b2621] hidden sm:inline">&bull;</span>
          <li>
            <a href="#kontak" className="hover:text-[#8b2621] hover:underline transition-colors">
              V. Telegram Redaksi
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
