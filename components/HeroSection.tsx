"use client";

import React, { useState } from "react";
import Image from "next/image";
import RizqyPhoto from "@/public/images/rizqybagus.webp";
import HugoLogo from "@/public/images/hugo.png";
import {
  FaEnvelope,
  FaCheck,
  FaCopy,
  FaGithub,
  FaLinkedin,
  FaBriefcase,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaArrowDown
} from "react-icons/fa";
import {
  SiLaravel,
  SiNextdotjs,
  SiTypescript,
  SiMysql,
  SiTailwindcss,
  SiUnity
} from "react-icons/si";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);
  const email = "rizqybs.sp@gmail.com";

  const handleCopyEmail = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const techStack = [
    { name: "Laravel", icon: SiLaravel, color: "text-red-600" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-700" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-zinc-900" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-600" },
    { name: "Unity C#", icon: SiUnity, color: "text-zinc-800" },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 border-b border-zinc-200">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Column: Bio & Intro */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            {/* Location & Status Badge */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 text-zinc-700 border border-zinc-200">
                <FaMapMarkerAlt className="text-zinc-500 text-xs" />
                Purwokerto, Central Java, Indonesia
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
                Backend &amp; Web Engineer
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 leading-tight">
              Building reliable backend architecture and functional web solutions.
            </h1>

            {/* Concise Bio */}
            <p className="mt-5 text-base sm:text-lg text-zinc-600 leading-relaxed">
              Hello, I am <strong className="text-zinc-900 font-semibold">Rizqy Bagus Saputra</strong>. 
              I specialize in backend engineering, RESTful API design, relational databases, and transforming user interface designs into performant, accessible web applications.
            </p>

            <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
              With a background in Software Engineering from SMK Negeri 1 Purwokerto and currently pursuing Information Systems at Universitas Bina Sarana Informatika, I care deeply about clean code, modular architecture, and delivering tangible impact.
            </p>

            {/* Quick Experience Callout Card */}
            <div className="mt-6 p-4 rounded-xl bg-white border border-zinc-200 hover:border-zinc-300 transition-colors shadow-xs">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-200 p-1 flex items-center justify-center flex-shrink-0">
                    <Image
                      src={HugoLogo}
                      alt="Hugo Studio"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-zinc-900 flex items-center gap-2">
                      Hugo Studio
                      <span className="text-xs font-normal text-zinc-500">· Software House</span>
                    </h2>
                    <p className="text-xs text-zinc-600 font-medium">
                      Backend Developer <span className="text-zinc-400">· June 2024 – April 2025</span>
                    </p>
                  </div>
                </div>
                <a
                  href="#experience"
                  className="text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors whitespace-nowrap"
                >
                  View Details &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Action Buttons & Socials */}
          <div className="mt-8 pt-6 border-t border-zinc-200 flex flex-wrap items-center gap-3 no-print">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 text-sm font-semibold transition-colors shadow-xs"
            >
              <span>Explore Projects</span>
              <FaArrowDown className="text-xs" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-zinc-200 hover:bg-zinc-100 hover:border-zinc-300 text-zinc-800 text-sm font-medium transition-colors cursor-pointer"
              title="Click to copy email address"
            >
              {copied ? (
                <>
                  <FaCheck className="text-emerald-600 text-xs" />
                  <span className="text-emerald-700 font-semibold">Email Copied!</span>
                </>
              ) : (
                <>
                  <FaCopy className="text-zinc-500 text-xs" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <div className="flex items-center gap-2 ml-auto">
              <a
                href="https://github.com/sukimumuu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-100 text-zinc-700 hover:text-zinc-900 transition-colors"
                aria-label="GitHub Profile"
              >
                <FaGithub className="text-base" />
              </a>
              <a
                href="https://linkedin.com/in/rizqybs24"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-100 text-zinc-700 hover:text-zinc-900 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="text-base" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Portrait & Tech Arsenal */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Crisp Portrait Card */}
          <div className="bg-white border border-zinc-200 rounded-2xl p-4 shadow-xs">
            <div className="relative aspect-4/3 sm:aspect-square w-full rounded-xl overflow-hidden bg-zinc-100">
              <Image
                src={RizqyPhoto}
                alt="Portrait of Rizqy Bagus Saputra"
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>
            <div className="mt-3.5 px-1 flex items-center justify-between text-xs text-zinc-500">
              <div>
                <span className="font-semibold text-zinc-900">Rizqy Bagus Saputra</span>
                <p className="text-[11px] text-zinc-500">Software &amp; Backend Engineering</p>
              </div>
              <span className="px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-600 font-mono text-[11px]">
                Purwokerto, ID
              </span>
            </div>
          </div>

          {/* Tech Arsenal Card */}
          <div className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-xs">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">
              Technologies &amp; Core Stack
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {techStack.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 p-2 rounded-lg border border-zinc-200 bg-zinc-50 hover:bg-white hover:border-zinc-300 transition-colors text-xs font-medium text-zinc-800"
                  >
                    <Icon className={`text-base flex-shrink-0 ${tech.color}`} />
                    <span className="truncate">{tech.name}</span>
                  </div>
                );
              })}
            </div>

            {/* Quick Education Summary */}
            <div className="mt-4 pt-4 border-t border-zinc-100 space-y-2">
              <div className="flex items-start gap-2 text-xs">
                <FaGraduationCap className="text-zinc-400 mt-0.5 flex-shrink-0" />
                <span className="text-zinc-600">
                  <strong className="text-zinc-800">Universitas Bina Sarana Informatika</strong> — S1 Sistem Informasi
                </span>
              </div>
              <div className="flex items-start gap-2 text-xs">
                <FaGraduationCap className="text-zinc-400 mt-0.5 flex-shrink-0" />
                <span className="text-zinc-600">
                  <strong className="text-zinc-800">SMK Negeri 1 Purwokerto</strong> — Rekayasa Perangkat Lunak
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
