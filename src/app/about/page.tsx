import type { Metadata } from "next";
import AboutClient from "./Aboutclient";

export const metadata: Metadata = {
  title: "Murivest Group | Institutional commercial real estate services",
  description:
    "Murivest is an independent, Global commercial real estate services practice helping owners, investors and tenants navigate commercial property mandates across selected gateway markets.",
  alternates: { canonical: "https://murivest.com/about" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Murivest Group | Institutional commercial real estate services",
    description:
      "Murivest Group is the global leader in commercial real estate services and investment specializing in institutional-grade opportunities.",
    url: "https://murivest.com/about",
    siteName: "Murivest",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Murivest",
    description:
      "Murivest Group is the global leader in commercial real estate services and investment specializing in institutional-grade opportunities.",
  },
};

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Murivest Group",
    url: "https://murivest.com/about",
    description:
      "Institutional commercial real estate services practice founded in 2025.",
    mainEntity: {
      "@type": "Organization",
      name: "Murivest Group Ltd",
      url: "https://murivest.com",
      foundingDate: "2025",
      founders: [
        {
          "@type": "Person",
          name: "Mark Muriithi",
          jobTitle: "Founder & Principal",
        },
      ],
      areaServed: ["Kenya", "United Arab Emirates", "United Kingdom", "Singapore"],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://murivest.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://murivest.com/about",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutClient />
    </>
  );
}