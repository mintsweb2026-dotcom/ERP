"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const PHASES = [
  {
    phase: "v1.2 Release",
    title: "Billing, Gantt & Presence",
    desc: "Client billing suite, secure Cloud Drive, Gantt capacity heatmap, weekly timesheet matrix, and live presence map.",
    status: "complete" as const,
  },
  {
    phase: "v1.3 - v1.4",
    title: "Workflows & Client Portal",
    desc: "Visual conditional workflow builder, isolated external client portal, ⌘K command palette, and IT/HR ticketing Kanban.",
    status: "complete" as const,
  },
  {
    phase: "v1.5 Active",
    title: "Dual-Theme & Security Hardening",
    desc: "Olive Dark & Sage Light theme engine, Firebase Admin SDK server token validation, clock-skew fixes, and enterprise docs.",
    status: "active" as const,
  },
  {
    phase: "v1.6 Planned",
    title: "AI Operations & Forecasting",
    desc: "AI-assisted resource forecasting, automated capacity rebalancing, and conversational enterprise command assistant.",
    status: "planned" as const,
  },
];

export default function Roadmap() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white" id="roadmap">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-xs tracking-widest uppercase text-[#687838] font-bold mb-3 block">
              Continuous Delivery
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#182012] mb-3 tracking-tight">
              Actively built. Rapidly shipped.
            </h2>
            <p className="text-[#5A644D] text-sm md:text-base">
              Follow our engineering progression from core architecture to enterprise scale.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline: Vertical on Mobile (<md), 4-col Horizontal on Desktop (>=md) */}
        <div className="relative">
          {/* Desktop Horizontal Line */}
          <div className="hidden md:block absolute top-7 left-12 right-12 h-0.5 bg-[#E4E4E4] z-0" />

          {/* Mobile Vertical Connecting Line */}
          <div className="md:hidden absolute top-6 bottom-6 left-4 w-0.5 bg-[#DBE4C7] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
            {PHASES.map((phase, i) => (
              <ScrollReveal key={phase.phase} delay={i * 0.08}>
                <div className="relative pl-8 md:pl-0">
                  {/* Mobile timeline bullet point */}
                  <div className="md:hidden absolute left-[-1.35rem] top-5 w-3 h-3 rounded-full bg-[#687838] border-2 border-white shadow-xs" />

                  <div className={`rounded-2xl p-5 border transition-colors h-full flex flex-col justify-between ${
                    phase.status === "active"
                      ? "bg-[#EDF2E2]/60 border-[#687838] shadow-md shadow-[#687838]/10"
                      : "bg-[#F0F0F0] border-[#E4E4E4] hover:border-[#687838]"
                  }`}>
                    <div>
                      {/* Status Pill */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-mono font-bold text-[#5A644D] uppercase">
                          {phase.phase}
                        </span>
                        {phase.status === "complete" ? (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#353E20] bg-[#EDF2E2] px-2 py-0.5 rounded-full border border-[#DBE4C7]">
                            Shipped
                          </span>
                        ) : phase.status === "active" ? (
                          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-white bg-[#687838] px-2.5 py-0.5 rounded-full shadow-2xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                            Production
                          </span>
                        ) : (
                          <span className="text-[10px] font-semibold text-[#859177] bg-white/70 px-2 py-0.5 rounded-full border border-[#E4E4E4]">
                            Upcoming
                          </span>
                        )}
                      </div>
                      <h3 className="font-sans font-bold text-base text-[#182012] mb-2">
                        {phase.title}
                      </h3>
                      <p className="text-xs text-[#5A644D] leading-relaxed">
                        {phase.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
