"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { UnifiedProject } from "@/data/projects";
import { FaExternalLinkAlt, FaTimes, FaCalendarAlt, FaUserCheck, FaExclamationTriangle } from "react-icons/fa";

interface ProjectModalProps {
  project: UnifiedProject | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-xs no-print animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#fbf7ee] border-4 border-[#181615] shadow-retro-lg p-5 sm:p-7 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Vintage Top Notice */}
        <div className="flex items-center justify-between border-b-2 border-[#181615] pb-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="stamp-tag text-xs">{project.categoryBadge}</span>
            <span className="font-typewriter text-xs text-[#4a453f] hidden sm:inline">
              ARSIP DOKUMEN # {project.id.toUpperCase()}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 border border-[#181615] hover:bg-[#181615] hover:text-[#fbf7ee] transition-colors text-sm font-bold flex items-center gap-1 cursor-pointer"
            title="Tutup Kliping"
          >
            <FaTimes />
            <span className="text-xs uppercase font-typewriter">Tutup</span>
          </button>
        </div>

        {/* Modal Headline */}
        <h3 className="font-headline text-2xl sm:text-3xl font-black text-[#181615] leading-tight mb-2 uppercase">
          {project.title}
        </h3>

        {/* Date line */}
        <div className="flex items-center gap-2 text-xs font-typewriter text-[#4a453f] mb-4 pb-2 border-b border-[#181615]/30">
          <FaCalendarAlt className="text-[#8b2621]" />
          <span>PERIODE PENGERJAAN: {project.date}</span>
        </div>

        {/* Project Image Frame */}
        <div className="border-2 border-[#181615] p-2 bg-white shadow-retro-sm mb-4">
          <div className="relative aspect-video w-full overflow-hidden bg-[#eae3d2] border border-[#181615]/40">
            <Image
              src={project.imgSrc}
              alt={project.alt}
              className="w-full h-full object-contain"
            />
          </div>
          <p className="font-headline italic text-[11px] text-center text-[#4a453f] mt-1.5">
            Dokumentasi Tangkapan Layar Resmi &bull; {project.title}
          </p>
        </div>

        {/* Body Description */}
        <div className="mb-5">
          <h4 className="font-headline font-bold text-xs uppercase tracking-wider text-[#181615] border-b border-[#181615] pb-1 mb-2">
            Ringkasan &amp; Spesifikasi Proyek
          </h4>
          <p
            className="font-news text-base leading-relaxed text-[#181615] text-justify"
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
        </div>

        {/* Roles */}
        <div className="mb-5 p-3 bg-[#ede4d1]/60 border border-[#181615]">
          <h4 className="font-headline font-bold text-xs uppercase tracking-wider text-[#181615] flex items-center gap-2 mb-2">
            <FaUserCheck className="text-[#8b2621]" />
            Peran &amp; Tanggung Jawab
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.roles.map((role, i) => (
              <span
                key={i}
                className="px-2.5 py-1 bg-[#fbf7ee] border border-[#181615] font-typewriter text-xs font-semibold text-[#181615]"
              >
                &bull; {role}
              </span>
            ))}
          </div>
        </div>

        {/* Note / NDA Alert */}
        {project.note ? (
          <div className="mb-5 p-3 border-2 border-dashed border-[#8b2621] bg-[#8b2621]/10 text-xs font-typewriter text-[#8b2621] flex items-start gap-2.5">
            <FaExclamationTriangle className="mt-0.5 flex-shrink-0 text-base" />
            <div>
              <span className="font-bold uppercase block mb-0.5">CATATAN KHUSUS / KERAHASIAN:</span>
              <p className="font-news text-sm text-[#181615]">{project.note}</p>
            </div>
          </div>
        ) : null}

        {/* Footer Actions */}
        <div className="border-t-2 border-[#181615] pt-4 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-typewriter text-[#4a453f]">
            KATEGORI: {project.categoryName.toUpperCase()}
          </span>

          <div className="flex items-center gap-2">
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#181615] text-[#fbf7ee] font-typewriter text-xs uppercase font-bold tracking-wider hover:bg-[#8b2621] transition-colors shadow-retro-sm"
              >
                <span>Buka Tautan / Demo</span>
                <FaExternalLinkAlt className="text-xs" />
              </a>
            ) : (
              <span className="px-3 py-1.5 border border-[#8b2621] text-[#8b2621] font-typewriter text-xs font-bold uppercase">
                Tautan Tertutup (NDA)
              </span>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 border border-[#181615] font-typewriter text-xs uppercase font-bold hover:bg-[#181615] hover:text-[#fbf7ee] transition-colors cursor-pointer"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
