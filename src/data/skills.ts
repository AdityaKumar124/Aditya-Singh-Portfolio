import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "PROGRAMMING LANGUAGES",
    subtitle: "Core algorithmic and systems foundation",
    skills: [
      {
        id: "java",
        name: "Java",
        level: "Proficient",
        category: "programming",
        description:
          "Strong object-oriented programming foundation, custom exception handling, collections framework, and multi-threading.",
        connectedTo: ["dsa", "oop", "mysql"],
      },
      {
        id: "cpp",
        name: "C++",
        level: "Proficient",
        category: "programming",
        description:
          "High-performance computing concepts, memory models, pointers, and problem solving on LeetCode.",
        connectedTo: ["c", "dsa", "leetcode"],
      },
      {
        id: "c",
        name: "C",
        level: "Proficient",
        category: "programming",
        description:
          "Procedural programming, memory allocation, low-level data structures, and computational logic.",
        connectedTo: ["cpp", "dsa"],
      },
      {
        id: "python",
        name: "Python",
        level: "Core",
        category: "programming",
        description:
          "Scripting, data parsing, logic implementation, and foundational AI/ML exploration.",
        connectedTo: ["rest-apis", "problem-solving"],
      },
    ],
  },
  {
    id: "cs",
    title: "COMPUTER SCIENCE",
    subtitle: "Algorithms, complexity analysis, and problem-solving",
    skills: [
      {
        id: "dsa",
        name: "Data Structures & Algorithms",
        level: "Proficient",
        category: "cs",
        description:
          "Arrays, linked lists, stacks, queues, trees, searching, sorting, and algorithmic complexity analysis.",
        connectedTo: ["java", "cpp", "leetcode"],
      },
      {
        id: "problem-solving",
        name: "Problem Solving",
        level: "Proficient",
        category: "cs",
        description:
          "Analytical decomposition of complex technical requirements into modular, efficient solutions.",
        connectedTo: ["dsa", "leetcode"],
      },
    ],
  },
  {
    id: "frontend",
    title: "FRONTEND DEVELOPMENT",
    subtitle: "Modern user interfaces and responsive web layouts",
    skills: [
      {
        id: "html",
        name: "HTML5",
        level: "Core",
        category: "frontend",
        description:
          "Semantic document structuring, accessibility standards, and SEO best practices.",
        connectedTo: ["css", "javascript"],
      },
      {
        id: "css",
        name: "CSS3",
        level: "Core",
        category: "frontend",
        description:
          "Modern styling, responsive grid & flexbox systems, animations, and clean visual design.",
        connectedTo: ["html", "javascript"],
      },
      {
        id: "javascript",
        name: "JavaScript",
        level: "Core",
        category: "frontend",
        description:
          "ES6+ syntax, asynchronous programming (Promises/async-await), and DOM manipulation.",
        connectedTo: ["react", "nodejs"],
      },
      {
        id: "react",
        name: "React",
        level: "Basic",
        category: "frontend",
        description:
          "Component-based UI architecture, state management with hooks, and basic single-page applications.",
        connectedTo: ["javascript", "nextjs"],
      },
      {
        id: "nextjs",
        name: "Next.js",
        level: "Basic",
        category: "frontend",
        description:
          "Exploring server-side rendering, App Router conventions, and modern web application workflows.",
        connectedTo: ["react", "rest-apis"],
      },
    ],
  },
  {
    id: "backend",
    title: "BACKEND & ARCHITECTURE",
    subtitle: "Server-side logic, routing, and data communication",
    skills: [
      {
        id: "nodejs",
        name: "Node.js",
        level: "Basic",
        category: "backend",
        description:
          "Event-driven runtime environment, asynchronous backend handlers, and package ecosystem.",
        connectedTo: ["javascript", "rest-apis"],
      },
      {
        id: "rest-apis",
        name: "REST APIs",
        level: "Core",
        category: "backend",
        description:
          "Designing and consuming structured HTTP endpoints with JSON payloads and error handling.",
        connectedTo: ["nodejs", "mysql", "mongodb"],
      },
    ],
  },
  {
    id: "databases",
    title: "DATABASES",
    subtitle: "Relational modeling and NoSQL document storage",
    skills: [
      {
        id: "mysql",
        name: "MySQL",
        level: "Core",
        category: "databases",
        description:
          "Relational schema modeling, primary/foreign keys, joins, and transactional queries.",
        connectedTo: ["java", "rest-apis"],
      },
      {
        id: "mongodb",
        name: "MongoDB",
        level: "Core",
        category: "databases",
        description:
          "Document-oriented JSON collections, flexible schema modeling, and indexing.",
        connectedTo: ["nodejs", "rest-apis"],
      },
    ],
  },
  {
    id: "tools",
    title: "TOOLS & PLATFORMS",
    subtitle: "Version control, workflow efficiency, and competitive coding",
    skills: [
      {
        id: "git",
        name: "Git",
        level: "Core",
        category: "tools",
        description:
          "Branching, commits, merging, rebasing, and source code version control hygiene.",
        connectedTo: ["github"],
      },
      {
        id: "github",
        name: "GitHub",
        level: "Core",
        category: "tools",
        description:
          "Remote repository hosting, pull requests, collaboration, and open-source workflows.",
        connectedTo: ["git"],
      },
      {
        id: "leetcode",
        name: "LeetCode",
        level: "Practicing",
        category: "tools",
        description:
          "Regular algorithm challenges and data structure practice to sharpen algorithmic thinking.",
        connectedTo: ["dsa", "problem-solving"],
      },
    ],
  },
];

export const softSkills = [
  { name: "Problem Solving", desc: "Structured approach to breaking down intricate logical barriers." },
  { name: "Team Collaboration", desc: "Open communication, peer code review, and goal-oriented teamwork." },
  { name: "Adaptability", desc: "Rapidly absorbing new paradigms, frameworks, and technical standards." },
  { name: "Continuous Learning", desc: "Proactive exploration of AI developments and modern engineering." },
];
