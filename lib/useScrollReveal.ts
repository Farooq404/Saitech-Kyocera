"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type RevealOptions = {
  /** CSS selector (relative to the container) for the items to stagger-reveal. */
  selector?: string;
  /** Pixels to travel while fading in. */
  y?: number;
  /** Stagger delay between each matched item, in seconds. */
  stagger?: number;
  /** Animation duration, in seconds. */
  duration?: number;
  /** ScrollTrigger start position. */
  start?: string;
};

/**
 * Attaches a GSAP + ScrollTrigger fade/slide-in reveal to a container.
 * Give the elements you want animated the class "reveal-item" (or pass
 * a custom selector) and spread the returned ref onto the container.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: RevealOptions = {}
) {
  const ref = useRef<T | null>(null);
  const {
    selector = ".reveal-item",
    y = 28,
    stagger = 0.12,
    duration = 0.7,
    start = "top 84%",
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll(selector);
    const animTargets = targets.length ? targets : el;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        animTargets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start,
          },
        }
      );
    }, el);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selector, y, stagger, duration, start]);

  return ref;
}
