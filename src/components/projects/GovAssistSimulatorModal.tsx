"use client";

import React, { useState, useMemo } from "react";
import { X, Search, Sparkles, Database, CheckCircle2, AlertCircle, ExternalLink, Cpu } from "lucide-react";

interface GovAssistSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Scheme {
  id: string;
  name: string;
  sector: "Education" | "Agriculture" | "Technology" | "Employment";
  ministry: string;
  description: string;
  eligibilityCriteria: string[];
  benefits: string;
  targetDemographic: string;
  matchScore: number;
}

const SAMPLE_SCHEMES: Scheme[] = [
  {
    id: "gov-01",
    name: "Digital India Internship Scheme",
    sector: "Technology",
    ministry: "Ministry of Electronics and Information Technology (MeitY)",
    description:
      "Provides student engineering minds exposure to actual work in policy formulation and technology development at MeitY.",
    eligibilityCriteria: [
      "Indian citizen currently pursuing B.E./B.Tech/MCA/M.Sc (CS/IT)",
      "Minimum 60% aggregate marks in preceding degree/semester",
      "Valid bonafide certification from recognized university",
    ],
    benefits: "₹10,000/month token remuneration + National Ministry Experience Certificate",
    targetDemographic: "College Students & Technology Undergraduates",
    matchScore: 98,
  },
  {
    id: "gov-02",
    name: "National Scholarship Portal (Post-Matric Scheme)",
    sector: "Education",
    ministry: "Ministry of Minority Affairs / Ministry of Social Justice",
    description:
      "Financial assistance for higher education courses including B.Tech, diploma, and postgraduate programs.",
    eligibilityCriteria: [
      "Enrolled in recognized technical or professional undergraduate degree",
      "Family annual income below specified threshold rubric",
      "No duplicate central scholarship claimed concurrently",
    ],
    benefits: "Full maintenance allowance and institutional tuition fee waiver assistance",
    targetDemographic: "Undergraduate & Professional Students",
    matchScore: 92,
  },
  {
    id: "gov-03",
    name: "PM-Kisan Samman Nidhi",
    sector: "Agriculture",
    ministry: "Ministry of Agriculture and Farmers Welfare",
    description:
      "Direct income support mechanism providing financial backing to cultivable landholding farmer families across India.",
    eligibilityCriteria: [
      "Small and marginal landholding farmer family",
      "Name appears on verified state land records repository",
      "Aadhaar-seeded operational bank account",
    ],
    benefits: "₹6,000 per year delivered in 3 equal four-monthly installments via DBT",
    targetDemographic: "Farmers & Agricultural Families",
    matchScore: 89,
  },
  {
    id: "gov-04",
    name: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY 4.0)",
    sector: "Employment",
    ministry: "Ministry of Skill Development and Entrepreneurship",
    description:
      "Skill certification initiative enabling youth to take up industry-relevant skill training for enhanced livelihood opportunities.",
    eligibilityCriteria: [
      "Indian national aged between 15-45 years",
      "Possesses valid Aadhaar and bank account",
      "Seeking skill upgradation or industry technical competency",
    ],
    benefits: "Completely sponsored skill certification, stipend, and placement assistance",
    targetDemographic: "Youth & Aspiring Professionals",
    matchScore: 85,
  },
];

