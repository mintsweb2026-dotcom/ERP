"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import WindowFrame from "@/components/ui/WindowFrame";
import SpotlightCard from "@/components/ui/SpotlightCard";

interface ModuleTab {
  id: string;
  name: string;
  category: string;
  badge: string;
  headline: string;
  description: string;
  darkImage: string;
  lightImage: string;
  imageAlt: string;
  metrics: { label: string; value: string }[];
  highlights: string[];
}

const MODULES: ModuleTab[] = [
  {
    id: "workflows",
    name: "Automations",
    category: "Flagship Engine",
    badge: "Visual Nodes",
    headline: "Visual Workflow & Conditional Approval Engine",
    description:
      "Design multi-stage approval chains conditionally triggered by business rules — such as expenses exceeding $500 automatically routing to Founders. Drag, connect, and deploy triggers with real-time Discord and webhook alerts.",
    darkImage: "/images/workflow_builder.png",
    lightImage: "/images/light_theme/workflow_builder_light.png",
    imageAlt: "Mints Global ERP Automated Workflow Builder Canvas",
    metrics: [
      { label: "Trigger Speed", value: "< 250ms" },
      { label: "Approval Stages", value: "Multi-Tier" },
      { label: "Alert Latency", value: "Realtime" },
    ],
    highlights: [
      "Visual drag-and-drop trigger node canvas",
      "Dynamic routing (e.g. expenses > $500 → Founder)",
      "Automated Discord webhook notifications",
      "Audit trail logging on every execution",
    ],
  },
  {
    id: "crm",
    name: "CRM Pipeline",
    category: "Revenue Pipeline",
    badge: "Kanban Funnel",
    headline: "Visual Kanban Sales Pipeline & Deal Forecasting",
    description:
      "Track prospective deals from qualification to contract execution on an interactive Kanban board. Calculate weighted pipeline values, track client interaction history, and convert won deals directly into active accounts with 1 click.",
    darkImage: "/images/crm_pipeline.png",
    lightImage: "/images/light_theme/crm_pipeline_light.png",
    imageAlt: "Mints Global ERP CRM Sales Pipeline Kanban View",
    metrics: [
      { label: "Pipeline View", value: "Kanban" },
      { label: "Client Conversion", value: "1-Click" },
      { label: "Valuation Sync", value: "USD & AED" },
    ],
    highlights: [
      "Visual drag-and-drop lead pipeline with weighted value metrics",
      "One-click won-to-client conversion workflow",
      "Detailed deal modals with client interaction histories",
      "Official client roster seamlessly synchronized in Firestore",
    ],
  },
  {
    id: "projects",
    name: "Gantt Roadmap",
    category: "Delivery Engine",
    badge: "Multi-Day Bars",
    headline: "Interactive Project Gantt Roadmap & Milestones",
    description:
      "Visualize multi-day task durations, track cross-team dependencies, and balance task workloads across departments with a dynamic Gantt timeline directly connected to logged timesheet hours.",
    darkImage: "/images/projects_gantt.png",
    lightImage: "/images/light_theme/projects_gantt_light.png",
    imageAlt: "Mints Global ERP Projects Gantt Timeline View",
    metrics: [
      { label: "Timeline Modes", value: "Gantt / Board" },
      { label: "Milestone Alerts", value: "Automated" },
      { label: "Budget Sync", value: "Actual vs Est" },
    ],
    highlights: [
      "Multi-day task duration bars with milestone checkpoints",
      "Budget vs. actual hours tracking from employee timesheets",
      "Multi-view switching between Gantt, Kanban board, and list view",
      "Cross-department dependencies and resource allocations",
    ],
  },
  {
    id: "finance",
    name: "Finance Treasury",
    category: "Corporate Ledger",
    badge: "VAT Compliant",
    headline: "Corporate Treasury, Invoicing & Cash Flow Telemetry",
    description:
      "Generate UAE FTA VAT compliant branded invoices, monitor accounts receivable, track cleared payments, and sync deliverables with the external Client Handover Vault.",
    darkImage: "/images/finance_treasury.png",
    lightImage: "/images/light_theme/finance_treasury_light.png",
    imageAlt: "Mints Global ERP Finance Treasury & Invoicing Ledger",
    metrics: [
      { label: "Tax Standards", value: "UAE FTA VAT" },
      { label: "Invoice Engine", value: "jsPDF Branded" },
      { label: "Payment States", value: "5 Statuses" },
    ],
    highlights: [
      "Multi-item invoice generator with automated tax calculations",
      "Dynamic cashflow telemetry with accounts receivable tracking",
      "Payment status pills: Draft, Sent, Partially Paid, Paid, Overdue",
      "Export deliverables directly to the Client Handover Vault",
    ],
  },
  {
    id: "hr",
    name: "HR Directory",
    category: "People & Org",
    badge: "5 Clearance Roles",
    headline: "Interactive Org Chart & Specialization Subroles",
    description:
      "Onboard new hires, modify clearance levels, track multi-department assignments, and assign specialized corporate subrole service badges with an auto-wrapping details drawer and card overflow limits.",
    darkImage: "/images/hr_directory.png",
    lightImage: "/images/light_theme/hr_directory_light.png",
    imageAlt: "Mints Global ERP HR Directory and Specialization Badges",
    metrics: [
      { label: "RBAC Hierarchy", value: "5 Levels" },
      { label: "Subrole Badges", value: "Dynamic" },
      { label: "Onboarding", value: "Guided Flow" },
    ],
    highlights: [
      "Interactive multi-level org chart (Founder → C-Suite → Departments)",
      "Auto-wrapping details drawer & employee directory",
      "Dynamic specialization subroles (e.g. Incident Response, Full-Stack)",
      "Custom clearance roles and department tagging",
    ],
  },
  {
    id: "presence",
    name: "Attendance",
    category: "Real-Time Telemetry",
    badge: "Zero Skew",
    headline: "Real-Time Attendance & Clock-Skew Protected Shifts",
    description:
      "Serverless shift state machine (clock-in, break-start, break-end, clock-out) with client-server clock-skew protection and real-time attendance telemetry dispatched directly to Discord alert channels.",
    darkImage: "/images/live_presence_map.png",
    lightImage: "/images/light_theme/attendance_light.png",
    imageAlt: "Mints Global ERP Attendance and Live Presence Tracker",
    metrics: [
      { label: "Shift Engine", value: "State Machine" },
      { label: "Clock-Skew", value: "Zero Drift" },
      { label: "Discord Alerts", value: "Instant" },
    ],
    highlights: [
      "Serverless state machine with formal attendance correction workflows",
      "Strict non-negative timer clamping eliminating negative display drift",
      "Weekly timesheet matrix calculating daily net worked hours",
      "Instant shift notifications dispatched to corporate Discord channels",
    ],
  },
  {
    id: "portal",
    name: "Client Portal",
    category: "Secure External",
    badge: "Server Scoped",
    headline: "External Client Portal & Secure Cloud Drive",
    description:
      "Give external clients a scoped, branded environment to track their specific projects and invoices with server-side access verification. Includes an RBAC-locked Cloud Drive folder explorer.",
    darkImage: "/images/client_portal.png",
    lightImage: "/images/light_theme/client_portal_light.png",
    imageAlt: "Mints Global ERP External Client Portal",
    metrics: [
      { label: "Access Model", value: "Scoped RBAC" },
      { label: "Data Leakage", value: "Zero" },
      { label: "Cloud Drive", value: "Folder Encrypted" },
    ],
    highlights: [
      "Scoped client portal with server verification",
      "Client-specific invoice scoping & milestone review",
      "RBAC-locked folder hierarchy & cloud file explorer",
      "Zero exposure of internal employee communications",
    ],
  },
];

