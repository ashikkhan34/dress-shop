"use client";

import { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* overlay */}
      <div onClick={onClose} className="absolute inset-0 bg-black/50"></div>

      {/* modal content */}
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md">
        <button onClick={onClose} className="absolute top-2 right-3 text-xl">
          ✕
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
