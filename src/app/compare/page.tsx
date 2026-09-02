"use client";

import { useState } from "react";
import AnnouncementBar from "@/components/sections/AnnouncementBar";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FinalCTA from "@/components/sections/FinalCTA";
import Link from "next/link";
import Image from "next/image";

type CompetitorKey = "all" | "zoho" | "sap" | "tally" | "sage" | "monday";

interface CompetitorProfile {
  id: CompetitorKey;
  name: string;
  category: string;
  tagline: string;
  summary: string;
  badge: string;
  logoColor: string;
  stackPrice: string;
  mintsPrice: string;
  savings: string;
  strengths: string[];
  weaknesses: string[];
}

const COMPETITORS: CompetitorProfile[] = [
  {
    id: "zoho",
    name: "Zoho One / Ecosystem",
    category: "Modular Cloud Suite",
    tagline: "Mints ERP vs Zoho: Unified Data vs 12 Disconnected Apps",
    summary:
      "Zoho offers dozens of individual applications (Zoho CRM, People, Books, Projects), but each lives in its own silo. Teams suffer from fragile cross-app sync, duplicate records, and escalating tier upgrades as company headcount grows.",
    badge: "Most Common Migration",
    logoColor: "#E42528",
    stackPrice: "$125 - $220",
    mintsPrice: "$49",
    savings: "Up to 75%",
    strengths: [
      "1 single Firestore database across all 18 enterprise modules",
      "Sub-250ms real-time event updates without background sync jobs",
      "All modules (CRM, HR, Gantt, Invoices, Workflows, Drive) included in one license",
      "Built-in UAE FTA, UK MTD, Indian GST, and EU e-invoicing out of the box",
    ],
    weaknesses: [
      "Zoho divides data across separate databases requiring complex Deluge scripts",
      "Separate administrative consoles for users, billing, and permissions",
      "Hidden costs for additional storage, portal users, and API calls",
    ],
  },
  {
    id: "sap",
    name: "SAP Business One",
    category: "Heavyweight Enterprise ERP",
    tagline: "Mints ERP vs SAP: Agile Cloud Speed vs Multi-Year Consulting",
    summary:
      "SAP Business One is engineered for legacy monolithic enterprises with deep consulting budgets. Deployments routinely take 6 to 18 months, require certified implementation partners, and lock teams into clunky, dated desktop interfaces.",
    badge: "Enterprise Alternative",
    logoColor: "#0070F2",
    stackPrice: "$180 - $350+",
    mintsPrice: "$49 - $149",
    savings: "Up to 80%",
    strengths: [
      "Instant zero-install cloud deployment in under 15 minutes",
      "Modern Next.js 16 App Router & React 19 interface with dual themes (Forest & Sage)",
      "Zero mandatory systems integrator fees or annual consultant maintenance",
      "Native mobile-first responsiveness across phones, tablets, and desktops",
    ],
    weaknesses: [
      "SAP requires massive upfront capital expenditure and long-term lock-in",
      "Modifications demand specialized ABAP programmers and custom development",
      "Steep learning curve leading to low frontline employee adoption",
    ],
  },
  {
    id: "tally",
    name: "TallyPrime",
    category: "Legacy Desktop Accounting",
    tagline: "Mints ERP vs Tally: Collaborative Cloud vs Desktop .EXE",
    summary:
      "TallyPrime is the traditional accounting standard in India and South Asia, but it remains fundamentally desktop-bound. It lacks modern collaborative CRM pipelines, Gantt project timelines, mobile shift punches, and real-time remote visibility.",
    badge: "Cloud Modernization",
    logoColor: "#337AB7",
    stackPrice: "$85 - $160",
    mintsPrice: "$39 (₹2,400)",
    savings: "Up to 65%",
    strengths: [
      "Cloud-native real-time collaboration accessible securely from any browser",
      "Full CRM pipeline with deal stages, revenue forecasts, and contact directories",
      "Employee shift punch state machine with mathematical clock-skew clamping",
      "Multi-region tax invoicing: Indian GST, UAE VAT, UK MTD, and EU Peppol",
    ],
    weaknesses: [
      "Tally is restricted to single physical computers or fragile remote desktop links",
      "No native employee self-service portal, leave approvals, or org chart",
      "Zero visual project Gantt milestone management or IT helpdesk ticketing",
    ],
  },
  {
    id: "sage",
    name: "Sage & Xero Stack",
    category: "Accounting + Marketplace Plugins",
    tagline: "Mints ERP vs Sage/Xero: Single Command Center vs 8 Plugins",
    summary:
      "Sage and Xero are competent general ledgers, but they do not manage operations. Scaling teams are forced to purchase 5 to 8 separate marketplace plug-ins for HR, CRM, Gantt charts, file storage, and helpdesk, creating expensive tool sprawl.",
    badge: "Eliminate Tool Sprawl",
    logoColor: "#00DC7D",
    stackPrice: "$160 - $280",
    mintsPrice: "$49 (£39)",
    savings: "Up to 70%",
    strengths: [
      "No third-party plug-in subscription sprawl or integration failures",
      "Won deals automatically trigger Gantt milestones and pre-filled invoices",
      "Unified audit trail and 5-tier role-based access control across all operations",
      "Corporate Mail Room and encrypted Cloud Drive built-in without extra fees",
    ],
    weaknesses: [
      "Sage & Xero require paid add-ons for timesheets, projects, CRM, and HR",
      "Each marketplace plug-in has separate billing, logins, and support desks",
      "API rate limits cause data synchronization delays between apps",
    ],
  },
  {
    id: "monday",
    name: "Monday / Asana + Tools",
    category: "Work Management Only",
    tagline: "Mints ERP vs Work Trackers: Complete Operations vs Task Lists",
    summary:
      "Work management tools like Monday.com, Asana, and ClickUp excel at visual task tracking, but they are not ERP systems. They cannot execute statutory tax invoices, run compliant employee attendance state machines, or enforce database-level RBAC.",
    badge: "True Enterprise OS",
    logoColor: "#6161FF",
    stackPrice: "$140 - $240",
    mintsPrice: "$49",
    savings: "Up to 60%",
    strengths: [
      "Full business lifecycle: Lead ➔ Deal ➔ Project Gantt ➔ Timesheet ➔ Tax Invoice",
      "Real-world regulatory compliance (UAE FTA, UK MTD, Indian GST, EU EN 16931)",
      "Strict 5-tier clearance hierarchy protecting confidential financial & HR data",
      "External client portal with scoped project visibility and invoice pay links",
    ],
    weaknesses: [
      "Monday/Asana cannot generate legally compliant tax invoices or track VAT/GST",
      "No native employee shift clock-in/out telemetry or leave accrual balance engine",
      "No corporate treasury ledger with foreign currency exchange tracking",
    ],
  },
];

