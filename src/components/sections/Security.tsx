"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SpotlightCard from "@/components/ui/SpotlightCard";

const RBAC_LEVELS = [
  {
    role: "Founders & Executive",
    level: "Tier 1",
    color: "bg-[#687838] text-white",
    desc: "Unrestricted operational & financial clearance",
    permissions: "Full ledger control, billing setup, workflow architecture, employee roles",
  },
  {
    role: "C-Suite & Operations",
    level: "Tier 2",
    color: "bg-[#EDF2E2] text-[#353E20] border border-[#DBE4C7]",
    desc: "Cross-department strategic oversight",
    permissions: "Performance review, departmental budget visibility, escalation approvals",
  },
  {
    role: "Department Managers",
    level: "Tier 3",
    color: "bg-[#F0F0F0] text-[#182012] border border-[#E4E4E4]",
    desc: "Team, project & timesheet authority",
    permissions: "Leave approvals, timesheet verification, deal conversions, ticket assignments",
  },
  {
    role: "Team Members",
    level: "Tier 4",
    color: "bg-[#F0F0F0] text-[#5A644D]",
    desc: "Assigned project & module execution",
    permissions: "Clock-in/out, task delivery, timesheet submission, chat channels",
  },
  {
    role: "External Clients",
    level: "Tier 5",
    color: "bg-[#F0F0F0] text-[#5A644D]",
    desc: "Server-scoped client portal access",
    permissions: "Isolated view of client milestones, deliverables, and invoices only",
  },
];

const COMPLIANCE_BADGES = [
  { code: "UAE PDPL", title: "UAE Personal Data Protection Law Compliant" },
  { code: "ISO 27001", title: "Information Security Management Standard Aligned" },
  { code: "UAE NESA", title: "National Electronic Security Authority Framework" },
  { code: "GDPR Ready", title: "General Data Protection Regulation Compliant" },
];

const SECURITY_FEATURES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L20 7V12C20 17 16.5 21 12 22C7.5 21 4 17 4 12V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Firebase Admin SDK v14 & Session Guard",
    desc: "Server-side bearer token verification across all API endpoints, automatic session renewal via getIdToken(true), and cryptographically verified JWT claims.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="11" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="16" r="1.5" fill="currentColor" />
      </svg>
    ),
    title: "Firestore Document-Level Security Rules",
    desc: "Strict server-side rule verification directly at the database layer. No user can read or write documents outside their validated clearance role.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M19 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Immutable Admin Audit Trail",
    desc: "Every privilege change, invoice generation, user elevation, and workflow execution is permanently timestamped and logged for regulatory review.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 8H22" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    title: "Isolated External Client Sandboxing",
    desc: "External clients access a completely segregated surface. Invoices and project milestones are filtered via authenticated server-side user tokens.",
  },
];

export default function Security() {
  const [selectedRole, setSelectedRole] = useState(0);

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white relative overflow-hidden" id="security">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#DBE4C7] bg-[#EDF2E2] text-xs font-bold text-[#353E20] uppercase tracking-wider mb-4">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M8 1L14 4.5V8C14 12 11 15 8 16C5 15 2 12 2 8V4.5L8 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
              Enterprise Security &amp; Compliance Vault
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#182012] mb-4 tracking-tight">
              Hardened at the database layer.<br className="hidden sm:inline" /> Compliant by design.
            </h2>
            <p className="text-[#5A644D] max-w-xl mx-auto text-sm sm:text-base">
              Every document query and action is authenticated via Firebase security rules and logged into an audit trail.
            </p>

            {/* Compliance Badges Row (flex-wrap gap-2 sm:gap-3) */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-6">
              {COMPLIANCE_BADGES.map((badge) => (
                <div
                  key={badge.code}
                  className="px-3 py-1.5 rounded-full border border-[#E4E4E4] bg-[#F0F0F0] text-xs text-[#182012] flex items-center gap-2 hover:border-[#687838] transition-colors shadow-2xs min-h-[36px]"
                  title={badge.title}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#687838]" />
                  <span className="font-mono font-bold text-[#182012]">{badge.code}</span>
                  <span className="text-[#5A644D] hidden sm:inline">{badge.title.includes("Aligned") ? "Aligned" : "Compliant"}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Interactive 5-Tier RBAC Ladder */}
        <ScrollReveal delay={0.1}>
          <div className="mb-10 sm:mb-14 max-w-4xl mx-auto bg-[#F0F0F0] p-5 sm:p-7 md:p-8 rounded-3xl border border-[#E4E4E4] shadow-sm">
            <div className="text-center mb-6">
              <span className="text-xs uppercase tracking-widest text-[#687838] font-bold block mb-1">
                Zero-Trust Hierarchy
              </span>
              <h3 className="font-sans font-bold text-xl md:text-2xl text-[#182012]">
                5-Tier Role-Based Access Control
              </h3>
            </div>

            <div className="space-y-2.5 relative">
              {/* Connecting line on mobile and desktop */}
              <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-[#DBE4C7] pointer-events-none hidden sm:block" />

              {RBAC_LEVELS.map((level, i) => {
                const isSelected = selectedRole === i;
                return (
                  <div
                    key={level.role}
                    onClick={() => setSelectedRole(i)}
                    className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer relative z-10 min-h-[44px] ${
                      isSelected
                        ? "bg-white border-[#687838] shadow-md ring-2 ring-[#687838]/15"
                        : "bg-white/80 border-[#E4E4E4] hover:border-[#C3D2A3]"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold shrink-0 ${level.color}`}>
                          {level.level}
                        </span>
                        <span className="font-sans text-base text-[#182012] font-bold">{level.role}</span>
                      </div>
                      <span className="text-xs text-[#5A644D] font-medium">{level.desc}</span>
                    </div>
                    {isSelected && (
                      <div className="mt-3 pt-3 border-t border-[#E4E4E4] text-xs text-[#5A644D] flex items-center gap-2">
                        <span className="text-[#687838] font-mono font-bold">Scope:</span>
                        <span>{level.permissions}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Security Features 4-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SECURITY_FEATURES.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={0.1 + i * 0.08}>
              <SpotlightCard className="p-7 md:p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#EDF2E2] border border-[#DBE4C7] flex items-center justify-center text-[#687838] mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-sans font-bold text-xl text-[#182012] mb-2">{feature.title}</h3>
                  <p className="text-xs md:text-sm text-[#5A644D] leading-relaxed">{feature.desc}</p>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
