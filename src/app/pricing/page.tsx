import type { Metadata } from "next";
import AnnouncementBar from "@/components/sections/AnnouncementBar";
import Navbar from "@/components/sections/Navbar";
import Pricing from "@/components/sections/Pricing";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing & Plans — Transparent Enterprise Pricing | Mints Global ERP",
  description:
    "Predictable, transparent pricing for Mints Global ERP. All 18 modules included with zero consultant fees. Multi-currency billing in USD, AED, GBP, INR, and EUR.",
  alternates: {
    canonical: "https://erp.mintsglobal.ae/pricing",
  },
  openGraph: {
    title: "Pricing & Plans — Mints Global ERP",
    description:
      "All 18 enterprise modules in one simple seat. Compare Free, Starter, Professional, and Enterprise tiers with multi-currency support.",
    url: "https://erp.mintsglobal.ae/pricing",
  },
};

const PRICING_FAQS = [
  {
    q: "Are all 18 modules really included in the subscription?",
    a: "Yes. Every paid plan includes full access to HR Directory, Attendance & Shifts, CRM Pipelines, Gantt Roadmaps, Invoicing, Workflows, Corporate Chat, Cloud Drive, and Ticketing. We never charge extra per-module fees.",
  },
  {
    q: "What currencies can we be billed in?",
    a: "We support native multi-currency billing in USD ($), UAE Dirhams (AED د.إ), British Pounds (GBP £), Indian Rupees (INR ₹), and Euros (EUR €) with zero foreign transaction penalties.",
  },
  {
    q: "How does the 20% annual billing discount work?",
    a: "When you choose annual billing, you receive an automatic 20% discount applied across all seats for the entire 12-month billing period.",
  },
  {
    q: "Can we add or remove seats at any time?",
    a: "Yes. Administrators can adjust seat counts instantly from the Settings dashboard. Mid-cycle additions are prorated to your billing cycle.",
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white text-[#182012]">
      <header className="sticky top-0 z-50 w-full">
        <AnnouncementBar />
        <Navbar />
      </header>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#F0F0F0]/80 via-white to-white border-b border-[#E4E4E4] py-12 sm:py-16 text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase text-[#687838] font-bold mb-3">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-[#182012]">Pricing</span>
          </div>

          <h1 className="font-sans font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#182012] tracking-tight mb-4">
            Transparent investment for{" "}
            <span className="text-[#687838]">ambitious teams.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#5A644D] max-w-2xl mx-auto mb-6 leading-relaxed">
            No consultant implementation bills. No hidden per-app modular lock-in.
            One predictable seat price with all 18 enterprise operations modules included.
          </p>
        </div>
      </section>

      {/* Core Pricing Component */}
      <Pricing />

      {/* Pricing FAQs */}
      <section className="py-16 sm:py-20 bg-white border-t border-[#E4E4E4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#687838] block mb-2">
              Commercial Clarity
            </span>
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-[#182012]">
              Frequently Asked Billing Questions
            </h2>
          </div>

          <div className="space-y-3">
            {PRICING_FAQS.map((f, i) => (
              <details
                key={i}
                className="group bg-[#F0F0F0] rounded-2xl p-5 border border-[#E4E4E4] hover:border-[#687838] transition-all [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer font-sans font-bold text-sm sm:text-base text-[#182012] group-open:text-[#687838]">
                  <span>{f.q}</span>
                  <span className="text-xs text-[#5A644D] group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 pt-3 border-t border-[#E4E4E4] text-xs sm:text-sm text-[#5A644D] leading-relaxed">
                  {f.a}
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
