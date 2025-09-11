import React from "react";

export default function Modal({ isOpen, onClose, children, location }) {
  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center ${
        location === "justify-center" ? "justify-center" : "justify-end"
      } bg-black/30 backdrop-blur-sm z-50`}
    >
      <div className="bg-white h-full w-1/4 max-w-md shadow-lg overflow-y-auto">
        <div className="p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl z-10"
          >
            ✖
          </button>
          {children}
        </div>
      </div>
    </div>
  );
}
