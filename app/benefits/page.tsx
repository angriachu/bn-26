import type { Metadata } from "next";
import { TrendingUp } from "lucide-react";
import { Section, SectionIntro } from "@/components/section";
import { benefitList, routeMeta } from "@/lib/site";

export const metadata: Metadata = routeMeta["/benefits"];

export default function BenefitsPage() {
  return (
    <>
      <section className="dark-band px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-mist">Benefits</p>
          <h1 className="max-w-4xl text-balance text-4xl font-black sm:text-6xl">Measurable operational outcomes for modern construction teams</h1>
        </div>
      </section>
      <Section className="bg-white">
        <SectionIntro title="Move faster with cleaner project control" body="Build Nest reduces fragmented paperwork, improves accountability and gives management teams live operating visibility." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {benefitList.map((benefit) => (
            <div key={benefit} className="rounded-lg border border-slate-200 bg-pearl p-6">
              <TrendingUp className="h-7 w-7 text-success" />
              <p className="mt-5 text-xl font-black text-copy">{benefit}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
