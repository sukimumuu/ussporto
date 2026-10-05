"use client";

import React from "react";
import Image from "next/image";
import HugoLogo from "@/public/images/hugo.png";
import { FaCheckCircle, FaBriefcase, FaGraduationCap, FaCodeBranch, FaLaptopCode } from "react-icons/fa";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 border-b border-zinc-200">
      {/* Section Header */}
      <div className="max-w-3xl mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 text-zinc-700 border border-zinc-200 mb-3">
          Career &amp; Background
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
          Work Experience &amp; Education
        </h2>
        <p className="mt-2 text-sm sm:text-base text-zinc-600 leading-relaxed">
          Professional engineering milestones and technical education.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Work History Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-zinc-200 shadow-xs hover:border-zinc-300 transition-colors">
            {/* Hugo Studio Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-zinc-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-200 p-1.5 flex items-center justify-center flex-shrink-0">
                  <Image
                    src={HugoLogo}
                    alt="Hugo Studio"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900">Hugo Studio</h3>
                  <p className="text-xs text-blue-700 font-medium">
                    Backend Developer &amp; Application Designer
                  </p>
                </div>
              </div>

              <div className="text-left sm:text-right">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-zinc-100 text-zinc-700">
                  June 2024 – April 2025
                </span>
                <p className="text-[11px] text-zinc-400 mt-0.5">11 Months · Contract</p>
              </div>
            </div>

            {/* Role Summary */}
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-5">
              At Hugo Studio, I was responsible for architecting backend solutions, modeling relational databases, developing RESTful APIs for both client projects and internal products, and collaborating with cross-functional teams to ensure fast and reliable software delivery.
            </p>

            {/* Key Deliverables & Systems Built */}
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">
              Key Contributions &amp; Systems Delivered:
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-emerald-600 mt-1 flex-shrink-0 text-sm" />
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                  <strong className="text-zinc-900">Melesat Sales Application:</strong> Designed backend architecture and database structure for sales record management, lead tracking, and automated business transaction flows.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-emerald-600 mt-1 flex-shrink-0 text-sm" />
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                  <strong className="text-zinc-900">QR Attendance &amp; Geofencing System:</strong> Built secure employee attendance verification with dynamic QR token encryption and geographical location validation.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-emerald-600 mt-1 flex-shrink-0 text-sm" />
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                  <strong className="text-zinc-900">RESTful API Standardization:</strong> Established standardized API endpoints and structured data responses, improving frontend-backend integration speed.
                </p>
              </div>
            </div>

            {/* Skills & Tech tags */}
            <div className="mt-6 pt-4 border-t border-zinc-100 flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-semibold text-zinc-400 mr-1">Stack:</span>
              {["Laravel", "PHP", "MySQL", "RESTful API", "Git", "Postman"].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-md bg-zinc-100 text-zinc-700 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Education & Principles Column (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Education Card */}
          <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-xs">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4 flex items-center gap-2">
              <FaGraduationCap className="text-zinc-600 text-sm" />
              Education History
            </h3>

            <div className="space-y-4">
              <div className="pb-3 border-b border-zinc-100 last:border-0 last:pb-0">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm font-bold text-zinc-900">
                    Universitas Bina Sarana Informatika
                  </h4>
                  <span className="text-[11px] font-mono text-zinc-400">Current</span>
                </div>
                <p className="text-xs text-blue-700 font-medium mt-0.5">
                  S1 Sistem Informasi (Bachelor of Information Systems)
                </p>
                <p className="text-xs text-zinc-500 mt-1">
                  Focusing on enterprise information architecture, software design, and database systems.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm font-bold text-zinc-900">
                    SMK Negeri 1 Purwokerto
                  </h4>
                  <span className="text-[11px] font-mono text-zinc-400">Graduated</span>
                </div>
                <p className="text-xs text-zinc-600 font-medium mt-0.5">
                  Rekayasa Perangkat Lunak (Software Engineering)
                </p>
                <p className="text-xs text-zinc-500 mt-1">
                  Core fundamentals in algorithms, OOP, database design, web programming, and teamwork.
                </p>
              </div>
            </div>
          </div>

          {/* Engineering Principles Card */}
          <div className="p-6 rounded-2xl bg-zinc-100/70 border border-zinc-200">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3 flex items-center gap-2">
              <FaLaptopCode className="text-zinc-600 text-sm" />
              Engineering Values
            </h3>
            <ul className="text-xs sm:text-sm text-zinc-700 space-y-2.5">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 mt-1.5 flex-shrink-0" />
                <span><strong>Simplicity First:</strong> Clean, self-documenting code over unnecessary cleverness.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 mt-1.5 flex-shrink-0" />
                <span><strong>Robust Backend:</strong> Proper validation, error handling, and structured database relations.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 mt-1.5 flex-shrink-0" />
                <span><strong>Collaborative Workflow:</strong> Git branching conventions, clear pull requests, and open communication.</span>
              </li>
            </ul>

            <div className="mt-5 pt-4 border-t border-zinc-200/80">
              <a
                href="#contact"
                className="block text-center w-full py-2 px-4 rounded-lg bg-zinc-900 text-white text-xs font-semibold hover:bg-zinc-800 transition-colors"
              >
                Discuss Work Opportunities &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
