import React from "react";
import img from "../../asset/section-bgimage1.webp";
import Image from "next/image";
const Hero_tow = () => {
  return (
    <div className="relative mt-10">
      <Image
        src={img}
        alt="Hero image"
        width={1200}
        height={600}
        className="bg-cover w-full"
      />
      <div className="absolute inset-0  flex items-center justify-end pr-10">
        <div className="md:space-y-4 text-left">
          <h2 className="text-gray-300  text-sm md:text-xl font-bold">
            Big Sale Upto 30% off
          </h2>
          <h1 className="text-white text-2xl md:text-4xl font-semibold">
            Shop For Great Selection Of T-Shirts
          </h1>
          <button className=" bg-indigo-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-indigo-900 cursor-pointer transition-colors duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero_tow;
