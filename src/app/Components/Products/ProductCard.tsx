import { useFavorite } from "@/app/hooks/useFavorite";
import type { ProductsType } from "@/types/ProductsType";
import { DecimalsArrowRight, MessageCircleHeart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";

type ProductCardProps = { product: ProductsType };

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToFavorite, removeFromFavorite, favorites } = useFavorite();
  const isFavorite = favorites.some((item) => item.id === product.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorite(product.id);

      Swal.fire({
        position: "top-end",
        icon: "info",
        title: "Removed from Favorite",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      addToFavorite(product);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Added to Favorite",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div key={product.id} className="rounded p-4 shadow relative">
      <Image
        src={product?.variants?.[0]?.image || "/default-image.jpg"}
        alt={product.name}
        width={400} // Adjust based on design
        height={192} // h-48 = 192px
        className="w-full h-48 bg-cover mb-2 transition-transform duration-300 hover:scale-105 rounded"
      />
      <div className="absolute inset-0 flex justify-end opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="bottom-4">
          <button
            onClick={toggleFavorite}
            className={`bg-black/30 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors ml-2 ${
              isFavorite ? "bg-red-500 text-white" : ""
            }`}
          >
            {isFavorite ? <MessageCircleHeart /> : <MessageCircleHeart />}
          </button>
          <Link href={`/ProductDetails/${product.id}`}>
            <button className="bg-black/30 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors ml-2">
              <DecimalsArrowRight />
            </button>
          </Link>
        </div>
      </div>
      <h3 className="font-medium flex justify-between items-center ">
        <p>{product.name}</p>
        <p className="text-sm text-gray-500">⭐{product.rating}</p>
      </h3>
      <p className="text-sm text-gray-500">
        ৳ {product.price}{" "}
        <span className="line-through text-gray-400 ml-2">
          {product.discountPrice}
        </span>
      </p>
    </div>
  );
};
