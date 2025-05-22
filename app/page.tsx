import Image from "next/image";

// Images
import BannerImage from "@/public/images/keyboard-foto.webp"
import SelfImage from "@/public/images/rizqybagus.webp"
import IndonesiaFlag from "@/public/images/indonesia.png"
// Icons
import { HiMiniInboxArrowDown } from "react-icons/hi2";
import { FiExternalLink } from "react-icons/fi";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <Image src={BannerImage} alt="banner image - https://www.freepik.com/author/pikisuperstar" className="w-full h-48 object-cover" />
        <div className="w-11/12 mx-auto">
          <div className="w-full">
            <div className="h-36 relative mb-8">
              <Image src={SelfImage} alt="self picture" className="rounded-full border-4 border-white w-44 h-44 mx-auto absolute -top-8 left-0" />
              <h2 className="text-3xl font-bold absolute top-10 left-48">Rizqy Bagus Saputra</h2>
              <p className="text-xl text-gray-500 font-medium absolute top-20 left-48">I'm a junior web developer</p>
              <button className="btn bg-black text-white border-black absolute top-10 right-0">
                  <a href="mailto:rizqybs.sp@gmail.com" className="flex items-center text-white text-lg font-bold"><HiMiniInboxArrowDown className="me-3"/> Hire Me</a>
              </button>
            </div>
            <h2 className="text-xl font-semibold">Experience</h2>
            <p className="mb-3 text-gray-500">I had experience in backend web application development and API integration, convert designs from Figma to responsive view, and teamwork.</p>
            <hr />
            <div className="flex mt-8">
              <div className="w-3/5">
                <h2 className="text-xl font-semibold">About Me</h2>
                <p className="mb-3 text-gray-500 text-justify">Hi, I'm Rizqy Bagus Saputra, a tech enthusiast with a deep passion for programming and innovation. I graduated from SMK N 1 Purwokerto, majoring in Software Engineering, and I'm currently pursuing a degree in Information Systems at Universitas Bina Sarana Informatika. I love diving into the ever-evolving world of technology, constantly exploring new concepts, tools, and methodologies to enhance my skills. For me, programming isn't just about writing code—it's about solving problems, creating impactful solutions, and continuously learning in this dynamic field.</p>
              </div>
              <div className="w-2/5 p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold">Location</p>
                    <div className="flex items-center gap-2">
                      <Image src={IndonesiaFlag} alt="Indonesia flag" className="w-6" />
                      Purwokerto, ID
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold">Website</p>
                    <a className="underline flex items-center gap-4" href="https://pausberbuluu.blogspot.com/">pausberbuluu.blogspot.com <FiExternalLink /></a>
                  </div>
                  <div>
                    <p className="font-semibold">Portfolio</p>
                    <a className="underline flex items-center gap-4" href="https://ussporto.vercel.app/">ussporto.vercel.app <FiExternalLink /></a>
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a className="underline flex items-center gap-4" href="mailto:rizqybs.sp@gmail.com">rizqybs.sp@gmail.com <FiExternalLink /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}
