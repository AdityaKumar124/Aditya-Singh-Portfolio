import { ProjectItem } from "@/types";

export const projectsData: ProjectItem[] = [
  {
    id: "bank-simulator",
    title: "Bank Account Simulator",
    tagline: "Secure, concurrent financial operations engine in Java",
    category: "Java | Object-Oriented Programming | Software Engineering",
    badge: "Core Systems & OOP",
    description:
      "A Java-based banking application designed to simulate essential banking operations with an emphasis on security, transaction consistency, and exception handling.",
    technologies: ["Java", "OOP Principles", "Multi-Threading", "Swing GUI", "JUnit", "Data Persistence"],
    features: [
      "Account creation across Savings, Checking, and Business account types",
      "Secure PIN authentication with lockout protection mechanisms",
      "Deposits, withdrawals, and inter-account peer-to-peer transfers",
      "Immutable transaction ledger recording timestamps, references, and balance audits",
      "Custom exception architecture (InsufficientFundsException, InvalidPinException)",
      "Thread-safe synchronization primitives preventing race conditions during concurrent operations",
      "Dual user interface: responsive CLI interface alongside interactive Swing GUI",
      "Unit testing suite verifying boundary condition robustness",
    ],
    developerContribution: [
      "Designed full OOP domain model with abstract base Account class and polymorphic specialization.",
      "Engineered thread-safe balance mutation guards to prevent concurrent double-spend race states.",
      "Implemented modular transaction history recorder with chronological audit trail generation.",
      "Built rigorous unit test assertions validating edge cases, decimal precision, and exception traps.",
    ],
    githubUrl: "https://github.com/AdityaKumar124", // Configurable link
    hasLiveDemo: true, // Interactive built-in interactive simulator modal
    simulationType: "bank-simulator",
    stats: [
      { label: "Account Models", value: "3 Types" },
      { label: "Concurrency", value: "Thread-Safe" },
      { label: "Security", value: "PIN & Exception Traps" },
      { label: "Architecture", value: "Strict OOP" },
    ],
  },
  {
    id: "govassist-ai",
    title: "GovAssist AI",
    tagline: "Intelligent citizen scheme eligibility & query matching engine",
    category: "Artificial Intelligence | Node.js | TypeScript | Backend Development",
    badge: "AI & Backend Architecture",
    description:
      "GovAssist AI is a government scheme eligibility assistant designed to help users discover relevant Indian government schemes through user queries and eligibility criteria.",
    technologies: ["TypeScript", "Node.js", "Express.js", "Axios", "Cheerio", "REST API", "Intent Extraction"],
    features: [
      "Query-based citizen scheme discovery parsing natural queries into structured filters",
      "Intent detection categorizing requirements into Agriculture, Education, Tech, and Healthcare",
      "Rule-based multi-factor eligibility evaluation based on age, occupation, and criteria",
      "Web scraping pipeline aggregating structured scheme guidelines using Cheerio and Axios",
      "High-speed local cache layer minimizing external latency and repetitive requests",
      "Resilient fallback data stores guaranteeing answers during official server downtimes",
      "Clean REST endpoints delivering structured JSON payloads for frontend consumption",
    ],
    developerContribution: [
      "Architected TypeScript Express backend handling incoming citizen inquiries and intent extraction.",
      "Engineered scraping & parsing pipelines with Cheerio to extract eligibility rubrics from public portals.",
      "Built multi-tiered caching mechanism reducing repeated external portal fetch latency.",
      "Structured offline verified fallback data stores ensuring continuous zero-downtime query answering.",
    ],
    githubUrl: "https://github.com/AdityaKumar124", // Configurable link
    hasLiveDemo: true, // Built-in interactive simulator demonstration
    simulationType: "govassist-ai",
    stats: [
      { label: "Query Engine", value: "Intent Matching" },
      { label: "Data Pipeline", value: "Cheerio / Scraping" },
      { label: "Type Safety", value: "TypeScript" },
      { label: "Availability", value: "Cached Fallback" },
    ],
  },
];
