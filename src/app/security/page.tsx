import type { Metadata } from "next";
import AnnouncementBar from "@/components/sections/AnnouncementBar";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FinalCTA from "@/components/sections/FinalCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trust & Security Center — Mints Global ERP",
  description:
    "Enterprise security architecture, ISO 27001 alignment, 5-tier RBAC clearance, GDPR/PDPL compliance, and uptime SLA commitments for Mints Global ERP.",
  alternates: {
    canonical: "https://erp.mintsglobal.ae/security",
  },
  openGraph: {
    title: "Trust & Security Center — Mints Global ERP",
    description:
      "Enterprise security safeguards: ISO 27001-aligned ISMS, subprocessor governance, AES-256 encryption, and 99.95% uptime SLA.",
    url: "https://erp.mintsglobal.ae/security",
  },
};

const SECURITY_PILLARS = [
  {
    title: "ISO 27001-Aligned ISMS",
    desc: "Our Information Security Management System adheres to ISO/IEC 27001:2022 standards and UAE NESA cybersecurity guidelines, governing all database access, employee provisioning, and cryptographic key lifecycles.",
    badge: "Standards Alignment",
  },
  {
    title: "5-Tier RBAC Database Security",
    desc: "Access control is enforced at the database level using Google Cloud Firestore security rules. Even if client-side code is modified, privilege escalation is mathematically blocked.",
    badge: "Zero-Trust Clearance",
  },
  {
    title: "Bank-Grade Cryptography",
    desc: "All Customer Data is encrypted at rest using AES-256 with Google-managed KMS keys. All web and telemetry traffic is encrypted in transit using TLS 1.3 with HSTS enforcement.",
    badge: "AES-256 & TLS 1.3",
  },
  {
    title: "Immutable Administrative Audit",
    desc: "Every privileged action—including role alterations, shift punch modifications, and financial exports—is recorded in an append-only audit trail with tamper-evident timestamps.",
    badge: "Audit Logging",
  },
];

