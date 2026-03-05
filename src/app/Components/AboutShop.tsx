"use client";

import React from "react";
import Image from "next/image";
import shop1 from "../../asset/shop1 (1).jpg";
import shop2 from "../../asset/shop1 (2).jpg";

const AboutShop = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold">About Our Shop</h1>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Discover elegance, style, and comfort in every piece we offer.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-16">
        {/* Image Section */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          {/* Main Image */}
          <Image
            src={shop1}
            alt="Main Shop"
            width={500}
            height={350}
            className="rounded-2xl shadow-xl object-cover w-[80%] md:w-[70%]"
          />

          {/* Floating Image */}
          <Image
            src={shop2}
            alt="Secondary Shop"
            width={350}
            height={220}
            className="absolute 
                       bottom-0 right-6
                       translate-y-1/4
                       rounded-2xl shadow-2xl
                       border-8 border-white
                       w-[60%] md:w-[50%]"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold">
            We Bring Fashion To Life
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Welcome to our shop! We are dedicated to providing the latest and
            most stylish dresses for every occasion.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Our collection ranges from casual wear to elegant formal outfits,
            ensuring you find the perfect look for any event.
          </p>

          <p className="text-gray-600 leading-relaxed">
            We pride ourselves on exceptional customer service and premium
            quality products tailored to your style.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300 shadow-md">
              Learn More
            </button>

            <button className="px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutShop;
