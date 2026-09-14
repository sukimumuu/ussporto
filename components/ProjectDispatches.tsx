"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { allProjects, UnifiedProject, ProjectCategory } from "@/data/projects";
import ProjectModal from "./ProjectModal";
import {
  FaExternalLinkAlt,
  FaSearch,
  FaLock,
  FaCheckCircle,
  FaFolderOpen,
  FaLayerGroup,
  FaGamepad,
  FaGlobe,
  FaNewspaper
} from "react-icons/fa";
import { SiLaravel } from "react-icons/si";

export default function ProjectDispatches() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<UnifiedProject | null>(null);

  // Filtered list
  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      const matchCategory =
        activeCategory === "all" || project.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchQuery =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.roles.some((r) => r.toLowerCase().includes(query));
      return matchCategory && matchQuery;
    });
  }, [activeCategory, searchQuery]);

  // Lead breaking project (SID Lumbungdata or first)
  const breakingProject = useMemo(() => {
    return allProjects.find((p) => p.alt === "lumbungdata") || allProjects[0];
  }, []);

  return (
    <section id="proyek" className="border-b-2 border-[#181615] pb-10 mb-8">
      {/* Section Headline Banner */}
      <div className="border-y-2 border-[#181615] py-2 mb-6 text-center">
        <span className="font-typewriter text-xs font-bold uppercase tracking-widest text-[#8b2621]">
          ❖ BAGIAN II &bull; WARTA PROYEK &amp; REKAYASA SISTEM ❖
        </span>
        <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-black text-[#181615] tracking-tight uppercase mt-1">
          Kumpulan Laporan &amp; Arsip Proyek
        </h2>
        <p className="font-news italic text-sm sm:text-base text-[#4a453f] max-w-2xl mx-auto mt-1">
          Dihimpun dari direktori terverifikasi <code className="font-typewriter text-xs bg-[#ede4d1] px-1.5 py-0.5 border border-[#181615]/40 font-bold">@data</code> &mdash; menyajikan implementasi Laravel, Unity Engine, dan Halaman Web Dinamis.
        </p>
      </div>

      {/* Featured Breaking Scoop Card (Highlight Proyek Unggulan) */}
      {breakingProject && (
        <div className="mb-8 p-4 sm:p-5 bg-[#fbf7ee] border-2 border-[#181615] shadow-retro">
          <div className="flex flex-wrap items-center justify-between border-b border-[#181615] pb-2 mb-3 gap-2">
            <div className="flex items-center gap-2">
              <span className="stamp-tag text-xs font-bold">LIPUTAN KHUSUS UTAMA</span>
              <span className="font-typewriter text-xs text-[#8b2621] font-semibold hidden sm:inline">
                SISTEM INFORMASI DESA &bull; BREAKING FEATURE
              </span>
            </div>
            <span className="font-typewriter text-xs text-[#4a453f]">
              PERIODE: {breakingProject.date}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
            <div className="lg:col-span-7">
              <h3 className="font-headline text-2xl sm:text-3xl font-black text-[#181615] leading-snug uppercase mb-2">
                <button
                  onClick={() => setSelectedProject(breakingProject)}
                  className="hover:text-[#8b2621] text-left transition-colors cursor-pointer"
                >
                  {breakingProject.title}
                </button>
              </h3>
              <p
                className="font-news text-base sm:text-lg leading-relaxed text-[#292524] text-justify mb-4"
                dangerouslySetInnerHTML={{ __html: breakingProject.description }}
              />

              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="font-typewriter text-xs font-bold uppercase text-[#181615]">
                  Divisi &amp; Peran:
                </span>
                {breakingProject.roles.map((role, idx) => (
                  <span
                    key={idx}
                    className="font-typewriter text-xs px-2 py-0.5 border border-[#181615] bg-[#ede4d1]"
                  >
                    {role}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {breakingProject.link && (
                  <a
                    href={breakingProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#181615] text-[#fbf7ee] font-typewriter text-xs uppercase font-bold tracking-wider hover:bg-[#8b2621] transition-colors shadow-retro-sm"
                  >
                    <span>Kunjungi Portal Resmi</span>
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(breakingProject)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 border-2 border-[#181615] font-typewriter text-xs uppercase font-bold hover:bg-[#181615] hover:text-[#fbf7ee] transition-colors cursor-pointer"
                >
                  <FaFolderOpen />
                  <span>Baca Kliping Detail</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div
                onClick={() => setSelectedProject(breakingProject)}
                className="border-2 border-[#181615] p-2 bg-[#ede4d1] cursor-pointer group"
              >
                <div className="relative aspect-video overflow-hidden border border-[#181615]/40 bg-white">
                  <Image
                    src={breakingProject.imgSrc}
                    alt={breakingProject.alt}
                    className="w-full h-full object-cover news-photo group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-2 right-2">
                    <span className="stamp-tag-muted text-[10px]">KLIK UNTUK MEMPERBESAR</span>
                  </div>
                </div>
                <p className="font-headline italic text-xs text-center text-[#4a453f] mt-1.5">
                  Tangkapan Layar Arsip: {breakingProject.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filter and Search Utility Strip */}
      <div className="bg-[#ede4d1] border-2 border-[#181615] p-3 mb-6 no-print">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            <span className="font-typewriter text-xs font-bold uppercase text-[#181615] mr-1 hidden sm:inline">
              KOLOM KORAN:
            </span>
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-3 py-1.5 text-xs font-typewriter uppercase font-bold border transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeCategory === "all"
                  ? "bg-[#181615] text-[#fbf7ee] border-[#181615]"
                  : "bg-[#fbf7ee] text-[#181615] border-[#181615] hover:bg-[#181615]/10"
              }`}
            >
              <FaLayerGroup />
              <span>Semua ({allProjects.length})</span>
            </button>
            <button
              onClick={() => setActiveCategory("laravel")}
              className={`px-3 py-1.5 text-xs font-typewriter uppercase font-bold border transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeCategory === "laravel"
                  ? "bg-[#181615] text-[#fbf7ee] border-[#181615]"
                  : "bg-[#fbf7ee] text-[#181615] border-[#181615] hover:bg-[#181615]/10"
              }`}
            >
              <SiLaravel />
              <span>Laravel &amp; Backend (8)</span>
            </button>
            <button
              onClick={() => setActiveCategory("unity")}
              className={`px-3 py-1.5 text-xs font-typewriter uppercase font-bold border transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeCategory === "unity"
                  ? "bg-[#181615] text-[#fbf7ee] border-[#181615]"
                  : "bg-[#fbf7ee] text-[#181615] border-[#181615] hover:bg-[#181615]/10"
              }`}
            >
              <FaGamepad />
              <span>Unity Game (1)</span>
            </button>
            <button
              onClick={() => setActiveCategory("html")}
              className={`px-3 py-1.5 text-xs font-typewriter uppercase font-bold border transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeCategory === "html"
                  ? "bg-[#181615] text-[#fbf7ee] border-[#181615]"
                  : "bg-[#fbf7ee] text-[#181615] border-[#181615] hover:bg-[#181615]/10"
              }`}
            >
              <FaGlobe />
              <span>Web &amp; HTML (1)</span>
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari arsip berita proyek..."
              className="w-full pl-8 pr-3 py-1.5 bg-[#fbf7ee] border border-[#181615] text-xs font-typewriter placeholder:text-[#4a453f] focus:outline-hidden focus:ring-1 focus:ring-[#181615]"
            />
            <FaSearch className="absolute left-2.5 top-2.5 text-xs text-[#4a453f]" />
          </div>
        </div>
      </div>

      {/* Grid of Newspaper Dispatches */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-12 border-2 border-dashed border-[#181615]/50 bg-[#fbf7ee]">
          <FaNewspaper className="text-4xl text-[#4a453f] mx-auto mb-2" />
          <h4 className="font-headline font-bold text-lg text-[#181615]">
            Arsip Tidak Ditemukan
          </h4>
          <p className="font-news text-sm text-[#4a453f] mt-1">
            Tidak ada laporan proyek yang sesuai dengan kata kunci &ldquo;{searchQuery}&rdquo;.
          </p>
          <button
            onClick={() => {
              setActiveCategory("all");
              setSearchQuery("");
            }}
            className="mt-3 px-3 py-1.5 border border-[#181615] text-xs font-typewriter uppercase font-bold hover:bg-[#181615] hover:text-[#fbf7ee] cursor-pointer"
          >
            Tampilkan Semua Berita
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredProjects.map((project) => {
            const isNda = !!project.note;
            return (
              <article
                key={project.id}
                className="flex flex-col justify-between p-4 bg-[#fbf7ee] border-2 border-[#181615] shadow-retro hover:shadow-retro-lg transition-all duration-200"
              >
                <div>
                  {/* Article Dateline & Tag */}
                  <div className="flex items-center justify-between border-b border-[#181615]/40 pb-1.5 mb-2 text-xs font-typewriter">
                    <span className="font-bold text-[#8b2621] uppercase tracking-wider">
                      {project.categoryBadge}
                    </span>
                    <span className="text-[#4a453f] text-[11px] truncate max-w-[140px]">
                      {project.date}
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="font-headline font-bold text-xl text-[#181615] leading-snug mb-2 uppercase min-h-[52px]">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="hover:text-[#8b2621] text-left transition-colors cursor-pointer"
                    >
                      {project.title}
                    </button>
                  </h3>

                  {/* Halftone Newspaper Image */}
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="border border-[#181615] p-1.5 bg-[#ede4d1] mb-3 cursor-pointer group"
                  >
                    <div className="relative aspect-16/10 overflow-hidden bg-white border border-[#181615]/30">
                      <Image
                        src={project.imgSrc}
                        alt={project.alt}
                        className="w-full h-full object-cover news-photo group-hover:scale-105 transition-transform duration-300"
                      />
                      {isNda && (
                        <div className="absolute top-2 right-2">
                          <span className="stamp-tag text-[9px]">NDA</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Story Excerpt */}
                  <p
                    className="font-news text-sm leading-relaxed text-[#292524] mb-3 text-justify line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  />

                  {/* Roles */}
                  <div className="mb-4">
                    <span className="font-typewriter text-[11px] font-bold text-[#181615] block mb-1">
                      PERAN PENGERJAAN:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {project.roles.map((role, rIdx) => (
                        <span
                          key={rIdx}
                          className="font-typewriter text-[10px] px-1.5 py-0.5 border border-[#181615]/40 bg-[#ede4d1]/70"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Bottom / Action Buttons */}
                <div className="border-t border-[#181615] pt-3 mt-auto">
                  <div className="flex items-center justify-between gap-2">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#181615] text-[#fbf7ee] font-typewriter text-xs uppercase font-bold hover:bg-[#8b2621] transition-colors shadow-retro-sm"
                      >
                        <span>Buka Web</span>
                        <FaExternalLinkAlt className="text-[10px]" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-typewriter border border-[#8b2621] text-[#8b2621] font-semibold">
                        <FaLock className="text-[10px]" /> NDA Terikat
                      </span>
                    )}

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-2.5 py-1.5 border border-[#181615] text-xs font-typewriter uppercase font-bold hover:bg-[#181615] hover:text-[#fbf7ee] transition-colors cursor-pointer"
                    >
                      Detail Kliping &rarr;
                    </button>
                  </div>

                  {project.note && (
                    <p className="font-news italic text-[11px] text-[#8b2621] mt-2 border-t border-[#181615]/20 pt-1 leading-tight">
                      * {project.note}
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* Project Reader Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
