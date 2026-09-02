"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HELP_GUIDES, TOPIC_CHIPS, GuideDoc, DocSection } from "@/data/helpCenterData";

export default function HelpCenterPage() {
  const [activeGuideId, setActiveGuideId] = useState<string>("faq");
  const [activeSectionId, setActiveSectionId] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [helpfulFeedback, setHelpfulFeedback] = useState<Record<string, boolean | null>>({});
  const [mobileSectionsOpen, setMobileSectionsOpen] = useState<boolean>(false);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  const activeGuide = useMemo(() => {
    return HELP_GUIDES.find((g) => g.id === activeGuideId) || HELP_GUIDES[0];
  }, [activeGuideId]);

  // Set default section when guide changes
  useEffect(() => {
    if (activeGuide.sections.length > 0) {
      setActiveSectionId(activeGuide.sections[0].id);
    }
  }, [activeGuideId, activeGuide]);

  // Scroll listener for back to top floating button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard shortcut (Cmd/Ctrl + K to focus search)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        const el = document.getElementById("help-search-input");
        if (el) el.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Search filter across all guides, sections, and FAQs
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase();

    const matches: {
      guideId: string;
      guideTitle: string;
      sectionId?: string;
      title: string;
      snippet: string;
      type: "faq" | "section";
    }[] = [];

    HELP_GUIDES.forEach((guide) => {
      // Check sections
      guide.sections.forEach((sec) => {
        if (
          sec.title.toLowerCase().includes(q) ||
          sec.summary.toLowerCase().includes(q) ||
          sec.content.toLowerCase().includes(q)
        ) {
          matches.push({
            guideId: guide.id,
            guideTitle: guide.shortTitle,
            sectionId: sec.id,
            title: sec.title,
            snippet: sec.summary || sec.content.slice(0, 140) + "...",
            type: "section",
          });
        }
      });

      // Check FAQs
      if (guide.faqs) {
        guide.faqs.forEach((faq) => {
          if (faq.q.toLowerCase().includes(q) || faq.a.toLowerCase().includes(q)) {
            matches.push({
              guideId: guide.id,
              guideTitle: "FAQ",
              title: faq.q,
              snippet: faq.a,
              type: "faq",
            });
          }
        });
      }
    });

    return matches;
  }, [searchQuery]);

  const handleSelectSearchResult = (guideId: string, sectionId?: string) => {
    setActiveGuideId(guideId);
    if (sectionId) {
      setActiveSectionId(sectionId);
    }
    setSearchQuery("");
    const contentEl = document.getElementById("guide-content-area");
    if (contentEl) {
      contentEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleChipClick = (chip: { query: string; guideId: string }) => {
    setSearchQuery(chip.query);
    setActiveGuideId(chip.guideId);
    const contentEl = document.getElementById("guide-content-area");
    if (contentEl) {
      contentEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSection = (secId: string) => {
    setActiveSectionId(secId);
    setMobileSectionsOpen(false);
    const target = document.getElementById(secId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const setFeedback = (key: string, isHelpful: boolean) => {
    setHelpfulFeedback((prev) => ({ ...prev, [key]: isHelpful }));
  };

  return (
    <div className="min-h-screen bg-white text-[#182012] font-sans antialiased selection:bg-[#EDF2E2] selection:text-[#353E20]">
      {/* 1. Global Header Navigation (Fluid responsive for all screens) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E4E4E4]">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-4 min-w-0">
            <Link href="/" className="flex items-center group py-1 shrink-0 focus:outline-hidden">
              <Image
                src="/images/mints_erp_flat.png"
                alt="Mints Global ERP"
                width={200}
                height={60}
                className="h-7 xs:h-8 sm:h-10 md:h-11 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                priority
              />
            </Link>
            <span className="h-5 w-px bg-[#DBE4C7] hidden xs:block" />
            <div className="hidden xs:inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#EDF2E2] border border-[#DBE4C7] text-[11px] sm:text-xs font-bold text-[#353E20] truncate">
              <span>Help Center</span>
              <span className="text-[#687838] font-mono hidden sm:inline">v1.5</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <Link
              href="/"
              className="text-xs sm:text-sm font-medium text-[#5A644D] hover:text-[#182012] flex items-center gap-1 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl hover:bg-[#F0F0F0] transition-colors min-h-[38px]"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0">
                <path d="M10 13L5 8L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="hidden sm:inline">Back to Main Site</span>
              <span className="sm:hidden">Main Site</span>
            </Link>

            <Link
              href="/#pricing"
              className="inline-flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#687838] hover:bg-[#56642E] transition-all shadow-2xs min-h-[38px]"
            >
              <span className="hidden sm:inline">Request Demo</span>
              <span className="sm:hidden">Demo</span>
            </Link>
          </div>
        </div>
      </header>

      {/* 2. Chatwoot Style Hero Section with Search Input */}
      <section className="relative overflow-hidden bg-[#F0F0F0]/60 border-b border-[#E4E4E4] pt-8 pb-10 sm:pt-14 sm:pb-16 md:pt-18 md:pb-20">
        {/* Soft Olive Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] sm:w-[550px] md:w-[700px] h-[200px] sm:h-[260px] bg-[#EDF2E2] rounded-full blur-[90px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDF2E2] border border-[#DBE4C7] text-xs font-semibold text-[#353E20] mb-3 sm:mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#687838] animate-pulse" />
            <span>Official ERP Knowledge Base</span>
          </div>

          <h1 className="font-sans font-extrabold text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-[#182012] tracking-tight mb-2 sm:mb-3 leading-tight">
            Hey 👋, how can we help you?
          </h1>

          <p className="text-xs sm:text-base md:text-lg text-[#5A644D] max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Search comprehensive guides for all 18 enterprise modules, corporate policies,
            architectural specs, and operational workflows.
          </p>

          {/* Search Input with Ctrl+K shortcut */}
          <div className="relative max-w-2xl mx-auto mb-5 sm:mb-6">
            <div className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-[#5A644D] pointer-events-none">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="sm:w-5 sm:h-5">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            <input
              id="help-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides, FAQs, policies, attendance, or invoices..."
              className="w-full pl-10 sm:pl-12 pr-12 sm:pr-24 py-3 sm:py-4 rounded-2xl bg-white border border-[#DBE4C7] text-xs sm:text-sm md:text-base text-[#182012] placeholder-[#859177] shadow-lg shadow-[#687838]/5 focus:outline-hidden focus:ring-2 focus:ring-[#687838] focus:border-transparent transition-all"
            />

            <div className="absolute right-2.5 sm:right-3.5 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
              {searchQuery ? (
                <button
                  onClick={() => setSearchQuery("")}
                  className="p-1.5 text-[#5A644D] hover:text-[#182012] rounded-lg hover:bg-[#F0F0F0] cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center"
                  title="Clear search"
                  aria-label="Clear search query"
                >
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              ) : (
                <span className="hidden sm:inline-flex items-center px-2 py-1 rounded-md bg-[#F0F0F0] border border-[#E4E4E4] text-[11px] font-mono text-[#5A644D]">
                  ⌘K
                </span>
              )}
            </div>
          </div>

          {/* Search Results Dropdown Preview */}
          <AnimatePresence>
            {searchResults && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="max-w-2xl mx-auto mb-6 bg-white rounded-2xl border border-[#DBE4C7] shadow-xl text-left overflow-hidden max-h-80 sm:max-h-96 overflow-y-auto"
              >
                <div className="px-3.5 py-2.5 bg-[#EDF2E2] border-b border-[#DBE4C7] text-xs font-bold text-[#353E20] flex items-center justify-between">
                  <span>Found {searchResults.length} matching answers</span>
                  <span className="text-[10px] sm:text-[11px] font-mono text-[#5A644D]">Tap to jump</span>
                </div>
                {searchResults.length === 0 ? (
                  <div className="p-6 text-center text-xs sm:text-sm text-[#5A644D]">
                    No exact matches found for &ldquo;{searchQuery}&rdquo;. Try searching for &ldquo;theme&rdquo;, &ldquo;attendance&rdquo;, &ldquo;leaves&rdquo;, or &ldquo;invoice&rdquo;.
                  </div>
                ) : (
                  <div className="divide-y divide-[#F0F0F0]">
                    {searchResults.map((res, i) => (
                      <div
                        key={i}
                        onClick={() => handleSelectSearchResult(res.guideId, res.sectionId)}
                        className="p-3.5 sm:p-4 hover:bg-[#F0F0F0] cursor-pointer transition-colors active:bg-[#EDF2E2]"
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-xs sm:text-sm font-bold text-[#182012]">{res.title}</span>
                          <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#EDF2E2] text-[#353E20] font-bold shrink-0">
                            {res.guideTitle}
                          </span>
                        </div>
                        <p className="text-xs text-[#5A644D] line-clamp-2 leading-relaxed">
                          {res.snippet}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Quick Topic Chips (Mobile Scrollable Snap-X / Desktop Wrapped) */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2">
            <span className="text-xs font-semibold text-[#5A644D] shrink-0 text-left sm:text-center">
              Popular Topics:
            </span>
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 sm:flex-wrap sm:justify-center scrollbar-none snap-x -mx-4 px-4 sm:mx-0 sm:px-0">
              {TOPIC_CHIPS.map((chip) => (
                <button
                  key={chip.label}
                  onClick={() => handleChipClick(chip)}
                  className="px-2.5 py-1 sm:px-3 sm:py-1 rounded-full bg-white border border-[#E4E4E4] hover:border-[#687838] text-[11px] sm:text-xs font-medium text-[#182012] hover:text-[#687838] transition-all shadow-2xs cursor-pointer shrink-0 snap-start whitespace-nowrap min-h-[32px] flex items-center"
                >
                  {chip.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Primary 4-Document Gateway Cards Grid (1 col mobile, 2 col tablet, 4 col desktop) */}
      <section className="py-10 sm:py-14 lg:py-16 bg-white border-b border-[#E4E4E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#687838] block mb-1">
                Enterprise Knowledge Guides
              </span>
              <h2 className="font-sans font-extrabold text-xl sm:text-2xl md:text-3xl text-[#182012]">
                Official Documentation &amp; Manuals
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#5A644D] max-w-md">
              Tap any guide below to inspect complete workflows, technical specifications, and role policies.
            </p>
          </div>

          {/* 4 Cards Grid with Responsive Touch Padding */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {HELP_GUIDES.map((guide) => {
              const isSelected = activeGuideId === guide.id;
              return (
                <div
                  key={guide.id}
                  onClick={() => {
                    setActiveGuideId(guide.id);
                    const el = document.getElementById("guide-content-area");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`p-5 sm:p-6 rounded-2xl sm:rounded-3xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#EDF2E2]/60 border-[#687838] shadow-md shadow-[#687838]/10 ring-2 ring-[#687838]/20"
                      : "bg-[#F0F0F0] border-[#E4E4E4] hover:border-[#C3D2A3] hover:bg-white/80"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <span className="text-2xl sm:text-3xl">{guide.icon}</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white border border-[#DBE4C7] text-[#353E20]">
                        {guide.badge}
                      </span>
                    </div>

                    <h3 className="font-sans font-bold text-base sm:text-lg text-[#182012] mb-1.5 sm:mb-2">
                      {guide.title}
                    </h3>

                    <p className="text-xs text-[#5A644D] leading-relaxed mb-4 sm:mb-6 line-clamp-3">
                      {guide.description}
                    </p>
                  </div>

                  <div className="pt-3.5 border-t border-[#DBE4C7]/60 flex items-center justify-between text-[11px] text-[#5A644D]">
                    <span className="font-mono">{guide.readingTime}</span>
                    <span className="font-bold text-[#687838] flex items-center gap-1">
                      Browse →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Chatwoot Style Interactive 3-Pane Document Reader */}
      <section className="py-8 sm:py-12 lg:py-16 bg-[#F0F0F0]/40" id="guide-content-area">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          {/* Active Guide Subheader Bar with Mobile Swiper Tabs */}
          <div className="mb-6 sm:mb-8 p-3.5 sm:p-5 rounded-2xl bg-white border border-[#E4E4E4] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
              <span className="text-2xl sm:text-3xl shrink-0">{activeGuide.icon}</span>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[11px] sm:text-xs font-mono uppercase text-[#687838] font-bold truncate">
                    Docs &gt; {activeGuide.shortTitle}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EDF2E2] text-[#353E20] font-bold shrink-0">
                    {activeGuide.version}
                  </span>
                </div>
                <h2 className="font-sans font-extrabold text-lg sm:text-xl md:text-2xl text-[#182012] truncate">
                  {activeGuide.title}
                </h2>
              </div>
            </div>

            {/* Guide Switcher Tabs (Horizontal Scrollable on Mobile with Snap) */}
            <div className="flex items-center overflow-x-auto gap-1.5 p-1 rounded-xl bg-[#F0F0F0] border border-[#E4E4E4] scrollbar-none snap-x -mx-1 px-1">
              {HELP_GUIDES.map((g) => (
                <button
                  key={g.id}
                  onClick={() => setActiveGuideId(g.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer snap-start shrink-0 min-h-[36px] flex items-center ${
                    activeGuideId === g.id
                      ? "bg-white text-[#182012] shadow-2xs border border-[#DBE4C7] font-bold"
                      : "text-[#5A644D] hover:text-[#182012]"
                  }`}
                >
                  <span className="mr-1">{g.icon}</span>
                  <span>{g.shortTitle}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Section Selector Dropdown Bar (Visible on < lg, hidden on lg+) */}
          <div className="lg:hidden mb-6">
            <div className="bg-white rounded-2xl border border-[#DBE4C7] shadow-xs overflow-hidden">
              <button
                onClick={() => setMobileSectionsOpen(!mobileSectionsOpen)}
                className="w-full px-4 py-3 flex items-center justify-between text-left cursor-pointer min-h-[44px] bg-[#EDF2E2]/60"
                aria-expanded={mobileSectionsOpen}
              >
                <div className="flex items-center gap-2 truncate pr-2">
                  <span className="text-xs uppercase font-bold text-[#687838] shrink-0">Section:</span>
                  <span className="text-xs sm:text-sm font-bold text-[#182012] truncate">
                    {activeGuide.sections.find((s) => s.id === activeSectionId)?.title || "Select section..."}
                  </span>
                </div>
                <span className={`text-xs font-bold text-[#687838] transition-transform shrink-0 ${mobileSectionsOpen ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>

              <AnimatePresence>
                {mobileSectionsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="divide-y divide-[#F0F0F0] max-h-64 overflow-y-auto"
                  >
                    {activeGuide.sections.map((sec) => (
                      <button
                        key={sec.id}
                        onClick={() => scrollToSection(sec.id)}
                        className={`w-full text-left px-4 py-2.5 text-xs font-medium flex items-center justify-between cursor-pointer min-h-[40px] ${
                          activeSectionId === sec.id
                            ? "bg-[#EDF2E2] text-[#182012] font-bold"
                            : "text-[#5A644D] hover:bg-[#F0F0F0]"
                        }`}
                      >
                        <span className="truncate pr-2">{sec.title}</span>
                        {activeSectionId === sec.id && <span className="w-1.5 h-1.5 rounded-full bg-[#687838] shrink-0" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Main 2-Column Responsive Layout (lg: 3-col sidebar + 9-col content) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Desktop Left Sidebar: Table of Contents & Navigation (Hidden on < lg) */}
            <aside className="hidden lg:block lg:col-span-3 sticky top-28 space-y-4">
              <div className="bg-white rounded-2xl p-5 border border-[#E4E4E4] shadow-xs">
                <span className="text-xs font-bold uppercase tracking-wider text-[#5A644D] block mb-3">
                  Guide Sections
                </span>

                <nav className="space-y-1">
                  {activeGuide.sections.map((sec) => {
                    const isSecActive = activeSectionId === sec.id;
                    return (
                      <button
                        key={sec.id}
                        onClick={() => scrollToSection(sec.id)}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-between cursor-pointer min-h-[38px] ${
                          isSecActive
                            ? "bg-[#EDF2E2] text-[#182012] font-bold border border-[#DBE4C7]"
                            : "text-[#5A644D] hover:text-[#182012] hover:bg-[#F0F0F0]"
                        }`}
                      >
                        <span className="truncate pr-2">{sec.title}</span>
                        {isSecActive && <span className="w-1.5 h-1.5 rounded-full bg-[#687838] shrink-0" />}
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Quick Info Badge Box */}
              <div className="bg-[#EDF2E2]/60 rounded-2xl p-4 border border-[#DBE4C7] text-xs text-[#353E20]">
                <div className="font-bold mb-1 flex items-center gap-1.5">
                  <span>⚡</span> Live Sync Active
                </div>
                <p className="leading-relaxed text-[11px] text-[#5A644D]">
                  Documentation synced directly with verified release build {activeGuide.version}.
                </p>
              </div>
            </aside>

            {/* Main Article Content Reader (Full width on mobile, 9-col on desktop) */}
            <main className="lg:col-span-9 space-y-6 sm:space-y-8 min-w-0">
              {/* If FAQ guide, render Categorized Accordion Section */}
              {activeGuide.faqs && (
                <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-[#E4E4E4] shadow-sm">
                  <div className="mb-6 sm:mb-8">
                    <span className="text-xs uppercase tracking-widest text-[#687838] font-bold block mb-1">
                      Quick Q&amp;A Archive
                    </span>
                    <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-[#182012] mb-1.5 sm:mb-2">
                      Common Inquiries &amp; Answers
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5A644D]">
                      Tap any question to reveal verified solutions and operational guidelines.
                    </p>
                  </div>

                  <div className="space-y-2.5 sm:space-y-3">
                    {activeGuide.faqs.map((faq, i) => (
                      <details
                        key={i}
                        className="group bg-[#F0F0F0] rounded-xl sm:rounded-2xl p-3.5 sm:p-5 border border-[#E4E4E4] hover:border-[#687838] transition-all [&_summary::-webkit-details-marker]:hidden"
                      >
                        <summary className="flex items-center justify-between cursor-pointer font-sans font-bold text-xs sm:text-base text-[#182012] group-open:text-[#687838] transition-colors min-h-[36px]">
                          <span className="pr-3 leading-snug">{faq.q}</span>
                          <span className="w-6 h-6 rounded-md bg-white text-[#5A644D] flex items-center justify-center text-xs shrink-0 group-open:rotate-180 transition-transform shadow-2xs">
                            ▼
                          </span>
                        </summary>
                        <p className="mt-2.5 pt-2.5 sm:mt-3 sm:pt-3 border-t border-[#E4E4E4] text-xs sm:text-sm text-[#5A644D] leading-relaxed">
                          {faq.a}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              )}

              {/* Render Detailed Guide Sections with Mobile-Optimized Cards */}
              {activeGuide.sections.map((sec) => (
                <article
                  key={sec.id}
                  id={sec.id}
                  className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-[#E4E4E4] shadow-sm relative scroll-mt-24 sm:scroll-mt-28"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5 sm:mb-4 pb-3 sm:pb-4 border-b border-[#F0F0F0]">
                    <h3 className="font-sans font-extrabold text-lg sm:text-xl md:text-2xl text-[#182012] leading-snug">
                      {sec.title}
                    </h3>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#EDF2E2] text-[#353E20] font-bold shrink-0">
                      Section
                    </span>
                  </div>

                  {/* Summary Lead */}
                  <p className="text-xs sm:text-sm md:text-base text-[#182012] font-semibold leading-relaxed mb-3 sm:mb-4">
                    {sec.summary}
                  </p>

                  {/* Detailed Description */}
                  <p className="text-xs sm:text-sm text-[#5A644D] leading-relaxed mb-5 sm:mb-6">
                    {sec.content}
                  </p>

                  {/* Callout Alert if present */}
                  {sec.callout && (
                    <div
                      className={`p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border mb-5 sm:mb-6 text-xs sm:text-sm leading-relaxed ${
                        sec.callout.type === "important"
                          ? "bg-[#EDF2E2] border-[#DBE4C7] text-[#182012]"
                          : sec.callout.type === "warning"
                          ? "bg-amber-50 border-amber-200 text-amber-950"
                          : "bg-[#F0F0F0] border-[#E4E4E4] text-[#353E20]"
                      }`}
                    >
                      <div className="font-bold uppercase text-[10px] tracking-wider mb-1 text-[#687838] flex items-center gap-1.5">
                        <span>●</span>
                        <span>{sec.callout.type}</span>
                      </div>
                      <p>{sec.callout.text}</p>
                    </div>
                  )}

                  {/* Bullets List if present */}
                  {sec.bullets && (
                    <ul className="space-y-2 mb-5 sm:mb-6">
                      {sec.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#353E20]">
                          <span className="w-4 h-4 rounded-full bg-[#EDF2E2] text-[#687838] flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                            ✓
                          </span>
                          <span className="leading-snug">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Responsive Data Table with Mobile Scroll Indicator */}
                  {sec.table && (
                    <div className="mb-5 sm:mb-6">
                      <div className="sm:hidden text-[10px] text-[#859177] font-medium mb-1.5 flex items-center gap-1">
                        <span>← Swipe table horizontally →</span>
                      </div>
                      <div className="overflow-x-auto rounded-xl sm:rounded-2xl border border-[#E4E4E4] -mx-1 sm:mx-0">
                        <table className="w-full text-left text-xs border-collapse min-w-[480px]">
                          <thead>
                            <tr className="bg-[#F0F0F0] border-b border-[#E4E4E4]">
                              {sec.table.headers.map((h, i) => (
                                <th key={i} className="p-2.5 sm:p-3 font-bold text-[#182012] whitespace-nowrap">
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#F0F0F0]">
                            {sec.table.rows.map((row, i) => (
                              <tr key={i} className="hover:bg-[#F9FBF6] transition-colors">
                                {row.map((cell, j) => (
                                  <td key={j} className="p-2.5 sm:p-3 text-[#5A644D]">
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Helpful Rating Widget (Full Width on Mobile) */}
                  <div className="pt-4 sm:pt-6 border-t border-[#F0F0F0] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#5A644D]">
                    <span>Was this documentation article helpful?</span>
                    <div className="flex items-center gap-2">
                      {helpfulFeedback[sec.id] !== undefined ? (
                        <span className="text-xs font-semibold text-[#687838] flex items-center gap-1">
                          <span>✓</span> Thank you for your feedback!
                        </span>
                      ) : (
                        <>
                          <button
                            onClick={() => setFeedback(sec.id, true)}
                            className="px-3.5 py-1.5 rounded-lg bg-[#F0F0F0] hover:bg-[#EDF2E2] hover:text-[#182012] border border-[#E4E4E4] font-semibold transition-colors cursor-pointer min-h-[36px] flex items-center gap-1"
                          >
                            <span>👍</span> Yes
                          </button>
                          <button
                            onClick={() => setFeedback(sec.id, false)}
                            className="px-3.5 py-1.5 rounded-lg bg-[#F0F0F0] hover:bg-rose-50 hover:text-rose-900 border border-[#E4E4E4] font-semibold transition-colors cursor-pointer min-h-[36px] flex items-center gap-1"
                          >
                            <span>👎</span> No
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </main>
          </div>
        </div>
      </section>

      {/* 5. Fallback Contact Banner (Fully Stacked on Mobile, Inline on Desktop) */}
      <section className="py-12 sm:py-16 md:py-20 bg-white border-t border-[#E4E4E4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#EDF2E2] border border-[#DBE4C7] text-[#687838] flex items-center justify-center mx-auto mb-3 sm:mb-4 text-xl shadow-2xs">
            💬
          </div>
          <h2 className="font-sans font-extrabold text-xl sm:text-2xl md:text-3xl text-[#182012] mb-2 sm:mb-3">
            Still have questions?
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#5A644D] max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Our Dubai HQ engineering advisory team is available to assist your organization with custom deployment,
            compliance reviews, and department onboarding.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="mailto:info@mintsglobal.ae"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#182012] text-white font-semibold text-xs sm:text-sm hover:bg-[#2C381E] transition-all shadow-xs min-h-[44px] flex items-center justify-center"
            >
              Contact Support: info@mintsglobal.ae
            </a>
            <Link
              href="/#pricing"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#F0F0F0] hover:bg-[#EDF2E2] text-[#182012] font-semibold text-xs sm:text-sm border border-[#E4E4E4] transition-all min-h-[44px] flex items-center justify-center"
            >
              Request Live Executive Demo
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Mobile Floating Back to Top / Quick Jump Action */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-5 z-40 w-11 h-11 rounded-full bg-[#182012] text-white shadow-xl flex items-center justify-center border border-[#353E20] hover:bg-[#687838] transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 19V5M5 12L12 5L19 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* 7. Footer */}
      <footer className="py-8 bg-[#F0F0F0] border-t border-[#E4E4E4] text-xs text-[#5A644D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Mints Global. All rights reserved. Bur Dubai, Dubai, UAE.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link href="/" className="hover:text-[#182012] transition-colors py-1">
              Product Overview
            </Link>
            <Link href="/help-center" className="hover:text-[#182012] font-bold text-[#182012] py-1">
              Help Center
            </Link>
            <Link href="/#security" className="hover:text-[#182012] transition-colors py-1">
              Security &amp; Compliance
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
