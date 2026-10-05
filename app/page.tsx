import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 flex flex-col">
      {/* Sticky Clean Navbar */}
      <Navbar />

      {/* Main Content Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Hero & Bio Section */}
        <HeroSection />

        {/* 2. Projects Archive Section with interactive filters & search */}
        <ProjectsSection />

        {/* 3. Work Experience & Education Section */}
        <ExperienceSection />

        {/* 4. Services & Direct Contact Section */}
        <ContactSection />

        {/* 5. Minimal Footer */}
        <Footer />
      </main>
    </div>
  );
}
