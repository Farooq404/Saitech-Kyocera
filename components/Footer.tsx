import Logo from "./Logo";
import { site, navLinks, categories } from "@/lib/siteData";
import { IconPhone, IconMail, IconWhatsApp } from "./Icons";

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-blueDark text-white/70">
      <div className="container-xl py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="dark" className="mb-4" />
          <p className="text-sm leading-relaxed">
            Authorized Kyocera printer &amp; photocopier partner in Kurnool, Andhra Pradesh —
            genuine machines, consumables and dependable service.
          </p>
          <div className="flex items-center gap-3 mt-5">
            <a
              href={site.phoneHref}
              aria-label="Call"
              className="grid place-items-center w-9 h-9 rounded-full bg-white/10 hover:bg-accent-orange transition-colors"
            >
              <IconPhone className="w-4 h-4" />
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener"
              aria-label="WhatsApp"
              className="grid place-items-center w-9 h-9 rounded-full bg-white/10 hover:bg-accent-orange transition-colors"
            >
              <IconWhatsApp className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="grid place-items-center w-9 h-9 rounded-full bg-white/10 hover:bg-accent-orange transition-colors"
            >
              <IconMail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h5 className="text-white font-display font-semibold mb-4">Quick Links</h5>
          <ul className="space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-white transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-white font-display font-semibold mb-4">Our Range</h5>
          <ul className="space-y-2.5 text-sm">
            {categories.slice(0, 5).map((c) => (
              <li key={c.key}>
                <a href="#products" className="hover:text-white transition-colors">
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-white font-display font-semibold mb-4">Get In Touch</h5>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <svg className="w-4 h-4 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{site.address}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <IconPhone className="w-4 h-4 shrink-0" />
              <a href={site.phoneHref} className="hover:text-white transition-colors">
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <IconMail className="w-4 h-4 shrink-0" />
              <a href={`mailto:${site.email}`} className="hover:text-white transition-colors">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-xl py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <span>© {new Date().getFullYear()} Saitech Kyocera Services. All rights reserved.</span>
          <span>Authorized Kyocera Partner · Kurnool, Andhra Pradesh</span>
        </div>
      </div>
    </footer>
  );
}
