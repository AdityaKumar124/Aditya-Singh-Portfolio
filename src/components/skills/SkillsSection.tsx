"use client";

import React, { useState } from "react";
import { skillCategories, softSkills } from "@/data/skills";
import { SkillItem } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import {
  Share2,
  LayoutGrid,
  Info,
  Check,
  Compass,
} from "lucide-react";

export const SkillsSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<"constellation" | "grid">("constellation");
  const [activeSkill, setActiveSkill] = useState<SkillItem | null>(
    skillCategories[0].skills[0] // Java as default selected
  );
  const [hoveredSkillId, setHoveredSkillId] = useState<string | null>(null);

  // Flatten all skills for quick lookups
  const allSkills = skillCategories.flatMap((cat) => cat.skills);

  const getBadgeVariant = (level: SkillItem["level"]) => {
    switch (level) {
      case "Proficient":
        return "cyan";
      case "Core":
        return "blue";
      case "Basic":
        return "violet";
      case "Practicing":
        return "emerald";
      default:
        return "slate";
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyber-blue/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="CAPABILITIES & ARCHITECTURE"
          title={"THE TECHNOLOGY\nCONSTELLATION"}
          subtitle="An honest mapping of programming languages, foundational computer science disciplines, and software development technologies."
        />

        {/* View Switcher & Recruiter Accessibility Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 p-3 rounded-2xl bg-slate-950/80 border border-slate-800 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode("constellation")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs font-semibold transition-all ${
                viewMode === "constellation"
                  ? "bg-cyber-blue text-white shadow-md shadow-cyber-blue/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>CONSTELLATION VIEW</span>
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs font-semibold transition-all ${
                viewMode === "grid"
                  ? "bg-cyber-blue text-white shadow-md shadow-cyber-blue/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>RECRUITER GRID</span>
            </button>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Proficient</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Core</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              <span>Basic</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Practicing</span>
            </div>
          </div>
        </div>

        {/* View 1: Interactive Constellation Network */}
        {viewMode === "constellation" ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 8 Cols: Interactive Category Constellation */}
            <div className="lg:col-span-8 space-y-6">
              {skillCategories.map((cat) => (
                <div
                  key={cat.id}
                  className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 backdrop-blur-md"
                >
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800/60">
                    <h3 className="text-xs font-mono tracking-widest text-cyber-cyan uppercase font-bold">
                      {cat.title}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-500">
                      {cat.subtitle}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skill) => {
                      const isSelected = activeSkill?.id === skill.id;
                      const isConnected =
                        hoveredSkillId &&
                        activeSkill?.connectedTo?.includes(skill.id);

                      return (
                        <button
                          key={skill.id}
                          onClick={() => setActiveSkill(skill)}
                          onMouseEnter={() => setHoveredSkillId(skill.id)}
                          onMouseLeave={() => setHoveredSkillId(null)}
                          className={`relative group px-4 py-2.5 rounded-xl border text-left font-mono text-xs transition-all duration-200 flex items-center gap-2 ${
                            isSelected
                              ? "bg-slate-900 border-cyber-cyan text-white shadow-lg shadow-cyber-cyan/25 scale-[1.03]"
                              : isConnected
                              ? "bg-slate-900/90 border-cyber-blue text-cyber-cyan ring-1 ring-cyber-blue"
                              : "bg-slate-900/40 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              skill.level === "Proficient"
                                ? "bg-cyan-400"
                                : skill.level === "Core"
                                ? "bg-blue-400"
                                : skill.level === "Basic"
                                ? "bg-purple-400"
                                : "bg-emerald-400"
                            }`}
                          />
                          <span className="font-semibold">{skill.name}</span>
                          {skill.level === "Basic" && (
                            <span className="text-[10px] text-purple-400/80">(Basic)</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Right 4 Cols: Active Technology Inspector */}
            <div className="lg:col-span-4 sticky top-28">
              <GlassCard glow="cyan" className="p-6">
                <div className="flex items-center gap-2 text-xs font-mono text-cyber-cyan uppercase tracking-wider mb-3">
                  <Info className="w-4 h-4" />
                  <span>TECHNOLOGY INSPECTION</span>
                </div>

                {activeSkill ? (
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-2 pb-3 border-b border-slate-800">
                      <div>
                        <h4 className="text-2xl font-bold text-white">{activeSkill.name}</h4>
                        <span className="text-xs font-mono text-slate-400 uppercase">
                          CATEGORY: {activeSkill.category}
                        </span>
                      </div>
                      <Badge variant={getBadgeVariant(activeSkill.level)}>
                        {activeSkill.level}
                      </Badge>
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed">
                      {activeSkill.description}
                    </p>

                    {activeSkill.connectedTo && activeSkill.connectedTo.length > 0 && (
                      <div className="pt-3 border-t border-slate-800/80">
                        <span className="text-[11px] font-mono text-slate-400 uppercase block mb-2">
                          SYNAPTIC CONNECTIONS:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {activeSkill.connectedTo.map((id) => {
                            const connectedSkill = allSkills.find((s) => s.id === id);
                            return (
                              <button
                                key={id}
                                onClick={() => connectedSkill && setActiveSkill(connectedSkill)}
                                className="px-2.5 py-1 rounded-md bg-slate-900 border border-cyber-cyan/30 text-xs font-mono text-cyber-cyan hover:border-cyber-cyan transition-colors"
                              >
                                → {connectedSkill ? connectedSkill.name : id}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-xs text-slate-400">Select any technology to inspect details.</p>
                )}
              </GlassCard>
            </div>
          </div>
        ) : (
          /* View 2: Recruiter Categorized Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat) => (
              <GlassCard key={cat.id} glow="blue" className="p-6">
                <div className="mb-4 pb-2 border-b border-slate-800">
                  <h4 className="text-sm font-mono font-bold text-cyber-cyan tracking-wide uppercase">
                    {cat.title}
                  </h4>
                  <p className="text-xs text-slate-400">{cat.subtitle}</p>
                </div>

                <div className="space-y-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.id}
                      className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold text-white">
                          {skill.name}
                        </span>
                        <Badge variant={getBadgeVariant(skill.level)} size="sm">
                          {skill.level}
                        </Badge>
                      </div>
                      <p className="text-xs text-slate-400 leading-normal">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        )}

        {/* Soft Skills & Problem Solving Bar */}
        <div className="mt-14">
          <div className="flex items-center gap-2 mb-4">
            <Compass className="w-4 h-4 text-cyber-cyan" />
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400">
              ENGINEERING ADAPTABILITY & SOFT SKILLS
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {softSkills.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 backdrop-blur-md"
              >
                <div className="flex items-center gap-2 text-white font-semibold text-sm mb-1">
                  <Check className="w-4 h-4 text-cyber-cyan" />
                  <span>{item.name}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
