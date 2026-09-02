"use client";

interface SectionDividerProps {
  className?: string;
  withDiamond?: boolean;
}

export default function SectionDivider({ className = "", withDiamond = false }: SectionDividerProps) {
  if (withDiamond) {
    return (
      <div className={`flex items-center gap-3 max-w-6xl mx-auto px-6 ${className}`}>
        <div className="gold-hairline flex-1" />
        <div className="w-1.5 h-1.5 rotate-45 bg-[#687838]/40" />
        <div className="gold-hairline flex-1" />
      </div>
    );
  }

  return <div className={`gold-hairline max-w-6xl mx-auto ${className}`} />;
}
