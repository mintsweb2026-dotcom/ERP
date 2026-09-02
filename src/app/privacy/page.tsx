import type { Metadata } from "next";
import AnnouncementBar from "@/components/sections/AnnouncementBar";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Mints Global ERP",
  description:
    "Official Privacy Policy of Mints Global ERP addressing UAE PDPL, UK GDPR, EU GDPR, and India's DPDP Act 2023.",
  alternates: {
    canonical: "https://erp.mintsglobal.ae/privacy",
  },
};

const SUBPROCESSORS = [
  { name: "Google Cloud / Firebase", purpose: "Database hosting, Firestore real-time sync, and token authentication", location: "Global / Multi-Region" },
  { name: "Vercel", purpose: "Serverless edge network application hosting and CDN distribution", location: "Global Edge" },
  { name: "Discord", purpose: "Optional customer-configured webhook notifications (only data the Customer explicitly routes)", location: "United States / Global" },
];

const COOKIES = [
  { category: "Essential", purpose: "Authentication token validation, CSRF protection, and session state persistence", canDisable: "No — required for the Service to operate" },
  { category: "Analytics", purpose: "Aggregate anonymized visitor telemetry to understand marketing site usage", canDisable: "Yes — configurable via browser cookie preferences" },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#F0F0F0]/40 flex flex-col text-[#182012]">
      <header className="sticky top-0 z-50 w-full">
        <AnnouncementBar />
        <Navbar />
      </header>

      {/* Hero Header */}
      <section className="bg-white border-b border-[#E4E4E4] py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#687838] font-bold mb-3">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Legal</span>
            <span>/</span>
            <span>Privacy Policy</span>
          </div>

          <h1 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#182012] tracking-tight mb-3">
            Privacy Policy
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#5A644D]">
            <span><strong>Product:</strong> Mints ERP — a product of Mints Global</span>
            <span className="w-1 h-1 rounded-full bg-[#DBE4C7]" />
            <span><strong>Compliance:</strong> UAE PDPL, UK GDPR, EU GDPR, DPDP 2023</span>
            <span className="w-1 h-1 rounded-full bg-[#DBE4C7]" />
            <span className="px-2.5 py-0.5 rounded-full bg-[#EDF2E2] text-[#353E20] font-semibold border border-[#DBE4C7]">
              Effective September 2026
            </span>
          </div>
        </div>
      </section>

      {/* Content Body */}
      <section className="py-12 sm:py-16 grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-[#E4E4E4] shadow-sm space-y-8 text-sm sm:text-base leading-relaxed text-[#353E20]">
            
            {/* Section 1 */}
            <div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-3">
                1. Introduction
              </h2>
              <p className="mb-3">
                Mints Global (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) operates <strong>Mints ERP</strong>, a cloud-based enterprise resource planning platform. This Privacy Policy explains how we collect, use, store, and protect personal data in connection with the Service, and describes your rights regarding that data.
              </p>
              <p>
                We operate across the <strong>UAE, United Kingdom, India, and the European Union</strong>, and this Policy is written to address relevant obligations under the <strong>UAE Personal Data Protection Law (PDPL)</strong>, the <strong>UK GDPR</strong>, the <strong>EU General Data Protection Regulation (GDPR)</strong>, and <strong>India&apos;s Digital Personal Data Protection Act (DPDP Act) 2023</strong>, as applicable to you.
              </p>
            </div>

            <hr className="border-[#E4E4E4]" />

            {/* Section 2 */}
            <div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-3">
                2. Who This Policy Applies To
              </h2>
              <ul className="space-y-2 list-disc pl-5">
                <li><strong>Customers:</strong> Organizations that subscribe to Mints ERP and their authorized users (employees, managers, administrators).</li>
                <li><strong>End Users of Customer Data:</strong> Individuals whose data a Customer inputs into the Service (e.g., a Customer&apos;s employees via the HR Hub, or a Customer&apos;s clients via the External Client Portal). For this category, <strong>the Customer is generally the data controller and Mints Global acts as a data processor</strong> (see Section 8).</li>
                <li><strong>Visitors:</strong> Individuals visiting our marketing site (<code>erp.mintsglobal.ae</code>).</li>
              </ul>
            </div>

            <hr className="border-[#E4E4E4]" />

            {/* Section 3 */}
            <div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-3">
                3. Data We Collect
              </h2>
              <h3 className="font-bold text-base text-[#182012] mb-2">3.1 Account &amp; Usage Data</h3>
              <ul className="space-y-1.5 list-disc pl-5 mb-4">
                <li>Name, email address, role/department, and login credentials (or SSO identity via Google Workspace)</li>
                <li>Usage logs: pages visited within the Service, feature interactions, and session timestamps</li>
                <li>Device and browser information, IP address, and security telemetry</li>
              </ul>

              <h3 className="font-bold text-base text-[#182012] mb-2">3.2 Data You Input Into the Service (Customer Data)</h3>
              <p className="mb-2">As an enterprise ERP platform, the Service processes operational data your organization inputs, including:</p>
              <ul className="space-y-1.5 list-disc pl-5 mb-4">
                <li><strong>HR data:</strong> Employee records, department assignments, subroles, and org-chart hierarchy</li>
                <li><strong>Attendance data:</strong> Clock-in/out timestamps and, where enabled, geolocation telemetry for attendance verification</li>
                <li><strong>CRM data:</strong> Lead and client records, pipeline stages, and communications logged in-platform</li>
                <li><strong>Project &amp; timesheet data:</strong> Task assignments, hours logged, and Gantt milestone dependencies</li>
                <li><strong>Financial data:</strong> Invoices, tax items, and revenue records generated through the platform</li>
                <li><strong>Files:</strong> Documents uploaded to the Secure Company Cloud Vault</li>
                <li><strong>Chat data:</strong> Messages transmitted through Corporate Chat channels</li>
              </ul>

              <h3 className="font-bold text-base text-[#182012] mb-2">3.3 Cookies &amp; Similar Technologies</h3>
              <p>We use essential cookies for authentication and session state management, and optional marketing site cookies (see Section 10).</p>
            </div>

            <hr className="border-[#E4E4E4]" />

            {/* Section 4 */}
            <div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-3">
                4. How We Use Data
              </h2>
              <p className="mb-2">We use collected data to:</p>
              <ul className="space-y-1.5 list-disc pl-5 mb-4">
                <li>Provide, maintain, and secure the Service</li>
                <li>Authenticate users and enforce 5-tier role-based access control (RBAC)</li>
                <li>Generate platform features (attendance reporting, CRM pipelines, invoices, analytics dashboards)</li>
                <li>Send transactional notifications (leave approvals, workflow triggers, and optional Discord webhooks)</li>
                <li>Improve the Service and diagnose technical performance</li>
                <li>Comply with statutory obligations, including UAE FTA VAT invoicing, UK MTD, and Indian GST rules</li>
                <li>Communicate with you regarding your account, billing, and security alerts</li>
              </ul>
              <div className="p-4 rounded-2xl bg-[#EDF2E2]/60 border border-[#DBE4C7] text-xs sm:text-sm text-[#182012] font-semibold">
                We do not sell personal data to third parties.
              </div>
            </div>

            <hr className="border-[#E4E4E4]" />

            {/* Section 5 */}
            <div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-3">
                5. Legal Basis for Processing (GDPR / UK GDPR)
              </h2>
              <ul className="space-y-1.5 list-disc pl-5">
                <li><strong>Contract:</strong> Processing necessary to deliver the subscribed Service</li>
                <li><strong>Legitimate Interests:</strong> Securing the Service, preventing fraud, and optimizing features</li>
                <li><strong>Legal Obligation:</strong> Tax, statutory invoicing, and audit record-keeping compliance</li>
                <li><strong>Consent:</strong> Where explicitly given, e.g. for certain analytics cookies</li>
              </ul>
            </div>

            <hr className="border-[#E4E4E4]" />

            {/* Section 6 */}
            <div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-3">
                6. Where Data Is Stored &amp; International Transfers
              </h2>
              <p className="mb-3">
                Customer Data is stored using <strong>Google Cloud Firestore</strong> (Firebase), hosted on Google Cloud enterprise infrastructure, and deployed globally via <strong>Vercel</strong>.
              </p>
              <p>
                Where data is transferred internationally (e.g. between our UAE engineering hubs and EU/UK/India Customers), we rely on appropriate safeguards such as Standard Contractual Clauses (SCCs) and equivalent cross-border data transfer mechanisms recognized under GDPR, UK GDPR, and UAE PDPL.
              </p>
            </div>

            <hr className="border-[#E4E4E4]" />

            {/* Section 7 */}
            <div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-3">
                7. Data Sharing &amp; Subprocessors
              </h2>
              <p className="mb-4">We share data only as strictly necessary to operate the Service:</p>
              
              <div className="overflow-x-auto rounded-2xl border border-[#E4E4E4] mb-4">
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-[#F0F0F0] border-b border-[#E4E4E4]">
                      <th className="p-3 font-bold text-[#182012]">Subprocessor</th>
                      <th className="p-3 font-bold text-[#182012]">Purpose</th>
                      <th className="p-3 font-bold text-[#182012]">Data Location</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F0F0F0]">
                    {SUBPROCESSORS.map((s, i) => (
                      <tr key={i} className="hover:bg-[#F9FBF6] transition-colors">
                        <td className="p-3 font-bold text-[#182012]">{s.name}</td>
                        <td className="p-3 text-[#5A644D]">{s.purpose}</td>
                        <td className="p-3 text-[#5A644D]">{s.location}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-[#5A644D]">
                We do not share Customer Data with third parties for their own marketing. An updated subprocessor list is available on request at <strong>info@mintsglobal.ae</strong>.
              </p>
            </div>

            <hr className="border-[#E4E4E4]" />

            {/* Section 8 */}
            <div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-3">
                8. Controller vs. Processor Roles
              </h2>
              <p className="mb-3">
                For data your organization inputs about your own employees or clients (Section 3.2), <strong>your organization is the data controller</strong> and Mints Global acts as a <strong>data processor</strong>, processing that data solely on your instructions and as necessary to provide the Service. Where required, we enter into a Data Processing Agreement (DPA) with Customers upon request.
              </p>
              <p>
                For account and usage telemetry collected directly about you as a user of the Service (Section 3.1) and marketing-site visitor data, <strong>Mints Global acts as the data controller</strong>.
              </p>
            </div>

            <hr className="border-[#E4E4E4]" />

            {/* Section 9 */}
            <div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-3">
                9. Data Retention
              </h2>
              <ul className="space-y-1.5 list-disc pl-5">
                <li>Active account data is retained for as long as your subscription remains active.</li>
                <li>Upon termination, Customer Data is retained for <strong>30 days</strong> to facilitate complete export, after which it is permanently purged, except where longer retention is required for legal, tax, or statutory audit purposes (e.g., UAE VAT, UK MTD, or Indian GST records).</li>
                <li>Security audit logs are retained separately per our internal security guidelines to support incident investigations and regulatory compliance.</li>
              </ul>
            </div>

            <hr className="border-[#E4E4E4]" />

            {/* Section 10 */}
            <div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-3">
                10. Cookies &amp; Tracking
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-[#E4E4E4] mb-3">
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-[#F0F0F0] border-b border-[#E4E4E4]">
                      <th className="p-3 font-bold text-[#182012]">Category</th>
                      <th className="p-3 font-bold text-[#182012]">Purpose</th>
                      <th className="p-3 font-bold text-[#182012]">Configurable?</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F0F0F0]">
                    {COOKIES.map((c, i) => (
                      <tr key={i} className="hover:bg-[#F9FBF6] transition-colors">
                        <td className="p-3 font-bold text-[#182012]">{c.category}</td>
                        <td className="p-3 text-[#5A644D]">{c.purpose}</td>
                        <td className="p-3 text-[#5A644D]">{c.canDisable}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <hr className="border-[#E4E4E4]" />

            {/* Section 11 */}
            <div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-3">
                11. Your Data Protection Rights
              </h2>
              <p className="mb-2">Depending on your jurisdiction, you may have statutory rights to:</p>
              <ul className="space-y-1.5 list-disc pl-5 mb-4">
                <li><strong>Access:</strong> Request copies of the personal data we hold about you</li>
                <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                <li><strong>Erasure:</strong> Request deletion (&ldquo;right to be forgotten&rdquo;), subject to statutory tax retention rules</li>
                <li><strong>Portability:</strong> Request machine-readable export of your data</li>
                <li><strong>Restriction/Objection:</strong> Restrict or object to certain forms of data processing</li>
                <li><strong>Consent Withdrawal:</strong> Withdraw previously granted consent at any time</li>
              </ul>
              <p className="text-xs text-[#5A644D]">
                These rights apply under <strong>UK/EU GDPR</strong>, <strong>India&apos;s DPDP Act</strong>, and the <strong>UAE PDPL</strong>. To exercise these rights, contact <strong>info@mintsglobal.ae</strong>.
              </p>
            </div>

            <hr className="border-[#E4E4E4]" />

            {/* Section 12 */}
            <div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-3">
                12. Data Security
              </h2>
              <p>
                We maintain enterprise security safeguards aligned with our <strong>ISO 27001-aligned information security management system</strong>, including document-level Firestore security rules, AES-256 encryption at rest, TLS 1.3 encryption in transit, administrative audit logging, and automated vulnerability management.
              </p>
            </div>

            <hr className="border-[#E4E4E4]" />

            {/* Section 13 */}
            <div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-3">
                13. Children&apos;s Privacy
              </h2>
              <p>
                The Service is intended strictly for business use by authorized adult personnel acting on behalf of an enterprise organization. We do not knowingly collect personal data from individuals under 16 years of age.
              </p>
            </div>

            <hr className="border-[#E4E4E4]" />

            {/* Section 14 */}
            <div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-3">
                14. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Material modifications will be communicated via in-app notification or email at least 15 days before taking effect.
              </p>
            </div>

            <hr className="border-[#E4E4E4]" />

            {/* Section 15 */}
            <div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-3">
                15. Contact
              </h2>
              <p className="mb-2">Privacy inquiries and Data Protection Officer requests can be sent to:</p>
              <div className="p-4 rounded-2xl bg-[#F0F0F0] border border-[#E4E4E4] text-xs sm:text-sm">
                <p className="font-bold text-[#182012]">Mints Global — Data Protection</p>
                <p>Office #315, 3rd Floor, Bank Street Building</p>
                <p>Bur Dubai, Dubai, UAE</p>
                <p className="text-[#687838] font-semibold mt-1">info@mintsglobal.ae</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
