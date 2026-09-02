import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GUIDES_MAP, GuideDoc } from "@/data/helpCenterData";
import AnnouncementBar from "@/components/sections/AnnouncementBar";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(GUIDES_MAP).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = GUIDES_MAP[slug];
  if (!guide) return {};

  return {
    title: `${guide.title} — Mints Global ERP Help Center`,
    description: guide.description,
    alternates: {
      canonical: `https://erp.mintsglobal.ae/help-center/${slug}`,
    },
    openGraph: {
      title: `${guide.title} — Mints Global ERP`,
      description: guide.description,
      url: `https://erp.mintsglobal.ae/help-center/${slug}`,
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = GUIDES_MAP[slug];

  if (!guide) {
    notFound();
  }

  // Generate FAQPage JSON-LD schema if guide contains FAQs
  const faqSchema =
    guide.faqs && guide.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: guide.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.a,
            },
          })),
        }
      : null;

  return (
    <main className="min-h-screen bg-white text-[#182012]">
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <header className="sticky top-0 z-50 w-full">
        <AnnouncementBar />
        <Navbar />
      </header>

      {/* Breadcrumb Header */}
      <section className="bg-[#F0F0F0]/60 border-b border-[#E4E4E4] py-8 sm:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#687838] font-bold mb-3">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link href="/help-center" className="hover:underline">Help Center</Link>
            <span>/</span>
            <span className="text-[#182012]">{guide.shortTitle}</span>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">{guide.icon}</span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#EDF2E2] text-[#353E20] border border-[#DBE4C7]">
              {guide.badge}
            </span>
            <span className="text-xs font-mono text-[#5A644D]">v{guide.version}</span>
          </div>

          <h1 className="font-sans font-extrabold text-2xl sm:text-4xl md:text-5xl text-[#182012] tracking-tight mb-3">
            {guide.title}
          </h1>

          <p className="text-sm sm:text-base text-[#5A644D] max-w-3xl mb-4 leading-relaxed">
            {guide.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-[#5A644D] font-mono">
            <span>Last Updated: {guide.lastUpdated}</span>
            <span className="w-1 h-1 rounded-full bg-[#DBE4C7]" />
            <span>Reading Time: ~{guide.readingTime}</span>
            <span className="w-1 h-1 rounded-full bg-[#DBE4C7]" />
            <span>{guide.sections.length} Sections</span>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          
          {/* Table of Contents Sticky Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-[#687838]">
                Table of Contents
              </div>
              <nav className="space-y-1">
                {guide.sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="block text-xs font-medium text-[#5A644D] hover:text-[#182012] py-1 transition-colors leading-snug"
                  >
                    {sec.title}
                  </a>
                ))}
                {guide.faqs && guide.faqs.length > 0 && (
                  <a
                    href="#faq-catalog"
                    className="block text-xs font-bold text-[#687838] hover:underline py-1"
                  >
                    FAQ Catalog ({guide.faqs.length})
                  </a>
                )}
              </nav>

              <hr className="border-[#E4E4E4]" />

              <div className="text-xs font-bold uppercase tracking-wider text-[#5A644D] mb-2">
                Other Guides
              </div>
              <div className="space-y-1.5">
                {Object.values(GUIDES_MAP)
                  .filter((g) => g.id !== guide.id)
                  .map((other) => (
                    <Link
                      key={other.id}
                      href={`/help-center/${other.id}`}
                      className="block text-xs text-[#5A644D] hover:text-[#687838] transition-colors"
                    >
                      {other.icon} {other.shortTitle} →
                    </Link>
                  ))}
              </div>
            </div>
          </aside>

          {/* Guide Articles */}
          <div className="lg:col-span-3 space-y-12">
            {guide.sections.map((sec, idx) => (
              <article
                key={sec.id}
                id={sec.id}
                className="scroll-mt-28 p-6 sm:p-8 rounded-3xl bg-white border border-[#E4E4E4] shadow-2xs"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-[#687838]">
                    Section {idx + 1}
                  </span>
                  {sec.badge && (
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-[#EDF2E2] text-[#353E20] border border-[#DBE4C7]">
                      {sec.badge}
                    </span>
                  )}
                </div>

                <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#182012] mb-3">
                  {sec.title}
                </h2>

                <p className="text-sm font-medium text-[#182012] bg-[#F0F0F0]/50 p-3.5 rounded-2xl border border-[#E4E4E4] mb-4 leading-relaxed">
                  {sec.summary}
                </p>

                <div className="text-xs sm:text-sm text-[#353E20] leading-relaxed mb-4 whitespace-pre-line">
                  {sec.content}
                </div>

                {sec.bullets && (
                  <ul className="space-y-2 mb-4">
                    {sec.bullets.map((b, i) => (
                      <li key={i} className="text-xs sm:text-sm text-[#353E20] flex items-start gap-2">
                        <span className="text-[#687838] font-bold mt-0.5">✓</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {sec.callout && (
                  <div className="p-4 rounded-2xl bg-[#EDF2E2] border border-[#DBE4C7] text-xs sm:text-sm text-[#353E20] mb-4">
                    <span className="font-bold text-[#182012] uppercase tracking-wider block mb-1">
                      💡 {sec.callout.type}
                    </span>
                    {sec.callout.text}
                  </div>
                )}

                {sec.table && (
                  <div className="overflow-x-auto rounded-2xl border border-[#E4E4E4] mt-4">
                    <table className="w-full text-left text-xs border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-[#F0F0F0] border-b border-[#E4E4E4]">
                          {sec.table.headers.map((h, i) => (
                            <th key={i} className="p-3 font-bold text-[#182012]">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#F0F0F0]">
                        {sec.table.rows.map((r, ri) => (
                          <tr key={ri} className="hover:bg-[#F9FBF6] transition-colors">
                            {r.map((c, ci) => (
                              <td key={ci} className="p-3 text-[#353E20]">{c}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </article>
            ))}

            {/* If FAQ section exists */}
            {guide.faqs && guide.faqs.length > 0 && (
              <section id="faq-catalog" className="scroll-mt-28">
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#687838] block mb-1">
                    Verified Q&amp;A
                  </span>
                  <h2 className="font-sans font-bold text-2xl text-[#182012]">
                    Frequently Asked Questions ({guide.faqs.length})
                  </h2>
                </div>

                <div className="space-y-3">
                  {guide.faqs.map((faq, fi) => (
                    <details
                      key={fi}
                      className="group bg-[#F0F0F0] rounded-2xl p-4 sm:p-5 border border-[#E4E4E4] hover:border-[#687838] transition-all [&_summary::-webkit-details-marker]:hidden"
                    >
                      <summary className="flex items-center justify-between cursor-pointer font-bold text-xs sm:text-sm text-[#182012] group-open:text-[#687838]">
                        <span>{faq.q}</span>
                        <span className="text-xs text-[#5A644D] group-open:rotate-180 transition-transform">▼</span>
                      </summary>
                      <p className="mt-3 pt-3 border-t border-[#E4E4E4] text-xs text-[#5A644D] leading-relaxed">
                        {faq.a}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* Back to Hub CTA */}
            <div className="pt-8 border-t border-[#E4E4E4] flex items-center justify-between">
              <Link
                href="/help-center"
                className="px-4 py-2.5 rounded-xl bg-[#F0F0F0] hover:bg-[#EDF2E2] text-xs font-bold text-[#182012] border border-[#E4E4E4] transition-all"
              >
                ← Back to Help Center Hub
              </Link>
              <a
                href="mailto:info@mintsglobal.ae"
                className="text-xs text-[#687838] font-bold hover:underline"
              >
                Need Technical Assistance? Contact Dubai HQ →
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
