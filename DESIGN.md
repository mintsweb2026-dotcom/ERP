# Mints ERP — Design System & Architectural Specification

## 1. Brand Identity & Design Philosophy

**Mints Global ERP** is an enterprise command center engineered to centralize HR, CRM pipelines, Projects, Finance treasury, and Automations for high-performance organizations. The visual direction balances operational rigor with executive elegance:

- **Style Archetype**: *"Executive Ledger"* — modern light SaaS with Swiss layout clarity and warm luxury cues.
- **Core Distinction**: Avoids generic startup blues/purples in favor of a grounded matte olive green (`#687838`) and warm off-white (`#F0F0F0`) palette.
- **Dual-Theme Engine**:
  - **Forest Dark**: Deep obsidian forest base (`#0a0e0b`) with elevated card surfaces (`#121813`), emerald accents, and soft olive borders (`#232d1e`) eliminating eye fatigue during evening operations.
  - **Sage Light**: High-contrast sage cream base (`#f5f7f4`) with crisp white card faces (`#ffffff`), dark olive typography (`#182012`), and subtle badges conforming strictly to WCAG 2.1 AA readability standards.
- **Tone of Voice**: Authoritative, precise, enterprise-ready, and calm.

---

## 2. Color System & Tokens

All tokens are defined in `src/app/globals.css` using Tailwind CSS v4 `@theme inline` and CSS custom variables.

| Token Name | Hex Code | HSL Approx | Primary Usage |
|---|---|---|---|
| **Primary Accent (`olive-600`)** | `#687838` | `73°, 36%, 35%` | Primary CTA buttons, key badges, active rings, brand accents |
| **Primary Hover (`olive-700`)** | `#515E2C` | `74°, 36%, 27%` | Button hover and active states |
| **Secondary Surface (`neutral-base`)**| `#F0F0F0` | `0°, 0%, 94%` | Auxiliary cards, window frame header, footer background |
| **Soft Tint (`olive-tint`)** | `#EDF2E2` | `82°, 38%, 92%` | Eyebrow badges, active tab backgrounds, pill containers |
| **Soft Border (`olive-border`)** | `#DBE4C7` | `81°, 33%, 84%` | Eyebrow border, active tab borders, checklist checkmark rings |
| **Deep Forest Text (`ink-primary`)** | `#182012` | `90°, 28%, 10%` | Primary display headlines, high-contrast text (>11:1 contrast) |
| **Muted Forest Text (`ink-muted`)** | `#5A644D` | `85°, 13%, 35%` | Body copy, secondary descriptions, footer links |
| **Deep Olive Night (`olive-night`)** | `#1C210E` | `76°, 40%, 9%` | Final CTA container background, deep anchor |
| **Forest Dark Base** | `#0a0e0b` | `135°, 25%, 4%` | ERP signature dark mode canvas background |
| **Sage Light Base** | `#f5f7f4` | `100°, 12%, 96%` | ERP signature light mode canvas background |
| **Pure White** | `#FFFFFF` | `0°, 0%, 100%` | Primary card faces, hero background, window frame canvas |
| **Border Neutral** | `#E4E4E4` | `0°, 0%, 89%` | Card borders, table dividers, navigation hairline |

---

## 3. Typography Architecture

Implemented using `@next/font/google` in `src/app/layout.tsx`.

| Hierarchy | Typeface | Weights | Tracking | Usage |
|---|---|---|---|---|
| **Display Headings** | `Plus Jakarta Sans` | `700 (Bold)`, `800 (Extrabold)` | `-0.025em (tight)` | H1, H2, H3 section headers |
| **Body & UI** | `Inter` | `400 (Regular)`, `500 (Medium)`, `600 (Semibold)` | `normal` | Body copy, buttons, nav links, table cells |
| **Monospace / Data** | System Monospace | `500 (Medium)` | `0.05em (wide)` | URL pill, telemetry tags, latency counters, code snippets |

### Type Scale
- **Display Hero**: `text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.12]`
- **Section Heading (H2)**: `text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight`
- **Sub-heading (H3)**: `text-lg sm:text-xl md:text-2xl font-bold`
- **Body Large**: `text-base sm:text-lg text-[#5A644D] leading-relaxed`
- **Body Regular**: `text-xs sm:text-sm md:text-base text-[#5A644D] leading-relaxed`
- **Eyebrow / Badge**: `text-[10px] sm:text-xs font-bold tracking-wide uppercase`

