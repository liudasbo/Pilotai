import { Jost } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import PageLoader from "@/components/layout/PageLoader";
import MotionBootstrap from "@/components/motion/MotionBootstrap";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

const ztNature = localFont({
  src: [
    {
      path: "./fonts/zt-nature/ZTNature-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/zt-nature/ZTNature-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/zt-nature/ZTNature-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/zt-nature/ZTNature-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-heading",
  display: "swap",
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
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/icon.svg"],
    apple: ["/icon.svg"],
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
    <html lang="en" className={`${jost.variable} ${ztNature.variable}`}>
      <body className="antialiased" suppressHydrationWarning>
        <PageLoader />
        <MotionBootstrap />
        {children}
      </body>
    </html>
  );
}
