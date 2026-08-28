"use client";

import Link from "next/link";
import { products } from "@/lib/siteData";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { IconArrowRight } from "./Icons";

export default function FeaturedProducts() {
  const headRef = useScrollReveal<HTMLDivElement>({ selector: ".head-item" });
  const gridRef = useScrollReveal<HTMLDivElement>({ selector: ".prod-item", stagger: 0.1 });

  return (
    <section id="products" className="py-16 md:py-24 bg-white">
      <div className="container-xl">
        <div ref={headRef} className="max-w-2xl mb-12">
          <span className="head-item eyebrow mb-4">Our Range</span>
          <h2 className="head-item font-display font-extrabold text-brand-blueDark text-3xl md:text-[2.2rem] leading-tight">
            Kyocera machines built for every workload
          </h2>
          <p className="head-item mt-3 text-muted">
            From compact desktop printers to high-volume production-grade MFPs — explore the
            categories our Kurnool team stocks, installs and services.
          </p>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="prod-item group bg-white border border-line rounded-xl2 p-6 hover:shadow-cardHover hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
            >
              {p.badge && (
                <span className="self-start mb-4 text-[11px] font-display font-bold uppercase tracking-wide bg-accent-green text-white px-2.5 py-1 rounded-full">
                  {p.badge}
                </span>
              )}
              {p.image ? (
                <div className="w-full h-48 mb-5 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center group-hover:bg-brand-blueLight/30 transition-colors">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="grid place-items-center w-14 h-14 rounded-xl bg-brand-blueLight text-brand-blue mb-5 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9V3h12v6" />
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                    <rect x="6" y="14" width="12" height="8" />
                  </svg>
                </div>
              )}
              <span className="text-[0.72rem] font-display font-bold uppercase tracking-wider text-accent-green mb-1.5">
                {p.category}
              </span>
              <h3 className="font-display font-bold text-ink text-lg leading-snug mb-2 group-hover:text-brand-blue transition-colors">
                {p.name}
              </h3>
              <p className="text-sm text-muted leading-relaxed flex-1 line-clamp-3 mb-4">{p.description}</p>
              <span className="mt-auto inline-flex items-center gap-1.5 font-display font-semibold text-sm text-brand-blue group-hover:gap-2.5 transition-all">
                View Details <IconArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary">
            Enquire About Products
          </a>
        </div>
      </div>
    </section>
  );
}
