import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Section } from "@/components/section";
import { routeMeta, site } from "@/lib/site";

export const metadata: Metadata = routeMeta["/data-retention-policy"];

type RetentionGroup = {
  heading: string;
  lines?: string[];
  bullets?: string[];
};

type RetentionSection = {
  title: string;
  body?: string[];
  bullets?: string[];
  groups?: RetentionGroup[];
  closing?: string;
};

const sections: RetentionSection[] = [
  {
    title: "1. Purpose of This Policy",
    body: [
      "This Data Retention Policy explains how BuildNest retains, stores, protects, archives, and deletes personal data, business data, project data, documents, and related records collected or processed through the BuildNest website, web application, mobile applications, APIs, customer portals, and related services.",
      "The purpose of this policy is to ensure that data is retained only for legitimate business, operational, contractual, security, legal, accounting, and compliance purposes."
    ]
  },
  {
    title: "2. Scope",
    body: ["This policy applies to data processed by BuildNest, including:"],
    bullets: [
      "Account and profile information.",
      "Company, project, site, client, vendor, and employee records.",
      "Construction project data, tasks, schedules, documents, photos, reports, approvals, and billing records.",
      "Subscription, invoice, payment status, and transaction reference data.",
      "Support, sales, demo, and communication records.",
      "Security logs, access logs, audit logs, and diagnostic information.",
      "Website analytics, cookie data, and consent records."
    ],
    closing: "This policy applies to active customers, trial users, website visitors, prospects, administrators, employees, contractors, vendors, and authorized users of customer accounts."
  },
  {
    title: "3. Retention Principles",
    body: ["BuildNest follows these retention principles:"],
    bullets: [
      "Data is retained only for as long as necessary for the purpose for which it was collected.",
      "Customer workspace data is retained while the customer account or subscription remains active, unless deletion is requested or required.",
      "Certain records may be retained for legal, tax, accounting, billing, fraud prevention, dispute resolution, security, or compliance reasons.",
      "Data no longer required for active use may be archived, anonymized, aggregated, or securely deleted.",
      "Access to retained data is limited based on role, business need, and security requirements."
    ]
  },
  {
    title: "4. Retention Periods",
    groups: [
      {
        heading: "Account and Workspace Data",
        lines: ["Account, company, workspace, user, role, project, site, task, material, procurement, billing, attendance, document, and report data is generally retained for the duration of the customer's active subscription or contractual relationship with BuildNest."],
        bullets: ["Active subscription period", "Account recovery period after cancellation", "Any longer period required by contract, law, dispute, audit, or compliance obligation"]
      },
      {
        heading: "Trial and Free Account Data",
        lines: ["Data from trial or free accounts may be retained while the account remains active or for a reasonable period after inactivity to support account reactivation, service improvement, abuse prevention, and customer communication."],
        bullets: ["Inactive free or trial workspaces may be archived or deleted after notice where practical.", "Users may request deletion of eligible data by contacting BuildNest."]
      },
      {
        heading: "Billing, Subscription, and Payment Records",
        lines: ["Billing records, invoices, subscription records, payment status, transaction references, tax records, refund records, and related finance data may be retained for accounting, tax, audit, legal, and dispute resolution purposes."],
        bullets: ["Complete card numbers, CVV numbers, UPI PINs, internet banking passwords, and sensitive banking credentials are not stored by BuildNest."]
      },
      {
        heading: "Support, Sales, and Communication Records",
        lines: ["Support tickets, WhatsApp enquiries, emails, demo requests, call notes, implementation discussions, and sales communication may be retained to provide customer support, maintain service history, resolve disputes, and improve service quality."]
      },
      {
        heading: "Security, Audit, and System Logs",
        lines: ["Security logs, authentication logs, audit trails, access records, system events, diagnostic data, and error logs may be retained to protect the platform, investigate incidents, detect abuse, maintain reliability, and comply with security obligations."]
      },
      {
        heading: "Website, Cookie, and Analytics Data",
        lines: ["Website analytics, cookie identifiers, consent records, and usage data may be retained according to the BuildNest Cookie Policy, applicable browser controls, consent preferences, and analytics provider settings."]
      }
    ]
  },
  {
    title: "5. Backup and Archive Retention",
    body: [
      "BuildNest may maintain backups, snapshots, and archived copies of data for security, disaster recovery, business continuity, compliance, and system restoration purposes.",
      "Data deleted from active systems may continue to exist in encrypted or access-controlled backups for a limited period until backups are rotated, overwritten, or securely destroyed according to BuildNest backup procedures."
    ],
    closing: "Backup data is not used for ordinary business access unless restoration, investigation, legal compliance, or security response requires it."
  },
  {
    title: "6. Customer Data Deletion Requests",
    body: [
      "Customers may request deletion of eligible account or workspace data by contacting BuildNest support. BuildNest may need to verify the requester's identity and authority before processing deletion requests.",
      "Deletion requests may not apply to data that BuildNest must retain for legal, accounting, tax, billing, fraud prevention, security, dispute resolution, contract enforcement, or regulatory purposes."
    ],
    bullets: [
      "Workspace owners or authorized administrators should submit deletion requests.",
      "BuildNest may ask for confirmation before deleting active workspace data.",
      "Deletion may be irreversible once completed.",
      "Some data may be anonymized or aggregated instead of deleted where allowed by law."
    ]
  },
  {
    title: "7. Account Cancellation and Subscription End",
    body: [
      "When a paid subscription is cancelled, BuildNest may retain customer workspace data for a reasonable post-cancellation period to allow reactivation, export, billing reconciliation, support, dispute handling, and legal compliance.",
      "After the applicable retention period, inactive workspace data may be archived, anonymized, or deleted unless a longer retention period is required."
    ],
    closing: "Customers should export important records before cancelling service or requesting deletion."
  },
  {
    title: "8. Legal Holds and Disputes",
    body: [
      "BuildNest may suspend deletion, archival, or anonymization of data when data is subject to an active dispute, legal claim, investigation, audit, regulatory request, security incident, payment dispute, or legal hold.",
      "Data under legal hold will be retained until the hold is released or the matter is resolved."
    ]
  },
  {
    title: "9. Data Minimization and Anonymization",
    body: [
      "BuildNest may anonymize, aggregate, or de-identify data when identifiable information is no longer required for the original purpose.",
      "Anonymized or aggregated data may be used for analytics, product improvement, performance measurement, security research, benchmarking, and business reporting, provided it does not reasonably identify an individual customer or user."
    ]
  },
  {
    title: "10. Third-Party Service Providers",
    body: [
      "BuildNest may use third-party service providers for hosting, infrastructure, analytics, communication, support, authentication, payments, security, and related operations.",
      "Where third-party providers process or retain BuildNest data, their retention practices may apply in addition to BuildNest's internal retention controls, subject to applicable agreements and legal requirements."
    ]
  },
  {
    title: "11. Security of Retained Data",
    body: ["BuildNest uses reasonable administrative, technical, and organizational safeguards to protect retained data against unauthorized access, misuse, loss, alteration, and disclosure."],
    bullets: [
      "Role-based access controls.",
      "Authentication and authorization controls.",
      "Access logging and monitoring.",
      "Backup and recovery controls.",
      "Secure deletion or disposal practices where applicable."
    ]
  },
  {
    title: "12. Updates to This Policy",
    body: [`BuildNest may update this Data Retention Policy from time to time. Updated versions will be published on ${site.url}.`],
    closing: "Continued use of BuildNest after updates are published constitutes acceptance of the revised policy."
  },
  {
    title: "13. Contact Information",
    body: ["For questions about this Data Retention Policy or to request eligible data deletion, contact BuildNest operated by FIXLAB."],
    groups: [
      {
        heading: "BuildNest (Operated by FIXLAB)",
        lines: [
          "FIXLAB",
          "2nd Floor, Federal Bank Building",
          "Vallikavu, Kollam",
          "Kerala - 690525",
          "India",
          `Phone: ${site.phone}`,
          `Email: ${site.supportEmail}, ${site.email}, ${site.salesEmail}`,
          `Website: ${site.url}`
        ]
      }
    ]
  }
];

