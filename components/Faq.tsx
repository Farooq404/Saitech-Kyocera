"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { faqs, site } from "@/lib/siteData";
import { useScrollReveal } from "@/lib/useScrollReveal";

function FaqItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const bodyRef = useRef<HTMLDivElement>(null);

  // If this item starts open (e.g. the first FAQ), size its body
  // immediately on mount instead of waiting for a click.
  useEffect(() => {
    if (isOpen && bodyRef.current) {
      gsap.set(bodyRef.current, { height: "auto" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleToggle = () => {
    const el = bodyRef.current;
    if (!el) return onToggle();

    if (!isOpen) {
      gsap.set(el, { height: "auto" });
      const h = el.offsetHeight;
      gsap.fromTo(el, { height: 0 }, { height: h, duration: 0.35, ease: "power2.out" });
    } else {
      gsap.to(el, { height: 0, duration: 0.3, ease: "power2.inOut" });
    }
    onToggle();
  };

  return (
    <div
      className={`reveal-item rounded-xl2 border transition-colors overflow-hidden ${
        isOpen ? "border-accent-orange" : "border-line"
      }`}
    >
      <button
        onClick={handleToggle}
        className={`w-full flex items-center justify-between gap-4 text-left px-5 py-4 font-display font-semibold transition-colors ${
          isOpen ? "bg-accent-orange text-white" : "bg-white text-ink"
        }`}
      >
        <span>{q}</span>
        <span
          className={`shrink-0 grid place-items-center w-6 h-6 rounded-full text-lg leading-none transition-transform ${
            isOpen ? "rotate-45 bg-white/20" : "bg-brand-blueLight text-brand-blue"
          }`}
        >
          +
        </span>
      </button>
      <div ref={bodyRef} style={{ height: 0 }} className="overflow-hidden bg-white">
        <p className="px-5 py-4 text-sm text-muted leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useScrollReveal<HTMLDivElement>({ selector: ".reveal-item", stagger: 0.08 });

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container-xl">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="eyebrow justify-center mb-4">FAQ&apos;s</span>
          <h2 className="font-display font-extrabold text-brand-blueDark text-2xl md:text-3xl">
            Common questions about our Kyocera services
          </h2>
          <p className="mt-3 text-muted">
            Can&apos;t find what you&apos;re looking for? Reach us directly at{" "}
            <strong className="text-ink">{site.email}</strong> or{" "}
            <strong className="text-ink">{site.phone}</strong>.
          </p>
        </div>

        <div ref={ref} className="max-w-2xl mx-auto space-y-4">
          {faqs.map((f, i) => (
            <FaqItem
              key={f.q}
              q={f.q}
              a={f.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
