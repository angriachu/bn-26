import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { LeadDialog } from "@/components/conversion-layer";
import { Section, SectionIntro } from "@/components/section";
import { pricingTiers, routeMeta } from "@/lib/site";

export const metadata: Metadata = routeMeta["/pricing"];

export default function PricingPage() {
  const rows = ["Users", "Projects", "Attendance", "Tasks", "Materials", "Procurement", "Billing", "Reports", "Priority Support", "White Label"];
  return (
    <>
      <section className="dark-band px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-mist">Pricing</p>
          <h1 className="mx-auto max-w-4xl text-balance text-4xl font-black sm:text-6xl">Premium construction SaaS plans that scale with your projects</h1>
        </div>
      </section>
      <Section className="bg-white">
        <div className="grid gap-5 lg:grid-cols-4">
          {pricingTiers.map((tier) => (
            <div key={tier.name} className={`rounded-lg border p-6 shadow-sm ${tier.highlighted ? "border-aqua bg-ink text-white shadow-glow" : "border-slate-200 bg-white text-copy"}`}>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-aqua">{tier.name}</p>
              <p className="mt-4 text-4xl font-black">{tier.price}</p>
              <p className={tier.highlighted ? "text-white/60" : "text-slate-500"}>{tier.suffix}</p>
              <p className={`mt-4 min-h-16 text-sm leading-6 ${tier.highlighted ? "text-white/66" : "text-slate-600"}`}>{tier.description}</p>
              <div className="mt-6 grid gap-3">
                {tier.features.map((feature) => (
                  <p key={feature} className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-success" /> {feature}</p>
                ))}
              </div>
              <LeadDialog title={`Discuss ${tier.name} Plan`} intent={`${tier.name} Plan`}>
                <button className={`mt-7 h-11 w-full rounded-md text-sm font-bold ${tier.highlighted ? "bg-aqua text-ink" : "bg-ink text-white"}`}>
                  Choose Plan
                </button>
              </LeadDialog>
            </div>
          ))}
        </div>
      </Section>
      <Section className="mesh-band">
        <SectionIntro eyebrow="Comparison" title="Feature comparison table" />
        <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="bg-ink text-white">
              <tr>
                <th className="p-4">Feature</th>
                {pricingTiers.map((tier) => <th key={tier.name} className="p-4">{tier.name}</th>)}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row} className="border-t border-slate-100">
                  <td className="p-4 font-semibold text-copy">{row}</td>
                  {pricingTiers.map((tier) => (
                    <td key={tier.name} className="p-4 text-slate-600">{valueFor(row, tier.name)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </>
  );
}

function valueFor(row: string, tier: string) {
  const matrix: Record<string, Record<string, string>> = {
    Users: { Starter: "5", Growth: "25", Professional: "100", Enterprise: "Unlimited" },
    Projects: { Starter: "2", Growth: "10", Professional: "Unlimited", Enterprise: "Unlimited" },
    Attendance: { Starter: "Included", Growth: "Included", Professional: "Included", Enterprise: "Included" },
    Tasks: { Starter: "Included", Growth: "Included", Professional: "Included", Enterprise: "Included" },
    Materials: { Starter: "Basic", Growth: "Included", Professional: "Advanced", Enterprise: "Advanced" },
    Procurement: { Starter: "Add-on", Growth: "Included", Professional: "Advanced", Enterprise: "Advanced" },
    Billing: { Starter: "Add-on", Growth: "Included", Professional: "Advanced", Enterprise: "Advanced" },
    Reports: { Starter: "Standard", Growth: "Standard", Professional: "Advanced", Enterprise: "Custom" },
    "Priority Support": { Starter: "Email", Growth: "Email", Professional: "Included", Enterprise: "Dedicated" },
    "White Label": { Starter: "No", Growth: "No", Professional: "No", Enterprise: "Yes" }
  };
  return matrix[row][tier];
}