---

## 4. Brand Assets & Production Screenshots

All official brand and product assets are maintained in `public/images/`.

| File | Type | Dimensions | Primary Context |
|---|---|---|---|
| `mints_erp_flat.png` | Flat Vector Lockup | `988 × 304 px` | Navbar (`h-8 sm:h-11`), Help Center header, Footer (`h-12 sm:h-16`) |
| `mints_erp_icon.png` | 3D Emblem Mark | `808 × 395 px` | Hero eyebrow pill, WindowFrame address bar, Favicon |
| `mints_erp_logo.png` | Full Stacked Logo | `972 × 655 px` | Vertical presentations, executive documentation |
| `mints_favicon.png` | Circular Badge Icon | `512 × 512 px` | Multi-resolution favicon and Apple touch icons |
| `Screenshot1.png` | Forest Dark Production | High-Res | Hero Forest Dark live showcase |
| `Screenshot2.png` | Sage Light Production | High-Res | Hero Sage Light live showcase |
| `crm_pipeline.png` | Module Screenshot | High-Res | Bento CRM sales Kanban view |
| `projects_gantt.png` | Module Screenshot | High-Res | Bento Gantt timeline & task dependencies |
| `finance_treasury.png` | Module Screenshot | High-Res | Bento Finance treasury & VAT invoice ledger |
| `workflow_builder.png`| Module Screenshot | High-Res | Bento Automated visual workflow builder |
| `hr_directory.png` | Module Screenshot | High-Res | Bento HR directory & org tree chart |
| `live_presence_map.png`| Module Screenshot | High-Res | Bento Attendance & shift presence tracker |
| `client_portal.png` | Module Screenshot | High-Res | Bento External scoped client portal |
| `light_theme/*` | Sage Light Suite (18) | High-Res | Light mode counterparts for every module |

---

## 5. UI Component Primitives

### Button (`src/components/ui/Button.tsx`)
- **Primary**: `bg-[#687838] text-white hover:bg-[#515E2C] shadow-sm active:scale-[0.98]`
- **Secondary**: `bg-[#F0F0F0] text-[#182012] border border-[#DBE4C7] hover:bg-[#E4E4E4]`
- **Ghost**: `bg-white text-[#182012] border border-[#E4E4E4] hover:bg-[#F0F0F0]`

### Window Frame (`src/components/ui/WindowFrame.tsx`)
- Browser chrome header in `#F0F0F0` with border `#E4E4E4`.
- Traffic light window controls: Red (`rose-400`), Amber (`amber-300`), Olive (`#687838`).
- Centered address capsule with lock icon / M emblem and `erp.mintsglobal.ae/command-center`.

### Showcase Horizontal Tabs Strip (`src/components/sections/BentoShowcase.tsx`)
- **Dual-Theme Toggle**: Instant Forest Dark ↔ Sage Light preview switch.
- **Scroll Chevrons (`‹` and `›`)**: Bidirectional circular buttons appearing automatically when tabs overflow screen width.
- **Mouse Wheel Translation**: Vertical mouse wheel turns directly into horizontal scroll (`onWheel`).
- **Auto-Centering**: Clicking any tab centers it smoothly into view.
- **Touch Swipe**: `overflow-x-auto snap-x` with zero scrollbar clutter (`scrollbar-none`).

### Spotlight Card (`src/components/ui/SpotlightCard.tsx`)
- Cursor tracking via CSS variables (`--mouse-x`, `--mouse-y`) with radial olive glow.

### Competitor Filter & Category Chips (`src/app/compare/page.tsx`)
- **Active State**: Solid olive `#687838` fill, crisp white typography, subtle drop-shadow (`shadow-xs`).
- **Inactive State**: Soft off-white `#F0F0F0` base, muted olive text (`#5A644D`), `#E4E4E4` border.
- **Snap-Scrolling**: Horizontal snap-scroll (`snap-x overflow-x-auto scrollbar-none`) with zero browser scrollbar clutter.

### Master Capability Matrix Table (`src/app/compare/page.tsx`)
- **Mints ERP Column**: Distinctive `#EDF2E2`/30 tint background with vertical `#DBE4C7`/60 hairline borders.
- **Inclusion Badges**: Emerald tint (`#EDF2E2`) badge with dark olive text (`#353E20`) and checkmark icon (`✓ Included`).
- **Absence Indicator**: Neutral slate dash (`— Not Available`).
- **Mobile Swipe Guard**: Explicit `min-w-[900px]` scroll wrapper with mobile indicator caption (`← Swipe horizontally on mobile to view all competitor columns →`).

