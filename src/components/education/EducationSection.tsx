"use client";

import React from "react";
import {
  educationData,
  trainingData,
  certificationsData,
  achievementsData,
} from "@/data/education";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import {
  GraduationCap,
  Award,
  BookMarked,
  CheckCircle,
  Calendar,
  MapPin,
  Trophy,
} from "lucide-react";

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyber-blue/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="ACADEMICS & CREDENTIALS"
          title={"EDUCATION,\nTRAINING & HONORS"}
          subtitle="Verified academic background, structured technical trainings, and earned certifications."
        />

        {/* Education Timeline Cards */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <GraduationCap className="w-5 h-5 text-cyber-cyan" />
            <h3 className="text-xl font-bold text-white">Academic Foundation</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {educationData.map((edu) => (
              <GlassCard
                key={edu.id}
                glow={edu.type === "degree" ? "cyan" : "none"}
                className="p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Badge
                      variant={edu.type === "degree" ? "cyan" : "slate"}
                      size="sm"
                    >
                      {edu.type === "degree"
                        ? "Undergraduate Degree"
                        : edu.type === "intermediate"
                        ? "Intermediate"
                        : "Matriculation"}
                    </Badge>
                    {edu.score && (
                      <span className="font-mono text-xs font-bold text-cyber-cyan px-2 py-0.5 rounded bg-slate-900 border border-slate-700">
                        {edu.score}
                      </span>
                    )}
                  </div>

                  <h4 className="text-lg font-bold text-white mb-1.5">
                    {edu.degree}
                  </h4>
                  <p className="text-sm font-semibold text-slate-300 mb-3">
                    {edu.institution}
                  </p>

                  {edu.details && (
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {edu.details}
                    </p>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-800/80 space-y-1.5 font-mono text-[11px] text-slate-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-cyber-blue" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-purple-400" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Training, Certifications & Achievements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Technical Training (5 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <BookMarked className="w-5 h-5 text-cyber-blue" />
              <h3 className="text-xl font-bold text-white">Technical Training</h3>
            </div>

            {trainingData.map((training) => (
              <GlassCard key={training.id} glow="blue" className="p-6 sm:p-7 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <Badge variant="blue" size="sm">
                    {training.institution}
                  </Badge>
                  <span className="font-mono text-xs text-slate-400">
                    {training.period}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-white">
                  {training.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {training.description}
                </p>

                <div className="pt-2">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest block mb-2">
                    CORE SYLLABUS HIGHLIGHTS:
                  </span>
                  <div className="space-y-1.5">
                    {training.topics.map((topic, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs text-slate-300 font-mono"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-cyber-cyan shrink-0" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Right Column: Certifications & Achievement (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-purple-400" />
              <h3 className="text-xl font-bold text-white">Certifications & Honors</h3>
            </div>

            {/* Certifications List */}
            <div className="space-y-3">
              {certificationsData.map((cert) => (
                <div
                  key={cert.id}
                  className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">
                        {cert.name}
                      </div>
                      <div className="text-xs font-mono text-slate-400">
                        Issuer: {cert.issuer}
                      </div>
                    </div>
                  </div>

                  <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                    VERIFIED
                  </span>
                </div>
              ))}
            </div>

            {/* Achievement Card */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Trophy className="w-4 h-4 text-amber-400" />
                <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400">
                  RECOGNITION
                </h4>
              </div>

              {achievementsData.map((ach) => (
                <div
                  key={ach.id}
                  className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-950 border border-amber-500/20"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-amber-400 font-semibold">
                      {ach.type}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {ach.organization}
                    </span>
                  </div>
                  <h5 className="text-base font-bold text-white mb-1.5">
                    {ach.title}
                  </h5>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
