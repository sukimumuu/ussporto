"use client";

import React, { useState } from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaBlogger,
  FaGlobe,
  FaMapMarkerAlt,
  FaCopy,
  FaCheck,
  FaServer,
  FaDatabase,
  FaCode,
  FaBug,
  FaArrowRight
} from "react-icons/fa";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "rizqybs.sp@gmail.com";

  const handleCopyEmail = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const services = [
    {
      icon: FaServer,
      title: "Backend & API Engineering",
      desc: "Architecting modular Laravel APIs, authentication services, webhook integrations, and third-party gateways.",
    },
    {
      icon: FaDatabase,
      title: "Database Modeling & Querying",
      desc: "Relational database schema modeling with MySQL, normalization, migration pipelines, and performance tuning.",
    },
    {
      icon: FaCode,
      title: "Design to Clean Code",
      desc: "Translating Figma design systems into responsive, accessible, and clean Next.js and Tailwind CSS interfaces.",
    },
    {
      icon: FaBug,
      title: "Refactoring & Optimization",
      desc: "Reviewing legacy codebases, resolving bottlenecks, eliminating technical debt, and improving maintainability.",
    },
  ];

  const contactLinks = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "rizqybs.sp@gmail.com",
      href: "mailto:rizqybs.sp@gmail.com",
      action: "Send email",
      isEmail: true,
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/rizqybs24",
      href: "https://linkedin.com/in/rizqybs24",
      action: "Connect on LinkedIn",
      isEmail: false,
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "github.com/sukimumuu",
      href: "https://github.com/sukimumuu",
      action: "View repositories",
      isEmail: false,
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      value: "@rizqybs24",
      href: "https://www.instagram.com/rizqybs24/",
      action: "Follow updates",
      isEmail: false,
    },
    {
      icon: FaBlogger,
      label: "Blog",
      value: "pausberbuluu.blogspot.com",
      href: "https://pausberbuluu.blogspot.com/",
      action: "Read articles",
      isEmail: false,
    },
    {
      icon: FaGlobe,
      label: "Portfolio",
      value: "ussporto.vercel.app",
      href: "https://ussporto.vercel.app/",
      action: "Visit online site",
      isEmail: false,
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 border-b border-zinc-200">
      {/* Section Header */}
      <div className="max-w-3xl mb-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 text-zinc-700 border border-zinc-200 mb-3">
          Get In Touch
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
          Services &amp; Contact Channels
        </h2>
        <p className="mt-2 text-sm sm:text-base text-zinc-600 leading-relaxed">
          Open for full-time backend positions, web development contracts, and collaborative software projects.
        </p>
      </div>

      {/* Services Grid */}
      <div className="mb-12">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">
          What I Can Build For You
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-zinc-200 hover:border-zinc-300 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-800 mb-3">
                    <Icon className="text-base" />
                  </div>
                  <h4 className="text-sm font-bold text-zinc-900 mb-1.5">
                    {service.title}
                  </h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact Channels Grid */}
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">
          Direct Channels
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {contactLinks.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-zinc-200 hover:border-zinc-300 transition-all flex flex-col justify-between group shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <Icon className="text-zinc-500 group-hover:text-blue-600 transition-colors text-sm" />
                      <span className="text-xs font-semibold text-zinc-900">
                        {item.label}
                      </span>
                    </div>
                    {item.isEmail && (
                      <button
                        onClick={handleCopyEmail}
                        className="inline-flex items-center gap-1 text-[11px] font-medium text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer"
                        title="Copy email to clipboard"
                      >
                        {copied ? (
                          <>
                            <FaCheck className="text-emerald-600 text-[10px]" />
                            <span className="text-emerald-700">Copied</span>
                          </>
                        ) : (
                          <>
                            <FaCopy className="text-[10px]" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                  <p className="text-xs text-zinc-600 font-mono truncate mb-3">
                    {item.value}
                  </p>
                </div>

                <a
                  href={item.href}
                  target={item.isEmail ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors pt-2 border-t border-zinc-100"
                >
                  <span>{item.action}</span>
                  <FaArrowRight className="text-[10px]" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Location Banner */}
        <div className="p-5 rounded-2xl bg-zinc-100 border border-zinc-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 flex-shrink-0">
              <FaMapMarkerAlt className="text-base text-zinc-600" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-zinc-900">
                Based in Purwokerto, Central Java, Indonesia
              </h4>
              <p className="text-xs text-zinc-500">
                Timezone: Western Indonesia Time (WIB / UTC+7) · Available for remote and hybrid roles
              </p>
            </div>
          </div>

          <a
            href="mailto:rizqybs.sp@gmail.com?subject=Inquiry%20from%20Portfolio&body=Hello%20Rizqy%2C%0A%0AI%20would%20like%20to%20discuss..."
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 text-xs font-semibold transition-colors shadow-xs whitespace-nowrap self-stretch sm:self-auto justify-center"
          >
            <FaEnvelope className="text-xs" />
            <span>Send Direct Message</span>
          </a>
        </div>
      </div>
    </section>
  );
}
