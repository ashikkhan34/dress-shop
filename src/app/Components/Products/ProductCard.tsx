import { useFavorite } from "@/app/hooks/useFavorite";
import type { ProductsType } from "@/types/ProductsType";
import { DecimalsArrowRight, MessageCircleHeart } from "lucide-react";

type ProductCardProps = { product: ProductsType };

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToFavorite, removeFromFavorite, favorites } = useFavorite();
  const isFavorite = favorites.some((item) => item.id === product.id);

  const toggleFavorite = () => {
    if (isFavorite) removeFromFavorite(product.id);
    else addToFavorite(product);
  };

  return (
    <div key={product.id} className="rounded p-4 shadow relative">
      <img
        src={product.variants[0]?.image || "/default-image.jpg"}
        alt={product.name}
        className="w-full h-48 bg-cover mb-2 transition-transform duration-300 hover:scale-105  rounded"
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
          <button className="bg-black/30 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors ml-2">
            <DecimalsArrowRight />
          </button>
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
