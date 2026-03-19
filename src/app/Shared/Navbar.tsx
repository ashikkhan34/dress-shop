"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../asset/logo.png";
import { usePathname } from "next/navigation";
import { ArchiveX, Heart, LogOut, Menu, ShoppingCart, X } from "lucide-react";
import { useFavorite } from "../hooks/useFavorite";
import { useCart } from "../hooks/useCart";
import Modal from "../Components/FavoriteModal";
import Swal from "sweetalert2";
import type { ProductsType } from "@/types/ProductsType";
import CardModal from "../Components/CardModal";
import { signOut, useSession } from "next-auth/react";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Service", href: "/service" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const pathName = usePathname();
  const { favorites, removeFromFavorite } = useFavorite();
  const { cartItems, removeFromCart, addToCart } = useCart();
  console.log("favorites:", favorites);
  console.log("cartItems:", cartItems);

  const [openCartModal, setOpenCartModal] = useState<boolean>(false);
  const handleOpenCartModal = () => {
    setOpenCartModal(true);
  };

  const handleAddToCart = (item: ProductsType) => {
    addToCart(item);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your item has been added to the cart",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const handleDeleteFavorite = (id: string) => {
    removeFromFavorite(id);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your item has been removed from favorites",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const { data: session } = useSession();
  console.log("GitHub Session:", session);

  return (
    <>
      <header className=" sticky top-0 z-50 bg-gray-200/50 shadow-md ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between h-16">
            {/* logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={logo}
                alt="DressShop Logo"
                width={100}
                height={40}
                className="h-10 w-10 bg-cover rounded-md"
              />
              <span className=" hidden md:block text-xl font-bold text-blue-700">
                Dress<span className="text-fuchsia-700">Shop</span>
              </span>
            </Link>

            {/* desktop nav */}
            <ul className="hidden md:flex gap-4">
              {navItems.map((item) => {
                const isActive = pathName === item.href;

                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`rounded-md px-3 py-2
                      ${
                        isActive
                          ? "text-red-700 font-bold"
                          : "text-black hover:text-blue-700"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-4 ">
              <div className="relative">
                <div className="absolute -top-3 -right-3 bg-red-100 text-black rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {favorites.length}
                </div>
                <button onClick={() => setOpenModal(true)}>
                  <Heart className="text-red-500 cursor-pointer" />
                </button>
              </div>
              <div className="relative">
                <div className="absolute -top-2 -right-2 bg-red-100 text-black rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItems.length}
                </div>
                <button
                  className="cursor-pointer"
                  onClick={handleOpenCartModal}
                >
                  <ShoppingCart />
                </button>
              </div>
              <div>
                {session ? (
                  <span className="text-sm text-gray-700  flex items-center gap-2">
                    {/* {session.user?.name || "User"} */}
                    <img
                      src={session.user?.image || ""}
                      alt={session.user?.name || "User Avatar"}
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                    <button
                      title="Log Out"
                      onClick={() => signOut()}
                      className="px-4 py-1 border-red-700 hover:border-2 border rounded-md cursor-pointer"
                    >
                      <LogOut className="text-red-500" />
                    </button>
                  </span>
                ) : (
                  <Link href="/login">
                    <button className="px-4 py-1 hover:border-blue-700 hover:border-2 border border-blue-300 rounded-md cursor-pointer">
                      Login
                    </button>
                  </Link>
                )}
              </div>

              {/* mobile menu button */}
              <button
                className="cursor-pointer md:hidden"
                onClick={() => setOpen(!open)}
              >
                {open ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* mobile nav */}
        <div
          className={`md:hidden fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 inset-0 bg-purple-500 shadow-lg
  transform transition-transform duration-300 ease-in-out
  ${open ? "translate-x-0" : "-translate-x-full"}`}
        >
          <ul className="space-y-1 px-4 py-3">
            {navItems.map((item) => {
              const isActive = pathName === item.href;

              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-md px-3 py-2 text-sm font-medium
              ${
                isActive
                  ? "bg-gray-900 text-white"
                  : "text-gray-200 hover:bg-gray-700"
              }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </header>

      {/* favorite modal */}
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <h2 className="text-xl font-bold mb-3">
          Favorite Items ({favorites.length})
        </h2>
        {favorites.length === 0 ? (
          <p className="text-gray-500">No favorite items yet.</p>
        ) : (
          <ul className="space-y-2">
            {favorites.map((item) => (
              <li key={item.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src={item?.variants?.[0]?.image || ""}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-md"
                  />
                  <Link
                    href={`/ProductDetails/${item.id}`}
                    className="text-blue-700 hover:underline"
                  >
                    {item.name}
                  </Link>
                </div>
                <div className="flex items-center gap-6">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="cursor-pointer"
                  >
                    <ShoppingCart />
                  </button>
                  <button
                    onClick={() => handleDeleteFavorite(item.id)}
                    className="text-red-500 cursor-pointer hover:text-red-700"
                  >
                    <ArchiveX />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Modal>

      {/* cart modal */}
      <CardModal isOpen={openCartModal} onClose={() => setOpenCartModal(false)}>
        {/* Cart content will be rendered inside CardModal */}
      </CardModal>
    </>
  );
};
export default Navbar;
