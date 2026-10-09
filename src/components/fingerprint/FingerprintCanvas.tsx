"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { FingerprintFallback } from "./FingerprintFallback";

const NeuralFingerprintScene = dynamic(
  () =>
    import("./NeuralFingerprintScene").then(
      (mod) => mod.NeuralFingerprintScene
    ),
  {
    ssr: false,
    loading: () => <FingerprintFallback />,
  }
);

export const FingerprintCanvas: React.FC = () => {
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPrefersReducedMotion(true);
    }
  }, []);

  if (!hasWebGL || prefersReducedMotion) {
    return <FingerprintFallback />;
  }

  return (
    <div className="relative w-full h-[450px] sm:h-[500px] lg:h-[580px] flex items-center justify-center">
      {/* Background Hologram Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full border border-cyber-cyan/15 animate-pulse-slow" />
        <div
          className="absolute w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] rounded-full border border-dashed border-cyber-blue/20 animate-spin"
          style={{ animationDuration: "40s" }}
        />
      </div>

      <NeuralFingerprintScene />

      {/* Biometric signature badge */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-cyber-cyan/20 backdrop-blur-md text-[11px] font-mono text-slate-300">
        <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-ping" />
        <span>PROCEDURAL NEURAL SIGNATURE • LIVE 3D</span>
      </div>
    </div>
  );
};
