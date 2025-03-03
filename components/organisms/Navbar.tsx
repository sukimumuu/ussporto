import Image from "next/image";
import MenuNavbar from "../atoms/MenuNavbar";

import selfImg from "@/public/images/self.jpeg"
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md rounded-xl px-4">
        <div className="navbar-start">
        <a className="text-xl text-emerald-600 font-bold">Sukimumuu</a>
        <ul className="menu menu-horizontal px-1">
            <MenuNavbar />
        </ul>
        </div>
        <div className="navbar-end">
        <div className="avatar">
            <div className="w-10 rounded-full">
               <Image src={selfImg} alt="self-picture" />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar