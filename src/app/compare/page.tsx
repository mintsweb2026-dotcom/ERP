"use client";

import { useState, useMemo } from "react";
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
  fatalFlaw: string;
  mintsFix: string;
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
    fatalFlaw: "12+ Disconnected Apps & Deluge Scripting Latency",
    mintsFix: "1 Unified Real-Time Firestore Database",
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
    fatalFlaw: "$30k+ Consultant Fees & 6-Month Onboarding",
    mintsFix: "15-Minute Instant Cloud Provisioning",
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
    fatalFlaw: "Desktop .EXE Locked to Single PCs",
    mintsFix: "Browser Cloud Telemetry & Shift Clocks",
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
    fatalFlaw: "Accounting Ledgers Requiring 8 Marketplace Plugins",
    mintsFix: "All 18 Operations Modules Built-In",
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
    fatalFlaw: "Simple Task Boards Without Statutory Tax Invoicing",
    mintsFix: "Full Business Flow: Lead ➔ Gantt ➔ Tax Invoice",
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
  tooltip?: string;
  mints: string | boolean;
  zoho: string | boolean;
  sap: string | boolean;
  tally: string | boolean;
  sage: string | boolean;
  monday: string | boolean;
}

const MATRIX_DATA: MatrixRow[] = [
  // Core Platform
  {
    feature: "Unified Single Database Architecture",
    category: "Core Platform",
    tooltip: "All 18 modules read and write to one Google Cloud Firestore database, eliminating sync latency and duplicate records.",
    mints: true,
    zoho: "⚠️ 12+ Siloed App DBs",
    sap: true,
    tally: "⚠️ Local PC .db File",
    sage: "⚠️ Accounting Only",
    monday: "⚠️ Workspace Silos",
  },
  {
    feature: "Real-Time Telemetry (<250ms latency)",
    category: "Core Platform",
    tooltip: "Instant document snapshot listeners reflect attendance, ticket status, and deal stages across all team screens simultaneously.",
    mints: true,
    zoho: "⚠️ Polling / Webhook Delays",
    sap: "⚠️ Scheduled Nightly Sync",
    tally: false,
    sage: "⚠️ Polling API Limits",
    monday: true,
  },
  {
    feature: "Dual Theme Engine (Forest Dark & Sage Light)",
    category: "Core Platform",
    tooltip: "Executive Ledger styling with 1-click toggle between Forest Dark (#0a0e0b) and Sage Light (#f5f7f4).",
    mints: true,
    zoho: false,
    sap: false,
    tally: false,
    sage: false,
    monday: "Basic Dark Mode",
  },
  {
    feature: "Instant Cloud Setup (<15 mins)",
    category: "Core Platform",
    tooltip: "Zero-install cloud provisioning. Invite team members and start working immediately without server setup.",
    mints: true,
    zoho: "⚠️ Multi-Day Setup",
    sap: "⚠️ 6-18 Month Consulting",
    tally: "⚠️ Manual PC Install",
    sage: "⚠️ Multi-Hour Setup",
    monday: true,
  },
  {
    feature: "5-Tier Role-Based Access Control (RBAC)",
    category: "Core Platform",
    tooltip: "Enforced directly at the database layer (Founders, C-Suite, Admin, Manager, Employee) preventing client-side token spoofing.",
    mints: true,
    zoho: "⚠️ Tier-Gated Upgrade",
    sap: true,
    tally: "⚠️ Basic Single User",
    sage: "⚠️ Accounting Roles Only",
    monday: "⚠️ Board-Level Only",
  },

  // HR & Attendance
  {
    feature: "Shift Punch State Machine with Clock-Skew Clamping",
    category: "HR & Workforce",
    tooltip: "Mathematical algorithm clamps client device time against trusted server timestamps, preventing employees from faking punch times.",
    mints: true,
    zoho: "⚠️ Requires Zoho People App",
    sap: "⚠️ Expensive Add-on",
    tally: false,
    sage: "⚠️ 3rd-Party Plugin",
    monday: false,
  },
  {
    feature: "Live Presence Map & Geolocation Verification",
    category: "HR & Workforce",
    tooltip: "Visual telemetry map showing active on-shift personnel, break states, and geofence-verified field locations.",
    mints: true,
    zoho: "⚠️ Separate Paid Add-on",
    sap: "⚠️ Bespoke Integration",
    tally: false,
    sage: false,
    monday: false,
  },
  {
    feature: "HR Directory, Subroles & Dynamic Org Chart",
    category: "HR & Workforce",
    tooltip: "Interactive organizational hierarchy tree with dynamic job specialization tags and emergency contact profiles.",
    mints: true,
    zoho: "⚠️ Zoho People Module",
    sap: true,
    tally: false,
    sage: "⚠️ 3rd-Party Plugin",
    monday: "⚠️ Visual Board Template",
  },
  {
    feature: "Leave Accrual & Multi-Level Approval Workflows",
    category: "HR & Workforce",
    tooltip: "Automated leave entitlement calculations (annual, sick, bereavement) with manager sign-off stages.",
    mints: true,
    zoho: true,
    sap: true,
    tally: false,
    sage: "⚠️ 3rd-Party Plugin",
    monday: "⚠️ Custom Form Only",
  },

  // CRM & Projects
  {
    feature: "Visual CRM Kanban Pipeline with Revenue Forecasting",
    category: "CRM & Projects",
    tooltip: "Drag-and-drop opportunity stages with win probability weighting and forecasted monthly revenue summaries.",
    mints: true,
    zoho: "⚠️ Zoho CRM App ($35/mo)",
    sap: "⚠️ SAP CRM Add-on",
    tally: false,
    sage: "⚠️ 3rd-Party Plugin",
    monday: "⚠️ Template Board Only",
  },
  {
    feature: "Interactive Gantt Milestone & Dependency Timeline",
    category: "CRM & Projects",
    tooltip: "Full project Gantt timelines with critical path calculation, milestone milestones, and task assignees.",
    mints: true,
    zoho: "⚠️ Zoho Projects App",
    sap: "⚠️ Complex Module",
    tally: false,
    sage: false,
    monday: true,
  },
  {
    feature: "7-Day Timesheet Matrix with Manager Sign-Off",
    category: "CRM & Projects",
    tooltip: "Weekly time allocation across project tasks with one-click manager sign-off and payroll export.",
    mints: true,
    zoho: "⚠️ Separate App Sync",
    sap: "⚠️ Add-on Module",
    tally: false,
    sage: "⚠️ 3rd-Party Plugin",
    monday: "⚠️ Basic Time Column",
  },
  {
    feature: "External Client Portal for Milestones & Approvals",
    category: "CRM & Projects",
    tooltip: "Dedicated external portal allowing clients to review deliverables and pay invoices without seeing internal data.",
    mints: true,
    zoho: "⚠️ Limited Portal Credits",
    sap: "⚠️ Custom Web Build",
    tally: false,
    sage: false,
    monday: "⚠️ Guest Board View",
  },
  {
    feature: "IT / HR Helpdesk Ticket Kanban with SLA Tracking",
    category: "CRM & Projects",
    tooltip: "Internal support ticketing with ticket priority tags, resolution timers, and assignment queues.",
    mints: true,
    zoho: "⚠️ Zoho Desk App ($20/mo)",
    sap: "⚠️ Add-on Module",
    tally: false,
    sage: false,
    monday: "⚠️ Template Board Only",
  },

  // Finance & Multi-Region
  {
    feature: "Multi-Region Invoicing (UAE VAT, UK MTD, India GST, EU)",
    category: "Finance & Compliance",
    tooltip: "Auto-formats UAE FTA 5% VAT, UK HMRC Making Tax Digital, Indian GST (CGST/SGST/IGST), and EU Directive 2014/55/EU.",
    mints: true,
    zoho: "⚠️ Country-Locked Editions",
    sap: "⚠️ Complex Localization",
    tally: "⚠️ India/UAE Only",
    sage: "⚠️ Regional Editions",
    monday: false,
  },
  {
    feature: "Automated Reverse-Charge & Intra-Community Tax",
    category: "Finance & Compliance",
    tooltip: "Applies statutory tax exemption codes and reverse-charge calculations for cross-border transactions.",
    mints: true,
    zoho: "⚠️ Manual Rule Setup",
    sap: true,
    tally: false,
    sage: "⚠️ Manual Calculation",
    monday: false,
  },
  {
    feature: "Multi-Currency Treasury (USD, AED, GBP, INR, EUR)",
    category: "Finance & Compliance",
    tooltip: "Track company bank balances, receivables, and payables across 5 currencies with conversion metrics.",
    mints: true,
    zoho: true,
    sap: true,
    tally: "⚠️ Basic Multi-Currency",
    sage: "⚠️ Higher Tier Upgrade",
    monday: false,
  },
  {
    feature: "Double-Entry General Ledger (GL / AP / AR)",
    category: "Finance & Compliance",
    tooltip: "Structured ledger journal export integration to accounting packages (QuickBooks, Xero, Tally); Mints focuses on operations.",
    mints: "Audit Export Integration",
    zoho: true,
    sap: true,
    tally: true,
    sage: true,
    monday: false,
  },
  {
    feature: "Automated Immutable Audit Logging",
    category: "Finance & Compliance",
    tooltip: "Tamper-evident system activity trail logging user identity, IP address, changed fields, and exact timestamps.",
    mints: true,
    zoho: "Audit Log App",
    sap: true,
    tally: "Audit Trail (Local)",
    sage: true,
    monday: "Activity Log (1 yr)",
  },

  // Automations & Collaboration
  {
    feature: "Visual Drag-and-Drop Workflow Builder",
    category: "Automations & Tools",
    tooltip: "Automate cross-department triggers (e.g. Lead Won ➔ Create Project ➔ Assign Onboarding ➔ Generate Invoice) with zero code.",
    mints: true,
    zoho: "⚠️ Complex Deluge Scripts",
    sap: "⚠️ Custom ABAP Code",
    tally: false,
    sage: false,
    monday: "Recipe Automations",
  },
  {
    feature: "Built-In Corporate Chat Channels & DMs",
    category: "Automations & Tools",
    tooltip: "Internal company chat with department channels, 1-on-1 direct messages, and contextual task linking.",
    mints: true,
    zoho: "⚠️ Zoho Cliq App",
    sap: false,
    tally: false,
    sage: false,
    monday: "Item Updates Feed",
  },
  {
    feature: "Corporate Mail Room & Document Cloud Drive",
    category: "Automations & Tools",
    tooltip: "Encrypted company cloud storage and shared mail triage room integrated directly with client files.",
    mints: true,
    zoho: "⚠️ Zoho Mail & WorkDrive",
    sap: "⚠️ Add-on Module",
    tally: false,
    sage: false,
    monday: "Files Column (Limit)",
  },
  {
    feature: "Heavy Industrial Manufacturing BOM & Shop Floor",
    category: "Automations & Tools",
    tooltip: "Discrete machinery maintenance and industrial production bill of materials. Mints ERP is built for services and trading.",
    mints: "— Not Targeted (Digital/Service)",
    zoho: "⚠️ Zoho Inventory Add-on",
    sap: true,
    tally: "⚠️ Basic Stock Only",
    sage: "⚠️ Add-on Module",
    monday: false,
  },
  {
    feature: "Discord Webhook & System Integration Triggers",
    category: "Automations & Tools",
    tooltip: "Broadcast operational alerts, new deals, and ticket escalations directly to corporate Discord server channels.",
    mints: true,
    zoho: "⚠️ Requires Zapier Plan",
    sap: false,
    tally: false,
    sage: false,
    monday: "⚠️ Requires Zapier Plan",
  },

  // Commercials & TCO
  {
    feature: "All 18 Enterprise Modules Included in One License",
    category: "Commercials & Value",
    tooltip: "No hidden charges, no tiered module gates. Every user gets full access based on their RBAC clearance.",
    mints: true,
    zoho: "⚠️ Requires Zoho One Plan",
    sap: "⚠️ Per-Module Licensing",
    tally: "⚠️ Add-on Packages",
    sage: "⚠️ 5-8 Paid Plugins",
    monday: "⚠️ Per-Product Subscriptions",
  },
  {
    feature: "Zero Implementation / Mandatory Consultant Fees",
    category: "Commercials & Value",
    tooltip: "No systems integrator fees, no mandatory $10k+ onboarding packages. Cloud setup is ready in 15 minutes.",
    mints: true,
    zoho: "⚠️ Low-Med Consulting",
    sap: "⚠️ $25k - $100k+ Consulting",
    tally: "⚠️ Local Partner Fees",
    sage: "⚠️ Partner Setup Fees",
    monday: true,
  },
  {
    feature: "Predictable Multi-Currency Monthly/Annual Pricing",
    category: "Commercials & Value",
    tooltip: "Billed in USD ($), AED (د.إ), GBP (£), INR (₹), or EUR (€) with an automatic 20% annual discount.",
    mints: true,
    zoho: true,
    sap: "⚠️ Custom Hidden Quote",
    tally: "Annual License",
    sage: "Variable Tier Jumps",
    monday: "Seat Block Jumps",
  },
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

const MIGRATION_STEPS = [
  {
    step: "01",
    title: "10-Minute Data Export",
    desc: "Export your historical records from Zoho, Tally, Sage, Xero, or Monday.com in standard CSV, Excel, or JSON formats using our pre-formatted templates.",
    badge: "Self-Serve or Assisted",
  },
  {
    step: "02",
    title: "Automated Schema Field Mapping",
    desc: "Mints Global's intelligent onboarding engine automatically maps your team roster, contact pipelines, and invoice histories into unified Firestore collections without writing a single line of Deluge code.",
    badge: "Zero Deluge Scripts",
  },
  {
    step: "03",
    title: "48-Hour Zero-Downtime Parallel Run",
    desc: "Run Mints ERP alongside your legacy systems with dedicated concierge engineering support until your executive and operations teams are 100% confident in the cutover.",
    badge: "Risk-Free Cutover",
  },
];

const CUSTOMER_SWITCH_STORIES = [
  {
    company: "Falcon Logistics & Freight LLC",
    location: "Dubai, UAE",
    size: "65 Users",
    prevStack: "Zoho One (CRM, Books, People, Projects)",
    metric: "Saved $14,200 / year",
    quote:
      "We were drowning in Zoho's fragmented app silos. Every time we updated an invoice in Books, our project managers in Zoho Projects couldn't see it without a fragile webhook. Mints ERP unified all 65 of our employees on one screen.",
    author: "Tariq Al-Mansoor",
    role: "Chief Operating Officer",
  },
  {
    company: "Apex Digital Media Partners",
    location: "London, United Kingdom",
    size: "42 Users",
    prevStack: "Monday.com + Xero + Harvest + Slack",
    metric: "Eliminated 4 separate tools",
    quote:
      "We loved Monday's visual boards, but it couldn't generate HMRC-compliant VAT invoices or track employee attendance. Mints ERP gave us both: beautiful Gantt timelines and statutory British billing under one roof.",
    author: "Charlotte Evans",
    role: "Managing Partner",
  },
  {
    company: "Kaveri Engineering Solutions",
    location: "Bengaluru, India",
    size: "38 Users",
    prevStack: "TallyPrime (Desktop) + WhatsApp + Spreadsheets",
    metric: "100% Cloud Remote Presence",
    quote:
      "Our leadership was tied to a single desktop PC in the office to review Tally ledgers. Moving to Mints ERP gave us real-time cloud visibility, shift clock punches that staff cannot tamper with, and instant CGST/SGST filing.",
    author: "Rajesh Sundaram",
    role: "Director of Operations",
  },
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
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [userCount, setUserCount] = useState<number>(25);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  // Filtered matrix based on category and live search query
  const filteredMatrix = useMemo(() => {
    return MATRIX_DATA.filter((row) => {
      const matchesCategory =
        selectedCategory === "All" || row.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        row.feature.toLowerCase().includes(q) ||
        row.category.toLowerCase().includes(q) ||
        (row.tooltip && row.tooltip.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

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

  // Tri-State Capability Cell Renderer
  const renderCell = (val: string | boolean, isMints: boolean = false) => {
    if (val === true) {
      return (
        <span
          className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full ${
            isMints
              ? "bg-[#EDF2E2] text-[#353E20] border border-[#DBE4C7]"
              : "bg-emerald-50 text-emerald-800 border border-emerald-200"
          }`}
        >
          ✓ Included
        </span>
      );
    }
    if (val === false) {
      return <span className="text-xs text-slate-400 font-medium">— Not Available</span>;
    }

    const strVal = String(val);
    // If it's a warning / partial / fragmented state
    if (
      strVal.includes("⚠️") ||
      strVal.toLowerCase().includes("siloed") ||
      strVal.toLowerCase().includes("add-on") ||
      strVal.toLowerCase().includes("plugin") ||
      strVal.toLowerCase().includes("script") ||
      strVal.toLowerCase().includes("consulting") ||
      strVal.toLowerCase().includes("delay") ||
      strVal.toLowerCase().includes("local pc")
    ) {
      return (
        <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-lg bg-amber-50 text-amber-900 border border-amber-200 leading-tight">
          {strVal}
        </span>
      );
    }

    // Disclaimer or specific integration note
    return (
      <span className="inline-flex items-center text-[11px] font-medium text-[#5A644D] bg-[#F0F0F0] px-2 py-0.5 rounded-lg border border-[#E4E4E4]">
        {strVal}
      </span>
    );
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <main className="min-h-screen bg-white text-[#182012]">
      <header className="sticky top-0 z-50 w-full print:hidden">
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

          {/* Quick Actions (Switchers + Print Summary Action) */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto mb-8 print:hidden">
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

            {/* Print / Save Executive Summary */}
            <button
              onClick={handlePrint}
              className="ml-auto px-4 py-2 rounded-xl text-xs font-bold bg-[#182012] hover:bg-[#353E20] text-white transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
              title="Print or save as executive PDF"
            >
              <span>🖨️</span>
              <span>Print Executive Summary</span>
            </button>
          </div>

          {/* Highlights summary pills */}
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

      {/* Competitor Cards Showcase with High-Contrast Fatal Flaw Badges */}
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

                  <p className="text-xs sm:text-sm text-[#5A644D] mb-4 leading-relaxed">
                    {c.summary}
                  </p>

                  {/* High-Contrast Fatal Flaw vs Mints Fix Pills */}
                  <div className="mb-5 space-y-2">
                    <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 text-xs flex items-start gap-2">
                      <span className="font-bold shrink-0">⚠️ Fatal Flaw:</span>
                      <span className="leading-snug">{c.fatalFlaw}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#EDF2E2] border border-[#DBE4C7] text-[#182012] text-xs flex items-start gap-2">
                      <span className="font-bold text-[#687838] shrink-0">🟢 Mints Fix:</span>
                      <span className="leading-snug">{c.mintsFix}</span>
                    </div>
                  </div>

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

                <div className="pt-4 border-t border-[#F0F0F0] flex items-center justify-between gap-2">
                  <Link
                    href={`/compare/vs-${c.id}`}
                    className="flex-1 text-center py-2.5 rounded-xl bg-[#687838] hover:bg-[#56642E] text-xs font-bold text-white shadow-xs transition-all"
                  >
                    Deep Dive Guide →
                  </Link>
                  <Link
                    href="#matrix"
                    onClick={() => setSelectedCompetitor(c.id)}
                    className="py-2.5 px-3 rounded-xl bg-[#F0F0F0] hover:bg-[#EDF2E2] text-xs font-bold text-[#182012] hover:text-[#687838] border border-[#E4E4E4] transition-all"
                  >
                    In Matrix ↓
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Master Comparison Matrix with Sticky Header & Live Search */}
      <section className="py-16 sm:py-24 bg-white" id="matrix">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
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

          {/* Live Search & Filter Controls */}
          <div className="max-w-4xl mx-auto mb-8 print:hidden">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-4">
              {/* Search Bar */}
              <div className="relative flex-1">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                  🔍
                </span>
                <input
                  type="text"
                  placeholder="Search any capability (e.g. Gantt, VAT, Clock-skew, RBAC, Peppol)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-8 py-2.5 rounded-2xl bg-[#F0F0F0] border border-[#E4E4E4] focus:border-[#687838] focus:bg-white text-xs sm:text-sm text-[#182012] transition-colors outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-[#182012] cursor-pointer"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Match Counter Badge */}
              <div className="shrink-0 text-xs font-mono text-[#5A644D] bg-[#F0F0F0] px-3 py-2 rounded-xl border border-[#E4E4E4] flex items-center justify-between sm:justify-start">
                <span>Showing {filteredMatrix.length} of {MATRIX_DATA.length} features</span>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none snap-x">
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
          </div>

          {/* Matrix Table with Sticky Header */}
          <div className="overflow-x-auto rounded-3xl border border-[#E4E4E4] shadow-xs relative max-h-[750px] overflow-y-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[950px]">
              {/* Sticky Table Header */}
              <thead className="sticky top-0 z-30 bg-[#F5F7F4]/95 backdrop-blur-md shadow-xs border-b border-[#DBE4C7]">
                <tr>
                  <th className="p-4 font-bold text-[#182012] w-1/4">Feature &amp; Capability</th>
                  <th className="p-4 font-bold text-[#687838] bg-[#EDF2E2]/90 border-x border-[#DBE4C7] w-1/6">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/images/mints_erp_icon.png"
                        alt="Mints Emblem"
                        width={18}
                        height={18}
                        className="w-4 h-4 object-contain"
                      />
                      <span className="font-extrabold text-[#182012]">Mints ERP</span>
                      <span className="text-[10px] bg-[#687838] text-white px-1.5 py-0.5 rounded-full font-bold">
                        Unified
                      </span>
                    </div>
                  </th>
                  <th className="p-4 font-bold text-[#182012] w-1/8">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#E42528]" />
                      <span>Zoho One</span>
                    </div>
                  </th>
                  <th className="p-4 font-bold text-[#182012] w-1/8">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#0070F2]" />
                      <span>SAP B1</span>
                    </div>
                  </th>
                  <th className="p-4 font-bold text-[#182012] w-1/8">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#337AB7]" />
                      <span>TallyPrime</span>
                    </div>
                  </th>
                  <th className="p-4 font-bold text-[#182012] w-1/8">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#00DC7D]" />
                      <span>Sage/Xero</span>
                    </div>
                  </th>
                  <th className="p-4 font-bold text-[#182012] w-1/8">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#6161FF]" />
                      <span>Monday.com</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0F0F0] bg-white">
                {filteredMatrix.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="p-8 text-center text-slate-500">
                      No capabilities found matching &quot;{searchQuery}&quot;.
                      <button
                        onClick={() => {
                          setSearchQuery("");
                          setSelectedCategory("All");
                        }}
                        className="ml-2 text-[#687838] font-bold underline cursor-pointer"
                      >
                        Reset filters
                      </button>
                    </td>
                  </tr>
                ) : (
                  filteredMatrix.map((row, i) => (
                    <tr key={i} className="hover:bg-[#F9FBF6] transition-colors">
                      <td className="p-4 font-semibold text-[#182012]">
                        <div className="flex items-center gap-1.5">
                          <span>{row.feature}</span>
                          {row.tooltip && (
                            <div className="relative inline-block">
                              <button
                                type="button"
                                onClick={() =>
                                  setActiveTooltip(
                                    activeTooltip === row.feature ? null : row.feature
                                  )
                                }
                                onMouseEnter={() => setActiveTooltip(row.feature)}
                                onMouseLeave={() => setActiveTooltip(null)}
                                className="w-4 h-4 rounded-full bg-[#EDF2E2] text-[#5A644D] hover:text-[#182012] text-[10px] font-mono flex items-center justify-center cursor-pointer"
                                aria-label="Feature explanation"
                              >
                                ℹ
                              </button>
                              {activeTooltip === row.feature && (
                                <div className="absolute left-6 top-1/2 -translate-y-1/2 z-40 w-64 p-2.5 rounded-xl bg-[#182012] text-white text-[11px] leading-relaxed shadow-xl border border-[#353E20] pointer-events-none animate-in fade-in zoom-in-95 duration-150">
                                  {row.tooltip}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
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
                  ))
                )}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-3 text-xs text-[#5A644D]">
            ← Swipe horizontally on mobile to view all competitor columns • Hover ℹ for technical definitions →
          </div>
        </div>
      </section>

      {/* Visual 3-Step Migration Walkthrough Section */}
      <section className="py-16 sm:py-20 bg-[#F0F0F0]/60 border-t border-[#E4E4E4]" id="migration">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#687838] block mb-2">
              Frictionless Onboarding
            </span>
            <h2 className="font-sans font-extrabold text-2xl sm:text-4xl text-[#182012] mb-3">
              How Easy Is It to Switch to Mints ERP?
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#5A644D]">
              Moving your business operations does not require weeks of consulting or painful downtime. Our structured 3-step transition pipeline makes cutover seamless.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MIGRATION_STEPS.map((s) => (
              <div
                key={s.step}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E4E4E4] shadow-xs hover:border-[#687838] transition-all relative overflow-hidden"
              >
                <div className="text-4xl font-extrabold font-mono text-[#DBE4C7] mb-4">
                  {s.step}
                </div>
                <div className="inline-block text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#EDF2E2] text-[#353E20] border border-[#DBE4C7] mb-3">
                  {s.badge}
                </div>
                <h3 className="font-sans font-bold text-lg text-[#182012] mb-2">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5A644D] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Customer Switch Stories & ROI Proof Points */}
      <section className="py-16 sm:py-24 bg-white border-t border-[#E4E4E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#687838] block mb-2">
              Verified Enterprise ROI
            </span>
            <h2 className="font-sans font-extrabold text-2xl sm:text-4xl text-[#182012] mb-3">
              Stories From Teams Who Replaced Legacy Software
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#5A644D]">
              Read how fast-growing companies in Dubai, London, and Bengaluru eliminated disconnected SaaS stacks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CUSTOMER_SWITCH_STORIES.map((story, i) => (
              <div
                key={i}
                className="bg-[#F0F0F0]/40 rounded-3xl p-6 sm:p-7 border border-[#E4E4E4] flex flex-col justify-between hover:border-[#687838] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#687838] bg-[#EDF2E2] px-2.5 py-1 rounded-full border border-[#DBE4C7]">
                      {story.metric}
                    </span>
                    <span className="text-[11px] font-mono text-[#5A644D]">
                      {story.size}
                    </span>
                  </div>

                  <div className="text-[11px] text-slate-500 font-mono mb-4">
                    Replaced: <strong className="text-[#182012]">{story.prevStack}</strong>
                  </div>

                  <p className="text-xs sm:text-sm text-[#353E20] italic leading-relaxed mb-6">
                    &ldquo;{story.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E4E4E4] flex items-center justify-between">
                  <div>
                    <div className="font-bold text-xs text-[#182012]">{story.author}</div>
                    <div className="text-[11px] text-[#5A644D]">{story.role}</div>
                  </div>
                  <div className="text-right text-[11px] font-mono text-[#687838]">
                    {story.location}
                  </div>
                </div>
              </div>
            ))}
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
                href="/pricing"
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
