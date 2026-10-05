"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { allProjects, UnifiedProject, ProjectCategory } from "@/data/projects";
import ProjectModal from "./ProjectModal";
import {
  FaExternalLinkAlt,
  FaSearch,
  FaTimes,
  FaShieldAlt,
  FaFolderOpen,
  FaLayerGroup,
  FaGamepad,
  FaGlobe
} from "react-icons/fa";
import { SiLaravel } from "react-icons/si";

export default function ProjectsSection() {
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

  // Featured project (SID Lumbungdata)
  const featuredProject = useMemo(() => {
    return allProjects.find((p) => p.alt === "lumbungdata") || allProjects[0];
  }, []);

  const categories: { id: ProjectCategory; label: string; count: number; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: "all", label: "All Projects", count: allProjects.length, icon: FaLayerGroup },
    { id: "laravel", label: "Laravel & Backend", count: 8, icon: SiLaravel },
    { id: "unity", label: "Unity Game", count: 1, icon: FaGamepad },
    { id: "html", label: "Web & Pages", count: 1, icon: FaGlobe },
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 border-b border-zinc-200">
      {/* Section Header */}
      <div className="max-w-3xl mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 text-zinc-700 border border-zinc-200 mb-3">
          Portfolio Archive
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
          Featured Works &amp; Systems
        </h2>
        <p className="mt-2 text-sm sm:text-base text-zinc-600 leading-relaxed">
          Production applications, backend services, RESTful APIs, and interactive projects developed across diverse industries.
        </p>
      </div>

      {/* Featured Highlight Card */}
      {featuredProject && activeCategory === "all" && !searchQuery && (
        <div className="mb-10 p-5 sm:p-7 rounded-2xl bg-white border border-zinc-200 hover:border-zinc-300 transition-all shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-zinc-100">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                Featured Spotlight
              </span>
              <span className="text-xs text-zinc-500 font-medium hidden sm:inline">
                Village Information System (SID)
              </span>
            </div>
            <span className="text-xs text-zinc-500 font-mono">
              {featuredProject.date}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7">
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 leading-snug mb-3">
                <button
                  onClick={() => setSelectedProject(featuredProject)}
                  className="hover:text-blue-600 text-left transition-colors cursor-pointer"
                >
                  {featuredProject.title}
                </button>
              </h3>
              <p
                className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-4"
                dangerouslySetInnerHTML={{ __html: featuredProject.description }}
              />

              <div className="flex flex-wrap items-center gap-1.5 mb-6">
                <span className="text-xs font-semibold text-zinc-500 mr-1">
                  Roles:
                </span>
                {featuredProject.roles.map((role, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-0.5 rounded-md bg-zinc-100 text-zinc-700 border border-zinc-200"
                  >
                    {role}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {featuredProject.link && (
                  <a
                    href={featuredProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 text-xs font-semibold transition-colors"
                  >
                    <span>Visit Live Portal</span>
                    <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(featuredProject)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-zinc-200 text-zinc-700 hover:bg-zinc-100 text-xs font-medium transition-colors cursor-pointer"
                >
                  <FaFolderOpen className="text-xs" />
                  <span>View Details</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div
                onClick={() => setSelectedProject(featuredProject)}
                className="rounded-xl overflow-hidden border border-zinc-200 bg-zinc-100 cursor-pointer group shadow-2xs"
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={featuredProject.imgSrc}
                    alt={featuredProject.alt}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filter Tabs and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  isActive
                    ? "bg-zinc-900 text-white shadow-xs"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900"
                }`}
              >
                <Icon className="text-xs" />
                <span>{cat.label}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-zinc-800 text-zinc-300" : "bg-zinc-200 text-zinc-600"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects..."
            className="w-full pl-9 pr-8 py-1.5 rounded-lg bg-white border border-zinc-200 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-hidden focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-all"
          />
          <FaSearch className="absolute left-3 top-2.5 text-xs text-zinc-400 pointer-events-none" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-2 text-xs text-zinc-400 hover:text-zinc-700 cursor-pointer"
              aria-label="Clear search"
            >
              <FaTimes />
            </button>
          )}
        </div>
      </div>

      {/* Results Count when searching or filtered */}
      {(searchQuery || activeCategory !== "all") && (
        <div className="flex items-center justify-between text-xs text-zinc-500 mb-4 pb-2 border-b border-zinc-100">
          <span>
            Showing {filteredProjects.length} of {allProjects.length} projects
            {searchQuery && ` matching "${searchQuery}"`}
          </span>
          <button
            onClick={() => {
              setActiveCategory("all");
              setSearchQuery("");
            }}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Grid of Projects */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 rounded-2xl bg-white border border-zinc-200 p-8">
          <FaFolderOpen className="text-4xl text-zinc-300 mx-auto mb-3" />
          <h3 className="text-base font-semibold text-zinc-800">
            No projects match your filter
          </h3>
          <p className="text-xs text-zinc-500 mt-1 max-w-sm mx-auto">
            Try adjusting your search query or select another category above.
          </p>
          <button
            onClick={() => {
              setActiveCategory("all");
              setSearchQuery("");
            }}
            className="mt-4 px-4 py-2 rounded-lg bg-zinc-900 text-white text-xs font-medium hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            Show All Projects
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredProjects.map((project) => {
            const isNda = !!project.note;
            return (
              <article
                key={project.id}
                className="flex flex-col justify-between rounded-xl bg-white border border-zinc-200 hover:border-zinc-300 hover:shadow-md transition-all duration-200 p-5 group"
              >
                <div>
                  {/* Image Preview Container */}
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="relative aspect-16/10 rounded-lg overflow-hidden bg-zinc-100 border border-zinc-100 mb-4 cursor-pointer"
                  >
                    <Image
                      src={project.imgSrc}
                      alt={project.alt}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    />
                    {isNda && (
                      <div className="absolute top-2 right-2">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold bg-zinc-900/80 text-white backdrop-blur-xs">
                          <FaShieldAlt className="text-[9px]" />
                          NDA
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Header metadata */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                      {project.categoryBadge}
                    </span>
                    <span className="text-[11px] text-zinc-400 font-mono">
                      {project.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-zinc-900 group-hover:text-blue-600 transition-colors line-clamp-1 mb-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-left cursor-pointer"
                    >
                      {project.title}
                    </button>
                  </h3>

                  {/* Description Excerpt */}
                  <p
                    className="text-xs sm:text-sm text-zinc-600 line-clamp-2 leading-relaxed mb-3"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  />

                  {/* Roles */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.roles.map((role, rIdx) => (
                      <span
                        key={rIdx}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-zinc-50 text-zinc-600 border border-zinc-200"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="pt-3 border-t border-zinc-100 flex items-center justify-between gap-2 mt-auto">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-900 text-white hover:bg-zinc-800 text-xs font-semibold transition-colors"
                    >
                      <span>Demo</span>
                      <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] text-zinc-400">
                      <FaShieldAlt className="text-[10px]" /> Private
                    </span>
                  )}

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-2.5 py-1.5 rounded-md text-xs font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors cursor-pointer"
                  >
                    Details &rarr;
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
