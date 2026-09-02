import type { Metadata } from "next";
import AnnouncementBar from "@/components/sections/AnnouncementBar";
import Navbar from "@/components/sections/Navbar";
import BentoShowcase from "@/components/sections/BentoShowcase";
import SupportingFeatures from "@/components/sections/SupportingFeatures";
import Pricing from "@/components/sections/Pricing";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import WindowFrame from "@/components/ui/WindowFrame";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mints ERP for Indian Enterprises — GST Invoicing & DPDP Act 2023 Compliant",
  description:
    "Next-generation enterprise command center for Indian businesses. GST-compliant tax invoicing (CGST/SGST/IGST), DPDP Act 2023 data security, and seamless project Gantt roadmaps.",
  alternates: {
    canonical: "https://erp.mintsglobal.ae/india",
    languages: {
      "en-AE": "https://erp.mintsglobal.ae",
      "en-GB": "https://erp.mintsglobal.ae/uk",
      "en-IN": "https://erp.mintsglobal.ae/india",
      "en-EU": "https://erp.mintsglobal.ae/eu",
      "x-default": "https://erp.mintsglobal.ae",
    },
  },
  openGraph: {
    title: "Mints ERP for India — GST Invoicing & DPDP Compliant",
    description:
      "Replace outdated desktop accounting tools with a collaborative cloud command center for Indian technology, design, and product squads.",
    url: "https://erp.mintsglobal.ae/india",
    locale: "en_IN",
  },
};

const INDIA_COMPLIANCE_BADGES = [
  { label: "GST Tax Invoicing", desc: "Dual CGST+SGST or interstate IGST calculation with HSN/SAC codes" },
  { label: "DPDP Act 2023 Aligned", desc: "Purpose-based data protection & comprehensive audit logging" },
  { label: "Multi-Currency Treasury", desc: "Invoice domestic clients in INR and overseas clients in USD/GBP/EUR" },
  { label: "Serverless Performance", desc: "Sub-200ms latency on Mumbai and Delhi cloud edge locations" },
];

const INDIA_COMPETITOR_COMPARISON = [
  {
    feature: "Cloud & Remote Access",
    mints: "True cloud-native (browser, mobile, tablet) with real-time Firestore sync",
    tally: "Primarily desktop-bound `.exe`; requires fragile third-party remote gateways",
    zoho: "Cloud-based, but partitioned across 12 separate apps with disconnected databases",
  },
  {
    feature: "Operational Scope",
    mints: "Unified command center: HR, attendance, deals, Gantt timelines, invoices, workflows",
    tally: "Strictly accounting & inventory; zero built-in CRM pipelines or Gantt roadmaps",
    zoho: "Requires purchasing Zoho One or separate individual subscriptions per module",
  },
  {
    feature: "Shift Punch & Skew",
    mints: "Hardened server state machine with zero-drift mathematical clock clamping",
    tally: "No native employee shift punch or location attendance engine",
    zoho: "Separate Zoho People subscription with standalone check-in app",
  },
  {
    feature: "Automated Approvals",
    mints: "Visual workflow builder for expense caps, leave approval hierarchies, and deals",
    tally: "Manual entry-level sign-offs; no visual flowchart workflow engine",
    zoho: "Basic workflow rules divided across individual module administrative menus",
  },
];

const INDIA_FAQS = [
  {
    q: "Does Mints ERP generate Indian GST-compliant tax invoices?",
    a: "Yes. Invoices automatically apply the correct GST rules based on state of supply: intra-state transactions generate CGST (9%) and SGST (9%), while inter-state or export sales generate IGST (18%) alongside mandatory GSTIN and HSN/SAC codes.",
  },
  {
    q: "How does Mints ERP satisfy India's DPDP Act 2023 requirements?",
    a: "Our architecture enforces strict data principal consent, role-based document access, encrypted storage, and immutable administrator audit trails giving organizations complete compliance assurance.",
  },
  {
    q: "Can Indian software agencies bill overseas clients in USD or GBP while maintaining INR accounts?",
    a: "Yes. The Treasury ledger records foreign currency exchange gains/losses automatically and generates bilingual invoices suitable for international wire transfer and domestic GST filing.",
  },
];

