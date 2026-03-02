import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import RunningTicker from "@/components/ui/RunningTicker";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/forms/ContactForm";
import NewsletterSection from "@/components/forms/NewsletterSection";
import { SITE_CONFIG } from "@/lib/siteConfig";

function ContactFormSection() {
  return (
    <section data-motion="text-only" className="w-full bg-white">
      <div className="w-full flex flex-col desktop:flex-row items-stretch desktop:min-h-[602px]">
        <Image quality={90}
          src="/images/Contact-form.png"
          alt="Aircraft above city skyline"
          width={755}
          height={602}
          className="w-full desktop:w-1/2 h-[320px] sm:h-[460px] desktop:h-full object-cover"
        />
        <div className="w-full desktop:w-1/2 h-full py-8 sm:py-10 desktop:py-0 px-4 sm:px-6 desktop:px-[40px] flex items-center">
          <div className="w-full max-w-[596px] mx-auto flex flex-col items-start gap-7">
            <SectionHeading as="h1" className="text-black">
              You can contact us
            </SectionHeading>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfoBand() {
  return (
    <section
      data-motion="reveal"
      className="w-full bg-whitesmoke-100 py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24 text-num-16 text-black font-jost"
    >
      <Container className="max-w-[1274px] flex flex-wrap items-start justify-between gap-8">
        <div className="flex flex-col items-start gap-[2.5px]">
          <h2 className="m-0 text-num-16 tracking-num-0_24 leading-num-22 uppercase font-medium">
            Email us
          </h2>
          <p className="m-0 leading-num-23 font-jost text-darkslategray-100">
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="touch-target hover:underline"
            >
              {SITE_CONFIG.contact.email}
            </a>
          </p>
        </div>
        <div className="flex flex-col items-start gap-[2.5px]">
          <h2 className="m-0 text-num-16 tracking-num-0_24 leading-num-22 uppercase font-medium">
            Call us
          </h2>
          <p className="m-0 leading-num-23 font-jost text-darkslategray-100">
            <a href="tel:+37060446088" className="touch-target hover:underline">
              {SITE_CONFIG.contact.phone}
            </a>
          </p>
        </div>
        <div className="flex flex-col items-start gap-[2.5px]">
          <h2 className="m-0 text-num-16 tracking-num-0_24 leading-num-22 uppercase font-medium">
            Address
          </h2>
          <p className="m-0 leading-num-23 font-jost text-darkslategray-100">
            {SITE_CONFIG.contact.location}
          </p>
        </div>
        <div className="flex flex-col items-start gap-[3px]">
          <h2 className="m-0 text-num-16 tracking-num-0_24 leading-num-22 uppercase font-medium">
            Working hours
          </h2>
          <p className="m-0 leading-num-23 font-jost text-darkslategray-100">
            {SITE_CONFIG.contact.workingHours}
          </p>
        </div>
      </Container>
    </section>
  );
}

export default function ContactPage() {
  return (
    <div className="w-full bg-white overflow-x-hidden flex flex-col items-stretch motion-scope">
      <main className="w-full pt-[72px] xl:pt-[124px]">
        <Header textColor="black" topSocialGray />
        <ContactFormSection />
      </main>
      <ContactInfoBand />
      <RunningTicker text="More than flying. A way of being." />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
