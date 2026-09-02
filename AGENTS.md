<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Mints Global ERP — Agent Operating Guidelines

This repository contains the official product showcase and documentation website for **Mints Global ERP** (developed by Mints Global in Dubai, UAE). It presents a proprietary internal enterprise operating system as a ready-to-sell, modern SaaS product and comprehensive knowledge portal.

---

## 1. Strict Privacy & Brand Rules

- **NO GITHUB LINKS**: Never add links to GitHub repositories on any public webpage, component, footer, documentation article, or link tag.
- **Company Information**:
  - Entity: **Mints Global**
  - Product: **Mints Global ERP** (Commercial short name: **Mints ERP**)
  - Subtitle: *"One Command Center for HR, CRM, Projects & Automations"*
  - Headquarters: `Office #315, 3rd Floor, Bank Street Building, Bur Dubai, Dubai, UAE`
  - Contact: `info@mintsglobal.ae`
  - Website: `https://mintsglobal.ae`
  - Tagline: *"SMARTER OPERATIONS. TOGETHER."*
- **Compliance Mentions**: UAE FTA VAT Compliant Invoicing, UAE PDPL, UK GDPR, EU GDPR, Indian DPDP Act 2023, ISO 27001-Aligned ISMS, UAE NESA Ready.

---

## 2. Tech Stack & Architecture

- **Framework**: Next.js 16.3+ (App Router, Turbopack)
- **UI Engine**: React 19
- **Database & Security**: Google Cloud Firestore & Firebase Admin SDK v14 (Serverless token validation)
- **Styling**: Tailwind CSS v4 with `@theme inline` tokens in `src/app/globals.css`
- **Animations**: Framer Motion
- **Icons**: Lucide React + custom SVG assets
- **Typography**: Google Fonts via `next/font/google` (`Plus_Jakarta_Sans` for headings, `Inter` for body)

