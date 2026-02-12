import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import RunningTicker from "@/components/ui/RunningTicker";
import SectionHeading from "@/components/ui/SectionHeading";

const AEROBATIC_ACTIVITY = {
  image: "/images/Photo@2x.png",
  title: "Aerobatic Experience",
  description:
    "Experience high-adrenaline aerobatics alongside national champions, pushing limits while learning from the best. This is not a passenger ride; you are invited to take the controls and feel what precision flying really means.",
};

const GOLF_ACTIVITY = {
  image: "/images/Photo1@2x.png",
  title: "Golf",
  description:
    "Lithuania is home to multiple beautiful golf courses, many reachable by air. You fly yourself to selected courses, combining flying with golf sessions alongside trainers or Pilotai members, turning a round of golf into a true pilot's day out.",
};

const TENNIS_ACTIVITY = {
  image: "/images/Photo2@2x.png",
  title: "Tennis",
  description:
    "Play tennis in scenic, nature-rich courts with Pilotai members or professional trainers. These sessions are designed to balance intense flying days with active recovery, connection, and relaxed competition in beautiful surroundings.",
};

const RACE_CAR_ACTIVITY = {
  image: "/images/Photo3@2x.png",
  title: "Race Car Experience",
  description:
    "Take the thrill from the sky to the ground by driving high-performance race cars alongside champions. This experience is about precision, control, and speed, the same mindset that defines great pilots.",
};

const HORSE_RIDING_ACTIVITY = {
  image: "/images/Photo4@2x.png",
  title: "Horse Riding",
  description:
    "Horse riding at Harmony Park is truly exceptional. The park is home to prestigious OH (Oldenburger Horse) breeds known for elegance, strength, and world-class training standards. Surrounded by pristine nature, luxury villas, professional trainers, and beautifully designed stables, this offers a rare sense of harmony and refinement.",
};

const CONCIERGE_ACTIVITY = {
  image: "/images/Photo5@2x.png",
  title: "Concierge Experience",
  description:
    "Pilotai Program is a fully curated, concierge-level journey. Flights, ground transportation, and additional activities are arranged seamlessly. Each 20-day program is personally tailored around your interests, lifestyle, and pace, so every detail is handled from arrival to departure.",
};

