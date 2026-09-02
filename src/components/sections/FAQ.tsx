"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const FAQ_ITEMS = [
  {
    question: "How does the Dual-Theme System work?",
    answer:
      "Mints Global ERP v1.5 features an adaptive dual-theme architecture: Signature Olive Forest Dark (#0a0e0b base) and High-Contrast Sage Cream Light (#f5f7f4 base). Both palettes strictly conform to WCAG 2.1 AA accessibility contrast guidelines, ensuring optimal readability in low-light environments and bright office daylight. Theme preferences persist across sessions.",
  },
  {
    question: "How is my company data secured across departments and roles?",
    answer:
      "Access is governed by a strict 5-Tier Role-Based Access Control (RBAC) hierarchy: Founders → C-Suite → Department Managers → Team Members → External Clients. Server-side API endpoints cryptographically validate incoming bearer tokens using the Firebase Admin SDK v14, while an immutable Admin Audit Trail records user actions, IP addresses, timestamps, and permission changes.",
  },
  {
    question: "How does real-time attendance tracking prevent clock drift?",
    answer:
      "The attendance engine operates as a serverless state machine enforcing valid shift lifecycles (clock-in ➔ break-start ➔ break-end ➔ clock-out). To protect against minor clock drift between a user's machine and Google Cloud servers, all elapsed delta calculations use non-negative mathematical clamping, completely eliminating negative timer anomalies.",
  },
  {
    question: "How does the External Client Portal protect internal communications?",
    answer:
      "External clients authenticate into an isolated portal restricted strictly to their assigned project milestones, deliverables in the Handover Vault, and invoices. Internal team chat channels, employee timesheets, departmental files, and audit trails remain completely inaccessible to client credentials.",
  },
  {
    question: "Can I connect Mints ERP to Discord and external webhooks?",
    answer:
      "Yes. Mints ERP features native Discord Webhook configurations for real-time notifications on deal wins, shift clock-ins, leave applications, and urgent IT tickets. The Automated Visual Workflow Builder allows operators to define custom conditional rules (e.g. expenses > $500 ➔ route to Founder) that trigger webhooks and multi-stage approvals automatically.",
  },
  {
    question: "What technology stack powers Mints ERP?",
    answer:
      "Mints ERP is engineered on Next.js 16 (App Router with Turbopack) and React 19 in TypeScript. The backend utilizes Google Cloud Firestore for sub-250ms distributed real-time listeners and Firebase Authentication guarded by Firebase Admin SDK v14. The UI leverages Tailwind CSS v4 and Framer Motion for high-performance micro-interactions.",
  },
  {
    question: "How does seat-based pricing and multi-currency billing work?",
    answer:
      "Billing is calculated per active user with native support for both USD and AED currencies (pegged at 1 USD = 3.67 AED). Admins can provision or offboard team seats anytime with automatic proration. Annual subscriptions receive an instant 20% discount, and our Free Forever tier supports up to 5 users indefinitely.",
  },
  {
    question: "What documentation and enterprise guides are included?",
    answer:
      "The platform includes comprehensive enterprise guides: Product Architecture Documentation (technical specs & security matrix), Step-by-Step User Manual for all 18 modules, Company Handbook & Policies, Implementation Scorecard, and full Developer Setup guides.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white border border-[#E4E4E4] rounded-2xl p-5 mb-3.5 shadow-2xs hover:border-[#687838] transition-all">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left group cursor-pointer min-h-[44px] py-1"
        aria-expanded={open}
      >
        <span className="font-sans font-bold text-base text-[#182012] group-hover:text-[#687838] transition-colors pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-8 h-8 rounded-lg bg-[#F0F0F0] group-hover:bg-[#EDF2E2] text-[#5A644D] group-hover:text-[#687838] flex items-center justify-center shrink-0 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 2V12M2 7H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-xs sm:text-sm text-[#5A644D] leading-relaxed pt-3 border-t border-[#F0F0F0] mt-3">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#F0F0F0]/60" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-xs tracking-widest uppercase text-[#687838] font-bold mb-3 block">
              Frequently Asked Questions
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-[#182012] mb-3 sm:mb-4 tracking-tight">
              Everything you need to know.
            </h2>
            <p className="text-[#5A644D] text-sm md:text-base">
              Got more questions? Reach out directly to our Dubai HQ engineering advisory team.
            </p>
          </div>
        </ScrollReveal>

        <div>
          {FAQ_ITEMS.map((item) => (
            <FAQItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
