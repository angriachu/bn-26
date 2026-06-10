import type { Metadata } from "next";
import { Section, SectionIntro } from "@/components/section";
import { faqs, routeMeta } from "@/lib/site";

export const metadata: Metadata = routeMeta["/faq"];

export default function FaqPage() {
  return (
    <>
      <section className="dark-band px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-mist">FAQ</p>
          <h1 className="max-w-4xl text-balance text-4xl font-black sm:text-6xl">Detailed answers for teams evaluating Build Nest</h1>
        </div>
      </section>
      <Section className="bg-white">
        <SectionIntro title="Frequently asked questions" body="Pricing, security, attendance, billing, projects, reports, mobile apps, support, deployment, data ownership and integrations." />
        <div className="grid gap-4 lg:grid-cols-2">
          {faqs.map(([question, answer]) => (
            <details key={question} className="rounded-lg border border-slate-200 bg-pearl p-5">
              <summary className="cursor-pointer text-lg font-bold text-copy">{question}</summary>
              <p className="mt-3 leading-7 text-slate-600">{answer}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