export default function IndiaPage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 w-full">
        <AnnouncementBar />
        <Navbar />
      </header>

      {/* India Dedicated Hero */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F0F0F0]/70 via-white to-white border-b border-[#E4E4E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDF2E2] border border-[#DBE4C7] text-xs font-bold text-[#353E20] mb-6 shadow-2xs">
            <span>🇮🇳</span>
            <span>Mints ERP for Indian Enterprises &amp; Fast-Growing Squads</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#687838]" />
            <span className="text-[#687838]">GST &amp; DPDP Compliant</span>
          </div>

          <h1 className="font-sans font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#182012] tracking-tight max-w-4xl mx-auto mb-6 leading-[1.12]">
            Move beyond desktop ledgers with a{" "}
            <span className="text-[#687838]">modern cloud command center.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#5A644D] max-w-2xl mx-auto mb-8 leading-relaxed">
            Replace legacy Tally setups and fragmented Zoho subscriptions.
            Mints ERP unifies Indian GST tax invoicing, employee shift presence, project Gantt dependencies, and visual workflow automations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12">
            <Link
              href="#pricing"
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#687838] hover:bg-[#56642E] text-white font-bold text-sm shadow-md transition-all"
            >
              View India Pricing (₹ INR)
            </Link>
            <Link
              href="/help-center"
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#F0F0F0] hover:bg-[#EDF2E2] text-[#182012] font-semibold text-sm border border-[#DBE4C7] transition-all"
            >
              Explore Knowledge Base →
            </Link>
          </div>

          {/* Signature WindowFrame Preview */}
          <div className="max-w-5xl mx-auto">
            <WindowFrame>
              <div className="relative aspect-[16/10] w-full bg-[#0a0e0b]">
                <Image
                  src="/images/Screenshot1.png"
                  alt="Mints Global ERP India Executive Dashboard"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </WindowFrame>
          </div>
        </div>
      </section>

      {/* India Compliance Badges Strip */}
      <section className="py-10 bg-[#EDF2E2]/60 border-b border-[#DBE4C7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INDIA_COMPLIANCE_BADGES.map((b, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white border border-[#DBE4C7] shadow-2xs">
                <div className="text-xs font-bold text-[#182012] mb-1 flex items-center gap-1.5">
                  <span className="text-[#687838]">✓</span> {b.label}
                </div>
                <div className="text-[11px] text-[#5A644D] leading-relaxed">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Showcase with Dual Themes */}
      <BentoShowcase />

      {/* India Competitive Comparison Section */}
      <section className="py-16 sm:py-24 bg-white border-t border-[#E4E4E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#687838] block mb-2">
              Competitive Advantage
            </span>
            <h2 className="font-sans font-extrabold text-2xl sm:text-4xl text-[#182012] mb-3">
              Why Indian high-growth teams choose Mints ERP over Tally &amp; Zoho
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#5A644D]">
              Modern engineering teams require real-time collaboration, not standalone desktop accounting files.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-[#E4E4E4] shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-[#F0F0F0] border-b border-[#E4E4E4]">
                  <th className="p-4 font-bold text-[#182012] w-1/4">Capability</th>
                  <th className="p-4 font-bold text-[#687838] bg-[#EDF2E2]/60 w-1/3">
                    Mints ERP (Unified)
                  </th>
                  <th className="p-4 font-bold text-[#5A644D] w-1/4">TallyPrime</th>
                  <th className="p-4 font-bold text-[#5A644D] w-1/4">Zoho Ecosystem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0F0F0]">
                {INDIA_COMPETITOR_COMPARISON.map((row, i) => (
                  <tr key={i} className="hover:bg-[#F9FBF6] transition-colors">
                    <td className="p-4 font-bold text-[#182012]">{row.feature}</td>
                    <td className="p-4 font-medium text-[#182012] bg-[#EDF2E2]/30 border-x border-[#DBE4C7]/50">
                      {row.mints}
                    </td>
                    <td className="p-4 text-[#5A644D]">{row.tally}</td>
                    <td className="p-4 text-[#5A644D]">{row.zoho}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Auxiliary Modules */}
      <SupportingFeatures />

      {/* India Pricing with Default INR */}
      <Pricing initialCurrency="INR" />

      {/* India Region Specific FAQs */}
      <section className="py-16 bg-white border-t border-[#E4E4E4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#687838] block mb-2">
              India FAQ
            </span>
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-[#182012]">
              India GST &amp; Data Compliance Inquiries
            </h2>
          </div>

          <div className="space-y-3">
            {INDIA_FAQS.map((faq, i) => (
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
