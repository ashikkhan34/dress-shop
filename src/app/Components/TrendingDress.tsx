"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { trendingDresses } from "@/api/TrendingDrees";

const TrendingDress = () => {
  return (
    <div className="max-w-7xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6 p-4">Trending Dresses</h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          480: { slidesPerView: 1 },
        }}
      >
        {trendingDresses.map((dress) => (
          <SwiperSlide key={dress.id}>
            <div className="  relative group">
              <img
                src={dress.image}
                alt={dress.name}
                className="w-full  object-cover rounded-lg"
              />

              <div
                className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center 
                              opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg text-white"
              >
                <h3 className="text-lg font-semibold">{dress.name}</h3>
                <p className="text-xl font-bold">${dress.price.toFixed(2)}</p>
                <p className="text-yellow-400">⭐ {dress.rating}</p>
                <div></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TrendingDress;
