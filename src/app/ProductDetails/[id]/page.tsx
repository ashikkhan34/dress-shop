"use client";

import { useParams } from "next/navigation";
import { products } from "@/api/products";
import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/app/hooks/useCart";
import type { ProductsType, ProductVariant } from "@/types/ProductsType";
import Swal from "sweetalert2";
import { useFavorite } from "@/app/hooks/useFavorite";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { favorites, addToFavorite } = useFavorite();

  const product = products.find((p) => p.id === id);

  const [selectedVariant, setSelectedVariant] = useState<
    ProductVariant | undefined
  >(product?.variants?.[0]);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product?.variants?.[0]?.size,
  );
  const [quantity, setQuantity] = useState<number>(1);

  if (!product) {
    return <p>Product Not Found</p>;
  }

  const totalPrice = (product?.discountPrice || product?.price || 0) * quantity;

  // quantity functions
  const increaseQty = () => {
    if (quantity < product.stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  // ADD TO CART FUNCTION
  const handleAddToCart = () => {
    const cartItem: ProductsType = {
      id: product.id,
      name: product.name,
      slug: product.slug,
      description: product.description,
      price: product.price,
      discountPrice: product.discountPrice,
      category: product.category,
      brand: product.brand,
      stock: product.stock,
      rating: product.rating,
      reviewCount: product.reviewCount,
      isFeatured: product.isFeatured,

      quantity: quantity || 1,

      variants: [
        {
          color: selectedVariant?.color || "",
          size: selectedSize || "",
          image: selectedVariant?.image,
        },
      ],
    };

    addToCart(cartItem);

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Product added to cart",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleAddtoFavorite = () => {
    const cartItem: ProductsType = {
      id: product.id,
      name: product.name,
      slug: product.slug,
      description: product.description,
      price: product.price,
      discountPrice: product.discountPrice,
      category: product.category,
      brand: product.brand,
      stock: product.stock,
      rating: product.rating,
      reviewCount: product.reviewCount,
      isFeatured: product.isFeatured,
      variants: product.variants,
      quantity: quantity,
    };
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your item has been added to favorites",
      showConfirmButton: false,
      timer: 1500,
    });
    addToFavorite(cartItem);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* IMAGE SECTION */}
        <div className="w-full">
          <div className="relative w-full h-[320px] sm:h-[400px] md:h-[450px] rounded-xl overflow-hidden">
            <Image
              src={selectedVariant?.image || ""}
              alt={product.name}
              fill
              className="bg-cover"
            />
          </div>

          {/* COLOR */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Color</h3>

            <div className="flex gap-3 flex-wrap">
              {product?.variants?.map((variant, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedVariant(variant);
                    setSelectedSize(variant.size);
                  }}
                  className={`px-4 py-2 border rounded-lg text-sm
              ${
                selectedVariant?.color === variant.color
                  ? "bg-black text-white"
                  : "bg-white"
              }`}
                >
                  {variant.color}
                </button>
              ))}
            </div>
          </div>

          <p className="mt-4 text-gray-600">{product.description}</p>
        </div>

        {/* PRODUCT INFO */}
        <div className="w-full">
          <h1 className="text-2xl md:text-3xl font-bold mb-3">
            {product.name}
          </h1>

          <p className="text-gray-500 mb-3">Brand: {product.brand}</p>

          <p className="mb-4 text-sm md:text-base">
            ⭐ {product.rating} ({product.reviewCount} reviews)
          </p>

          {/* PRICE */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-2xl font-bold text-red-500">
              ৳{totalPrice}
            </span>

            <span className="line-through text-gray-400">৳{product.price}</span>
          </div>

          {/* SIZE */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Size</h3>

            <div className="flex gap-3 flex-wrap">
              {product?.variants?.map((variant, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSize(variant.size)}
                  className={`px-4 py-2 border rounded-lg text-sm
              ${selectedSize === variant.size ? "bg-black text-white" : ""}`}
                >
                  {variant.size}
                </button>
              ))}
            </div>
          </div>

          {/* QUANTITY */}
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={decreaseQty}
              className="border px-4 py-2 rounded hover:bg-gray-100"
            >
              -
            </button>

            <span className="text-lg font-semibold">{quantity}</span>

            <button
              onClick={increaseQty}
              className="border px-4 py-2 rounded hover:bg-gray-100"
            >
              +
            </button>
          </div>

          {/* ADD TO CART */}
          <div className="flex flex-col md:flex-row gap-4">
            <button
              onClick={handleAddToCart}
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Add To Cart
            </button>
            <button
              onClick={handleAddtoFavorite}
              className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition mt-4"
            >
              Add to Favorites
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
