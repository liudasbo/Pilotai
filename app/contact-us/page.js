import ContactPage from "@/components/contact/ContactPage";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Pilotai Program for invitations, program details, and concierge-level aviation experiences.",
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    url: "/contact-us",
    title: "Contact Us | Pilotai Program",
    description:
      "Reach Pilotai Program by email, phone, or message for tailored aviation and lifestyle programs.",
    images: [
      {
        url: "/images/a@2x.png",
        width: 755,
        height: 602,
        alt: "Pilotai contact hero image",
      },
    ],
  },
};

export default function ContactUs() {
  return <ContactPage />;
}
