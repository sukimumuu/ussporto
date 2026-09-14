"use client";

import React from "react";
import Image from "next/image";
import HugoLogo from "@/public/images/hugo.png";
import IndonesiaFlag from "@/public/images/indonesia.png";
import { FaCheckCircle, FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCodeBranch, FaExternalLinkAlt } from "react-icons/fa";

export default function WorkExperienceSection() {
  return (
    <section id="pengalaman" className="border-b-2 border-[#181615] pb-10 mb-8">
      {/* Section Header */}
      <div className="border-y-2 border-[#181615] py-2 mb-6 text-center">
        <span className="font-typewriter text-xs font-bold uppercase tracking-widest text-[#8b2621]">
          ❖ BAGIAN III &bull; LEMBAR WARTA INDUSTRI &amp; KARIER ❖
        </span>
        <h2 className="font-headline text-3xl sm:text-4xl font-black text-[#181615] tracking-tight uppercase mt-1">
          Laporan Khusus Pengalaman Profesional
        </h2>
        <p className="font-news italic text-sm sm:text-base text-[#4a453f] max-w-2xl mx-auto mt-1">
          Dokumentasi perjalanan teknis di dunia industri perangkat lunak bersama tim profesional.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Main Work Article */}
        <div className="lg:col-span-8 p-5 bg-[#fbf7ee] border-2 border-[#181615] shadow-retro flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between border-b border-[#181615] pb-2.5 mb-4 gap-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 relative bg-white border border-[#181615] p-1 shadow-retro-sm">
                  <Image src={HugoLogo} alt="Hugo Studio" className="object-contain w-full h-full" />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-2xl text-[#181615] uppercase leading-tight">
                    Hugo Studio
                  </h3>
                  <p className="font-typewriter text-xs text-[#8b2621] font-bold">
                    Perusahaan Digital Creative &amp; Software House
                  </p>
                </div>
              </div>

              <div className="text-left sm:text-right font-typewriter text-xs">
                <span className="stamp-tag text-xs font-bold">JUNI 2024 &ndash; APRIL 2025</span>
                <p className="text-[#4a453f] text-[11px] mt-1">Durasi: ~11 Bulan Kontrak Penuh</p>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-headline font-bold text-lg text-[#181615] mb-2 uppercase">
                Posisi: Backend Developer &amp; Application Designer
              </h4>
              <p className="font-news text-base leading-relaxed text-[#292524] text-justify mb-4">
                Selama berkiprah di <strong>Hugo Studio</strong>, Rizqy memegang peranan krusial dalam perancangan basis data, pembuatan layanan RESTful API untuk klien dan produk internal, serta koordinasi aktif lintas fungsi bersama UI/UX designer dan frontend developer guna memastikan eksekusi kode berjalan teruji dan berkinerja tinggi.
              </p>
            </div>

            {/* Accomplishments & System Deliverables */}
            <div className="space-y-3 font-news text-sm sm:text-base border-t border-[#181615]/30 pt-4 mb-4">
              <div className="flex items-start gap-2.5">
                <FaCheckCircle className="text-[#8b2621] mt-1 flex-shrink-0 text-sm" />
                <p className="text-[#181615] leading-snug">
                  <strong>Aplikasi Penjualan Melesat:</strong> Merancang backend dan arsitektur database untuk mendukung pencatatan penjualan, pelacakan leads, serta otomasi alur transaksi bisnis secara real-time.
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <FaCheckCircle className="text-[#8b2621] mt-1 flex-shrink-0 text-sm" />
                <p className="text-[#181615] leading-snug">
                  <strong>Sistem Presensi QR &amp; Validasi Lokasi:</strong> Membangun verifikasi kehadiran karyawan dengan enkripsi token QR dinamis dan validasi koordinat geografis (geofencing) guna meminimalkan kecurangan absen.
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <FaCheckCircle className="text-[#8b2621] mt-1 flex-shrink-0 text-sm" />
                <p className="text-[#181615] leading-snug">
                  <strong>Integrasi API &amp; Standarisasi Struktur Data:</strong> Memastikan interoperabilitas antar-layanan menggunakan standar RESTful yang aman, cepat, dan terorganisir dengan dokumentasi rapi.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-[#181615] pt-3 flex flex-wrap items-center justify-between gap-2 text-xs font-typewriter">
            <span className="text-[#4a453f]">STACK: LARAVEL, PHP, MYSQL, REST API, GIT</span>
            <span className="stamp-tag-muted text-[10px]">VERIFIED WORK HISTORY</span>
          </div>
        </div>

        {/* Side Column: Editorial Testimonial & Work Values */}
        <div className="lg:col-span-4 flex flex-col justify-between p-5 bg-[#ede4d1] border-2 border-[#181615] shadow-retro">
          <div>
            <div className="border-b border-[#181615] pb-2 mb-3">
              <span className="font-typewriter text-xs font-bold uppercase text-[#8b2621]">
                KOLOM EDITORIAL
              </span>
              <h4 className="font-headline font-black text-xl text-[#181615] uppercase mt-0.5">
                Nilai Kerja &amp; Budaya Rekayasa
              </h4>
            </div>

            <div className="font-news text-sm text-[#292524] space-y-3 leading-relaxed text-justify">
              <p>
                &ldquo;Arsitektur kode yang andal dibangun atas dasar konsistensi, pemisahan tanggung jawab logika (separation of concerns), dan pengujian menyeluruh.&rdquo;
              </p>
              <p>
                Rizqy terbiasa mengolah sistem dengan alur kerja git bercabang, code review terarah, serta komunikasi asinkron yang efisien.
              </p>
            </div>

            <div className="mt-4 pt-4 border-t border-[#181615]/40 space-y-2 text-xs font-typewriter">
              <div className="flex items-center justify-between py-1 border-b border-[#181615]/20">
                <span className="text-[#4a453f]">Kesiapan Jam Kerja:</span>
                <span className="font-bold text-[#181615]">Fleksibel / On-time</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-[#181615]/20">
                <span className="text-[#4a453f]">Metodologi:</span>
                <span className="font-bold text-[#181615]">Agile / Sprint Based</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-[#181615]/20">
                <span className="text-[#4a453f]">Orientasi:</span>
                <span className="font-bold text-[#181615]">Solutif &amp; Berkelanjutan</span>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t-2 border-[#181615] text-center">
            <a
              href="#kontak"
              className="inline-block w-full py-2 bg-[#181615] text-[#fbf7ee] font-typewriter text-xs uppercase font-bold tracking-wider hover:bg-[#8b2621] transition-colors shadow-retro-sm text-center"
            >
              Undang Wawancara / Rekrut
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
