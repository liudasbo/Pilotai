import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import RunningTicker from "@/components/ui/RunningTicker";
import SectionHeading from "@/components/ui/SectionHeading";
import NewsletterSection from "@/components/forms/NewsletterSection";
import PartnerStrip from "@/components/ui/PartnerStrip";
import { PARTNER_LOGOS } from "@/lib/content/partners";

const CLUB_PRIVILEGES = [
  {
    text: "Private aviation and flight experiences",
    iconSrc: "/images/ab-icon-1@2x.png",
    iconAlt: "Private aviation icon",
    iconWidth: 60,
    iconHeight: 60,
    iconClassName: "w-[18px] h-[18px] mt-1 object-contain",
  },
  {
    text: "Invitation-only social and business gatherings",
    iconSrc: "/images/ab-icon-3.svg",
    iconAlt: "Invitation icon",
    iconWidth: 30,
    iconHeight: 28,
    iconClassName: "w-[18px] h-[18px] mt-1 object-contain",
  },
  {
    text: "Priority access to Pilotai events and new programs",
    iconSrc: "/images/ab-icon-2.svg",
    iconAlt: "Priority access icon",
    iconWidth: 25,
    iconHeight: 19,
    iconClassName: "w-[18px] h-[18px] mt-1 object-contain",
  },
  {
    text: "Exclusive partner benefits (luxury lifestyle)",
    iconSrc: "/images/ab-icon-4.svg",
    iconAlt: "Partner benefits icon",
    iconWidth: 17,
    iconHeight: 12,
    iconClassName: "w-[18px] h-[18px] mt-1 object-contain",
  },
];

function TheClubHero() {
  return (
    <section
      data-motion="text-only"
      className="relative w-full min-h-[500px] desktop:min-h-[600px] overflow-hidden bg-darkslategray-200 isolate"
    >
      <Image quality={90}
        src="/images/Theclub-hero.png"
        alt="The Club hero with aircraft backdrop"
        fill
        sizes="100vw"
        priority
        className="object-cover"
      />
      <div className="relative z-[1] min-h-[500px] desktop:min-h-[600px] flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center px-4 pb-10 gap-6">
          <h1 className="m-0 text-white text-[36px] leading-[44px] desktop:text-[47px] desktop:leading-[52px] tracking-[0.7px] uppercase font-medium text-center">
            The Club
          </h1>
          <p className="m-0 max-w-[416px] text-[17px] leading-num-23 text-center text-white font-jost">
            A private circle for those who fly higher in the air, in business,
            and in life.
          </p>
          <Button
            as={Link}
            href="/contact-us"
            variant="accent"
            className="px-[42px] flex items-center justify-center tracking-[1px]"
          >
            Request Your Invitation
          </Button>
        </div>
      </div>
    </section>
  );
}

function ClubOverviewSection() {
  return (
    <section
      data-motion="reveal"
      className="w-full bg-white py-16 sm:py-20 desktop:py-[103px] px-4 sm:px-6 desktop:px-[206px]"
    >
      <Container className="grid grid-cols-1 desktop:grid-cols-[550px_1fr] gap-10 desktop:gap-[60px] items-center">
        <Image quality={90}
          src="/images/theClubPhoto.jpg"
          alt="Pilotai Club members gathered by aircraft"
          width={550}
          height={499.2}
          className="w-full max-w-[550px] h-auto object-cover"
        />
        <div className="w-full max-w-[473px] flex flex-col items-start gap-6">
          <div className="text-num-13 tracking-[0.46px] leading-num-26 uppercase font-medium text-gray-200">
            What is the club
          </div>
          <SectionHeading as="h2" className="text-black">
            More Than a Program. A Lifetime Network.
          </SectionHeading>
          <p className="m-0 text-section-body">
            Pilotai Club is an exclusive community of high-achieving individuals
            brought together by shared ambition, refined taste, and a passion
            for aviation. It is a space where meaningful relationships, business
            opportunities, and extraordinary experiences naturally emerge.
          </p>
        </div>
      </Container>
    </section>
  );
}

function ClubParallaxImage() {
  return (
    <Image quality={90}
      src="/images/TheClubSection.jpg"
      alt="Silhouettes in premium aviation lounge"
      width={1512}
      height={560}
      className="w-full h-[320px] sm:h-[420px] desktop:h-[560px] object-cover"
    />
  );
}

function ClubPrivilegesSection() {
  return (
    <section
      data-motion="reveal"
      className="w-full bg-white py-16 sm:py-20 desktop:py-[103px] px-4 sm:px-6 desktop:px-[206px]"
    >
      <Container className="grid grid-cols-1 desktop:grid-cols-[551px_1fr] gap-10 desktop:gap-[60px] items-center">
        <div className="relative w-full max-w-[551px] h-[500px] overflow-hidden">
          <Image quality={90}
            src="/images/clubPrivileges.jpg"
            alt="Pilotai Club branded bag"
            fill
            sizes="(min-width: 1024px) 551px, 100vw"
            className="object-cover"
          />
        </div>
        <div className="w-full max-w-[491px] flex flex-col items-start gap-10 desktop:gap-12">
          <div className="w-full flex flex-col items-start gap-6">
            <SectionHeading as="h2" className="text-black">
              Club Privileges
            </SectionHeading>
            <p className="m-0 text-section-body">
              Members gain access to a world designed around exclusivity,
              aviation, and elevated lifestyle.
            </p>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
            {CLUB_PRIVILEGES.map((item) => (
              <div key={item.text} className="flex items-start gap-[18px]">
                <Image quality={90}
                  src={item.iconSrc}
                  alt={item.iconAlt}
                  width={item.iconWidth}
                  height={item.iconHeight}
                  className={item.iconClassName}
                />
                <p className="m-0 text-num-16 tracking-num-0_24 leading-num-24 uppercase font-medium text-black">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ClubIdentitySection() {
  return (
    <section
      data-motion="reveal"
      className="w-full bg-white py-16 sm:py-20 desktop:py-[103px] px-4 sm:px-6 desktop:px-[206px]"
    >
      <Container className="grid grid-cols-1 desktop:grid-cols-[550px_1fr] gap-10 desktop:gap-[60px] items-center">
        <Image quality={90}
          src="/images/Bentley.jpg"
          alt="Luxury car in hangar environment"
          width={550}
          height={499.2}
          className="w-full max-w-[550px] h-auto object-cover"
        />
        <div className="w-full max-w-[473px] flex flex-col items-start gap-8">
          <div className="w-full flex flex-col items-start gap-6">
            <div className="text-num-13 tracking-[0.46px] leading-num-26 uppercase font-medium text-gray-200">
              Identity and Belonging
            </div>
            <SectionHeading as="h2" className="text-black">
              A Mark of Distinction
            </SectionHeading>
            <p className="m-0 text-section-body">
              Being part of Pilotai Club signals belonging to a rare circle:
              people who invest in growth, experiences, and lasting legacy.
              Membership is not just access; it is a statement of identity.
            </p>
          </div>
          <Button
            as={Link}
            href="/contact-us"
            variant="accent"
            className="pl-[41px] pr-10 flex items-start"
          >
            Request Membership Access
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default function TheClubPage() {
  return (
    <div className="page-root motion-scope">
      <TheClubHero />
      <main className="w-full flex flex-col items-stretch">
        <ClubOverviewSection />
        <ClubParallaxImage />
        <ClubPrivilegesSection />
        <RunningTicker text="More than flying. A way of being." />
        <PartnerStrip partners={PARTNER_LOGOS} />
        <ClubIdentitySection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
