import Image from "next/image"

import { MdWorkHistory } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";

import PMLP from "@/public/images/projects/pm_landing-page.jpg";

const ProjectHTML = () => {
  return (
    <div className='flex flex-col'>
        <div className="flex mb-3 shadow-lg">
        <Image src={PMLP} alt="pm-landingpage" className="w-2xl" />
        <div className="p-3">
            <a href="https://pm.smkn1purwokerto.sch.id/" target="_blank" className="flex items-center hover:text-blue-600 gap-2">
                <h1 className="text-xl font-bold">Pemasaran Landing Page</h1>
              <FiExternalLink className="text-lg" />
            </a>
            <span className="flex gap-3"><MdWorkHistory /> 21 November 2022</span>
            <p className="mt-3">Web landing page for "Pemasaran" department (Marketing) at SMK N 1 Purwokerto</p>
            <div className="mt-8">
                <label htmlFor="roles" className="font-bold">Role</label>
                <ul id="roles">
                    <li>- Frontend Development</li>
                </ul>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ProjectHTML