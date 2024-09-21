import React from "react";

export default function Button({
  onClick,
  className,
  children,
  type = "button",
}) {
  return (
    <button
      type={type}
      className={`items-center px-5 py-2 mt-auto font-medium text-white  bg-primary ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
