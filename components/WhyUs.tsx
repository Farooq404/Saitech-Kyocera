"use client";

import { trustPoints } from "@/lib/siteData";
import { trustIcons } from "./Icons";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function WhyUs() {
  const ref = useScrollReveal<HTMLDivElement>({ selector: ".trust-item", stagger: 0.1 });

  return (
    <section className="py-14 bg-soft">
      <div className="container-xl">
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((t, i) => (
            <div key={t.title} className="trust-item flex items-start gap-4">
              <span className="grid place-items-center w-11 h-11 rounded-full bg-accent-green/10 text-accent-green shrink-0">
                <span className="w-5 h-5 block">{trustIcons[i]}</span>
              </span>
              <div>
                <h4 className="font-display font-bold text-ink text-[0.95rem]">{t.title}</h4>
                <p className="text-sm text-muted mt-0.5">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
