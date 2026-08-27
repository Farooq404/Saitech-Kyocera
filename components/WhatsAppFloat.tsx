"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { site } from "@/lib/siteData";
import { IconWhatsApp } from "./Icons";

export default function WhatsAppFloat() {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, delay: 1.4, ease: "back.out(1.7)" }
    );
  }, []);

  return (
    <a
      ref={ref}
      href={site.whatsapp}
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid place-items-center w-14 h-14 rounded-full bg-accent-green text-white shadow-cardHover hover:scale-110 transition-transform"
    >
      <IconWhatsApp className="w-7 h-7" />
    </a>
  );
}
