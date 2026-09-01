"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { site, trustBadges } from "@/lib/siteData";
import { useParallax } from "@/lib/gsapAnimations";
import { IconArrowRight } from "./Icons";

const features = [
  "Genuine Kyocera hardware & consumables",
  "On-site installation & setup support",
  "Certified technicians with factory-certified training",
  "Flexible AMC & service plans",
];

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);
  const blobA = useParallax<HTMLDivElement>(0.12);
  const blobB = useParallax<HTMLDivElement>(-0.1);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(".hero-eyebrow", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5 })
        .fromTo(".hero-title-line", { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.12 }, "-=0.25")
        .fromTo(".hero-feature", { opacity: 0, x: -16 }, { opacity: 1, x: 0, duration: 0.4, stagger: 0.1 }, "-=0.25")
        .fromTo(".hero-cta", { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.2")
        .fromTo(".hero-badge", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.4, stagger: 0.08 }, "-=0.2")
        .fromTo(
          ".hero-shape",
          { opacity: 0, scale: 0.7, rotate: -8 },
          { opacity: 1, scale: 1, rotate: 0, duration: 0.9, stagger: 0.15 },
          "-=0.7"
        );

      // Gentle continuous float on the abstract brand shapes (no product photo)
      gsap.to(".hero-shape", {
        y: -14,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: { each: 0.4, from: "random" },
        delay: 1.1,
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="home" className="relative overflow-hidden bg-white">
      {/* Parallax brand-color blobs — no stock photography anywhere */}
      <div
        ref={blobA}
        className="pointer-events-none absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-brand-blueLight blur-3xl opacity-70"
      />
      <div
        ref={blobB}
        className="pointer-events-none absolute bottom-0 left-0 w-[320px] h-[320px] rounded-full bg-accent-greenLight blur-3xl"
      />

      <div className="container-xl relative py-16 md:py-24">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          {/* ── Text content ── */}
          <div>
            <span className="hero-eyebrow eyebrow mb-4">Authorized Kyocera Partner — Kurnool</span>
            <h1 className="font-display font-extrabold text-brand-blueDark text-[2.2rem] sm:text-[2.7rem] lg:text-[3.1rem] leading-[1.12] tracking-tight overflow-hidden">
              <span className="hero-title-line block">Genuine Kyocera machines,</span>
              <span className="hero-title-line block">
                backed by <span className="text-accent-green">real service</span>
              </span>
            </h1>
            <ul className="mt-6 space-y-2.5">
              {features.map((f) => (
                <li
                  key={f}
                  className="hero-feature flex items-center gap-2.5 text-[0.98rem] font-medium text-ink/85"
                >
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

          {/* ── Abstract, code-drawn brand shapes (no product photo) ── */}
          <div className="relative h-[360px] sm:h-[440px] hidden sm:block">
            <div className="hero-shape absolute top-4 right-6 w-40 h-40 rounded-3xl bg-brand-blue/10 border border-brand-blue/20 rotate-6" />
            <div className="hero-shape absolute top-24 left-2 w-28 h-28 rounded-2xl bg-accent-green/15 border border-accent-green/25 -rotate-6" />
            <div className="hero-shape absolute bottom-10 right-16 w-24 h-24 rounded-full bg-brand-blueDark/90 grid place-items-center shadow-cardHover">
              <span className="text-white font-display font-extrabold text-sm text-center leading-tight">
                100%<br />Genuine
              </span>
            </div>
            <div className="hero-shape absolute bottom-0 left-10 w-48 h-32 rounded-2xl bg-white border border-line shadow-card p-4 flex flex-col justify-center">
              <span className="text-[11px] font-display font-bold uppercase tracking-wider text-accent-green">
                Official Partner
              </span>
              <span className="font-display font-bold text-brand-blueDark text-sm mt-1">
                Authorized Kyocera Dealer
              </span>
            </div>
          </div>
        </div>

        {/* Trust badges row — no invented stats */}
        <div className="mt-14 pt-10 border-t border-line grid sm:grid-cols-3 gap-6">
          {trustBadges.map((b) => (
            <div key={b.title} className="hero-badge flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-accent-green shrink-0" />
              <div>
                <p className="text-[11px] font-display font-bold uppercase tracking-wider text-accent-green">
                  {b.badge}
                </p>
                <p className="font-display font-semibold text-ink text-sm mt-0.5">{b.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
