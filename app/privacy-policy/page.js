import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Pilotai Program website, including data usage and contact information.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    url: "/privacy-policy",
    title: "Privacy Policy | Pilotai Program",
    description: "Read how Pilotai Program collects and uses personal data.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-white overflow-x-hidden motion-scope">
      <Header textColor="black" topSocialGray />
      <main className="w-full pt-[120px] sm:pt-[136px] desktop:pt-[221px] pb-12 sm:pb-16 desktop:pb-[97px] px-4 sm:px-6 desktop:px-num-119">
        <Container className="max-w-[900px] flex flex-col gap-6 text-black">
          <h1 className="m-0 text-[30px] leading-[36px] desktop:text-num-37 desktop:leading-num-42 tracking-num-0_56 uppercase font-medium">
            Privacy Policy
          </h1>
          <p className="m-0 text-num-16 leading-num-24 text-darkslategray-100 font-jost">
            Pilotai Program respects your privacy. We collect personal data only
            when you submit forms on this website, such as your name, phone,
            email, and message content.
          </p>
          <p className="m-0 text-num-16 leading-num-24 text-darkslategray-100 font-jost">
            We use this data to respond to your request, coordinate services,
            and provide relevant program information. We do not sell your
            personal data.
          </p>
          <p className="m-0 text-num-16 leading-num-24 text-darkslategray-100 font-jost">
            For data access, correction, or deletion requests, contact us at
            info@pilotaiprogram.com.
          </p>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
