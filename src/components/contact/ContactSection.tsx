"use client";

import React, { useState } from "react";
import Image from "next/image";
import { personalData } from "@/data/personal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  FileText,
  Send,
  Copy,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalData.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Construct mailto link
    const mailtoUrl = `mailto:${personalData.email}?subject=${encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.open(mailtoUrl, "_blank");
    setFormSubmitted(true);
  };

  const handleCopyFormattedMessage = () => {
    const formatted = `To: ${personalData.email}\nFrom: ${formData.name} <${formData.email}>\nSubject: ${
      formData.subject || "Collaboration Inquiry"
    }\n\n${formData.message}`;
    navigator.clipboard.writeText(formatted);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2500);
  };

  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="pt-24 pb-12 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyber-blue/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="COMMUNICATION & COLLABORATION"
          title={"HAVE AN IDEA?\nLET'S MAKE IT REAL."}
          subtitle="I'm always interested in learning, collaborating on meaningful projects, and connecting with people who enjoy building useful technology."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          {/* Left Column: Direct verified contact channels */}
          <div className="lg:col-span-5 space-y-4">
            <GlassCard glow="cyan" className="p-6 sm:p-8 space-y-6">
              {/* Profile Contact Header */}
              <div className="flex items-center gap-3.5 pb-4 border-b border-slate-800">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-cyber-cyan/40 shadow-md shadow-cyber-cyan/15 shrink-0">
                  <Image
                    src="/images/profile.jpg"
                    alt="Aditya Kumar"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover object-top"
                  />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-slate-950" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    Aditya Kumar
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-normal">
                      ONLINE
                    </span>
                  </h4>
                  <p className="font-mono text-[11px] text-slate-400">
                    Open to Collaborations & Opportunities
                  </p>
                </div>
              </div>

              <h3 className="text-xs font-mono uppercase tracking-widest text-cyber-cyan flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-ping" />
                <span>DIRECT REACH</span>
              </h3>

              <div className="space-y-4">
                {/* Email Channel */}
                <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-cyber-blue/20 text-cyber-cyan">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">EMAIL ADDRESS</div>
                      <a
                        href={`mailto:${personalData.email}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-cyber-cyan transition-colors"
                      >
                        {personalData.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Channel */}
                <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-300">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">PHONE NUMBER</div>
                      <a
                        href={`tel:${personalData.phone.replace(/[^0-9+]/g, "")}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-emerald-300 transition-colors"
                      >
                        {personalData.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
                    title="Copy Phone"
                  >
                    {copiedPhone ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Profiles Row */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href={personalData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 flex items-center gap-2.5 text-slate-200 hover:text-white transition-all"
                  >
                    <Github className="w-4 h-4 text-white" />
                    <span className="text-xs font-mono font-medium">GitHub</span>
                    <ExternalLink className="w-3 h-3 text-slate-500 ml-auto" />
                  </a>

                  <a
                    href={personalData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyber-blue/50 flex items-center gap-2.5 text-slate-200 hover:text-white transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-mono font-medium">LinkedIn</span>
                    <ExternalLink className="w-3 h-3 text-slate-500 ml-auto" />
                  </a>
                </div>

                {/* Resume Download Action Button */}
                <div className="pt-2">
                  <button
                    onClick={() => setResumeModalOpen(true)}
                    className="w-full py-3 px-4 rounded-xl bg-slate-900 border border-cyber-cyan/40 hover:bg-slate-800 text-cyber-cyan hover:text-white font-mono text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-md shadow-cyber-cyan/10"
                  >
                    <FileText className="w-4 h-4" />
                    <span>DOWNLOAD / VIEW RESUME</span>
                  </button>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <GlassCard glow="blue" className="p-6 sm:p-8">
              <h3 className="text-xs font-mono uppercase tracking-widest text-cyber-cyan mb-2">
                TRANSMIT MESSAGE
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-mono">
                Submissions open your default email client with your message pre-populated, or you can copy the formatted inquiry.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Rivera"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyber-cyan"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      YOUR EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@domain.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyber-cyan"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Internship opportunity / project discussion"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyber-cyan"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    MESSAGE CONTENT *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your team, problem, or technical proposal..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyber-cyan"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyber-blue to-cyan-500 hover:from-blue-600 hover:to-cyber-cyan text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-cyber-blue/30 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>LAUNCH EMAIL CLIENT</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyFormattedMessage}
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-600 text-slate-300 font-mono text-xs font-medium transition-all"
                  >
                    {copiedMessage ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                    <span>{copiedMessage ? "COPIED TO CLIPBOARD" : "COPY MESSAGE"}</span>
                  </button>
                </div>

                {formSubmitted && (
                  <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-xs font-mono text-emerald-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>
                      Mailto request initiated! If your client did not launch automatically, click &quot;COPY MESSAGE&quot; and send directly to {personalData.email}.
                    </span>
                  </div>
                )}
              </form>
            </GlassCard>
          </div>
        </div>

        {/* Global Footer */}
        <footer className="pt-12 border-t border-slate-900 text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan" />
            <p className="font-mono text-xs sm:text-sm tracking-widest text-slate-300 uppercase">
              DESIGNED WITH CURIOSITY. BUILT WITH CODE.
            </p>
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan" />
          </div>

          <p className="font-mono text-xs text-slate-500">
            Aditya Kumar • Lovely Professional University • © {currentYear}
          </p>
        </footer>
      </div>

      {/* Resume Modal */}
      {resumeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-slate-950 border border-cyber-cyan/30 rounded-2xl p-6 shadow-2xl space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2 font-mono text-sm text-cyber-cyan font-bold">
                <FileText className="w-4 h-4" />
                <span>RESUME STATUS INSPECTION</span>
              </div>
              <button
                onClick={() => setResumeModalOpen(false)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-sm text-slate-300">
              <p>
                Aditya Kumar&apos;s full academic profile, coursework (B.Tech CSE at LPU), Java & C++ certifications, and projects (Bank Account Simulator & GovAssist AI) are comprehensively detailed on this live portfolio.
              </p>
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs font-mono">
                <div className="flex items-center gap-2 text-amber-400">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>PDF Document Status: Available upon request</span>
                </div>
                <p className="text-slate-400">
                  To receive the tailored software engineering or internship resume copy, you can request it instantly via email.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
              <button
                onClick={() => setResumeModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300"
              >
                CLOSE
              </button>
              <a
                href={`mailto:${personalData.email}?subject=Requesting%20Resume%20for%20Aditya%20Kumar`}
                className="px-4 py-2 rounded-xl bg-cyber-blue hover:bg-blue-600 text-white font-mono text-xs font-bold"
              >
                REQUEST RESUME PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
