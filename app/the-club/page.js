import TheClubPage from "@/components/club/TheClubPage";

export const metadata = {
  title: "The Club",
  description:
    "Discover Pilotai Club: a private circle of ambitious individuals united by aviation, access, and elevated lifestyle.",
  alternates: {
    canonical: "/the-club",
  },
  openGraph: {
    url: "/the-club",
    title: "The Club | Pilotai Program",
    description:
      "Explore Pilotai Club privileges, identity, and membership opportunities.",
    images: [
      {
        url: "/images/IMG-7135@2x.png",
        width: 1512,
        height: 853,
        alt: "Pilotai Club hero",
      },
    ],
  },
};

export default function TheClub() {
  return <TheClubPage />;
}
