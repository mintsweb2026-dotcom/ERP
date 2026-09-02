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
  title: "Mints ERP for European Enterprises — EU GDPR & EN 16931 E-Invoicing Ready",
  description:
    "Enterprise resource planning for European companies. Built with EU GDPR data sovereignty, EN 16931 electronic invoicing compliance, and multi-currency intra-community VAT.",
  alternates: {
    canonical: "https://erp.mintsglobal.ae/eu",
    languages: {
      "en-AE": "https://erp.mintsglobal.ae",
      "en-GB": "https://erp.mintsglobal.ae/uk",
      "en-IN": "https://erp.mintsglobal.ae/india",
      "en-EU": "https://erp.mintsglobal.ae/eu",
      "x-default": "https://erp.mintsglobal.ae",
    },
  },
  openGraph: {
    title: "Mints ERP for Europe — EU GDPR & E-Invoicing Compliant",
    description:
      "All-in-one command center unifying HR, CRM, Gantt timelines, and Peppol-ready e-invoicing for European enterprises.",
    url: "https://erp.mintsglobal.ae/eu",
    locale: "en_EU",
  },
};

const EU_COMPLIANCE_BADGES = [
  { label: "EU GDPR Compliant", desc: "Rigorous data minimization, consent management & ISO 27001 safeguards" },
  { label: "EN 16931 E-Invoicing", desc: "Digital invoice structure conforming to EU Directive 2014/55/EU & Peppol" },
  { label: "VIES Intra-Community VAT", desc: "Automated reverse-charge logic for cross-border European trade" },
  { label: "Frankfurt & Belgium Nodes", desc: "Ultra-low latency Google Cloud European data center infrastructure" },
];

const EU_COMPETITOR_COMPARISON = [
  {
    feature: "Deployment Velocity",
    mints: "Instant zero-install cloud onboarding in under 15 minutes",
    sap: "Months to years of expensive systems integrator setup and consultant billables",
    odoo: "Requires self-hosting maintenance or custom Python server orchestration",
  },
  {
    feature: "Total Cost of Ownership",
    mints: "Transparent per-seat pricing in EUR (€) with all 18 modules included",
    sap: "Heavy upfront perpetual licensing with mandatory annual maintenance contracts",
    odoo: "Starts inexpensive, but per-app pricing climbs dramatically as modules scale",
  },
  {
    feature: "Developer Experience",
    mints: "Modern Next.js 16 App Router, React 19, and serverless Firebase Admin SDK v14",
    sap: "Legacy ABAP programming layer and cumbersome proprietary interfaces",
    odoo: "Monolithic Python backend with complex XML-based UI customization",
  },
  {
    feature: "E-Invoicing Readiness",
    mints: "Built-in structured digital invoices with Peppol BIS Billing 3.0 alignment",
    sap: "Requires purchasing and configuring SAP Document Compliance extensions",
    odoo: "Depends on region-specific community modules with varying maintenance quality",
  },
];

const EU_FAQS = [
  {
    q: "Is Mints ERP compliant with European Union GDPR data privacy laws?",
    a: "Yes. Mints ERP is engineered around privacy-by-design principles: strict data residency in European Google Cloud zones (Frankfurt/Belgium), cryptographic token authorization, right-to-be-forgotten deletion workflows, and immutable audit logs.",
  },
  {
    q: "Does Mints ERP support European e-invoicing directives?",
    a: "Yes. Invoices can be generated and exported in digital formats aligned with standard EN 16931 guidelines and Peppol BIS Billing 3.0 data models required by EU member states.",
  },
  {
    q: "How does the system handle EU cross-border reverse charge VAT?",
    a: "When issuing an invoice to an EU customer outside your home country with a valid VIES VAT registration number, Mints ERP automatically zeroes out standard VAT and appends the statutory 'Reverse Charge / Autoliquidation' declaration.",
  },
];

export default function EUPage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 w-full">
        <AnnouncementBar />
        <Navbar />
      </header>

      {/* EU Dedicated Hero */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F0F0F0]/70 via-white to-white border-b border-[#E4E4E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDF2E2] border border-[#DBE4C7] text-xs font-bold text-[#353E20] mb-6 shadow-2xs">
            <span>🇪🇺</span>
            <span>Mints ERP for European Union Enterprises</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#687838]" />
            <span className="text-[#687838]">GDPR &amp; EN 16931 E-Invoicing</span>
          </div>

          <h1 className="font-sans font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#182012] tracking-tight max-w-4xl mx-auto mb-6 leading-[1.12]">
            Enterprise command center built for{" "}
            <span className="text-[#687838]">modern European business.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#5A644D] max-w-2xl mx-auto mb-8 leading-relaxed">
            Replace cumbersome SAP deployments and disjointed Odoo plugins with an agile, high-speed operating system.
            Mints ERP unifies EU GDPR data protection, EN 16931 e-invoicing, project Gantt dependencies, and visual automations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12">
            <Link
              href="#pricing"
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#687838] hover:bg-[#56642E] text-white font-bold text-sm shadow-md transition-all"
            >
              View EU Pricing (€ EUR)
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
                  alt="Mints Global ERP Europe Executive Dashboard"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </WindowFrame>
          </div>
        </div>
      </section>

      {/* EU Compliance Badges Strip */}
      <section className="py-10 bg-[#EDF2E2]/60 border-b border-[#DBE4C7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {EU_COMPLIANCE_BADGES.map((b, i) => (
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

      {/* EU Competitive Comparison Section */}
      <section className="py-16 sm:py-24 bg-white border-t border-[#E4E4E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#687838] block mb-2">
              Competitive Advantage
            </span>
            <h2 className="font-sans font-extrabold text-2xl sm:text-4xl text-[#182012] mb-3">
              Why European leaders choose Mints ERP over SAP &amp; Odoo
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#5A644D]">
              Modern distributed enterprises need agile, browser-based velocity without exorbitant implementation fees.
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
                  <th className="p-4 font-bold text-[#5A644D] w-1/4">SAP Business One</th>
                  <th className="p-4 font-bold text-[#5A644D] w-1/4">Odoo Community</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0F0F0]">
                {EU_COMPETITOR_COMPARISON.map((row, i) => (
                  <tr key={i} className="hover:bg-[#F9FBF6] transition-colors">
                    <td className="p-4 font-bold text-[#182012]">{row.feature}</td>
                    <td className="p-4 font-medium text-[#182012] bg-[#EDF2E2]/30 border-x border-[#DBE4C7]/50">
                      {row.mints}
                    </td>
                    <td className="p-4 text-[#5A644D]">{row.sap}</td>
                    <td className="p-4 text-[#5A644D]">{row.odoo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Auxiliary Modules */}
      <SupportingFeatures />

      {/* EU Pricing with Default EUR */}
      <Pricing initialCurrency="EUR" />

      {/* EU Region Specific FAQs */}
      <section className="py-16 bg-white border-t border-[#E4E4E4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#687838] block mb-2">
              Europe FAQ
            </span>
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-[#182012]">
              European Union E-Invoicing &amp; GDPR Inquiries
            </h2>
          </div>

          <div className="space-y-3">
            {EU_FAQS.map((faq, i) => (
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
