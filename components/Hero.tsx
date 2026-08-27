"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { site } from "@/lib/siteData";
import { IconArrowRight } from "./Icons";

const features = [
  "Enhanced Workplace Productivity",
  "Excellent Image Quality",
  "Advanced Security Protection",
  "Environmentally Friendly",
];

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(".hero-eyebrow", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5 })
        .fromTo(".hero-title", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.25")
        .fromTo(
          ".hero-feature",
          { opacity: 0, x: -16 },
          { opacity: 1, x: 0, duration: 0.4, stagger: 0.1 },
          "-=0.35"
        )
        .fromTo(".hero-cta", { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.2")
        .fromTo(
          ".hero-image",
          { opacity: 0, scale: 0.92, x: -20 },
          { opacity: 1, scale: 1, x: 0, duration: 0.9 },
          "-=0.9"
        );

      // gentle continuous float on the product image
      gsap.to(".hero-image", {
        y: -12,
        duration: 2.6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.2,
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="home" className="relative overflow-hidden bg-white">
      {/* soft decorative backdrop */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-brand-blueLight blur-3xl opacity-70" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[320px] h-[320px] rounded-full bg-accent-green/10 blur-3xl" />

      <div className="container-xl relative py-14 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="hero-image relative w-full max-w-[560px] aspect-[780/540]">
              <Image
                src="/images/printer-mfp.png"
                alt="Kyocera multifunction printer with print samples"
                fill
                priority
                className="object-contain drop-shadow-xl"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="hero-eyebrow eyebrow mb-4">Entry Level All-Rounder</span>
            <h1 className="hero-title font-display font-extrabold text-brand-blueDark text-[2.1rem] sm:text-[2.6rem] lg:text-[2.9rem] leading-[1.15] tracking-tight">
              Built for every business, ready from day one
            </h1>
            <ul className="mt-6 space-y-2.5">
              {features.map((f) => (
                <li key={f} className="hero-feature flex items-center gap-2.5 text-[0.98rem] font-medium text-ink/85">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-green shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="hero-cta mt-8 flex flex-wrap items-center gap-4">
              <a href="#products" className="btn-primary">
                Explore Our Range <IconArrowRight />
              </a>
              <a href={site.phoneHref} className="btn-accent">
                Get a Call Back
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
