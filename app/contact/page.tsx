import { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/siteData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ContactForm from "./ContactForm";
import { IconPhone, IconMail, IconWhatsApp } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact Us | SaiTech Kyocera Services Kurnool",
  description:
    "Get in touch with SaiTech Kyocera Services in Kurnool for genuine Kyocera MFP & printer sales, original toner cartridges, fast on-site repair, and AMC contracts.",
};

export default function ContactPage() {
  const directionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=15.8302132,78.0390567&destination_place_id=ChIJg5l_8cTntTsRx0MKO-TOP_8";

  return (
    <>
      <Header />

      <main className="bg-soft min-h-screen pb-20">
        {/* Breadcrumb Header */}
        <div className="bg-white border-b border-line py-3.5">
          <div className="container-xl flex items-center gap-2 text-xs font-medium text-muted">
            <Link href="/" className="hover:text-brand-blue transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-ink font-semibold">Contact Us</span>
          </div>
        </div>

        {/* Contact Hero */}
        <section className="py-12 md:py-16 bg-white border-b border-line">
          <div className="container-xl text-center max-w-2xl mx-auto">
            <span className="eyebrow justify-center mb-4">Get In Touch</span>
            <h1 className="font-display font-extrabold text-brand-blueDark text-3xl sm:text-4xl md:text-[2.6rem] leading-tight">
              Let&apos;s Connect with Our Kurnool Team
            </h1>
            <p className="mt-4 text-muted text-base leading-relaxed">
              Have questions about Kyocera printers, original toner supplies, or need immediate machine service? Reach out to our certified team today.
            </p>
          </div>
        </section>

        {/* Main Content Grid: Form + Info Cards */}
        <section className="py-12 md:py-16">
          <div className="container-xl">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Interactive Contact Form */}
              <div className="lg:col-span-7 bg-white border border-line rounded-xl2 p-6 sm:p-10 shadow-card">
                <div className="mb-6">
                  <span className="text-xs font-display font-bold uppercase tracking-wider text-accent-green">
                    Quick Inquiry
                  </span>
                  <h2 className="font-display font-bold text-brand-blueDark text-2xl mt-1">
                    Send Us a Message
                  </h2>
                  <p className="text-sm text-muted mt-1">
                    Fill out the details below and our team will get back to you promptly.
                  </p>
                </div>

                <ContactForm />
              </div>

              {/* Right Column: Contact Details & Quick Links */}
              <div className="lg:col-span-5 space-y-6">
                {/* Store Card */}
                <div className="bg-white border border-line rounded-xl2 p-6 sm:p-8 shadow-card">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blueLight text-brand-blue text-xs font-display font-bold uppercase tracking-wider mb-6">
                    <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                    Authorized Kyocera Dealer
                  </div>

                  <h3 className="font-display font-bold text-ink text-xl mb-4">
                    SaiTech Kyocera Services
                  </h3>

                  <div className="space-y-4 text-sm text-ink/80">
                    <div className="flex items-start gap-3">
                      <div className="grid place-items-center w-9 h-9 rounded-lg bg-brand-blueLight text-brand-blue shrink-0 mt-0.5">
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
                      <div className="grid place-items-center w-9 h-9 rounded-lg bg-brand-blueLight text-brand-blue shrink-0 mt-0.5">
                        <IconPhone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block font-semibold text-brand-blueDark mb-0.5">Call Support</span>
                        <a href={site.phoneHref} className="text-brand-blue font-medium hover:underline text-base font-display">
                          {site.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="grid place-items-center w-9 h-9 rounded-lg bg-brand-blueLight text-brand-blue shrink-0 mt-0.5">
                        <IconWhatsApp className="w-4 h-4 text-accent-green" />
                      </div>
                      <div>
                        <span className="block font-semibold text-brand-blueDark mb-0.5">WhatsApp Inquiry</span>
                        <a
                          href={site.whatsapp}
                          target="_blank"
                          rel="noopener"
                          className="text-accent-green font-medium hover:underline text-base font-display"
                        >
                          Chat directly on WhatsApp
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="grid place-items-center w-9 h-9 rounded-lg bg-brand-blueLight text-brand-blue shrink-0 mt-0.5">
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
                      <div className="grid place-items-center w-9 h-9 rounded-lg bg-brand-blueLight text-brand-blue shrink-0 mt-0.5">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                      </div>
                      <div>
                        <span className="block font-semibold text-brand-blueDark mb-0.5">Store Hours</span>
                        <p className="text-muted leading-relaxed">Monday – Saturday: 9:30 AM – 8:00 PM</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-line">
                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-accent w-full justify-center !py-3.5 !text-sm"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="3 11 22 2 13 21 11 13 3 11" />
                      </svg>
                      Open in Google Maps
                    </a>
                  </div>
                </div>

                {/* Assurance Card */}
                <div className="bg-brand-blueDark text-white rounded-xl2 p-6 sm:p-7 shadow-card">
                  <h4 className="font-display font-bold text-lg mb-2">Our Promise to You</h4>
                  <ul className="space-y-2.5 text-xs text-white/85">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-green" />
                      <span>100% Genuine Kyocera machines and toner cartridges</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-green" />
                      <span>Factory-trained technicians for prompt troubleshooting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-green" />
                      <span>Free on-site installation and demo across Kurnool</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="mt-14">
              <div className="text-center mb-6">
                <span className="eyebrow justify-center mb-2">Location Map</span>
                <h3 className="font-display font-bold text-brand-blueDark text-2xl">
                  Visit Our Kurnool Store &amp; Service Point
                </h3>
              </div>
              <div className="w-full rounded-xl2 overflow-hidden border border-line shadow-card bg-white h-[420px] md:h-[480px]">
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
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
