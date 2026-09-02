"use client";

import { ReactNode } from "react";

type Variant = "primary" | "ghost" | "secondary";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  className?: string;
  onClick?: () => void;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-[#687838] text-white hover:bg-[#515E2C] shadow-sm hover:shadow-md font-semibold active:scale-[0.98] transition-all",
  ghost:
    "bg-white text-[#182012] border border-[#E4E4E4] hover:bg-[#F0F0F0] hover:border-[#C3D2A3] shadow-2xs font-medium active:scale-[0.98] transition-all",
  secondary:
    "bg-[#F0F0F0] text-[#182012] border border-[#DBE4C7] hover:bg-[#EDF2E2] font-semibold active:scale-[0.98] transition-all",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-3.5 py-1.5 text-xs md:text-sm rounded-lg",
  md: "px-5 py-2.5 text-sm rounded-xl",
  lg: "px-7 py-3.5 text-sm md:text-base rounded-xl",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 transition-all duration-200 ease-out cursor-pointer ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