export default function BentoShowcase() {
  const [activeTab, setActiveTab] = useState<string>("workflows");
  const [themeMode, setThemeMode] = useState<"dark" | "light">("dark");
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const current = MODULES.find((m) => m.id === activeTab) || MODULES[0];

  const checkScroll = useCallback(() => {
    const el = tabsContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    checkScroll();
    const el = tabsContainerRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const handleTabSelect = (id: string) => {
    setActiveTab(id);
    const container = tabsContainerRef.current;
    if (!container) return;
    const activeBtn = container.querySelector(`[data-tab-id="${id}"]`) as HTMLElement;
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  };

  const scrollTabs = (direction: "left" | "right") => {
    const el = tabsContainerRef.current;
    if (!el) return;
    const offset = direction === "left" ? -280 : 280;
    el.scrollBy({ left: offset, behavior: "smooth" });
  };

  // Allow mouse wheel to horizontally scroll tabs effortlessly
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const el = tabsContainerRef.current;
    if (!el) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX) && el.scrollWidth > el.clientWidth) {
      el.scrollLeft += e.deltaY;
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-28 relative bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#DBE4C7] bg-[#EDF2E2] text-xs font-bold text-[#353E20] uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#687838] animate-pulse" />
              Unified Command Center Architecture
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#182012] leading-[1.15] mb-4 sm:mb-5 tracking-tight">
              Every operation, department, and workflow in{" "}
              <span className="text-[#687838]">one synchronized view.</span>
            </h2>
            <p className="text-[#5A644D] text-sm sm:text-base md:text-lg leading-relaxed">
              Explore the core engines powering Mints Global ERP. Switch between live modules
              below to inspect actual production interfaces across both Olive Forest and Sage Light themes.
            </p>
          </div>
        </ScrollReveal>

        {/* Dual Theme Switcher & Module Navigation Tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-col items-center gap-4 mb-8 md:mb-10">
            {/* Theme Toggle Pill */}
            <div className="inline-flex items-center gap-2 p-1 rounded-2xl bg-[#F0F0F0] border border-[#E4E4E4] shadow-2xs">
              <span className="text-xs font-bold text-[#182012] pl-3 pr-1">Theme Preview:</span>
              <button
                onClick={() => setThemeMode("dark")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  themeMode === "dark"
                    ? "bg-[#182012] text-white shadow-xs"
                    : "text-[#5A644D] hover:text-[#182012]"
                }`}
              >
                <span>🌙</span> Forest Dark
              </button>
              <button
                onClick={() => setThemeMode("light")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  themeMode === "light"
                    ? "bg-white text-[#182012] shadow-xs border border-[#DBE4C7]"
                    : "text-[#5A644D] hover:text-[#182012]"
                }`}
              >
                <span>☀️</span> Sage Light
              </button>
            </div>

            {/* Horizontal Module Tabs with Smooth Navigation Controls */}
            <div className="w-full relative max-w-5xl mx-auto flex items-center justify-center">
              {/* Left Scroll Chevron Button */}
              <button
                onClick={() => scrollTabs("left")}
                disabled={!canScrollLeft}
                aria-label="Scroll tabs left"
                className={`hidden sm:flex absolute -left-2 sm:-left-5 z-20 w-9 h-9 rounded-full bg-white border border-[#DBE4C7] shadow-md items-center justify-center text-[#182012] transition-all cursor-pointer ${
                  canScrollLeft
                    ? "opacity-100 hover:bg-[#EDF2E2] hover:scale-105"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Scrollable Container with Mouse Wheel Support */}
              <div
                ref={tabsContainerRef}
                onWheel={handleWheel}
                className="w-full flex items-center justify-start md:justify-center overflow-x-auto snap-x py-1 px-1 sm:px-2 scrollbar-none select-none"
              >
                <div className="bg-[#F0F0F0] p-1.5 rounded-2xl flex items-center gap-1.5 shrink-0 border border-[#E4E4E4] shadow-2xs">
                  {MODULES.map((module) => {
                    const isActive = activeTab === module.id;
                    return (
                      <button
                        key={module.id}
                        data-tab-id={module.id}
                        onClick={() => handleTabSelect(module.id)}
                        className={`relative px-3.5 sm:px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-colors flex items-center gap-2 shrink-0 cursor-pointer snap-start min-h-[44px] ${
                          isActive
                            ? "text-[#182012] font-bold"
                            : "text-[#5A644D] hover:text-[#182012] hover:bg-white/60"
                        }`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="activeTabPill"
                            className="absolute inset-0 bg-white rounded-xl shadow-xs border border-[#DBE4C7]"
                            transition={{ type: "spring", stiffness: 450, damping: 35 }}
                          />
                        )}
                        <span className="relative z-10">{module.name}</span>
                        <span
                          className={`relative z-10 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md font-bold ${
                            isActive
                              ? "bg-[#EDF2E2] text-[#353E20]"
                              : "bg-[#E4E4E4] text-[#5A644D]"
                          }`}
                        >
                          {module.badge}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Scroll Chevron Button */}
              <button
                onClick={() => scrollTabs("right")}
                disabled={!canScrollRight}
                aria-label="Scroll tabs right"
                className={`hidden sm:flex absolute -right-2 sm:-right-5 z-20 w-9 h-9 rounded-full bg-white border border-[#DBE4C7] shadow-md items-center justify-center text-[#182012] transition-all cursor-pointer ${
                  canScrollRight
                    ? "opacity-100 hover:bg-[#EDF2E2] hover:scale-105"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Active Module Showcase Card */}
        <ScrollReveal delay={0.15}>
          <div className="bg-white rounded-3xl p-6 md:p-10 border border-[#E4E4E4] shadow-xl shadow-[#687838]/8 mb-16 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Details Column */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#687838] font-bold mb-3">
                      <span>{current.category}</span>
                      <span className="text-[#C3D2A3]">/</span>
                      <span className="text-[#5A644D] font-medium">{current.badge}</span>
                    </div>

                    <h3 className="font-sans font-bold text-2xl md:text-3xl text-[#182012] leading-snug mb-4">
                      {current.headline}
                    </h3>

                    <p className="text-[#5A644D] text-sm leading-relaxed mb-6">
                      {current.description}
                    </p>

                    {/* Metric Pills on #F0F0F0 */}
                    <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-[#F0F0F0] border border-[#E4E4E4]">
                      {current.metrics.map((m) => (
                        <div key={m.label} className="text-center">
                          <div className="text-sm md:text-base font-bold text-[#182012] font-mono">
                            {m.value}
                          </div>
                          <div className="text-[10px] uppercase tracking-wider text-[#5A644D] mt-0.5">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Highlights Checklist */}
                    <ul className="space-y-2.5 mb-2">
                      {current.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-[#353E20]">
                          <div className="w-4 h-4 rounded-full bg-[#EDF2E2] text-[#687838] flex items-center justify-center shrink-0 mt-0.5">
                            <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                              <path
                                d="M3 8L6.5 11.5L13 4.5"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <span className="leading-tight">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Screenshot Preview */}
              <div className="lg:col-span-7">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${current.id}-${themeMode}`}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                  >
                    <WindowFrame
                      src={themeMode === "dark" ? current.darkImage : current.lightImage}
                      alt={`${current.imageAlt} (${themeMode === "dark" ? "Signature Dark Theme" : "Sage Light Theme"})`}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 4-Card Bento Grid: Modular Deep-Dives */}
        <ScrollReveal delay={0.2}>
          <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs tracking-widest uppercase text-[#687838] font-bold block mb-1">
                Modular Capabilities
              </span>
              <h3 className="font-sans font-bold text-2xl md:text-3xl text-[#182012]">
                Engineered for High-Velocity Operators
              </h3>
            </div>
            <p className="text-xs md:text-sm text-[#5A644D] max-w-md">
              Each module is native to the same Firestore data model. No third-party sync delays,
              no broken webhooks, and zero context switching.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {/* Bento Card 1: Workflow Engine */}
            <SpotlightCard className="col-span-1 md:col-span-2 p-6 sm:p-7 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#353E20] bg-[#EDF2E2] px-3 py-1 rounded-full border border-[#DBE4C7]">
                    Flagship Automation
                  </span>
                  <span className="text-xs text-[#5A644D] font-mono">Rule-Engine v1.5</span>
                </div>
                <h4 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-2">
                  Multi-Stage Conditional Approval Chains
                </h4>
                <p className="text-xs sm:text-sm text-[#5A644D] leading-relaxed max-w-xl mb-6">
                  Build business logic without custom code. Automatically route expenses over $500
                  to Founders, trigger deal escalations, and broadcast operational alerts to Discord.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden border border-[#E4E4E4] shadow-sm relative bg-[#F0F0F0]">
                <Image
                  src="/images/workflow_builder.png"
                  alt="Workflow Builder Canvas"
                  width={900}
                  height={450}
                  className="w-full h-auto object-contain hover:scale-102 transition-transform duration-300"
                />
              </div>
            </SpotlightCard>

            {/* Bento Card 2: Live Presence */}
            <SpotlightCard className="col-span-1 p-6 sm:p-7 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#353E20] bg-[#EDF2E2] px-3 py-1 rounded-full border border-[#DBE4C7]">
                    Live Telemetry
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#687838] animate-ping" />
                </div>
                <h4 className="font-sans font-bold text-xl text-[#182012] mb-2">
                  Real-Time Heartbeat Map
                </h4>
                <p className="text-xs text-[#5A644D] leading-relaxed mb-6">
                  Pulsing presence states synced straight from Cloud Firestore with zero polling overhead.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden border border-[#E4E4E4] shadow-sm relative bg-[#F0F0F0]">
                <Image
                  src="/images/live_presence_map.png"
                  alt="Live Presence Map"
                  width={500}
                  height={375}
                  className="w-full h-auto object-contain hover:scale-104 transition-transform duration-300"
                />
              </div>
            </SpotlightCard>

            {/* Bento Card 3: Client Portal */}
            <SpotlightCard className="col-span-1 p-6 sm:p-7 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#353E20] bg-[#EDF2E2] px-3 py-1 rounded-full border border-[#DBE4C7]">
                    Zero-Leak Security
                  </span>
                  <span className="text-xs text-[#5A644D] font-mono">Server Scoped</span>
                </div>
                <h4 className="font-sans font-bold text-xl text-[#182012] mb-2">
                  External Client Portal
                </h4>
                <p className="text-xs text-[#5A644D] leading-relaxed mb-6">
                  Clients log into an isolated view to inspect invoices and deliverables with zero internal exposure.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden border border-[#E4E4E4] shadow-sm relative bg-[#F0F0F0]">
                <Image
                  src="/images/client_portal.png"
                  alt="External Client Portal"
                  width={500}
                  height={375}
                  className="w-full h-auto object-contain hover:scale-104 transition-transform duration-300"
                />
              </div>
            </SpotlightCard>

            {/* Bento Card 4: Capacity & Timesheets */}
            <SpotlightCard className="col-span-1 md:col-span-2 p-6 sm:p-7 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#353E20] bg-[#EDF2E2] px-3 py-1 rounded-full border border-[#DBE4C7]">
                    Resource Analytics
                  </span>
                  <span className="text-xs text-[#5A644D] font-mono">Capacity Matrix</span>
                </div>
                <h4 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-2">
                  Weekly Timesheets &amp; Capacity Heatmaps
                </h4>
                <p className="text-xs sm:text-sm text-[#5A644D] leading-relaxed max-w-xl mb-6">
                  Matrix grid entry calibrated for high-performance service businesses. Track billable
                  hours, spot project bottlenecks, and balance team bandwidth before deadlines hit.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden border border-[#E4E4E4] shadow-sm relative bg-[#F0F0F0]">
                <Image
                  src="/images/timesheet_matrix.png"
                  alt="Weekly Timesheet Matrix"
                  width={900}
                  height={450}
                  className="w-full h-auto object-contain hover:scale-102 transition-transform duration-300"
                />
              </div>
            </SpotlightCard>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
