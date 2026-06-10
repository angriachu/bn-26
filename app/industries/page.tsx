import type { Metadata } from "next";
import { Building2 } from "lucide-react";
import { Section, SectionIntro } from "@/components/section";
import { Stagger, StaggerItem } from "@/components/motion";
import { industryList, routeMeta } from "@/lib/site";

export const metadata: Metadata = routeMeta["/industries"];

export default function IndustriesPage() {
  return (
    <>
      <section className="dark-band px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-mist">Industries</p>
          <h1 className="max-w-4xl text-balance text-4xl font-black sm:text-6xl">Built for construction businesses that need site-to-office control</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">Build Nest supports builders, contractors, infrastructure companies, real estate developers and specialized construction teams.</p>
        </div>
      </section>
      <Section className="bg-white">
        <SectionIntro title="Industries and project types served" body="Use Build Nest across civil, commercial, infrastructure and facilities operations where delivery discipline, cost visibility and documentation matter." />
        <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industryList.map((industry) => (
            <StaggerItem key={industry} className="rounded-lg border border-slate-200 bg-pearl p-6">
              <Building2 className="h-7 w-7 text-aqua" />
              <h2 className="mt-5 text-xl font-black text-copy">{industry}</h2>
              <p className="mt-3 leading-7 text-slate-600">Plan projects, control teams, track materials, manage billing and build reliable reports for {industry.toLowerCase()}.</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>
    </>
  );
}
