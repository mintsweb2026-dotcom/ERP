"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import WindowFrame from "@/components/ui/WindowFrame";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const TRUST_STATS = [
  { value: 18, label: "Integrated Business Modules", suffix: "+" },
  { value: 100, label: "Realtime Firestore Sync", suffix: "%" },
  { value: 5, label: "RBAC Clearance Levels", suffix: "-Tier" },
  { value: 0, label: "Third-Party Data Sync Lag", suffix: "ms" },
];

export default function Hero() {
  const [themeMode, setThemeMode] = useState<"dark" | "light">("dark");

  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20 md:pt-24 md:pb-32 light-dot-grid" id="hero">
      {/* Ambient background glows with olive #687838 tint */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#EDF2E2]/70 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-[-5%] w-[400px] h-[400px] bg-[#F0F0F0] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Eyebrow Pill with Official Logo Emblem */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#DBE4C7] bg-[#EDF2E2] text-xs font-semibold text-[#353E20] shadow-2xs">
            <Image
              src="/images/mints_erp_icon.png"
              alt="Mints ERP Logo"
              width={22}
              height={14}
              className="h-3.5 w-auto object-contain"
            />
            <span className="w-px h-3 bg-[#DBE4C7]" />
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A5BD79] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#687838]" />
            </span>
            <span>Enterprise Command Center v1.5 · Dual-Theme Engine</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center font-sans font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15] sm:leading-[1.12] text-[#182012] max-w-4xl mx-auto tracking-tight"
        >
          One Command Center for{" "}
          <span className="text-[#687838] underline decoration-[#DBE4C7] underline-offset-8">
            Global Operations.
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-sm sm:text-base md:text-lg text-[#5A644D] max-w-2xl mx-auto mt-5 sm:mt-6 leading-relaxed"
        >
          Consolidate employee directories, attendance, Kanban sales funnels, billable capacity, and Discord automations in a
          secure, serverless operations hub powered by Next.js 16 (Turbopack) and Cloud Firestore.
        </motion.p>

        {/* Dual CTAs (full-width stacked on base, inline from sm:) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mt-8 md:mt-10 w-full max-w-md sm:max-w-none mx-auto"
        >
          <Button variant="primary" size="lg" href="#pricing" className="w-full sm:w-auto justify-center">
            Request a Live Demo
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-0.5">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Button>
          <Button variant="ghost" size="lg" href="#features" className="w-full sm:w-auto justify-center">
            Explore Features
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="ml-0.5">
              <path d="M7 2V12M7 12L3 8M7 12L11 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Button>
        </motion.div>

        {/* Hero Real Screenshot with Floating Badges & Dual Theme Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 md:mt-16 relative"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute -inset-2 bg-gradient-to-b from-[#687838]/15 via-[#EDF2E2]/20 to-transparent rounded-3xl blur-xl pointer-events-none" />

          {/* Interactive Dual-Theme Preview Pill */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3 px-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#687838] animate-pulse" />
              <span className="text-xs font-bold text-[#182012]">Interactive Theme Preview:</span>
              <span className="text-xs text-[#5A644D] font-mono hidden xs:inline">
                {themeMode === "dark" ? "Signature Forest Dark (#0a0e0b)" : "High-Contrast Sage Cream (#f5f7f4)"}
              </span>
            </div>
            <div className="inline-flex p-1 rounded-xl bg-[#F0F0F0] border border-[#E4E4E4] self-start sm:self-auto">
              <button
                onClick={() => setThemeMode("dark")}
                className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  themeMode === "dark"
                    ? "bg-[#182012] text-white shadow-xs"
                    : "text-[#5A644D] hover:text-[#182012]"
                }`}
              >
                <span>🌙</span> Forest Dark
              </button>
              <button
                onClick={() => setThemeMode("light")}
                className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  themeMode === "light"
                    ? "bg-white text-[#182012] shadow-xs border border-[#DBE4C7]"
                    : "text-[#5A644D] hover:text-[#182012]"
                }`}
              >
                <span>☀️</span> Sage Light
              </button>
            </div>
          </div>

          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={themeMode}
                initial={{ opacity: 0.8, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0.8, filter: "blur(4px)" }}
                transition={{ duration: 0.2 }}
              >
                <WindowFrame
                  src={themeMode === "dark" ? "/images/Screenshot1.png" : "/images/Screenshot2.png"}
                  alt={`Mints Global ERP Command Center Dashboard Interface (${themeMode === "dark" ? "Signature Dark Theme" : "Sage Light Theme"})`}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Floating Framer Motion Badge 1 (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="hidden lg:flex items-center gap-3 p-3.5 rounded-2xl bg-white/95 border border-[#E4E4E4] shadow-xl shadow-[#687838]/10 backdrop-blur-md absolute -bottom-6 -left-6 z-20"
          >
            <div className="w-10 h-10 rounded-xl bg-[#EDF2E2] border border-[#DBE4C7] flex items-center justify-center text-[#687838]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#687838] animate-pulse" />
                <span className="text-xs font-bold text-[#182012]">Firestore Realtime Sync</span>
              </div>
              <p className="text-[11px] text-[#5A644D]">Live presence &amp; shift telemetry active</p>
            </div>
          </motion.div>

          {/* Floating Framer Motion Badge 2 (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="hidden lg:flex items-center gap-3 p-3.5 rounded-2xl bg-white/95 border border-[#E4E4E4] shadow-xl shadow-[#687838]/10 backdrop-blur-md absolute -top-6 -right-6 z-20"
          >
            <div className="w-10 h-10 rounded-xl bg-[#F6F8F1] border border-[#DBE4C7] flex items-center justify-center text-[#687838]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L20 7V12C20 17 16.5 21 12 22C7.5 21 4 17 4 12V7L12 2Z" stroke="currentColor" strokeWidth="2" />
                <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <div className="text-xs font-bold text-[#182012]">Admin SDK Hardened</div>
              <p className="text-[11px] text-[#5A644D]">Zero clock-skew &amp; server token guard</p>
            </div>
          </motion.div>
        </motion.div>

        {/* 4-Item Trust Metric Grid using #F0F0F0 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {TRUST_STATS.map((stat, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-[#F0F0F0] border border-[#E4E4E4] text-center hover:border-[#687838] transition-colors shadow-2xs"
              >
                <div className="font-mono text-2xl md:text-3xl font-bold text-[#182012] tabular-nums">
                  <AnimatedCounter target={stat.value} />
                  <span className="text-[#687838] text-lg ml-0.5">{stat.suffix}</span>
                </div>
                <div className="text-xs text-[#5A644D] mt-1 font-sans">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
