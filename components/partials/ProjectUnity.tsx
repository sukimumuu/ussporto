import Image from "next/image"

import { MdWorkHistory } from "react-icons/md";

import NightmareGame from "@/public/images/projects/nightmare1.jpg";

const ProjectUnity = () => {
  return (
    <div className='flex flex-col'>
        <div className="flex mb-3 shadow-lg">
        <Image src={NightmareGame} alt="nightmare" className="w-2xl" />
        <div className="p-3">
            <h1 className="text-xl font-bold">Nightmare</h1>
            <span className="flex gap-3"><MdWorkHistory /> 12 November 2023 - 11 December 2023</span>
            <p className="mt-3">2D game created for the final project collection in the Software Engineering department (SMK / Vocational High School). made with C# on unity and has a 2D Platformer theme that has a deep message in it.</p>
            <div className="mt-8">
                <label htmlFor="roles" className="font-bold">Role</label>
                <ul id="roles">
                    <li>- Leader Team</li>
                    <li>- Progammer</li>
                </ul>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ProjectUnity