interface MatrixRow {
  feature: string;
  category: string;
  mints: string | boolean;
  zoho: string | boolean;
  sap: string | boolean;
  tally: string | boolean;
  sage: string | boolean;
  monday: string | boolean;
}

const MATRIX_DATA: MatrixRow[] = [
  // Core Platform
  { feature: "Unified Single Database Architecture", category: "Core Platform", mints: true, zoho: "Siloed", sap: true, tally: "Local .db", sage: "Accounting only", monday: "No ERP data" },
  { feature: "Real-Time Telemetry (<250ms latency)", category: "Core Platform", mints: true, zoho: "Batch sync", sap: "Scheduled", tally: false, sage: "Polling", monday: true },
  { feature: "Dual Theme Engine (Forest Dark & Sage Light)", category: "Core Platform", mints: true, zoho: false, sap: false, tally: false, sage: false, monday: "Basic dark" },
  { feature: "Instant Cloud Setup (<15 mins)", category: "Core Platform", mints: true, zoho: "Days", sap: "Months", tally: "Manual install", sage: "Hours", monday: true },
  { feature: "5-Tier Role-Based Access Control (RBAC)", category: "Core Platform", mints: true, zoho: "Tier-gated", sap: true, tally: "Basic user", sage: "Basic roles", monday: "Workspace only" },

  // HR & Attendance
  { feature: "Shift Punch State Machine with Clock-Skew Clamping", category: "HR & Workforce", mints: true, zoho: "Zoho People app", sap: "Expensive add-on", tally: false, sage: "Plugin required", monday: false },
  { feature: "Live Presence Map & Geolocation Verification", category: "HR & Workforce", mints: true, zoho: "Separate add-on", sap: "Custom module", tally: false, sage: false, monday: false },
  { feature: "HR Directory, Subroles & Dynamic Org Chart", category: "HR & Workforce", mints: true, zoho: "Zoho People", sap: true, tally: false, sage: "Plugin required", monday: "Visual board only" },
  { feature: "Leave Accrual & Multi-Level Approval Workflows", category: "HR & Workforce", mints: true, zoho: true, sap: true, tally: false, sage: "Plugin required", monday: "Custom form" },

  // CRM & Projects
  { feature: "Visual CRM Kanban Pipeline with Revenue Forecasting", category: "CRM & Projects", mints: true, zoho: "Zoho CRM app", sap: "SAP CRM suite", tally: false, sage: "Plugin required", monday: "Template only" },
  { feature: "Interactive Gantt Milestone & Dependency Timeline", category: "CRM & Projects", mints: true, zoho: "Zoho Projects app", sap: "Complex module", tally: false, sage: false, monday: true },
  { feature: "7-Day Timesheet Matrix with Manager Sign-Off", category: "CRM & Projects", mints: true, zoho: "Zoho Projects", sap: "Add-on", tally: false, sage: "Plugin required", monday: "Time tracker" },
  { feature: "External Client Portal for Milestones & Approvals", category: "CRM & Projects", mints: true, zoho: "Limited portals", sap: "Custom portal", tally: false, sage: false, monday: "Guest view" },
  { feature: "IT / HR Helpdesk Ticket Kanban with SLA Tracking", category: "CRM & Projects", mints: true, zoho: "Zoho Desk app", sap: "Add-on", tally: false, sage: false, monday: "Template only" },

  // Finance & Multi-Region
  { feature: "Multi-Region Invoicing (UAE VAT, UK MTD, India GST, EU)", category: "Finance & Compliance", mints: true, zoho: "Country-locked", sap: "Complex localization", tally: "India/UAE only", sage: "Regional edition", monday: false },
  { feature: "Automated Reverse-Charge & Intra-Community Tax", category: "Finance & Compliance", mints: true, zoho: "Manual setup", sap: true, tally: false, sage: "Manual rule", monday: false },
  { feature: "Multi-Currency Treasury (USD, AED, GBP, INR, EUR)", category: "Finance & Compliance", mints: true, zoho: true, sap: true, tally: "Basic multi", sage: "Tier upgrade", monday: false },
  { feature: "Double-Entry General Ledger (GL / AP / AR)", category: "Finance & Compliance", mints: "Audit Export Integration", zoho: true, sap: true, tally: true, sage: true, monday: false },
  { feature: "Automated Immutable Audit Logging", category: "Finance & Compliance", mints: true, zoho: "Audit log", sap: true, tally: "Audit trail", sage: true, monday: "Activity log" },

  // Automations & Collaboration
  { feature: "Visual Drag-and-Drop Workflow Builder", category: "Automations & Tools", mints: true, zoho: "Deluge scripting", sap: "Bespoke code", tally: false, sage: false, monday: "Recipe based" },
  { feature: "Built-In Corporate Chat Channels & DMs", category: "Automations & Tools", mints: true, zoho: "Zoho Cliq app", sap: false, tally: false, sage: false, monday: "Updates feed" },
  { feature: "Corporate Mail Room & Document Cloud Drive", category: "Automations & Tools", mints: true, zoho: "Zoho Mail/WorkDrive", sap: "Add-on", tally: false, sage: false, monday: "Files column" },
  { feature: "Heavy Industrial Manufacturing BOM & Shop Floor", category: "Automations & Tools", mints: "— Not Targeted (Digital/Service)", zoho: "Zoho Inventory add-on", sap: true, tally: "Basic stock", sage: "Add-on module", monday: false },
  { feature: "Discord Webhook & System Integration Triggers", category: "Automations & Tools", mints: true, zoho: "Via Zapier", sap: false, tally: false, sage: false, monday: "Via Zapier" },

  // Commercials & TCO
  { feature: "All 18 Enterprise Modules Included in One License", category: "Commercials & Value", mints: true, zoho: "Requires Zoho One", sap: "Module pricing", tally: "Basic package", sage: "Per-module add-ons", monday: "Per-seat per-product" },
  { feature: "Zero Implementation / Mandatory Consultant Fees", category: "Commercials & Value", mints: true, zoho: "Low-Med", sap: "$25k - $100k+", tally: "Low", sage: "Med", monday: true },
  { feature: "Predictable Multi-Currency Monthly/Annual Pricing", category: "Commercials & Value", mints: true, zoho: true, sap: "Custom quote", tally: "Annual license", sage: "Variable tier", monday: "Tier jumps" },
];