### Interactive TCO Range Slider (`src/app/compare/page.tsx`)
- **Slider Track & Thumb**: Branded `#687838` accent with `accent-[#687838]`.
- **Dynamic Counter Pill**: Real-time seat badge in `#EDF2E2` with border `#DBE4C7` and font-mono numerical display.
- **Contrast Breakdown Cards**:
  - Fragmented Multi-App Stack: Light gray `#F0F0F0`/50 card with red accent price (`text-rose-600`).
  - Mints Global ERP: Soft olive `#EDF2E2`/60 card with deep forest price (`text-[#182012]`).
- **Annual Savings Banner**: High-contrast `#1C210E` deep olive night bar with white display numbers and primary olive action CTA.

### Redesigned Cookie & Governance Banner (`src/components/ui/CookieBanner.tsx`)
- **Visual Style**: High-contrast Executive Obsidian Forest (`#12180E`/95) with backdrop blur (`backdrop-blur-xl`), hairline border (`#353E20`), and subtle olive ambient glow (`#687838`/20).
- **Emblem**: Vector security shield icon in `#1C210E` container with matte olive check.
- **Granular Drawer**: Smooth Framer Motion spring accordion with 3 independent preference toggles:
  - *Strictly Essential*: Locked active state for Firebase session tokens & 5-tier clearance state.
  - *Telemetry & Latency Analytics*: Toggle controlling anonymous routing metrics connected to Google Consent Mode v2 (`analytics_storage`).
  - *UI Customization & Region*: Toggle controlling Forest/Sage theme and currency memory.
- **Persistent Access**: Discreet floating pill button (`bottom-4 left-4`) allowing visitors to reopen and modify preferences at any time.

---

## 6. Page Architecture & Flow

### 6.1 Landing Page (`/`)
1. **Announcement Bar**: Soft olive banner with `v1.5.0` badge, dual-theme release announcement, and roadmap link. Permanently rendered.
2. **Navbar**: Sticky frosted glass navigation with the flat vector logo, navigation links, and Help Center link.
3. **Hero**: Headline, dual CTAs, live telemetry badges, and interactive Forest Dark ↔ Sage Light screenshot toggle.
4. **Department Strip**: Continuous enterprise ticker (HR, CRM, Projects, Finance, Workflows, Client Portal, Timesheets, Analytics).
5. **Bento Showcase**: Dual-theme switcher, 7 interactive module tabs with bidirectional scroll controls, and 4-card bento grid.
6. **Supporting Features**: 6-card production visual gallery (Corporate Chat, Mail Room, Cloud Vault, Helpdesk Kanban, Discord Webhooks, Security Audit).
7. **Tech Stack**: Enterprise Next.js 16 Turbopack, React 19, Firebase Admin SDK v14, TypeScript 5, Tailwind CSS v4.
8. **Security & RBAC**: 5-Tier clearance hierarchy ladder + UAE compliance matrix (UAE PDPL, ISO 27001, UAE NESA, GDPR).
9. **Pricing Matrix**: 5-Currency switcher (USD $, AED د.إ, GBP £, INR ₹, EUR €) + 20% annual discount switch.
10. **Roadmap**: Continuous delivery timeline covering v1.2 through v1.6.
11. **FAQ Accordion**: Interactive Q&A cards with theme customization and clock-skew answers.
12. **Final CTA**: Deep olive night focal banner (`#1C210E`) with dual action buttons.
13. **Footer**: Structured `#F0F0F0` footer with official Dubai HQ address, regional editions directory, and knowledge base links.

### 6.2 Help Center & Knowledge Base (`/help-center` & `/help-center/[slug]`)
Built using the **Chatwoot Help Center archetype**:
1. **Interactive Central Hub (`/help-center`)**: Friendly greeting (*"Hey 👋, how can we help you?"*), prominent search input with `Cmd/Ctrl + K` listener, 1-tap topic chips, and 4 gateway cards.
2. **Dedicated Nested Static Routes (`/help-center/[slug]`)**:
   - ❓ `/help-center/faq`: 35+ verified answers, categorized Q&A accordion, and `FAQPage` JSON-LD schema.
   - 📘 `/help-center/handbook`: Workplace standards, core company tenets, working hours, and leave policies.
   - 📖 `/help-center/product-doc`: Full cloud architecture, Google Cloud Firestore pipeline, and 18-module technical specifications.
   - 🛠️ `/help-center/user-manual`: Master procedural instructions for attendance states, CRM deals, Gantt timelines, and VAT invoices.
   - Each route is pre-rendered statically via `generateStaticParams` with unique canonical metadata and sidebar navigation.