export const GovAssistSimulatorModal: React.FC<GovAssistSimulatorModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [searchQuery, setSearchQuery] = useState("student internship");
  const [selectedSector, setSelectedSector] = useState<string>("All");
  const [activeScheme, setActiveScheme] = useState<Scheme>(SAMPLE_SCHEMES[0]);

  const filteredSchemes = useMemo(() => {
    return SAMPLE_SCHEMES.filter((scheme) => {
      const matchesSector =
        selectedSector === "All" || scheme.sector === selectedSector;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        scheme.name.toLowerCase().includes(q) ||
        scheme.description.toLowerCase().includes(q) ||
        scheme.targetDemographic.toLowerCase().includes(q) ||
        scheme.sector.toLowerCase().includes(q);
      return matchesSector && matchesQuery;
    });
  }, [searchQuery, selectedSector]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-5xl bg-slate-950 border border-cyber-cyan/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyber-blue/20 border border-cyber-cyan/40 text-cyber-cyan">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>GovAssist AI Demonstration</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  SCHEME ELIGIBILITY ENGINE
                </span>
              </h3>
              <p className="text-xs font-mono text-slate-400">
                Interactive simulation demonstrating query intent extraction, criteria matching, and cached fallback retrieval.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800"
            aria-label="Close simulator"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Query & Filter Bar */}
        <div className="p-5 border-b border-slate-800/80 bg-slate-950/80 space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Try: 'student internship', 'farmer', 'scholarship', 'skill training'..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm font-mono text-white focus:outline-none focus:border-cyber-cyan"
              />
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              {["All", "Technology", "Education", "Agriculture", "Employment"].map((sector) => (
                <button
                  key={sector}
                  onClick={() => setSelectedSector(sector)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-colors ${
                    selectedSector === sector
                      ? "bg-cyber-blue text-white font-semibold"
                      : "bg-slate-900 text-slate-400 hover:text-white"
                  }`}
                >
                  {sector}
                </button>
              ))}
            </div>
          </div>

          {/* Intent Detection Simulation Bar */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 pt-1">
            <span className="text-cyber-cyan flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" />
              <span>INTENT EXTRACTED:</span>
              <span className="text-white font-bold bg-slate-900 px-2 py-0.5 rounded border border-slate-700">
                {searchQuery ? `"${searchQuery.toUpperCase()}"` : "GENERAL INQUIRY"}
              </span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <Database className="w-3.5 h-3.5" />
              <span>CACHE HIT: 100% LOCAL REPOSITORY</span>
            </span>
            <span>•</span>
            <span>{filteredSchemes.length} SCHEME(S) MATCHED</span>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Scheme List Column */}
          <div className="lg:col-span-5 space-y-3">
            {filteredSchemes.length > 0 ? (
              filteredSchemes.map((scheme) => {
                const isSelected = activeScheme.id === scheme.id;
                return (
                  <button
                    key={scheme.id}
                    onClick={() => setActiveScheme(scheme)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      isSelected
                        ? "bg-slate-900 border-cyber-cyan shadow-md shadow-cyber-cyan/20"
                        : "bg-slate-950 border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono text-cyber-cyan">{scheme.sector}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                        {scheme.matchScore}% MATCH
                      </span>
                    </div>
                    <div className="text-sm font-bold text-white mb-1">{scheme.name}</div>
                    <div className="text-xs text-slate-400 line-clamp-2">{scheme.description}</div>
                  </button>
                );
              })
            ) : (
              <div className="p-8 text-center rounded-xl bg-slate-900/40 border border-slate-800">
                <AlertCircle className="w-8 h-8 text-slate-500 mx-auto mb-2" />
                <p className="text-sm text-slate-300">No schemes found matching your filter.</p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedSector("All");
                  }}
                  className="mt-3 text-xs font-mono text-cyber-cyan hover:underline"
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>

          {/* Scheme Detail Inspector Column */}
          <div className="lg:col-span-7">
            {activeScheme ? (
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-cyber-cyan/30 space-y-5 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">
                        {activeScheme.ministry}
                      </span>
                      <span className="text-xs font-mono text-emerald-400">
                        CONFIDENCE: {activeScheme.matchScore}%
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-white">{activeScheme.name}</h4>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {activeScheme.description}
                  </p>

                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                    <span className="text-xs font-mono text-cyber-cyan block mb-1">
                      PRIMARY BENEFITS
                    </span>
                    <p className="text-xs text-slate-200">{activeScheme.benefits}</p>
                  </div>

                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block mb-2">
                      ELIGIBILITY EVALUATION RUBRIC
                    </span>
                    <div className="space-y-2">
                      {activeScheme.eligibilityCriteria.map((c, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyber-cyan shrink-0 mt-0.5" />
                          <span>{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <span>TARGET: {activeScheme.targetDemographic}</span>
                  <span className="text-slate-500">PARSED VIA TYPESCRIPT BACKEND</span>
                </div>
              </div>
            ) : (
              <div className="p-6 text-slate-500 text-center">Select a scheme to view details.</div>
            )}
          </div>
        </div>

        {/* Footer Disclaimer */}
        <div className="p-4 bg-slate-900/80 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>DISCLAIMER: SIMULATION PREVIEW • NOT LEGALLY AUTHORITATIVE</span>
          </div>
          <span className="text-slate-500">Node.js • Cheerio Scraper • Express REST Engine</span>
        </div>
      </div>
    </div>
  );
};
