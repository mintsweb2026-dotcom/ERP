import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { COMPETITORS_MAP, COMPETITOR_SLUGS } from "@/data/competitorData";
import AnnouncementBar from "@/components/sections/AnnouncementBar";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FinalCTA from "@/components/sections/FinalCTA";
import Link from "next/link";

interface Props {
  params: Promise<{ competitor: string }>;
}

export async function generateStaticParams() {
  return COMPETITOR_SLUGS.map((slug) => ({ competitor: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { competitor } = await params;
  const data = COMPETITORS_MAP[competitor];
  if (!data) return {};

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: `https://erp.mintsglobal.ae/compare/${competitor}`,
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://erp.mintsglobal.ae/compare/${competitor}`,
    },
  };
}

export default async function CompetitorComparisonPage({ params }: Props) {
  const { competitor } = await params;
  const data = COMPETITORS_MAP[competitor];

  if (!data) {
    notFound();
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-white text-[#182012]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <header className="sticky top-0 z-50 w-full">
        <AnnouncementBar />
        <Navbar />
      </header>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#F0F0F0]/80 via-white to-white border-b border-[#E4E4E4] py-12 sm:py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase text-[#687838] font-bold mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link href="/compare" className="hover:underline">Compare</Link>
            <span>/</span>
            <span className="text-[#182012]">Mints ERP vs {data.name}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDF2E2] border border-[#DBE4C7] text-xs font-bold text-[#353E20] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#687838]" />
            <span>{data.badge}</span>
            <span className="text-[#687838]">Save {data.savingsPct}</span>
          </div>

          <h1 className="font-sans font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#182012] tracking-tight max-w-4xl mx-auto mb-6 leading-[1.14]">
            {data.heroHeadline}
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#5A644D] max-w-3xl mx-auto mb-8 leading-relaxed">
            {data.summary}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
            <Link
              href="/#pricing"
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#687838] hover:bg-[#56642E] text-white font-bold text-sm shadow-md transition-all"
            >
              Explore Unified Pricing →
            </Link>
            <Link
              href="/compare#matrix"
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#F0F0F0] hover:bg-[#EDF2E2] text-[#182012] font-semibold text-sm border border-[#DBE4C7] transition-all"
            >
              View Full 25-Point Matrix
            </Link>
          </div>

          {/* Quick Pricing Pill */}
          <div className="p-4 rounded-3xl bg-white border border-[#E4E4E4] shadow-xs max-w-xl mx-auto grid grid-cols-2 gap-4 text-center">
            <div className="border-r border-[#F0F0F0] pr-4">
              <div className="text-xs text-[#5A644D] mb-1">Typical {data.name} Stack</div>
              <div className="font-mono text-xl font-bold text-[#182012] line-through opacity-70">
                {data.stackPrice}
              </div>
              <div className="text-[11px] text-[#5A644D]">per user / month</div>
            </div>
            <div>
              <div className="text-xs font-bold text-[#687838] mb-1">Mints ERP (All 18 Modules)</div>
              <div className="font-mono text-xl font-extrabold text-[#687838]">
                {data.mintsPrice}
              </div>
              <div className="text-[11px] text-[#353E20] font-semibold">per user / month</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Core Problem & Advantages */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#E4E4E4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Left: The Core Problem */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#F0F0F0]/50 border border-[#E4E4E4]">
              <div className="text-xs font-bold uppercase tracking-wider text-rose-700 mb-2">
                The Friction Point
              </div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-4">
                The Problem with {data.name}
              </h2>
              <p className="text-xs sm:text-sm text-[#5A644D] leading-relaxed mb-6">
                {data.theCoreProblem}
              </p>
              
              <div className="text-xs font-bold text-[#182012] mb-3">Honest Scope Note:</div>
              <ul className="space-y-2">
                {data.honestLimitations.map((lim, idx) => (
                  <li key={idx} className="text-xs text-[#5A644D] flex items-start gap-2">
                    <span className="text-slate-400 mt-0.5">•</span>
                    <span>{lim}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Where Mints ERP Wins */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#EDF2E2]/60 border border-[#DBE4C7]">
              <div className="text-xs font-bold uppercase tracking-wider text-[#687838] mb-2">
                Unified Advantage
              </div>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-4">
                Why Teams Choose Mints ERP
              </h2>
              <ul className="space-y-3.5">
                {data.whySwitch.map((adv, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-[#182012] flex items-start gap-2.5">
                    <span className="text-[#687838] font-bold text-base mt-[-2px]">✓</span>
                    <span className="leading-relaxed">{adv}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Side-by-Side Highlights Table */}
      <section className="py-14 sm:py-20 bg-[#F0F0F0]/40 border-b border-[#E4E4E4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#687838] block mb-2">
              Feature Audit
            </span>
            <h2 className="font-sans font-bold text-2xl sm:text-3xl text-[#182012]">
              Key Architectural Differences
            </h2>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-[#E4E4E4] bg-white shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-[#F0F0F0] border-b border-[#E4E4E4]">
                  <th className="p-4 font-bold text-[#182012] w-1/3">Capability</th>
                  <th className="p-4 font-bold text-[#687838] bg-[#EDF2E2]/70 w-1/3 border-x border-[#DBE4C7]">
                    Mints Global ERP
                  </th>
                  <th className="p-4 font-bold text-[#5A644D] w-1/3">{data.name}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0F0F0]">
                {data.matrixHighlights.map((row, i) => (
                  <tr key={i} className="hover:bg-[#F9FBF6] transition-colors">
                    <td className="p-4 font-bold text-[#182012]">{row.feature}</td>
                    <td className="p-4 font-medium text-[#182012] bg-[#EDF2E2]/30 border-x border-[#DBE4C7]/50">
                      {row.mints}
                    </td>
                    <td className="p-4 text-[#5A644D]">{row.competitor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Migration FAQ */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#687838] block mb-2">
              FAQ
            </span>
            <h2 className="font-sans font-bold text-2xl sm:text-3xl text-[#182012]">
              Migrating from {data.name} to Mints ERP
            </h2>
          </div>

          <div className="space-y-3 mb-10">
            {data.faqs.map((f, i) => (
              <details
                key={i}
                className="group bg-[#F0F0F0] rounded-2xl p-5 border border-[#E4E4E4] hover:border-[#687838] transition-all [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer font-sans font-bold text-sm sm:text-base text-[#182012] group-open:text-[#687838]">
                  <span>{f.q}</span>
                  <span className="text-xs text-[#5A644D] group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 pt-3 border-t border-[#E4E4E4] text-xs sm:text-sm text-[#5A644D] leading-relaxed">
                  {f.a}
                </p>
              </details>
            ))}
          </div>

          {/* Other Comparisons Nav */}
          <div className="p-6 rounded-3xl bg-[#F0F0F0]/60 border border-[#E4E4E4] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <div className="text-xs font-bold text-[#182012]">Explore Other Comparisons:</div>
              <div className="flex flex-wrap gap-2 mt-2">
                {COMPETITOR_SLUGS.filter((s) => s !== data.slug).map((otherSlug) => {
                  const other = COMPETITORS_MAP[otherSlug];
                  return (
                    <Link
                      key={otherSlug}
                      href={`/compare/${otherSlug}`}
                      className="px-3 py-1 rounded-xl bg-white border border-[#E4E4E4] text-xs font-medium text-[#5A644D] hover:text-[#182012] hover:border-[#687838] transition-all"
                    >
                      vs {other.name}
                    </Link>
                  );
                })}
              </div>
            </div>
            <Link
              href="/compare"
              className="text-xs font-bold text-[#687838] hover:underline shrink-0"
            >
              View Full Benchmark Hub →
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}
