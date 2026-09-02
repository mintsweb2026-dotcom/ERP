"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import WindowFrame from "@/components/ui/WindowFrame";

interface FeatureSectionProps {
  eyebrow: string;
  headline: string;
  description: string;
  checklist: string[];
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
  large?: boolean;
  id?: string;
}

export default function FeatureSection({
  eyebrow,
  headline,
  description,
  checklist,
  imageSrc,
  imageAlt,
  reversed = false,
  large = false,
  id,
}: FeatureSectionProps) {
  return (
    <section
      className={`py-20 md:py-28 relative ${large ? "bg-charcoal/30 paper-grain" : ""}`}
      id={id}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`flex flex-col gap-12 md:gap-16 items-center ${
            reversed ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          {/* Text side */}
          <div className="flex-1 max-w-lg">
            <ScrollReveal direction={reversed ? "right" : "left"}>
              <span className="inline-block text-xs tracking-[0.2em] uppercase text-gold mb-4 font-sans">
                {eyebrow}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-beige leading-tight mb-5">
                {headline}
              </h2>
              <p className="text-sand/70 leading-relaxed mb-8 text-base">
                {description}
              </p>
              <ul className="space-y-3">
                {checklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-beige/80">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      className="mt-0.5 shrink-0 text-gold"
                    >
                      <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1" />
                      <path d="M5.5 9L8 11.5L12.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          {/* Image side */}
          <div className="flex-1 w-full">
            <ScrollReveal direction={reversed ? "left" : "right"} delay={0.15}>
              <WindowFrame src={imageSrc} alt={imageAlt} />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
