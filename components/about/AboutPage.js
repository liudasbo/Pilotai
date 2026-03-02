import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import RunningTicker from "@/components/ui/RunningTicker";
import SectionHeading from "@/components/ui/SectionHeading";
import ScenicSection from "@/components/ui/ScenicSection";

const ABOUT_PILLARS = [
  {
    number: "01",
    title: "Aviation Mastery",
    description: "Hands-on pilot training with real flight credentials.",
  },
  {
    number: "02",
    title: "Lifestyle Experience",
    description: "A curated blend of aviation, leisure, and elite comfort.",
  },
  {
    number: "03",
    title: "Elite Community",
    description: "A private circle of ambitious, high-caliber individuals.",
  },
  {
    number: "04",
    title: "Unmatched Access",
    description:
      "Exclusive aircraft, instructors, and behind-the-scenes experiences.",
  },
  {
    number: "05",
    title: "Tailored Journey",
    description: "A fully personalized program shaped around each participant.",
  },
  {
    number: "06",
    title: "Lithuania Reimagined",
    description: "Discover Europe's most underrated luxury destination.",
  },
];

function AboutHero() {
  return (
    <section
      data-motion="text-only"
      className="relative w-full min-h-[500px] desktop:min-h-[600px] overflow-hidden bg-darkslategray-200 isolate"
    >
      <Image quality={90}
        src="/images/AboutUsHero.jpg"
        alt="Pilotai Program team near aircraft"
        fill
        sizes="100vw"
        priority
        className="object-cover"
      />
      <div className="relative z-[1] min-h-[500px] desktop:min-h-[600px] flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center px-4 pb-10">
          <h1 className="m-0 text-white text-[36px] leading-[44px] desktop:text-[47px] desktop:leading-[52px] tracking-[0.7px] uppercase font-medium text-center">
            About Us
          </h1>
        </div>
      </div>
    </section>
  );
}

function PurposeSection() {
  return (
    <section
      data-motion="reveal"
      className="w-full bg-white py-16 sm:py-20 desktop:py-[97px] px-4 sm:px-6 desktop:px-num-119"
    >
      <Container className="grid grid-cols-1 desktop:grid-cols-[631px_1fr] gap-10 desktop:gap-28 items-center">
        <div className="grid grid-cols-2 gap-6 desktop:gap-[29px] items-start">
          <Image quality={90}
            src="/images/AboutUs1.jpg"
            alt="Pilot training cockpit controls"
            width={301}
            height={402}
            sizes="(min-width: 1024px) 301px, 45vw"
            className="w-full h-auto object-cover"
          />
          <Image quality={90}
            src="/images/AboutUs2.jpg"
            alt="Aircraft interior details"
            width={301}
            height={402}
            sizes="(min-width: 1024px) 301px, 45vw"
            className="w-full h-auto object-cover mt-0 desktop:mt-[62px]"
          />
        </div>
        <div className="w-full max-w-[515px] flex flex-col items-start gap-[18px]">
          <SectionHeading as="h2" className="text-black">
            Our Purpose
          </SectionHeading>
          <p className="m-0 text-section-body">
            We created Pilotai Program to redefine luxury travel, transforming
            it into a journey of skill, access, and personal achievement. This
            experience is built for individuals who seek authenticity, rarity,
            and a sense of belonging to something truly exceptional.
          </p>
        </div>
      </Container>
    </section>
  );
}

function PillarsSection() {
  return (
    <section
      data-motion="reveal"
      className="w-full bg-whitesmoke-100 py-16 sm:py-20 desktop:py-[129px] px-4 sm:px-6"
    >
      <Container className="grid grid-cols-1 sm:grid-cols-2 desktop:grid-cols-3 gap-x-8 desktop:gap-x-[72px] gap-y-12">
        {ABOUT_PILLARS.map((pillar) => (
          <article key={pillar.number} className="flex items-start gap-5">
            <span className="text-[44px] leading-[48px] text-slategray font-medium">
              {pillar.number}
            </span>
            <div className="flex flex-col items-start gap-2.5">
              <h3 className="m-0 text-[21px] tracking-[0.31px] leading-num-26 uppercase font-medium text-black">
                {pillar.title}
              </h3>
              <p className="m-0 text-num-16 leading-num-23 text-darkslategray-100">
                {pillar.description}
              </p>
            </div>
          </article>
        ))}
      </Container>
    </section>
  );
}

