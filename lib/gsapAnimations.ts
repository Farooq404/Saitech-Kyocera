"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Subtle scroll-linked parallax drift for decorative elements
 * (blurred blobs, background shapes). Not for content text.
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(
  speed = 0.15
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        yPercent: speed * 100,
        ease: "none",
        scrollTrigger: {
          trigger: el.parentElement ?? el,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    });

    return () => ctx.revert();
  }, [speed]);

  return ref;
}

/**
 * Animates a number counting up once its container scrolls into view.
 * Usage: <span ref={ref}>0</span> and pass the target end value.
 */
export function useCounterUp<T extends HTMLElement = HTMLSpanElement>(
  end: number,
  opts: { duration?: number; suffix?: string; start?: string } = {}
) {
  const ref = useRef<T | null>(null);
  const { duration = 1.4, suffix = "", start = "top 90%" } = opts;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const counter = { val: 0 };
    const ctx = gsap.context(() => {
      gsap.to(counter, {
        val: end,
        duration,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start, once: true },
        onUpdate: () => {
          el.textContent = Math.round(counter.val) + suffix;
        },
      });
    });

    return () => ctx.revert();
  }, [end, duration, suffix, start]);

  return ref;
}

/**
 * Thin progress bar (fixed, top: 0) that fills as the page scrolls.
 * Attach the returned ref to a 2–3px tall div inside the header.
 */
export function useScrollProgress<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.set(el, { scaleX: 0, transformOrigin: "left center" });
    const ctx = gsap.context(() => {
      gsap.to(el, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return ref;
}

/**
 * Desktop-only "magnetic" hover pull for primary CTA buttons.
 * No-op on touch devices.
 */
export function useMagneticButton<T extends HTMLElement = HTMLAnchorElement>(
  strength = 0.35
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(el, { x: x * strength, y: y * strength, duration: 0.3, ease: "power2.out" });
    };
    const handleLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.4, ease: "elastic.out(1, 0.4)" });
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [strength]);

  return ref;
}
