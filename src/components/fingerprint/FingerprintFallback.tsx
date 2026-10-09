"use client";

import React, { useEffect, useRef } from "react";

export const FingerprintFallback: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
    };

    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      time += 0.02;
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const baseRadius = Math.min(width, height) * 0.38;

      // Draw biometric scanning rings
      ctx.lineWidth = 1 * window.devicePixelRatio;
      ctx.strokeStyle = "rgba(0, 240, 255, 0.15)";
      ctx.beginPath();
      ctx.arc(centerX, centerY, baseRadius * 1.15, 0, Math.PI * 2);
      ctx.stroke();

      // Rotating dashed scanner ring
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(time * 0.2);
      ctx.strokeStyle = "rgba(0, 102, 255, 0.3)";
      ctx.setLineDash([12 * window.devicePixelRatio, 16 * window.devicePixelRatio]);
      ctx.beginPath();
      ctx.arc(0, 0, baseRadius * 1.05, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Draw procedural neural fingerprint whorls
      const ridgeCount = 18;
      for (let r = 1; r <= ridgeCount; r++) {
        const radius = (r / ridgeCount) * baseRadius;
        const alpha = 0.25 + (r / ridgeCount) * 0.5;
        const isCyan = r % 3 === 0;

        ctx.strokeStyle = isCyan
          ? `rgba(0, 240, 255, ${alpha})`
          : `rgba(0, 102, 255, ${alpha})`;
        ctx.lineWidth = (1.5 + (r % 2)) * window.devicePixelRatio;
        ctx.beginPath();

        const steps = 100;
        for (let i = 0; i <= steps; i++) {
          const theta = (i / steps) * Math.PI * 2;
          // Mathematical fingerprint ridge perturbation
          const whorlMod = Math.sin(theta * 2 + r * 0.4 + time * 0.5) * 6 * window.devicePixelRatio;
          const archMod = Math.cos(theta * 3 + r * 0.2) * 4 * window.devicePixelRatio;
          const currentRadius = radius + whorlMod + archMod;

          const x = centerX + Math.cos(theta) * currentRadius * 0.75; // slightly elliptical
          const y = centerY + Math.sin(theta) * currentRadius;

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();

        // Traveling neural pulse along the ridge
        const pulseTheta = (time * (0.8 + r * 0.05)) % (Math.PI * 2);
        const pulseRadius = radius + Math.sin(pulseTheta * 2 + r * 0.4 + time * 0.5) * 6 * window.devicePixelRatio;
        const px = centerX + Math.cos(pulseTheta) * pulseRadius * 0.75;
        const py = centerY + Math.sin(pulseTheta) * pulseRadius;

        ctx.fillStyle = isCyan ? "#00f0ff" : "#8b5cf6";
        ctx.shadowColor = isCyan ? "#00f0ff" : "#8b5cf6";
        ctx.shadowBlur = 10 * window.devicePixelRatio;
        ctx.beginPath();
        ctx.arc(px, py, 2.5 * window.devicePixelRatio, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="w-full h-full max-w-[500px] max-h-[500px] object-contain"
        aria-label="Interactive 2D Neural Fingerprint Visualization"
      />
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-16 h-16 rounded-full border border-cyber-cyan/30 flex items-center justify-center bg-cyber-dark/40 backdrop-blur-sm animate-pulse">
          <span className="font-mono text-[10px] text-cyber-cyan tracking-widest uppercase">
            NEURAL
          </span>
        </div>
      </div>
    </div>
  );
};