function AboutCtaSection() {
  return (
    <section
      data-motion="reveal"
      className="w-full bg-white py-16 sm:py-20 desktop:py-[103px] px-4 sm:px-6 desktop:px-[60px]"
    >
      <Container className="grid grid-cols-1 desktop:grid-cols-[550px_1fr] gap-10 desktop:gap-[60px] items-center">
        <Image quality={90}
          src="/images/AboutUs3.jpg"
          alt="Aircraft prepared for takeoff"
          width={550}
          height={499.2}
          className="w-full max-w-[550px] h-auto object-cover"
        />
        <div className="w-full max-w-[473px] flex flex-col items-start gap-9">
          <div className="w-full flex flex-col items-start gap-6">
            <SectionHeading as="h2" className="text-black">
              Created for Those Who Fly Higher
            </SectionHeading>
            <p className="m-0 text-section-body">
              Pilotai Program is an invitation into a world of mastery,
              prestige, and extraordinary experiences — reserved for a select
              few.
            </p>
          </div>
          <Button
            as={Link}
            href="/contact-us"
            variant="accent"
            className="pl-[41px] pr-10 flex items-start"
          >
            Request Your Invitation
          </Button>
        </div>
      </Container>
    </section>
  );
}

function HubSection() {
  return (
    <ScenicSection
      backgroundSrc="/images/AboutUs4.jpg"
      backgroundAlt="Vilnius city skyline at sunset"
    >
      <div className="w-full max-w-[707px] flex flex-col items-start gap-2">
        <p className="m-0 text-num-13 tracking-[0.46px] leading-num-26 font-medium text-whitesmoke-100">
          Redefining how the world experiences flight, lifestyle, and
          destination
        </p>
        <SectionHeading as="h2" className="text-white">
          Europe&apos;s New Luxury Aviation Hub
        </SectionHeading>
        <p className="m-0 text-num-16 leading-num-24 text-whitesmoke-100">
          Pilotai Program positions Lithuania at the forefront of luxury
          aviation in Europe where elite pilot training meets curated lifestyle
          experiences. More than a destination, it is a new reference point for
          those who seek exclusivity, mastery, and access beyond the obvious.
        </p>
      </div>
    </ScenicSection>
  );
}

function StorySection() {
  return (
    <section
      data-motion="reveal"
      className="w-full bg-white py-16 sm:py-20 desktop:py-[102px] px-4 sm:px-6 desktop:px-[206px]"
    >
      <Container className="flex flex-col gap-16 desktop:gap-[70px]">
        <div className="grid grid-cols-1 desktop:grid-cols-[550px_1fr] gap-10 desktop:gap-[70px] items-center">
          <Image quality={90}
            src="/images/AboutUs5.jpg"
            alt="Aircraft in hangar"
            width={550}
            height={463.6}
            className="w-full max-w-[550px] h-auto object-cover"
          />
          <div className="w-full max-w-[399px] flex flex-col items-start gap-6">
            <SectionHeading as="h2" className="text-black">
              Beyond Travel. Beyond Training.
            </SectionHeading>
            <p className="m-0 text-section-body">
              Pilotai Program blends aviation mastery, elite-level instruction,
              and a curated luxury lifestyle into one seamless experience.
              Participants earn a rare pilot license, fly multiple aircraft, and
              immerse themselves in private aviation, high-performance
              activities, and refined leisure.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 desktop:grid-cols-[1fr_550px] gap-10 desktop:gap-[102px] items-center">
          <div className="w-full max-w-[399px] flex flex-col items-start gap-6 order-2 desktop:order-1">
            <SectionHeading as="h2" className="text-black">
              Designed With Precision
            </SectionHeading>
            <p className="m-0 text-section-body">
              Every element of Pilotai Program is crafted with intention, from
              safety and training to hospitality, brand experience, and guest
              care. We operate with discretion, high-touch personalization, and
              uncompromising quality.
            </p>
          </div>
          <Image quality={90}
            src="/images/AboutUs6.jpg"
            alt="Aircraft from top view over water"
            width={550}
            height={463.6}
            className="w-full max-w-[550px] h-auto object-cover order-1 desktop:order-2"
          />
        </div>
      </Container>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className="page-root motion-scope">
      <AboutHero />
      <main className="w-full flex flex-col items-stretch">
        <PurposeSection />
        <PillarsSection />
        <AboutCtaSection />
        <HubSection />
        <StorySection />
        <RunningTicker text="More than flying. A way of being." />
        <AboutCtaSection />
      </main>
      <Footer />
    </div>
  );
}
