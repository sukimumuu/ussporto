"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { UnifiedProject } from "@/data/projects";
import { FaExternalLinkAlt, FaTimes, FaCalendarAlt, FaShieldAlt, FaLayerGroup } from "react-icons/fa";

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/60 backdrop-blur-xs no-print"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-2xl bg-white border border-zinc-200 rounded-2xl shadow-xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-100">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
              <FaLayerGroup className="text-[10px]" />
              {project.categoryBadge}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors cursor-pointer"
            aria-label="Close details"
          >
            <FaTimes className="text-sm" />
          </button>
        </div>

        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 leading-snug">
          {project.title}
        </h3>

        {/* Date / Period */}
        <div className="flex items-center gap-2 text-xs text-zinc-500 mt-2 mb-4 pb-3 border-b border-zinc-100">
          <FaCalendarAlt className="text-zinc-400" />
          <span>Timeline: {project.date}</span>
        </div>

        {/* Image Preview Container */}
        <div className="w-full rounded-xl overflow-hidden bg-zinc-100 border border-zinc-200 mb-5">
          <div className="relative aspect-video w-full bg-zinc-50 flex items-center justify-center">
            <Image
              src={project.imgSrc}
              alt={project.alt}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Project Description */}
        <div className="mb-5">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
            About Project
          </h4>
          <p
            className="text-sm sm:text-base text-zinc-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
        </div>

        {/* Roles & Responsibilities */}
        <div className="mb-5 p-4 rounded-xl bg-zinc-50 border border-zinc-200">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-600 mb-2">
            Role &amp; Responsibilities
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.roles.map((role, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-xs font-medium text-zinc-800 shadow-2xs"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* NDA / Special Note Alert */}
        {project.note ? (
          <div className="mb-5 p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs flex items-start gap-2.5">
            <FaShieldAlt className="mt-0.5 flex-shrink-0 text-sm text-amber-600" />
            <div>
              <span className="font-semibold block mb-0.5">Confidentiality Note:</span>
              <p className="text-amber-900">{project.note}</p>
            </div>
          </div>
        ) : null}

        {/* Footer Actions */}
        <div className="pt-4 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-zinc-400">
            Category: {project.categoryName}
          </span>

          <div className="flex items-center gap-2">
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 text-xs font-semibold transition-colors"
              >
                <span>Visit Project</span>
                <FaExternalLinkAlt className="text-[10px]" />
              </a>
            ) : (
              <span className="px-3 py-1.5 rounded-lg border border-zinc-300 text-zinc-600 text-xs font-medium bg-zinc-100">
                Private / NDA
              </span>
            )}
            <button
              onClick={onClose}
              className="px-3.5 py-2 rounded-lg border border-zinc-200 text-zinc-700 hover:bg-zinc-100 text-xs font-medium transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