const CATEGORIES = [
  "All",
  "Core Platform",
  "HR & Workforce",
  "CRM & Projects",
  "Finance & Compliance",
  "Automations & Tools",
  "Commercials & Value",
];

const FAQS = [
  {
    q: "Why should we switch to Mints ERP instead of continuing with our Zoho or Tally setup?",
    a: "Disconnected tools create data silos and reconciliation overhead. With Zoho, you are paying for multiple separate subscriptions (CRM, Projects, People, Books) with different admin interfaces and fragile sync. With Tally, your records are trapped on local PCs without mobile visibility or workflow automations. Mints ERP brings HR, CRM, Gantt timelines, attendance punches, and tax invoicing into one single real-time database.",
  },
  {
    q: "Do we need to hire external consultants to implement Mints ERP like SAP requires?",
    a: "No. Unlike SAP Business One—which routinely requires $30,000+ in consulting fees and months of setup—Mints ERP is ready immediately upon provisioning. You can invite your team, configure your 5-tier roles, and start generating invoices and tracking project Gantt milestones in under 15 minutes.",
  },
  {
    q: "Are all 18 modules included in the subscription price, or are there hidden per-app fees?",
    a: "All 18 enterprise modules are included natively in your tier. We do not charge extra for the Workflow Builder, Mail Room, Corporate Chat, Secure Cloud Drive, or Helpdesk Kanban. What you see on our transparent pricing page is all you pay.",
  },
  {
    q: "How does Mints ERP handle compliance across different countries?",
    a: "Mints ERP is engineered for multi-regional operations across the UAE, UK, India, and the EU. Invoices automatically adapt to local regulations—applying UAE FTA 5% VAT rules, UK Making Tax Digital (MTD) standards, Indian GST (CGST/SGST/IGST), or European Directive 2014/55/EU (EN 16931 e-invoicing).",
  },
  {
    q: "How difficult is it to migrate our existing data into Mints ERP?",
    a: "Our data import engine accepts standard CSV, Excel, and JSON exports from Zoho, Tally, Sage, Xero, and Monday.com. Contact directories, client records, and historic financial ledgers can be bulk-uploaded directly through our administrative settings.",
  },
];

