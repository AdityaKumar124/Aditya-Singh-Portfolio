"use client";

import React, { useState, useEffect } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Play, RotateCcw, Cpu, Sparkles, Layers, Sliders, ArrowRight, Lightbulb } from "lucide-react";

export const AiLabSection: React.FC = () => {
  const [pulseActive, setPulseActive] = useState(true);
  const [activeStep, setActiveStep] = useState(0); // 0 = Input, 1 = Hidden1, 2 = Hidden2, 3 = Output
  const [inputVector, setInputVector] = useState({
    queryKeyword: true,
    citizenAge: true,
    incomeBracket: false,
    educationLevel: true,
  });

  // Cycle forward-pass animation step
  useEffect(() => {
    if (!pulseActive) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 1400);
    return () => clearInterval(interval);
  }, [pulseActive]);

  const toggleInput = (key: keyof typeof inputVector) => {
    setInputVector((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const calculateSimulatedConfidence = () => {
    let activeCount = Object.values(inputVector).filter(Boolean).length;
    return Math.min(99, 65 + activeCount * 8.5);
  };

  return (
    <section id="ai-lab" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-cyan/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="INTELLIGENT EXPERIMENTS"
          title={"THE AI\nRESEARCH LAB"}
          subtitle="Exploring ideas. Experimenting with intelligence. Building what comes next."
        />

        {/* Interactive Neural Flow Simulation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Interactive Neural Architecture Visualizer */}
          <div className="lg:col-span-8">
            <GlassCard glow="cyan" className="p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan">
                    <Cpu className="w-4 h-4 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      Interactive Feed-Forward Signal Simulator
                    </h3>
                    <p className="text-[11px] font-mono text-slate-400">
                      Visual demonstration of layer activation & weights signal propagation
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setPulseActive(!pulseActive)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300 hover:text-white"
                  >
                    <Play className={`w-3 h-3 ${pulseActive ? "text-emerald-400" : "text-slate-400"}`} />
                    <span>{pulseActive ? "PAUSE SIGNAL" : "RESUME"}</span>
                  </button>
                  <button
                    onClick={() => setActiveStep(0)}
                    className="p-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 hover:text-white"
                    title="Restart signal"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Neural Network Nodes & Synaptic Flow Diagram */}
              <div className="relative py-6 px-2 sm:px-6 bg-slate-950/80 rounded-2xl border border-slate-800/80 overflow-hidden">
                <div className="grid grid-cols-4 gap-4 sm:gap-8 items-center text-center">
                  
                  {/* Layer 0: Input Layer */}
                  <div className="space-y-3">
                    <div className="text-[11px] font-mono text-slate-400 font-bold uppercase">
                      INPUT LAYER
                    </div>
                    <div className="flex flex-col gap-2.5 items-center">
                      {[
                        { label: "Query", active: inputVector.queryKeyword },
                        { label: "Age", active: inputVector.citizenAge },
                        { label: "Income", active: inputVector.incomeBracket },
                        { label: "Edu", active: inputVector.educationLevel },
                      ].map((node, i) => (
                        <div
                          key={i}
                          className={`w-12 h-12 rounded-xl flex flex-col items-center justify-center font-mono text-[10px] border transition-all duration-300 ${
                            activeStep === 0 && node.active
                              ? "bg-cyber-cyan/20 border-cyber-cyan text-cyber-cyan shadow-lg shadow-cyber-cyan/30 scale-105"
                              : node.active
                              ? "bg-slate-900 border-slate-700 text-slate-300"
                              : "bg-slate-950 border-slate-900 text-slate-600"
                          }`}
                        >
                          <span className="font-semibold">{node.label}</span>
                          <span className="text-[8px] text-slate-500">x{i + 1}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Layer 1: Feature Extraction */}
                  <div className="space-y-3">
                    <div className="text-[11px] font-mono text-slate-400 font-bold uppercase">
                      FEATURE DENSE
                    </div>
                    <div className="flex flex-col gap-2.5 items-center">
                      {[1, 2, 3, 4, 5].map((idx) => (
                        <div
                          key={idx}
                          className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono text-[10px] border transition-all duration-300 ${
                            activeStep === 1
                              ? "bg-cyber-blue/30 border-cyber-blue text-cyan-300 shadow-lg shadow-cyber-blue/40 scale-110"
                              : "bg-slate-900 border-slate-800 text-slate-400"
                          }`}
                        >
                          h{idx}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Layer 2: Intent Activation */}
                  <div className="space-y-3">
                    <div className="text-[11px] font-mono text-slate-400 font-bold uppercase">
                      INTENT TENSOR
                    </div>
                    <div className="flex flex-col gap-3 items-center">
                      {[1, 2, 3].map((idx) => (
                        <div
                          key={idx}
                          className={`w-11 h-11 rounded-xl flex items-center justify-center font-mono text-[10px] border transition-all duration-300 ${
                            activeStep === 2
                              ? "bg-purple-600/30 border-purple-400 text-purple-200 shadow-lg shadow-purple-500/40 scale-110"
                              : "bg-slate-900 border-slate-800 text-slate-400"
                          }`}
                        >
                          t{idx}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Layer 3: Output Classification */}
                  <div className="space-y-3">
                    <div className="text-[11px] font-mono text-slate-400 font-bold uppercase">
                      CLASSIFIER
                    </div>
                    <div className="flex flex-col gap-3 items-center">
                      <div
                        className={`w-14 h-14 rounded-2xl flex flex-col items-center justify-center font-mono text-xs border transition-all duration-300 ${
                          activeStep === 3
                            ? "bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-lg shadow-emerald-500/30 scale-110"
                            : "bg-slate-900 border-slate-800 text-slate-400"
                        }`}
                      >
                        <span className="font-bold">{calculateSimulatedConfidence().toFixed(0)}%</span>
                        <span className="text-[8px] uppercase tracking-tighter">MATCH</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status caption bar */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-ping" />
                    <span>
                      ACTIVE STAGE:{" "}
                      {activeStep === 0
                        ? "Input Vector Serialization"
                        : activeStep === 1
                        ? "Feature Extraction"
                        : activeStep === 2
                        ? "Intent Weight Tensor"
                        : "Threshold Match Output"}
                    </span>
                  </div>
                  <span className="text-slate-500">
                    VISUAL SIMULATION • NO CLIENT-SIDE WEIGHT TRAINING
                  </span>
                </div>
              </div>

              {/* Interactive Signal Input Toggles */}
              <div className="pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <Sliders className="w-3.5 h-3.5 text-cyber-cyan" />
                  <span>INTERACTIVE INPUT VECTOR MODIFIERS</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <button
                    onClick={() => toggleInput("queryKeyword")}
                    className={`p-2.5 rounded-xl border text-xs font-mono transition-colors text-left ${
                      inputVector.queryKeyword
                        ? "bg-cyber-blue/20 border-cyber-cyan text-white"
                        : "bg-slate-950 border-slate-800 text-slate-500"
                    }`}
                  >
                    Query Token: {inputVector.queryKeyword ? "ON" : "OFF"}
                  </button>
                  <button
                    onClick={() => toggleInput("citizenAge")}
                    className={`p-2.5 rounded-xl border text-xs font-mono transition-colors text-left ${
                      inputVector.citizenAge
                        ? "bg-cyber-blue/20 border-cyber-cyan text-white"
                        : "bg-slate-950 border-slate-800 text-slate-500"
                    }`}
                  >
                    Age Feature: {inputVector.citizenAge ? "ON" : "OFF"}
                  </button>
                  <button
                    onClick={() => toggleInput("incomeBracket")}
                    className={`p-2.5 rounded-xl border text-xs font-mono transition-colors text-left ${
                      inputVector.incomeBracket
                        ? "bg-cyber-blue/20 border-cyber-cyan text-white"
                        : "bg-slate-950 border-slate-800 text-slate-500"
                    }`}
                  >
                    Income Filter: {inputVector.incomeBracket ? "ON" : "OFF"}
                  </button>
                  <button
                    onClick={() => toggleInput("educationLevel")}
                    className={`p-2.5 rounded-xl border text-xs font-mono transition-colors text-left ${
                      inputVector.educationLevel
                        ? "bg-cyber-blue/20 border-cyber-cyan text-white"
                        : "bg-slate-950 border-slate-800 text-slate-500"
                    }`}
                  >
                    Education Level: {inputVector.educationLevel ? "ON" : "OFF"}
                  </button>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: AI Architecture Breakdown & Future Research Slots */}
          <div className="lg:col-span-4 space-y-4">
            <GlassCard glow="blue" className="p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-cyber-cyan uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>CASE STUDY: GOVASSIST AI</span>
              </div>

              <h4 className="text-lg font-bold text-white">
                Query Intent & Semantic Retrieval Pipeline
              </h4>

              <p className="text-xs text-slate-300 leading-relaxed">
                Rather than treating AI as an isolated model, GovAssist AI combines intent heuristics with deterministic web scraping and caching:
              </p>

              <div className="space-y-2.5 font-mono text-xs">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-between">
                  <span>01 • Tokenization & Filtering</span>
                  <span className="text-cyber-cyan">TypeScript</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-between">
                  <span>02 • Scraping & Parsing</span>
                  <span className="text-cyber-cyan">Cheerio / Axios</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-between">
                  <span>03 • Local Fallback Cache</span>
                  <span className="text-cyber-cyan">Low Latency</span>
                </div>
              </div>
            </GlassCard>

            {/* Modular Future Experiment Slot */}
            <div className="p-5 rounded-2xl bg-slate-950/70 border border-dashed border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
                <Lightbulb className="w-3.5 h-3.5" />
                <span>PLANNED EXPERIMENTATION</span>
              </div>
              <h5 className="text-sm font-semibold text-white">
                Local Vector Search & Embeddings Pipeline
              </h5>
              <p className="text-xs text-slate-400 leading-relaxed">
                Currently exploring local sentence transformers and cosine similarity for enhanced semantic retrieval in document querying.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
