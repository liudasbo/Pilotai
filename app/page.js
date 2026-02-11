import HomePage from "@/components/home/HomePage";

export default function Home() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pilotai Program",
    url: "https://pilotaiprogram.com",
    logo: "https://pilotaiprogram.com/images/Group-18.svg",
    description:
      "Premium pilot training and aviation lifestyle experiences in Lithuania.",
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Pilotai Program",
    url: "https://pilotaiprogram.com",
  };

  return (
    <>
      <HomePage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
    </>
  );
}
