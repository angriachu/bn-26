import type { Metadata } from "next";
import { Section, SectionIntro } from "@/components/section";
import { routeMeta } from "@/lib/site";

export const metadata: Metadata = routeMeta["/about-us"];

export default function AboutPage() {
  const values = ["Innovation", "Integrity", "Reliability", "Scalability", "Customer Success"];
  return (
    <>
      <section className="dark-band px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-mist">About Us</p>
          <h1 className="max-w-4xl text-balance text-4xl font-black sm:text-6xl">A modern construction operating system developed by SYSGO LLP and managed by Fixlab</h1>
        </div>
      </section>
      <Section className="bg-white">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-pearl p-7 lg:col-span-2">
            <h2 className="text-2xl font-black text-copy">Who We Are</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Build Nest is a modern construction operating system developed by SYSGO LLP and managed by Fixlab. The platform was built to eliminate disconnected spreadsheets, paperwork, and fragmented construction workflows.
            </p>
          </div>
          <div className="rounded-lg bg-ink p-7 text-white">
            <h2 className="text-2xl font-black">Vision</h2>
            <p className="mt-4 leading-8 text-white/70">To become India's most trusted construction operating system.</p>
          </div>
          <div className="rounded-lg bg-white p-7 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-black text-copy">Mission</h2>
            <p className="mt-4 leading-8 text-slate-600">To digitally transform construction businesses through intelligent, affordable and scalable technology.</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-pearl p-7 lg:col-span-2">
            <SectionIntro title="Core Values" />
            <div className="grid gap-3 sm:grid-cols-5">
              {values.map((value) => <p key={value} className="rounded-md bg-white p-4 text-center font-bold text-copy shadow-sm">{value}</p>)}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
