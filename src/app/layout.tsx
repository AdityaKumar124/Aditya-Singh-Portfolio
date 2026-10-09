import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aditya Kumar | Software Developer & AI Enthusiast",
  description:
    "Explore Aditya Kumar's software development projects, programming skills, GovAssist AI, and Java-based applications. Computer Science student at Lovely Professional University.",
  keywords: [
    "Aditya Kumar",
    "Software Developer",
    "AI Enthusiast",
    "Computer Science",
    "Lovely Professional University",
    "Java",
    "C++",
    "TypeScript",
    "GovAssist AI",
    "Bank Account Simulator",
  ],
  authors: [{ name: "Aditya Kumar", url: "https://github.com/AdityaKumar124" }],
  openGraph: {
    title: "Aditya Kumar | Software Developer & AI Enthusiast",
    description:
      "Explore Aditya Kumar's software development projects, programming skills, GovAssist AI, and Java-based applications.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='25' fill='%23050814'/><text x='50%' y='55%' font-family='monospace' font-weight='bold' font-size='42' fill='%2300f0ff' text-anchor='middle' dominant-baseline='middle'>AK</text></svg>",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="neural-bg min-h-screen text-slate-100 antialiased selection:bg-blue-600/30 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