### Directory Map
```
src/
├── app/
│   ├── favicon.ico          # Multi-resolution favicon (16x16, 32x32, 48x48)
│   ├── icon.png             # Official circular emblem App Router icon (512x512)
│   ├── apple-icon.png       # Apple touch icon (180x180)
│   ├── sitemap.ts           # Dynamic sitemap covering all 22 static routes
│   ├── robots.ts            # Crawler policy with AI agent allowlist (GPTBot, ClaudeBot, etc.)
│   ├── globals.css          # Design tokens, custom utilities, dot-grid, window-frame
│   ├── layout.tsx           # Root layout, font definitions, metadata, icons config, CookieBanner
│   ├── page.tsx             # Main landing page (Global / UAE edition)
│   ├── pricing/
│   │   └── page.tsx         # Dedicated high-intent Pricing page (5 currencies & annual discount)
│   ├── changelog/
│   │   └── page.tsx         # Dedicated public Product Changelog & Release Notes (v1.2 to v1.6)
│   ├── security/
│   │   └── page.tsx         # Enterprise Trust & Security Center (ISO 27001, 5-tier RBAC, SLA, DPA)
│   ├── accessibility/
│   │   └── page.tsx         # Official Accessibility Statement (WCAG 2.1 AA / EN 301 549 matrix)
│   ├── uk/
│   │   └── page.tsx         # UK edition (UK GDPR, MTD VAT ready, GBP pricing, Sage/Xero comparison)
│   ├── india/
│   │   └── page.tsx         # India edition (GST compliance, DPDP Act 2023, INR pricing, Tally/Zoho comparison)
│   ├── eu/
│   │   └── page.tsx         # Europe edition (EU GDPR, EN 16931 e-invoicing, EUR pricing, SAP/Odoo comparison)
│   ├── compare/
│   │   ├── layout.tsx       # Metadata & canonical URL definitions for comparison portal
│   │   ├── page.tsx         # Comprehensive Chatwoot-style Competitor Benchmark Hub & TCO Calculator
│   │   └── [competitor]/
│   │       └── page.tsx     # Dedicated nested static routes: /compare/vs-zoho, /compare/vs-sap, etc.
│   ├── help-center/
│   │   ├── page.tsx         # Interactive Chatwoot-style Knowledge Base Hub with live search
│   │   └── [slug]/
│   │       └── page.tsx     # Dedicated nested static guides: /help-center/faq, /user-manual, etc.
│   ├── terms/
│   │   └── page.tsx         # Official Terms of Service (Acceptable use, subscription terms, Dubai governing law)
│   ├── privacy/
│   │   └── page.tsx         # Official Privacy Policy (UAE PDPL, UK/EU GDPR, India DPDP 2023, subprocessors)
│   └── license/
│       └── page.tsx         # Official Proprietary Software License (Non-open source, subscriber grant, IP rights)
├── data/
│   ├── helpCenterData.ts    # Centralized knowledge base data (FAQ, Handbook, Product Docs, User Manual)
│   └── competitorData.ts    # Centralized competitor benchmarking data with honest capability auditing
├── components/
│   ├── sections/            # Main showcase sections
│   │   ├── AnnouncementBar.tsx   # Top pill announcement (v1.5.0 live banner)
│   │   ├── Navbar.tsx            # Sticky frosted header with flat vector logo & mobile drawer
│   │   ├── Hero.tsx              # Dual-theme switcher, live telemetry pills, WindowFrame
│   │   ├── DepartmentStrip.tsx   # Enterprise departments ticker
│   │   ├── BentoShowcase.tsx     # Dual-theme switcher, 7 module tabs with scroll controls, 4-card bento
│   │   ├── SupportingFeatures.tsx# 6-card visual gallery (Chat, Mail Room, Drive, Tickets, Discord, Audit)
│   │   ├── TechStack.tsx         # Next.js 16, React 19, Firebase Admin v14 stack grid
│   │   ├── Security.tsx          # 5-Tier RBAC Ladder + UAE compliance badges
│   │   ├── Pricing.tsx           # Multi-currency toggle (USD, AED, GBP, INR, EUR) + 20% discount
│   │   ├── Roadmap.tsx           # Continuous delivery timeline (v1.2 to v1.6)
│   │   ├── FAQ.tsx               # Interactive accordion with themes & clock-skew Q&As
│   │   ├── FinalCTA.tsx          # Deep olive night focal banner
│   │   └── Footer.tsx            # Structured footer with Dubai address, Regions & Help Center links
│   └── ui/                  # Reusable primitives
│       ├── Button.tsx            # Primary (#687838), Secondary (#F0F0F0), Ghost
│       ├── CookieBanner.tsx      # Privacy consent banner with essential/analytics options & persistence
│       ├── WindowFrame.tsx       # Browser chrome with traffic lights & URL bar
│       ├── SpotlightCard.tsx     # Cursor-tracking radial hover glow (gated for mouse pointers)
│       ├── SectionDivider.tsx    # Hairline divider with center diamond
│       ├── ScrollReveal.tsx      # Viewport reveal transition wrapper
│       └── AnimatedCounter.tsx   # Viewport-triggered number increment
public/
├── .well-known/
│   └── security.txt         # RFC 9116 responsible vulnerability disclosure file
├── llms.txt                 # AI answer engine markdown index (Perplexity, ChatGPT, Claude)
└── images/                  # Real production screenshots and brand assets
```
    ├── mints_erp_flat.png        # Official flat vector logo (988x304)
    ├── mints_erp_icon.png        # Official 3D emblem mark
    ├── mints_erp_logo.png        # Official full stacked logo
    ├── mints_favicon.png         # Official circular badge favicon (512x512)
    ├── Screenshot1.png           # Hero signature Forest Dark view
    ├── Screenshot2.png           # Hero signature Sage Light view
    ├── crm_pipeline.png          # Dark CRM pipeline Kanban
    ├── projects_gantt.png        # Dark projects Gantt timeline
    ├── finance_treasury.png      # Dark finance treasury & invoicing
    ├── workflow_builder.png      # Dark automated workflow builder
    ├── hr_directory.png          # Dark HR directory & org tree
    ├── live_presence_map.png     # Dark attendance & presence tracker
    ├── client_portal.png         # Dark external client portal
    ├── timesheet_matrix.png      # Dark timesheet matrix
    ├── tickets_kanban.png        # Dark IT/HR helpdesk ticket board
    ├── mail_room.png             # Dark corporate mail room
    ├── discord_settings.png      # Dark system integrations & Discord
    ├── security_audit.png        # Dark administrative audit trail
    ├── announcements_hub.png     # Dark corporate announcements
    ├── reports_analytics.png     # Dark reports & BI analytics
    └── light_theme/              # Corresponding 18 production Sage Light screenshots
