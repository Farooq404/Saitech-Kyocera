"use client";

import Link from "next/link";
import { aboutInfo, site } from "@/lib/siteData";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { IconArrowRight, IconPhone } from "./Icons";

export default function AboutUs() {
  const headRef = useScrollReveal<HTMLDivElement>({ selector: ".about-reveal" });
  const cardsRef = useScrollReveal<HTMLDivElement>({ selector: ".highlight-card", stagger: 0.1 });

  return (
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-brand-blueLight/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-accent-green/5 blur-3xl" />

      <div className="container-xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Visual Showcase - Second Product Image Reference */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-xl2 bg-gradient-to-b from-brand-blueLight/40 to-soft p-6 sm:p-8 border border-line shadow-card flex flex-col items-center">
              <div className="w-full relative h-72 sm:h-80 flex items-center justify-center">
                <img
                  src="/products/img2-Kyocera-Ecosys-MA4000x.jpg"
                  alt="Kyocera Multifunction Printer & Copier"
                  className="max-h-full max-w-full object-contain mix-blend-multiply drop-shadow-lg"
                />
              </div>

              {/* Floating verified badge */}
              <div className="w-full mt-4 pt-4 border-t border-line/80 flex items-center justify-between text-xs">
                <span className="font-display font-bold text-brand-blueDark">
                  Authorized Partner
                </span>
                <span className="inline-flex items-center gap-1.5 text-accent-green font-semibold">
                  <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                  Kurnool Dealer
                </span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div ref={headRef} className="lg:col-span-7 order-1 lg:order-2">
            <span className="about-reveal eyebrow mb-3">About Us</span>
            <div className="about-reveal text-xs font-display font-bold uppercase tracking-wider text-accent-green mb-2">
              {aboutInfo.category}
            </div>
            <h2 className="about-reveal font-display font-extrabold text-brand-blueDark text-2xl sm:text-3xl md:text-[2.2rem] leading-tight mb-4">
              Your Trusted Kyocera Partner in Kurnool
            </h2>
            <p className="about-reveal text-muted text-base leading-relaxed mb-6">
              {aboutInfo.description}
            </p>

            <div className="about-reveal flex flex-wrap items-center gap-4 pt-2">
              <Link href="/contact" className="btn-primary">
                Contact Our Team <IconArrowRight className="w-4 h-4" />
              </Link>
              <a href={site.phoneHref} className="btn-secondary inline-flex items-center gap-2">
                <IconPhone className="w-4 h-4 text-brand-blue" />
                Call Direct
              </a>
            </div>
          </div>
        </div>

        {/* 4 Key Highlights Feature Cards */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 pt-12 border-t border-line">
          {aboutInfo.highlights.map((h, i) => (
            <div
              key={h.title}
              className="highlight-card bg-soft border border-line rounded-xl2 p-6 hover:shadow-card hover:bg-white transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-blueLight text-brand-blue flex items-center justify-center mb-4">
                {i === 0 && (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                )}
                {i === 1 && (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="m19 8 2 2 4-4" />
                  </svg>
                )}
                {i === 2 && (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="6" width="15" height="12" rx="1.5" />
                    <path d="M16 10h4l3 3v5h-7" />
                    <circle cx="6" cy="19.5" r="1.6" />
                    <circle cx="18.5" cy="19.5" r="1.6" />
                  </svg>
                )}
                {i === 3 && (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z" />
                  </svg>
                )}
              </div>
              <h3 className="font-display font-bold text-ink text-base mb-1.5">{h.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
