"use client";

import React from "react";
import Image from "next/image";
import RizqyPhoto from "@/public/images/rizqybagus.webp";
import IndonesiaFlag from "@/public/images/indonesia.png";
import HugoLogo from "@/public/images/hugo.png";
import { FaGraduationCap, FaBriefcase, FaEnvelope, FaExternalLinkAlt, FaMapMarkerAlt, FaCode } from "react-icons/fa";
import { SiLaravel, SiNextdotjs, SiTypescript, SiMysql, SiUnity, SiTailwindcss } from "react-icons/si";

export default function FrontPageHeadline() {
  return (
    <section id="headline" className="border-b-2 border-[#181615] pb-8 mb-8">
      {/* Front-Page Main Headline Banner */}
      <div className="text-center max-w-4xl mx-auto mb-6">
        <div className="inline-flex items-center gap-2 text-xs font-typewriter uppercase tracking-widest text-[#8b2621] font-bold mb-1">
          <span>❖ LAPORAN KHUSUS UTAMA ❖</span>
        </div>
        <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#181615] tracking-tight leading-[1.08] uppercase">
          Insinyur Muda Asal Purwokerto Gencar Ciptakan Sistem Web &amp; Backend Tangguh
        </h2>
        <p className="font-news italic text-base sm:text-lg md:text-xl text-[#4a453f] mt-3 max-w-3xl mx-auto leading-relaxed">
          &ldquo;Rizqy Bagus Saputra mencatatkan rekam jejak pengembangan sistem presensi berbasis QR, lumbung data desa, hingga ekosistem penjualan digital yang efisien.&rdquo;
        </p>
      </div>

      {/* Broadsheet 3-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left / Lead Column: Story & Bio (7 cols on lg) */}
        <div className="lg:col-span-7 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#181615] pb-6 lg:pb-0 lg:pr-6">
          <div className="flex items-center justify-between text-xs font-typewriter text-[#4a453f] border-b border-[#181615]/40 pb-1 mb-3">
            <span>DISPATCH: PURWOKERTO DESK</span>
            <span>OLEH: REDAKSI TEKNOLOGI</span>
          </div>

          <div className="prose max-w-none text-[#181615] text-justify">
            <p className="drop-cap font-news text-base sm:text-lg leading-relaxed mb-3">
              Halo, saya <strong>Rizqy Bagus Saputra</strong>, seorang tech enthusiast dengan dedikasi tinggi pada dunia pemrograman dan rekayasa perangkat lunak. 
              Menyelesaikan pendidikan di <strong>SMK N 1 Purwokerto</strong> jurusan Rekayasa Perangkat Lunak, dan saat ini melanjutkan studi jenjang Sistem Informasi 
              di <strong>Universitas Bina Sarana Informatika</strong>. Bagi saya, menulis kode bukan sekadar merangkai sintaks, melainkan seni memecahkan permasalahan nyata, membangun infrastruktur yang kokoh, dan menghadirkan solusi bermanfaat bagi masyarakat luas.
            </p>

            <p className="font-news text-base leading-relaxed mb-4 text-[#292524]">
              Dalam perjalanan kariernya, Rizqy berfokus pada <em>backend web application development</em>, integrasi RESTful API, perancangan basis data relasional, serta mentransformasikan rancangan visual antarmuka (Figma) menjadi web yang responsif, berkecepatan tinggi, dan mudah diakses.
            </p>
          </div>

          {/* Key Milestones / Press Dispatch */}
          <div className="mt-4 pt-4 border-t border-[#181615]/30">
            <h4 className="font-headline font-bold text-sm tracking-wider uppercase text-[#181615] flex items-center gap-2 mb-2">
              <FaBriefcase className="text-[#8b2621]" /> Rekam Jejak Industri Terkini
            </h4>
            
            <div className="p-3.5 bg-[#ede4d1]/70 border border-[#181615] shadow-retro-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 relative flex-shrink-0 bg-white border border-[#181615] p-1 rounded-sm">
                    <Image src={HugoLogo} alt="Hugo Studio Logo" className="object-contain w-full h-full" />
                  </div>
                  <div>
                    <h5 className="font-headline font-bold text-base text-[#181615] leading-tight">
                      Hugo Studio
                    </h5>
                    <p className="font-typewriter text-xs text-[#8b2621] font-semibold">
                      Backend Developer
                    </p>
                  </div>
                </div>
                <div className="text-left sm:text-right font-typewriter text-xs text-[#4a453f]">
                  <span className="stamp-tag-muted">JUNI 2024 &ndash; APRIL 2025</span>
                </div>
              </div>
              <p className="font-news text-xs sm:text-sm text-[#292524] mt-2.5 leading-snug">
                Bertanggung jawab merancang arsitektur backend, API kustom, dan pengelolaan logika bisnis untuk produk unggulan seperti aplikasi penjualan <strong>Melesat</strong> dan sistem <strong>Presensi Absensi</strong> berbasis QR &amp; validasi lokasi.
              </p>
            </div>
          </div>

          {/* Quick Telegram Action Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-3 no-print">
            <a
              href="mailto:rizqybs.sp@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#181615] text-[#fbf7ee] font-typewriter text-xs uppercase font-bold tracking-wider hover:bg-[#8b2621] transition-colors shadow-retro-sm"
            >
              <FaEnvelope /> Kirim Tawaran Kerja / Hire Me
            </a>
            <a
              href="#proyek"
              className="inline-flex items-center gap-2 px-4 py-2 border-2 border-[#181615] text-[#181615] font-typewriter text-xs uppercase font-bold tracking-wider hover:bg-[#181615] hover:text-[#fbf7ee] transition-colors"
            >
              Telusuri Arsip Proyek &darr;
            </a>
          </div>
        </div>

        {/* Right / Visual & Bulletin Column (5 cols on lg) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Framed Vintage Portrait */}
          <div className="p-3 bg-[#fbf7ee] border-2 border-[#181615] shadow-retro">
            <div className="relative border border-[#181615] overflow-hidden bg-[#eae3d2]">
              <Image
                src={RizqyPhoto}
                alt="Potret Rizqy Bagus Saputra"
                className="w-full h-72 sm:h-80 object-cover object-top news-photo"
                priority
              />
              <div className="absolute top-2 right-2">
                <span className="stamp-tag text-[10px]">VERIFIED ENGINEER</span>
              </div>
            </div>
            {/* Caption */}
            <div className="mt-2.5 px-1">
              <p className="font-headline italic text-xs text-[#292524] leading-relaxed">
                <strong>Gbr 1.1:</strong> Rizqy Bagus Saputra, pengembang perangkat lunak berlatar belakang rekayasa backend saat mendokumentasikan kode kerja.
              </p>
              <div className="flex items-center justify-between text-[10px] font-typewriter text-[#4a453f] border-t border-[#181615]/30 pt-1.5 mt-2">
                <span className="flex items-center gap-1">
                  <Image src={IndonesiaFlag} alt="Indonesia" className="w-3.5 h-auto inline" />
                  Purwokerto, ID
                </span>
                <span>FOTO ARSIP PRIBADI &bull; 2026</span>
              </div>
            </div>
          </div>

          {/* Quick Facts & Tech Arsenal Box */}
          <div className="border-2 border-[#181615] p-4 bg-[#fbf7ee]">
            <div className="border-b border-[#181615] pb-1.5 mb-3 flex items-center justify-between">
              <h4 className="font-headline font-black text-sm uppercase tracking-wider text-[#181615] flex items-center gap-1.5">
                <FaCode className="text-[#8b2621]" /> Mesin &amp; Arsenal Teknologi
              </h4>
              <span className="font-typewriter text-[10px] text-[#8b2621] font-bold">EDISI V2</span>
            </div>

            <p className="font-news text-xs text-[#4a453f] mb-3">
              Perangkat kerja dan pustaka pilihan untuk meracik sistem berkinerja tinggi:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-typewriter">
              <div className="flex items-center gap-1.5 p-1.5 border border-[#181615]/30 bg-[#ede4d1]/50">
                <SiLaravel className="text-red-700 text-sm flex-shrink-0" />
                <span className="font-bold truncate">Laravel</span>
              </div>
              <div className="flex items-center gap-1.5 p-1.5 border border-[#181615]/30 bg-[#ede4d1]/50">
                <SiMysql className="text-blue-800 text-sm flex-shrink-0" />
                <span className="font-bold truncate">MySQL</span>
              </div>
              <div className="flex items-center gap-1.5 p-1.5 border border-[#181615]/30 bg-[#ede4d1]/50">
                <SiNextdotjs className="text-black text-sm flex-shrink-0" />
                <span className="font-bold truncate">Next.js</span>
              </div>
              <div className="flex items-center gap-1.5 p-1.5 border border-[#181615]/30 bg-[#ede4d1]/50">
                <SiTypescript className="text-blue-600 text-sm flex-shrink-0" />
                <span className="font-bold truncate">TypeScript</span>
              </div>
              <div className="flex items-center gap-1.5 p-1.5 border border-[#181615]/30 bg-[#ede4d1]/50">
                <SiTailwindcss className="text-cyan-700 text-sm flex-shrink-0" />
                <span className="font-bold truncate">Tailwind</span>
              </div>
              <div className="flex items-center gap-1.5 p-1.5 border border-[#181615]/30 bg-[#ede4d1]/50">
                <SiUnity className="text-neutral-800 text-sm flex-shrink-0" />
                <span className="font-bold truncate">Unity C#</span>
              </div>
            </div>

            {/* Quick Education Dispatches */}
            <div className="mt-3 pt-3 border-t border-[#181615]/30 text-xs font-news">
              <div className="flex items-start gap-2 mb-1.5">
                <FaGraduationCap className="text-[#8b2621] mt-0.5 flex-shrink-0" />
                <span className="text-[#181615] leading-snug">
                  <strong>Univ. Bina Sarana Informatika</strong> &mdash; Sistem Informasi (S1 Aktif)
                </span>
              </div>
              <div className="flex items-start gap-2">
                <FaGraduationCap className="text-[#4a453f] mt-0.5 flex-shrink-0" />
                <span className="text-[#4a453f] leading-snug">
                  <strong>SMK Negeri 1 Purwokerto</strong> &mdash; Rekayasa Perangkat Lunak (Alumni)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
