import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Section } from "@/components/section";
import { routeMeta, site } from "@/lib/site";

export const metadata: Metadata = routeMeta["/refund-policy"];

type PolicyGroup = {
  heading: string;
  lines?: string[];
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
      "BuildNest is a cloud-based Software-as-a-Service platform that provides construction management, project management, workforce management, procurement, billing, reporting, asset tracking, maintenance management, and related business solutions.",
      "As BuildNest delivers digital services that are activated immediately upon subscription, refund eligibility is limited and governed by the terms outlined in this policy."
    ]
  },
  {
    title: "2. Subscription Plans",
    body: ["BuildNest currently offers the following subscription plans."],
    groups: [
      {
        heading: "Free Plan",
        lines: ["The Free Plan includes limited access to selected BuildNest features. No charges apply to the Free Plan and therefore no refund is applicable."],
        bullets: ["Core Access", "Demo Workspace", "Mobile Access", "Reports", "WhatsApp Enquiry Support"]
      },
      {
        heading: "Starter Plan",
        lines: ["₹199 per month. The Starter Plan is designed for small teams."],
        bullets: ["Starter Access", "Projects", "Attendance", "Tasks", "Reports"]
      },
      {
        heading: "Professional Plan",
        lines: ["₹499 per month. The Professional Plan is designed for organizations requiring enhanced functionality."],
        bullets: ["Professional Access", "All Modules", "Advanced Reports", "Priority Support", "Mobile App Access"]
      },
      {
        heading: "Custom Plan",
        lines: ["Custom pricing. The Custom Plan may include custom deployment, infrastructure, integrations, or dedicated support."],
        bullets: ["Unlimited Users", "Unlimited Projects", "White Label Deployment", "Dedicated Server", "Custom Integrations", "Dedicated Support"]
      }
    ],
    closing: "Refund and cancellation terms for Custom Plans may be governed by separate agreements executed between BuildNest and the customer."
  },
  {
    title: "3. Nature of Digital Services",
    body: ["BuildNest is a subscription-based software platform. Upon successful payment and activation, user accounts are provisioned, features become accessible, platform resources are allocated, and technical services become available."],
    closing: "Due to the nature of digital services, subscription fees are generally non-refundable after activation except as specifically stated in this policy or where required by applicable law."
  },
  {
    title: "4. Monthly Subscription Refunds",
    body: ["Monthly subscription fees for Starter and Professional Plans are generally non-refundable once payment has been successfully processed and subscription access has been activated."],
    closing: "Users may cancel future renewals at any time, but cancellation does not result in a refund for the current billing cycle."
  },
  {
    title: "5. Annual Subscription Refunds",
    body: ["If BuildNest offers annual subscriptions in the future, refund requests may be considered under the following conditions:"],
    bullets: [
      "Request submitted within seven (7) calendar days from purchase.",
      "Minimal or no substantial use of premium services.",
      "No violation of platform policies.",
      "No evidence of abuse or misuse."
    ],
    closing: "Refund requests are reviewed individually and approval is at BuildNest's reasonable discretion."
  },
  {
    title: "6. Enterprise and Custom Plan Refunds",
    body: ["Enterprise subscriptions, custom deployments, white-label implementations, dedicated servers, custom integrations, consulting services, onboarding services, migration services, and development services are generally non-refundable."],
    closing: "Any exceptions shall be governed by the signed agreement between BuildNest and the customer."
  },
  {
    title: "7. Duplicate Payments",
    body: ["If a customer is charged more than once for the same transaction due to a system error, payment gateway issue, or banking issue, BuildNest will verify the transaction and process a refund for the duplicate amount."],
    closing: "Supporting documentation may be requested before processing."
  },
  {
    title: "8. Failed Transactions",
    body: ["If payment is successfully debited from a customer account but subscription is not activated, service access is not granted, or payment confirmation fails due to technical issues, the customer should immediately contact support."],
    bullets: ["Upon verification, BuildNest may activate the subscription.", "Upon verification, BuildNest may issue an appropriate refund."]
  },
  {
    title: "9. Unauthorized Transactions",
    body: [`Customers who believe an unauthorized payment has occurred should immediately notify ${site.supportEmail}. BuildNest may investigate the matter and cooperate with payment processors and financial institutions where appropriate.`],
    closing: "Refunds for unauthorized transactions shall be subject to verification and applicable payment regulations."
  },
  {
    title: "10. Subscription Cancellation",
    body: ["Users may cancel subscriptions at any time. Cancellation requests may be submitted through account settings if available, customer support, or email request."],
    closing: "Cancellation prevents future billing but does not automatically entitle the user to a refund. Users will continue to have access until the end of the active billing period unless otherwise specified."
  },
  {
    title: "11. Non-Refundable Items",
    body: ["The following are generally non-refundable:"],
    bullets: [
      "Monthly subscription fees after activation",
      "Setup fees",
      "Onboarding fees",
      "Custom development services",
      "Data migration services",
      "White-label services",
      "Dedicated server charges",
      "Consulting services",
      "Professional services",
      "Third-party service fees",
      "Taxes and government charges",
      "Charges related to completed service delivery"
    ]
  },
  {
    title: "12. Abuse of Refund Policy",
    body: ["BuildNest reserves the right to refuse refund requests where fraudulent activity is detected, abuse of services is identified, repeated refund requests occur, Terms and Conditions have been violated, or payment disputes are filed in bad faith."]
  },
  {
    title: "13. Chargebacks and Payment Disputes",
    body: ["Customers are encouraged to contact BuildNest before initiating chargebacks or payment disputes."],
    bullets: ["Improper chargebacks may result in temporary account suspension.", "Improper chargebacks may result in permanent account termination.", "Improper chargebacks may result in recovery actions for unpaid amounts."]
  },
  {
    title: "14. Refund Processing Timeline",
    body: ["Approved refunds are typically processed within 7 to 15 business days."],
    bullets: ["Actual processing times may vary depending on banks, credit card providers, UPI providers, payment gateways, and financial institutions."],
    closing: "BuildNest is not responsible for delays caused by third-party payment providers."
  },
  {
    title: "15. Changes to Pricing and Plans",
    body: ["BuildNest reserves the right to modify subscription pricing, plan features, billing cycles, and service offerings."],
    closing: "Changes will not affect completed transactions but may apply to future renewals and purchases."
  },
  {
    title: "16. Policy Updates",
    body: [`BuildNest may update this Refund and Cancellation Policy from time to time. Updated versions will be published on ${site.url}.`],
    closing: "Continued use of the platform after updates constitutes acceptance of the revised policy."
  },
  {
    title: "17. Contact Information",
    body: ["For billing, cancellation, or refund-related inquiries, contact BuildNest operated by FIXLAB."],
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
          `Email: ${site.supportEmail}, ${site.salesEmail}, ${site.email}`,
          `Website: ${site.url}`
        ]
      },
      {
        heading: "Platform Developed and Maintained By",
        lines: [
          "SYSGO LLP",
          "Technopark Back Gate Side",
          "Thiruvananthapuram",
          "Kerala - 695581",
          "India",
          "Phone: +91 97782 72227"
        ]
      }
    ]
  }
];

