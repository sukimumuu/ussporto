"use client"
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const logos: string[] = [
  "/images/animate_scrolling/cdnlogo.com_html-5.svg",
  "/images/animate_scrolling/cdnlogo.com_css.svg",
  "/images/animate_scrolling/cdnlogo.com_javascript.svg",
  "/images/animate_scrolling/cdnlogo.com_tailwind-css-wordmark.svg",
  "/images/animate_scrolling/cdnlogo.com_bootstrap-5.svg",
  "/images/animate_scrolling/cdnlogo.com_php.svg",
  "/images/animate_scrolling/cdnlogo.com_laravel.svg",
  "/images/animate_scrolling/cdnlogo.com_java.svg",
  "/images/animate_scrolling/cdnlogo.com_python.svg",
  "/images/animate_scrolling/cdnlogo.com_next-js.svg",
  "/images/animate_scrolling/cdnlogo.com_unity.svg",
  "/images/animate_scrolling/cdnlogo.com_mysql.svg",
  "/images/animate_scrolling/cdnlogo.com_flutter.svg"
];

const chunkArray = (array: string[], size: number) => {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
    array.slice(i * size, i * size + size)
  );
};

const AnimateScrolling = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const logoChunks = chunkArray(logos, 5);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isHovered) {
      timeoutRef.current = setInterval(() => {
        setFade(false);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % logoChunks.length);
          setFade(true);
        }, 500);
      }, 5000);
    }

    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [isHovered, logoChunks.length]);

  return (
    <section className="flex justify-center mt-40">
      <div
        className="w-full flex justify-center items-center relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`absolute top-0 left-0 right-0 flex justify-center items-center transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="flex gap-36">
            {logoChunks[currentIndex].map((logo, index) => (
              <div
                key={index}
                className="transition duration-500 filter grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
              >
                <Image
                  src={logo}
                  alt={`Logo ${index}`}
                  width={64}
                  height={64}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="opacity-0 pointer-events-none">
          {logoChunks[(currentIndex + 1) % logoChunks.length].map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt="preload"
              width={64}
              height={64}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimateScrolling;



