import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Section } from "@/components/section";
import { routeMeta, site } from "@/lib/site";

export const metadata: Metadata = routeMeta["/cookie-policy"];

type CookieGroup = {
  heading: string;
  lines?: string[];
  bullets?: string[];
};

type CookieSection = {
  title: string;
  body?: string[];
  bullets?: string[];
  groups?: CookieGroup[];
  closing?: string;
};

const sections: CookieSection[] = [
  {
    title: "1. About This Cookie Policy",
    body: [
      "This Cookie Policy explains how BuildNest uses cookies and similar technologies when you visit the BuildNest website, use the web application, access customer portals, or interact with related online services.",
      "Cookies help us operate the platform, maintain secure sessions, remember preferences, understand platform usage, improve performance, and support customer communication."
    ]
  },
  {
    title: "2. What Cookies Are",
    body: [
      "Cookies are small text files placed on your browser or device when you visit a website or use an online service. Cookies may be set directly by BuildNest or by trusted third-party service providers used to operate and improve the platform.",
      "Similar technologies may include local storage, session storage, pixels, tags, SDKs, and analytics identifiers."
    ]
  },
  {
    title: "3. Types of Cookies We May Use",
    groups: [
      {
        heading: "Essential Cookies",
        lines: ["Essential cookies are required for the website and platform to function properly. These cookies support security, page navigation, authentication, form handling, and session continuity."],
        bullets: ["Login and session management", "Security controls", "Load balancing", "Basic website functionality", "Form submission support"]
      },
      {
        heading: "Preference Cookies",
        lines: ["Preference cookies help remember choices you make so the platform can provide a more consistent experience."],
        bullets: ["Language or region preferences", "Interface settings", "Previously selected options", "Consent preferences"]
      },
      {
        heading: "Analytics and Performance Cookies",
        lines: ["Analytics cookies help us understand how users interact with BuildNest so we can improve usability, performance, content, and product experience."],
        bullets: ["Visited pages", "Navigation patterns", "Feature usage", "Performance data", "Error and diagnostic information"]
      },
      {
        heading: "Security Cookies",
        lines: ["Security cookies help protect accounts, detect suspicious activity, prevent fraud, and support secure access to the platform."],
        bullets: ["Authentication checks", "Abuse prevention", "Session protection", "Unauthorized access detection"]
      },
      {
        heading: "Marketing and Communication Cookies",
        lines: ["Where enabled, marketing or communication cookies may help us measure campaign performance, understand referral sources, or improve sales and support communication."],
        bullets: ["Referral tracking", "Campaign measurement", "Lead form performance", "Customer communication improvements"]
      }
    ]
  },
  {
    title: "4. Why We Use Cookies",
    body: ["BuildNest may use cookies and similar technologies to:"],
    bullets: [
      "Keep users signed in securely.",
      "Maintain platform sessions and prevent unauthorized access.",
      "Remember user choices and preferences.",
      "Improve website and application performance.",
      "Understand how visitors use the website and product pages.",
      "Measure product interest, form submissions, and support interactions.",
      "Detect, investigate, and prevent security issues.",
      "Improve features, content, and user experience."
    ]
  },
  {
    title: "5. Third-Party Cookies and Services",
    body: [
      "BuildNest may use trusted third-party providers for hosting, analytics, authentication, communication, payment processing, support, security, and infrastructure services.",
      "These providers may set cookies or similar technologies when their services are used on the website or platform. Each third-party provider is responsible for its own privacy and cookie practices."
    ],
    closing: "BuildNest does not control cookies set independently by third-party websites or services linked from BuildNest."
  },
  {
    title: "6. Cookies Used for Payments and Subscriptions",
    body: [
      "Where payment gateways, banks, UPI providers, or subscription tools are used, cookies or similar technologies may be required to process payments, verify transactions, prevent fraud, and maintain billing security.",
      "BuildNest does not store complete card numbers, CVV numbers, UPI PINs, internet banking passwords, or other sensitive banking credentials."
    ]
  },
  {
    title: "7. Managing Cookies",
    body: ["You can manage or disable cookies through your browser settings. Most browsers allow you to:"],
    bullets: [
      "View cookies stored on your device.",
      "Delete cookies.",
      "Block cookies from specific websites.",
      "Block third-party cookies.",
      "Clear cookies when the browser closes.",
      "Set preferences for tracking and privacy."
    ],
    closing: "Disabling certain cookies may affect website functionality, login sessions, forms, platform access, or user experience."
  },
  {
    title: "8. Browser Controls",
    body: ["Cookie controls are usually available in your browser's privacy or security settings. You may refer to your browser provider's help documentation for detailed instructions."],
    bullets: ["Google Chrome", "Mozilla Firefox", "Apple Safari", "Microsoft Edge", "Opera", "Mobile browser settings"]
  },
  {
    title: "9. Consent",
    body: [
      "Where required by applicable law, BuildNest may request consent before placing non-essential cookies on your device.",
      "By continuing to use BuildNest after cookie notices are displayed, or by selecting cookie preferences where available, you consent to the use of cookies according to this Cookie Policy and your selected preferences."
    ]
  },
  {
    title: "10. Do Not Track Signals",
    body: ["Some browsers may send Do Not Track signals. Because there is no uniform technical standard for responding to these signals, BuildNest may not respond to all Do Not Track requests in the same way."]
  },
  {
    title: "11. Updates to This Cookie Policy",
    body: [`BuildNest may update this Cookie Policy from time to time. Updated versions will be published on ${site.url}.`],
    closing: "Continued use of the website or platform after updates constitutes acceptance of the revised Cookie Policy."
  },
  {
    title: "12. Contact Information",
    body: ["For questions about this Cookie Policy or BuildNest privacy practices, contact BuildNest operated by FIXLAB."],
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

export default function CookiePolicyPage() {
  return (
    <>
      <section className="dark-band px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-mist">Cookie Policy</p>
          <h1 className="max-w-4xl text-balance text-4xl font-black sm:text-6xl">BuildNest Cookie Policy</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Effective Date: June 11, 2026. Last Updated: June 11, 2026.
          </p>
        </div>
      </section>

      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-lg border border-slate-200 bg-pearl p-6">
            <p className="leading-8 text-slate-700">
              BuildNest uses cookies and similar technologies to operate the website and platform, secure user sessions, improve performance, understand usage, and support customer communication.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              This policy should be read together with the BuildNest Privacy Policy and Terms and Conditions.
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
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Link href="/privacy-policy" className="font-bold text-aqua hover:text-ink">Privacy Policy</Link>
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
          <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-aqua" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
