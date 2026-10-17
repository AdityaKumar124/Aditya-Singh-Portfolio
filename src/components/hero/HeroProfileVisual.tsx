"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FingerprintCanvas } from "@/components/fingerprint/FingerprintCanvas";
import {
  User,
  Fingerprint,
  ShieldCheck,
  Code2,
  Sparkles,
  MapPin,
  Cpu,
} from "lucide-react";

export const HeroProfileVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"profile" | "neural">("profile");

  return (
    <div className="w-full relative flex flex-col items-center">
      {/* Top Segmented Mode Selector */}
      <div className="mb-4 z-20 flex items-center p-1 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-lg shadow-black/40">
        <button
          onClick={() => setActiveTab("profile")}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-mono text-xs font-semibold transition-all duration-200 ${
            activeTab === "profile"
              ? "bg-gradient-to-r from-cyber-blue/30 to-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan/40 shadow-sm shadow-cyber-cyan/30"
              : "text-slate-400 hover:text-white"
          }`}
        >
          <User className="w-3.5 h-3.5" />
          <span>PROFILE PHOTO</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </button>

        <button
          onClick={() => setActiveTab("neural")}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-mono text-xs font-semibold transition-all duration-200 ${
            activeTab === "neural"
              ? "bg-gradient-to-r from-cyber-blue/30 to-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan/40 shadow-sm shadow-cyber-cyan/30"
              : "text-slate-400 hover:text-white"
          }`}
        >
          <Fingerprint className="w-3.5 h-3.5" />
          <span>3D SIGNATURE</span>
        </button>
      </div>

      {/* Main Container Frame */}
      <div className="w-full relative">
        {/* Outer Biometric HUD corner brackets */}
        <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-cyber-cyan/50 pointer-events-none z-20" />
        <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-cyber-blue/50 pointer-events-none z-20" />
        <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-cyber-blue/50 pointer-events-none z-20" />
        <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-cyber-violet/50 pointer-events-none z-20" />

        {activeTab === "profile" ? (
          <div className="relative w-full max-w-md mx-auto group">
            {/* Ambient Multi-Layer Backlight Glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-cyber-cyan/25 via-cyber-blue/30 to-cyber-violet/25 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 -z-10 animate-pulse-slow" />

            {/* Profile Card Container */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-950/90 border border-cyber-cyan/30 shadow-2xl shadow-cyber-blue/20 backdrop-blur-xl">
              {/* Telemetry Header Bar */}
              <div className="px-4 py-2.5 bg-slate-900/95 border-b border-slate-800 flex items-center justify-between font-mono text-[11px]">
                <div className="flex items-center gap-2 text-cyber-cyan">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  <span className="font-semibold tracking-wider">BIO_ID: ADITYA_KUMAR</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Cpu className="w-3 h-3 text-cyber-blue" />
                  <span className="text-[10px]">VERIFIED // ACTIVE</span>
                </div>
              </div>

              {/* Portrait Image with Overlays */}
              <div className="relative w-full h-[460px] sm:h-[500px] overflow-hidden bg-slate-900 flex items-center justify-center">
                <Image
                  src="/images/profile.jpg"
                  alt="Aditya Kumar - Computer Science Engineer & AI Developer"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 450px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Cyber Scanline Laser Effect */}
                <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyber-cyan to-transparent opacity-80 animate-hud-scan pointer-events-none shadow-[0_0_12px_#00f0ff]" />

                {/* Subtle vignette gradient at bottom for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent pointer-events-none" />

                {/* Floating HUD Chip: Top Left */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950/80 border border-cyber-cyan/40 backdrop-blur-md shadow-md text-[11px] font-mono text-white">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyber-cyan" />
                  <span>Verified Developer</span>
                </div>

                {/* Floating HUD Chip: Top Right */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950/80 border border-slate-700/80 backdrop-blur-md shadow-md text-[11px] font-mono text-slate-200">
                  <Code2 className="w-3.5 h-3.5 text-purple-400" />
                  <span>B.Tech CSE</span>
                </div>

                {/* Center Crosshair Overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-cyber-cyan/15 rounded-full pointer-events-none flex items-center justify-center opacity-40 group-hover:opacity-80 transition-opacity">
                  <div className="w-2 h-0.5 bg-cyber-cyan/40" />
                  <div className="w-0.5 h-2 bg-cyber-cyan/40" />
                </div>

                {/* Bottom Overlay Info Banner */}
                <div className="absolute bottom-3 inset-x-3 p-3.5 rounded-xl bg-slate-950/85 border border-slate-800/80 backdrop-blur-md space-y-1.5 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-base font-bold text-white tracking-wide">
                        Aditya Kumar
                      </h2>
                      <p className="font-mono text-xs text-cyber-cyan flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-cyber-cyan" />
                        Software Engineer & AI Enthusiast
                      </p>
                    </div>

                    <div className="flex items-center gap-1 font-mono text-[10px] text-slate-400 bg-slate-900/90 px-2 py-1 rounded-md border border-slate-800">
                      <MapPin className="w-3 h-3 text-emerald-400" />
                      <span>LPU, India</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-400">STATUS: OPEN FOR ROLES</span>
                    <button
                      onClick={() => setActiveTab("neural")}
                      className="text-cyber-cyan hover:underline flex items-center gap-1 group/btn"
                    >
                      <span>3D Neural View</span>
                      <span className="group-hover/btn:translate-x-0.5 transition-transform">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full">
            <FingerprintCanvas />
          </div>
        )}
      </div>
    </div>
  );
};
