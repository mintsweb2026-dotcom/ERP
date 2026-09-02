export interface FAQItem {
  q: string;
  a: string;
  category: string;
}

export interface DocSection {
  id: string;
  title: string;
  badge?: string;
  summary: string;
  content: string;
  bullets?: string[];
  callout?: {
    type: "info" | "important" | "tip" | "warning";
    text: string;
  };
  table?: {
    headers: string[];
    rows: string[][];
  };
}

export interface GuideDoc {
  id: string;
  title: string;
  shortTitle: string;
  badge: string;
  icon: string;
  description: string;
  lastUpdated: string;
  readingTime: string;
  version: string;
  sections: DocSection[];
  faqs?: FAQItem[];
}

export const TOPIC_CHIPS = [
  { label: "Dual-Theme Engine", query: "theme", guideId: "product-doc" },
  { label: "Attendance & Shifts", query: "attendance", guideId: "user-manual" },
  { label: "Workflow Builder", query: "workflow", guideId: "user-manual" },
  { label: "HR Org & Subroles", query: "subrole", guideId: "user-manual" },
  { label: "Invoicing & VAT", query: "invoice", guideId: "user-manual" },
  { label: "5-Tier RBAC Security", query: "rbac", guideId: "product-doc" },
  { label: "Leave Entitlements", query: "leave", guideId: "handbook" },
  { label: "Clock-Skew Protection", query: "clock", guideId: "faq" },
];

