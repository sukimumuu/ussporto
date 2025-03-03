"use client"
import { useState, useEffect } from "react";

import Image from "next/image";

import PMLP from "@/public/images/projects/pm_landing-page.jpg";
import NightmareGame from "@/public/images/projects/nightmare1.jpg";
import GameExhibition from "@/public/images/projects/game_exhi.jpg";
import PerpusSmecone from "@/public/images/projects/perpus.png";

const HeroCarousel = () => {
    const [index, setIndex] = useState(0);
    const images = [
      PMLP,
      NightmareGame,
      GameExhibition,
      PerpusSmecone
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2500);
  
      return () => clearInterval(interval);
    }, [images.length]);
    
    return (
        <div className="carousel rounded-box w-96 overflow-hidden shadow-xl">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {images.map((src, i) => (
              <div key={i} className="carousel-item w-full flex-shrink-0">
                <Image src={src} className="w-full" alt={`Carousel ${i}`} />
              </div>
            ))}
          </div>
        </div>
    );
}

export default HeroCarousel