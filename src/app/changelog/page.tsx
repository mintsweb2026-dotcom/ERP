import type { Metadata } from "next";
import AnnouncementBar from "@/components/sections/AnnouncementBar";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FinalCTA from "@/components/sections/FinalCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product Changelog & Release Notes — Mints Global ERP",
  description:
    "Explore continuous product updates, new releases, and architectural improvements across Mints Global ERP from v1.2 to v1.6.",
  alternates: {
    canonical: "https://erp.mintsglobal.ae/changelog",
  },
};

const RELEASES = [
  {
    version: "v1.5.0",
    date: "September 2026",
    badge: "Current Release",
    headline: "Dual-Theme Engine, Multi-Region Expansion & Public Portals",
    summary:
      "Introduces high-contrast Sage Light alongside Forest Dark, dedicated regional landing editions (UK, India, Europe), 5-currency billing, Chatwoot-style Help Center and Competitor Comparison portals.",
    changes: [
      "Added instant Forest Dark ↔ Sage Light dual-theme preview switcher across hero and bento showcase",
      "Added multi-currency billing engine supporting USD, AED, GBP, INR, and EUR with annual discounts",
      "Launched multi-region localized hubs with statutory compliance for UAE VAT, UK MTD, Indian GST, and EU e-invoicing",
      "Created Chatwoot-style Competitor Comparison Portal with 25-point matrix and interactive TCO calculator",
      "Published 4 comprehensive documentation manuals with verified Q&A and instant Cmd/Ctrl+K search",
      "Published official Terms of Service, Privacy Policy (PDPL/GDPR/DPDP), and Proprietary License",
    ],
  },
  {
    version: "v1.4.0",
    date: "July 2026",
    badge: "Major Feature",
    headline: "Visual Workflow Automations & Communications Hub",
    summary:
      "Empowered non-technical operations leads to build visual conditional logic triggers, corporate chat channels, and Discord system alerts.",
    changes: [
      "Visual drag-and-drop workflow flowchart builder with conditional rule evaluation",
      "Integrated Corporate Chat with dedicated department channels and direct messaging",
      "Corporate Mail Room and encrypted Cloud Document Vault for client files",
      "Discord webhook integration for instantaneous lead alerts and leave approvals",
    ],
  },
  {
    version: "v1.3.0",
    date: "May 2026",
    badge: "Security & Workforce",
    headline: "5-Tier RBAC Ladder & Hardware Clock Clamping",
    summary:
      "Engineered database-level zero-trust authorization and eliminated shift punch tampering through mathematical time clamping.",
    changes: [
      "5-Tier Clearance Hierarchy (Founders, C-Suite, Admin, Manager, Employee) enforced via Firestore rules",
      "Mathematical clock-skew clamping algorithm preventing client-side device timestamp spoofing",
      "Live Presence Map with optional geolocation verification for remote and field teams",
      "Automated immutable audit logging recording all administrative and financial changes",
    ],
  },
  {
    version: "v1.2.0",
    date: "March 2026",
    badge: "Core Operations",
    headline: "Interactive Gantt Timelines & CRM Pipeline",
    summary:
      "Centralized sales and project execution into a single cohesive data pipeline.",
    changes: [
      "Interactive visual Gantt chart with task dependencies and milestone tracking",
      "Kanban CRM pipeline with customizable deal stages and real-time revenue forecasts",
      "7-Day timesheet matrix with daily hourly logs and manager sign-off workflows",
      "External Client Portal enabling client review of project progress and invoice status",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <main className="min-h-screen bg-white text-[#182012]">
      <header className="sticky top-0 z-50 w-full">
        <AnnouncementBar />
        <Navbar />
      </header>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#F0F0F0]/80 via-white to-white border-b border-[#E4E4E4] py-12 sm:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase text-[#687838] font-bold mb-3">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-[#182012]">Product Changelog</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDF2E2] border border-[#DBE4C7] text-xs font-bold text-[#353E20] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#687838] animate-pulse" />
            <span>Continuous Delivery</span>
            <span className="text-[#687838]">v1.5.0 Live</span>
          </div>

          <h1 className="font-sans font-extrabold text-3xl sm:text-5xl text-[#182012] tracking-tight mb-4">
            Product Changelog &amp; Release History
          </h1>

          <p className="text-sm sm:text-base text-[#5A644D] max-w-2xl mx-auto leading-relaxed">
            Follow our weekly and monthly engineering releases as we build the world&apos;s most agile, unified enterprise operating system.
          </p>
        </div>
      </section>

      {/* Changelog Timeline */}
      <section className="py-14 sm:py-20 bg-[#F0F0F0]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-10">
            {RELEASES.map((rel, idx) => (
              <article
                key={idx}
                className="p-6 sm:p-8 md:p-10 rounded-3xl bg-white border border-[#E4E4E4] shadow-xs relative"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xl sm:text-2xl font-extrabold text-[#182012]">
                      {rel.version}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#EDF2E2] text-[#353E20] text-xs font-bold border border-[#DBE4C7]">
                      {rel.badge}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#5A644D]">
                    {rel.date}
                  </span>
                </div>

                <h2 className="font-sans font-bold text-lg sm:text-xl text-[#182012] mb-3">
                  {rel.headline}
                </h2>

                <p className="text-xs sm:text-sm text-[#5A644D] leading-relaxed mb-6">
                  {rel.summary}
                </p>

                <div className="space-y-2 pt-4 border-t border-[#F0F0F0]">
                  <div className="text-xs font-bold text-[#182012] uppercase tracking-wider mb-2">
                    Key Improvements:
                  </div>
                  <ul className="space-y-2">
                    {rel.changes.map((item, i) => (
                      <li key={i} className="text-xs sm:text-sm text-[#353E20] flex items-start gap-2.5">
                        <span className="text-[#687838] font-bold mt-0.5">✓</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}
