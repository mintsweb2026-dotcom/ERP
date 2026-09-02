"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import SpotlightCard from "@/components/ui/SpotlightCard";

interface PricingTier {
  name: string;
  priceUSD: number;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

const TIERS: PricingTier[] = [
  {
    name: "Free Forever",
    priceUSD: 0,
    period: "forever",
    description: "For small teams and emerging studios getting organized",
    features: [
      "Up to 5 active users",
      "HR employee directory",
      "Basic Kanban pipeline",
      "Clock-In/Clock-Out attendance",
      "Community support",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Growth",
    priceUSD: 29,
    period: "/user/mo",
    description: "For scaling agencies needing full operations visibility",
    features: [
      "Up to 25 active users",
      "Interactive Org Chart & Subroles",
      "Gantt timelines & capacity matrix",
      "jsPDF invoice generation",
      "Discord webhook alerts",
      "Standard email SLA",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Business",
    priceUSD: 79,
    period: "/user/mo",
    description: "For modern organizations running on automated workflows",
    features: [
      "Unlimited users & departments",
      "Visual Workflow Automation Builder",
      "Live Presence Telemetry Map",
      "External Client Portal & Drive",
      "Immutable Admin Audit Trail",
      "Priority 24/7 support SLA",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    priceUSD: 149,
    period: "/user/mo",
    description: "For regulated corporations requiring dedicated tenancy",
    features: [
      "Everything in Business",
      "Google Workspace SSO integration",
      "Custom 5-Tier RBAC Policies",
      "Dedicated account engineer",
      "On-premises or private Firebase setup",
      "UAE VAT compliance advisory",
    ],
    cta: "Contact Enterprise Sales",
    highlighted: false,
  },
];

const COMPARISON_CATEGORIES = [
  {
    category: "HR & Organization",
    features: [
      { name: "Employee directory", free: true, growth: true, business: true, enterprise: true },
      { name: "Interactive Org Chart", free: false, growth: true, business: true, enterprise: true },
      { name: "Subrole Badges & Clearance", free: false, growth: true, business: true, enterprise: true },
      { name: "Attendance & Clock-In/Out", free: true, growth: true, business: true, enterprise: true },
    ],
  },
  {
    category: "Pipelines & Projects",
    features: [
      { name: "Kanban deal pipeline", free: true, growth: true, business: true, enterprise: true },
      { name: "1-Click Client Conversion", free: false, growth: true, business: true, enterprise: true },
      { name: "7-Day Gantt Timelines", free: false, growth: true, business: true, enterprise: true },
      { name: "Weekly Timesheet Matrix", free: false, growth: true, business: true, enterprise: true },
    ],
  },
  {
    category: "Automations & Operations",
    features: [
      { name: "Visual Workflow Builder", free: false, growth: false, business: true, enterprise: true },
      { name: "Real-time Live Presence Map", free: false, growth: false, business: true, enterprise: true },
      { name: "External Client Portal", free: false, growth: false, business: true, enterprise: true },
      { name: "Discord Webhooks", free: false, growth: true, business: true, enterprise: true },
    ],
  },
  {
    category: "Security & Governance",
    features: [
      { name: "Firestore Security Rules", free: true, growth: true, business: true, enterprise: true },
      { name: "Admin Audit Trail", free: false, growth: false, business: true, enterprise: true },
      { name: "Google Workspace SSO", free: false, growth: false, business: false, enterprise: true },
      { name: "Private DB Tenancy", free: false, growth: false, business: false, enterprise: true },
    ],
  },
];

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#687838] mx-auto">
      <path d="M4 8L7 11L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-slate-300 mx-auto">
      <path d="M5 5L11 11M11 5L5 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export type CurrencyCode = "USD" | "AED" | "GBP" | "INR" | "EUR";

export const CURRENCIES: Record<
  CurrencyCode,
  { label: string; symbol: string; rate: number; flag: string }
> = {
  USD: { label: "USD ($)", symbol: "$", rate: 1, flag: "🇺🇸" },
  AED: { label: "AED (د.إ)", symbol: "AED ", rate: 3.67, flag: "🇦🇪" },
  GBP: { label: "GBP (£)", symbol: "£", rate: 0.79, flag: "🇬🇧" },
  INR: { label: "INR (₹)", symbol: "₹", rate: 83.2, flag: "🇮🇳" },
  EUR: { label: "EUR (€)", symbol: "€", rate: 0.92, flag: "🇪🇺" },
};

interface PricingProps {
  initialCurrency?: CurrencyCode;
}

export default function Pricing({ initialCurrency = "USD" }: PricingProps) {
  const [currency, setCurrency] = useState<CurrencyCode>(initialCurrency);
  const [annual, setAnnual] = useState(false);

  const activeCurrencyConfig = CURRENCIES[currency];

  const getPriceDisplay = (priceUSD: number) => {
    if (priceUSD === 0) return `${activeCurrencyConfig.symbol}0`;
    let price = priceUSD * activeCurrencyConfig.rate;
    if (annual) price = price * 0.8;

    // Clean rounding for INR (e.g. ₹2,400) vs USD/GBP/EUR
    if (currency === "INR") {
      const roundedINR = Math.round(price / 50) * 50;
      return `${activeCurrencyConfig.symbol}${roundedINR.toLocaleString("en-IN")}`;
    }

    return `${activeCurrencyConfig.symbol}${Math.round(price)}`;
  };

  return (
    <section className="py-16 sm:py-20 lg:py-28 relative bg-[#F0F0F0]/60 border-t border-[#E4E4E4]" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-12">
            <span className="text-xs tracking-widest uppercase text-[#687838] font-bold mb-3 block">
              Transparent Investment
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#182012] mb-3 sm:mb-4 tracking-tight">
              Predictable pricing for ambitious teams.
            </h2>
            <p className="text-[#5A644D] max-w-lg mx-auto text-sm sm:text-base mb-6 sm:mb-8">
              Every plan includes real-time Firestore sync, 5-tier RBAC security, and responsive access.
            </p>

            {/* Multi-Currency & Annual Billing Controls (stacked on mobile, inline from sm:) */}
            <div className="flex flex-col items-center justify-center gap-3.5 sm:gap-4">
              {/* 5-Currency Selector Bar (Scrollable on mobile) */}
              <div className="bg-[#E4E4E4] p-1 rounded-2xl flex items-center border border-[#DBE4C7] max-w-full overflow-x-auto scrollbar-none snap-x">
                {(Object.keys(CURRENCIES) as CurrencyCode[]).map((code) => {
                  const item = CURRENCIES[code];
                  const isSelected = currency === code;
                  return (
                    <button
                      key={code}
                      onClick={() => setCurrency(code)}
                      className={`px-3 sm:px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer min-h-[36px] shrink-0 snap-start flex items-center gap-1.5 ${
                        isSelected
                          ? "bg-white text-[#182012] shadow-xs"
                          : "text-[#5A644D] hover:text-[#182012]"
                      }`}
                    >
                      <span className="text-xs">{item.flag}</span>
                      <span>{code}</span>
                      <span className="opacity-70 font-mono text-[10px]">({item.symbol.trim()})</span>
                    </button>
                  );
                })}
              </div>

              {/* Annual Billing Toggle */}
              <div className="bg-white p-1.5 rounded-xl flex items-center gap-2.5 px-3.5 border border-[#E4E4E4] shadow-xs min-h-[44px]">
                <button
                  onClick={() => setAnnual(!annual)}
                  className="flex items-center gap-2 text-xs font-semibold text-[#182012] cursor-pointer"
                >
                  <div
                    className={`w-8 h-4.5 rounded-full transition-colors relative flex items-center p-0.5 ${
                      annual ? "bg-[#687838]" : "bg-[#E4E4E4]"
                    }`}
                  >
                    <div
                      className={`w-3.5 h-3.5 rounded-full bg-white shadow-xs transition-transform ${
                        annual ? "translate-x-3.5" : "translate-x-0"
                      }`}
                    />
                  </div>
                  <span>Annual billing</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#353E20] bg-[#EDF2E2] px-2 py-0.5 rounded-full border border-[#DBE4C7]">
                    Save 20%
                  </span>
                </button>
              </div>
            </div>

            {/* UAE VAT Notice */}
            <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#DBE4C7] bg-[#EDF2E2] text-[11px] text-[#353E20] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#687838]" />
              <span>Multi-currency billing · UAE FTA VAT Compliant Invoices</span>
            </div>
          </div>
        </ScrollReveal>

        {/* 4 Tier Cards (1-col on base, 2-col on sm, 4-col on lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 sm:mb-20">
          {TIERS.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={i * 0.08}>
              <SpotlightCard
                className={`p-6 sm:p-7 flex flex-col justify-between h-full ${
                  tier.highlighted
                    ? "border-2 border-[#687838] shadow-xl shadow-[#687838]/15 ring-4 ring-[#687838]/10 lg:scale-105"
                    : ""
                }`}
              >
                <div>
                  {tier.highlighted && (
                    <span className="inline-block mb-3 px-2.5 py-0.5 bg-[#687838] text-white text-[10px] uppercase tracking-widest font-bold rounded-full">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-sans font-bold text-xl text-[#182012] mb-1">{tier.name}</h3>
                  <p className="text-xs text-[#5A644D] mb-5 leading-relaxed">{tier.description}</p>
                  <div className="mb-6">
                    <span className="font-mono text-3xl md:text-4xl font-extrabold text-[#182012] tabular-nums">
                      {getPriceDisplay(tier.priceUSD)}
                    </span>
                    <span className="text-xs text-[#5A644D] ml-1.5 font-sans font-medium">{tier.period}</span>
                  </div>
                  <ul className="space-y-2.5 mb-8 text-xs text-[#182012]">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 shrink-0 text-[#687838]">
                          <path d="M3 7L6 10L11 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  variant={tier.highlighted ? "primary" : "ghost"}
                  size="md"
                  className="w-full text-xs min-h-[44px] justify-center"
                  href="https://mintsglobal.ae/contact"
                >
                  {tier.cta}
                </Button>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Feature Comparison: Stacked Cards on Mobile (<md), Sticky Pinned Table on Desktop (>=md) */}
        <ScrollReveal>
          <div className="max-w-5xl mx-auto">
            <h3 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] text-center mb-6 sm:mb-8">
              Comprehensive Feature Matrix
            </h3>

            {/* Mobile View (<md): Stacked Comparison Cards per Tier */}
            <div className="md:hidden space-y-4">
              {[
                { key: "free" as const, name: "Free Tier", badge: "$0/mo", desc: "Foundational employee directory & attendance" },
                { key: "growth" as const, name: "Growth Tier", badge: "$29/user", desc: "For scaling agencies needing CRM and Discord alerts" },
                { key: "business" as const, name: "Business Tier (Most Popular)", badge: "$69/user", desc: "Full automation engine, client portal & heatmaps", popular: true },
                { key: "enterprise" as const, name: "Enterprise Tier", badge: "$149/user", desc: "SSO, custom RBAC & dedicated Firestore tenancy" },
              ].map((tierItem) => (
                <div
                  key={tierItem.key}
                  className={`bg-white rounded-2xl p-5 border shadow-xs ${
                    tierItem.popular ? "border-2 border-[#687838] ring-2 ring-[#687838]/10" : "border-[#E4E4E4]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-sans font-bold text-base text-[#182012]">{tierItem.name}</h4>
                    <span className="font-mono text-xs font-bold text-[#687838] bg-[#EDF2E2] px-2 py-0.5 rounded-full border border-[#DBE4C7]">
                      {tierItem.badge}
                    </span>
                  </div>
                  <p className="text-xs text-[#5A644D] mb-4">{tierItem.desc}</p>

                  <div className="space-y-3 pt-3 border-t border-[#F0F0F0]">
                    {COMPARISON_CATEGORIES.map((cat) => {
                      const included = cat.features.filter((f) => f[tierItem.key]);
                      if (included.length === 0) return null;
                      return (
                        <div key={cat.category}>
                          <span className="text-[10px] uppercase font-mono font-bold text-[#859177] tracking-wider block mb-1.5">
                            {cat.category}
                          </span>
                          <div className="grid grid-cols-1 gap-1.5 pl-1">
                            {included.map((feat) => (
                              <div key={feat.name} className="flex items-center gap-2 text-xs text-[#182012]">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#687838] shrink-0" />
                                <span>{feat.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop View (>=md): Pinned Column Comparison Table */}
            <div className="hidden md:block overflow-x-auto rounded-2xl border border-[#E4E4E4] bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#F0F0F0] border-b border-[#E4E4E4]">
                    <th className="text-left p-4 text-[#182012] font-semibold w-[36%] sticky left-0 bg-[#F0F0F0] z-10">
                      Capability
                    </th>
                    <th className="p-4 text-[#5A644D] font-medium text-center w-[16%]">Free</th>
                    <th className="p-4 text-[#5A644D] font-medium text-center w-[16%]">Growth</th>
                    <th className="p-4 text-[#353E20] font-bold text-center w-[16%] bg-[#EDF2E2]/60">Business</th>
                    <th className="p-4 text-[#5A644D] font-medium text-center w-[16%]">Enterprise</th>
                  </tr>
                </thead>
                {COMPARISON_CATEGORIES.map((cat) => (
                  <tbody key={cat.category}>
                    <tr className="bg-[#F0F0F0] border-y border-[#E4E4E4]">
                      <td colSpan={5} className="px-4 py-2 text-[11px] tracking-wider uppercase text-[#182012] font-bold sticky left-0 bg-[#F0F0F0] z-10">
                        {cat.category}
                      </td>
                    </tr>
                    {cat.features.map((feature) => (
                      <tr key={feature.name} className="border-b border-[#E4E4E4] hover:bg-[#F0F0F0]/50 transition-colors">
                        <td className="p-4 text-[#182012] font-medium sticky left-0 bg-white z-10 shadow-2xs">
                          {feature.name}
                        </td>
                        <td className="p-4 text-center">{feature.free ? <CheckIcon /> : <CrossIcon />}</td>
                        <td className="p-4 text-center">{feature.growth ? <CheckIcon /> : <CrossIcon />}</td>
                        <td className="p-4 text-center bg-[#EDF2E2]/30">{feature.business ? <CheckIcon /> : <CrossIcon />}</td>
                        <td className="p-4 text-center">{feature.enterprise ? <CheckIcon /> : <CrossIcon />}</td>
                      </tr>
                    ))}
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
