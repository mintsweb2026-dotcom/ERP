import type { Metadata } from "next";
import AnnouncementBar from "@/components/sections/AnnouncementBar";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Mints Global ERP",
  description:
    "Official Terms of Service governing access to and use of Mints Global ERP across UAE, UK, India, and the European Union.",
  alternates: {
    canonical: "https://erp.mintsglobal.ae/terms",
  },
};

export default function TermsPage() {
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
            <span>Terms of Service</span>
          </div>

          <h1 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#182012] tracking-tight mb-3">
            Terms of Service
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#5A644D]">
            <span><strong>Product:</strong> Mints ERP — a product of Mints Global</span>
            <span className="w-1 h-1 rounded-full bg-[#DBE4C7]" />
            <span><strong>Headquarters:</strong> Dubai, UAE</span>
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
                1. Acceptance of Terms
              </h2>
              <p className="mb-3">
                These Terms of Service (&ldquo;Terms&rdquo;) govern access to and use of <strong>Mints ERP</strong> (the &ldquo;Service&rdquo;), operated by <strong>Mints Global</strong>, headquartered at Office #315, 3rd Floor, Bank Street Building, Bur Dubai, Dubai, UAE (&ldquo;Mints Global,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
              </p>
              <p className="mb-3">
                By creating an account, subscribing to a paid plan, or otherwise accessing the Service, you (&ldquo;Customer,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;) agree to be bound by these Terms. If you are entering into these Terms on behalf of an organization, you represent that you have authority to bind that organization, and &ldquo;you&rdquo; refers to that organization.
              </p>
              <div className="p-4 rounded-2xl bg-[#EDF2E2]/60 border border-[#DBE4C7] text-xs sm:text-sm text-[#182012] font-semibold">
                If you do not agree to these Terms, do not access or use the Service.
              </div>
            </div>

            <hr className="border-[#E4E4E4]" />

            {/* Section 2 */}
            <div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-3">
                2. Description of Service
              </h2>
              <p className="mb-3">
                Mints ERP is a cloud-based enterprise resource planning platform providing modules for Human Resources, Customer Relationship Management (CRM), Project Management, Finance &amp; Invoicing, Automated Workflows, and related business operations tools, accessible via web browser.
              </p>
              <p>
                We reserve the right to modify, add, or discontinue features of the Service at our discretion, provided that we will make reasonable efforts to notify Customers of material changes that reduce core functionality on a paid plan.
              </p>
            </div>

            <hr className="border-[#E4E4E4]" />

            {/* Section 3 */}
            <div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-3">
                3. Accounts &amp; Eligibility
              </h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>You must provide accurate, current information when creating an account.</li>
                <li>You are responsible for maintaining the confidentiality of your login credentials and for all activity occurring under your account.</li>
                <li>Accounts are provisioned to individuals by your organization&apos;s designated administrators (Founders/C-Suite/Admin roles within the Service). Mints Global is not responsible for internal account-provisioning decisions made by your organization&apos;s administrators.</li>
                <li>You must notify us promptly at <a href="mailto:info@mintsglobal.ae" className="text-[#687838] underline font-semibold">info@mintsglobal.ae</a> of any unauthorized use of your account.</li>
              </ul>
            </div>

            <hr className="border-[#E4E4E4]" />

            {/* Section 4 */}
            <div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-3">
                4. Subscription Plans &amp; Payment
              </h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>The Service is offered under multiple subscription tiers (including a Free tier and paid Starter, Growth, Business, and Enterprise tiers), as described on our pricing page, billed in your selected currency (USD, AED, GBP, INR, or EUR).</li>
                <li>Paid subscriptions are billed in advance on a monthly or annual basis, as selected at checkout.</li>
                <li><strong>Annual plans</strong> are billed upfront for the full term; <strong>monthly plans</strong> renew automatically each billing cycle unless cancelled.</li>
                <li>Fees are exclusive of applicable taxes (including UAE VAT, UK VAT, Indian GST, or EU VAT as applicable to your billing location), which will be added to your invoice where required by law.</li>
                <li>We reserve the right to change subscription pricing with at least 30 days&apos; notice before your next renewal.</li>
                <li>Failure to pay outstanding fees may result in suspension or termination of access to paid features, with data handled per our data retention practices described in the Privacy Policy.</li>
              </ul>
            </div>

            <hr className="border-[#E4E4E4]" />

            {/* Section 5 */}
            <div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-3">
                5. Acceptable Use
              </h2>
              <p className="mb-3">You agree not to:</p>
              <ul className="space-y-2 list-disc pl-5">
                <li>Use the Service to store or transmit unlawful, infringing, defamatory, or malicious content;</li>
                <li>Attempt to gain unauthorized access to the Service, other Customer accounts, or underlying infrastructure;</li>
                <li>Reverse engineer, decompile, or attempt to extract the source code of the Service, except where such restriction is prohibited by applicable law;</li>
                <li>Use the Service to build a competing product;</li>
                <li>Interfere with or disrupt the integrity or performance of the Service, including through automated scraping, load testing without authorization, or circumventing rate limits;</li>
                <li>Resell, sublicense, or provide access to the Service to any third party outside your organization without our prior written consent, except as expressly permitted via the External Client Portal feature for your own clients.</li>
              </ul>
            </div>

            <hr className="border-[#E4E4E4]" />

            {/* Section 6 */}
            <div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-3">
                6. Customer Data &amp; Ownership
              </h2>
              <ul className="space-y-2 list-disc pl-5">
                <li><strong>You retain all rights to the data you input into the Service</strong> (&ldquo;Customer Data&rdquo;), including HR records, CRM data, project data, financial records, and files uploaded to the Secure Drive.</li>
                <li>You grant Mints Global a limited license to host, process, and transmit Customer Data solely as necessary to provide the Service.</li>
                <li>You are responsible for ensuring you have the necessary rights and legal basis to input any personal data of your employees, clients, or other individuals into the Service, and for complying with applicable data protection law (see our Privacy Policy).</li>
                <li>Upon termination of your subscription, you may export your Customer Data for a defined period (see Section 9), after which it will be deleted per our data retention schedule.</li>
              </ul>
            </div>

            <hr className="border-[#E4E4E4]" />

            {/* Section 7 */}
            <div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-3">
                7. Intellectual Property
              </h2>
              <p>
                The Service, including its software, design, branding (&ldquo;Mints ERP,&rdquo; the Mints ERP logo, and the &ldquo;SMARTER OPERATIONS. TOGETHER.&rdquo; tagline), and underlying source code, is the exclusive property of Mints Global and is protected by applicable intellectual property laws. Except for the limited right to access and use the Service as described in these Terms and our <strong>Proprietary License</strong>, no rights are granted to you in the Service&apos;s underlying software or intellectual property.
              </p>
            </div>

            <hr className="border-[#E4E4E4]" />

            {/* Section 8 */}
            <div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-3">
                8. Service Availability
              </h2>
              <p>
                We aim to maintain high availability of the Service but do not guarantee uninterrupted access. Scheduled maintenance will be communicated in advance where reasonably possible. Enterprise-tier Customers with a negotiated Service Level Agreement (SLA) are governed by the terms of that separate SLA where it conflicts with this section.
              </p>
            </div>

            <hr className="border-[#E4E4E4]" />

            {/* Section 9 */}
            <div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-3">
                9. Termination
              </h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>You may cancel your subscription at any time through account settings or by contacting <strong>info@mintsglobal.ae</strong>; cancellation takes effect at the end of the current billing period.</li>
                <li>We may suspend or terminate your access for material breach of these Terms, non-payment, or where required by law, with notice where reasonably practicable.</li>
                <li>Upon termination, you will have <strong>30 days</strong> to export your Customer Data before it is permanently deleted from our systems, except where longer retention is required by law or our Backup &amp; Recovery policy.</li>
              </ul>
            </div>

            <hr className="border-[#E4E4E4]" />

            {/* Section 10 */}
            <div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-3">
                10. Disclaimers &amp; Limitation of Liability
              </h2>
              <p className="mb-3">
                The Service is provided &ldquo;as is&rdquo; and &ldquo;as available.&rdquo; To the maximum extent permitted by applicable law, Mints Global disclaims all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
              <p className="mb-3">
                To the maximum extent permitted by law, Mints Global&apos;s aggregate liability arising from or related to these Terms or the Service shall not exceed the fees paid by you in the twelve (12) months preceding the claim. Mints Global shall not be liable for indirect, incidental, special, consequential, or punitive damages.
              </p>
              <p>Nothing in these Terms limits liability that cannot be limited under applicable law.</p>
            </div>

            <hr className="border-[#E4E4E4]" />

            {/* Section 11 */}
            <div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-3">
                11. Indemnification
              </h2>
              <p>
                You agree to indemnify and hold harmless Mints Global from claims arising from your breach of these Terms, your misuse of the Service, or Customer Data you upload that infringes third-party rights or violates applicable law.
              </p>
            </div>

            <hr className="border-[#E4E4E4]" />

            {/* Section 12 */}
            <div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-3">
                12. Governing Law &amp; Dispute Resolution
              </h2>
              <p>
                These Terms are governed by the laws of the <strong>United Arab Emirates</strong>, without regard to conflict-of-law principles, and subject to the exclusive jurisdiction of the competent courts of Dubai, UAE, except where mandatory local consumer-protection or data-protection law in your jurisdiction (e.g., UK, EU member states, India) requires otherwise for matters specific to that law.
              </p>
            </div>

            <hr className="border-[#E4E4E4]" />

            {/* Section 13 */}
            <div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-3">
                13. Changes to These Terms
              </h2>
              <p>
                We may update these Terms from time to time. Material changes will be communicated via the Service or email at least 15 days before taking effect. Continued use of the Service after changes take effect constitutes acceptance.
              </p>
            </div>

            <hr className="border-[#E4E4E4]" />

            {/* Section 14 */}
            <div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-3">
                14. Contact
              </h2>
              <p className="mb-2">Questions about these Terms can be directed to:</p>
              <div className="p-4 rounded-2xl bg-[#F0F0F0] border border-[#E4E4E4] text-xs sm:text-sm">
                <p className="font-bold text-[#182012]">Mints Global</p>
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
