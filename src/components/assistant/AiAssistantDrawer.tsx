"use client";

import React, { useState, useRef, useEffect } from "react";
import { personalData } from "@/data/personal";
import { skillCategories } from "@/data/skills";
import { projectsData } from "@/data/projects";
import { educationData, certificationsData, trainingData } from "@/data/education";
import {
  Bot,
  X,
  Send,
  Sparkles,
  ChevronRight,
  RotateCcw,
  MessageSquare,
  Cpu,
} from "lucide-react";

interface ChatMessage {
  id: string;
  sender: "user" | "assistant";
  text: string;
  timestamp: string;
}

const QUICK_QUESTIONS = [
  "What is GovAssist AI?",
  "What technologies has Aditya used?",
  "Tell me about the Bank Account Simulator.",
  "What is Aditya currently studying?",
  "How can I contact Aditya?",
];

export const AiAssistantDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "intro-1",
      sender: "assistant",
      text: "Hey! Want to know more about Aditya's projects, skills, or technical interests?",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Verified Rule-Based Knowledge Engine
  const generateVerifiedResponse = (query: string): string => {
    const q = query.toLowerCase().trim();

    // GovAssist AI
    if (q.includes("govassist") || q.includes("government scheme") || q.includes("scheme")) {
      return `GovAssist AI is a government scheme eligibility assistant built with TypeScript, Node.js, Express.js, Axios, and Cheerio. It parses user queries to detect intent, matches citizens to relevant Indian government schemes (like Digital India Internship, NSP Scholarships, PM-Kisan), and features a local caching layer with fallback data for reliable retrieval.`;
    }

    // Bank Account Simulator
    if (q.includes("bank") || q.includes("simulator") || q.includes("account")) {
      return `The Bank Account Simulator is a Java-based application implementing strict OOP principles (encapsulation, polymorphism, abstract Account classes). It models Savings, Checking, and Business accounts with PIN authentication, transaction ledgers, custom exceptions (InsufficientFundsException, InvalidPinException), and thread-safe concurrency controls with both CLI and Swing GUI interfaces.`;
    }

    // Technologies / Skills
    if (q.includes("tech") || q.includes("skill") || q.includes("language") || q.includes("stack")) {
      return `Aditya's technical toolkit includes:\n• Programming: Java (Proficient), C++ (Proficient), C, Python\n• Computer Science: Data Structures & Algorithms, Problem Solving\n• Frontend: HTML5, CSS3, JavaScript (ES6+), React (Basic), Next.js (Basic)\n• Backend & Databases: Node.js (Basic), REST APIs, MySQL, MongoDB\n• Tools: Git, GitHub, LeetCode.`;
    }

    // Studies / Education
    if (q.includes("study") || q.includes("education") || q.includes("college") || q.includes("university") || q.includes("lpu")) {
      return `Aditya is currently pursuing a Bachelor of Technology (B.Tech) in Computer Science and Engineering at Lovely Professional University (LPU), Punjab, India (August 2024 – Present). Prior to this, he completed Intermediate at TNB Collegiate (70%) and Matriculation at New Horizon Public School (74%).`;
    }

    // Training / Certifications
    if (q.includes("cert") || q.includes("training") || q.includes("achievement")) {
      return `Aditya completed practical training in 'Data Structures & Algorithms using Java' at LPU (June–July 2025). His certifications include Java with OOPs (Cipher School), C++ Programming (Infosys Springboard), and C Programming (Iam Neo), plus a Hackathon Participation Certificate.`;
    }

    // Contact
    if (q.includes("contact") || q.includes("email") || q.includes("hire") || q.includes("reach") || q.includes("phone")) {
      return `You can reach Aditya Kumar directly via:\n• Email: rajputboyadiii@gmail.com\n• Phone: +91-6204300911\n• LinkedIn: linkedin.com/in/aditya-kumar6204300911/\n• GitHub: github.com/AdityaKumar124`;
    }

    // Default intelligent fallback
    return `Aditya Kumar is a B.Tech Computer Science student at LPU passionate about software development and practical AI solutions. Feel free to ask about his projects (GovAssist AI, Bank Account Simulator), his tech stack (Java, C++, DSA, Node.js), or how to contact him!`;
  };

  const handleSendMessage = (textToSend?: string) => {
    const question = textToSend || input;
    if (!question.trim()) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: "user",
      text: question,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate natural AI thinking delay
    setTimeout(() => {
      const answer = generateVerifiedResponse(question);
      const assistantMsg: ChatMessage = {
        id: `asst-${Date.now()}`,
        sender: "assistant",
        text: answer,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleReset = () => {
    setMessages([
      {
        id: "intro-1",
        sender: "assistant",
        text: "Hey! Want to know more about Aditya's projects, skills, or technical interests?",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
  };

  return (
    <>
      {/* Floating Assistant Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-900/90 border border-cyber-cyan/40 hover:border-cyber-cyan text-white shadow-xl shadow-cyber-blue/20 backdrop-blur-xl transition-all duration-300 hover:scale-105"
          aria-label="Open Ask Aditya's AI Assistant"
        >
          <div className="relative">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyber-blue to-purple-600 flex items-center justify-center text-white shadow-md">
              <Bot className="w-5 h-5" />
            </div>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyber-cyan animate-pulse" />
          </div>

          <div className="hidden sm:flex flex-col text-left">
            <span className="font-mono text-xs font-bold text-white group-hover:text-cyber-cyan transition-colors">
              Ask Aditya&apos;s AI
            </span>
            <span className="text-[10px] font-mono text-slate-400">
              Verified Knowledge Base
            </span>
          </div>
        </button>
      </div>

      {/* Assistant Modal / Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-end sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="w-full sm:max-w-md h-[85vh] sm:h-[640px] bg-slate-950 border border-cyber-cyan/30 rounded-t-3xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden">
            
            {/* Header */}
            <div className="p-4 border-b border-slate-800 bg-slate-900/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-cyber-blue/20 border border-cyber-cyan/40 text-cyber-cyan flex items-center justify-center">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <span>Ask Aditya&apos;s AI</span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                      ONLINE
                    </span>
                  </h3>
                  <p className="text-[10px] font-mono text-slate-400">
                    Rule-Based Verification Engine
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleReset}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                  title="Clear conversation"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                  title="Close Assistant"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-950/60">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-line ${
                      msg.sender === "user"
                        ? "bg-cyber-blue text-white rounded-br-none shadow-md shadow-cyber-blue/30"
                        : "bg-slate-900 border border-slate-800 text-slate-200 rounded-bl-none shadow-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[9px] font-mono text-slate-500 mt-1 px-1">
                    {msg.timestamp}
                  </span>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-slate-900 border border-slate-800 self-start text-xs font-mono text-cyber-cyan">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-bounce [animation-delay:0.4s]" />
                  <span className="text-[10px] text-slate-400 ml-1">Analyzing verified records...</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Prompt Chips */}
            <div className="p-2.5 border-t border-slate-800/80 bg-slate-950 overflow-x-auto flex gap-1.5 no-scrollbar">
              {QUICK_QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(q)}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300 hover:text-white hover:border-cyber-cyan/50 whitespace-nowrap transition-colors shrink-0"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <div className="p-3 border-t border-slate-800 bg-slate-900/60">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about projects, skills, education..."
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-cyber-cyan"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="p-2.5 rounded-xl bg-cyber-blue hover:bg-blue-600 disabled:opacity-40 text-white transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
