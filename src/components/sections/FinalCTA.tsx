"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#1C210E] text-white p-6 sm:p-10 md:p-16 text-center shadow-2xl shadow-[#1C210E]/20 overflow-hidden border border-[#353E20]">
          {/* Ambient Olive Glows */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#687838]/25 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#869F53]/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#353E20] border border-[#515E2C] text-xs font-semibold text-[#C3D2A3] mb-5 sm:mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#A5BD79]" />
              <span>Scale with Confidence</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight mb-4 sm:mb-5 tracking-tight text-white"
            >
              Replace disconnected software with{" "}
              <span className="bg-gradient-to-r from-[#A5BD79] via-[#C3D2A3] to-[#EDF2E2] bg-clip-text text-transparent">
                one command center.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#DBE4C7] text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto"
            >
              Join ambitious teams that have unified their operations into a single,
              secure, role-based platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-md sm:max-w-none mx-auto"
            >
              <a
                href="#pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#182012] font-bold hover:bg-[#EDF2E2] transition-colors shadow-sm min-h-[44px]"
              >
                Request a Demo
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#features"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#353E20] text-white border border-[#515E2C] font-semibold hover:bg-[#414B24] transition-colors min-h-[44px]"
              >
                Explore Features
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
