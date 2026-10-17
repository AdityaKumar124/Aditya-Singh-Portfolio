"use client";

import React, { useState } from "react";
import Image from "next/image";
import { personalData } from "@/data/personal";
import { milestonesData } from "@/data/education";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Cpu, CheckCircle2, ChevronRight, Terminal, BookOpen, ShieldCheck } from "lucide-react";

export const AboutSection: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(milestonesData[0]);

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background subtle data flow lines */}
      <div className="absolute inset-0 bg-cyber-grid-overlay opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="JOURNEY & PHILOSOPHY"
          title={"CURIOUS BY NATURE.\nBUILDER BY CHOICE."}
          subtitle="A student developer's journey driven by curiosity, systematic problem-solving, and building software that turns ideas into functional reality."
        />

        {/* Editorial Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Main Editorial Story Card */}
          <div className="lg:col-span-7">
            <GlassCard glow="blue" className="p-8 sm:p-10 space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                <div className="p-2.5 rounded-lg bg-cyber-blue/10 border border-cyber-cyan/30 text-cyber-cyan">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">The Engineering Mindset</h3>
                  <p className="font-mono text-xs text-slate-400">Computer Science & Engineering • LPU</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                <p>
                  I&apos;m <span className="text-white font-semibold">Aditya Kumar</span>, a Computer Science and Engineering student at Lovely Professional University. I enjoy solving programming problems, exploring software development, and building projects that turn technical ideas into practical applications.
                </p>
                <p>
                  My interests include software engineering, artificial intelligence, backend development, and interactive digital experiences.
                </p>
                <blockquote className="p-4 rounded-xl bg-slate-900/80 border-l-4 border-cyber-cyan italic text-slate-200">
                  &ldquo;I believe in learning by building, improving through experimentation, and creating software that solves meaningful problems.&rdquo;
                </blockquote>
                <p className="text-sm text-slate-400">
                  Instead of merely reading about concepts, I test their limits: implementing thread-safe banking logic in Java, crafting custom web-scraping pipelines in TypeScript for citizen assistance, and practicing algorithms daily.
                </p>
              </div>

              {/* Core Philosophy Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800/80">
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-cyber-cyan font-mono text-xs font-semibold mb-1">01 • FOUNDATIONS</div>
                  <div className="text-xs text-slate-300">Clean OOP, memory precision & robust algorithms.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-cyber-blue font-mono text-xs font-semibold mb-1">02 • PRACTICALITY</div>
                  <div className="text-xs text-slate-300">Building functioning tools over theoretical mockups.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-purple-400 font-mono text-xs font-semibold mb-1">03 • EVOLUTION</div>
                  <div className="text-xs text-slate-300">Continuous experimentation with modern AI stacks.</div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Quick Profile Summary Card */}
          <div className="lg:col-span-5 space-y-4">
            <GlassCard glow="cyan" className="p-6 sm:p-8">
              {/* Profile Card Identity Header */}
              <div className="flex items-center gap-4 pb-5 mb-5 border-b border-slate-800/80">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-cyber-cyan/50 shadow-lg shadow-cyber-cyan/20 shrink-0">
                  <Image
                    src="/images/profile.jpg"
                    alt={personalData.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover object-top"
                  />
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-slate-950" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-[10px] font-mono text-cyber-cyan mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    VERIFIED CANDIDATE
                  </div>
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {personalData.name}
                  </h3>
                  <p className="font-mono text-xs text-slate-400">
                    B.Tech CSE • Lovely Professional University
                  </p>
                </div>
              </div>

              <h4 className="text-xs font-mono uppercase tracking-widest text-cyber-cyan mb-4 flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                <span>PROFILE MATRIX</span>
              </h4>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">CURRENT STATUS</span>
                  <span className="text-white font-medium">B.Tech CSE Undergraduate</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">INSTITUTION</span>
                  <span className="text-white font-medium text-right">Lovely Professional University</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">CORE FOCUS</span>
                  <span className="text-cyber-cyan font-medium">DSA, Java & Intelligent Systems</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">LOCATION</span>
                  <span className="text-white font-medium">Punjab, India</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-400">ASPIRATION</span>
                  <span className="text-purple-300 font-medium">Software Engineer / AI Dev</span>
                </div>
              </div>
            </GlassCard>

            <div className="p-5 rounded-2xl bg-gradient-to-r from-cyber-blue/10 via-cyber-cyan/5 to-purple-500/10 border border-cyber-cyan/20 backdrop-blur-md">
              <div className="flex items-center gap-2 font-mono text-xs text-cyber-cyan mb-2">
                <Terminal className="w-3.5 h-3.5" />
                <span>EXPERIMENTATION LOG</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Every project I undertake represents a step forward in technical depth — from understanding multi-threading locks in Java to exploring semantic search pipelines in Node.js.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Milestones & Learning Journey */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <span>Developer Milestones</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-cyber-cyan">
                  Interactive Timeline
                </span>
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-1">
                Select a milestone to inspect architectural learnings and core takeaways
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Milestones Navigation List */}
            <div className="lg:col-span-5 space-y-2.5">
              {milestonesData.map((m, index) => {
                const isSelected = selectedMilestone.id === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => setSelectedMilestone(m)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group ${
                      isSelected
                        ? "bg-slate-900 border-cyber-cyan/60 shadow-md shadow-cyber-cyan/20"
                        : "bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/60 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${
                          isSelected
                            ? "bg-cyber-cyan text-slate-950"
                            : "bg-slate-800 text-slate-400 group-hover:text-white"
                        }`}
                      >
                        0{index + 1}
                      </span>
                      <div>
                        <div
                          className={`text-sm font-semibold transition-colors ${
                            isSelected ? "text-white" : "text-slate-300 group-hover:text-white"
                          }`}
                        >
                          {m.title}
                        </div>
                        <div className="text-xs font-mono text-slate-400">{m.subtitle}</div>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected
                          ? "text-cyber-cyan translate-x-1"
                          : "text-slate-600 group-hover:text-slate-400"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Selected Milestone Detail Inspector */}
            <div className="lg:col-span-7">
              <GlassCard glow="cyan" className="p-6 sm:p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800">
                    <div>
                      <span className="text-[11px] font-mono text-cyber-cyan uppercase tracking-wider block">
                        MILESTONE INSPECTION
                      </span>
                      <h4 className="text-xl font-bold text-white mt-1">
                        {selectedMilestone.title}
                      </h4>
                    </div>
                    <Badge variant="cyan" size="sm">
                      {selectedMilestone.subtitle}
                    </Badge>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {selectedMilestone.description}
                  </p>

                  <div>
                    <h5 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">
                      KEY LEARNINGS & PRINCIPLES
                    </h5>
                    <div className="space-y-2">
                      {selectedMilestone.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
                        >
                          <CheckCircle2 className="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>CATEGORY: {selectedMilestone.category.toUpperCase()}</span>
                  <span className="text-cyber-cyan">CONTINUOUS PROGRESSION</span>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
