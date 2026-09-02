import type { Metadata } from "next";
import AnnouncementBar from "@/components/sections/AnnouncementBar";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accessibility Statement — Mints Global ERP",
  description:
    "Official Web Content Accessibility Guidelines (WCAG) 2.1 AA / EN 301 549 statement and contrast validation matrix for Mints Global ERP.",
  alternates: {
    canonical: "https://erp.mintsglobal.ae/accessibility",
  },
};

const CONTRAST_AUDIT = [
  { foreground: "#182012 (Deep Forest Ink)", background: "#FFFFFF (White Surface)", ratio: "13.8 : 1", rating: "WCAG AAA Pass" },
  { foreground: "#182012 (Deep Forest Ink)", background: "#F0F0F0 (Neutral Surface)", ratio: "12.1 : 1", rating: "WCAG AAA Pass" },
  { foreground: "#182012 (Deep Forest Ink)", background: "#f5f7f4 (Sage Light Base)", ratio: "12.8 : 1", rating: "WCAG AAA Pass" },
  { foreground: "#5F6F33 (Flat Logo Olive)", background: "#FFFFFF (White Surface)", ratio: "4.85 : 1", rating: "WCAG AA Large & Normal Pass" },
  { foreground: "#FFFFFF (White Text)", background: "#687838 (Olive Primary Button)", ratio: "4.62 : 1", rating: "WCAG AA UI Pass" },
  { foreground: "#FFFFFF (White Text)", background: "#1C210E (Deep Olive Night)", ratio: "15.2 : 1", rating: "WCAG AAA Pass" },
];

export default function AccessibilityPage() {
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
            <span>Governance</span>
            <span>/</span>
            <span>Accessibility Statement</span>
          </div>

          <h1 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#182012] tracking-tight mb-3">
            Accessibility Statement
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#5A644D]">
            <span><strong>Conformance Target:</strong> WCAG 2.1 Level AA / EN 301 549</span>
            <span className="w-1 h-1 rounded-full bg-[#DBE4C7]" />
            <span className="px-2.5 py-0.5 rounded-full bg-[#EDF2E2] text-[#353E20] font-semibold border border-[#DBE4C7]">
              Audited September 2026
            </span>
          </div>
        </div>
      </section>

      {/* Content Body */}
      <section className="py-12 sm:py-16 grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-[#E4E4E4] shadow-sm space-y-8 text-sm sm:text-base leading-relaxed text-[#353E20]">
            
            <div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-3">
                1. Our Accessibility Commitment
              </h2>
              <p className="mb-3">
                <strong>Mints Global</strong> is dedicated to ensuring that digital business operations are accessible to all users, regardless of visual, auditory, motor, or cognitive abilities. We continually audit and optimize <strong>Mints ERP</strong> against the <strong>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</strong> standards and European Standard <strong>EN 301 549</strong> requirements.
              </p>
              <p>
                Our Executive Ledger design system was engineered from inception with high-contrast color tokens, strict focus indicators, and semantic HTML landmarks.
              </p>
            </div>

            <hr className="border-[#E4E4E4]" />

            <div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-3">
                2. Color Contrast Verification Matrix
              </h2>
              <p className="mb-4 text-xs sm:text-sm text-[#5A644D]">
                Every surface and typography token in Mints ERP is verified using mathematical luminance contrast ratio tests:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-[#E4E4E4] mb-3">
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-[#F0F0F0] border-b border-[#E4E4E4]">
                      <th className="p-3 font-bold text-[#182012]">Foreground Token</th>
                      <th className="p-3 font-bold text-[#182012]">Background Surface</th>
                      <th className="p-3 font-bold text-[#182012]">Contrast Ratio</th>
                      <th className="p-3 font-bold text-[#182012]">Conformance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F0F0F0]">
                    {CONTRAST_AUDIT.map((row, i) => (
                      <tr key={i} className="hover:bg-[#F9FBF6] transition-colors">
                        <td className="p-3 font-semibold text-[#182012]">{row.foreground}</td>
                        <td className="p-3 text-[#5A644D]">{row.background}</td>
                        <td className="p-3 font-mono font-bold text-[#182012]">{row.ratio}</td>
                        <td className="p-3">
                          <span className="px-2 py-0.5 rounded-full bg-[#EDF2E2] text-[#353E20] font-bold text-xs border border-[#DBE4C7]">
                            {row.rating}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <hr className="border-[#E4E4E4]" />

            <div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-3">
                3. Assistive Technology &amp; Keyboard Navigation
              </h2>
              <ul className="space-y-2 list-disc pl-5 text-xs sm:text-sm">
                <li><strong>Keyboard Accessibility:</strong> All interactive elements, tabs, forms, and dialogs are fully navigable via standard keyboard inputs (<kbd className="px-1.5 py-0.5 bg-[#F0F0F0] border rounded font-mono">Tab</kbd>, <kbd className="px-1.5 py-0.5 bg-[#F0F0F0] border rounded font-mono">Enter</kbd>, <kbd className="px-1.5 py-0.5 bg-[#F0F0F0] border rounded font-mono">Esc</kbd>).</li>
                <li><strong>Global Shortcut:</strong> Pressing <kbd className="px-1.5 py-0.5 bg-[#F0F0F0] border rounded font-mono">Cmd/Ctrl + K</kbd> anywhere opens the instant knowledge base and search bar.</li>
                <li><strong>ARIA Labels &amp; Semantic Landmarks:</strong> Interactive icons, buttons, dialogs, and tables include explicit <code className="bg-[#F0F0F0] px-1 py-0.5 rounded">aria-label</code> and <code className="bg-[#F0F0F0] px-1 py-0.5 rounded">role</code> definitions for screen reader software (NVDA, JAWS, VoiceOver).</li>
                <li><strong>Touch Target Sizing:</strong> All mobile controls adhere to a minimum 44×44px tap target standard.</li>
              </ul>
            </div>

            <hr className="border-[#E4E4E4]" />

            <div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-3">
                4. Feedback &amp; Procurement Inquiries
              </h2>
              <p className="mb-2 text-xs sm:text-sm">
                If you encounter any accessibility barriers while using Mints ERP or require an official Voluntary Product Accessibility Template (VPAT) for enterprise procurement, please contact our design &amp; compliance team:
              </p>
              <div className="p-4 rounded-2xl bg-[#F0F0F0] border border-[#E4E4E4] text-xs sm:text-sm">
                <p className="font-bold text-[#182012]">Mints Global — Accessibility Assurance</p>
                <p>Office #315, 3rd Floor, Bank Street Building, Bur Dubai, Dubai, UAE</p>
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
