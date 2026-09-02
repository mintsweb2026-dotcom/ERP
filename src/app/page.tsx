import AnnouncementBar from "@/components/sections/AnnouncementBar";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import DepartmentStrip from "@/components/sections/DepartmentStrip";
import BentoShowcase from "@/components/sections/BentoShowcase";
import SupportingFeatures from "@/components/sections/SupportingFeatures";
import Security from "@/components/sections/Security";
import TechStack from "@/components/sections/TechStack";
import Pricing from "@/components/sections/Pricing";
import Roadmap from "@/components/sections/Roadmap";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      {/* 1. Sticky Header with Announcement Banner & Glassmorphic Navigation */}
      <header className="sticky top-0 z-50 w-full">
        <AnnouncementBar />
        <Navbar />
      </header>

      {/* 3. Hero Command Center */}
      <Hero />

      <SectionDivider withDiamond />

      {/* 4. Department Strip */}
      <DepartmentStrip />

      <SectionDivider withDiamond />

      {/* 5. Core Bento Showcase (Interactive Module Switcher + 4-Card Bento Grid) */}
      <BentoShowcase />

      <SectionDivider />

      {/* 6. Auxiliary Operations Bento (Chat Channels, Cloud Drive, Discord Settings, Search, Ticketing) */}
      <SupportingFeatures />

      <SectionDivider withDiamond />

      {/* 7. Security & Compliance Vault (Interactive 5-Tier RBAC + UAE PDPL & ISO 27001) */}
      <Security />

      {/* 8. Modern Infrastructure Stack */}
      <TechStack />

      {/* 9. Transparent Pricing (AED / USD Switcher + Comparison Matrix) */}
      <Pricing />

      <SectionDivider withDiamond />

      {/* 10. Quarterly Roadmap */}
      <Roadmap />

      {/* 11. FAQ Accordion */}
      <FAQ />

      {/* 12. Final Executive CTA */}
      <FinalCTA />

      {/* 13. Grounded Dubai HQ Footer */}
      <Footer />
    </main>
  );
}