```

---

## 3. Brand Identity & Visual Tokens

- **Primary Brand Accent**: `#687838` (Matte Olive Green)
- **Secondary Neutral Surface**: `#F0F0F0` (Warm Off-White)
- **Soft Tint**: `#EDF2E2` (Pill badges, subtle active backgrounds)
- **Soft Border**: `#DBE4C7` (Badge and card active borders)
- **High-Contrast Dark**: `#182012` (Headings & body text on light surfaces)
- **Focal Deep Shade**: `#1C210E` (Final CTA container background)
- **Forest Dark Theme Surface**: `#0a0e0b` (Deep obsidian forest base)
- **Sage Light Theme Surface**: `#f5f7f4` (High-contrast sage cream base)

---

## 4. Documentation & Help Center Portal (`/help-center` & `/help-center/[slug]`)

The Help Center is built following the design archetype of **Chatwoot Help Center** (`https://www.chatwoot.com/help-center`) and features both a central search hub and individual indexable static manual routes:

1. **Central Interactive Hub (`/help-center`)**:
   - Global search input with `Cmd/Ctrl + K` keyboard shortcut and live multi-guide query filtering.
   - Popular topic filter chips with mobile snap-scrolling container (`snap-x overflow-x-auto`).
   - 4 gateway cards (1 col mobile, 2 col tablet, 4 col desktop).
2. **Dedicated Nested Static Routes (`/help-center/[slug]`)**:
   - **Frequently Asked Questions (`/help-center/faq`)**: 35+ verified Q&As across authentication, dual-theme customization, shift punches, UAE VAT invoicing, and clock-skew clamping, with dedicated `FAQPage` JSON-LD schema.
   - **Employee Handbook & Policies (`/help-center/handbook`)**: Workplace standards, core company tenets (Radical Ownership, Speed with Precision), onboarding checklist, working hours, and leave accruals.
   - **Product Architecture & Specs (`/help-center/product-doc`)**: Full system architecture, Google Cloud serverless pipeline, Firebase Admin SDK v14 token verification, dual-theme CSS tokens, and 18-module catalog.
   - **Master Operational User Manual (`/help-center/user-manual`)**: Daily operational procedures, 5-tier role permissions, attendance state machine, CRM pipelines, Gantt milestones, and invoice dispatch.
   - *Technical Implementation*: Pre-rendered via `generateStaticParams` with unique canonical metadata, table of contents sidebar, and mobile chapter switcher dropdown (`Section: ... ▼`).

---

## 5. Competitor Comparison Portal (`/compare` & `/compare/[competitor]`)

Built following the design archetype of **Chatwoot Compare** (`https://www.chatwoot.com/compare`) to capture high-intent SaaS procurement queries:

1. **Comparison Benchmark Hub (`/compare`)**:
   - **Master 25-Point Capability Matrix**: Categorized across *Core Platform, HR & Workforce, CRM & Projects, Finance & Compliance, Automations & Tools, Commercials & Value* with sticky table headers (`sticky top-0 z-30 bg-[#F5F7F4]/95 backdrop-blur-md`), horizontal mobile swipe container, and interactive `(ℹ️)` technical tooltips.
   - **Live Keyword Search & Filtering**: Real-time search bar dynamically filtering capability rows with live match counter (`Showing X of 27 features`).
   - **Tri-State Support Badges**: Differentiates between *✓ Included*, *⚠️ Fragmented / Paid Add-on* (`⚠️ 12+ Siloed DBs`, `⚠️ $30k+ Consulting`, `⚠️ 8 Plugins`), and *— Not Available*.
   - **Competitor Flaw/Fix Contrast Badges**: Top competitor profile cards feature high-contrast `⚠️ Fatal Flaw` vs `🟢 Mints Fix` visual tags.
   - **3-Step Frictionless Migration Pipeline**: Visual transition section (`10-Minute Export ➔ Schema Auto-Mapping ➔ 48-Hour Zero-Downtime Parallel Run`).
   - **Verified Customer Switch Stories**: 3 regional case studies from Dubai, London, and Bengaluru demonstrating concrete ROI ($14,200/yr savings, tool elimination).
   - **Factual Capability Auditing**: Explicitly states operational boundaries (e.g. general ledger export integration rather than claiming deep manufacturing discrete BOM or shop-floor machine control).
   - **Interactive TCO Calculator**: Dynamic tier toggle (**Starter $12/mo**, **Professional $24/mo**, **Enterprise $49/mo**) with an active seat slider (5 to 150 users) modeling monthly and annual savings against fragmented SaaS stacks ($185/user/mo).
   - **Executive Print/PDF Mode**: 1-click `window.print()` trigger for procurement board presentations.
   - **Migration & Transition FAQ**: Structured accordion cards covering CSV/Excel/JSON data imports, zero consultant fees, and multi-region tax localization.
