"use client"
import Navbar from "@/components/organisms/Navbar"
import Footer from "@/components/organisms/Footer"

import { IoIosInformationCircle } from "react-icons/io";
import ProjectCard from "@/components/atoms/ProjectCard"

import { FaLaravel } from "react-icons/fa";
import { FaUnity } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";

import { project_laravel } from "@/data/project_laravel"
import { project_unity } from "@/data/project_unity"
import { project_html } from "@/data/project_html"

const ProjectPage = () => {
  return (
    <>
    <main className="w-5/6 mx-auto p-3">
      <Navbar />
      {/* Open the modal using document.getElementById('ID').showModal() method */}
    <button className="btn bg-white block ms-auto mt-3 shake-idle" onClick={()=>(document.getElementById('modal_p') as HTMLDialogElement)?.showModal()}><IoIosInformationCircle /></button>
    <dialog id="modal_p" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Haloo guys !</h3>
        <p className="py-4">Klik gambar untuk beralih kehalaman project yaaa</p>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
      <div className="tabs tabs-lift mt-3">
        <label className="tab">
          <input type="radio" name="project_tab" defaultChecked />
          <FaLaravel className="mr-4" />
          Laravel
        </label>
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {project_laravel.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <label className="tab">
          <input type="radio" name="project_tab" />
          <FaUnity className="mr-4" />
          Unity
        </label>
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {project_unity.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <label className="tab">
          <input type="radio" name="project_tab" />
          <FaHtml5 className="mr-4" />
          Html
        </label>
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {project_html.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </main>
    <Footer />
    </>
  )
}

export default ProjectPage