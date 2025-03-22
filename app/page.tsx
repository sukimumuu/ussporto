import Image from "next/image";
import Link from "next/link";
import ussImg from "@/public/images/rizqybagus.webp";


import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import HeroCarousel from "@/components/partials/HeroCarousel";
import ProjectCard from "@/components/atoms/ProjectCard";

import { FaLaravel } from "react-icons/fa";
import { FaUnity } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";

import { project_laravel } from "@/data/project_laravel"
import { project_unity } from "@/data/project_unity"
import { project_html } from "@/data/project_html"

export default function Home() {
  const laravel = project_laravel.slice(0, 3);
  const unity = project_unity.slice(0, 3);
  const html = project_html.slice(0, 3);

  return (
    <>
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Navbar />
      <div className="flex flex-col items-center justify-between min-h-screen px-4 sm:px-6 lg:px-8 py-8">
          <div className="ms-auto max-[426px]:mx-auto mb-8">
            <HeroCarousel />
          </div>
          <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold w-full lg:w-1/2 leading-tight"><span className="text-emerald-600">Enjoying Explore:</span> A Journey Through IT & Programming</h1>
          <p className="py-6 text-base sm:text-lg lg:text-2xl w-full lg:w-2/3">
            I enjoy exploring the vast world of IT, especially in programming. From learning various programming languages and mastering server management to experimenting with creative design, I&apos;m always eager to dive deeper into technology.
            </p>
            <button className="btn bg-emerald-600 text-white">Start Explore</button>
          </div>
      </div>
      <div className="divider mb-12">Project</div>
      <div className="tabs tabs-lift">
        <label className="tab">
          <input type="radio" name="project_tab" defaultChecked />
          <FaLaravel className="mr-4" />
          Laravel
        </label>
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {laravel.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <label className="tab">
          <input type="radio" name="project_tab" />
          <FaUnity className="mr-4" />
          Unity
        </label>
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {unity.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <label className="tab">
          <input type="radio" name="project_tab" />
          <FaHtml5 className="mr-4" />
          Html
        </label>
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {html.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
      <button className="btn bg-emerald-600 block mx-auto my-10 text-white"><Link href="/project">See More Project...</Link></button>
      <div className="divider mb-12">About</div>
      <div>
        <Image src={ussImg} alt="self-photo" className="w-80 max-[426px]:w-64 rounded-full block mx-auto mb-8"/>
        <p className="text-center text-lg">&quot;Hi, I&apos;m Rizqy Bagus Saputra, a tech enthusiast with a deep passion for programming and innovation. I graduated from SMK N 1 Purwokerto, majoring in Software Engineering, and I&apos;m currently pursuing a degree in Information Systems at Universitas Bina Sarana Informatika. I love diving into the ever-evolving world of technology, constantly exploring new concepts, tools, and methodologies to enhance my skills. For me, programming isn&apos;t just about writing code—it&apos;s about solving problems, creating impactful solutions, and continuously learning in this dynamic field.&quot;</p>
      </div>
    </main>
    <Footer />
    </>

  );
}