2. **Individual Competitor Static Routes (`/compare/[competitor]`)**:
   - **vs Zoho One (`/compare/vs-zoho`)**: Single unified Firestore database vs. 12+ fragmented Deluge-scripted apps.
   - **vs SAP Business One (`/compare/vs-sap`)**: Instant 15-minute cloud onboarding vs. $30k+ systems integrator fees.
   - **vs TallyPrime (`/compare/vs-tally`)**: Cloud-native collaboration with real-time telemetry vs. desktop `.exe` ledgers.
   - **vs Sage & Xero (`/compare/vs-sage`)**: Complete operational command center vs. 5–8 third-party marketplace plug-ins.
   - **vs Monday.com & Asana (`/compare/vs-monday`)**: Complete business operations, statutory tax billing, and attendance clocks vs. simple task boards.
   - *Technical Implementation*: Pre-rendered via `generateStaticParams` with dedicated metadata and `FAQPage` schema.

---

## 6. Trust, Governance & Commercial Hubs

1. **Enterprise Trust & Security Center (`/security`)**:
   - Explicitly clarifies that controls are **aligned with ISO/IEC 27001:2022 standards and UAE NESA guidelines**, with external audit certification scheduled for 2026.
   - Subprocessor directory with regional Google Cloud data centers (Frankfurt, Belgium, London, Mumbai, Iowa) and Vercel edge.
   - Service level commitments: 99.9% standard / 99.95% Enterprise financially-backed uptime SLA.
   - Direct bilateral Data Processing Agreement (DPA) request mechanism via `info@mintsglobal.ae`.
   - Linked to public RFC 9116 responsible disclosure file at `/.well-known/security.txt`.
2. **Official Accessibility Statement (`/accessibility`)**:
   - Formal statement of conformance to WCAG 2.1 AA and European Standard EN 301 549.
   - Luminance contrast ratio matrix (>12:1 on dark-on-light surfaces) and keyboard navigation standards.
3. **Dedicated Pricing Hub (`/pricing`)**:
   - Dedicated high-intent route for *"Mints ERP pricing"* queries. Supports 5 currencies (USD, AED, GBP, INR, EUR) and 20% annual discount.
4. **Product Changelog & Release Notes (`/changelog`)**:
   - Public continuous delivery log tracking updates from v1.2 to v1.5.0 (live) and v1.6.0 (roadmap) as an SEO freshness signal.
5. **Legal Documents**:
   - **Terms of Service (`/terms`)**: Master subscription agreement, acceptable use rules, and Dubai UAE governing jurisdiction.
   - **Privacy Policy (`/privacy`)**: UAE PDPL, UK GDPR, EU GDPR, and India DPDP Act 2023 compliance with subprocessors and cookies matrix.
   - **Proprietary Software License (`/license`)**: Non-open-source enterprise license grant and trade secret protections.
6. **Cookie Consent Mechanism**:
   - `CookieBanner.tsx` component with essential/analytics consent choice and `localStorage` persistence.

---

## 7. Global SEO, GEO & Multi-Region Strategy

Mints Global operates across **UAE, United Kingdom, India, and Europe**. To prevent `.ae` country-code bias and ensure maximum discoverability across regional search engines and AI answer engines:

