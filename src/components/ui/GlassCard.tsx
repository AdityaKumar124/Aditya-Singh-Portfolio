import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glow?: "blue" | "cyan" | "violet" | "none";
  interactive?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  glow = "none",
  interactive = false,
  ...props
}) => {
  const glowStyles = {
    none: "border-slate-800/80 shadow-lg shadow-black/40",
    blue: "border-cyber-blue/30 shadow-lg shadow-cyber-blue/10 hover:border-cyber-blue/60",
    cyan: "border-cyber-cyan/30 shadow-lg shadow-cyber-cyan/10 hover:border-cyber-cyan/60",
    violet: "border-cyber-violet/30 shadow-lg shadow-cyber-violet/10 hover:border-cyber-violet/60",
  };

  return (
    <div
      className={cn(
        "relative rounded-2xl bg-slate-950/70 backdrop-blur-xl border p-6 transition-all duration-300",
        glowStyles[glow],
        interactive &&
          "hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyber-blue/20 cursor-pointer group",
        className
      )}
      {...props}
    >
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden pointer-events-none rounded-tr-2xl">
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyber-cyan/40" />
      </div>
      <div className="absolute bottom-0 left-0 w-12 h-12 overflow-hidden pointer-events-none rounded-bl-2xl">
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyber-blue/40" />
      </div>
      {children}
    </div>
  );
};