const PARTNERS = [
  {
    src: "/images/Container.svg",
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

function ActivitiesHero() {
  return (
    <section className="relative w-full min-h-[500px] desktop:min-h-[600px] overflow-hidden bg-darkslategray-200 isolate">
      <Image
        src="/images/IMG-71351@2x.png"
        alt="Activities hero with aircraft background"
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
            Activities
          </h1>
          <p className="m-0 max-w-[484px] text-num-16 leading-num-24 text-center text-white font-jost">
            What makes these activities truly unique with Pilotai is how
            seamlessly aviation is woven into every experience. You do not just
            participate; you arrive as a pilot, connect with professionals and
            champions, and live the journey end-to-end.
          </p>
          <Button
            as={Link}
            href="/contact-us"
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

function ActivitySplitSection({ image, title, description }) {
  return (
    <section className="w-full bg-white py-16 sm:py-20 desktop:py-[103px] px-4 sm:px-6 desktop:px-[206px]">
      <Container className="grid grid-cols-1 desktop:grid-cols-[550px_1fr] gap-10 desktop:gap-[60px] items-center">
        <Image
          src={image}
          alt={`${title} activity`}
          width={550}
          height={499.2}
          className="w-full max-w-[550px] h-auto object-cover"
        />
        <div className="w-full max-w-[490px] flex flex-col items-start gap-[13px]">
          <div className="text-num-13 tracking-[0.46px] leading-num-26 uppercase font-medium text-gray-200">
            Activities
          </div>
          <SectionHeading as="h2" className="text-black">
            {title}
          </SectionHeading>
          <p className="m-0 text-section-body">{description}</p>
        </div>
      </Container>
    </section>
  );
}

function JetExperienceSection() {
  return (
    <section className="w-full relative overflow-hidden min-h-[560px] desktop:min-h-[560px]">
      <Image
        src="/images/IMG-71351@2x.png"
        alt="Jet team flight experience"
        fill
        className="object-cover"
      />
      <Image
        src="/images/Vector.svg"
        alt=""
        width={945}
        height={977}
        className="absolute pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] desktop:w-[62%] max-w-none opacity-70"
      />
      <div className="absolute inset-0 bg-[#182739]/45" />
      <Container className="relative z-[1] min-h-[560px] flex items-end py-14 desktop:py-[92px] px-4 sm:px-6 desktop:px-[70px]">
        <div className="w-full max-w-[473px] flex flex-col items-start gap-[13px]">
          <div className="text-num-13 tracking-[0.46px] leading-num-26 uppercase font-medium text-whitesmoke-100">
            Activities
          </div>
          <SectionHeading as="h2" className="text-white">
            Jet Experience
          </SectionHeading>
          <p className="m-0 text-num-16 leading-num-23 text-whitesmoke-100 font-jost">
            You fly yourself from Kaunas to Riga, turning the journey itself
            into part of the adventure. Upon arrival, you join an elite jet
            team for an unforgettable jet flight, bridging general and
            high-performance aviation in one seamless experience.
          </p>
        </div>
      </Container>
    </section>
  );
}

function PartnerStrip() {
  return (
    <section className="w-full bg-whitesmoke-100 py-10 desktop:py-[70px] px-4 desktop:px-10">
      <Container className="flex flex-wrap items-center justify-center gap-8 desktop:gap-[30px]">
        {PARTNERS.map((partner) => (
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

function WakeboardingSection() {
  return (
    <section className="w-full relative overflow-hidden min-h-[560px] desktop:min-h-[560px]">
      <Image
        src="/images/Parallax-Image@3x.png"
        alt="Wakeboarding activity scene"
        fill
        className="object-cover"
      />
      <Image
        src="/images/Vector1.svg"
        alt=""
        width={945}
        height={977}
        className="absolute pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] desktop:w-[62%] max-w-none opacity-70"
      />
      <div className="absolute inset-0 bg-[#182739]/45" />
      <Container className="relative z-[1] min-h-[560px] flex items-end py-14 desktop:py-[92px] px-4 sm:px-6 desktop:px-[70px]">
        <div className="w-full max-w-[473px] flex flex-col items-start gap-[13px]">
          <div className="text-num-13 tracking-[0.46px] leading-num-26 uppercase font-medium text-whitesmoke-100">
            Activities
          </div>
          <SectionHeading as="h2" className="text-white">
            Wakeboarding
          </SectionHeading>
          <p className="m-0 text-num-16 leading-num-23 text-whitesmoke-100 font-jost">
            Lithuania is famous for its lakes, offering a wide variety of
            wakeboarding locations, each with its own character and style. You
            explore different setups and environments, making every session
            fresh and exciting.
          </p>
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
            className="w-full border-none outline-none bg-transparent text-num-16 leading-num-24 text-darkslategray-100 placeholder:text-darkslategray-100 placeholder:opacity-100 font-jost"
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

export default function ActivitiesPage() {
  return (
    <div className="page-root">
      <ActivitiesHero />
      <main className="w-full flex flex-col items-stretch">
        <ActivitySplitSection {...AEROBATIC_ACTIVITY} />
        <JetExperienceSection />
        <ActivitySplitSection {...GOLF_ACTIVITY} />
        <ActivitySplitSection {...TENNIS_ACTIVITY} />
        <PartnerStrip />
        <ActivitySplitSection {...RACE_CAR_ACTIVITY} />
        <WakeboardingSection />
        <ActivitySplitSection {...HORSE_RIDING_ACTIVITY} />
        <ActivitySplitSection {...CONCIERGE_ACTIVITY} />
        <NewsletterSection />
        <RunningTicker text="More than flying. A way of being." />
      </main>
      <Footer />
    </div>
  );
}
