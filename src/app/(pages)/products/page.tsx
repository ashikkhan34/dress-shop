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
  console.log("productList", productList);

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchDress, setSearchDress] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [priceRange, setPriceRange] = useState<number>(5000);
  const [open, setOpen] = useState<boolean>(false);

  const finalProducts = productList
    // category filter
    .filter(
      (product) =>
        selectedCategory === "all" || product.category === selectedCategory,
    )

    // search filter
    .filter((product) =>
      product.name.toLowerCase().includes(searchDress.toLowerCase()),
    )

    // price filter
    .filter((product) => (product.discountPrice ?? product.price) <= priceRange)

    // sort
    .sort((a, b) => {
      const priceA = a.discountPrice ?? a.price;
      const priceB = b.discountPrice ?? b.price;

      if (sortOrder === "lowToHigh") return priceA - priceB;
      if (sortOrder === "highToLow") return priceB - priceA;

      return 0;
    });
  console.log("finalProducts", finalProducts);

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 mb-6 max-w-7xl mx-auto">
        <div className="md:w-64 w-full shadow p-4">
          <div className="flex items-center gap-2 justify-between px-3 max-w-md mb-4">
            <Image src={logo} alt="Logo" className="w-20 h-20" />

            {/* SORT BUTTON */}
            <div className="relative">
              {/* SORT ICON */}
              <button
                onClick={() => setOpen(!open)}
                className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 cursor-pointer"
              >
                <ArrowDown10 />
              </button>

              {/* DROPDOWN */}
              {open && (
                <div className="absolute transition-transform duration-1000 ease-in-out right-0 mt-2 w-44 bg-white border rounded-md shadow-lg z-50">
                  <button
                    onClick={() => {
                      setSortOrder("lowToHigh");
                      setOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Price Low → High
                  </button>

                  <button
                    onClick={() => {
                      setSortOrder("highToLow");
                      setOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Price High → Low
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* PRICE RANGE */}
          <input
            type="range"
            min={0}
            max={5000}
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full"
          />

          <p className="text-sm mt-2 text-center">Max Price: {priceRange}</p>

          <h1 className="text-lg font-bold md:py-8 text-center">Categories</h1>

          <div className="flex md:flex-col sm:flex-row gap-4">
            <button
              className={`px-4 flex items-center gap-2 md:py-2 py-0 justify-evenly  rounded cursor-pointer ${
                selectedCategory === "all"
                  ? "border-red-600 border-2"
                  : "border-gray-200 border-2"
              }`}
              onClick={() => setSelectedCategory("all")}
            >
              <Dessert className="hidden md:block" /> All
            </button>

            <ul className=" space-y-4 gap-2 mt-4 flex md:flex-col sm:flex-row">
              {categoryList.map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => setSelectedCategory(category?.slug || "all")}
                    className={`px-4 flex items-center gap-2 py-2 justify-evenly w-full rounded cursor-pointer ${
                      selectedCategory === category?.slug
                        ? "border-red-600 border-2"
                        : "border-gray-200 border-2"
                    }`}
                  >
                    <span>
                      <img
                        src={category.image}
                        alt={category.slug}
                        className="w-10 rounded-md hidden md:block"
                      />
                    </span>
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full bg-gray-100 shadow p-4">
          <div className="relative">
            <Image src={banner} alt="Banner" className="w-full h-60" />

            <div className="absolute inset-0">
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

                <p className="text-gray-600">
                  Discover the latest trends and bestsellers at incredible
                  prices.
                </p>

                {/* SEARCH */}
                <input
                  type="search"
                  value={searchDress}
                  onChange={(e) => setSearchDress(e.target.value)}
                  placeholder="Search your Favorite Dress by Name"
                  className="border border-blue-700 w-2/3 mt-4 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* PRODUCTS */}
            <div>
              {finalProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
                  {finalProducts?.map((product) => (
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