### 6.3 Multi-Region Landing Pages (`/uk`, `/india`, `/eu`)
Designed to counteract `.ae` TLD bias and satisfy high-intent regional compliance queries:
1. **United Kingdom (`/uk`)**:
   - **Compliance Hook**: UK GDPR & Making Tax Digital (MTD) VAT records.
   - **Competitive Set**: Unified command center vs. legacy Sage and fragmented Xero marketplace plug-ins.
   - **Default Currency**: GBP (£).
2. **India (`/india`)**:
   - **Compliance Hook**: Indian GST tax invoicing (CGST, SGST, IGST with HSN/SAC codes) & DPDP Act 2023.
   - **Competitive Set**: Collaborative cloud platform vs. desktop-bound TallyPrime and multi-app Zoho subscriptions.
   - **Default Currency**: INR (₹) with clean enterprise rounding.
3. **European Union (`/eu`)**:
   - **Compliance Hook**: EU GDPR data sovereignty, EN 16931 e-invoicing directive, and Peppol BIS Billing 3.0 export readiness.
   - **Competitive Set**: Agile zero-install command center vs. heavyweight SAP Business One and modular Odoo lock-in.
   - **Default Currency**: EUR (€).

### 6.4 AI Answer Engine Optimization (`llms.txt`, `sitemap.ts`, `robots.ts` & JSON-LD)
- **`public/llms.txt`**: Machine-readable index formatted for LLM citation engines (Perplexity, ChatGPT, Claude, Gemini) covering all 22+ indexable URLs.
- **`src/app/sitemap.ts`**: Dynamic sitemap with priority rankings across all core, regional, comparison, and documentation routes.
- **`src/app/robots.ts`**: Crawler policy allowlisting Googlebot, Bingbot, GPTBot, ClaudeBot, PerplexityBot, and Google-Extended.
- **JSON-LD Schema**: `Organization`, `SoftwareApplication`, `FAQPage`, and `BreadcrumbList` schemas.

### 6.5 Legal & Regulatory Documentation Pages (`/terms`, `/privacy`, `/license`)
Built for enterprise procurement clarity, compliance audits, and legal assurance:
1. **Terms of Service (`/terms`)**:
   - Master SaaS subscription agreement, acceptable use clauses, 5-tier account administration, and Dubai UAE governing jurisdiction.
2. **Privacy Policy (`/privacy`)**:
   - Explicit multi-jurisdictional privacy standards (UAE PDPL, UK GDPR, EU GDPR, India DPDP Act 2023).
   - Structured subprocessors matrix (Google Cloud Firestore, Vercel, Discord) and cookies policy.
   - Controller vs. Processor operational definitions and DPA availability.
3. **Proprietary License (`/license`)**:
   - Formal non-open-source proprietary IP notice, subscriber internal-use license grant, and trade-secret confidentiality safeguards.

### 6.6 Competitor Comparison Hub (`/compare` & `/compare/[competitor]`)
Built following the **Chatwoot Compare archetype** (`https://www.chatwoot.com/compare`):
1. **Central Comparison Benchmark Hub (`/compare`)**:
   - 1-tap competitor filter pills, 5 side-by-side competitor cards, and master 25-point matrix with horizontal touch-swipe.
   - **Dynamic TCO Calculator**: Toggle between Starter ($12/mo), Professional ($24/mo), and Enterprise ($49/mo) with active seat slider (5 to 150 users) modeling savings against fragmented SaaS stacks ($185/user/mo).
   - **Factual Capability Auditing**: Transparently highlights where Mints ERP excels (operations, HR, CRM, Gantt, VAT) while honestly disclosing scope boundaries (e.g. general ledger export rather than claiming deep manufacturing discrete BOM).
2. **Dedicated Competitor Static Routes (`/compare/[competitor]`)**:
   - `/compare/vs-zoho`: 1 unified database vs 12 siloed apps with Deluge scripting overhead.
   - `/compare/vs-sap`: 15-minute onboarding vs $30k+ systems integrator fees.
   - `/compare/vs-tally`: Cloud-native collaboration vs desktop .EXE files.
   - `/compare/vs-sage`: Native command center vs 5 to 8 marketplace add-ons.
   - `/compare/vs-monday`: Complete business operations and tax invoicing vs task boards.
   - Each route is statically generated with its own metadata and `FAQPage` schema.