1. **Multi-Region Routes**:
   - `/` (Global / UAE): UAE FTA VAT, UAE PDPL, UAE NESA, ISO 27001 alignment. Default currency: USD / AED.
   - `/uk`: UK GDPR, Making Tax Digital (MTD) VAT ready, HMRC compliance, Sage/Xero comparison. Default currency: GBP (£).
   - `/india`: GST-compliant invoicing (CGST, SGST, IGST), DPDP Act 2023, Tally/Zoho comparison. Default currency: INR (₹).
   - `/eu`: EU GDPR, EN 16931 e-invoicing directive, Peppol readiness, SAP/Odoo comparison. Default currency: EUR (€).
   - `/pricing`: Dedicated multi-currency pricing index.
   - `/compare`: Global competitor benchmark hub and TCO calculator.
2. **`hreflang` & Alternates Configuration** in `src/app/layout.tsx`:
   - `en-AE` ➔ `https://erp.mintsglobal.ae`
   - `en-GB` ➔ `https://erp.mintsglobal.ae/uk`
   - `en-IN` ➔ `https://erp.mintsglobal.ae/india`
   - `en-150` ➔ `https://erp.mintsglobal.ae/eu` (UN M.49 Europe regional identifier)
   - `en` ➔ `https://erp.mintsglobal.ae` (Generic English fallback)
   - `x-default` ➔ `https://erp.mintsglobal.ae`
3. **Structured Data Schemas**:
   - `Organization` schema declaring global `areaServed: ['AE', 'GB', 'IN', 'EU']`.
   - `SoftwareApplication` schema detailing application category, pricing tiers, and operating requirements.
   - `FAQPage` schema on `/help-center/faq` and all individual comparison routes.
   - `BreadcrumbList` schema for deep hierarchical navigation.
4. **AI Answer Engine (`llms.txt`)**:
   - `public/llms.txt` documents all 22+ canonical URLs for Perplexity, ChatGPT, Gemini, and Claude citations.
5. **Dynamic Sitemap & Crawler Rules**:
   - `sitemap.ts` generates `/sitemap.xml` dynamically across all 22 core, regional, comparison, and documentation routes.
   - `robots.ts` explicitly allowlists `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, and `Applebot-Extended`.

---

## 8. Engineering & Verification Workflow

1. **Build Validation**:
   Always run `npm run build` before completing tasks. Next.js Turbopack and TypeScript type-checking must pass with **0 errors** (all 22 static/SSG routes prerendering 29 pages cleanly).
2. **Visual & Interactive QA Checklist**:
   Test on `http://localhost:3000` using browser tools or subagents. Inspect:
   - Sticky navbar transitions, mobile drawer hamburger pattern, and nav link routing.
   - Dual-theme preview switcher (Forest Dark ↔ Sage Light) in both Hero and Bento sections.
   - BentoShowcase module tab horizontal scroll + chevrons (`‹` / `›`) and mobile 1-column card collapse.
   - DepartmentStrip touch interaction and wrapping across mobile breakpoints.
   - Pricing page at `/pricing` across all 5 currencies (USD, AED, GBP, INR, EUR) and annual discount switch.
   - Comparison portal at `/compare`: competitor filter buttons, 25-point matrix category pills, plan tier toggle, and TCO seat slider.
   - Nested competitor routes (`/compare/vs-zoho`, `/compare/vs-sap`, `/compare/vs-tally`, `/compare/vs-sage`, `/compare/vs-monday`).
   - Help Center hub at `/help-center` and nested guides (`/help-center/faq`, `/help-center/handbook`, etc.) across mobile (375px), tablet (768px), and desktop (1280px+).
   - Trust & Security Center at `/security`, Accessibility Statement at `/accessibility`, and Product Changelog at `/changelog`.
   - Regional routes (`/uk`, `/india`, `/eu`) rendering localized compliance pills, competitor comparison tables, and FAQs.
   - Cookie consent banner rendering, persistence in `localStorage`, and essential-only dismissal.
   - Legal routes (`/terms`, `/privacy`, `/license`) rendering cleanly with Dubai HQ contact info.
3. **Contrast & Accessibility**:
   Ensure text adheres to WCAG 2.1 AA / AAA standards (deep olive `#182012` on `#FFFFFF` and `#F0F0F0` is > 11:1; white on `#687838` is ~4.6:1).
