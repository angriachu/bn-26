import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Section } from "@/components/section";
import { routeMeta, site } from "@/lib/site";

export const metadata: Metadata = routeMeta["/terms-and-conditions"];

type TermsGroup = {
  heading: string;
  lines?: string[];
  bullets?: string[];
};

type TermsSection = {
  title: string;
  body?: string[];
  bullets?: string[];
  groups?: TermsGroup[];
  closing?: string;
};

const sections: TermsSection[] = [
  {
    title: "1. About BuildNest",
    body: [
      "BuildNest is a cloud-based Software-as-a-Service platform designed for construction management, project management, workforce management, procurement, billing, asset tracking, service request management, work order management, building operations, and residential or commercial project administration."
    ]
  },
  {
    title: "2. Platform Operator",
    body: ["BuildNest is owned and operated by FIXLAB."],
    groups: [
      {
        heading: "FIXLAB",
        lines: [
          "2nd Floor, Federal Bank Building",
          "Vallikavu, Kollam",
          "Kerala - 690525",
          "India",
          `Phone: ${site.phone}`,
          `Email: ${site.email}, ${site.supportEmail}, ${site.salesEmail}`,
          `Website: ${site.url}`
        ]
      }
    ]
  },
  {
    title: "3. Platform Development and Maintenance",
    body: ["BuildNest is designed, developed, and technically maintained by SYSGO LLP."],
    groups: [
      {
        heading: "SYSGO LLP",
        lines: [
          "Technopark Back Gate Side",
          "Thiruvananthapuram",
          "Kerala - 695581",
          "India",
          "Phone: +91 97782 72227",
          "SYSGO LLP may provide software development, technical maintenance, infrastructure management, security monitoring, and support services on behalf of BuildNest."
        ]
      }
    ]
  },
  {
    title: "4. Eligibility",
    body: ["To use BuildNest, you must:"],
    bullets: [
      "Be at least 18 years old.",
      "Have the legal authority to enter into binding agreements.",
      "Provide accurate and complete registration information.",
      "Comply with applicable laws and regulations."
    ],
    closing: "Organizations registering on behalf of a business represent that they are authorized to bind that organization."
  },
  {
    title: "5. User Accounts",
    body: ["Users are responsible for maintaining account confidentiality, protecting credentials, restricting unauthorized access, and keeping account information accurate."],
    closing: "You are solely responsible for activities performed using your account credentials. BuildNest is not liable for losses resulting from unauthorized use of user accounts."
  },
  {
    title: "6. Subscription Services",
    body: ["BuildNest offers various subscription plans, including free access, monthly subscriptions, annual subscriptions, professional plans, enterprise plans, and custom business plans."],
    closing: "Features available depend on the selected subscription package. Subscription details and pricing are available on the website."
  },
  {
    title: "7. Payments and Billing",
    body: ["Users agree to pay all applicable subscription fees and taxes."],
    groups: [
      {
        heading: "Payment Methods",
        bullets: ["Credit cards", "Debit cards", "UPI", "Net banking", "Payment gateways", "Other approved payment methods"]
      },
      {
        heading: "Billing",
        bullets: [
          "Subscription fees are billed in advance.",
          "Recurring subscriptions may renew automatically unless canceled.",
          "Users are responsible for maintaining valid payment information.",
          "Failure to make payment may result in suspension or termination of services."
        ]
      }
    ]
  },
  {
    title: "8. Free Access and Promotional Plans",
    body: ["BuildNest may offer free plans, free trials, or promotional access periods. Access may be limited, subscription payment may be required for paid features, and trial accounts may be converted into paid plans if applicable."],
    closing: "BuildNest reserves the right to modify or discontinue free or promotional programs at any time."
  },
  {
    title: "9. Acceptable Use Policy",
    body: ["Users agree not to misuse BuildNest or use the platform for prohibited activities."],
    groups: [
      { heading: "Illegal Activities", bullets: ["Violate laws or regulations.", "Engage in fraudulent activities.", "Use BuildNest for unlawful purposes."] },
      { heading: "Security Violations", bullets: ["Attempt unauthorized access.", "Bypass security measures.", "Conduct vulnerability scanning without authorization.", "Introduce malware or harmful code."] },
      { heading: "Abuse of Services", bullets: ["Disrupt platform operations.", "Interfere with other users.", "Generate excessive automated traffic.", "Abuse support systems."] },
      { heading: "Content Violations", bullets: ["Upload harmful or illegal content.", "Infringe intellectual property rights.", "Publish defamatory material.", "Store prohibited information."] }
    ]
  },
  {
    title: "10. User Content",
    body: [
      "Users retain ownership of content they upload, including project records, customer records, documents, images, reports, maintenance records, and business data.",
      "By uploading content, users grant BuildNest a limited license to process, store, display, and transmit such content solely for service delivery purposes."
    ],
    closing: "Users are solely responsible for the legality and accuracy of uploaded content."
  },
  {
    title: "11. Data Ownership",
    body: ["Customer data remains the property of the customer. BuildNest does not claim ownership of customer project information, uploaded documents, operational data, or customer-generated reports."],
    closing: "BuildNest retains ownership of the software platform and associated intellectual property."
  },
  {
    title: "12. Intellectual Property Rights",
    body: ["All rights related to BuildNest are reserved, including software, source code, designs, logos, trademarks, documentation, user interfaces, databases, and content."],
    closing: "Users may not copy, reproduce, modify, reverse engineer, resell, or redistribute any portion of the platform without written authorization."
  },
  {
    title: "13. Service Availability",
    body: ["BuildNest strives to provide reliable service but does not guarantee uninterrupted availability. Services may be temporarily unavailable due to scheduled maintenance, software updates, security incidents, internet disruptions, or force majeure events."],
    closing: "BuildNest shall not be liable for temporary service interruptions."
  },
  {
    title: "14. Data Backup",
    body: ["BuildNest performs reasonable backup procedures. Users are encouraged to maintain independent backups of critical information."],
    closing: "BuildNest does not guarantee recovery of all lost data."
  },
  {
    title: "15. Third-Party Services",
    body: ["BuildNest may integrate with payment gateways, SMS providers, email providers, authentication providers, and cloud infrastructure providers."],
    closing: "BuildNest is not responsible for the availability, performance, or policies of third-party services."
  },
  {
    title: "16. Suspension and Termination",
    body: ["BuildNest may suspend or terminate accounts if users violate these Terms, fail to make payments, engage in fraudulent activities, abuse platform resources, or create security risks."],
    closing: "Users may terminate their accounts by contacting support. Certain obligations may survive termination."
  },
  {
    title: "17. Limitation of Liability",
    body: ["To the maximum extent permitted by law, BuildNest, FIXLAB, SYSGO LLP, employees, directors, contractors, and partners shall not be liable for indirect damages, loss of profits, loss of business opportunities, data loss, business interruption, or consequential damages arising from use of the platform."]
  },
  {
    title: "18. Maximum Liability",
    body: ["In any event, the total liability of BuildNest shall not exceed the total subscription fees paid by the customer during the twelve (12) months immediately preceding the claim."]
  },
  {
    title: "19. Indemnification",
    body: ["Users agree to indemnify and hold harmless BuildNest, FIXLAB, SYSGO LLP, employees, directors, and contractors from claims, damages, liabilities, losses, and expenses arising from user content, violation of laws, violation of these Terms, or third-party claims."]
  },
  {
    title: "20. Privacy",
    body: ["Use of BuildNest is governed by the BuildNest Privacy Policy. Users are encouraged to review the Privacy Policy before using the platform."]
  },
  {
    title: "21. Changes to Services",
    body: ["BuildNest may add features, modify features, remove features, change pricing, or update functionality at its discretion."],
    closing: "Reasonable notice may be provided where practical."
  },
  {
    title: "22. Force Majeure",
    body: ["BuildNest shall not be liable for delays or failures resulting from events beyond reasonable control, including natural disasters, internet failures, government actions, power outages, cyberattacks, and labor disputes."]
  },
  {
    title: "23. Governing Law",
    body: ["These Terms shall be governed and interpreted in accordance with the laws of India."]
  },
  {
    title: "24. Dispute Resolution",
    body: ["Parties shall first attempt to resolve disputes amicably through good-faith discussions. If resolution is not achieved, disputes shall be subject to the exclusive jurisdiction of the competent courts located in Kollam, Kerala, India."]
  },
  {
    title: "25. Severability",
    body: ["If any provision of these Terms is determined to be invalid or unenforceable, the remaining provisions shall continue in full force and effect."]
  },
  {
    title: "26. Entire Agreement",
    body: ["These Terms, together with the Privacy Policy, Refund Policy, and other applicable policies, constitute the entire agreement between users and BuildNest."]
  },
  {
    title: "27. Contact Information",
    body: ["For questions about these Terms, contact BuildNest operated by FIXLAB."],
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

export default function TermsAndConditionsPage() {
  return (
    <>
      <section className="dark-band px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-mist">Terms and Conditions</p>
          <h1 className="max-w-4xl text-balance text-4xl font-black sm:text-6xl">BuildNest Terms and Conditions</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Effective Date: June 11, 2026. Last Updated: June 11, 2026.
          </p>
        </div>
      </section>

      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-lg border border-slate-200 bg-pearl p-6">
            <p className="leading-8 text-slate-700">
              Please read these Terms and Conditions carefully before using BuildNest. By accessing or using the BuildNest website, web application, mobile application, APIs, or any related services, you agree to be bound by these Terms.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              If you do not agree with any part of these Terms, you must discontinue use of the platform immediately.
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

          <div className="mt-8 rounded-lg bg-ink p-6 text-white">
            <p className="text-xl font-black">Acceptance</p>
            <p className="mt-3 leading-8 text-white/70">
              By accessing, registering for, or using BuildNest, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
            </p>
          </div>

          <div className="mt-8 rounded-lg border border-slate-200 bg-pearl p-6">
            <p className="text-xl font-black text-copy">Related Policies</p>
            <Link href="/privacy-policy" className="mt-4 inline-flex font-bold text-aqua hover:text-ink">
              Read the BuildNest Privacy Policy
            </Link>
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
          <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-aqua" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
