"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Logo from "./Logo";
import { site, navLinks } from "@/lib/siteData";
import { IconPhone, IconMail } from "./Icons";
import { useScrollProgress } from "@/lib/gsapAnimations";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const progressRef = useScrollProgress<HTMLDivElement>();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!headerRef.current) return;
    gsap.fromTo(
      headerRef.current,
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
    );
  }, []);

  return (
    <>
      {/* Top info bar */}
      <div className="hidden md:block bg-brand-blueDark text-white/85 text-[13px]">
        <div className="container-xl flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <a href={site.phoneHref} className="flex items-center gap-2 hover:text-white transition-colors">
              <IconPhone className="w-3.5 h-3.5" />
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <IconMail className="w-3.5 h-3.5" />
              {site.email}
            </a>
          </div>
        </div>
      </div>

      <header
        ref={headerRef}
        className={`sticky top-0 z-50 bg-white transition-shadow ${
          scrolled ? "shadow-card" : ""
        }`}
      >
        {/* Scroll progress bar */}
        <div ref={progressRef} className="absolute left-0 -bottom-[2px] h-[2px] w-full bg-accent-green" />
        <div className="container-xl flex items-center justify-between py-3.5">
          {/* Logo */}
          <Logo variant="light" className="shrink-0" />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-display font-medium text-[0.92rem] text-ink/80 hover:text-brand-blue transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="text-right leading-tight">
              <span className="block text-[11px] text-muted">Call us now</span>
              <a href={site.phoneHref} className="block font-display font-bold text-brand-blueDark text-sm">
                {site.phone}
              </a>
            </div>
            <a href={site.phoneHref} className="btn-accent !py-3 !px-6 !text-[0.85rem]">
              Get a Call Back
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid place-items-center w-10 h-10 rounded-md border border-line"
          >
            <div className="w-5 space-y-1.5">
              <span
                className={`block h-0.5 bg-brand-blueDark transition-transform ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span className={`block h-0.5 bg-brand-blueDark transition-opacity ${open ? "opacity-0" : ""}`} />
              <span
                className={`block h-0.5 bg-brand-blueDark transition-transform ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile nav panel */}
        <div
          className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out border-t border-line ${
            open ? "max-h-96" : "max-h-0"
          }`}
        >
          <nav className="container-xl flex flex-col py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2.5 font-display font-medium text-ink/85"
              >
                {link.label}
              </a>
            ))}
            <a href={site.phoneHref} className="btn-accent mt-2 justify-center">
              Get a Call Back
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
