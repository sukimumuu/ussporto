"use client";

import React from "react";
import Image from "next/image";
import IndonesiaFlag from "@/public/images/indonesia.png";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaBlogger,
  FaGlobe,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCoffee,
  FaTools,
  FaBullhorn,
  FaQuoteLeft
} from "react-icons/fa";

export default function ClassifiedsSection() {
  return (
    <section id="iklan-baris" className="border-b-2 border-[#181615] pb-10 mb-8">
      {/* Section Header */}
      <div className="border-y-2 border-[#181615] py-2 mb-6 text-center">
        <span className="font-typewriter text-xs font-bold uppercase tracking-widest text-[#8b2621]">
          ❖ BAGIAN IV &bull; IKLAN BARIS, POJOK KELAKAR &amp; TELEGRAM ❖
        </span>
        <h2 className="font-headline text-3xl sm:text-4xl font-black text-[#181615] tracking-tight uppercase mt-1">
          Halaman Iklan Baris &amp; Layanan Cepat
        </h2>
        <p className="font-news italic text-sm sm:text-base text-[#4a453f] max-w-2xl mx-auto mt-1">
          Kolom pengumuman publik, penawaran jasa rekayasa perangkat lunak, serta telegram komunikasi resmi.
        </p>
      </div>

      {/* Retro Classifieds Box Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        {/* Classified Box 1: Services */}
        <div className="p-4 bg-[#fbf7ee] border-2 border-[#181615] shadow-retro flex flex-col justify-between">
          <div>
            <div className="border-b-2 border-[#181615] pb-1.5 mb-3 flex items-center justify-between">
              <h3 className="font-headline font-black text-base uppercase text-[#181615] flex items-center gap-1.5">
                <FaTools className="text-[#8b2621]" /> Jasa Rekayasa Sistem
              </h3>
              <span className="font-typewriter text-[10px] bg-[#181615] text-[#fbf7ee] px-1.5 py-0.5 font-bold">
                TERSEDIA
              </span>
            </div>

            <p className="font-news text-xs sm:text-sm text-[#292524] mb-3 leading-relaxed">
              Menerima penugasan dan kontrak kerja profesional untuk kebutuhan sistem:
            </p>

            <ul className="font-news text-xs sm:text-sm space-y-2 text-[#181615]">
              <li className="flex items-start gap-2 border-b border-[#181615]/20 pb-1.5">
                <span className="font-typewriter text-[#8b2621] font-bold">&bull;</span>
                <span><strong>Backend &amp; API Development:</strong> Perancangan sistem Laravel, database MySQL, dan integrasi webhook.</span>
              </li>
              <li className="flex items-start gap-2 border-b border-[#181615]/20 pb-1.5">
                <span className="font-typewriter text-[#8b2621] font-bold">&bull;</span>
                <span><strong>Figma to Clean Code:</strong> Transformasi desain antarmuka menjadi halaman web responsif dan interaktif.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-typewriter text-[#8b2621] font-bold">&bull;</span>
                <span><strong>Refactoring &amp; Bug Fixing:</strong> Pembersihan kode usang dan penanganan isu performa aplikasi.</span>
              </li>
            </ul>
          </div>

          <div className="mt-4 pt-2 border-t border-[#181615] text-center">
            <span className="font-typewriter text-[11px] text-[#4a453f]">
              TARIF: NEGOSIASI SESUAI SPESIFIKASI
            </span>
          </div>
        </div>

        {/* Classified Box 2: Wanted */}
        <div className="p-4 bg-[#ede4d1] border-2 border-[#181615] shadow-retro flex flex-col justify-between">
          <div>
            <div className="border-b-2 border-[#181615] pb-1.5 mb-3 flex items-center justify-between">
              <h3 className="font-headline font-black text-base uppercase text-[#181615] flex items-center gap-1.5">
                <FaBullhorn className="text-[#8b2621]" /> Dicari: Kolaborasi Baru
              </h3>
              <span className="stamp-tag text-[10px] font-bold">WANTED</span>
            </div>

            <div className="p-2 border border-dashed border-[#181615] bg-[#fbf7ee] mb-3">
              <p className="font-headline text-center font-bold text-sm uppercase text-[#8b2621]">
                KESEMPATAN KARIER &amp; PROYEK
              </p>
            </div>

            <p className="font-news text-xs sm:text-sm text-[#292524] leading-relaxed text-justify mb-3">
              <strong>DICARI:</strong> Tim rekayasa perangkat lunak, perusahaan teknologi, atau founder startup yang membutuhkan <strong>Backend Developer</strong> berdedikasi dan siap belajar cepat.
            </p>

            <div className="font-typewriter text-xs text-[#181615] space-y-1 bg-[#fbf7ee] p-2.5 border border-[#181615]/30">
              <p><strong>STATUS:</strong> Siap Mulai Segera</p>
              <p><strong>LOKASI:</strong> Remote / Hybrid Purwokerto</p>
              <p><strong>FOKUS:</strong> Web &amp; API Architecture</p>
            </div>
          </div>

          <div className="mt-4 pt-2 border-t border-[#181615] text-center">
            <a
              href="mailto:rizqybs.sp@gmail.com?subject=Tawaran%20Kolaborasi%20Proyek"
              className="inline-block w-full py-1.5 bg-[#8b2621] text-[#fbf7ee] font-typewriter text-xs uppercase font-bold hover:bg-[#6e1e1a] transition-colors"
            >
              Kirim Surat Tawaran &rarr;
            </a>
          </div>
        </div>

        {/* Classified Box 3: Humor & Tech Wisdom */}
        <div className="p-4 bg-[#fbf7ee] border-2 border-[#181615] shadow-retro flex flex-col justify-between">
          <div>
            <div className="border-b-2 border-[#181615] pb-1.5 mb-3 flex items-center justify-between">
              <h3 className="font-headline font-black text-base uppercase text-[#181615] flex items-center gap-1.5">
                <FaCoffee className="text-[#8b2621]" /> Pojok Redaksi &amp; Mutiara
              </h3>
              <span className="font-typewriter text-[10px] text-[#4a453f]">KOLOM LEPAS</span>
            </div>

            {/* Tech Quote */}
            <div className="p-3 bg-[#ede4d1]/70 border border-[#181615] mb-3">
              <FaQuoteLeft className="text-[#8b2621] text-sm mb-1 opacity-70" />
              <p className="font-headline italic text-xs sm:text-sm text-[#181615] leading-snug">
                &ldquo;First, solve the problem. Then, write the code.&rdquo;
              </p>
              <p className="font-typewriter text-[10px] text-[#4a453f] text-right mt-1">
                &mdash; John Johnson
              </p>
            </div>

            {/* Programmer Classified Humor */}
            <div className="p-2.5 border border-[#181615]/40 text-xs font-news leading-relaxed text-[#292524]">
              <strong className="font-headline block mb-0.5 text-[#181615]">BERITA KEHILANGAN:</strong>
              &ldquo;Telah hilang: 2 jam berharga karena lupa tanda titik koma (;) dan perbedaan huruf kapital pada baris 142. Ditemukan setelah kopi cangkir kedua. Sistem kembali damai.&rdquo;
            </div>
          </div>

          <div className="mt-4 pt-2 border-t border-[#181615] text-center font-typewriter text-[10px] text-[#4a453f]">
            DISIARKAN OLEH DIVISI HUMOR SUKIMUMUU
          </div>
        </div>
      </div>

      {/* Western Union Style Telegram & Dispatch Box */}
      <div id="kontak" className="p-5 sm:p-6 bg-[#fbf7ee] border-4 border-[#181615] shadow-retro-lg">
        {/* Telegram Header */}
        <div className="border-b-2 border-[#181615] pb-3 mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="flex items-center gap-2 text-xs font-typewriter font-bold text-[#8b2621] uppercase">
              <span>★ BIRO POS &amp; TELEGRAF DIGITAL ★</span>
            </div>
            <h3 className="font-headline font-black text-2xl sm:text-3xl text-[#181615] uppercase tracking-tight">
              Kawat Telegram &amp; Kontak Komunikasi
            </h3>
          </div>
          <div className="text-left sm:text-right font-typewriter text-xs text-[#4a453f]">
            <span className="stamp-tag text-xs font-bold">KODE: RBS-ID-PURWOKERTO</span>
            <p className="text-[11px] mt-1">Status Saluran: TERBUKA 24/7</p>
          </div>
        </div>

        {/* Telegram Dispatches Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-5">
          {/* Email */}
          <a
            href="mailto:rizqybs.sp@gmail.com"
            className="p-3 border-2 border-[#181615] bg-[#ede4d1] hover:bg-[#181615] hover:text-[#fbf7ee] transition-all group shadow-retro-sm block"
          >
            <div className="flex items-center gap-2 mb-1 text-xs font-typewriter font-bold uppercase text-[#8b2621] group-hover:text-amber-300">
              <FaEnvelope />
              <span>Surat Elektronik (Email)</span>
            </div>
            <p className="font-typewriter text-xs font-bold text-[#181615] group-hover:text-white truncate">
              rizqybs.sp@gmail.com
            </p>
            <span className="font-news italic text-[11px] text-[#4a453f] group-hover:text-neutral-300 block mt-1">
              Kirim surat langsung &rarr;
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/rizqybs24"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border-2 border-[#181615] bg-[#ede4d1] hover:bg-[#181615] hover:text-[#fbf7ee] transition-all group shadow-retro-sm block"
          >
            <div className="flex items-center gap-2 mb-1 text-xs font-typewriter font-bold uppercase text-[#8b2621] group-hover:text-amber-300">
              <FaLinkedin />
              <span>Jejaring LinkedIn</span>
            </div>
            <p className="font-typewriter text-xs font-bold text-[#181615] group-hover:text-white truncate">
              linkedin.com/in/rizqybs24
            </p>
            <span className="font-news italic text-[11px] text-[#4a453f] group-hover:text-neutral-300 block mt-1">
              Terhubung profesional &rarr;
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/sukimumuu"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border-2 border-[#181615] bg-[#ede4d1] hover:bg-[#181615] hover:text-[#fbf7ee] transition-all group shadow-retro-sm block"
          >
            <div className="flex items-center gap-2 mb-1 text-xs font-typewriter font-bold uppercase text-[#8b2621] group-hover:text-amber-300">
              <FaGithub />
              <span>Repositori GitHub</span>
            </div>
            <p className="font-typewriter text-xs font-bold text-[#181615] group-hover:text-white truncate">
              github.com/sukimumuu
            </p>
            <span className="font-news italic text-[11px] text-[#4a453f] group-hover:text-neutral-300 block mt-1">
              Inspeksi repositori kode &rarr;
            </span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/rizqybs24/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border-2 border-[#181615] bg-[#ede4d1] hover:bg-[#181615] hover:text-[#fbf7ee] transition-all group shadow-retro-sm block"
          >
            <div className="flex items-center gap-2 mb-1 text-xs font-typewriter font-bold uppercase text-[#8b2621] group-hover:text-amber-300">
              <FaInstagram />
              <span>Instagram Pribadi</span>
            </div>
            <p className="font-typewriter text-xs font-bold text-[#181615] group-hover:text-white truncate">
              @rizqybs24
            </p>
            <span className="font-news italic text-[11px] text-[#4a453f] group-hover:text-neutral-300 block mt-1">
              Ikuti kabar harian &rarr;
            </span>
          </a>

          {/* Blog */}
          <a
            href="https://pausberbuluu.blogspot.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border-2 border-[#181615] bg-[#ede4d1] hover:bg-[#181615] hover:text-[#fbf7ee] transition-all group shadow-retro-sm block"
          >
            <div className="flex items-center gap-2 mb-1 text-xs font-typewriter font-bold uppercase text-[#8b2621] group-hover:text-amber-300">
              <FaBlogger />
              <span>Blog Catatan Lepas</span>
            </div>
            <p className="font-typewriter text-xs font-bold text-[#181615] group-hover:text-white truncate">
              pausberbuluu.blogspot.com
            </p>
            <span className="font-news italic text-[11px] text-[#4a453f] group-hover:text-neutral-300 block mt-1">
              Baca tulisan opini &rarr;
            </span>
          </a>

          {/* Official Portfolio */}
          <a
            href="https://ussporto.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border-2 border-[#181615] bg-[#ede4d1] hover:bg-[#181615] hover:text-[#fbf7ee] transition-all group shadow-retro-sm block"
          >
            <div className="flex items-center gap-2 mb-1 text-xs font-typewriter font-bold uppercase text-[#8b2621] group-hover:text-amber-300">
              <FaGlobe />
              <span>Domain Portofolio</span>
            </div>
            <p className="font-typewriter text-xs font-bold text-[#181615] group-hover:text-white truncate">
              ussporto.vercel.app
            </p>
            <span className="font-news italic text-[11px] text-[#4a453f] group-hover:text-neutral-300 block mt-1">
              Akses daring resmi &rarr;
            </span>
          </a>

          {/* Location */}
          <div className="p-3 border-2 border-[#181615] bg-[#ede4d1] shadow-retro-sm sm:col-span-2">
            <div className="flex items-center gap-2 mb-1 text-xs font-typewriter font-bold uppercase text-[#8b2621]">
              <FaMapMarkerAlt />
              <span>Basis Wilayah / Domisili</span>
            </div>
            <p className="font-typewriter text-xs font-bold text-[#181615] flex items-center gap-1.5">
              <Image src={IndonesiaFlag} alt="Indonesia" className="w-4 h-auto inline" />
              Purwokerto, Banyumas, Jawa Tengah, Indonesia (WIB / UTC+7)
            </p>
            <span className="font-news italic text-[11px] text-[#4a453f] block mt-1">
              Terbuka untuk relokasi, penugasan remote, maupun perjalanan dinas proyek.
            </span>
          </div>
        </div>

        {/* Telegram Direct Action Button */}
        <div className="border-t-2 border-[#181615] pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="font-news italic text-sm text-[#4a453f]">
            &ldquo;Kirimkan pesan kawat telegram Anda &mdash; pesan akan dijawab dalam kurun waktu 1x24 jam kerja.&rdquo;
          </p>
          <a
            href="mailto:rizqybs.sp@gmail.com?subject=Undangan%20Kerjasama%20dari%20Koran%20Sukimumuu&body=Halo%20Rizqy%2C%0A%0ASaya%20tertarik%20dengan%20portofolio%20dan%20pengalaman%20Anda..."
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#8b2621] text-[#fbf7ee] font-typewriter text-xs uppercase font-bold tracking-wider hover:bg-[#6e1e1a] transition-colors shadow-retro cursor-pointer whitespace-nowrap"
          >
            <FaPaperPlane />
            <span>Kirim Pesan Langsung (Mailto)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
