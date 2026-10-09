"use client";

import React, { useState } from "react";
import { projectsData } from "@/data/projects";
import { ProjectItem } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { BankSimulatorModal } from "./BankSimulatorModal";
import { GovAssistSimulatorModal } from "./GovAssistSimulatorModal";
import {
  Github,
  Play,
  CheckCircle2,
  Terminal,
  Layers,
  Shield,
  Search,
} from "lucide-react";

export const ProjectsSection: React.FC = () => {
  const [bankModalOpen, setBankModalOpen] = useState(false);
  const [govAssistModalOpen, setGovAssistModalOpen] = useState(false);

  const handleOpenDemo = (project: ProjectItem) => {
    if (project.simulationType === "bank-simulator") {
      setBankModalOpen(true);
    } else if (project.simulationType === "govassist-ai") {
      setGovAssistModalOpen(true);
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyber-blue/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyber-violet/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="ENGINEERED SYSTEMS"
          title={"FEATURED\nPROJECTS"}
          subtitle="Real, working applications focusing on concurrency, object-oriented design, backend pipelines, and practical artificial intelligence."
        />

        {/* Project Cards Grid */}
        <div className="space-y-16">
          {projectsData.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <GlassCard
                key={project.id}
                glow={isEven ? "cyan" : "blue"}
                className="p-8 sm:p-10 lg:p-12 overflow-hidden transition-all duration-300 hover:border-cyber-cyan/50"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Content Column */}
                  <div className={`lg:col-span-7 space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Badge variant={isEven ? "cyan" : "violet"} size="sm">
                          {project.badge}
                        </Badge>
                        <span className="text-xs font-mono text-slate-400">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-cyber-cyan mt-1">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>

                    {/* Developer Contribution */}
                    <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-2">
                        <Terminal className="w-3.5 h-3.5 text-cyber-cyan" />
                        <span>DEVELOPER CONTRIBUTIONS</span>
                      </div>
                      <div className="space-y-2">
                        {project.developerContribution.map((contrib, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5" />
                            <span>{contrib}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technology Badges */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700/80 text-xs font-mono text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      <button
                        onClick={() => handleOpenDemo(project)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyber-blue to-cyan-500 hover:from-blue-600 hover:to-cyber-cyan text-white font-mono text-xs font-bold tracking-wider uppercase shadow-md shadow-cyber-blue/30 hover:shadow-cyan-500/40 transition-all duration-200"
                      >
                        <Play className="w-3.5 h-3.5" />
                        <span>LAUNCH INTERACTIVE SIMULATION</span>
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyber-cyan/50 text-slate-200 font-mono text-xs font-semibold transition-all duration-200"
                      >
                        <Github className="w-3.5 h-3.5 text-slate-300" />
                        <span>VIEW GITHUB REPOSITORY</span>
                      </a>
                    </div>
                  </div>

                  {/* Visual Preview / Abstract Dashboard Mockup */}
                  <div className={`lg:col-span-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="relative rounded-2xl bg-slate-950 border border-slate-800 p-5 shadow-2xl overflow-hidden group">
                      {/* Top Window Bar */}
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-[11px] font-mono text-slate-400">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                          <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                        </div>
                        <span className="text-cyber-cyan">
                          {project.simulationType === "bank-simulator"
                            ? "BankingEngine.java"
                            : "GovAssistPipeline.ts"}
                        </span>
                      </div>

                      {/* Preview Graphic tailored per project */}
                      {project.simulationType === "bank-simulator" ? (
                        <div className="space-y-4">
                          <div className="p-4 rounded-xl bg-gradient-to-br from-blue-950/60 to-slate-900 border border-cyber-blue/30 space-y-2">
                            <div className="flex justify-between items-center text-xs font-mono text-slate-400">
                              <span>SAVINGS ACCOUNT</span>
                              <Shield className="w-4 h-4 text-cyber-cyan" />
                            </div>
                            <div className="text-2xl font-bold font-mono text-white">
                              $2,500.00
                            </div>
                            <div className="text-[10px] font-mono text-emerald-400">
                              ● THREAD-SAFE CONCURRENCY LOCK ACTIVE
                            </div>
                          </div>

                          <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1.5 font-mono text-[11px]">
                            <div className="text-slate-400 flex justify-between">
                              <span>OP: DEPOSIT</span>
                              <span className="text-emerald-400">+$1,000.00</span>
                            </div>
                            <div className="text-slate-400 flex justify-between">
                              <span>OP: ATOMIC TRANSFER</span>
                              <span className="text-cyan-400">-$300.00</span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div className="p-4 rounded-xl bg-gradient-to-br from-purple-950/50 to-slate-900 border border-purple-500/30 space-y-2">
                            <div className="flex justify-between items-center text-xs font-mono text-slate-400">
                              <span>INTENT PARSER</span>
                              <Search className="w-4 h-4 text-purple-400" />
                            </div>
                            <div className="text-sm font-mono text-white">
                              &ldquo;Internship for B.Tech student&rdquo;
                            </div>
                            <div className="text-[10px] font-mono text-purple-300">
                              MATCH: MeitY Digital India Scheme (98% Confidence)
                            </div>
                          </div>

                          <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1.5 font-mono text-[11px]">
                            <div className="text-slate-400 flex justify-between">
                              <span>BACKEND: Cheerio Scraper</span>
                              <span className="text-emerald-400">CACHED 100%</span>
                            </div>
                            <div className="text-slate-400 flex justify-between">
                              <span>OUTPUT FORMAT</span>
                              <span className="text-cyan-400">REST JSON Schema</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Quick Launch Overlay on Hover */}
                      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-400">CLICK TO TEST RUNTIME</span>
                        <button
                          onClick={() => handleOpenDemo(project)}
                          className="text-cyber-cyan hover:underline font-semibold"
                        >
                          OPEN SIMULATOR →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>

      {/* Simulator Modals */}
      <BankSimulatorModal
        isOpen={bankModalOpen}
        onClose={() => setBankModalOpen(false)}
      />
      <GovAssistSimulatorModal
        isOpen={govAssistModalOpen}
        onClose={() => setGovAssistModalOpen(false)}
      />
    </section>
  );
};
