"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../asset/logo.png";
import { usePathname } from "next/navigation";
import { Heart, Menu, ShoppingCart, X } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Men", href: "/men" },
  { name: "Women", href: "/women" },
  { name: "Kids", href: "/kids" },
];

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const pathName = usePathname();
  return (
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
                0
              </div>
              <button>
                <Heart className="text-red-500" />
              </button>
            </div>
            <div className="relative">
              <div className="absolute -top-2 -right-2 bg-red-100 text-black rounded-full w-5 h-5 flex items-center justify-center text-xs">
                0
              </div>
              <button>
                <ShoppingCart />
              </button>
            </div>
            <button className="px-4 py-1 hover:border-blue-700 hover:border-2 border border-blue-300 rounded-md">
              Login
            </button>

            {/* mobile menu button */}
            <button
              className="pointer md:hidden"
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
  );
};

export default Navbar;