export default function RefundPolicyPage() {
  return (
    <>
      <section className="dark-band px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-mist">Refund and Cancellation Policy</p>
          <h1 className="max-w-4xl text-balance text-4xl font-black sm:text-6xl">BuildNest Refund and Cancellation Policy</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Effective Date: June 11, 2026. Last Updated: June 11, 2026.
          </p>
        </div>
      </section>

      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-lg border border-slate-200 bg-pearl p-6">
            <p className="leading-8 text-slate-700">
              BuildNest, operated by FIXLAB, is committed to transparent subscription and billing practices. This Refund and Cancellation Policy explains the terms governing subscription payments, cancellations, refunds, and billing-related matters for users of the BuildNest platform.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              By subscribing to or purchasing any BuildNest service, you agree to this Refund and Cancellation Policy.
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
            <p className="text-xl font-black">Acknowledgement</p>
            <p className="mt-3 leading-8 text-white/70">
              By purchasing, subscribing to, or using BuildNest services, you acknowledge that you have read, understood, and agreed to this Refund and Cancellation Policy.
            </p>
          </div>

          <div className="mt-8 rounded-lg border border-slate-200 bg-pearl p-6">
            <p className="text-xl font-black text-copy">Related Policies</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Link href="/terms-and-conditions" className="font-bold text-aqua hover:text-ink">Terms and Conditions</Link>
              <Link href="/privacy-policy" className="font-bold text-aqua hover:text-ink">Privacy Policy</Link>
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
          <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-aqua" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
