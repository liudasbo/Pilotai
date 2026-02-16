import PilotLicensePolicyPage from "@/components/pilot-license-policy/PilotLicensePolicyPage";

export const metadata = {
  title: "Ultralight Pilot Training Program Policy",
  description:
    "Official Ultralight Pilot Training Program Policy for Pilotai Program in the Republic of Lithuania.",
  alternates: {
    canonical: "/pilot-license-policy",
  },
  openGraph: {
    url: "/pilot-license-policy",
    title: "Ultralight Pilot Training Program Policy | Pilotai Program",
    description:
      "Read the official terms, eligibility, payment, cancellation, liability, and legal framework for Pilotai Program training.",
    images: [
      {
        url: "/images/IMG-7135@2x.png",
        width: 1512,
        height: 853,
        alt: "Pilotai Program policy",
      },
    ],
  },
};

export default function PilotLicensePolicy() {
  return <PilotLicensePolicyPage />;
}
