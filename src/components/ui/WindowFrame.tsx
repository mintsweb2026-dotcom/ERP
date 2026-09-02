"use client";

import { ReactNode } from "react";
import Image from "next/image";

interface WindowFrameProps {
  children?: ReactNode;
  src?: string;
  alt?: string;
  className?: string;
}

export default function WindowFrame({
  children,
  src,
  alt = "Product screenshot",
  className = "",
}: WindowFrameProps) {
  return (
    <div className={`window-frame group rounded-2xl border border-[#E4E4E4] bg-white shadow-xl shadow-[#687838]/10 overflow-hidden ${className}`}>
      <div className="window-frame-bar bg-[#F0F0F0] border-b border-[#E4E4E4] px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between select-none">
        <div className="flex items-center gap-1 sm:gap-1.5">
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-rose-400 border border-rose-500/60" />
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-300 border border-amber-400/60" />
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#687838] border border-[#515E2C]" />
        </div>
        <div className="flex items-center gap-1.5 px-2 sm:px-3 py-0.5 rounded-md bg-white border border-[#E4E4E4] text-[10px] sm:text-[11px] text-[#5A644D] font-mono max-w-[180px] sm:max-w-xs truncate shadow-2xs">
          <Image
            src="/images/mints_erp_icon.png"
            alt="Mints Emblem"
            width={16}
            height={10}
            className="h-2 sm:h-2.5 w-auto object-contain shrink-0"
          />
          <span className="truncate">erp.mintsglobal.ae/command-center</span>
        </div>
        <span className="text-[10px] sm:text-[11px] font-semibold text-[#859177] font-sans">Mints ERP</span>
      </div>
      <div className="relative bg-[#F0F0F0]/40">
        {src ? (
          <Image
            src={src}
            alt={alt}
            width={1400}
            height={800}
            className="w-full h-auto object-contain"
            quality={92}
          />
        ) : (
          children
        )}
      </div>
    </div>
  );
}
