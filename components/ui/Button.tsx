import React from "react";
import { cn } from "@/lib/utils/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-label text-label-md font-bold uppercase tracking-wider rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-secondary-container text-on-secondary-container hover:bg-secondary-bright shadow-sm active:scale-[0.98]",
      secondary:
        "bg-primary-container text-on-primary-container hover:bg-primary-bright shadow-sm active:scale-[0.98]",
      outline:
        "bg-surface-container-high text-primary border border-outline-variant hover:bg-surface-bright active:scale-[0.98]",
      ghost:
        "bg-transparent text-on-surface hover:text-primary hover:bg-surface-container-high",
    };

    const sizes = {
      sm: "px-space-sm py-space-xs text-label-sm",
      md: "px-space-md py-space-sm text-label-md",
      lg: "px-space-lg py-space-md text-label-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
