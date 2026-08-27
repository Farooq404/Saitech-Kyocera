"use client";

import { useState } from "react";
import { site } from "@/lib/siteData";
import { IconWhatsApp } from "@/components/Icons";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "New Kyocera Printer / MFP Purchase",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp Message URL as fallback/direct send
    const text = `*New Website Inquiry - SaiTech Kyocera Services*%0A%0A*Name:* ${encodeURIComponent(
      formData.name
    )}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Email:* ${encodeURIComponent(
      formData.email || "N/A"
    )}%0A*Requirement:* ${encodeURIComponent(formData.serviceType)}%0A*Message:* ${encodeURIComponent(
      formData.message || "Please call me back regarding this inquiry."
    )}`;

    // Open WhatsApp
    window.open(`https://wa.me/919949410109?text=${text}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-8 px-4 bg-brand-blueLight/40 rounded-xl border border-brand-blueLight">
        <div className="w-12 h-12 rounded-full bg-accent-green/20 text-accent-green flex items-center justify-center mx-auto mb-3">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-display font-bold text-brand-blueDark text-xl mb-1">
          Thank you for reaching out!
        </h3>
        <p className="text-sm text-muted mb-6">
          Your inquiry has been prepared. If WhatsApp didn&apos;t open automatically, you can chat with us directly or call our store.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener"
            className="btn-secondary !py-2.5 !px-4 text-xs inline-flex items-center gap-1.5"
          >
            <IconWhatsApp className="w-4 h-4 text-accent-green" />
            Open WhatsApp
          </a>
          <a
            href={site.phoneHref}
            className="btn-accent !py-2.5 !px-4 text-xs"
          >
            Call {site.phone}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-ink mb-1.5">
            Your Name <span className="text-accent-orange">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Ramesh Kumar"
            className="w-full px-4 py-3 rounded-xl border border-line bg-soft text-sm text-ink focus:bg-white focus:border-brand-blue focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-ink mb-1.5">
            Phone Number <span className="text-accent-orange">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="w-full px-4 py-3 rounded-xl border border-line bg-soft text-sm text-ink focus:bg-white focus:border-brand-blue focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-ink mb-1.5">
            Email Address (Optional)
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="office@example.com"
            className="w-full px-4 py-3 rounded-xl border border-line bg-soft text-sm text-ink focus:bg-white focus:border-brand-blue focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label htmlFor="serviceType" className="block text-xs font-semibold text-ink mb-1.5">
            Requirement / Service <span className="text-accent-orange">*</span>
          </label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-line bg-soft text-sm text-ink focus:bg-white focus:border-brand-blue focus:outline-none transition-colors cursor-pointer"
          >
            <option value="New Kyocera Printer / MFP Purchase">New Kyocera Printer / MFP Purchase</option>
            <option value="Original Toner & Cartridge Supply">Original Toner &amp; Cartridge Supply</option>
            <option value="Photocopier Repair / Service Call">Photocopier Repair / Service Call</option>
            <option value="Annual Maintenance Contract (AMC)">Annual Maintenance Contract (AMC)</option>
            <option value="Spare Parts & Consumables">Spare Parts &amp; Consumables</option>
            <option value="General Inquiry / Other">General Inquiry / Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-ink mb-1.5">
          Message / Requirement Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your printer model, monthly print volume, or any specific assistance needed..."
          className="w-full px-4 py-3 rounded-xl border border-line bg-soft text-sm text-ink focus:bg-white focus:border-brand-blue focus:outline-none transition-colors resize-none"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="btn-accent w-full justify-center !py-3.5 !text-base shadow-sm inline-flex items-center gap-2"
        >
          <IconWhatsApp className="w-5 h-5" />
          Send Inquiry via WhatsApp
        </button>
        <p className="text-center text-[11px] text-muted mt-2.5">
          Our Kurnool technicians usually respond within 60 minutes during store hours.
        </p>
      </div>
    </form>
  );
}
