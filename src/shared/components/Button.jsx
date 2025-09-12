// src/shared/components/Button.jsx
import React from "react";
import { cn } from "../../shared/utils/cn"; // optional helper for class merging if you want

export default function Button({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  variant = "solid", // "solid" | "outline" | "text"
  color = "primary-blue", // "blue" | "red" | "green" | "gray"
  icon: Icon, // pass lucide-react or any icon component
  iconOnly = false, // new prop
  iconPosition = "left", // "left" | "right"
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center px-4 py-2 rounded font-600 text-size-title-h3-14 transition-colors duration-200 focus:outline-none";

  const sizeClasses = iconOnly
    ? "p-2" // square button, just icon
    : "px-4 py-2"; // normal button
  const variantClasses = {
    "primary-blue": {
      solid:
        "bg-primary-blue rounded-md cursor-pointer text-white tracking-wider font-semibold outline-none border-none shadow-md shadow-primary-blue hover:shadow-sm active:shadow-inner transition",

      outline:
        "bg-white rounded-md cursor-pointer text-primary-blue tracking-wider font-semibold outline-none border border-primary-blue shadow-sm hover:shadow-primary-blue hover:shadow-sm active:shadow-inner transiton",

      text: "text-primary-blue cursor-pointer",
    },
  };

  const colorVariants = variantClasses[color]?.[variant] || "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        baseClasses,
        colorVariants,
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      {...props}
    >
      {Icon && <Icon className="w-5 h-5 mr-1" />}
      {!iconOnly && children}
    </button>
  );
}
