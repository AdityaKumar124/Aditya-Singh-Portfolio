import { EducationItem, TrainingItem, CertificationItem, AchievementItem, MilestoneItem } from "@/types";

export const educationData: EducationItem[] = [
  {
    id: "lpu",
    institution: "Lovely Professional University",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    location: "Punjab, India",
    period: "August 2024 – Present",
    type: "degree",
    details:
      "Focusing on foundational software systems, object-oriented software engineering, discrete mathematics, and algorithms.",
  },
  {
    id: "tnb",
    institution: "TNB Collegiate",
    degree: "Senior Secondary (Intermediate)",
    location: "Bhagalpur, Bihar, India",
    period: "March 2023 – March 2024",
    score: "70%",
    type: "intermediate",
    details:
      "Core curriculum in Mathematics, Physics, and Chemistry, cultivating strong analytical and logical deduction abilities.",
  },
  {
    id: "nhps",
    institution: "New Horizon Public School",
    degree: "Secondary School (Matriculation)",
    location: "Bhagalpur, Bihar, India",
    period: "March 2021 – March 2022",
    score: "74%",
    type: "matriculation",
    details: "Foundational academic training with emphasis on scientific principles and mathematical reasoning.",
  },
];

export const trainingData: TrainingItem[] = [
  {
    id: "dsa-java",
    title: "Data Structures & Algorithms using Java",
    institution: "Lovely Professional University",
    period: "June 2025 – July 2025",
    description:
      "Intensive practical training focusing on algorithm efficiency, asymptotic analysis, recursive problem decomposition, and competitive coding fundamentals.",
    topics: [
      "Linear & Non-Linear Data Structures",
      "Time & Space Complexity Optimization",
      "Dynamic Programming Fundamentals",
      "Recursion & Divide and Conquer",
      "Graph and Tree Traversal Algorithms",
    ],
  },
];

export const certificationsData: CertificationItem[] = [
  {
    id: "cert-java",
    name: "Java with OOPs",
    issuer: "Cipher School",
    verified: true,
  },
  {
    id: "cert-cpp",
    name: "C++ Programming",
    issuer: "Infosys Springboard",
    verified: true,
  },
  {
    id: "cert-c",
    name: "C Programming",
    issuer: "Iam Neo",
    verified: true,
  },
];

export const achievementsData: AchievementItem[] = [
  {
    id: "hackathon-cert",
    title: "Hackathon Participation Certificate",
    organization: "Collegiate / Technical Innovation Hackathon",
    type: "Competitive Innovation",
    description:
      "Collaborated in a time-constrained sprint designing software solutions to solve real-world community challenges.",
  },
];

export const milestonesData: MilestoneItem[] = [
  {
    id: "milestone-1",
    title: "Programming Fundamentals & Memory Models",
    subtitle: "C & C++ Systems Foundations",
    description:
      "Began the engineering path diving deep into procedural logic, pointer mechanics, manual memory concepts, and algorithmic reasoning.",
    category: "foundations",
    highlights: ["Memory pointers & arrays", "Modular code architecture", "Syntax precision in C/C++"],
  },
  {
    id: "milestone-2",
    title: "Data Structures & Algorithmic Rigor",
    subtitle: "DSA in Java & Problem Solving",
    description:
      "Deepened algorithmic intuition through structured training at LPU and active problem solving on LeetCode.",
    category: "algorithms",
    highlights: ["Asymptotic complexity analysis", "Trees, linked lists, hash tables", "LeetCode algorithm practice"],
  },
  {
    id: "milestone-3",
    title: "Java Banking Simulator Engine",
    subtitle: "Robust OOP & Concurrency Practice",
    description:
      "Engineered an end-to-end banking simulator handling multi-account hierarchies, PIN authentication, custom exception handling, and thread safety.",
    category: "development",
    highlights: ["Encapsulation & polymorphism", "Thread-safe balance mutations", "Dual CLI & Swing GUI"],
  },
  {
    id: "milestone-4",
    title: "GovAssist AI Engine",
    subtitle: "Backend Engineering & Citizen Assistance",
    description:
      "Developed an AI-assisted eligibility assistant in TypeScript and Node.js that scrapes, caches, and categorizes Indian government schemes.",
    category: "projects",
    highlights: ["Intent detection & filtering", "Scraping pipeline with Cheerio", "Fault-tolerant caching"],
  },
  {
    id: "milestone-5",
    title: "Modern Web & AI Systems Exploration",
    subtitle: "Next.js, Intelligent Interfaces & Future Tech",
    description:
      "Continuously bridging frontend interactivity, modern web architecture, and practical machine learning applications.",
    category: "future",
    highlights: ["Modern Next.js & React architectures", "Interactive 3D interfaces", "Intelligent workflow automation"],
  },
];