export const HELP_GUIDES: GuideDoc[] = [
  {
    id: "faq",
    title: "Frequently Asked Questions",
    shortTitle: "FAQs",
    badge: "35+ Verified Answers",
    icon: "❓",
    description:
      "Instant answers on user access, dual-theme customization, attendance clock-in, leave balances, client billing, and troubleshooting.",
    lastUpdated: "September 2026",
    readingTime: "8 min read",
    version: "v1.5.0 Production",
    faqs: [
      {
        category: "Account & Access",
        q: "How do I log in to the ERP?",
        a: "Navigate to https://erp.mintsglobal.tech/login (or http://localhost:3000/login in local development). Enter your corporate email (@mintsglobal.ae) and password.",
      },
      {
        category: "Account & Access",
        q: "What should I do if I forget my password?",
        a: "On the login screen, click 'Forgot Password?'. Enter your registered corporate email address, and a secure password reset link will be dispatched immediately. If you do not receive it within 5 minutes, submit a ticket to IT Support.",
      },
      {
        category: "Account & Access",
        q: "Why do I see 'Invalid Token' or 'Session Expired'?",
        a: "This occurs when your Firebase authentication token expires after periods of inactivity. The ERP automatically refreshes tokens via getIdToken(true). If prompted, simply sign out and log back in to renew your cryptographic session.",
      },
      {
        category: "Account & Access",
        q: "How are clearance permissions determined?",
        a: "Permissions follow strict Role-Based Access Control (RBAC): Founder, Core Team Lead, Department Head, Employee, and External Client. If you need access to a restricted area (e.g. Finance or Admin Audit), submit an access request to your Department Lead.",
      },
      {
        category: "Themes & Visuals",
        q: "How do I switch between Dark and Light Mode?",
        a: "Click the Theme Toggle (Sun/Moon icon) located in the top navigation header next to your avatar. The platform immediately transitions between Signature Olive Forest Dark (#0a0e0b) and High-Contrast Sage Cream Light (#f5f7f4).",
      },
      {
        category: "Themes & Visuals",
        q: "Will my theme preference be saved across sessions?",
        a: "Yes. Your theme selection is automatically persisted in your browser's local storage and synchronized seamlessly across visits.",
      },
      {
        category: "Themes & Visuals",
        q: "How does the platform ensure accessibility in Light Mode?",
        a: "Our theme engine enforces WCAG 2.1 AA accessibility standards (html.light tokens). In Light Mode, badges and typography use deeper saturations with dark charcoal text (#182012) to ensure a contrast ratio well above 11:1 against white and sage cards.",
      },
      {
        category: "Attendance & Shifts",
        q: "How was the negative timer issue (-1:-3:-24) resolved?",
        a: "Minor clock skew between a client machine and Google Cloud servers previously caused sub-second discrepancies. We implemented non-negative mathematical clamping (Math.max(0, ...)) across all timers and formatters, permanently preventing negative time display.",
      },
      {
        category: "Attendance & Shifts",
        q: "What if I forget to clock in at the beginning of my shift?",
        a: "Clock in as soon as you remember. Then scroll to the bottom of /dashboard/attendance to submit a formal Attendance Correction Request with your actual start time. Your manager can verify and approve the adjustment with one click.",
      },
      {
        category: "Attendance & Shifts",
        q: "Do lunch breaks count towards net working hours?",
        a: "No. Clicking 'Start Break' pauses the live working counter and shifts into break tracking mode. Total daily hours strictly reflect net working time excluding breaks.",
      },
      {
        category: "Leaves & Time Off",
        q: "How far in advance must I apply for annual leave?",
        a: "Planned leaves exceeding 3 days require a minimum of 14 business days notice. Short leaves (1-2 days) require at least 48 hours advance submission through the Leaves Planner.",
      },
      {
        category: "Leaves & Time Off",
        q: "Can managers view team coverage before approving leaves?",
        a: "Yes. The Leave Planner includes an interactive department calendar heatmap showing all approved and pending leaves, preventing under-staffing during peak deadlines.",
      },
      {
        category: "Finance & Invoices",
        q: "Are generated invoices compliant with UAE VAT regulations?",
        a: "Yes. All invoices generated by Mints Global ERP adhere to UAE FTA VAT requirements, including mandatory TRN formatting, bilingual Arabic/English line items, standard 5% VAT rate breakdowns, and verified HQ details.",
      },
      {
        category: "Client Portal",
        q: "Can external clients see internal communications or chat rooms?",
        a: "Zero exposure. External clients authenticate into an isolated client portal restricted strictly to their assigned project milestones, handover deliverables, and invoices. Internal employee discussions, timesheets, and tickets are never exposed.",
      },
      {
        category: "Automations & Discord",
        q: "How do Discord Webhook notifications trigger?",
        a: "System events (shift clock-ins, leave applications, expense approvals, deal wins) automatically dispatch structured embeds to designated corporate Discord channels via secure backend webhooks.",
      },
    ],
    sections: [
      {
        id: "faq-quickstart",
        title: "Account Setup & Authentication",
        summary: "Instructions on logging in, managing credentials, and resetting passwords.",
        content:
          "All corporate accounts are provisioned by HR Administrators. Access is authenticated via Firebase Authentication with cryptographically verified JSON Web Tokens. If your token expires during extended periods of inactivity, the client automatically requests a refreshed credential.",
        callout: {
          type: "tip",
          text: "Never share corporate login credentials. Enable multi-factor authentication where required and always use strong passphrases.",
        },
      },
      {
        id: "faq-themes",
        title: "Dual-Theme Customization & Accessibility",
        summary: "Understanding the Forest Dark and Sage Light design system.",
        content:
          "Mints Global ERP v1.5 introduces a full dual-theme engine. Forest Dark uses deep obsidian greens (#0a0e0b base) to eliminate eye strain during evening shifts. Sage Light uses a soft cream background (#f5f7f4) with crisp dark typography (#182012) compliant with WCAG 2.1 AA standards.",
      },
      {
        id: "faq-attendance",
        title: "Shift State Machine & Attendance Rules",
        summary: "How daily shifts, break tracking, and overtime calculations operate.",
        content:
          "The attendance system operates on a serverless state machine: Clock In ➔ Start Break ➔ Resume Work ➔ Clock Out. All timestamp deltas are clamped to prevent clock skew anomalies. Worked hours automatically synchronize with Discord telemetry channels.",
      },
      {
        id: "faq-troubleshooting",
        title: "Technical Support & Troubleshooting",
        summary: "Resolving common connection, permission, and caching issues.",
        content:
          "If a page fails to load or permissions appear out of date: 1. Perform a hard refresh (Ctrl + F5 or Cmd + Shift + R). 2. Clear application site data in developer tools. 3. If permission denied errors persist, contact your Department Head to confirm your assigned RBAC clearance tier.",
      },
    ],
  },
  {
    id: "handbook",
    title: "Employee Handbook & Policies",
    shortTitle: "Handbook",
    badge: "Workplace Standards",
    icon: "📘",
    description:
      "Company principles, onboarding requirements, shift standards, leave entitlements, internal communications, and information security policies.",
    lastUpdated: "September 2026",
    readingTime: "12 min read",
    version: "v1.5 Enterprise",
    sections: [
      {
        id: "hb-culture",
        title: "1. Welcome & Company Culture",
        summary: "Our operational tenets, mission, and working philosophy.",
        content:
          "At Mints Global, we engineer high-performance systems and deliver transformative digital solutions for world-class enterprises. We operate on four fundamental principles: Radical Ownership (owning deliverables end-to-end), Speed with Precision (moving rapidly without cutting corners), Transparent Communication (open context sharing), and Continuous Innovation.",
        bullets: [
          "Radical Ownership: Take full accountability for code, projects, and deliverables.",
          "Speed with Precision: Build with high velocity while maintaining zero regressions.",
          "Transparent Communication: Share context proactively across squads.",
          "Continuous Innovation: Eliminate operational friction with modern tooling.",
        ],
      },
      {
        id: "hb-onboarding",
        title: "2. Onboarding & Account Setup",
        summary: "Step-by-step first week checklist for new team members.",
        content:
          "Upon joining, you will receive your corporate @mintsglobal.ae email address and temporary credentials. Complete your profile in the HR Hub, review assigned department specializations, configure your preferred theme, and verify access to designated Discord channels.",
        bullets: [
          "Step 1: Receive corporate email credentials from HR Operations.",
          "Step 2: Sign in to ERP and immediately update your temporary password.",
          "Step 3: Complete emergency contact and phone details in /dashboard/hr.",
          "Step 4: Confirm your department assignments and specialization badges.",
          "Step 5: Verify presence alerts in corporate Discord channels.",
        ],
      },
      {
        id: "hb-attendance",
        title: "3. Working Hours & Attendance Policy",
        summary: "Shift timing, core collaboration windows, and punch protocols.",
        content:
          "The standard work week is Monday to Friday, comprising 8 working hours plus 1 hour for lunch. The core synchronous collaboration window is 10:00 AM to 4:00 PM local time. All team members must clock in upon starting work and clock out when concluding their shift.",
        callout: {
          type: "important",
          text: "Shift start, break toggles, and sign-offs are logged live to the internal Discord #attendance-log channel. Missed punches must be corrected within 24 hours.",
        },
      },
      {
        id: "hb-leaves",
        title: "4. Leave & Time-Off Policy",
        summary: "Annual leave accrual, sick leave documentation, and approval flows.",
        content:
          "Full-time employees accrue up to 21 working days of Annual Leave annually. In addition, up to 10 days of Sick Leave and 5 days of Casual/Emergency leave are available. All leave requests must be submitted through the Leave Planner in the ERP.",
        table: {
          headers: ["Leave Type", "Annual Allocation", "Notice Required", "Documentation"],
          rows: [
            ["Annual Leave", "21 Working Days", "14 Business Days", "Manager Sign-Off"],
            ["Sick Leave", "10 Working Days", "Same day by 9:00 AM", "Medical note after 2 days"],
            ["Casual / Emergency", "5 Working Days", "As early as possible", "HR Verification"],
            ["Unpaid Sabbatical", "Discretionary", "30 Days Notice", "Founder Approval"],
          ],
        },
      },
      {
        id: "hb-communication",
        title: "5. Internal Communication Standards",
        summary: "Guidelines for Team Chat, Mail Room, Announcements, and Meetings.",
        content:
          "Choose the appropriate medium for your message: Use Team Chat (/dashboard/chat) for rapid, ephemeral coordination; Corporate Mail Room (/dashboard/mail) for official documentation, client directives, and formal memos; and Announcements Hub (/dashboard/announcements) for broadcast notices.",
      },
      {
        id: "hb-security",
        title: "6. Information Security & Client Confidentiality",
        summary: "Safeguarding credentials, source code, and proprietary customer data.",
        content:
          "All corporate deliverables, design assets, and codebases are strictly confidential. Team members must maintain full disk encryption on work devices, never commit credentials or secrets to version control, and store all deliverables inside the encrypted Cloud Drive Vault.",
        callout: {
          type: "warning",
          text: "Sharing customer credentials, source code, or internal discussions with unauthorized third parties constitutes a critical breach of agreement.",
        },
      },
    ],
  },
  {
    id: "product-doc",
    title: "Product Architecture & Specifications",
    shortTitle: "Product Docs",
    badge: "Technical Specs",
    icon: "📖",
    description:
      "Comprehensive system architecture, serverless data pipelines, Firebase Admin SDK security layer, dual-theme engine tokens, and module directory map.",
    lastUpdated: "September 2026",
    readingTime: "15 min read",
    version: "v1.5.0 Production",
    sections: [
      {
        id: "pd-overview",
        title: "1. Executive Product Architecture",
        summary: "High-level overview of the Mints Global ERP operating platform.",
        content:
          "Mints Global ERP is a cloud-native enterprise resource planning system engineered specifically for modern distributed digital agencies and high-velocity technology teams. The platform unifies HR, CRM pipelines, project roadmaps, financial treasury, and automated workflows into a single serverless command center.",
        bullets: [
          "Single Data Model: Zero third-party sync lag; all modules read and write to Firestore.",
          "Sub-250ms Telemetry: Live Firestore state listeners deliver instant UI updates.",
          "Server-Side Token Hardening: Firebase Admin SDK v14 validates every incoming bearer token.",
          "Dual-Theme Accessibility: Precision dark and light palettes conforming to WCAG 2.1 AA.",
        ],
      },
      {
        id: "pd-stack",
        title: "2. Technical Stack & Infrastructure",
        summary: "Core engineering frameworks, database pipelines, and styling tokens.",
        content:
          "The frontend application runs on Next.js 16 (App Router) with React 19 and Turbopack compiler. Data persistence is managed via Google Cloud Firestore with real-time multi-collection subscriptions. Authentication utilizes Firebase Auth backed by Firebase Admin SDK v14 for serverless API endpoints.",
        table: {
          headers: ["Layer", "Technology", "Version", "Key Functionality"],
          rows: [
            ["Framework", "Next.js (App Router)", "16.3.4", "Server & Client Components, Turbopack"],
            ["UI Engine", "React", "19.2.8", "Streaming SSR, Concurrent Transitions"],
            ["Language", "TypeScript", "5.x", "Strict type contracts and schema enforcement"],
            ["Database", "Google Cloud Firestore", "Latest NoSQL", "Distributed real-time snapshot listeners"],
            ["Security", "Firebase Admin SDK", "v14.x", "Server-side bearer token validation"],
            ["Styling", "Tailwind CSS & CSS Vars", "v4.x", "Semantic tokens with dual-theme engine"],
          ],
        },
      },
      {
        id: "pd-themes",
        title: "3. The Dual-Theme Design Architecture",
        summary: "Semantic color tokens, surface elevations, and contrast ratios.",
        content:
          "The dual-theme architecture uses semantic CSS custom properties declared in globals.css. The Signature Forest Dark theme utilizes an obsidian base (#0a0e0b) with elevated surfaces (#121813) and pale sage text (#f0f4ee). The High-Contrast Sage Light theme utilizes a warm cream base (#f5f7f4) with pure white cards (#ffffff) and high-legibility dark olive text (#182012).",
      },
      {
        id: "pd-rbac",
        title: "4. Role-Based Access Control (RBAC) Matrix",
        summary: "5-Tier clearance hierarchy and document-level Firestore security rules.",
        content:
          "Access is governed by five clearance tiers: Tier 1 (Founders & Executive), Tier 2 (C-Suite & Operations), Tier 3 (Department Managers), Tier 4 (Team Members), and Tier 5 (External Clients). Each document query is verified against custom Firebase security rules.",
        table: {
          headers: ["Role", "Dashboard", "Attendance", "HR / Org", "CRM / Deals", "Finance", "Audit Log"],
          rows: [
            ["Founder / Admin", "Full", "Full", "Full", "Full", "Full Control", "Full Read/Write"],
            ["Operations Lead", "Full", "Full", "Full", "Full", "Read / Write", "Read-Only"],
            ["Dept Manager", "Department", "Department", "Department", "Assigned", "Department", "None"],
            ["Employee", "Personal", "Personal", "Read-Only", "Assigned", "None", "None"],
            ["Client", "Scoped", "None", "None", "Scoped", "Invoices Only", "None"],
          ],
        },
      },
      {
        id: "pd-modules",
        title: "5. Comprehensive 18-Module Catalog",
        summary: "Catalog of all production modules and internal service directories.",
        content:
          "The platform encompasses 18 synchronized modules: 1. Command Center, 2. Attendance & Live Shift Tracker, 3. HR Hub & Org Tree, 4. Specialization Badging, 5. CRM Sales Pipeline, 6. Projects & Gantt Roadmap, 7. Automated Workflow Builder, 8. Finance Treasury, 9. Leaves & PTO Planner, 10. Corporate Chat, 11. Cloud Drive Vault, 12. Helpdesk Kanban, 13. Mail Room, 14. Announcements Hub, 15. Reports & BI Analytics, 16. Security Audit Trail, 17. External Client Portal, 18. Discord Integrations & Settings.",
      },
    ],
  },
  {
    id: "user-manual",
    title: "Master Operational User Manual",
    shortTitle: "User Manual",
    badge: "Step-by-Step Guides",
    icon: "🛠️",
    description:
      "End-to-end operational procedures for daily usage of all 18 ERP modules, attendance state rules, lead conversion, Gantt milestones, and invoice dispatch.",
    lastUpdated: "September 2026",
    readingTime: "18 min read",
    version: "v1.5 Enterprise",
    sections: [
      {
        id: "um-nav",
        title: "Navigation & Command Palette (Ctrl+K)",
        summary: "Quick keyboard shortcuts and global application search.",
        content:
          "Press Cmd+K or Ctrl+K anywhere in the application to summon the Global Command Palette. Instantly search for employees, jump to active client deals, open project boards, or launch direct chats without lifting your hands from the keyboard.",
        callout: {
          type: "tip",
          text: "Use keyboard shortcut Ctrl+K / ⌘K to access any page, customer, or colleague profile in under 2 seconds.",
        },
      },
      {
        id: "um-attendance",
        title: "Attendance & Weekly Timesheet Matrix",
        summary: "Clock in/out shifts, log breaks, and fill weekly timesheet spreadsheets.",
        content:
          "To begin your shift, click Clock In. The live timer counts elapsed working seconds with non-negative clock skew clamping. When leaving for lunch, click Start Break. To log project timesheets, navigate to /dashboard/projects ➔ Timesheet Matrix tab, add project rows, enter daily hours, and submit for manager approval.",
        bullets: [
          "Clock In: Begins daily presence tracking and dispatches Discord notification.",
          "Start Break: Pauses working timer; logs net break duration.",
          "Resume Work: Reactivates working counter.",
          "Clock Out: Finalizes day, calculates net worked hours, and saves to Firestore.",
          "Timesheet Matrix: Weekly grid entry allocating daily hours across specific client projects.",
        ],
      },
      {
        id: "um-crm",
        title: "CRM Pipeline & 1-Click Client Conversion",
        summary: "Managing deals across Kanban stages and converting won leads.",
        content:
          "Navigate to /dashboard/crm to view your deal pipeline. Drag lead cards through stages: Qualified ➔ Discovery ➔ Proposal ➔ In Negotiation ➔ Won. When a deal closes, click 'Convert to Client' on the deal card; the system automatically provisions an active client account and adds them to the directory.",
      },
      {
        id: "um-projects",
        title: "Projects & Interactive Gantt Timeline",
        summary: "Tracking multi-day task timelines, deliverables, and dependencies.",
        content:
          "The Projects module features three view modes: Kanban Board, List View, and Interactive Gantt Timeline. In Gantt mode, managers drag duration bars across calendar dates to schedule deliverables, flag milestones, and evaluate team capacity against deadlines.",
      },
      {
        id: "um-workflows",
        title: "Automated Workflow Builder",
        summary: "Designing multi-stage conditional approval chains and triggers.",
        content:
          "Navigate to /dashboard/tasks ➔ Workflow Builder. Drag trigger nodes (e.g. 'Expense Submission') and connect conditional branches (e.g. 'If Amount > $500 ➔ Route to Founder; Else ➔ Route to Manager'). When triggered, approvers receive real-time dashboard notifications and Discord webhook alerts.",
      },
      {
        id: "um-finance",
        title: "Finance Treasury & UAE VAT Invoicing",
        summary: "Creating invoices, monitoring cash flow, and managing handover vault.",
        content:
          "To generate a customer invoice, go to /dashboard/finance ➔ Create Invoice. Fill in line items, client TRN, payment terms, and applicable discounts. Click 'Download PDF' to generate an official branded PDF. Upload finished project assets to the Handover Vault to make them visible inside the Client Portal.",
      },
      {
        id: "um-mail",
        title: "Corporate 3-Pane Internal Mail Room",
        summary: "Authoring encrypted internal memos and managing team directives.",
        content:
          "The Mail Room (/dashboard/mail) provides a modern 3-pane memo suite: Left sidebar for folder navigation (Inbox, Sent, Drafts, Archive), middle pane for searchable message lists, and right pane for reading memos and downloading attachments.",
      },
    ],
  },
];

export const GUIDES_MAP: Record<string, GuideDoc> = Object.fromEntries(
  HELP_GUIDES.map((g) => [g.id, g])
);

