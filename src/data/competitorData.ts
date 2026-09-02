export interface CompetitorData {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  heroHeadline: string;
  metaTitle: string;
  metaDescription: string;
  badge: string;
  logoColor: string;
  stackPrice: string;
  mintsPrice: string;
  savingsPct: string;
  summary: string;
  theCoreProblem: string;
  whySwitch: string[];
  honestLimitations: string[];
  matrixHighlights: { feature: string; mints: string; competitor: string }[];
  faqs: { q: string; a: string }[];
}

export const COMPETITOR_SLUGS = [
  "vs-zoho",
  "vs-sap",
  "vs-tally",
  "vs-sage",
  "vs-monday",
] as const;

export type CompetitorSlug = typeof COMPETITOR_SLUGS[number];

export const COMPETITORS_MAP: Record<string, CompetitorData> = {
  "vs-zoho": {
    slug: "vs-zoho",
    name: "Zoho One",
    category: "Modular Cloud Ecosystem",
    tagline: "Mints ERP vs Zoho: 1 Unified Database vs 12 Disconnected Apps",
    heroHeadline: "Why High-Velocity Squads Migrate from Zoho to Mints ERP",
    metaTitle: "Mints ERP vs Zoho One — Detailed ERP & CRM Comparison",
    metaDescription:
      "Compare Mints Global ERP with Zoho One. Discover how a unified Firestore database eliminates Deluge scripting, modular price creep, and sync delays.",
    badge: "Most Common Migration",
    logoColor: "#E42528",
    stackPrice: "$125 - $220",
    mintsPrice: "$24 - $49",
    savingsPct: "Up to 75%",
    summary:
      "Zoho provides dozens of fragmented tools under separate URLs and databases. Mints ERP provides a single, cohesive operating command center.",
    theCoreProblem:
      "Zoho requires configuring multiple disconnected applications (Zoho CRM, Zoho Books, Zoho People, Zoho Projects). Cross-module automations require writing custom Deluge code, and background sync frequently lags or drops records.",
    whySwitch: [
      "1 single Firestore database eliminates synchronization delays and API rate limits",
      "All 18 core modules included in one unified subscription seat",
      "Native visual workflow builder without proprietary Deluge scripting overhead",
      "Built-in compliance for UAE FTA VAT, UK MTD, Indian GST, and EU e-invoicing",
    ],
    honestLimitations: [
      "Zoho offers niche point-solutions (e.g., Zoho Sign, Zoho Social, Zoho Creator) that Mints ERP does not replicate, focusing instead on core enterprise operations.",
    ],
    matrixHighlights: [
      { feature: "Data Architecture", mints: "Single real-time Firestore database (<250ms)", competitor: "Partitioned across 12+ siloed databases" },
      { feature: "Workflow Engine", mints: "Visual drag-and-drop flowchart builder", competitor: "Requires Deluge scripting for cross-app rules" },
      { feature: "Pricing Predictability", mints: "All 18 modules included in transparent seat", competitor: "Per-employee minimums + add-on fees" },
      { feature: "Shift Telemetry", mints: "Hardened clock-skew clamped attendance", competitor: "Requires standalone Zoho People check-in" },
    ],
    faqs: [
      {
        q: "How does Mints ERP eliminate Zoho's data silos?",
        a: "Every module in Mints ERP shares a single Firestore collection schema. When a deal is marked 'Closed Won' in CRM, a Gantt project is created and a tax-compliant invoice draft is generated instantaneously without webhooks or middleware.",
      },
      {
        q: "Can we import historic customer records from Zoho CRM?",
        a: "Yes. Our administrative settings include a CSV/JSON import wizard mapped to standard Zoho CRM contact, deal, and account fields.",
      },
    ],
  },
  "vs-sap": {
    slug: "vs-sap",
    name: "SAP Business One",
    category: "Heavyweight Enterprise ERP",
    tagline: "Mints ERP vs SAP: Agile Cloud Speed vs Multi-Year Consulting",
    heroHeadline: "Enterprise Power Without the $50,000 Implementation Bill",
    metaTitle: "Mints ERP vs SAP Business One — Fast Cloud ERP Alternative",
    metaDescription:
      "Compare Mints Global ERP with SAP Business One. 15-minute cloud onboarding vs months of costly systems integrator fees.",
    badge: "Agile Enterprise Choice",
    logoColor: "#0070F2",
    stackPrice: "$180 - $350+",
    mintsPrice: "$49 - $149",
    savingsPct: "Up to 80%",
    summary:
      "SAP Business One is engineered for heavy traditional manufacturing with deep budgets. Mints ERP is built for modern knowledge work and distributed tech operations.",
    theCoreProblem:
      "SAP requires mandatory certified implementation partners, steep annual maintenance contracts, and complex ABAP configuration that takes 6 to 18 months to roll out.",
    whySwitch: [
      "Zero-install cloud deployment live in under 15 minutes",
      "Modern Next.js 16 App Router interface that team members love using",
      "No mandatory systems integrator or recurring consultant consulting bills",
      "5-tier RBAC security with automated tamper-evident audit trails",
    ],
    honestLimitations: [
      "SAP Business One includes deep industrial manufacturing process control and warehouse discrete manufacturing that Mints ERP does not target.",
    ],
    matrixHighlights: [
      { feature: "Deployment Time", mints: "Instant self-serve onboarding in 15 minutes", competitor: "6 to 18 months via implementation partner" },
      { feature: "Upfront Cost", mints: "$0 setup fees; transparent monthly/annual billing", competitor: "$25,000 to $100,000+ consulting costs" },
      { feature: "User Experience", mints: "Modern dual-theme web UI (Forest & Sage)", competitor: "Legacy desktop application with steep learning curve" },
      { feature: "Cloud Architecture", mints: "Serverless Google Cloud with sub-250ms latency", competitor: "Requires dedicated Windows server hosting" },
    ],
    faqs: [
      {
        q: "Is Mints ERP suitable as an alternative to SAP for digital and service enterprises?",
        a: "Yes. For technology firms, design agencies, consulting practices, and distributed service providers, Mints ERP provides all necessary operations (HR, CRM, Gantt, Billing) without SAP's overhead.",
      },
    ],
  },
  "vs-tally": {
    slug: "vs-tally",
    name: "TallyPrime",
    category: "Desktop Accounting Software",
    tagline: "Mints ERP vs Tally: Collaborative Cloud vs Desktop .EXE",
    heroHeadline: "Move from Desktop Ledgers to a Collaborative Cloud Command Center",
    metaTitle: "Mints ERP vs TallyPrime — Modern Cloud ERP for Scaling Teams",
    metaDescription:
      "Compare Mints Global ERP with TallyPrime. Cloud-native collaboration, shift attendance, CRM pipelines, and Indian GST tax invoicing.",
    badge: "Cloud Modernization",
    logoColor: "#337AB7",
    stackPrice: "$85 - $160",
    mintsPrice: "$24 (₹1,950)",
    savingsPct: "Up to 65%",
    summary:
      "TallyPrime is the traditional accounting standard in South Asia, but is bound to desktop PCs. Mints ERP delivers collaborative cloud operations.",
    theCoreProblem:
      "Tally records are locked inside local desktop files. Remote teams cannot collaborate in real time, and it lacks CRM pipelines, employee attendance state machines, and Gantt project roadmaps.",
    whySwitch: [
      "True cloud-native access from any web browser, tablet, or mobile phone",
      "Complete CRM pipeline with deal stages and automated revenue forecasts",
      "Mathematical clock-skew clamped employee attendance with geolocation",
      "Full Indian GST invoicing (CGST, SGST, IGST) with HSN/SAC codes",
    ],
    honestLimitations: [
      "Tally remains a specialized statutory audit accounting tool for Indian CAs; Mints ERP provides automated GST billing and ledger exports for statutory filing.",
    ],
    matrixHighlights: [
      { feature: "Accessibility", mints: "Browser-based anywhere access on any OS", competitor: "Windows desktop executable (.exe) only" },
      { feature: "Operational Scope", mints: "HR, Attendance, CRM, Gantt, Invoicing, Chat", competitor: "Strictly accounting & inventory bookkeeping" },
      { feature: "Workforce Management", mints: "Shift punch state machine + Org tree", competitor: "No native workforce or attendance tools" },
      { feature: "Audit Trail", mints: "Immutable cryptographic audit logs in Firestore", competitor: "Basic local audit log feature" },
    ],
    faqs: [
      {
        q: "Can our accountant still file GST returns from Mints ERP?",
        a: "Yes. Invoices generated in Mints ERP include state codes, GSTIN numbers, and line-item CGST/SGST/IGST breakdowns, ready for one-click Excel or CSV export into GST offline tools.",
      },
    ],
  },
  "vs-sage": {
    slug: "vs-sage",
    name: "Sage & Xero Stack",
    category: "Accounting + Marketplace Plugins",
    tagline: "Mints ERP vs Sage/Xero: Single Command Center vs 8 Plugins",
    heroHeadline: "Eliminate Expensive Tool Sprawl with a Native Enterprise OS",
    metaTitle: "Mints ERP vs Sage & Xero — Unified Platform vs App Sprawl",
    metaDescription:
      "Compare Mints Global ERP with Sage and Xero. Replace 5 to 8 expensive marketplace add-ons with one integrated operational command center.",
    badge: "Tool Sprawl Killer",
    logoColor: "#00DC7D",
    stackPrice: "$160 - $280",
    mintsPrice: "$39 (£29)",
    savingsPct: "Up to 70%",
    summary:
      "Sage and Xero handle accounting ledgers well, but require buying 5-8 separate marketplace plug-ins for HR, CRM, Gantt timelines, and ticketing.",
    theCoreProblem:
      "Stitching together accounting, a third-party CRM, a separate attendance app, and a project tool causes integration breakages, duplicate data entry, and runaway monthly software bills.",
    whySwitch: [
      "Zero unvetted third-party marketplace plug-in fees",
      "Seamless operational flow: Won deal ➔ Gantt milestone ➔ Timesheet ➔ MTD/VAT invoice",
      "Unified 5-tier role-based access control and corporate governance",
      "Corporate Mail Room, Document Cloud Drive, and Chat included natively",
    ],
    honestLimitations: [
      "Xero has deeper bank feed integrations with small UK high-street retail accounts; Mints ERP focuses on professional enterprise operations and treasury.",
    ],
    matrixHighlights: [
      { feature: "Architecture", mints: "Native end-to-end command center", competitor: "Ledger only; requires 5+ marketplace plugins" },
      { feature: "UK MTD Compliance", mints: "Built-in digital line-item VAT audit records", competitor: "Native to Xero/Sage core" },
      { feature: "Project & Gantt", mints: "Interactive timeline with milestone dependencies", competitor: "Requires third-party add-on (WorkflowMax/Harvest)" },
      { feature: "Support & Maintenance", mints: "1 platform, 1 invoice, 1 Dubai engineering team", competitor: "Separate support tickets across 5 different vendors" },
    ],
    faqs: [
      {
        q: "How does Mints ERP compare for UK businesses subject to Making Tax Digital?",
        a: "Mints ERP generates VAT-compliant invoices with line-item VAT rates (20%, 5%, 0%) conforming to HMRC digital record-keeping guidelines.",
      },
    ],
  },
  "vs-monday": {
    slug: "vs-monday",
    name: "Monday.com & Asana",
    category: "Work & Task Management",
    tagline: "Mints ERP vs Work Trackers: Complete Operations vs Task Lists",
    heroHeadline: "Beyond Task Cards: The Enterprise Operating System",
    metaTitle: "Mints ERP vs Monday.com & Asana — Enterprise OS vs Task Trackers",
    metaDescription:
      "Compare Mints Global ERP with Monday.com and Asana. Real statutory tax invoicing, attendance state machines, and database-level RBAC.",
    badge: "True Enterprise OS",
    logoColor: "#6161FF",
    stackPrice: "$140 - $240",
    mintsPrice: "$24 - $49",
    savingsPct: "Up to 60%",
    summary:
      "Task trackers like Monday.com and Asana are great for project boards, but they cannot run employee payroll attendance, legal tax invoices, or database RBAC.",
    theCoreProblem:
      "Project management software lacks commercial and financial foundations: no statutory VAT/GST invoicing, no HR shift clocks, and no database security clearance hierarchy.",
    whySwitch: [
      "Complete operational lifecycle from lead prospecting to paid statutory invoice",
      "Hardware-hardened attendance shift engine with clock-skew clamping",
      "Enterprise 5-tier clearance hierarchy protecting confidential business data",
      "External client portal with scoped milestone approvals and invoice pay links",
    ],
    honestLimitations: [
      "Monday.com has hundreds of generic board templates for creative freelancers; Mints ERP is purposefully engineered for disciplined enterprise operations.",
    ],
    matrixHighlights: [
      { feature: "Financial Invoicing", mints: "Statutory tax invoices (UAE VAT, UK MTD, GST, EU)", competitor: "Not supported (requires QuickBooks/Stripe integration)" },
      { feature: "Workforce Attendance", mints: "Clock-skew clamped shift punches + presence map", competitor: "Basic time tracking widget only" },
      { feature: "Security Clearance", mints: "5-Tier RBAC enforced at Google Firestore layer", competitor: "Workspace and board-level sharing only" },
      { feature: "Client Collaboration", mints: "Dedicated client portal with scoped permissions", competitor: "Requires adding expensive guest seats" },
    ],
    faqs: [
      {
        q: "Can Mints ERP replace both Monday.com and our accounting software?",
        a: "Yes. Mints ERP bridges the gap between project delivery (interactive Gantt roadmaps) and business administration (statutory invoicing, timesheets, and attendance).",
      },
    ],
  },
};
