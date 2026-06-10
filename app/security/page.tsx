import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { AppScreenshotFrame } from "@/components/product-visuals";
import { Section, SectionIntro } from "@/components/section";
import { securityItems, routeMeta } from "@/lib/site";

export const metadata: Metadata = routeMeta["/security"];

export default function SecurityPage() {
  return (
    <>
      <section className="dark-band px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-mist">Security</p>
          <h1 className="max-w-4xl text-balance text-4xl font-black sm:text-6xl">Enterprise-minded security for construction data and teams</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">Build Nest is structured around tenant isolation, secure authentication, role permissions, auditability and data ownership.</p>
        </div>
      </section>
      <Section className="bg-white">
        <SectionIntro title="Security and governance controls" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {securityItems.map(([title, body]) => (
            <div key={title} className="rounded-lg border border-slate-200 bg-pearl p-6">
              <ShieldCheck className="h-7 w-7 text-aqua" />
              <h2 className="mt-5 text-xl font-black text-copy">{title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{body}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section className="dark-band text-white" innerClassName="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-mist">Secure Access</p>
          <h2 className="text-3xl font-black sm:text-5xl">WhatsApp OTP login keeps field onboarding fast and controlled</h2>
          <p className="mt-5 leading-8 text-white/70">
            Build Nest gives mobile-first construction teams a familiar sign-in path while keeping workspace access tied to tenant, role and admin controls.
          </p>
        </div>
        <AppScreenshotFrame src="/screenshots/login.png" title="Build Nest WhatsApp OTP login screen" />
      </Section>
    </>
  );
}
