"use client";

import React from "react";
import Swal from "sweetalert2";
import { useCart } from "../hooks/useCart";
import { ArchiveX } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type CardModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CardModal = ({ isOpen, onClose }: CardModalProps) => {
  const { cartItems, removeFromCart } = useCart();

  if (!isOpen) return null;

  const handleDeleteCartItem = (id: string) => {
    removeFromCart(id);

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Item removed from cart",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const totalPrice = cartItems.reduce((total, item) => {
    const price = item.discountPrice ?? item.price ?? 0;
    const quantity = item.quantity ?? 1;
    return total + price * quantity;
  }, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>

      {/* modal */}
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-xl max-h-[80vh] overflow-y-auto">
        <button className="absolute top-2 right-3 text-xl" onClick={onClose}>
          ✕
        </button>

        <h2 className="text-xl font-bold mb-3">
          Cart Items ({cartItems.length})
        </h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">No cart items yet.</p>
        ) : (
          <ul className="space-y-3">
            {cartItems.map((item) => {
              //   const price = item.discountPrice ?? 0;
              //   const quantity = item.quantity ?? 1;
              //   const subtotal = price * quantity;

              return (
                <li
                  key={item.id}
                  className="flex items-center justify-between border-b border-gray-200 pb-2"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={item?.variants?.[0]?.image || "/placeholder.png"}
                      alt={item.name}
                      width={50}
                      height={50}
                      className="rounded-md object-cover"
                    />

                    <div>
                      <Link
                        href={`/ProductDetails/${item.id}`}
                        className="text-blue-700 hover:underline font-medium"
                      >
                        {item.name}
                      </Link>

                      <p className="text-sm text-gray-600">
                        $
                        {item.discountPrice?.toFixed(2) ||
                          item.price?.toFixed(2)}{" "}
                        *{item.quantity ?? 1} p =
                        <span className="font-semibold">
                          $
                          {(
                            (item.discountPrice ?? item.price ?? 0) *
                            (item.quantity || 1)
                          ).toFixed(2)}
                        </span>
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDeleteCartItem(item.id)}
                    className="text-red-500 hover:text-red-700 cursor-pointer"
                  >
                    <ArchiveX size={20} />
                  </button>
                </li>
              );
            })}
          </ul>
        )}

        {/* total */}
        {cartItems.length > 0 && (
          <div className="mt-5 border-t pt-3">
            <h1 className="text-lg font-semibold">
              Total Price: ${totalPrice.toFixed(2)}
            </h1>

            <button className="mt-3 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardModal;
