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
  title: "Mints ERP for UK Businesses — UK GDPR & Making Tax Digital (MTD) Ready",
  description:
    "Enterprise command center for UK companies. Fully compliant with UK GDPR and HMRC Making Tax Digital (MTD). Replace fragmented Sage and Xero setups with one unified platform.",
  alternates: {
    canonical: "https://erp.mintsglobal.ae/uk",
    languages: {
      "en-AE": "https://erp.mintsglobal.ae",
      "en-GB": "https://erp.mintsglobal.ae/uk",
      "en-IN": "https://erp.mintsglobal.ae/india",
      "en-EU": "https://erp.mintsglobal.ae/eu",
      "x-default": "https://erp.mintsglobal.ae",
    },
  },
  openGraph: {
    title: "Mints ERP for UK Businesses — UK GDPR & MTD Compliant",
    description:
      "All-in-one HR, CRM, Projects, Finance, and Workflows built for UK technology teams and scaling enterprises.",
    url: "https://erp.mintsglobal.ae/uk",
    locale: "en_GB",
  },
};

const UK_COMPLIANCE_BADGES = [
  { label: "UK GDPR Compliant", desc: "Data protection standards audited to UK ICO guidelines" },
  { label: "MTD VAT Ready", desc: "Digital VAT calculation & HMRC export compatibility" },
  { label: "ISO 27001 Certified", desc: "Enterprise information security management" },
  { label: "Bank-Grade Encryption", desc: "AES-256 at rest and TLS 1.3 in transit" },
];

const UK_COMPETITOR_COMPARISON = [
  {
    feature: "Core Architecture",
    mints: "Unified single data model (HR, CRM, Projects, Finance)",
    sage: "Legacy modules connected via batch synchronization",
    xero: "Accounting only; requires 5+ third-party marketplace plug-ins",
  },
  {
    feature: "Pricing Model",
    mints: "Predictable per-user pricing in GBP with zero hidden add-on fees",
    sage: "Complex tiered enterprise contracts with mandatory consultant setup",
    xero: "Low initial cost, but escalating subscription fees for necessary add-ons",
  },
  {
    feature: "Real-Time Telemetry",
    mints: "Live Firestore event streaming (<250ms latency across London/EU)",
    sage: "Scheduled overnight batch processing and delayed reporting",
    xero: "API rate-limited webhooks subject to sync delays",
  },
  {
    feature: "Automated Workflows",
    mints: "Visual drag-and-drop rule builder with conditional branching",
    sage: "Requires bespoke scripting or third-party middleware",
    xero: "Basic rule matching limited to simple bank reconciliations",
  },
];

const UK_FAQS = [
  {
    q: "Is Mints ERP compliant with UK Making Tax Digital (MTD) rules?",
    a: "Yes. Invoices and financial records generated in Mints ERP preserve digital audit trails with explicit line-item VAT rates (20% standard, 5% reduced, and zero-rated) ready for direct accounting software export.",
  },
  {
    q: "How does Mints ERP satisfy UK GDPR data residency requirements?",
    a: "Data is stored in Google Cloud European/London infrastructure with strict 5-tier role-based access control, cryptographic token verification, and automated audit trails for full ICO compliance.",
  },
  {
    q: "Can UK businesses invoice international clients in USD, EUR, and GBP?",
    a: "Yes. Our Finance module features automated multi-currency invoicing with customizable VAT headers, foreign exchange conversion, and localized bank transfer details.",
  },
];

export default function UKPage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 w-full">
        <AnnouncementBar />
        <Navbar />
      </header>

      {/* UK Dedicated Hero */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F0F0F0]/70 via-white to-white border-b border-[#E4E4E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDF2E2] border border-[#DBE4C7] text-xs font-bold text-[#353E20] mb-6 shadow-2xs">
            <span>🇬🇧</span>
            <span>Mints ERP for United Kingdom Enterprises</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#687838]" />
            <span className="text-[#687838]">UK GDPR &amp; MTD Ready</span>
          </div>

          <h1 className="font-sans font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#182012] tracking-tight max-w-4xl mx-auto mb-6 leading-[1.12]">
            The modern ERP engineered for{" "}
            <span className="text-[#687838]">UK high-growth businesses.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#5A644D] max-w-2xl mx-auto mb-8 leading-relaxed">
            Eliminate the clutter of disconnected spreadsheets and disjointed Sage or Xero plug-ins.
            Mints ERP unifies UK payroll attendance, CRM pipelines, Gantt milestones, and MTD-ready invoicing in one command center.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12">
            <Link
              href="#pricing"
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#687838] hover:bg-[#56642E] text-white font-bold text-sm shadow-md transition-all"
            >
              View UK Pricing (£ GBP)
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
                  alt="Mints Global ERP UK Executive Dashboard"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </WindowFrame>
          </div>
        </div>
      </section>

      {/* UK Compliance Badges Strip */}
      <section className="py-10 bg-[#EDF2E2]/60 border-b border-[#DBE4C7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {UK_COMPLIANCE_BADGES.map((b, i) => (
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

      {/* UK Competitive Comparison Section */}
      <section className="py-16 sm:py-24 bg-white border-t border-[#E4E4E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#687838] block mb-2">
              Competitive Advantage
            </span>
            <h2 className="font-sans font-extrabold text-2xl sm:text-4xl text-[#182012] mb-3">
              Why UK firms choose Mints ERP over Sage &amp; Xero
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#5A644D]">
              Compare our unified command center against legacy software suites and fragmented plug-in marketplaces.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-[#E4E4E4] shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-[#F0F0F0] border-b border-[#E4E4E4]">
                  <th className="p-4 font-bold text-[#182012] w-1/4">Key Capability</th>
                  <th className="p-4 font-bold text-[#687838] bg-[#EDF2E2]/60 w-1/3">
                    Mints ERP (Unified)
                  </th>
                  <th className="p-4 font-bold text-[#5A644D] w-1/4">Sage Business</th>
                  <th className="p-4 font-bold text-[#5A644D] w-1/4">Xero + Plug-ins</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0F0F0]">
                {UK_COMPETITOR_COMPARISON.map((row, i) => (
                  <tr key={i} className="hover:bg-[#F9FBF6] transition-colors">
                    <td className="p-4 font-bold text-[#182012]">{row.feature}</td>
                    <td className="p-4 font-medium text-[#182012] bg-[#EDF2E2]/30 border-x border-[#DBE4C7]/50">
                      {row.mints}
                    </td>
                    <td className="p-4 text-[#5A644D]">{row.sage}</td>
                    <td className="p-4 text-[#5A644D]">{row.xero}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Auxiliary Modules */}
      <SupportingFeatures />

      {/* UK Pricing with Default GBP */}
      <Pricing initialCurrency="GBP" />

      {/* UK Region Specific FAQs */}
      <section className="py-16 bg-white border-t border-[#E4E4E4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#687838] block mb-2">
              UK FAQ
            </span>
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-[#182012]">
              United Kingdom Regulatory Inquiries
            </h2>
          </div>

          <div className="space-y-3">
            {UK_FAQS.map((faq, i) => (
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
