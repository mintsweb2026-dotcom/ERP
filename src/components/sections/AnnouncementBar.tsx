"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        id="announcement-bar"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -40, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative bg-[#EDF2E2] border-b border-[#DBE4C7] px-3 sm:px-4 py-2 text-xs md:text-sm text-[#182012] font-sans z-50"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2.5 pr-10 sm:pr-0 text-left sm:text-center">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#687838] text-white uppercase tracking-wider shrink-0 shadow-2xs">
            v1.5.0
          </span>

          <span className="text-[#353E20] truncate max-w-[220px] xs:max-w-[300px] sm:max-w-none text-xs sm:text-sm">
            <strong className="font-semibold text-[#182012]">Dual-Theme Engine (Forest Dark &amp; Sage Light)</strong>, 18 Modules &amp; Enterprise Documentation now live.
          </span>

          <a
            href="#roadmap"
            className="text-[#687838] hover:text-[#515E2C] font-semibold underline underline-offset-2 shrink-0 hidden sm:inline-flex items-center gap-1 transition-colors"
          >
            <span>See roadmap</span>
            <span aria-hidden="true">→</span>
          </a>

          <button
            onClick={() => setVisible(false)}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-[#5A644D] hover:text-[#182012] hover:bg-[#DBE4C7]/60 rounded-lg cursor-pointer transition-colors"
            aria-label="Dismiss announcement"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
