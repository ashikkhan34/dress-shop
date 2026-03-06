"use client";

import { useParams } from "next/navigation";
import { products } from "@/api/products";
import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/app/hooks/useCart";
import type { ProductsType } from "@/types/ProductsType";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === id);

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0]);

  const [selectedSize, setSelectedSize] = useState(product?.variants[0]?.size);

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <p>Product Not Found</p>;
  }

  const totalPrice = (product?.discountPrice || 0) * quantity;

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
      price: product.discountPrice,
      image: selectedVariant?.image,
      color: selectedVariant?.color,
      size: selectedSize,
      quantity: quantity,
    };

    addToCart(cartItem);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        {/* IMAGE */}
        <div>
          <div className="relative w-full h-[450px] border rounded-xl overflow-hidden">
            <Image
              src={selectedVariant?.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* PRODUCT INFO */}
        <div>
          <h1 className="text-3xl font-bold mb-3">{product.name}</h1>

          <p className="text-gray-500 mb-3">Brand: {product.brand}</p>

          <p className="mb-4">
            ⭐ {product.rating} ({product.reviewCount} reviews)
          </p>

          {/* PRICE */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-2xl font-bold text-red-500">
              ৳{totalPrice}
            </span>

            <span className="line-through text-gray-400">৳{product.price}</span>
          </div>

          {/* COLOR */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Color</h3>

            <div className="flex gap-3 flex-wrap">
              {product.variants.map((variant, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedVariant(variant);
                    setSelectedSize(variant.size);
                  }}
                  className={`px-4 py-2 border rounded-lg
                    ${
                      selectedVariant?.color === variant.color
                        ? "bg-black text-white"
                        : ""
                    }`}
                >
                  {variant.color}
                </button>
              ))}
            </div>
          </div>

          {/* SIZE */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Size</h3>

            <div className="flex gap-3">
              {product.variants.map((variant, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSize(variant.size)}
                  className={`px-4 py-2 border rounded-lg
                    ${
                      selectedSize === variant.size ? "bg-black text-white" : ""
                    }`}
                >
                  {variant.size}
                </button>
              ))}
            </div>
          </div>

          {/* QUANTITY */}
          <div className="flex items-center gap-4 mb-6">
            <button onClick={decreaseQty} className="border px-4 py-2 rounded">
              -
            </button>

            <span className="text-lg font-semibold">{quantity}</span>

            <button onClick={increaseQty} className="border px-4 py-2 rounded">
              +
            </button>
          </div>

          {/* ADD TO CART */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
