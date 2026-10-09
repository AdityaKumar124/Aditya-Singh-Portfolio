"use client";

import React from "react";
import { personalData } from "@/data/personal";
import { FingerprintCanvas } from "@/components/fingerprint/FingerprintCanvas";
import { ArrowDown, Code2, Sparkles, Send, Eye } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-blue/15 rounded-full filter blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-violet/10 rounded-full filter blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography, Concept, Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6 sm:space-y-8 z-10">
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyber-cyan/30 text-xs font-mono text-cyber-cyan backdrop-blur-md self-start shadow-sm shadow-cyber-cyan/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-cyan opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-cyan" />
              </span>
              <span className="tracking-widest font-semibold uppercase">
                {personalData.statusIndicator}
              </span>
            </div>

            {/* Central Concept Quote */}
            <div className="border-l-2 border-cyber-cyan/40 pl-4 py-1">
              <p className="text-xs sm:text-sm font-mono text-cyber-cyan tracking-widest uppercase">
                &ldquo;{personalData.signatureQuote}&rdquo;
              </p>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              ENGINEERING{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyber-cyan to-indigo-300 bg-clip-text text-transparent">
                INTELLIGENCE.
              </span>
              <br />
              DESIGNING THE{" "}
              <span className="bg-gradient-to-r from-cyber-cyan via-purple-300 to-cyber-violet bg-clip-text text-transparent">
                FUTURE.
              </span>
            </h1>

            {/* Supporting Introduction */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              {personalData.supportingIntro}
            </p>

            {/* Tagline & Identity chips */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <span className="px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
                <Code2 className="w-3 h-3 inline mr-1 text-cyber-cyan" />
                B.Tech CSE • LPU
              </span>
              <span className="px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
                <Sparkles className="w-3 h-3 inline mr-1 text-purple-400" />
                AI/ML Enthusiast
              </span>
              <span className="px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-xs font-mono text-cyber-cyan">
                &ldquo;{personalData.tagline}&rdquo;
              </span>
            </div>

            {/* Two Prominent Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyber-blue via-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyber-cyan text-white font-mono text-sm font-bold tracking-wider uppercase shadow-lg shadow-cyber-blue/30 hover:shadow-cyber-cyan/40 hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyber-cyan"
              >
                <Eye className="w-4 h-4" />
                <span>EXPLORE MY WORK</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-cyber-cyan/30 hover:border-cyber-cyan text-slate-200 hover:text-white font-mono text-sm font-bold tracking-wider uppercase backdrop-blur-md hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyber-cyan"
              >
                <Send className="w-4 h-4 text-cyber-cyan" />
                <span>LET&apos;S CONNECT</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3D Neural Fingerprint Centerpiece */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="w-full relative">
              {/* Surrounding biometric HUD frame */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyber-cyan/40 pointer-events-none" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyber-blue/40 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyber-blue/40 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyber-violet/40 pointer-events-none" />

              <FingerprintCanvas />
            </div>
          </div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="mt-12 sm:mt-16 flex flex-col items-center justify-center text-center">
          <a
            href="#about"
            className="group flex flex-col items-center gap-2 text-slate-500 hover:text-cyber-cyan transition-colors"
            aria-label="Scroll to About section"
          >
            <span className="font-mono text-[10px] tracking-widest uppercase">
              SCROLL TO DISCOVER
            </span>
            <div className="w-5 h-9 rounded-full border border-slate-700 group-hover:border-cyber-cyan flex items-start justify-center p-1 transition-colors">
              <span className="w-1 h-2 rounded-full bg-cyber-cyan animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
