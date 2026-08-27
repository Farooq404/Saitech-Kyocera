"use client";

import { categories } from "@/lib/siteData";
import { categoryIcons as icons } from "./Icons";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function CategoryRow() {
  const ref = useScrollReveal<HTMLDivElement>({ selector: ".cat-item", stagger: 0.06, y: 18 });

  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="container-xl">
        <div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4"
        >
          {categories.map((cat) => (
            <a
              key={cat.key}
              href={`#products`}
              className="cat-item group flex flex-col items-center gap-3 text-center px-3 py-6 rounded-xl2 border border-line hover:border-brand-blue hover:shadow-card transition-all bg-white"
            >
              <span className="grid place-items-center w-12 h-12 rounded-full bg-brand-blueLight text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                <span className="w-6 h-6 block">{icons[cat.key]}</span>
              </span>
              <span className="text-[0.83rem] font-display font-semibold text-ink/85">
                {cat.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
