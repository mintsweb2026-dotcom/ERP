"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";

import Image from "next/image";

const NAV_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "Modules", href: "/#modules" },
  { label: "Compare", href: "/compare" },
  { label: "Security", href: "/security" },
  { label: "Pricing", href: "/pricing" },
  { label: "Help Center", href: "/help-center" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xs md:backdrop-blur-md border-b border-[#E4E4E4] shadow-xs"
            : "bg-white/90 backdrop-blur-xs md:backdrop-blur-sm border-b border-[#F0F0F0]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Official Flat Vector Logo */}
          <a href="#" className="flex items-center group py-1.5 focus:outline-hidden">
            <Image
              src="/images/mints_erp_flat.png"
              alt="Mints ERP — Smarter Operations. Together."
              width={260}
              height={80}
              className="h-10 sm:h-11 md:h-13 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.03]"
              priority
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#5A644D] hover:text-[#687838] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" href="#faq">
              Learn More
            </Button>
            <Button variant="primary" size="sm" href="#pricing">
              Request a Demo
            </Button>
          </div>

          {/* Mobile Hamburger (min 44px tap target) */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-11 h-11 flex items-center justify-center text-[#182012] hover:text-[#687838] cursor-pointer rounded-xl hover:bg-[#F0F0F0] transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              {mobileOpen ? (
                <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Full-height slide-in mobile drawer from right */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop overlay (dismiss on outside tap) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="md:hidden fixed inset-0 bg-black/40 z-50 backdrop-blur-xs"
              aria-hidden="true"
            />

            {/* Slide-in drawer panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="md:hidden fixed inset-y-0 right-0 w-[300px] max-w-[85vw] bg-white z-50 p-6 flex flex-col justify-between shadow-2xl border-l border-[#E4E4E4]"
            >
              {/* Top: Logo + Close Button */}
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#F0F0F0] mb-6">
                  <Image
                    src="/images/mints_erp_flat.png"
                    alt="Mints ERP"
                    width={160}
                    height={50}
                    className="h-8 w-auto object-contain"
                  />
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="w-11 h-11 flex items-center justify-center rounded-xl text-[#5A644D] hover:text-[#182012] hover:bg-[#F0F0F0] cursor-pointer"
                    aria-label="Close navigation menu"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>

                {/* Stacked Nav Links (min 44px tap targets) */}
                <div className="flex flex-col space-y-1">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="min-h-[44px] flex items-center text-base font-semibold text-[#182012] hover:text-[#687838] px-3 rounded-lg hover:bg-[#F0F0F0] transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

                {/* Social Links in Mobile Drawer */}
                <div className="flex items-center justify-center gap-3 py-3 border-t border-[#F0F0F0]">
                  <a
                    href="https://x.com/MintsGlobal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-[#F0F0F0] flex items-center justify-center text-[#5A644D] hover:text-[#687838] transition-colors"
                    aria-label="X (Twitter)"
                  >
                    <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
                      <path d="M14.25 2.25H16.5L11.58 7.875L17.37 15.75H12.84L9.29 11.05L5.23 15.75H2.98L8.24 9.735L2.73 2.25H7.38L10.59 6.54L14.25 2.25ZM13.46 14.41H14.71L6.68 3.51H5.34L13.46 14.41Z" fill="currentColor" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/110910285/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-[#F0F0F0] flex items-center justify-center text-[#5A644D] hover:text-[#687838] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
                      <rect x="2" y="2" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M6 8V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M6 6V6.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      <path d="M10 12V9.5C10 8.67 10.67 8 11.5 8C12.33 8 13 8.67 13 9.5V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M10 8V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </a>
                  <a
                    href="https://discord.gg/Jn6Ej7PdgD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-[#F0F0F0] flex items-center justify-center text-[#5A644D] hover:text-[#687838] transition-colors"
                    aria-label="Discord"
                  >
                    <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
                      <path
                        d="M14.5 4.3c-1-.5-2.1-.8-3.3-1-.1.2-.3.5-.4.8-1.2-.2-2.5-.2-3.7 0-.1-.3-.3-.6-.4-.8-1.2.2-2.3.5-3.3 1C1.9 7.4 1.3 10.4 1.6 13.4c1.3.9 2.6 1.5 3.9 1.9.3-.4.6-.9.8-1.4-.5-.2-.9-.4-1.3-.7.1-.1.2-.2.3-.2 2.5 1.2 5.3 1.2 7.8 0 .1.1.2.1.3.2-.4.3-.8.5-1.3.7.2.5.5 1 .8 1.4 1.3-.4 2.6-1 3.9-1.9.4-3.5-.5-6.5-2.3-9.1zM6.6 11.5c-.7 0-1.3-.7-1.3-1.5s.6-1.5 1.3-1.5 1.3.7 1.3 1.5-.6 1.5-1.3 1.5zm4.8 0c-.7 0-1.3-.7-1.3-1.5s.6-1.5 1.3-1.5 1.3.7 1.3 1.5-.6 1.5-1.3 1.5z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/mints.global/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-[#F0F0F0] flex items-center justify-center text-[#5A644D] hover:text-[#687838] transition-colors"
                    aria-label="Instagram"
                  >
                    <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
                      <rect x="2" y="2" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="9" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="13.5" cy="4.5" r="1" fill="currentColor" />
                    </svg>
                  </a>
                </div>

              {/* Bottom: Stacked Full-Width CTAs */}
              <div className="flex flex-col gap-3 pt-4 border-t border-[#F0F0F0]">
                <Button
                  variant="ghost"
                  href="#faq"
                  className="w-full text-sm min-h-[44px] justify-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Learn More
                </Button>
                <Button
                  variant="primary"
                  href="#pricing"
                  className="w-full text-sm min-h-[44px] justify-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Request a Demo
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
