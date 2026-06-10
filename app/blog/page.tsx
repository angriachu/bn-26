import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Section, SectionIntro } from "@/components/section";
import { blogCategories, routeMeta } from "@/lib/site";

export const metadata: Metadata = routeMeta["/blog"];

export default function BlogPage() {
  return (
    <>
      <section className="dark-band px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-mist">Blog</p>
          <h1 className="max-w-4xl text-balance text-4xl font-black sm:text-6xl">Construction technology insights for modern operators</h1>
        </div>
      </section>
      <Section className="bg-white">
        <SectionIntro title="Blog architecture" body="Publish thought leadership, SEO articles, product education and implementation guides across the categories below." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blogCategories.map((category) => (
            <article key={category} className="rounded-lg border border-slate-200 bg-pearl p-6">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-aqua">{category}</p>
              <h2 className="mt-4 text-xl font-black text-copy">{category} for construction teams</h2>
              <p className="mt-3 leading-7 text-slate-600">Create practical articles, buyer guides and operational playbooks for {category.toLowerCase()} audiences.</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-copy">Category hub <ArrowRight className="h-4 w-4" /></span>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
