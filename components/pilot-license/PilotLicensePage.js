import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import RunningTicker from "@/components/ui/RunningTicker";
import SectionHeading from "@/components/ui/SectionHeading";
import ScenicSection from "@/components/ui/ScenicSection";
import NewsletterSection from "@/components/forms/NewsletterSection";

function PilotLicenseHero() {
  return (
    <section
      data-motion="text-only"
      className="relative w-full min-h-[500px] desktop:min-h-[600px] overflow-hidden bg-darkslategray-200 isolate"
    >
      <Image
        src="/images/IMG-7135@2x.png"
        alt="Ultralight pilot license hero"
        fill
        priority
        className="object-cover"
      />
      <Image
        src="/images/Vector.svg"
        alt=""
        width={2052}
        height={1306}
        className="absolute pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[145%] desktop:w-[120%] max-w-none opacity-80"
      />
      <div className="absolute inset-0 bg-[#0f2943]/60" />
      <div className="relative z-[1] min-h-[500px] desktop:min-h-[600px] flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center px-4 pb-10">
          <h1 className="m-0 text-white text-[36px] leading-[44px] desktop:text-[47px] desktop:leading-[52px] tracking-[0.7px] uppercase font-medium text-center max-w-[520px]">
            Ultralight Pilot License
          </h1>
        </div>
      </div>
    </section>
  );
}

function IntroSplitSection() {
  return (
    <section
      data-motion="reveal"
      className="w-full bg-white py-16 sm:py-20 desktop:py-[97px] px-4 sm:px-6 desktop:px-num-119"
    >
      <Container className="max-w-[1274px] grid grid-cols-1 desktop:grid-cols-[631px_1fr] gap-10 desktop:gap-28 items-center">
        <div className="grid grid-cols-2 gap-6 desktop:gap-[29px] items-start">
          <Image
            src="/images/sr7-mask-sr7-img@2x.png"
            alt="Bristell aircraft in yellow livery"
            width={301}
            height={402}
            className="w-full h-auto object-cover"
          />
          <Image
            src="/images/sr7-mask-sr7-img1@2x.png"
            alt="Hangar and training aircraft"
            width={301}
            height={402}
            className="w-full h-auto object-cover mt-0 desktop:mt-[62px]"
          />
        </div>
        <div className="w-full max-w-[515px] flex flex-col items-start gap-[13px]">
          <div className="w-full flex flex-col items-start gap-1">
            <div className="text-num-13 tracking-[0.46px] leading-num-26 uppercase font-medium text-gray-200">
              Ultralight Pilot License
            </div>
            <SectionHeading as="h2" className="text-black">
              Train on the Bristell NG5 (2025 Edition)
            </SectionHeading>
          </div>
          <p className="m-0 text-section-body">
            Step into the world of refined aviation and earn your Ultralight
            Pilot License in Lithuania aboard the elegant and high-performance
            Bristell NG5 (2025) - a modern aircraft designed for precision,
            comfort, and excellence. This is not just flight training. It is a
            curated aviation experience.
          </p>
        </div>
      </Container>
    </section>
  );
}

function EntryRequirementsSection() {
  return (
    <ScenicSection
      backgroundSrc="/images/Parallax-Image@3x.png"
      backgroundAlt="Entry requirements background"
      overlaySrc="/images/Vector1.svg"
      tintClassName="bg-[#182739]/35"
    >
      <div className="w-full max-w-[707px] flex flex-col items-start gap-[13px] text-white">
        <SectionHeading as="h2" className="text-white">
          Entry Requirements
        </SectionHeading>
        <p className="m-0 text-num-16 leading-num-24 text-whitesmoke-100 font-jost">
          <span>Minimum age:</span>
          <strong> 16+</strong>
          <br />
          <span>Valid Medical Certificate</span>
          <br />
          <span>Commitment to complete a full professional training program</span>
        </p>
      </div>
    </ScenicSection>
  );
}

function EliteTheorySection() {
  return (
    <section
      data-motion="reveal"
      className="w-full bg-white py-16 sm:py-20 desktop:py-[97px] px-4 sm:px-6 desktop:px-num-119"
    >
      <Container className="max-w-[1274px] grid grid-cols-1 desktop:grid-cols-[1fr_631px] gap-10 desktop:gap-28 items-center">
        <div className="w-full max-w-[515px] flex flex-col items-start gap-[13px] order-2 desktop:order-1">
          <div className="w-full flex flex-col items-start gap-1">
            <div className="text-num-13 tracking-[0.46px] leading-num-26 uppercase font-medium text-gray-200">
              Ultralight Pilot License
            </div>
            <SectionHeading as="h2" className="text-black">
              Elite Theoretical Preparation
            </SectionHeading>
          </div>
          <p className="m-0 text-section-body">
            Your training includes the complete Lithuanian Ultralight Pilot
            License syllabus, delivered by experienced aviation professionals.
            <br />
            <br />
            <strong>The 8 core subjects:</strong>
            <br />
            1. Air Law
            <br />
            2. Human Performance &amp; Limitations
            <br />
            3. Meteorology
            <br />
            4. Communications (Radio Telephony)
            <br />
            5. Principles of Flight
            <br />
            6. Aircraft General Knowledge
            <br />
            7. Flight Performance &amp; Planning
            <br />
            8. Navigation
            <br />
            <br />
            Our instructors guide you step-by-step through the theory program,
            ensuring clarity, confidence, and complete exam readiness - so you
            never feel overwhelmed.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 desktop:gap-[29px] items-start order-1 desktop:order-2">
          <Image
            src="/images/sr7-mask-sr7-img2@2x.png"
            alt="Pilot in cockpit with sunglasses"
            width={301}
            height={402}
            className="w-full h-auto object-cover"
          />
          <Image
            src="/images/sr7-mask-sr7-img3@2x.png"
            alt="Pilot training portrait"
            width={301}
            height={402}
            className="w-full h-auto object-cover mt-0 desktop:mt-[62px]"
          />
        </div>
      </Container>
    </section>
  );
}

