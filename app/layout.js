import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

export const metadata = {
  metadataBase: new URL("https://pilotaiprogram.com"),
  title: {
    default: "Pilotai Program | Built Around The Aircraft",
    template: "%s | Pilotai Program",
  },
  description:
    "Pilotai Program in Lithuania: ultralight pilot training, curated aviation lifestyle, private luxury living, and premium recreational experiences.",
  keywords: [
    "Pilotai Program",
    "pilot training Lithuania",
    "ultralight pilot license",
    "aviation lifestyle",
    "luxury aviation program",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Pilotai Program | Built Around The Aircraft",
    description:
      "A premium aviation program in Lithuania combining pilot training, luxury living, and curated experiences.",
    siteName: "Pilotai Program",
    images: [
      {
        url: "/images/sr7-slide@2x.png",
        width: 1512,
        height: 900,
        alt: "Pilotai Program hero image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilotai Program | Built Around The Aircraft",
    description:
      "Premium pilot training and lifestyle experiences in Lithuania.",
    images: ["/images/sr7-slide@2x.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jost.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
