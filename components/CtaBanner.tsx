"use client";

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
          {/* Decorative gradient blobs — brand blue + green, no stock photography */}
          <div className="pointer-events-none absolute -top-16 -left-16 w-64 h-64 rounded-full bg-brand-blue/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 w-72 h-72 rounded-full bg-accent-green/20 blur-3xl" />

          {/* Subtle geometric brand shapes */}
          <div className="pointer-events-none absolute top-6 right-8 w-20 h-20 rounded-2xl border border-white/10 rotate-12 hidden md:block" />
          <div className="pointer-events-none absolute bottom-8 left-8 w-14 h-14 rounded-full border border-accent-green/30 hidden md:block" />

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
              <a href={site.phoneHref} className="bg-white text-brand-blueDark btn-accent !bg-white !border-white hover:!bg-white/90 !text-brand-blueDark">
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