export default function DataRetentionPolicyPage() {
  return (
    <>
      <section className="dark-band px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-mist">Data Retention Policy</p>
          <h1 className="max-w-4xl text-balance text-4xl font-black sm:text-6xl">BuildNest Data Retention Policy</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Effective Date: June 11, 2026. Last Updated: June 11, 2026.
          </p>
        </div>
      </section>

      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-lg border border-slate-200 bg-pearl p-6">
            <p className="leading-8 text-slate-700">
              BuildNest retains data only for legitimate operational, contractual, security, legal, accounting, compliance, and customer support purposes.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              This policy should be read together with the BuildNest Privacy Policy, Cookie Policy, Terms and Conditions, and Refund Policy.
            </p>
          </div>

          <div className="mt-8 grid gap-5">
            {sections.map((section) => (
              <article key={section.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-black text-copy">{section.title}</h2>
                {section.body?.map((paragraph) => (
                  <p key={paragraph} className="mt-4 leading-8 text-slate-600">{paragraph}</p>
                ))}
                {section.bullets ? <BulletList items={section.bullets} /> : null}
                {section.groups?.map((group) => (
                  <div key={group.heading} className="mt-5 rounded-md bg-pearl p-5">
                    <h3 className="font-bold text-copy">{group.heading}</h3>
                    {group.lines?.map((line) => (
                      <p key={line} className="mt-2 leading-7 text-slate-600">{line}</p>
                    ))}
                    {group.bullets ? <BulletList items={group.bullets} /> : null}
                  </div>
                ))}
                {section.closing ? <p className="mt-4 leading-8 text-slate-600">{section.closing}</p> : null}
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-slate-200 bg-pearl p-6">
            <p className="text-xl font-black text-copy">Related Policies</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/privacy-policy" className="font-bold text-aqua hover:text-ink">Privacy Policy</Link>
              <Link href="/cookie-policy" className="font-bold text-aqua hover:text-ink">Cookie Policy</Link>
              <Link href="/terms-and-conditions" className="font-bold text-aqua hover:text-ink">Terms and Conditions</Link>
              <Link href="/refund-policy" className="font-bold text-aqua hover:text-ink">Refund Policy</Link>
            </div>
          </div>

          <div className="mt-8 grid gap-4 rounded-lg border border-slate-200 bg-white p-6 sm:grid-cols-2">
            <a href={`mailto:${site.supportEmail}`} className="flex items-center gap-3 rounded-md bg-pearl p-4 text-copy">
              <Mail className="h-5 w-5 text-aqua" />
              <span>{site.supportEmail}</span>
            </a>
            <a href={`tel:${site.phone.replaceAll(" ", "")}`} className="flex items-center gap-3 rounded-md bg-pearl p-4 text-copy">
              <Phone className="h-5 w-5 text-aqua" />
              <span>{site.phone}</span>
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 grid gap-2 text-slate-600">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-7">
          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
