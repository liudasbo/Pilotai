import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";

export const metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and Conditions for using Pilotai Program website and submitting inquiries.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
  openGraph: {
    url: "/terms-and-conditions",
    title: "Terms and Conditions | Pilotai Program",
    description: "Read website and inquiry submission terms for Pilotai Program.",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="w-full bg-white overflow-x-hidden motion-scope">
      <Header textColor="black" topSocialGray />
      <main className="w-full pt-[120px] sm:pt-[136px] desktop:pt-[221px] pb-12 sm:pb-16 desktop:pb-[97px] px-4 sm:px-6 desktop:px-num-119">
        <Container className="max-w-[900px] flex flex-col gap-6 text-black">
          <h1 className="m-0 text-[30px] leading-[36px] desktop:text-num-37 desktop:leading-num-42 tracking-num-0_56 uppercase font-medium">
            Terms and Conditions
          </h1>
          <p className="m-0 text-num-16 leading-num-24 text-darkslategray-100 font-jost">
            By using this website, you agree to use it lawfully and to provide
            accurate information in all submitted forms.
          </p>
          <p className="m-0 text-num-16 leading-num-24 text-darkslategray-100 font-jost">
            Information presented on this website is for informational purposes
            only and may be updated without prior notice.
          </p>
          <p className="m-0 text-num-16 leading-num-24 text-darkslategray-100 font-jost">
            Program participation terms are governed by dedicated Pilot License
            Policy documentation and Lithuanian legal requirements.
          </p>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
