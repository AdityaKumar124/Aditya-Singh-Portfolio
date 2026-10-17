"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { personalData } from "@/data/personal";
import { Menu, X, Terminal, Cpu } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "AI Lab", href: "#ai-lab" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/85 backdrop-blur-xl border-b border-cyber-cyan/15 py-3 shadow-lg shadow-black/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Monogram / Profile Brand */}
        <a
          href="#hero"
          className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-cyber-cyan rounded-lg p-1"
          aria-label="Aditya Kumar - Home"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl overflow-hidden border border-cyber-cyan/40 group-hover:border-cyber-cyan shadow-md shadow-cyber-blue/20 transition-all duration-300">
            <Image
              src="/images/profile.jpg"
              alt="Aditya Kumar"
              width={40}
              height={40}
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
            />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-cyber-cyan animate-pulse border border-slate-950" />
          </div>

          <div className="hidden sm:flex flex-col">
            <span className="font-bold text-sm tracking-wide text-white group-hover:text-cyber-cyan transition-colors">
              {personalData.name}
            </span>
            <span className="font-mono text-[10px] text-slate-400 tracking-wider uppercase">
              CSE • LPU
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800/80 backdrop-blur-md"
          aria-label="Main Navigation"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyber-cyan ${
                  isActive
                    ? "text-cyber-cyan font-semibold bg-cyber-blue/15 shadow-sm shadow-cyber-cyan/30"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-cyber-cyan" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action & Status */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/70 border border-slate-800 text-[11px] font-mono text-slate-300">
            <Cpu className="w-3.5 h-3.5 text-cyber-cyan animate-pulse" />
            <span className="text-slate-400">STATUS:</span>
            <span className="text-emerald-400 font-medium">AVAILABLE</span>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyber-blue to-blue-600 hover:from-blue-500 hover:to-cyber-blue text-white font-mono text-xs font-medium shadow-md shadow-cyber-blue/30 hover:shadow-cyber-blue/50 transition-all duration-200"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>CONNECT</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyber-cyan"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-slate-950/95 backdrop-blur-2xl border-b border-cyber-cyan/20 p-6 shadow-2xl animate-in slide-in-from-top-4">
          <div className="flex flex-col space-y-3">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl font-mono text-sm transition-colors ${
                    isActive
                      ? "bg-cyber-blue/20 text-cyber-cyan font-bold border border-cyber-cyan/30"
                      : "text-slate-300 hover:bg-slate-900 hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-cyber-cyan" />}
                </a>
              );
            })}

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="font-mono text-xs text-slate-400">
                {personalData.statusIndicator}
              </span>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-lg bg-cyber-blue text-white font-mono text-xs font-semibold"
              >
                GET IN TOUCH
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