function ExcellenceSection() {
  return (
    <section
      data-motion="reveal"
      className="w-full bg-white py-16 sm:py-20 desktop:py-[102px] px-4 sm:px-6 desktop:px-[206px]"
    >
      <Container className="max-w-[1274px] flex flex-col gap-10 desktop:gap-[70px]">
        <div className="grid grid-cols-1 desktop:grid-cols-[550px_1fr] gap-10 desktop:gap-[70px] items-center">
          <Image
            src="/images/Photos@2x.png"
            alt="Aircraft instrument panel"
            width={550}
            height={499}
            className="w-full h-auto object-cover"
          />
          <div className="w-full flex flex-col items-start gap-[13px]">
            <div className="w-full flex flex-col items-start gap-1">
              <div className="text-num-13 tracking-[0.46px] leading-num-26 uppercase font-medium text-gray-200">
                Ultralight Pilot License
              </div>
              <SectionHeading as="h2" className="text-black">
                Flight Excellence
              </SectionHeading>
            </div>
            <p className="m-0 text-section-body">
              <strong>
                25 hours of flight training
                <br />
                1-hour official practical examination
                <br />
              </strong>
              Personalized instruction with experienced pilots
              <br />
              Real airspace navigation experience
              <br />
              Advanced take-off and landing mastery
              <br />
              Emergency scenario training
            </p>
            <p className="m-0 text-section-body">
              Every flight is conducted with precision, discipline, and
              attention to safety at the highest standard.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 desktop:grid-cols-[1fr_550px] gap-10 desktop:gap-[70px] items-center">
          <div className="w-full flex flex-col items-start gap-[13px] order-2 desktop:order-1">
            <div className="w-full flex flex-col items-start gap-1">
              <div className="text-num-13 tracking-[0.46px] leading-num-26 uppercase font-medium text-gray-200">
                Ultralight Pilot License
              </div>
              <SectionHeading as="h2" className="text-black">
                What the Executive Program Includes
              </SectionHeading>
            </div>
            <p className="m-0 text-section-body">
              Your training package is fully comprehensive:
              <br />
              Exclusive access to the <strong>Bristell NG5</strong> (2025) for
              20 days
              <br />
              Professional aviation headset
              <br />
              Official program attire
              <br />
              All aircraft fuel (petrol) included
              <br />
              Airport entry &amp; landing fees fully covered
              <br />
              Logbook
              <br />
              Dedicated flight instructors
              <br />
              Complete theory instruction &amp; exam preparation
            </p>
            <p className="m-0 text-section-body">
              There are no hidden operational costs - the program manages every
              detail so you can focus purely on performance and progression.
            </p>
          </div>
          <Image
            src="/images/Photos1@2x.png"
            alt="Pilot with aviation headset"
            width={550}
            height={499}
            className="w-full h-auto object-cover order-1 desktop:order-2"
          />
        </div>
      </Container>
    </section>
  );
}

function DistinctiveJourneySection() {
  return (
    <section
      data-motion="reveal"
      className="w-full bg-white pt-0 pb-16 sm:pb-20 desktop:pb-[97px] px-4 sm:px-6 desktop:px-num-119"
    >
      <Container className="max-w-[1274px] grid grid-cols-1 desktop:grid-cols-[631px_1fr] gap-10 desktop:gap-28 items-center">
        <div className="grid grid-cols-2 gap-6 desktop:gap-[29px] items-start">
          <Image
            src="/images/sr7-mask-sr7-img@2x.png"
            alt="Aircraft exterior close-up"
            width={301}
            height={402}
            className="w-full h-auto object-cover"
          />
          <Image
            src="/images/sr7-mask-sr7-img4@2x.png"
            alt="Aircraft in sunset"
            width={301}
            height={402}
            className="w-full h-auto object-cover mt-0 desktop:mt-[62px]"
          />
        </div>
        <div className="w-full max-w-[515px] flex flex-col items-start gap-9">
          <div className="w-full flex flex-col items-start gap-[13px]">
            <div className="w-full flex flex-col items-start gap-1">
              <div className="text-num-13 tracking-[0.46px] leading-num-26 uppercase font-medium text-gray-200">
                Ultralight Pilot License
              </div>
              <SectionHeading as="h2" className="text-black">
                A Distinctive Aviation Journey
              </SectionHeading>
            </div>
            <p className="m-0 text-section-body">
              Pilotai Program is an invitation into a world of mastery,
              prestige, and extraordinary experiences - reserved for a select
              few.
              <br />
              <br />
              You will not simply obtain a license - you will develop
              confidence, discipline, and command in the cockpit of a modern
              European aircraft.
            </p>
          </div>
          <Button
            as={Link}
            href="/contact-us"
            variant="accent"
            className="py-3 px-[42px]"
          >
            Request Your Invitation
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default function PilotLicensePage() {
  return (
    <div className="page-root motion-scope">
      <PilotLicenseHero />
      <main className="w-full flex flex-col items-stretch">
        <IntroSplitSection />
        <EntryRequirementsSection />
        <EliteTheorySection />
        <RunningTicker text="More than flying. A way of being." />
        <ExcellenceSection />
        <DistinctiveJourneySection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
