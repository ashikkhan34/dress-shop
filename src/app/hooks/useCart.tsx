"use client";
import type { ProductsType } from "@/types/ProductsType";
import { createContext, useContext, useState, type ReactNode } from "react";

type CartItemType = {
  cartItems: ProductsType[];
  addToCart: (product: ProductsType) => void;
  removeFromCart: (id: string) => void;
};

const CartContext = createContext<CartItemType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<ProductsType[]>([]);

  const addToCart = (product: ProductsType) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
