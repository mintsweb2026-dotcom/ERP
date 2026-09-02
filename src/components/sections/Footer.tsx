"use client";

import Image from "next/image";

const FOOTER_LINKS = {
  Product: [
    { label: "Features", href: "/#features" },
    { label: "Compare Alternatives", href: "/compare" },
    { label: "Plans & Pricing", href: "/pricing" },
    { label: "Product Changelog", href: "/changelog" },
    { label: "Trust & Security", href: "/security" },
    { label: "Help Center", href: "/help-center" },
  ],
  Regions: [
    { label: "Global / UAE", href: "/" },
    { label: "United Kingdom (£)", href: "/uk" },
    { label: "India (₹)", href: "/india" },
    { label: "European Union (€)", href: "/eu" },
  ],
  Company: [
    { label: "About Mints Global", href: "https://mintsglobal.ae/about" },
    { label: "Our Services", href: "https://mintsglobal.ae/services" },
    { label: "Contact Us", href: "https://mintsglobal.ae/contact" },
  ],
  Legal: [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Proprietary License", href: "/license" },
    { label: "Accessibility Statement", href: "/accessibility" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#F0F0F0] border-t border-[#E4E4E4] text-[#5A644D] relative" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="mb-5">
              <Image
                src="/images/mints_erp_flat.png"
                alt="Mints ERP — Smarter Operations. Together."
                width={280}
                height={86}
                className="h-12 sm:h-14 md:h-16 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-[#5A644D] leading-relaxed max-w-xs mb-4">
              A state-of-the-art enterprise resource planning system by Mints Global,
              designed to centralize and automate core business operations.
            </p>
            <div className="text-xs text-[#5A644D] space-y-1 mb-6 font-medium">
              <p>Office #315, 3rd Floor, Bank Street Building</p>
              <p>Bur Dubai, Dubai, UAE</p>
              <p className="text-[#687838] font-semibold">info@mintsglobal.ae</p>
            </div>
            {/* Social Icons (Min 44x44px tap targets, flex-wrap) */}
            <div className="flex flex-wrap items-center gap-2.5">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/mints-dubai"
                className="w-11 h-11 rounded-xl bg-white border border-[#E4E4E4] flex items-center justify-center text-[#859177] hover:text-[#687838] hover:border-[#687838] transition-colors shadow-2xs"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="2" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M6 8V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M6 6V6.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M10 12V9.5C10 8.67 10.67 8 11.5 8C12.33 8 13 8.67 13 9.5V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M10 8V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/mints.global/"
                className="w-11 h-11 rounded-xl bg-white border border-[#E4E4E4] flex items-center justify-center text-[#859177] hover:text-[#687838] hover:border-[#687838] transition-colors shadow-2xs"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="2" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="9" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="13.5" cy="4.5" r="1" fill="currentColor" />
                </svg>
              </a>
              {/* X / Twitter */}
              <a
                href="https://twitter.com/mintsglobal"
                className="w-11 h-11 rounded-xl bg-white border border-[#E4E4E4] flex items-center justify-center text-[#859177] hover:text-[#687838] hover:border-[#687838] transition-colors shadow-2xs"
                aria-label="X / Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M14.25 2.25H16.5L11.58 7.875L17.37 15.75H12.84L9.29 11.05L5.23 15.75H2.98L8.24 9.735L2.73 2.25H7.38L10.59 6.54L14.25 2.25ZM13.46 14.41H14.71L6.68 3.51H5.34L13.46 14.41Z" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-sans font-bold text-sm text-[#182012] mb-3 sm:mb-4">{category}</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="min-h-[36px] flex items-center text-[#5A644D] hover:text-[#687838] transition-colors"
                      {...(link.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Strip */}
        <div className="border-t border-[#E4E4E4] mt-10 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#859177] text-center sm:text-left">
          <p>© {new Date().getFullYear()} Mints Global. All rights reserved.</p>
          <div className="flex flex-wrap justify-center items-center gap-4 text-xs">
            <span>UAE FTA VAT Compliant Invoicing</span>
            <span>·</span>
            <span>GDPR Ready</span>
            <span>·</span>
            <span>ISO 27001 Aligned</span>
            <span>·</span>
            <span className="text-[#687838] font-bold">SMARTER OPERATIONS. TOGETHER.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
