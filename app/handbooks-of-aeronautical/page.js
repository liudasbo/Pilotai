import HandbookPage from "@/components/handbooks-of-aeronautical/HandbookPage";

export const metadata = {
  title: "Pilot's Handbook of Aeronautical Knowledge",
  description:
    "Aircraft structure, aerodynamics, flight controls, systems, instruments, and weight & balance, condensed for Pilotai Program students preparing for their course.",
  alternates: {
    canonical: "/handbooks-of-aeronautical",
  },
  openGraph: {
    url: "/handbooks-of-aeronautical",
    title: "Pilot's Handbook of Aeronautical Knowledge | Pilotai Program",
    description:
      "A concentrated pre-course reference on the aircraft you will fly — structure, aerodynamics, controls, systems, instruments, and weight & balance.",
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
