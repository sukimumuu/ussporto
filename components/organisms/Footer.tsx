import MenuNavbar from "../atoms/MenuNavbar";

import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaBlogger } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
        <nav className="menu flex flex-row! gap-4">
            <MenuNavbar />
        </nav>
        <nav>
            <div className="grid grid-flow-col gap-4">
            <a>
                <FaInstagram className="text-2xl" />
            </a>
            <a>
                <IoLogoLinkedin className="text-2xl" />
            </a>
            <a>
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