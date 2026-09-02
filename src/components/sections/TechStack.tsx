"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const TECH = [
  { name: "Next.js 16 (Turbopack)", logo: "▲" },
  { name: "React 19", logo: "⚛" },
  { name: "TypeScript 5", logo: "TS" },
  { name: "Google Cloud Firestore", logo: "🔥" },
  { name: "Firebase Admin SDK v14", logo: "🛡️" },
  { name: "Tailwind CSS v4", logo: "🎨" },
  { name: "Framer Motion", logo: "✦" },
  { name: "Vercel Edge", logo: "▲" },
];

export default function TechStack() {
  return (
    <section className="py-12 md:py-16 border-y border-[#E4E4E4] bg-[#F0F0F0]/50">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <p className="text-center text-xs tracking-[0.2em] uppercase text-[#5A644D] font-bold mb-6">
            Engineered on Modern Serverless Infrastructure
          </p>
        </ScrollReveal>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {TECH.map((tech, i) => (
            <ScrollReveal key={tech.name} delay={i * 0.04}>
              <div className="flex items-center gap-2 text-[#5A644D] hover:text-[#182012] transition-colors duration-200 cursor-default group px-3 py-1.5 rounded-xl bg-white/60 border border-transparent hover:border-[#DBE4C7] shadow-2xs">
                <span className="text-sm font-mono font-bold group-hover:text-[#687838] transition-colors">
                  {tech.logo}
                </span>
                <span className="text-xs sm:text-sm font-semibold tracking-tight">{tech.name}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
