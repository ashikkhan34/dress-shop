"use client";

import { categories } from "@/api/categories";
import { products } from "@/api/products";
import type { CategoryType } from "@/types/CategoryType";
import type { ProductsType } from "@/types/ProductsType";
import { DecimalsArrowRight, MessageCircleHeart } from "lucide-react";
import { useState } from "react";
import { ProductCard } from "./ProductCard";

export const Products = () => {
  const categoryList: CategoryType[] = categories;
  const productList: ProductsType[] = products;

  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredProducts =
    selectedCategory === "all"
      ? productList
      : productList.filter((product) => product.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Clothes & Accessories
      </h1>

      {/* Category Filter */}
      <div className="flex gap-4 justify-center mb-6 flex-wrap">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-4  rounded cursor-pointer ${
            selectedCategory === "all"
              ? " border-red-600  border-2"
              : "border-gray-200 border-2"
          }`}
        >
          All
        </button>

        {categoryList.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.slug)}
            className={`px-4 rounded cursor-pointer ${
              selectedCategory === category.slug
                ? " border-red-600  border-2"
                : "border-gray-200 border-2"
            }`}
          >
            {category.slug}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
