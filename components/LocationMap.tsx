import { site } from "@/lib/siteData";
import { IconPhone, IconMail, IconWhatsApp } from "./Icons";

export default function LocationMap() {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=15.8302132,78.0390567&destination_place_id=ChIJg5l_8cTntTsRx0MKO-TOP_8`;

  return (
    <section id="location" className="py-16 md:py-24 bg-soft border-t border-line">
      <div className="container-xl">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow mb-4">Visit Us</span>
          <h2 className="font-display font-extrabold text-brand-blueDark text-3xl md:text-[2.2rem] leading-tight">
            Our Experience Center &amp; Service Point
          </h2>
          <p className="mt-3 text-muted">
            Visit our authorized Kyocera showroom and service center in Kurnool for live machine demonstrations, consultations, and genuine supplies.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Store Info Card */}
          <div className="lg:col-span-5 bg-white border border-line rounded-xl2 p-6 sm:p-8 shadow-card flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blueLight text-brand-blue text-xs font-display font-bold uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                Store Open · Kurnool
              </div>

              <h3 className="font-display font-bold text-ink text-xl mb-4">
                SaiTech Kyocera Services
              </h3>

              <div className="space-y-4 text-sm text-ink/80">
                <div className="flex items-start gap-3">
                  <div className="grid place-items-center w-8 h-8 rounded-lg bg-brand-blueLight text-brand-blue shrink-0 mt-0.5">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <span className="block font-semibold text-brand-blueDark mb-0.5">Address</span>
                    <p className="text-muted leading-relaxed">{site.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="grid place-items-center w-8 h-8 rounded-lg bg-brand-blueLight text-brand-blue shrink-0 mt-0.5">
                    <IconPhone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-semibold text-brand-blueDark mb-0.5">Phone Support</span>
                    <a href={site.phoneHref} className="text-brand-blue font-medium hover:underline">
                      {site.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="grid place-items-center w-8 h-8 rounded-lg bg-brand-blueLight text-brand-blue shrink-0 mt-0.5">
                    <IconMail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-semibold text-brand-blueDark mb-0.5">Email</span>
                    <a href={`mailto:${site.email}`} className="text-brand-blue font-medium hover:underline">
                      {site.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="grid place-items-center w-8 h-8 rounded-lg bg-brand-blueLight text-brand-blue shrink-0 mt-0.5">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <span className="block font-semibold text-brand-blueDark mb-0.5">Working Hours</span>
                    <p className="text-muted leading-relaxed">Monday – Saturday: 9:30 AM – 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-line flex flex-wrap gap-3">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent flex-1 justify-center !py-3 !text-sm"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                </svg>
                Get Directions
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !py-3 !px-4 !text-sm inline-flex items-center gap-2"
                aria-label="WhatsApp Us"
              >
                <IconWhatsApp className="w-4 h-4 text-accent-green" />
                Chat
              </a>
            </div>
          </div>

          {/* Designed Map Container */}
          <div className="lg:col-span-7 rounded-xl2 overflow-hidden border border-line shadow-card bg-white relative h-[420px] md:h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.501591807314!2d78.0390567!3d15.8302132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb5e7c4f17f9903%3A0xff3ecae4530a43c7!2sSaiTech%20Kyocera%20services!5e0!3m2!1sen!2sin!4v1787719469467!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SaiTech Kyocera Services Location Map"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
