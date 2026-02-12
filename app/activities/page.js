import ActivitiesPage from "@/components/activities/ActivitiesPage";

export const metadata = {
  title: "Activities",
  description:
    "Explore curated Pilotai activities from aerobatics and jet experiences to golf, tennis, wakeboarding, and concierge-level lifestyle adventures.",
  alternates: {
    canonical: "/activities",
  },
  openGraph: {
    url: "/activities",
    title: "Activities | Pilotai Program",
    description:
      "Discover the full range of Pilotai Program activities integrated with an elite aviation lifestyle.",
    images: [
      {
        url: "/images/IMG-7135@2x.png",
        width: 1512,
        height: 853,
        alt: "Pilotai activities hero",
      },
    ],
  },
};

export default function Activities() {
  return <ActivitiesPage />;
}
