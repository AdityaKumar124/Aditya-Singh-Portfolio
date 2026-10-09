import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "cyan" | "violet" | "emerald" | "slate";
  size?: "sm" | "md";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "blue",
  size = "md",
  className,
}) => {
  const variantStyles = {
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    cyan: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    violet: "bg-purple-500/10 text-purple-300 border-purple-500/30",
    emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
    slate: "bg-slate-800/60 text-slate-300 border-slate-700/60",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-xs sm:text-sm",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border font-mono font-medium backdrop-blur-sm transition-all duration-200",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
};
