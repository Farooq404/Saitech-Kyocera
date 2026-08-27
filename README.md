# Saitech Kyocera Services — Website (Next.js + TypeScript + Tailwind + GSAP)

A redesign of the original static site, rebuilt as a modern, animated
Next.js app. The colour palette, layout rhythm and imagery style are
modelled on the reference "Tirth Office Automation" design (deep blue +
orange + green, category icon row, stats strip, product cards, testimonial
cards, FAQ accordion) while all copy/content stays true to **Saitech
Kyocera Services** (Kurnool, Andhra Pradesh) from the original site package.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** for styling (custom brand colors in `tailwind.config.ts`)
- **GSAP + ScrollTrigger** for scroll-reveal, counters, hero entrance and
  the FAQ accordion animation

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Project structure

```
app/
  layout.tsx        Root layout, fonts, metadata
  page.tsx           Home page — assembles all sections
  globals.css         Tailwind + shared utility classes (buttons, eyebrow, etc.)
components/
  Header.tsx          Sticky nav + mobile menu (GSAP entrance)
  AnnouncementBar.tsx  Blue "Kyocera India Distributor's..." strip
  Hero.tsx             Headline, feature bullets, product image (GSAP timeline)
  CategoryRow.tsx      8 product-category icon cards
  StatsBar.tsx         Animated counters (20K+, 12+ years, 100%)
  FeaturedProducts.tsx Product card grid
  WhyUs.tsx            4-point trust strip
  Testimonials.tsx     Sample review cards — replace with real reviews
  CtaBanner.tsx         "Not sure what to look for?" call-back banner
  Faq.tsx               Accordion with GSAP height animation
  Footer.tsx
  WhatsAppFloat.tsx     Floating WhatsApp button
  Icons.tsx             All inline SVG icons
lib/
  siteData.ts          All editable copy: phone, email, address, nav,
                         categories, stats, products, trust points,
                         testimonials, FAQs
  useScrollReveal.ts    Reusable GSAP scroll-reveal hook
public/images/
  printer-mfp.png       Cropped hero product image (from your uploaded hero-1.png)
  printer-lineup.png    Cropped product image (from your uploaded hero-2.png)
```

## Editing content

Almost everything text-based lives in **`lib/siteData.ts`** — phone number,
email, address, nav links, category list, stats, product cards, trust
points, testimonials and FAQs. Update that one file for most copy changes.

- **Phone / WhatsApp**: `site.phone`, `site.phoneHref`, `site.whatsapp` in `lib/siteData.ts`
- **Email**: `site.email`
- **Address**: `site.address`
- **Testimonials**: swap the placeholder entries in `testimonials` for real
  customer reviews before launch (they're clearly marked as samples in the UI).
- **Product images**: drop real product photography into `public/images/`
  and swap the `<Image src="...">` references in `Hero.tsx`,
  `CtaBanner.tsx` and `FeaturedProducts.tsx`.

## Notes

- Colors, spacing and radii are centralized in `tailwind.config.ts`
  (`brand.blue`, `accent.orange`, `accent.green`, etc.) — change them
  there to re-theme the whole site.
- All scroll animations degrade gracefully: elements are visible by
  default in `globals.css` and only fade/slide via the `.reveal-item`
  class when GSAP hydrates, and `prefers-reduced-motion` is respected.
- This build focuses on the home page (matching the reference
  screenshot). About/Products/Contact are wired as in-page anchors
  (`#about`, `#products`, `#contact`) — you can split them into real
  routes (`app/about/page.tsx`, etc.) later using the same components.
# Saitech-Kyocera
