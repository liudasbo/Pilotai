import AboutPage from "@/components/about/AboutPage";

export const metadata = {
  title: "About Us",
  description:
    "Learn the purpose behind Pilotai Program and how we combine aviation mastery with luxury lifestyle experiences.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    url: "/about-us",
    title: "About Us | Pilotai Program",
    description:
      "Discover Pilotai Program's mission, core pillars, and curated aviation experience.",
    images: [
      {
        url: "/images/IMG-7135@2x.png",
        width: 1512,
        height: 853,
        alt: "Pilotai Program About Us hero",
      },
    ],
  },
};

export default function AboutUs() {
  return <AboutPage />;
}
