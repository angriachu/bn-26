import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/button";
import { HeroActions, LeadDialog } from "@/components/conversion-layer";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { DashboardShowcase, PhoneMockups, ScreenshotGallery } from "@/components/product-visuals";
import { Section, SectionIntro } from "@/components/section";
import { benefitList, featureModules, pricingTiers, trustBadges, whyBuildNest, workflow } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="dark-band overflow-hidden px-4 pb-16 pt-16 text-white sm:px-6 lg:px-8 lg:pb-24 lg:pt-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeIn>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-mist">Build Nest Construction OS</p>
            <h1 className="text-balance text-4xl font-black tracking-normal sm:text-5xl lg:text-7xl">
              Construction Management Reimagined For Modern Teams
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
              Manage projects, workforce, procurement, attendance, assets, billing, subcontractors and reporting from one intelligent platform.
            </p>
            <div className="mt-8">
              <HeroActions />
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              {[
                ["90%", "paperwork reduced"],
                ["15+", "connected modules"],
                ["24/7", "cloud access"]
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="text-3xl font-black text-mist">{value}</p>
                  <p className="mt-1 text-sm text-white/60">{label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.12}>
            <DashboardShowcase />
          </FadeIn>
        </div>
      </section>

      <Section className="bg-white py-10">
        <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustBadges.map((badge) => (
            <StaggerItem key={badge} className="flex items-center gap-3 rounded-md border border-slate-200 bg-pearl px-4 py-3">
              <CheckCircle2 className="h-5 w-5 flex-none text-success" />
              <span className="text-sm font-semibold text-copy">{badge}</span>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="mesh-band">
        <SectionIntro
          eyebrow="Why Build Nest"
          title="A complete construction operating system, not another disconnected tool"
          body="Build Nest connects the people, materials, costs, documents and decisions that determine whether construction projects stay profitable."
          align="center"
        />
        <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {whyBuildNest.map(([title, body]) => (
            <StaggerItem key={title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-lg font-bold text-copy">{title}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="bg-white" innerClassName="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <FadeIn>
          <SectionIntro
            eyebrow="Product Overview"
            title="From workspace setup to project profitability"
            body="The platform architecture mirrors how construction businesses actually work: companies create workspaces, teams execute projects, site data updates operations, and leadership gets live reporting."
          />
          <div className="grid gap-3">
            {workflow.map((step, index) => (
              <div key={step} className="flex items-center gap-4 rounded-md border border-slate-200 bg-pearl p-4">
                <span className="grid h-9 w-9 place-items-center rounded-md bg-ink text-sm font-bold text-white">{index + 1}</span>
                <span className="font-semibold text-copy">{step}</span>
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="rounded-lg bg-ink p-3 shadow-premium">
            <DashboardShowcase />
          </div>
        </FadeIn>
      </Section>

      <Section className="dark-band text-white" innerClassName="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <FadeIn>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-mist">Feature Suite</p>
          <h2 className="text-3xl font-bold sm:text-4xl">Every major construction workflow in one SaaS platform</h2>
          <p className="mt-5 leading-8 text-white/70">
            Build Nest brings field operations, commercial controls and executive reporting together so teams stop running projects through scattered spreadsheets.
          </p>
          <Button href="/features" className="mt-7">Explore Features</Button>
        </FadeIn>
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featureModules.slice(0, 9).map((module) => (
            <StaggerItem key={module.slug} className="glass rounded-lg p-5">
              <module.icon className="h-6 w-6 text-mist" />
              <p className="mt-4 font-bold">{module.title}</p>
              <p className="mt-2 text-sm leading-6 text-white/62">{module.benefits.slice(0, 2).join(" • ")}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="bg-white">
        <SectionIntro
          eyebrow="Mobile Application"
          title="Field teams can update the system from the site"
          body="Site engineers, supervisors and management teams get mobile-ready workflows for attendance, task updates, material requests, project updates, reports and notifications."
          align="center"
        />
        <PhoneMockups />
      </Section>

      <Section id="product-tour" className="mesh-band">
        <SectionIntro eyebrow="Screenshot Gallery" title="A real product showcase built for buyer evaluation" body="Explore Build Nest screens for dashboards, projects, tasks, WhatsApp users, attendance, materials, procurement, billing, reports and system settings." />
        <ScreenshotGallery />
      </Section>

      <Section className="bg-white">
        <SectionIntro eyebrow="Measured Outcomes" title="Designed for visible operational improvement" align="center" />
        <div className="grid gap-4 md:grid-cols-4">
          {benefitList.map((benefit) => (
            <div key={benefit} className="rounded-lg border border-slate-200 bg-pearl p-5 text-center">
              <p className="font-bold text-copy">{benefit}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="dark-band text-white">
        <SectionIntro eyebrow="Pricing" title="Premium SaaS pricing for growing construction teams" body="Start with a free plan, then choose Starter, Professional or a Custom plan as your construction operations grow." align="center" tone="dark" />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {pricingTiers.map((tier) => (
            <div key={tier.name} className={`rounded-lg p-6 ${tier.highlighted ? "bg-white text-copy shadow-glow" : "glass text-white"}`}>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-aqua">{tier.name}</p>
              <p className="mt-4 text-4xl font-black">{tier.price}</p>
              <p className={tier.highlighted ? "text-slate-500" : "text-white/55"}>{tier.suffix}</p>
              <p className={`mt-4 text-sm leading-6 ${tier.highlighted ? "text-slate-600" : "text-white/65"}`}>{tier.description}</p>
              <div className="mt-6 grid gap-3">
                {tier.features.map((feature) => (
                  <p key={feature} className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-success" /> {feature}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white text-center">
        <FadeIn className="mx-auto max-w-4xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-aqua">Sales Platform</p>
          <h2 className="text-3xl font-black text-copy sm:text-5xl">Ready to run construction on one intelligent platform?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Request a guided demo and see how Build Nest can fit your project, site, workforce and billing workflows.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <LeadDialog title="Request a Build Nest Demo" intent="Demo">
              <button className="h-12 rounded-md bg-ink px-6 text-sm font-bold text-white">Request Demo</button>
            </LeadDialog>
            <Button href="/contact" variant="ghost">Contact Sales</Button>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
