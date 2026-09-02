import type { Metadata } from "next";
import AnnouncementBar from "@/components/sections/AnnouncementBar";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Proprietary License — Mints Global ERP",
  description:
    "Official Proprietary Software License governing Mints Global ERP. Proprietary enterprise software terms.",
  alternates: {
    canonical: "https://erp.mintsglobal.ae/license",
  },
};

export default function LicensePage() {
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
            <span>Proprietary License</span>
          </div>

          <h1 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#182012] tracking-tight mb-3">
            Proprietary Software License
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#5A644D]">
            <span><strong>Product:</strong> Mints ERP — a product of Mints Global</span>
            <span className="w-1 h-1 rounded-full bg-[#DBE4C7]" />
            <span><strong>Status:</strong> Proprietary Enterprise Software</span>
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
                1. Ownership &amp; Proprietary Status
              </h2>
              <p className="mb-3">
                <strong>Mints ERP</strong>, including its software, source code, user interface designs, documentation, branding (including the &ldquo;Mints ERP&rdquo; name, logo, and the &ldquo;SMARTER OPERATIONS. TOGETHER.&rdquo; tagline), and all associated intellectual property, is the exclusive and proprietary property of <strong>Mints Global</strong>, headquartered at Office #315, 3rd Floor, Bank Street Building, Bur Dubai, Dubai, UAE.
              </p>
              <div className="p-4 rounded-2xl bg-[#EDF2E2]/60 border border-[#DBE4C7] text-xs sm:text-sm text-[#182012] font-bold">
                Mints ERP is proprietary software. It is not open source, and no rights are granted under any open-source license.
              </div>
            </div>

            <hr className="border-[#E4E4E4]" />

            {/* Section 2 */}
            <div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-3">
                2. Limited License Grant to Subscribers
              </h2>
              <p className="mb-3">
                Subject to your compliance with our Terms of Service and payment of applicable subscription fees, Mints Global grants you a limited, non-exclusive, non-transferable, revocable license to <strong>access and use</strong> the Service for your organization&apos;s internal business operations, strictly for the duration of your active subscription.
              </p>
              <p className="mb-2 font-semibold text-[#182012]">This license does NOT grant you any right to:</p>
              <ul className="space-y-1.5 list-disc pl-5">
                <li>Access, copy, modify, or create derivative works of the underlying source code;</li>
                <li>Reverse engineer, decompile, or disassemble the Service, except to the extent such restriction is expressly prohibited by applicable law;</li>
                <li>Sublicense, resell, rent, lease, or otherwise transfer access to the Service to any party outside your organization, except as expressly enabled through the External Client Portal feature for your own clients&apos; scoped access;</li>
                <li>Use Mints Global&apos;s trademarks, logos, or branding without prior written consent;</li>
                <li>Remove, obscure, or alter any proprietary notices or digital watermarks contained in the Service.</li>
              </ul>
            </div>

            <hr className="border-[#E4E4E4]" />

            {/* Section 3 */}
            <div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-3">
                3. No Ownership Transfer
              </h2>
              <p>
                Nothing in these terms transfers ownership of the Service, its source code, or any underlying intellectual property to you or your organization. <strong>Customer Data</strong> you input into the Service remains your property (see our Privacy Policy and Terms of Service) — this License governs only the software platform itself, not the business data you store within it.
              </p>
            </div>

            <hr className="border-[#E4E4E4]" />

            {/* Section 4 */}
            <div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-3">
                4. Confidentiality
              </h2>
              <p>
                The architecture, source code, non-public technical documentation, and internal operational materials related to Mints ERP are confidential trade secrets of Mints Global. Any access to such materials granted to contractors, partners, or technical teams is governed by separate confidentiality and non-disclosure agreements, and does not extend any rights under this License to end Customers.
              </p>
            </div>

            <hr className="border-[#E4E4E4]" />

            {/* Section 5 */}
            <div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-3">
                5. Feedback
              </h2>
              <p>
                If you provide suggestions, feature requests, or feedback regarding the Service, you grant Mints Global a perpetual, irrevocable, royalty-free license to use that feedback to improve the Service, without obligation or compensation to you.
              </p>
            </div>

            <hr className="border-[#E4E4E4]" />

            {/* Section 6 */}
            <div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-3">
                6. Term &amp; Termination
              </h2>
              <p className="mb-2">This License is effective for as long as you maintain an active subscription to the Service. It terminates automatically upon:</p>
              <ul className="space-y-1.5 list-disc pl-5 mb-3">
                <li>Cancellation or non-renewal of your subscription;</li>
                <li>Termination of your account for breach of the Terms of Service;</li>
                <li>Termination by either party in accordance with the Terms of Service.</li>
              </ul>
              <p>Upon termination, all rights granted under this License immediately cease, and you must discontinue all use of the Service.</p>
            </div>

            <hr className="border-[#E4E4E4]" />

            {/* Section 7 */}
            <div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-3">
                7. No Warranty
              </h2>
              <p>
                The Service and all associated software are licensed &ldquo;as is,&rdquo; without warranty of any kind, express or implied, to the maximum extent permitted by applicable law. See the Terms of Service for full disclaimers and limitations of liability.
              </p>
            </div>

            <hr className="border-[#E4E4E4]" />

            {/* Section 8 */}
            <div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-3">
                8. Unauthorized Use
              </h2>
              <p>
                Unauthorized copying, distribution, reverse engineering, or use of Mints ERP&apos;s proprietary software outside the scope of this License is strictly prohibited and may result in immediate termination of access and legal action to the fullest extent permitted under applicable law, including the laws of the United Arab Emirates and other jurisdictions in which Mints Global operates.
              </p>
            </div>

            <hr className="border-[#E4E4E4]" />

            {/* Section 9 */}
            <div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-3">
                9. Licensing Inquiries
              </h2>
              <p className="mb-2">For enterprise licensing agreements, private deployment inquiries, or to report suspected unauthorized use, contact:</p>
              <div className="p-4 rounded-2xl bg-[#F0F0F0] border border-[#E4E4E4] text-xs sm:text-sm">
                <p className="font-bold text-[#182012]">Mints Global — Legal &amp; Licensing</p>
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
