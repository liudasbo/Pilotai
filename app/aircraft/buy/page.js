import BuyAircraftPage from "@/components/aircraft/buy/BuyAircraftPage";

export const metadata = {
  title: "Buy Aircraft",
  description:
    "Purchase a Bristell aircraft through Pilotai Program — authorised partner in the Baltics. Five models available, from €82,000.",
  alternates: {
    canonical: "/aircraft/buy",
  },
  openGraph: {
    url: "/aircraft/buy",
    title: "Buy Aircraft | Pilotai Program",
    description:
      "Own a Bristell aircraft. Five models, expert guidance, trial flights. Delivered through the Pilotai Program team.",
    images: [
      {
        url: "/images/Aircraft-hero.png",
        width: 1512,
        height: 853,
        alt: "Bristell aircraft",
      },
    ],
  },
};

export default function BuyAircraft() {
  return <BuyAircraftPage />;
}
