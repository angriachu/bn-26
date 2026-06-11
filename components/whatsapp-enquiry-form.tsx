"use client";

import { Send } from "lucide-react";
import { Button } from "@/components/button";
import { site } from "@/lib/site";

type WhatsAppEnquiryFormProps = {
  intent?: string;
  compact?: boolean;
};

function openWhatsApp(message: string) {
  const url = `https://wa.me/${site.whatsappCountryCode}${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export function WhatsAppEnquiryForm({ intent = "Website Enquiry", compact = false }: WhatsAppEnquiryFormProps) {
  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const company = String(form.get("company") || "").trim();
    const email = String(form.get("email") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const companySize = String(form.get("companySize") || "").trim();
    const enquiryType = String(form.get("enquiryType") || intent).trim();
    const message = String(form.get("message") || "").trim();

    const lines = [
      "Build Nest Website Enquiry",
      `Type: ${enquiryType}`,
      name ? `Name: ${name}` : "",
      company ? `Company: ${company}` : "",
      email ? `Email: ${email}` : "",
      phone ? `Phone/WhatsApp: ${phone}` : "",
      companySize ? `Company Size: ${companySize}` : "",
      message ? `Requirement: ${message}` : "",
      `Page: ${window.location.href}`
    ].filter(Boolean);

    openWhatsApp(lines.join("\n"));
  }

  return (
    <form onSubmit={onSubmit} className={compact ? "grid gap-3" : "grid gap-4 rounded-lg border border-slate-200 bg-pearl p-6"}>
      <div className={compact ? "grid gap-3" : "grid gap-4 sm:grid-cols-2"}>
        <input name="name" required className={compact ? inputCompact : inputLarge} placeholder="Full name" />
        {!compact ? <input name="company" className={inputLarge} placeholder="Company" /> : null}
        <input name="email" type="email" className={compact ? inputCompact : inputLarge} placeholder={compact ? "Work email" : "Email"} />
        <input name="phone" required className={compact ? inputCompact : inputLarge} placeholder="Phone / WhatsApp" />
      </div>
      {compact ? (
        <select name="companySize" className={inputCompact} defaultValue="">
          <option value="" disabled>Company size</option>
          <option>1-25 users</option>
          <option>26-100 users</option>
          <option>100+ users</option>
        </select>
      ) : (
        <select name="enquiryType" className={inputLarge} defaultValue={intent}>
          <option>Request Demo</option>
          <option>Start Free</option>
          <option>Contact Sales</option>
          <option>Schedule Meeting</option>
          <option>{intent}</option>
        </select>
      )}
      <textarea
        name="message"
        className={compact ? "min-h-24 rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-aqua" : "min-h-32 rounded-md border border-slate-200 px-4 py-3 outline-none focus:border-aqua"}
        placeholder={compact ? "Tell us about your projects" : "What would you like to manage with Build Nest?"}
      />
      <Button type="submit" variant="dark" className="w-full">
        <Send className="h-4 w-4" /> Send to WhatsApp
      </Button>
    </form>
  );
}

export function WhatsAppQuickLink({
  className = "",
  children,
  "aria-label": ariaLabel
}: {
  className?: string;
  children: React.ReactNode;
  "aria-label"?: string;
}) {
  const text = "Hi Build Nest team, I want to enquire about Build Nest construction management software.";
  return (
    <a href={`https://wa.me/${site.whatsappCountryCode}${site.whatsappNumber}?text=${encodeURIComponent(text)}`} className={className} target="_blank" rel="noreferrer" aria-label={ariaLabel}>
      {children}
    </a>
  );
}

const inputCompact = "h-11 rounded-md border border-slate-200 px-3 text-sm outline-none focus:border-aqua";
const inputLarge = "h-12 rounded-md border border-slate-200 px-4 outline-none focus:border-aqua";
