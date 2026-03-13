"use client";
import React, { useState } from "react";
import banner from "../../../asset/ban.jpg";
import logo from "../../../asset/logo.jpg";
import Image from "next/image";
import { categories } from "@/api/categories";
import type { CategoryType } from "@/types/CategoryType";
import { products } from "@/api/products";
import type { ProductsType } from "@/types/ProductsType";
import { ArrowDown10, Dessert } from "lucide-react";
import { ProductCard } from "@/app/Components/Products/ProductCard";

const Page = () => {
  const categoryList: CategoryType[] = categories;
  const productList: ProductsType[] = products;
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchDress, setSearchDress] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [priceRange, setPriceRange] = useState<number>(100);

  const filteredProducts =
    selectedCategory === "all"
      ? productList
      : productList.filter((product) => product.category === selectedCategory);

  const searchedProducts = filteredProducts.filter((product) =>
    product.name.toLowerCase().includes(searchDress.toLowerCase()),
  );

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4  mb-6   max-w-7xl mx-auto">
        <div className="w-64 shadow p-4">
          <div className="flex items-center gap-2 justify-between px-3 max-w-md mb-4">
            <Image src={logo} alt="Logo" className="w-20  h-20" />
            <button className="px-4 py-2 rounded bg-gray-200 flex items-center gap-1 cursor-pointer hover:bg-gray-300">
              <ArrowDown10 />
            </button>
          </div>
          <input type="range" name="" id="" />

          <h1 className="text-lg font-bold py-8 text-center">Categories</h1>
          <div>
            <button
              className={`px-4 flex items-center gap-2 py-2 justify-evenly w-full rounded cursor-pointer ${selectedCategory === "all" ? " border-red-600  border-2" : "border-gray-200 border-2"}`}
              onClick={() => setSelectedCategory("all")}
            >
              <Dessert /> All
            </button>
            <ul className="flex flex-col gap-2 mt-4">
              {categoryList.map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => setSelectedCategory(category.slug)}
                    className={`px-4 flex items-center gap-2 py-2 justify-evenly w-full rounded cursor-pointer ${selectedCategory === category.slug ? " border-red-600  border-2" : "border-gray-200 border-2"}`}
                  >
                    <span>
                      <img
                        src={category.image}
                        alt={category.slug}
                        className="w-10 rounded-md"
                      />
                    </span>{" "}
                    {category.slug}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full  bg-gray-100 shadow p-4">
          <div className="relative">
            <Image src={banner} alt="Banner" className="w-full h-60 " />
            <div className="absolute inset-0  ">
              <div className="mt-10 ml-20">
                <h1 className="text-4xl font-extrabold text-gray-200">
                  Super Sale
                </h1>
                <h2 className="text-2xl font-bold text-gray-200">
                  Up to{" "}
                  <span className="text-4xl font-extrabold text-green-600">
                    50%
                  </span>{" "}
                  Off
                </h2>
                <p className="text-gray-600 ">
                  Discover the latest trends and bestsellers at incredible
                  prices.
                </p>
                <input
                  type="search"
                  value={searchDress}
                  onChange={(e) => setSearchDress(e.target.value)}
                  placeholder="Search your Favorite Dress by Name"
                  name=""
                  className="border border-blue-700 w-2/3 mt-4 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id=""
                />
              </div>
            </div>
            <div>
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <p className="text-gray-600">No products found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
