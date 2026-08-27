"use client";

import Image from "next/image";
import { site } from "@/lib/siteData";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function CtaBanner() {
  const ref = useScrollReveal<HTMLDivElement>({ selector: ".cta-item" });

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-xl">
        <div
          ref={ref}
          className="relative overflow-hidden rounded-xl2 bg-brand-blueDark px-6 py-14 md:px-16 md:py-20 text-center"
        >
          {/* decorative blobs */}
          <div className="pointer-events-none absolute -top-16 -left-16 w-64 h-64 rounded-full bg-brand-blue/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 w-72 h-72 rounded-full bg-accent-orange/20 blur-3xl" />

          {/* faint product image */}
          <div className="pointer-events-none absolute -right-6 bottom-0 w-64 md:w-96 opacity-20 hidden sm:block">
            <Image
              src="/images/printer-lineup.png"
              alt=""
              width={660}
              height={480}
              className="object-contain"
            />
          </div>

          {/* hand-drawn orange arrow accents */}
          <svg
            className="pointer-events-none absolute top-8 right-10 w-16 h-16 text-accent-orange hidden md:block"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          >
            <path d="M10 60 Q40 10 90 30" />
            <path d="M70 22 L92 30 L82 50" />
          </svg>
          <svg
            className="pointer-events-none absolute bottom-10 left-10 w-14 h-14 text-accent-orange hidden md:block"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          >
            <circle cx="50" cy="50" r="30" />
          </svg>

          <div className="relative z-10 max-w-xl mx-auto">
            <span className="cta-item eyebrow justify-center mb-4">Need Help Choosing?</span>
            <h2 className="cta-item font-display font-extrabold text-white text-2xl md:text-3xl leading-tight">
              Not sure what to look for?
            </h2>
            <p className="cta-item mt-3 text-white/75">
              Share your monthly print volume and requirements — our team will call you within 60
              minutes and recommend the right Kyocera model and service plan.
            </p>
            <div className="cta-item mt-8 flex flex-wrap justify-center gap-4">
              <a href={site.phoneHref} className="bg-white text-brand-blueDark btn-accent !bg-white !border-white hover:!bg-white/90">
                Get a Call
              </a>
              <a href={site.whatsapp} target="_blank" rel="noopener" className="btn-outline-white">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