### 6.7 Enterprise Trust & Security Center (`/security`)
- **Standards Alignment**: Clarifies ISO/IEC 27001:2022 and UAE NESA alignment honestly with external audit timeline.
- **Subprocessor Directory**: Details data residency across Google Cloud regional nodes (Frankfurt, Belgium, London, Mumbai, Iowa).
- **Service Commitments**: 99.9% standard / 99.95% Enterprise financially-backed uptime SLA.
- **Responsible Vulnerability Disclosure**: Connected to RFC 9116 public file at `/.well-known/security.txt`.
- **DPA Procurement Request**: Built-in direct request mechanism for bilateral Data Processing Agreements.

### 6.8 Public Accessibility Statement (`/accessibility`)
- Published statement of conformance to WCAG 2.1 AA and European Standard EN 301 549.
- Public contrast verification table confirming >12:1 ratios across core dark-on-light surfaces.
- Assistive technology and keyboard navigation specifications (<kbd>Cmd/Ctrl + K</kbd>, Tab rings).

### 6.9 High-Intent Commercial & Freshness Hubs (`/pricing` & `/changelog`)
- **Dedicated Pricing Hub (`/pricing`)**: Independent indexable route targeting high-intent SaaS procurement queries with 5-currency billing and annual discounts.
- **Continuous Product Changelog (`/changelog`)**: Chronological release log from v1.2 to v1.5 (current) and v1.6 (upcoming), serving as a powerful freshness signal for search engines and AI answer bots.

---

## 7. Accessibility & Contrast Verification

| Foreground | Background | Calculated Contrast | Compliance Level |
|---|---|---|---|
| `#182012` (Forest Ink) | `#FFFFFF` (White) | `13.8 : 1` | WCAG AAA (Pass) |
| `#182012` (Forest Ink) | `#F0F0F0` (Neutral Surface) | `12.1 : 1` | WCAG AAA (Pass) |
| `#182012` (Forest Ink) | `#f5f7f4` (Sage Light Base)| `12.8 : 1` | WCAG AAA (Pass) |
| `#5F6F33` (Flat Logo Olive)| `#FFFFFF` (White) | `4.85 : 1` | WCAG AA Large & Normal (Pass) |
| `#FFFFFF` (White text) | `#687838` (Olive CTA) | `4.62 : 1` | WCAG AA UI & Button (Pass) |
| `#FFFFFF` (White text) | `#1C210E` (Final CTA) | `15.2 : 1` | WCAG AAA (Pass) |

---

## 8. Responsive & Cross-Device Specification

### 8.1 Breakpoint Standards (Mobile-First)
- `base` (`0px–639px`): Compact phones (iPhone SE, Galaxy, iPhone 14/15/16).
- `sm:` (`640px–767px`): Large phones in landscape, phablets.
- `md:` (`768px–1023px`): Tablets (iPad portrait), medium foldables.
- `lg:` (`1024px–1279px`): Tablets landscape, laptops.
- `xl:` (`1280px–1535px`): Standard desktop monitors.
- `2xl:` (`1536px+`): Ultra-wide enterprise displays.

### 8.2 Mobile Touch & Layout Safeguards
- Minimum 44×44px tap target on all interactive controls (buttons, links, chevrons, feedback).
- Data tables wrapped in touch containers with `min-w-[480px]` and explicit swipe cues.
- Horizontal containers use `snap-x overflow-x-auto scrollbar-none` to prevent page-level horizontal blowout.
- Mouse `:hover` animations gated for fine pointers (`(hover: hover) and (pointer: fine)`).
- **Bento Grid Mobile Collapse**: The 4-card bento grid in `BentoShowcase.tsx` collapses strictly to a single column on screens `<768px` (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`) with full-width responsive preview frames.
- **DepartmentStrip Auto-Wrap**: Department badge ticker utilizes an auto-wrapping layout (`flex flex-wrap items-center justify-center`) with 44px touch targets, eliminating horizontal clipping on compact mobile devices.
- **Dynamic OpenGraph Social Card**: `src/app/opengraph-image.tsx` serves a branded 1200×630px executive preview image (`#182012` forest base, `#687838` emblem, Dubai HQ credentials) across all 22 public routes.
