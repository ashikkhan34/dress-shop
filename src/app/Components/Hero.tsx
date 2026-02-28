"use client";

import React, { useState } from "react";
import Image from "next/image";
import heroImg from "../../asset/slider1.webp";
import heroImg2 from "../../asset/slider2.webp";
import heroImg3 from "../../asset/slider3.webp";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";

const heroData = [
  {
    id: 1,
    title: "Revealing the Shimmering World of Fashion",
    description: "Fabrics That Matches Your Personality",
    image: heroImg,
  },
  {
    id: 2,
    title: "Inspired by the World, Designed for You",
    description: "Elevate Your Style with Our Curated Collection",
    image: heroImg2,
  },
  {
    id: 3,
    title: "Clime your Fashion Peak with Us",
    description: "Discover the Perfect Fit for Your Style",
    image: heroImg3,
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === heroData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? heroData.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Slider Wrapper */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {heroData.map((item) => (
          <div key={item.id} className="w-full flex-shrink-0 relative h-full">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="bg-cover w-full h-full "
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center  text-center">
              <h1 className="text-xl text-gray-300">{item.title}</h1>
              <p className="mt-4 text-xl md:text-4xl font-semibold">
                {item.description}
              </p>
              <div className="mt-6 flex gap-4">
                <button className="px-4 py-2 border-2 border-black hover:bg-black hover:text-white transition-all ease-in-out duration-500">
                  Shop Now
                </button>
                <button className="px-4 py-2 border-2 border-black hover:bg-black hover:text-white transition-all ease-in-out duration-500">
                  Read More
                </button>
              </div>
            </div>
            <div className=" mt-12 items-center flex justify-between px-5 absolute w-full">
              {/* Previous Button */}
              <button
                onClick={prevSlide}
                className=" left-5 top-1/2 -translate-y-1/2 bg-black/10 cursor-pointer text-white px-4 py-2 rounded"
              >
                <CircleArrowLeft />
              </button>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className=" right-5 top-1/2 -translate-y-1/2 bg-black/10 cursor-pointer text-white px-4 py-2 rounded"
              >
                <CircleArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
