import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";
import { BrandLogo } from "@/components/brand-logo";
import { FloatingCtas, Header } from "@/components/conversion-layer";
import { site, seoKeywords } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const suppressInjectedDevError = `
  (() => {
    const isInjectedNoise = (value) => {
      const message = String(value && (value.message || value.reason || value) || "");
      return message.includes("_0x829cee") || message.includes("_0x259c40");
    };

    window.addEventListener("error", (event) => {
      if (!isInjectedNoise(event.error || event.message)) return;
      event.preventDefault();
      event.stopImmediatePropagation();
    }, true);

    window.addEventListener("unhandledrejection", (event) => {
      if (!isInjectedNoise(event.reason)) return;
      event.preventDefault();
      event.stopImmediatePropagation();
    }, true);
  })();
`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Build Nest | Construction Management Software India",
    template: "%s | Build Nest"
  },
  description: "Build Nest is a premium construction management SaaS platform for projects, workforce, procurement, billing, assets and reporting.",
  keywords: seoKeywords,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: "Build Nest | Construction Management Reimagined",
    description: "Manage projects, workforce, procurement, billing, assets and reporting from one intelligent construction operating system.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Build Nest construction management SaaS" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Build Nest | Construction Management Software",
    description: "India-focused construction ERP and site management SaaS.",
    images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: [
      { url: "/brand/buildnest-pwa-192.png", sizes: "192x192", type: "image/png" },
      { url: "/brand/buildnest-pwa-512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [{ url: "/brand/buildnest-pwa-192.png", sizes: "192x192", type: "image/png" }]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: site.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Android, iOS",
    description: metadata.description,
    url: site.url,
    brand: { "@type": "Brand", name: site.name },
    creator: { "@type": "Organization", name: site.developer },
    provider: {
      "@type": "Organization",
      name: site.managedBy,
      email: site.supportEmail,
      telephone: site.phone,
      address: site.offices.map((office) => ({
        "@type": "PostalAddress",
        name: office.name,
        streetAddress: office.address,
        addressCountry: "IN"
      }))
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: site.salesEmail,
        telephone: site.phone,
        areaServed: "IN"
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: site.supportEmail,
        telephone: site.phone,
        areaServed: "IN"
      }
    ],
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "0",
      priceCurrency: "INR"
    }
  };

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {process.env.NODE_ENV === "development" ? (
          <Script id="suppress-injected-dev-error" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: suppressInjectedDevError }} />
        ) : null}
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCtas />
        <Script id="build-nest-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </body>
    </html>
  );
}

function Footer() {
  const columns = [
    { title: "Product", links: ["Features", "Pricing", "Mobile App", "Security"] },
    { title: "Resources", links: ["Blog", "FAQ", "Whitepaper", "Product Tour"] },
    { title: "Company", links: ["About Us", "Contact", "Privacy Policy", "Terms and Conditions", "Refund Policy", "Cookie Policy", "Data Retention Policy", "Security Policy", "Request Demo", "Schedule Meeting"] }
  ];

  return (
    <footer className="bg-ink px-4 py-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <BrandLogo className="h-12 w-12" />
            <div>
              <p className="text-xl font-bold">{site.name}</p>
              <p className="text-sm text-mist">{site.tagline}</p>
            </div>
          </div>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/68">
            India-focused construction management SaaS for projects, workforce, procurement, billing, assets, documents and reports.
          </p>
          <p className="mt-5 text-sm text-white/60">Developed by {site.developer}. Managed by {site.managedBy}.</p>
          <div className="mt-5 grid gap-1 text-sm text-white/60">
            <a href={`mailto:${site.email}`} className="hover:text-mist">{site.email}</a>
            <a href={`mailto:${site.supportEmail}`} className="hover:text-mist">{site.supportEmail}</a>
            <a href={`tel:${site.phone.replaceAll(" ", "")}`} className="hover:text-mist">{site.phone}</a>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <p className="font-bold">{column.title}</p>
              <div className="mt-4 grid gap-3 text-sm text-white/65">
                {column.links.map((link) => (
                  <Link key={link} href={`/${link.toLowerCase().replaceAll(" ", "-").replace("mobile-app", "mobile-application")}`} className="hover:text-mist">
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Build Nest. All rights reserved.</p>
        <p>LinkedIn · X · YouTube · Instagram</p>
      </div>
    </footer>
  );
}
