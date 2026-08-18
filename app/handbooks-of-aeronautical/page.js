import HandbookPage from "@/components/handbooks-of-aeronautical/HandbookPage";

export const metadata = {
  title: "Pilot's Handbook of Aeronautical Knowledge",
  description:
    "The full FAA Pilot's Handbook of Aeronautical Knowledge, condensed chapter by chapter — flying basics, aircraft structure, aerodynamics, systems, instruments, weather, navigation, airspace, and decision-making — for Pilotai Program students preparing for their course.",
  alternates: {
    canonical: "/handbooks-of-aeronautical",
  },
  openGraph: {
    url: "/handbooks-of-aeronautical",
    title: "Pilot's Handbook of Aeronautical Knowledge | Pilotai Program",
    description:
      "A complete pre-course reference condensed from all 18 chapters of the FAA handbook — the aircraft, aerodynamics, systems, weather, navigation, airspace, and decision-making.",
    images: [
      {
        url: "/images/aircraft/Aircraft-hero.png",
        width: 3024,
        height: 1200,
        alt: "Pilotai Program aircraft handbook",
      },
    ],
  },
};

export default function HandbooksOfAeronautical() {
  return <HandbookPage />;
}
