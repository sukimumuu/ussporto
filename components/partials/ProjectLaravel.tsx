import Image from "next/image"

import { MdWorkHistory } from "react-icons/md";

import GameExhibition from "@/public/images/projects/game_exhi.jpg";
import PerpusSmecone from "@/public/images/projects/perpus.png";

const ProjectLaravel = () => {
  return (
    <div className='flex flex-col'>
        <div className="flex mb-3 shadow-lg">
        <Image src={GameExhibition} alt="game-exhibition" className="w-2xl" />
        <div className="p-3">
            <h1 className="text-xl font-bold">Smecone Game Exhibition 2024</h1>
            <span className="flex gap-3"><MdWorkHistory /> 27 February 2024 - 08 March 2024</span>
            <p className="mt-3">Registration website for game exhibition event by children majoring in <i>Software Engineering</i> SMK N 1 Purwokerto 2024</p>
            <div className="mt-8">
                <label htmlFor="roles" className="font-bold">Role</label>
                <ul id="roles">
                    <li>- Application Designer</li>
                    <li>- Backend Development</li>
                </ul>
            </div>
        </div>
        </div>
        <div className="flex mb-3 shadow-lg">
        <Image src={PerpusSmecone} alt="perpus-smecone" className="w-2xl" />
        <div className="p-3">
            <h1 className="text-xl font-bold">Smecone Library</h1>
            <span className="flex gap-3"><MdWorkHistory /> 18 April 2024 - 30 May 2024</span>
            <p className="mt-3">Library website for <i>SMK N 1 Purwokerto</i> to view the book list and read the latest school articles as well as the landing page.</p>
            <div className="mt-8">
                <label htmlFor="roles" className="font-bold">Role</label>
                <ul id="roles">
                    <li>- Application Designer</li>
                    <li>- Backend Development</li>
                </ul>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ProjectLaravel