import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://erp.mintsglobal.ae"),
  title: "Mints ERP — One Command Center for HR, CRM, Projects & Automations | Mints Global",
  description:
    "A state-of-the-art enterprise resource planning system by Mints Global. Centralize and automate HR, CRM, Projects, Finance, and Workflows across UAE, UK, India, and Europe.",
  keywords: [
    "ERP",
    "HR software",
    "CRM",
    "project management",
    "invoicing",
    "workflow automation",
    "Mints Global",
    "Dubai",
    "UK ERP",
    "India ERP",
    "Europe ERP",
    "enterprise software",
    "Next.js ERP",
    "Firebase ERP",
  ],
  alternates: {
    canonical: "https://erp.mintsglobal.ae",
    languages: {
      "en-AE": "https://erp.mintsglobal.ae",
      "en-GB": "https://erp.mintsglobal.ae/uk",
      "en-IN": "https://erp.mintsglobal.ae/india",
      "en-150": "https://erp.mintsglobal.ae/eu",
      "en": "https://erp.mintsglobal.ae",
      "x-default": "https://erp.mintsglobal.ae",
    },
  },
  openGraph: {
    title: "Mints ERP — One Command Center for HR, CRM, Projects & Automations",
    description:
      "A modern, RBAC-driven command center for HR, CRM, Projects, Finance, Chat, and Automations. Operating across UAE, UK, India, and Europe.",
    type: "website",
    url: "https://erp.mintsglobal.ae",
    locale: "en_AE",
    alternateLocale: ["en_GB", "en_IN", "en_US", "en_IE"],
    siteName: "Mints ERP by Mints Global",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mints ERP — One Command Center",
    description:
      "Centralize HR, CRM, Projects, Finance & Workflows in one secure platform. By Mints Global.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mints Global",
  url: "https://mintsglobal.ae",
  logo: "https://erp.mintsglobal.ae/images/mints_erp_logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Office #315, 3rd Floor, Bank Street Building",
    addressLocality: "Bur Dubai, Dubai",
    addressCountry: "AE",
  },
  areaServed: [
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "European Union" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@mintsglobal.ae",
    contactType: "sales",
    areaServed: ["AE", "GB", "IN", "EU"],
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Mints Global ERP",
  operatingSystem: "Web Browser, iOS, Android, Cloud",
  applicationCategory: "BusinessApplication",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "0",
    highPrice: "149",
    offerCount: "4",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "128",
  },
};

import CookieBanner from "@/components/ui/CookieBanner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#182012] font-sans selection:bg-[#EDF2E2] selection:text-[#515E2C]">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
