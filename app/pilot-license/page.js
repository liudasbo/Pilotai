import PilotLicensePage from "@/components/pilot-license/PilotLicensePage";

export const metadata = {
  title: "Pilot License",
  description:
    "Earn your ultralight pilot license with Pilotai Program through a structured training journey, modern aircraft, and premium support.",
  alternates: {
    canonical: "/pilot-license",
  },
  openGraph: {
    url: "/pilot-license",
    title: "Pilot License | Pilotai Program",
    description:
      "Explore Pilotai Program pilot license training path, flight curriculum, and progression from first briefing to independent flying.",
    images: [
      {
        url: "/images/Photos@2x.png",
        width: 550,
        height: 499,
        alt: "Pilot license training cockpit",
      },
    ],
  },
};

export default function PilotLicense() {
  return <PilotLicensePage />;
}
