"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SpotlightCard from "@/components/ui/SpotlightCard";

const AUX_MODULES = [
  {
    category: "Team Messaging",
    title: "Corporate Chat Channels",
    desc: "Dedicated department channels, threaded conversations, and direct messaging with smart message deduplication and file sharing.",
    image: "/images/chat_channels.png",
    imageAlt: "Mints ERP Deduplicated Chat Channels Interface",
    badge: "Real-time Sync",
  },
  {
    category: "IT & Operations",
    title: "Helpdesk Ticketing Kanban",
    desc: "Operational support tickets categorized by status (Open, In Progress, Resolved) with priority triage and direct staff assignment.",
    image: "/images/tickets_kanban.png",
    imageAlt: "Mints ERP IT & HR Helpdesk Kanban Interface",
    badge: "Kanban Triage",
  },
  {
    category: "Internal Comms",
    title: "Corporate 3-Pane Mail Room",
    desc: "Secure internal memo suite with Inbox, Sent, Drafts, and Archive folders for official company-wide directives and documentation.",
    image: "/images/mail_room.png",
    imageAlt: "Mints ERP Corporate 3-Pane Mail Room Interface",
    badge: "Encrypted Memos",
  },
  {
    category: "File Management",
    title: "Secure Cloud Drive & Explorer",
    desc: "RBAC-locked folder hierarchy with encrypted uploads, client share permissions, and zero unauthorized cross-department data exposure.",
    image: "/images/cloud_drive.png",
    imageAlt: "Mints ERP Cloud Drive Folder Explorer Interface",
    badge: "Role-Locked",
  },
  {
    category: "Operations Alerts",
    title: "Discord Webhook Settings",
    desc: "Native webhook triggers pushing critical system events, high-value deal wins, and pending manager approvals straight into Discord channels.",
    image: "/images/discord_settings.png",
    imageAlt: "Mints ERP Discord Webhook Settings Configuration",
    badge: "Webhook v2",
  },
  {
    category: "Security & Governance",
    title: "Admin Security & Audit Trail",
    desc: "Immutable append-only audit trail logging administrative modifications, login attempts, permission shifts, and CSV exports.",
    image: "/images/security_audit.png",
    imageAlt: "Mints ERP Admin Security and Audit Trail Interface",
    badge: "Immutable Log",
  },
];

const QUICK_CAPABILITIES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M8 10L12 13L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 3V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Unified Global Command Palette ⌘K",
    desc: "Press ⌘K or Ctrl+K anywhere in the app to instantly search and navigate across Employees, Projects, Clients, and Chat Channels without touching your mouse.",
    shortcut: "⌘K / Ctrl+K",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M18 20V10M12 20V4M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Executive Reports & Business Intelligence",
    desc: "Aggregated monthly revenue growth, billable team utilization, and attendance rate telemetry with 1-click PDF and CSV export utilities.",
    shortcut: "BI Analytics",
  },
];

export default function SupportingFeatures() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 relative bg-[#F0F0F0]/60 border-t border-[#E4E4E4]" id="modules">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs tracking-widest uppercase text-[#687838] font-bold mb-3 block">
              Auxiliary Command Infrastructure
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#182012] mb-3 sm:mb-4 tracking-tight">
              Connected utilities for every team.
            </h2>
            <p className="text-[#5A644D] text-sm md:text-base leading-relaxed">
              Every supporting utility runs on the same Firestore authentication and permissions layer.
              No fragmented tools, no sync lag, and no unverified plugins.
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Real Visual Module Cards (1 col on mobile, 2 on sm/md, 3 on lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-6 sm:mb-8">
          {AUX_MODULES.map((module, i) => (
            <ScrollReveal key={module.title} delay={i * 0.08}>
              <SpotlightCard className="p-5 sm:p-6 flex flex-col justify-between h-full group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] uppercase tracking-wider text-[#5A644D] font-mono">
                      {module.category}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#353E20] bg-[#EDF2E2] px-2.5 py-0.5 rounded-md border border-[#DBE4C7] font-bold">
                      {module.badge}
                    </span>
                  </div>
                  <h3 className="font-sans font-bold text-lg sm:text-xl text-[#182012] mb-2">{module.title}</h3>
                  <p className="text-xs text-[#5A644D] leading-relaxed mb-5 sm:mb-6">{module.desc}</p>
                </div>

                <div className="rounded-xl overflow-hidden border border-[#E4E4E4] shadow-2xs relative bg-[#F0F0F0] group-hover:border-[#687838] transition-colors">
                  <Image
                    src={module.image}
                    alt={module.imageAlt}
                    width={500}
                    height={312}
                    className="w-full h-auto object-contain hover:scale-103 transition-transform duration-300"
                  />
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>

        {/* 2-Column Capability Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {QUICK_CAPABILITIES.map((cap, i) => (
            <ScrollReveal key={cap.title} delay={0.15 + i * 0.1}>
              <SpotlightCard className="p-6 md:p-7 flex flex-col sm:flex-row items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#EDF2E2] border border-[#DBE4C7] flex items-center justify-center text-[#687838] shrink-0">
                  {cap.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="font-sans font-bold text-base text-[#182012]">{cap.title}</h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F0F0F0] border border-[#E4E4E4] text-[#5A644D] font-semibold shrink-0">
                      {cap.shortcut}
                    </span>
                  </div>
                  <p className="text-xs text-[#5A644D] leading-relaxed">{cap.desc}</p>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
