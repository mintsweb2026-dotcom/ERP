"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const DEPARTMENTS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M5 21C5 17 8 14 12 14C16 14 19 17 19 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    label: "People & HR",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3L3 8L12 13L21 8L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M3 12L12 17L21 12" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M3 16L12 21L21 16" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
    label: "Sales CRM",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    label: "Projects & Tasks",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Finance & Invoices",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 20H15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 16V20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    label: "IT & Ticketing",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 18L3 6C3 4.89543 3.89543 4 5 4L19 4C20.1046 4 21 4.89543 21 6V16C21 17.1046 20.1046 18 19 18H7L3 22V18Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="9" cy="11" r="1" fill="currentColor" />
        <circle cx="12" cy="11" r="1" fill="currentColor" />
        <circle cx="15" cy="11" r="1" fill="currentColor" />
      </svg>
    ),
    label: "Corporate Chat",
  },
];

export default function DepartmentStrip() {
  return (
    <section className="py-8 sm:py-10 bg-[#F0F0F0] border-y border-[#E4E4E4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-8 md:gap-12">
            {DEPARTMENTS.map((dept) => (
              <div
                key={dept.label}
                className="flex items-center gap-2.5 text-[#5A644D] hover:text-[#687838] transition-colors group cursor-default min-h-[44px] px-2 py-1 rounded-xl"
              >
                <div className="w-9 h-9 rounded-xl bg-white border border-[#E4E4E4] shadow-2xs flex items-center justify-center group-hover:border-[#687838] group-hover:bg-[#EDF2E2]/60 transition-all shrink-0">
                  <div className="text-[#5A644D] group-hover:text-[#687838] transition-colors">
                    {dept.icon}
                  </div>
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#182012] group-hover:text-[#687838] transition-colors">
                  {dept.label}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
