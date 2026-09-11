import React from "react";
import { cn } from "@/lib/utils/cn";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary" | "outline";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "primary",
  className,
}) => {
  const baseStyles =
    "inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full font-label text-label-md tracking-wider uppercase shadow-sm";

  const variants = {
    primary: "bg-surface-container-high text-primary",
    secondary: "bg-secondary-container text-on-secondary-container font-bold",
    tertiary: "bg-surface-container text-tertiary",
    outline: "bg-transparent border border-outline-variant text-on-surface-variant",
  };

  return <span className={cn(baseStyles, variants[variant], className)}>{children}</span>;
};
