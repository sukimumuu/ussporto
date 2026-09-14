import React from "react";
import NewspaperHeader from "@/components/NewspaperHeader";
import FrontPageHeadline from "@/components/FrontPageHeadline";
import ProjectDispatches from "@/components/ProjectDispatches";
import WorkExperienceSection from "@/components/WorkExperienceSection";
import ClassifiedsSection from "@/components/ClassifiedsSection";
import NewspaperFooter from "@/components/NewspaperFooter";

export default function Home() {
  return (
    <main className="min-h-screen py-4 sm:py-8 px-2 sm:px-4 md:px-6">
      {/* Vintage Broadsheet Paper Sheet Wrapper */}
      <div className="max-w-6xl mx-auto p-4 sm:p-8 md:p-10 bg-[#fbf7ee] border-4 border-[#181615] shadow-retro-lg newspaper-sheet relative">
        {/* Subtle Newspaper Paper Corner Creases / Vintage Frame Accents */}
        <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#181615] pointer-events-none" />
        <div className="absolute top-1.5 right-1.5 w-3 h-3 border-t-2 border-r-2 border-[#181615] pointer-events-none" />
        <div className="absolute bottom-1.5 left-1.5 w-3 h-3 border-b-2 border-l-2 border-[#181615] pointer-events-none" />
        <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#181615] pointer-events-none" />

        {/* 1. The Masthead / Newspaper Header */}
        <NewspaperHeader />

        {/* 2. Front Page Lead Story & Bio */}
        <FrontPageHeadline />

        {/* 3. The Project Dispatches Archive (Loaded from @data) */}
        <ProjectDispatches />

        {/* 4. Hugo Studio Industry Report & Work History */}
        <WorkExperienceSection />

        {/* 5. Retro Classifieds, Humor & Telegraph Contacts */}
        <ClassifiedsSection />

        {/* 6. The Colophon / Newspaper Footer */}
        <NewspaperFooter />
      </div>
    </main>
  );
}