export default function ComparePage() {
  const [selectedCompetitor, setSelectedCompetitor] = useState<CompetitorKey>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [userCount, setUserCount] = useState<number>(25);

  const filteredMatrix =
    selectedCategory === "All"
      ? MATRIX_DATA
      : MATRIX_DATA.filter((row) => row.category === selectedCategory);

  const activeCompetitorProfile =
    selectedCompetitor !== "all"
      ? COMPETITORS.find((c) => c.id === selectedCompetitor)
      : null;

  // TCO Calculations
  const [planTier, setPlanTier] = useState<"starter" | "pro" | "enterprise">("pro");
  const tierRates = { starter: 12, pro: 24, enterprise: 49 };
  const mintsCostPerUser = tierRates[planTier];
  const fragmentedStackCostPerUser = 185;
  const monthlyMintsTotal = userCount * mintsCostPerUser;
  const monthlyStackTotal = userCount * fragmentedStackCostPerUser;
  const monthlySavings = monthlyStackTotal - monthlyMintsTotal;
  const annualSavings = monthlySavings * 12;

  const renderCell = (val: string | boolean, isMints: boolean = false) => {
    if (val === true) {
      return (
        <span
          className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full ${
            isMints
              ? "bg-[#EDF2E2] text-[#353E20] border border-[#DBE4C7]"
              : "bg-emerald-50 text-emerald-700 border border-emerald-200"
          }`}
        >
          ✓ Included
        </span>
      );
    }
    if (val === false) {
      return <span className="text-xs text-slate-400 font-medium">— Not Available</span>;
    }
    return <span className="text-xs font-medium text-[#5A644D]">{val}</span>;
  };

  return (
    <main className="min-h-screen bg-white text-[#182012]">
      <header className="sticky top-0 z-50 w-full">
        <AnnouncementBar />
        <Navbar />
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F0F0F0]/80 via-white to-white border-b border-[#E4E4E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDF2E2] border border-[#DBE4C7] text-xs font-bold text-[#353E20] mb-6 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#687838] animate-pulse" />
            <span>Mints ERP vs The Market</span>
            <span className="text-[#687838] font-mono">2026 Competitive Benchmark</span>
          </div>

          <h1 className="font-sans font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#182012] tracking-tight max-w-4xl mx-auto mb-6 leading-[1.12]">
            Compare Mints ERP with{" "}
            <span className="text-[#687838]">legacy software &amp; fragmented SaaS.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#5A644D] max-w-2xl mx-auto mb-8 leading-relaxed">
            See how our unified, real-time operating system compares to Zoho, SAP Business One, TallyPrime, Sage, and disconnected tool stacks.
            Evaluate features, real-time architecture, compliance, and total cost of ownership.
          </p>

          {/* Quick Switcher Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto mb-10">
            <button
              onClick={() => setSelectedCompetitor("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCompetitor === "all"
                  ? "bg-[#687838] text-white shadow-xs"
                  : "bg-[#F0F0F0] text-[#5A644D] hover:text-[#182012] border border-[#E4E4E4]"
              }`}
            >
              All Competitors
            </button>
            {COMPETITORS.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCompetitor(c.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCompetitor === c.id
                    ? "bg-[#687838] text-white shadow-xs"
                    : "bg-[#F0F0F0] text-[#5A644D] hover:text-[#182012] border border-[#E4E4E4]"
                }`}
              >
                vs {c.name.split(" ")[0]}
              </button>
            ))}
          </div>

          {/* Highlights summary pill */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto text-left">
            <div className="p-4 rounded-2xl bg-white border border-[#E4E4E4] shadow-2xs">
              <div className="text-xl font-extrabold text-[#182012] mb-0.5">1 Platform</div>
              <div className="text-xs text-[#5A644D]">Replaces 5-8 separate SaaS subscriptions</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#E4E4E4] shadow-2xs">
              <div className="text-xl font-extrabold text-[#687838] mb-0.5">&lt;250ms</div>
              <div className="text-xs text-[#5A644D]">Live Firestore real-time event updates</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#E4E4E4] shadow-2xs">
              <div className="text-xl font-extrabold text-[#182012] mb-0.5">Up to 75%</div>
              <div className="text-xs text-[#5A644D]">Lower total annual software expenditure</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#E4E4E4] shadow-2xs">
              <div className="text-xl font-extrabold text-[#687838] mb-0.5">Zero</div>
              <div className="text-xs text-[#5A644D]">Mandatory consultant implementation fees</div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitor Cards Showcase */}
      <section className="py-14 sm:py-20 bg-[#F0F0F0]/50 border-b border-[#E4E4E4]" id="profiles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#687838] block mb-2">
              Side-by-Side Analysis
            </span>
            <h2 className="font-sans font-extrabold text-2xl sm:text-4xl text-[#182012] mb-3">
              {activeCompetitorProfile
                ? activeCompetitorProfile.tagline
                : "Detailed Head-to-Head Comparisons"}
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#5A644D]">
              Explore why ambitious modern enterprises transition from disjointed stacks to Mints ERP.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeCompetitorProfile ? [activeCompetitorProfile] : COMPETITORS).map((c) => (
              <div
                key={c.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E4E4E4] shadow-xs hover:border-[#687838] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#EDF2E2] text-[#353E20] border border-[#DBE4C7]">
                      {c.badge}
                    </span>
                    <span className="text-[11px] font-mono text-[#5A644D] uppercase tracking-wider">
                      {c.category}
                    </span>
                  </div>

                  <h3 className="font-sans font-bold text-lg text-[#182012] mb-2">
                    Mints ERP vs {c.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5A644D] mb-5 leading-relaxed">
                    {c.summary}
                  </p>

                  <div className="p-3.5 rounded-2xl bg-[#F0F0F0]/70 border border-[#E4E4E4] mb-5">
                    <div className="flex justify-between items-center text-xs mb-1.5">
                      <span className="text-[#5A644D]">Typical Stack Cost:</span>
                      <span className="font-mono font-bold text-[#182012] line-through opacity-70">
                        {c.stackPrice}/user/mo
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-[#687838] font-bold">Mints ERP Unified:</span>
                      <span className="font-mono font-extrabold text-[#687838]">
                        {c.mintsPrice}/user/mo
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="text-xs font-bold text-[#182012]">Why Teams Choose Mints ERP:</div>
                    <ul className="space-y-2">
                      {c.strengths.slice(0, 3).map((str, idx) => (
                        <li key={idx} className="text-xs text-[#353E20] flex items-start gap-2">
                          <span className="text-[#687838] font-bold mt-0.5">✓</span>
                          <span>{str}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F0F0F0]">
                  <Link
                    href="#matrix"
                    onClick={() => setSelectedCompetitor(c.id)}
                    className="block text-center py-2.5 rounded-xl bg-[#F0F0F0] hover:bg-[#EDF2E2] text-xs font-bold text-[#182012] hover:text-[#687838] border border-[#E4E4E4] transition-all"
                  >
                    Compare in Feature Matrix ↓
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Master Comparison Matrix */}
      <section className="py-16 sm:py-24 bg-white" id="matrix">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#687838] block mb-2">
              Comprehensive Feature Breakdown
            </span>
            <h2 className="font-sans font-extrabold text-2xl sm:text-4xl text-[#182012] mb-3">
              The 2026 Enterprise Capability Matrix
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#5A644D]">
              Inspect capabilities across Core Architecture, HR Presence, CRM Pipelines, Project Gantt, Finance &amp; Automations.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none snap-x">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold shrink-0 cursor-pointer transition-all snap-start ${
                  selectedCategory === cat
                    ? "bg-[#687838] text-white shadow-xs"
                    : "bg-[#F0F0F0] text-[#5A644D] hover:text-[#182012] border border-[#E4E4E4]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Matrix Table */}
          <div className="overflow-x-auto rounded-3xl border border-[#E4E4E4] shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[900px]">
              <thead>
                <tr className="bg-[#F0F0F0] border-b border-[#E4E4E4]">
                  <th className="p-4 font-bold text-[#182012] w-1/4">Feature &amp; Capability</th>
                  <th className="p-4 font-bold text-[#687838] bg-[#EDF2E2]/70 border-x border-[#DBE4C7] w-1/6">
                    <div className="flex items-center gap-1.5">
                      <span>Mints ERP</span>
                      <span className="text-[10px] bg-[#687838] text-white px-1.5 py-0.5 rounded-full">
                        Unified
                      </span>
                    </div>
                  </th>
                  <th className="p-4 font-bold text-[#5A644D] w-1/8">Zoho One</th>
                  <th className="p-4 font-bold text-[#5A644D] w-1/8">SAP B1</th>
                  <th className="p-4 font-bold text-[#5A644D] w-1/8">TallyPrime</th>
                  <th className="p-4 font-bold text-[#5A644D] w-1/8">Sage/Xero</th>
                  <th className="p-4 font-bold text-[#5A644D] w-1/8">Monday/Asana</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0F0F0]">
                {filteredMatrix.map((row, i) => (
                  <tr key={i} className="hover:bg-[#F9FBF6] transition-colors">
                    <td className="p-4 font-semibold text-[#182012]">
                      <div>{row.feature}</div>
                      <div className="text-[10px] text-[#5A644D] font-normal uppercase tracking-wider mt-0.5">
                        {row.category}
                      </div>
                    </td>
                    <td className="p-4 bg-[#EDF2E2]/30 border-x border-[#DBE4C7]/60">
                      {renderCell(row.mints, true)}
                    </td>
                    <td className="p-4">{renderCell(row.zoho)}</td>
                    <td className="p-4">{renderCell(row.sap)}</td>
                    <td className="p-4">{renderCell(row.tally)}</td>
                    <td className="p-4">{renderCell(row.sage)}</td>
                    <td className="p-4">{renderCell(row.monday)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-3 text-xs text-[#5A644D]">
            ← Swipe horizontally on mobile to view all competitor columns →
          </div>
        </div>
      </section>

      {/* Interactive TCO Calculator Section */}
      <section className="py-16 sm:py-24 bg-[#F0F0F0]/60 border-t border-[#E4E4E4]" id="calculator">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#687838] block mb-2">
              ROI &amp; Cost Estimation
            </span>
            <h2 className="font-sans font-extrabold text-2xl sm:text-4xl text-[#182012] mb-3">
              Total Cost of Ownership (TCO) Calculator
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#5A644D]">
              Calculate your projected annual savings when replacing separate CRM, HR, Project, Storage, and Invoicing apps with Mints ERP.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E4E4E4] shadow-sm">
            {/* Plan Tier Selection */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-[#F0F0F0]">
              <div className="text-xs font-bold uppercase tracking-wider text-[#5A644D]">
                Select Mints ERP Edition:
              </div>
              <div className="flex items-center gap-2">
                {(["starter", "pro", "enterprise"] as const).map((tier) => (
                  <button
                    key={tier}
                    onClick={() => setPlanTier(tier)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer transition-all ${
                      planTier === tier
                        ? "bg-[#687838] text-white shadow-xs"
                        : "bg-[#F0F0F0] text-[#5A644D] hover:text-[#182012]"
                    }`}
                  >
                    {tier === "starter" ? "Starter ($12/mo)" : tier === "pro" ? "Professional ($24/mo)" : "Enterprise ($49/mo)"}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider Control */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label htmlFor="user-slider" className="text-sm font-bold text-[#182012]">
                  Active Team Members:
                </label>
                <span className="font-mono font-extrabold text-xl text-[#687838] bg-[#EDF2E2] px-3.5 py-1 rounded-xl border border-[#DBE4C7]">
                  {userCount} seats
                </span>
              </div>
              <input
                id="user-slider"
                type="range"
                min="5"
                max="150"
                step="5"
                value={userCount}
                onChange={(e) => setUserCount(Number(e.target.value))}
                className="w-full accent-[#687838] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#5A644D] mt-1 font-mono">
                <span>5 users</span>
                <span>50 users</span>
                <span>100 users</span>
                <span>150 users</span>
              </div>
            </div>

            {/* Side-by-side cost breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#F0F0F0]">
              <div className="p-6 rounded-2xl bg-[#F0F0F0]/50 border border-[#E4E4E4]">
                <div className="text-xs font-bold text-[#5A644D] uppercase tracking-wider mb-1">
                  Fragmented Multi-App Stack
                </div>
                <div className="text-sm text-[#5A644D] mb-4">
                  CRM ($45) + HR ($35) + Projects ($25) + Accounting ($40) + Drive/Chat ($40)
                </div>
                <div className="font-mono text-2xl sm:text-3xl font-bold text-rose-600 mb-1">
                  ${monthlyStackTotal.toLocaleString()}
                  <span className="text-xs text-[#5A644D] font-normal"> / month</span>
                </div>
                <div className="text-xs text-[#5A644D] font-mono">
                  ${(monthlyStackTotal * 12).toLocaleString()} per year
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#EDF2E2]/60 border border-[#DBE4C7] relative overflow-hidden">
                <div className="text-xs font-bold text-[#687838] uppercase tracking-wider mb-1">
                  Mints Global ERP (All 18 Modules)
                </div>
                <div className="text-sm text-[#353E20] mb-4">
                  1 Seat, 1 Invoice, Zero integration middleware or consultant fees
                </div>
                <div className="font-mono text-2xl sm:text-3xl font-extrabold text-[#182012] mb-1">
                  ${monthlyMintsTotal.toLocaleString()}
                  <span className="text-xs text-[#5A644D] font-normal"> / month</span>
                </div>
                <div className="text-xs text-[#353E20] font-mono font-semibold">
                  ${(monthlyMintsTotal * 12).toLocaleString()} per year
                </div>
              </div>
            </div>

            {/* Savings Banner */}
            <div className="mt-6 p-4 rounded-2xl bg-[#1C210E] text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <div className="text-xs uppercase tracking-wider text-[#DBE4C7] font-semibold">
                  Estimated Total Annual Savings
                </div>
                <div className="text-xl sm:text-2xl font-sans font-extrabold text-white">
                  Save ${annualSavings.toLocaleString()} every year
                </div>
              </div>
              <Link
                href="/#pricing"
                className="px-5 py-2.5 rounded-xl bg-[#687838] hover:bg-[#56642E] text-white text-xs font-bold shadow-sm transition-all"
              >
                View Plans &amp; Pricing →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Migration FAQ Section */}
      <section className="py-16 sm:py-24 bg-white border-t border-[#E4E4E4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#687838] block mb-2">
              Migration &amp; Switching FAQ
            </span>
            <h2 className="font-sans font-extrabold text-2xl sm:text-4xl text-[#182012]">
              Frequently Asked Questions About Transitioning
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="group bg-[#F0F0F0] rounded-2xl p-5 border border-[#E4E4E4] hover:border-[#687838] transition-all [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer font-sans font-bold text-sm sm:text-base text-[#182012] group-open:text-[#687838]">
                  <span>{faq.q}</span>
                  <span className="text-xs text-[#5A644D] group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 pt-3 border-t border-[#E4E4E4] text-xs sm:text-sm text-[#5A644D] leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}
