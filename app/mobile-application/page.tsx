import type { Metadata } from "next";
import { Bell, CheckCircle2, Download } from "lucide-react";
import { MobileScreenshotGallery, PhoneMockups } from "@/components/product-visuals";
import { Section, SectionIntro } from "@/components/section";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { appPersonas, routeMeta } from "@/lib/site";

export const metadata: Metadata = routeMeta["/mobile-application"];

export default function MobileApplicationPage() {
  const features = ["Attendance", "Task Updates", "Material Requests", "Project Updates", "Reports", "Notifications"];
  return (
    <>
      <section className="dark-band px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <FadeIn>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-mist">Mobile Application</p>
            <h1 className="text-balance text-4xl font-black sm:text-6xl">Site execution, approvals and reporting from the field</h1>
            <p className="mt-6 text-lg leading-8 text-white/70">Build Nest mobile experiences help engineers, supervisors and management teams update live construction data without waiting for office paperwork.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <span className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-5 text-sm font-bold text-copy"><Download className="h-4 w-4" /> Android App</span>
              <span className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 px-5 text-sm font-bold text-white"><Download className="h-4 w-4" /> iOS App</span>
            </div>
          </FadeIn>
          <PhoneMockups />
        </div>
      </section>
      <Section className="mesh-band">
        <SectionIntro
          eyebrow="Real Mobile Screens"
          title="A field app that mirrors the way site teams actually work"
          body="Build Nest mobile brings command centre visibility, projects, capture, materials, reports, account controls and WhatsApp OTP access into a clean phone-first interface."
          align="center"
        />
        <MobileScreenshotGallery />
      </Section>
      <Section className="bg-white">
        <SectionIntro eyebrow="Apps by Role" title="Purpose-built mobile workflows for construction teams" align="center" />
        <Stagger className="grid gap-5 lg:grid-cols-3">
          {appPersonas.map((persona) => (
            <StaggerItem key={persona.title} className="rounded-lg border border-slate-200 bg-pearl p-6">
              <persona.icon className="h-8 w-8 text-aqua" />
              <h2 className="mt-5 text-xl font-black text-copy">{persona.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{persona.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>
      <Section className="mesh-band">
        <SectionIntro eyebrow="Mobile Features" title="Fast updates, fewer calls, cleaner reporting" />
        <div className="grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-3 rounded-md bg-white p-4 shadow-sm">
              {feature === "Notifications" ? <Bell className="h-5 w-5 text-aqua" /> : <CheckCircle2 className="h-5 w-5 text-success" />}
              <span className="font-semibold text-copy">{feature}</span>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
