import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const CLUB_PRIVILEGES = [
  "Private aviation and flight experiences",
  "Invitation-only social and business gatherings",
  "Priority access to Pilotai events and new programs",
  "Exclusive partner benefits (luxury lifestyle)",
];

const CLUB_PARTNERS = [
  {
    src: "/images/Container1.svg",
    alt: "Partner logo",
    width: 262.4,
    height: 42.2,
    className: "w-[180px] desktop:w-[220px] h-auto",
  },
  {
    src: "/images/Baltic-Bees-Jet-team-emblem@2x.png",
    alt: "Baltic Bees Jet Team emblem",
    width: 73.7,
    height: 72.2,
    className: "w-[44px] desktop:w-[62px] h-auto",
  },
  {
    src: "/images/logo-en-white-1@2x.png",
    alt: "Partner logo",
    width: 104,
    height: 50,
    className: "w-[74px] desktop:w-[96px] h-auto",
  },
  {
    src: "/images/313Cablepark-Logotipas-BLACK-RGB@2x.png",
    alt: "313 Cable Park logo",
    width: 70.2,
    height: 70.2,
    className: "w-[44px] desktop:w-[62px] h-auto",
  },
  {
    src: "/images/logo-en-white-11@2x.png",
    alt: "Partner logo",
    width: 76.2,
    height: 49.9,
    className: "w-[58px] desktop:w-[76px] h-auto",
  },
];

function TheClubHero() {
  return (
    <section className="relative w-full min-h-[500px] desktop:min-h-[600px] overflow-hidden bg-darkslategray-200 isolate">
      <Image
        src="/images/IMG-7135@2x.png"
        alt="The Club hero with aircraft backdrop"
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
        <div className="flex-1 flex flex-col items-center justify-center px-4 pb-10 gap-4">
          <h1 className="m-0 text-white text-[36px] leading-[44px] desktop:text-[47px] desktop:leading-[52px] tracking-[0.7px] uppercase font-medium text-center">
            The Club
          </h1>
          <p className="m-0 max-w-[416px] text-[17px] leading-num-23 text-center text-white font-jost">
            A private circle for those who fly higher in the air, in business,
            and in life.
          </p>
          <Button
            as={Link}
            href="/#contacts"
            variant="accent"
            className="px-[42px] flex items-center justify-center"
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
    <section className="w-full bg-white py-16 sm:py-20 desktop:py-[103px] px-4 sm:px-6 desktop:px-[206px]">
      <Container className="grid grid-cols-1 desktop:grid-cols-[550px_1fr] gap-10 desktop:gap-[60px] items-center">
        <Image
          src="/images/Photo@3x.png"
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
            Pilotai Club is an exclusive community of high-achieving
            individuals brought together by shared ambition, refined taste, and
            a passion for aviation. It is a space where meaningful
            relationships, business opportunities, and extraordinary experiences
            naturally emerge.
          </p>
        </div>
      </Container>
    </section>
  );
}

function ClubParallaxImage() {
  return (
    <Image
      src="/images/Container@2x.png"
      alt="Silhouettes in premium aviation lounge"
      width={1512}
      height={560}
      className="w-full h-[320px] sm:h-[420px] desktop:h-[560px] object-cover"
    />
  );
}

function ClubPrivilegesSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 desktop:py-[103px] px-4 sm:px-6 desktop:px-[206px]">
      <Container className="grid grid-cols-1 desktop:grid-cols-[551px_1fr] gap-10 desktop:gap-[60px] items-center">
        <div className="relative w-full max-w-[551px] h-[500px] overflow-hidden">
          <Image
            src="/images/Free-Bag-Mockup-on-the-Wall-copy2-1@2x.png"
            alt="Pilotai Club branded bag"
            fill
            className="object-cover"
          />
          <Image
            src="/images/Tshirt-copy-1@2x.png"
            alt="Pilotai Club branded t-shirt"
            width={982.6}
            height={734}
            className="absolute top-[-158px] left-[-78px] w-[982px] h-auto max-w-none"
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
              <div key={item} className="flex items-start gap-[18px]">
                <Image
                  src="/images/ab-icon-1@2x.png"
                  alt=""
                  width={30}
                  height={30}
                  className="w-[18px] h-[18px] mt-1"
                />
                <p className="m-0 text-num-16 tracking-num-0_24 leading-num-24 uppercase font-medium text-black">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ClubTickerBand() {
  return (
    <div className="w-full bg-darkslategray-200 py-[13px] overflow-hidden">
      <div className="ticker-track flex w-max items-center gap-8 desktop:gap-14 whitespace-nowrap px-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <i
            key={`club-ticker-${index}`}
            className="text-white relative leading-num-25 inline-block shrink-0"
          >
            More than flying. A way of being.
          </i>
        ))}
      </div>
    </div>
  );
}

function ClubPartnersStrip() {
  return (
    <section className="w-full bg-whitesmoke-100 py-10 desktop:py-[70px] px-4 desktop:px-10">
      <Container className="flex flex-wrap items-center justify-center gap-8 desktop:gap-[30px]">
        {CLUB_PARTNERS.map((partner) => (
          <Image
            key={partner.src}
            src={partner.src}
            alt={partner.alt}
            width={partner.width}
            height={partner.height}
            className={partner.className}
          />
        ))}
      </Container>
    </section>
  );
}

function ClubIdentitySection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 desktop:py-[103px] px-4 sm:px-6 desktop:px-[206px]">
      <Container className="grid grid-cols-1 desktop:grid-cols-[550px_1fr] gap-10 desktop:gap-[60px] items-center">
        <Image
          src="/images/Photo1@3x.png"
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
            href="/#contacts"
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

function NewsletterSection() {
  return (
    <section className="w-full bg-whitesmoke-100 py-16 sm:py-20 desktop:py-[119px] px-4 sm:px-6 text-center">
      <Container className="max-w-[802px] flex flex-col items-center gap-[22px]">
        <SectionHeading as="h2" className="text-black text-center">
          Our Newsletter
        </SectionHeading>
        <p className="m-0 text-num-16 leading-num-24 text-darkslategray-100 font-jost">
          No invitations, only pure fly content
        </p>
        <form className="w-full border-b border-black flex items-center justify-between gap-4 py-2">
          <input
            type="email"
            placeholder="Email Address"
            aria-label="Email Address"
            className="w-full border-none outline-none bg-transparent text-num-16 leading-num-24 text-darkslategray-100 font-jost"
          />
          <button type="submit" aria-label="Subscribe to newsletter">
            <Image
              src="/images/Button.svg"
              alt=""
              width={17}
              height={12}
              className="w-[17px] h-3"
            />
          </button>
        </form>
        <p className="m-0 text-[14px] leading-num-24 text-darkslategray-100 font-jost">
          Privacy Policy and Terms &amp; Conditions.
        </p>
      </Container>
    </section>
  );
}

export default function TheClubPage() {
  return (
    <div className="page-root">
      <TheClubHero />
      <main className="w-full flex flex-col items-stretch">
        <ClubOverviewSection />
        <ClubParallaxImage />
        <ClubPrivilegesSection />
        <ClubTickerBand />
        <ClubPartnersStrip />
        <ClubIdentitySection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
