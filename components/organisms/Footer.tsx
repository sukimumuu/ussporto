import MenuNavbar from "../atoms/MenuNavbar";

import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaBlogger } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
        <nav className="menu flex flex-row! gap-4 max-[321px]:gap-2">
            <MenuNavbar />
        </nav>
        <nav>
            <div className="grid grid-flow-col gap-4">
            <a href="https://www.instagram.com/rizqybs24/" target="_blank">
                <FaInstagram className="text-2xl" />
            </a>
            <a href="https://linkedin.com/in/rizqybs24" target="_blank">
                <IoLogoLinkedin className="text-2xl" />
            </a>
            <a href="https://pausberbuluu.blogspot.com/" target="_blank">
                <FaBlogger className="text-2xl" />
            </a>
            </div>
        </nav>
        <aside>
            <p>Copyright © {new Date().getFullYear()} - All right reserved by Sukimumuu</p>
        </aside>
        </footer>
  )
}

export default Footer