"use client";

import { CategoryType } from "@/types/CategoryType";
import { categories } from "@/api/categories";
import type { JSX } from "react";
import Link from "next/link";

const Category = (): JSX.Element => {
  const categoryList: CategoryType[] = categories;

  return (
    <div className="-mt-25 mb-10  relative">
      {categoryList.length > 0 ? (
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-4 md:gap-8">
          {categoryList.map((category: CategoryType) => (
            <div
              key={category.id}
              className="relative group rounded overflow-hidden cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 bg-cover  transition-transform duration-300 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-black text-xl font-semibold">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No categories available.</p>
      )}
    </div>
  );
};

export default Category;
