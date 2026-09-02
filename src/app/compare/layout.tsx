import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mints ERP vs Competitors — Compare Enterprise Platforms",
  description:
    "Compare Mints Global ERP with Zoho, SAP Business One, TallyPrime, Sage, and Monday.com. Unified real-time architecture, compliance, and total cost of ownership.",
  alternates: {
    canonical: "https://erp.mintsglobal.ae/compare",
  },
  openGraph: {
    title: "Mints ERP vs Competitors — Compare Enterprise Platforms",
    description:
      "See how Mints ERP compares to Zoho, SAP, Tally, Sage, and disconnected tool stacks. 1 platform, 18 modules, zero consultant fees.",
    url: "https://erp.mintsglobal.ae/compare",
  },
};

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
