import type { Metadata } from "next";
import { CalendarDays, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Section, SectionIntro } from "@/components/section";
import { WhatsAppEnquiryForm } from "@/components/whatsapp-enquiry-form";
import { routeMeta, site } from "@/lib/site";

export const metadata: Metadata = routeMeta["/contact"];

export default function ContactPage() {
  const contactCards = [
    [Mail, "General Email", site.email],
    [Mail, "Support Email", site.supportEmail],
    [Mail, "Sales Email", site.salesEmail],
    [Phone, "Phone", site.phone],
    [MessageCircle, "WhatsApp CTA", "Start WhatsApp enquiry"],
    [CalendarDays, "Calendly Placeholder", "Schedule a product consultation"]
  ] as const;

  return (
    <>
      <section className="dark-band px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-mist">Contact</p>
          <h1 className="max-w-4xl text-balance text-4xl font-black sm:text-6xl">Request a demo, contact sales or schedule a Build Nest meeting</h1>
        </div>
      </section>
      <Section className="bg-white" innerClassName="grid gap-10 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <SectionIntro title="Lead form and demo request" body="Share your contact details, project scale and current workflow. The Build Nest team will follow up with the right demo path." />
          <WhatsAppEnquiryForm intent="Contact Sales" />
        </div>
        <div className="grid gap-5">
          {contactCards.map(([Icon, label, value]) => (
            <div key={String(label)} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <Icon className="h-6 w-6 text-aqua" />
              <p className="mt-4 text-sm font-bold uppercase tracking-[0.14em] text-slate-500">{String(label)}</p>
              <p className="mt-2 font-semibold text-copy">{String(value)}</p>
            </div>
          ))}
          {site.offices.map((office) => (
            <div key={office.name} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <MapPin className="h-6 w-6 text-aqua" />
              <p className="mt-4 text-sm font-bold uppercase tracking-[0.14em] text-slate-500">{office.name}</p>
              <p className="mt-2 font-semibold text-copy">{office.address}</p>
            </div>
          ))}
          <div className="grid min-h-60 place-items-center rounded-lg bg-ink p-6 text-center text-white">
            <div>
              <MapPin className="mx-auto h-8 w-8 text-mist" />
              <p className="mt-4 text-xl font-black">Google Maps Section</p>
              <p className="mt-2 text-sm text-white/62">Trivandrum and Kollam office locations for Build Nest support and operations.</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
