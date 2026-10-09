import React from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
}) => {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        align === "center" ? "text-center mx-auto max-w-3xl" : "text-left max-w-2xl"
      }`}
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-blue/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono uppercase tracking-widest mb-4 backdrop-blur-md">
        <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-ping" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
        {title.split("\n").map((line, idx) => (
          <span key={idx} className="block">
            {line}
          </span>
        ))}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
};
