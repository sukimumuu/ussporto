"use client";
import { useState } from "react";
import Image from "next/image";

import PMLP from "@/public/images/projects/pm_landing-page.jpg";
import melesat from "@/public/images/projects/melesat.png"
import GameExhibition from "@/public/images/projects/game_exhi.jpg";
import PerpusSmecone from "@/public/images/projects/perpus.png";

const HeroCarousel = () => {
  const images = [PMLP, melesat, GameExhibition, PerpusSmecone];
  const [currentIndex, setCurrentIndex] = useState(0);
  const lastIndex = images.length - 1;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? lastIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === lastIndex ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-[640px] h-[320px] mx-auto shadow-xl rounded-box overflow-hidden">
    <div
      className="flex transition-transform duration-700 ease-in-out h-full"
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      {images.map((src, i) => (
        <div key={i} className="w-full flex-shrink-0 h-full">
          <Image
            src={src}
            alt={`Carousel ${i}`}
            className="w-full h-full object-cover"
            width={500}
            height={300}
          />
        </div>
      ))}
    </div>

    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <button onClick={prevSlide} className="btn btn-circle">
        ❮
      </button>
      <button onClick={nextSlide} className="btn btn-circle">
        ❯
      </button>
    </div>
  </div>
  );
};

export default HeroCarousel;