import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { AppScreenshotFrame, DashboardShowcase, ScreenshotGallery } from "@/components/product-visuals";
import { Section, SectionIntro } from "@/components/section";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { featureModules, routeMeta } from "@/lib/site";

export const metadata: Metadata = routeMeta["/features"];

export default function FeaturesPage() {
  return (
    <>
      <section className="dark-band px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <FadeIn>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-mist">Features</p>
            <h1 className="text-balance text-4xl font-black sm:text-6xl">Every construction module your operating team expects</h1>
            <p className="mt-6 text-lg leading-8 text-white/70">
              Build Nest covers executive KPIs, project delivery, WBS tasks, WhatsApp access, GPS attendance, materials, procurement, ERP operations, billing, subcontractors, transport, assets, reports, documents and settings.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <DashboardShowcase />
          </FadeIn>
        </div>
      </section>

      <Section className="bg-white">
        <SectionIntro eyebrow="Module Library" title="Individual sections for every Build Nest module" body="Each module is structured for buyer evaluation: overview, benefits, key capabilities, gallery preview and practical use cases." />
        <div className="grid gap-8">
          {featureModules.map((module, index) => (
            <FadeIn key={module.slug}>
              <article className="grid gap-6 rounded-lg border border-slate-200 bg-white p-5 shadow-sm lg:grid-cols-[0.85fr_1.15fr] lg:p-7">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-md bg-aqua/15 text-aqua">
                      <module.icon className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Module {index + 1}</p>
                      <h2 className="text-2xl font-black text-copy">{module.title}</h2>
                    </div>
                  </div>
                  <p className="mt-5 leading-7 text-slate-600">{module.overview}</p>
                  <div className="mt-6 grid gap-4 md:grid-cols-3">
                    <FeatureList title="Benefits" items={module.benefits} />
                    <FeatureList title="Key Features" items={module.keyFeatures} />
                    <FeatureList title="Use Cases" items={module.useCases} />
                  </div>
                </div>
                <div className="rounded-lg bg-ink p-3">
                  <AppScreenshotFrame src={module.screenshot} title={`${module.title} screenshot`} compact />
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section className="mesh-band">
        <SectionIntro eyebrow="Screenshot Gallery" title="Grouped screenshot previews with lightbox zoom" body="Explore the real Build Nest web app screens across every core construction operations module." align="center" />
        <ScreenshotGallery />
      </Section>
    </>
  );
}

function FeatureList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="mb-3 text-sm font-bold text-copy">{title}</p>
      <div className="grid gap-2">
        {items.map((item) => (
          <p key={item} className="flex items-start gap-2 text-sm leading-6 text-slate-600">
            <CheckCircle2 className="mt-1 h-4 w-4 flex-none text-success" />
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
