import AircraftPage from "@/components/aircraft/AircraftPage";

export const metadata = {
  title: "Aircraft",
  description:
    "Discover the Bristell NG5 (2025) ultralight training aircraft used by Pilotai Program.",
  alternates: {
    canonical: "/aircraft",
  },
  openGraph: {
    url: "/aircraft",
    title: "Aircraft | Pilotai Program",
    description:
      "Explore the Bristell NG5 aircraft, key performance figures, and safety highlights.",
    images: [
      {
        url: "/images/IMG-7135@2x.png",
        width: 1512,
        height: 853,
        alt: "Bristell NG5 aircraft",
      },
    ],
  },
};

export default function Aircraft() {
  return <AircraftPage />;
}