const SUBPROCESSOR_LOCATIONS = [
  { vendor: "Google Cloud Platform (GCP)", function: "Firestore Database & Authentication", regions: "Europe (Frankfurt, Belgium), UK (London), India (Mumbai), US (Iowa)" },
  { vendor: "Vercel Inc.", function: "Edge Application Routing & CDN Distribution", regions: "Global Edge Network (300+ PoPs worldwide)" },
  { vendor: "Discord Inc. (Optional)", function: "Customer-Configured Webhook Notification Routing", regions: "United States (Customer opt-in only)" },
];

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-white text-[#182012]">
      <header className="sticky top-0 z-50 w-full">
        <AnnouncementBar />
        <Navbar />
      </header>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#F0F0F0]/80 via-white to-white border-b border-[#E4E4E4] py-12 sm:py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase text-[#687838] font-bold mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-[#182012]">Trust &amp; Security Center</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDF2E2] border border-[#DBE4C7] text-xs font-bold text-[#353E20] mb-6 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#687838] animate-pulse" />
            <span>Enterprise Trust Center</span>
            <span className="text-[#687838] font-mono">99.95% Enterprise SLA</span>
          </div>

          <h1 className="font-sans font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#182012] tracking-tight max-w-4xl mx-auto mb-6 leading-[1.12]">
            Security, compliance, &amp; data privacy engineered into{" "}
            <span className="text-[#687838]">every single layer.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#5A644D] max-w-3xl mx-auto mb-8 leading-relaxed">
            Enterprise resource planning demands uncompromising governance. Explore how Mints Global safeguards your operational records, enforces 5-tier role clearance, and complies with international privacy laws.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href="mailto:info@mintsglobal.ae?subject=Request%20Mints%20ERP%20Data%20Processing%20Agreement%20(DPA)"
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#687838] hover:bg-[#56642E] text-white font-bold text-sm shadow-md transition-all"
            >
              Request Data Processing Agreement (DPA) →
            </a>
            <Link
              href="/privacy"
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#F0F0F0] hover:bg-[#EDF2E2] text-[#182012] font-semibold text-sm border border-[#DBE4C7] transition-all"
            >
              View Privacy Policy
            </Link>
          </div>
        </div>
      </section>

      {/* Security Pillars Grid */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#E4E4E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#687838] block mb-2">
              Architecture Safeguards
            </span>
            <h2 className="font-sans font-extrabold text-2xl sm:text-4xl text-[#182012] mb-3">
              Four Pillars of Enterprise Defense
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#5A644D]">
              Engineered by cybersecurity and software specialists at Mints Global in Dubai, UAE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {SECURITY_PILLARS.map((p, i) => (
              <div key={i} className="p-6 sm:p-8 rounded-3xl bg-[#F0F0F0]/50 border border-[#E4E4E4]">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#EDF2E2] text-[#353E20] border border-[#DBE4C7] inline-block mb-3">
                  {p.badge}
                </span>
                <h3 className="font-sans font-bold text-lg sm:text-xl text-[#182012] mb-2">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5A644D] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subprocessors & Data Residency */}
      <section className="py-14 sm:py-20 bg-[#F0F0F0]/40 border-b border-[#E4E4E4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#687838] block mb-2">
              Data Sovereignty
            </span>
            <h2 className="font-sans font-bold text-2xl sm:text-3xl text-[#182012] mb-2">
              Subprocessors &amp; Hosting Infrastructure
            </h2>
            <p className="text-xs sm:text-sm text-[#5A644D]">
              Customer Data is stored in secure regional Google Cloud nodes aligned with your billing jurisdiction.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-[#E4E4E4] bg-white shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-[#F0F0F0] border-b border-[#E4E4E4]">
                  <th className="p-4 font-bold text-[#182012]">Subprocessor</th>
                  <th className="p-4 font-bold text-[#182012]">Functional Scope</th>
                  <th className="p-4 font-bold text-[#182012]">Data Storage Regions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0F0F0]">
                {SUBPROCESSOR_LOCATIONS.map((sub, i) => (
                  <tr key={i} className="hover:bg-[#F9FBF6] transition-colors">
                    <td className="p-4 font-bold text-[#182012]">{sub.vendor}</td>
                    <td className="p-4 text-[#5A644D]">{sub.function}</td>
                    <td className="p-4 text-[#353E20]">{sub.regions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Compliance Certification Status & SLA */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="p-6 sm:p-8 rounded-3xl bg-[#EDF2E2]/60 border border-[#DBE4C7]">
              <div className="text-xs font-bold uppercase tracking-wider text-[#687838] mb-2">
                Honest Transparency
              </div>
              <h3 className="font-sans font-bold text-xl text-[#182012] mb-3">
                Certification &amp; Alignment Status
              </h3>
              <p className="text-xs sm:text-sm text-[#353E20] leading-relaxed mb-4">
                We operate with complete commercial honesty: our controls are <strong>aligned with ISO/IEC 27001:2022 standards and the UAE National Electronic Security Authority (NESA) IAS</strong> framework.
              </p>
              <p className="text-xs sm:text-sm text-[#5A644D] leading-relaxed">
                Formal external third-party surveillance audit certification is scheduled for completion in 2026. Enterprise prospects can review our preliminary SOC 2 / ISO self-assessment under NDA.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-[#F0F0F0]/50 border border-[#E4E4E4]">
              <div className="text-xs font-bold uppercase tracking-wider text-[#687838] mb-2">
                Service Reliability
              </div>
              <h3 className="font-sans font-bold text-xl text-[#182012] mb-3">
                Uptime SLA &amp; Incident Disclosure
              </h3>
              <p className="text-xs sm:text-sm text-[#5A644D] leading-relaxed mb-4">
                We commit to <strong>99.9% uptime</strong> across standard tiers, and <strong>99.95% financially-backed SLA</strong> for Enterprise accounts with 24/7 priority incident response.
              </p>
              <p className="text-xs text-[#5A644D]">
                To report a suspected security vulnerability under our responsible disclosure program, refer to our RFC 9116 security file at <Link href="/.well-known/security.txt" className="text-[#687838] underline font-mono">/.well-known/security.txt</Link> or email <strong>info@mintsglobal.ae</strong>.
              </p>
            </div>

          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}
