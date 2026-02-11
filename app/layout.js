import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

export const metadata = {
  title: "Pilotai – Built Around The Aircraft",
  description: "Become a pilot in Lithuania. Ultralight pilot license, premium club, luxury living.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jost.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
