"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  preferences: boolean;
}

export default function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);
  const [isCustomizing, setIsCustomizing] = useState(false);

  // Default cookie toggle state
  const [prefs, setPrefs] = useState<CookiePreferences>({
    essential: true, // Always locked
    analytics: false,
    preferences: true,
  });

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("mints_cookie_consent_v1");
      if (!saved) {
        // Show banner after brief delay
        const timer = setTimeout(() => setShow(true), 1200);
        return () => clearTimeout(timer);
      } else {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === "object") {
          setPrefs((prev) => ({ ...prev, ...parsed }));
        }
      }
    } catch {
      // Fallback if localStorage was plain string
      const raw = localStorage.getItem("mints_cookie_consent_v1");
      if (!raw) setShow(true);
    }
  }, []);

  const dispatchGtagConsent = (analyticsGranted: boolean) => {
    if (
      typeof window !== "undefined" &&
      (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag
    ) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
        "consent",
        "update",
        {
          analytics_storage: analyticsGranted ? "granted" : "denied",
          ad_storage: "denied", // Mints ERP does not use ad trackers
        }
      );
    }
  };

  const handleAcceptAll = () => {
    const fullPrefs = { essential: true, analytics: true, preferences: true };
    localStorage.setItem("mints_cookie_consent_v1", JSON.stringify(fullPrefs));
    dispatchGtagConsent(true);
    setShow(false);
    setIsCustomizing(false);
  };

  const handleEssentialOnly = () => {
    const minPrefs = { essential: true, analytics: false, preferences: false };
    localStorage.setItem("mints_cookie_consent_v1", JSON.stringify(minPrefs));
    dispatchGtagConsent(false);
    setShow(false);
    setIsCustomizing(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("mints_cookie_consent_v1", JSON.stringify(prefs));
    dispatchGtagConsent(prefs.analytics);
    setShow(false);
    setIsCustomizing(false);
  };

  if (!mounted) return null;

  return (
    <>
      {/* Floating Re-open Badge when closed */}
      {!show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          onClick={() => setShow(true)}
          className="fixed bottom-4 left-4 z-40 px-3 py-1.5 rounded-full bg-[#182012]/90 hover:bg-[#182012] backdrop-blur-md text-[#DBE4C7] hover:text-white border border-[#353E20] shadow-lg text-[11px] font-mono flex items-center gap-1.5 cursor-pointer transition-all hover:border-[#687838]"
          aria-label="Manage Privacy and Cookie Preferences"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#687838]" />
          <span>Privacy &amp; Cookies</span>
        </motion.button>
      )}

      {/* Main Redesigned Cookie Modal / Banner */}
      <AnimatePresence>
        {show && (
          <div className="fixed inset-0 z-50 pointer-events-none flex items-end justify-center sm:justify-end p-4 sm:p-6 md:p-8">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Cookie & Privacy Consent"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              className="pointer-events-auto w-full max-w-lg rounded-3xl bg-[#12180E]/95 backdrop-blur-xl border border-[#353E20]/80 shadow-[0_20px_50px_rgba(0,0,0,0.6)] text-white p-6 sm:p-7 relative overflow-hidden"
            >
              {/* Subtle Decorative Ambient Radial Glow */}
              <div
                className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-[#687838]/20 blur-3xl pointer-events-none"
                aria-hidden="true"
              />

              {/* Header with Emblem & Compliance Pills */}
              <div className="flex items-start justify-between gap-4 mb-4 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#1C210E] border border-[#353E20] flex items-center justify-center shrink-0 shadow-inner">
                    {/* Modern Vector Shield Icon */}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-[#DBE4C7]"
                    >
                      <path
                        d="M12 2L3 7V12C3 17.52 6.84 22.74 12 24C17.16 22.74 21 17.52 21 12V7L12 2Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 12L11 14L15 10"
                        stroke="#687838"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="font-sans font-extrabold text-base text-white tracking-tight">
                        Privacy &amp; Data Governance
                      </h2>
                    </div>
                    <span className="text-[11px] font-mono text-[#8FA363]">
                      UAE PDPL • UK/EU GDPR • India DPDP
                    </span>
                  </div>
                </div>

                {/* Close to essential trigger */}
                <button
                  onClick={handleEssentialOnly}
                  className="text-[#5A644D] hover:text-white transition-colors p-1.5 rounded-xl hover:bg-[#1C210E] cursor-pointer"
                  aria-label="Decline non-essential cookies"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M18 6L6 18M6 6L18 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Body Description */}
              <div className="text-xs text-[#DBE4C7] leading-relaxed mb-5 relative z-10">
                <p>
                  Mints Global ERP uses encrypted authentication cookies for database RBAC, and optional telemetry to analyze latency across our serverless infrastructure. We never sell data or deploy advertising trackers.
                </p>
              </div>

              {/* Customization Drawer / Accordion */}
              <AnimatePresence>
                {isCustomizing && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden mb-5 border-t border-b border-[#252F18] py-4 space-y-3.5 relative z-10"
                  >
                    {/* Item 1: Necessary (Locked) */}
                    <div className="flex items-center justify-between gap-4 p-3 rounded-2xl bg-[#182012]/60 border border-[#252F18]">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-white">
                            Strictly Essential
                          </span>
                          <span className="text-[10px] font-mono uppercase bg-[#687838]/30 text-[#DBE4C7] px-2 py-0.5 rounded-full border border-[#687838]/50">
                            Required
                          </span>
                        </div>
                        <p className="text-[11px] text-[#8FA363] mt-0.5">
                          Firebase session tokens, CSRF defense &amp; 5-tier clearance state.
                        </p>
                      </div>
                      <div className="w-10 h-6 rounded-full bg-[#687838] flex items-center justify-end px-1 opacity-80 cursor-not-allowed">
                        <div className="w-4 h-4 rounded-full bg-white shadow-xs" />
                      </div>
                    </div>

                    {/* Item 2: Analytics & Performance (Toggleable) */}
                    <div className="flex items-center justify-between gap-4 p-3 rounded-2xl bg-[#182012]/60 border border-[#252F18]">
                      <div>
                        <span className="text-xs font-bold text-white">
                          Telemetry &amp; Latency Analytics
                        </span>
                        <p className="text-[11px] text-[#8FA363] mt-0.5">
                          Measures regional routing speed (<kbd className="font-mono text-[10px]">&lt;250ms</kbd>) via Google Consent Mode v2.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          setPrefs((p) => ({ ...p, analytics: !p.analytics }))
                        }
                        className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer focus:outline-none p-1 shrink-0 ${
                          prefs.analytics ? "bg-[#687838]" : "bg-[#252F18]"
                        }`}
                        aria-pressed={prefs.analytics}
                      >
                        <motion.div
                          layout
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          className={`w-4 h-4 rounded-full bg-white shadow-xs ${
                            prefs.analytics ? "ml-auto" : "mr-auto"
                          }`}
                        />
                      </button>
                    </div>

                    {/* Item 3: Preferences (Currency & Theme) */}
                    <div className="flex items-center justify-between gap-4 p-3 rounded-2xl bg-[#182012]/60 border border-[#252F18]">
                      <div>
                        <span className="text-xs font-bold text-white">
                          UI Customization &amp; Region
                        </span>
                        <p className="text-[11px] text-[#8FA363] mt-0.5">
                          Remembers Forest/Sage theme switch and selected billing currency.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          setPrefs((p) => ({ ...p, preferences: !p.preferences }))
                        }
                        className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer focus:outline-none p-1 shrink-0 ${
                          prefs.preferences ? "bg-[#687838]" : "bg-[#252F18]"
                        }`}
                        aria-pressed={prefs.preferences}
                      >
                        <motion.div
                          layout
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          className={`w-4 h-4 rounded-full bg-white shadow-xs ${
                            prefs.preferences ? "ml-auto" : "mr-auto"
                          }`}
                        />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action Buttons */}
              <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
                <div className="flex items-center justify-between sm:justify-start gap-3">
                  <button
                    type="button"
                    onClick={() => setIsCustomizing((c) => !c)}
                    className="text-xs font-semibold text-[#DBE4C7] hover:text-white underline underline-offset-4 transition-colors cursor-pointer"
                  >
                    {isCustomizing ? "Hide Options ▲" : "Customize Preferences ▼"}
                  </button>

                  <Link
                    href="/privacy"
                    className="text-xs text-[#8FA363] hover:text-[#DBE4C7] transition-colors"
                  >
                    Privacy Policy ↗
                  </Link>
                </div>

                <div className="flex items-center gap-2 justify-end">
                  {isCustomizing ? (
                    <button
                      type="button"
                      onClick={handleSavePreferences}
                      className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#687838] hover:bg-[#56642E] text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                    >
                      Save Preferences
                    </button>
                  ) : (
                    <>
                      <button
                        type="button"
                        onClick={handleEssentialOnly}
                        className="w-1/2 sm:w-auto px-4 py-2.5 rounded-xl bg-[#1C210E] hover:bg-[#252F18] text-[#DBE4C7] hover:text-white border border-[#353E20] font-semibold text-xs transition-colors cursor-pointer"
                      >
                        Reject Non-Essential
                      </button>
                      <button
                        type="button"
                        onClick={handleAcceptAll}
                        className="w-1/2 sm:w-auto px-5 py-2.5 rounded-xl bg-[#687838] hover:bg-[#56642E] text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                      >
                        Accept All
                      </button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
