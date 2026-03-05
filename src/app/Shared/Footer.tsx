"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Dressify</h2>
            <p className="text-sm leading-relaxed">
              Discover elegance and modern fashion for every occasion. We bring
              premium quality dresses crafted with love.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <Facebook className="hover:text-white cursor-pointer transition" />
              <Instagram className="hover:text-white cursor-pointer transition" />
              <Twitter className="hover:text-white cursor-pointer transition" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/shop">Shop</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Categories
            </h3>
            <ul className="space-y-3 text-sm">
              <li>Casual Dresses</li>
              <li>Formal Dresses</li>
              <li>Party Wear</li>
              <li>Summer Collection</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>Kaliganj, Bangladesh</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+880 1234 567 890</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>support@dressify.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6 text-center text-sm">
        © {new Date().getFullYear()} Dressify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
