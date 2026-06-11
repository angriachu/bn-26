import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Section } from "@/components/section";
import { routeMeta, site } from "@/lib/site";

export const metadata: Metadata = routeMeta["/privacy-policy"];

type PolicyGroup = {
  heading: string;
  lines: string[];
  bullets?: string[];
};

type PolicySection = {
  title: string;
  body?: string[];
  bullets?: string[];
  groups?: PolicyGroup[];
  closing?: string;
};

const sections: PolicySection[] = [
  {
    title: "1. About BuildNest",
    body: [
      "BuildNest is a cloud-based property management, facility management, maintenance management, and tenant management platform designed to help property owners, property managers, facility operators, builders, maintenance teams, and tenants manage their properties and operations efficiently."
    ],
    groups: [
      {
        heading: "Platform Operator",
        lines: [
          "FIXLAB",
          "2nd Floor, Federal Bank Building",
          "Vallikavu, Kollam",
          "Kerala - 690525",
          "India",
          `Phone: ${site.phone}`,
          `Email: ${site.email}, ${site.supportEmail}, ${site.salesEmail}`,
          `Website: ${site.url}`
        ]
      },
      {
        heading: "Platform Development & Technical Maintenance",
        lines: [
          "SYSGO LLP",
          "Technopark Back Gate Side",
          "Thiruvananthapuram",
          "Kerala - 695581",
          "India",
          "Phone: +91 97782 72227",
          "SYSGO LLP is responsible for software development, infrastructure management, platform maintenance, technical support, security monitoring, feature enhancements, and technology operations on behalf of BuildNest."
        ]
      }
    ]
  },
  {
    title: "2. Scope of This Policy",
    body: ["This Privacy Policy applies to:"],
    bullets: [
      "BuildNest website",
      "BuildNest web application",
      "BuildNest mobile applications",
      "Customer portals",
      "Tenant portals",
      "Technician portals",
      "Administrative dashboards",
      "APIs and integrations",
      "Customer support interactions",
      "Subscription and billing services"
    ],
    closing: "This Privacy Policy does not apply to third-party websites, applications, or services that may be linked from BuildNest."
  },
  {
    title: "3. Information We Collect",
    groups: [
      {
        heading: "3.1 Information You Provide Directly",
        lines: [
          "When you create an account, subscribe to services, contact support, or use BuildNest, we may collect personal information, business information, property information, tenant information, maintenance information, and communication information."
        ],
        bullets: [
          "Full name, mobile number, email address, company name, designation, profile information, and account credentials",
          "Business name, GST number, registration information, billing address, and tax information",
          "Property names, property addresses, building information, unit information, asset information, and facility information",
          "Tenant names, tenant contact information, lease information, occupancy records, and tenant documents",
          "Service requests, complaint records, work orders, maintenance logs, technician reports, photos, and attachments",
          "Emails, support tickets, chat messages, feedback submissions, and survey responses"
        ]
      },
      {
        heading: "3.2 Information Collected Automatically",
        lines: ["We may automatically collect device information, usage information, and technical information."],
        bullets: [
          "Device type, device model, operating system, browser type, and app version",
          "Login activity, feature usage, session duration, navigation data, and interaction logs",
          "IP address, internet service provider, geographic region, access date and time, system logs, and error reports"
        ]
      },
      {
        heading: "3.3 Information Received from Third Parties",
        lines: ["We may receive information from payment service providers, authentication providers, cloud infrastructure providers, communication service providers, analytics providers, and business partners."]
      }
    ]
  },
  {
    title: "4. How We Use Information",
    body: ["We use collected information for the following purposes:"],
    bullets: [
      "Service delivery, account creation, authentication, platform functionality, subscriptions, and customer relationship management",
      "Property management operations, tenant records, maintenance requests, reports, analytics, and service activity tracking",
      "Customer support, inquiry responses, technical issue resolution, assistance, and guidance",
      "Service notifications, transactional communications, security alerts, product updates, and support responses",
      "Billing, subscription processing, invoice generation, transaction verification, and fraud prevention",
      "Security monitoring, suspicious activity detection, unauthorized access prevention, and platform integrity protection",
      "Platform improvement, usage analysis, performance improvement, user experience enhancement, and new feature development",
      "Legal compliance, lawful request response, contractual enforcement, and dispute resolution"
    ]
  },
  {
    title: "5. Legal Basis for Processing",
    body: ["Where applicable, we process information based on user consent, contractual necessity, legitimate business interests, compliance with legal obligations, and protection of users and services."]
  },
  {
    title: "6. Payment Processing",
    body: [
      "BuildNest may use trusted third-party payment processors including payment gateways, banks, and UPI service providers.",
      "Payment-related information may include transaction identifiers, subscription details, billing information, and payment status.",
      "BuildNest does not store complete debit card numbers, credit card numbers, CVV numbers, UPI PINs, internet banking passwords, or other sensitive banking credentials. Payment providers maintain their own privacy and security policies."
    ]
  },
  {
    title: "7. Cookies and Tracking Technologies",
    body: ["BuildNest may use session cookies, authentication cookies, security cookies, preference cookies, and analytics cookies."],
    bullets: [
      "Keep users signed in",
      "Improve platform performance",
      "Understand user behavior",
      "Enhance user experience"
    ],
    closing: "Users may control cookies through browser settings."
  },
  {
    title: "8. Information Sharing and Disclosure",
    body: ["BuildNest does not sell personal information. Information may be shared only as necessary with service providers, technical service providers, legal authorities, or successor entities in business transfers."],
    bullets: [
      "Cloud hosting providers, data storage providers, email service providers, SMS providers, payment processors, and analytics providers",
      "SYSGO LLP may access information strictly for software development, platform maintenance, security monitoring, technical support, and infrastructure operations under confidentiality and security obligations",
      "Information may be disclosed when required by applicable laws, court orders, government agencies, or law enforcement authorities",
      "Information may be transferred in connection with a merger, acquisition, asset transfer, or corporate restructuring"
    ]
  },
  {
    title: "9. Data Security",
    body: ["BuildNest implements commercially reasonable security measures."],
    bullets: [
      "SSL/TLS encryption",
      "Secure authentication mechanisms",
      "Password hashing",
      "Access controls",
      "Security monitoring",
      "Firewall protection",
      "Activity logging",
      "Data backup systems"
    ],
    closing: "Despite our efforts, no transmission method or storage system is completely secure."
  },
  {
    title: "10. Data Retention",
    body: ["We retain information only for as long as necessary to provide services, maintain customer accounts, comply with legal obligations, resolve disputes, and enforce agreements. Certain records may be retained longer where required by law."]
  },
  {
    title: "11. User Rights",
    body: ["Subject to applicable laws, users may request access, correction, deletion, data export, and withdrawal of consent where processing is based on consent."],
    closing: `Requests should be submitted to ${site.supportEmail}.`
  },
  {
    title: "12. Children's Privacy",
    body: ["BuildNest is not intended for individuals under eighteen (18) years of age. We do not knowingly collect personal information from minors."]
  },
  {
    title: "13. International Data Transfers",
    body: ["BuildNest may use cloud infrastructure and service providers that process data in multiple geographic locations. Appropriate safeguards are implemented to protect transferred information."]
  },
  {
    title: "14. Third-Party Services",
    body: ["BuildNest may integrate with payment gateways, email providers, SMS providers, authentication providers, analytics providers, and cloud service providers. Each third-party service operates under its own privacy policy and terms."]
  },
  {
    title: "15. Data Breach Response",
    body: ["In the event of a significant security incident, BuildNest will investigate the incident, take corrective actions, notify affected users where required, and cooperate with regulatory authorities where applicable."]
  },
  {
    title: "16. Changes to This Privacy Policy",
    body: [`BuildNest reserves the right to update this Privacy Policy at any time. Updated versions will be published on ${site.url}. Continued use of the platform following publication of updates constitutes acceptance of the revised Privacy Policy.`]
  },
  {
    title: "17. Contact Information",
    body: ["For privacy-related requests, questions, complaints, or concerns, contact BuildNest operated by FIXLAB."],
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

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="dark-band px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-mist">Privacy Policy</p>
          <h1 className="max-w-4xl text-balance text-4xl font-black sm:text-6xl">BuildNest Privacy Policy</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Effective Date: June 11, 2026. Last Updated: June 11, 2026.
          </p>
        </div>
      </section>

      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-lg border border-slate-200 bg-pearl p-6">
            <p className="leading-8 text-slate-700">
              BuildNest (&quot;BuildNest&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting the privacy and security of its users. This Privacy Policy explains how information is collected, used, stored, disclosed, and protected when you access or use the BuildNest website, mobile application, web application, APIs, and related services.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              By accessing or using BuildNest, you agree to the terms of this Privacy Policy.
            </p>
          </div>

          <div className="mt-8 grid gap-5">
            {sections.map((section) => (
              <article key={section.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-black text-copy">{section.title}</h2>
                {section.body?.map((paragraph) => (
                  <p key={paragraph} className="mt-4 leading-8 text-slate-600">{paragraph}</p>
                ))}
                {section.bullets ? (
                  <ul className="mt-4 grid gap-2 text-slate-600">
                    {section.bullets.map((item) => (
                      <li key={item} className="flex gap-3 leading-7">
                        <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-aqua" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {section.groups?.map((group) => (
                  <div key={group.heading} className="mt-5 rounded-md bg-pearl p-5">
                    <h3 className="text-lg font-bold text-copy">{group.heading}</h3>
                    <div className="mt-3 grid gap-1 text-sm leading-7 text-slate-600">
                      {group.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                    {group.bullets ? (
                      <ul className="mt-4 grid gap-2 text-sm text-slate-600">
                        {group.bullets.map((item) => (
                          <li key={item} className="flex gap-3 leading-7">
                            <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-aqua" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
                {section.closing ? <p className="mt-4 leading-8 text-slate-600">{section.closing}</p> : null}
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-lg bg-ink p-6 text-white">
            <h2 className="text-2xl font-black">Privacy Contact</h2>
            <div className="mt-5 grid gap-3 text-sm text-white/75 sm:grid-cols-2">
              <a href={`mailto:${site.supportEmail}`} className="flex items-center gap-3 hover:text-mist">
                <Mail className="h-5 w-5 text-mist" /> {site.supportEmail}
              </a>
              <a href={`tel:${site.phone.replaceAll(" ", "")}`} className="flex items-center gap-3 hover:text-mist">
                <Phone className="h-5 w-5 text-mist" /> {site.phone}
              </a>
            </div>
            <p className="mt-5 text-sm leading-7 text-white/65">
              By accessing or using BuildNest, you acknowledge that you have read, understood, and agreed to this Privacy Policy.
            </p>
            <Link href="/contact" className="mt-5 inline-flex h-11 items-center rounded-md bg-aqua px-5 text-sm font-bold text-ink hover:bg-mist">
              Contact Build Nest
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
