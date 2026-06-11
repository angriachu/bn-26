import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Section } from "@/components/section";
import { routeMeta, site } from "@/lib/site";

export const metadata: Metadata = routeMeta["/security-policy"];

type SecurityGroup = {
  heading: string;
  lines?: string[];
  bullets?: string[];
};

type SecuritySection = {
  title: string;
  body?: string[];
  bullets?: string[];
  groups?: SecurityGroup[];
  closing?: string;
};

const sections: SecuritySection[] = [
  {
    title: "1. Purpose of This Policy",
    body: [
      "This Security Policy explains the administrative, technical, and organizational safeguards used by BuildNest to protect customer data, user accounts, project information, documents, communications, and platform infrastructure.",
      "BuildNest is committed to maintaining a secure, reliable, and privacy-conscious construction management platform for customers, users, administrators, and stakeholders."
    ]
  },
  {
    title: "2. Scope",
    body: ["This policy applies to security practices for:"],
    bullets: [
      "The BuildNest website, web application, mobile applications, APIs, and customer portals.",
      "Customer workspace data, project data, documents, reports, billing records, and operational records.",
      "User accounts, roles, permissions, authentication, and access controls.",
      "Infrastructure, databases, backups, logs, integrations, and third-party service providers.",
      "BuildNest employees, contractors, service providers, and authorized personnel who support the platform."
    ]
  },
  {
    title: "3. Security Principles",
    body: ["BuildNest follows these core security principles:"],
    bullets: [
      "Protect customer data against unauthorized access, misuse, alteration, disclosure, loss, and destruction.",
      "Limit access to data based on role, responsibility, and legitimate business need.",
      "Maintain account, workspace, and tenant separation where applicable.",
      "Use layered security controls across application, infrastructure, process, and people operations.",
      "Monitor, review, and improve security practices as the platform evolves."
    ]
  },
  {
    title: "4. Account and Access Security",
    body: [
      "BuildNest uses account-level access controls to help ensure that users access only the information and features authorized for their role.",
      "Customers are responsible for assigning appropriate users, roles, permissions, and administrator rights within their workspace."
    ],
    bullets: [
      "Role-based access controls for platform users.",
      "Administrative controls for workspace owners and authorized managers.",
      "Session and authentication controls.",
      "Account activity and access logging where applicable.",
      "Prompt removal or deactivation of users who no longer require access."
    ]
  },
  {
    title: "5. Customer Data Protection",
    body: [
      "BuildNest applies reasonable safeguards to protect customer data, including project records, workforce information, procurement data, billing records, documents, photos, reports, and operational information.",
      "Customer data remains owned by the customer, subject to the BuildNest Privacy Policy, Data Retention Policy, Terms and Conditions, and applicable agreements."
    ],
    bullets: [
      "Tenant-aware data handling where applicable.",
      "Restricted access to production systems.",
      "Data backup and recovery practices.",
      "Security review of sensitive operational workflows.",
      "Secure handling of support and troubleshooting requests."
    ]
  },
  {
    title: "6. Infrastructure and Application Security",
    groups: [
      {
        heading: "Application Controls",
        lines: ["BuildNest is designed with application-level controls to protect user sessions, permissions, business workflows, and platform data."],
        bullets: ["Authentication checks", "Authorization controls", "Input validation", "Error handling", "Operational logging"]
      },
      {
        heading: "Infrastructure Controls",
        lines: ["BuildNest may use cloud, hosting, database, storage, monitoring, and infrastructure providers to operate the platform securely and reliably."],
        bullets: ["Access-restricted infrastructure", "Environment separation where practical", "Backup and recovery controls", "Monitoring and diagnostic tools"]
      },
      {
        heading: "Data Transmission",
        lines: ["BuildNest uses secure communication practices for platform access and data exchange where technically supported by the relevant service or integration."]
      },
      {
        heading: "Payment Security",
        lines: ["Where payments are processed through third-party payment gateways, BuildNest does not store complete card numbers, CVV numbers, UPI PINs, internet banking passwords, or sensitive banking credentials."]
      }
    ]
  },
  {
    title: "7. Monitoring, Logging, and Incident Detection",
    body: [
      "BuildNest may collect and review system logs, authentication events, access records, diagnostic data, audit trails, and security events to maintain platform reliability and detect suspicious activity.",
      "Logs may be used for troubleshooting, abuse prevention, fraud detection, service improvement, legal compliance, and incident investigation."
    ]
  },
  {
    title: "8. Security Incident Response",
    body: ["If BuildNest identifies a security incident, BuildNest may take appropriate steps to investigate, contain, mitigate, recover, and communicate based on the nature and severity of the incident."],
    bullets: [
      "Assess the affected systems, accounts, data, and users.",
      "Restrict unauthorized access or suspicious activity.",
      "Preserve relevant logs and evidence.",
      "Restore service reliability where needed.",
      "Notify affected customers or users where required by applicable law or contractual obligation."
    ]
  },
  {
    title: "9. Customer Responsibilities",
    body: ["Customers and users play an important role in protecting their BuildNest accounts and data. Customers are responsible for:"],
    bullets: [
      "Using strong, unique credentials and secure login practices.",
      "Keeping account, email, phone, and administrator details accurate.",
      "Granting access only to authorized users.",
      "Removing users who leave the organization or no longer need access.",
      "Reviewing roles, permissions, and project access regularly.",
      "Protecting exported reports, downloaded files, shared links, and offline records.",
      "Promptly reporting suspected unauthorized access or security concerns."
    ]
  },
  {
    title: "10. Third-Party Providers and Integrations",
    body: [
      "BuildNest may rely on trusted third-party providers for hosting, infrastructure, analytics, authentication, payment processing, communication, customer support, monitoring, and related operations.",
      "Third-party providers are responsible for their own security practices. BuildNest selects providers based on operational need, reliability, and reasonable security considerations."
    ],
    closing: "Customer use of optional integrations may be subject to the terms, security practices, and privacy policies of those third-party services."
  },
  {
    title: "11. Vulnerability Reporting",
    body: [
      "If you believe you have discovered a vulnerability or security weakness in BuildNest, please report it responsibly to BuildNest support.",
      "Do not access, modify, delete, copy, disrupt, disclose, or misuse data that does not belong to you. Do not perform testing that may degrade, interrupt, or harm BuildNest systems or customer accounts."
    ],
    bullets: [
      "Include a clear description of the issue.",
      "Include affected URLs, endpoints, screenshots, logs, or reproduction steps where safe to share.",
      "Do not publicly disclose the issue before BuildNest has had a reasonable opportunity to investigate and respond."
    ]
  },
  {
    title: "12. No Absolute Security Guarantee",
    body: [
      "BuildNest uses reasonable safeguards to protect the platform and customer data, but no online system, network, software, or storage method can be guaranteed to be completely secure.",
      "Customers should use BuildNest together with appropriate internal policies, access reviews, employee training, device security, and data handling practices."
    ]
  },
  {
    title: "13. Updates to This Policy",
    body: [`BuildNest may update this Security Policy from time to time. Updated versions will be published on ${site.url}.`],
    closing: "Continued use of BuildNest after updates are published constitutes acceptance of the revised Security Policy."
  },
  {
    title: "14. Contact Information",
    body: ["For security questions, suspected unauthorized access, or responsible vulnerability reports, contact BuildNest operated by FIXLAB."],
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

export default function SecurityPolicyPage() {
  return (
    <>
      <section className="dark-band px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-mist">Security Policy</p>
          <h1 className="max-w-4xl text-balance text-4xl font-black sm:text-6xl">BuildNest Security Policy</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Effective Date: June 11, 2026. Last Updated: June 11, 2026.
          </p>
        </div>
      </section>

      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-lg border border-slate-200 bg-pearl p-6">
            <p className="leading-8 text-slate-700">
              BuildNest uses administrative, technical, and organizational safeguards to protect customer accounts, construction project data, documents, platform access, and operational systems.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              This policy should be read together with the BuildNest Privacy Policy, Data Retention Policy, Cookie Policy, Terms and Conditions, and Refund Policy.
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
              <Link href="/data-retention-policy" className="font-bold text-aqua hover:text-ink">Data Retention Policy</Link>
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
