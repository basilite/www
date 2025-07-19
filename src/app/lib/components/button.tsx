import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  outline?: boolean;
}

export default function Button({
  variant = "primary",
  size = "md",
  outline = false,
  disabled = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  let sizeClass = "";
  if (size === "sm") sizeClass = "px-3 py-1 text-sm";
  if (size === "md") sizeClass = "px-5 py-2 text-base";
  if (size === "lg") sizeClass = "px-6 py-3 text-lg";

  let variantClass = "";
  if (variant === "primary") {
    variantClass = outline
      ? "border border-black text-black bg-transparent hover:bg-black hover:text-white"
      : "bg-black text-white hover:bg-gray-800";
  } else if (variant === "secondary") {
    variantClass = outline
      ? "border border-gray-700 text-gray-700 bg-transparent hover:bg-gray-700 hover:text-white"
      : "bg-gray-200 text-gray-800 hover:bg-gray-300";
  }

  const disabledClass = disabled ? "opacity-50 pointer-events-none" : "";

  const finalClassName = `cursor-pointer rounded-full transition focus:outline-none ${sizeClass} ${variantClass} ${disabledClass} ${className}`;

  return (
    <button className={finalClassName} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
