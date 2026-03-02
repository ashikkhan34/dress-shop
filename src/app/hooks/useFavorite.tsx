"use client";

import { useContext, useState, ReactNode, createContext } from "react";
import type { ProductsType } from "@/types/ProductsType";

type FavoriteContextType = {
  favorites: ProductsType[];
  addToFavorite: (product: ProductsType) => void;
  removeFromFavorite: (id: string) => void;
};

// এখানে undefined দিয়ে declare করো, না force না করা
const FavoriteContext = createContext<FavoriteContextType | undefined>(
  undefined,
);

export const FavoriteProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<ProductsType[]>([]);

  const addToFavorite = (product: ProductsType) => {
    setFavorites((prev) =>
      prev.some((item) => item.id === product.id) ? prev : [...prev, product],
    );
  };

  const removeFromFavorite = (id: string) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  // context value explicitly declare
  const value: FavoriteContextType = {
    favorites,
    addToFavorite,
    removeFromFavorite,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorite = () => {
  const context = useContext(FavoriteContext);
  if (!context)
    throw new Error("useFavorite must be used inside FavoriteProvider");
  return context;
};
