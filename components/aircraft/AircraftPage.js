import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import RunningTicker from "@/components/ui/RunningTicker";
import SectionHeading from "@/components/ui/SectionHeading";

const AIRCRAFT_STATS = [
  {
    image: "/images/01-h1@2x.png",
    text: "Cruise speed: approx. 200-220 km/h",
    width: 45,
    height: 41.5,
  },
  {
    image: "/images/02-h1@2x.png",
    text: "Maximum speed: around 240 km/h",
    width: 51,
    height: 41,
  },
  {
    image: "/images/03-h1@2x.png",
    text: "Endurance: up to 5-6 hours",
    width: 51,
    height: 41.4,
  },
];

function AircraftHero() {
  return (
    <section className="relative w-full min-h-[500px] desktop:min-h-[600px] overflow-hidden bg-darkslategray-200 isolate">
      <Image
        src="/images/IMG-7135@2x.png"
        alt="Bristell NG5 aircraft in flight"
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
      <div className="absolute inset-0 bg-[#0f2943]/55" />
      <div className="relative z-[1] min-h-[500px] desktop:min-h-[600px] flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center px-4 pb-10">
          <h1 className="m-0 text-white text-[36px] leading-[44px] desktop:text-[47px] desktop:leading-[52px] tracking-[0.7px] uppercase font-medium text-center">
            Aircraft
          </h1>
        </div>
      </div>
    </section>
  );
}

function AircraftIntroSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 desktop:py-[103px] px-4 sm:px-6 desktop:px-[60px]">
      <Container className="grid grid-cols-1 desktop:grid-cols-[550px_1fr] gap-10 desktop:gap-[60px] items-center">
        <Image
          src="/images/Photos@2x.png"
          alt="Bristell NG5 cockpit view while flying"
          width={550}
          height={499.2}
          className="w-full max-w-[550px] h-auto object-cover"
        />
        <div className="w-full max-w-[490px] flex flex-col items-start gap-6 text-left">
          <div className="text-num-13 tracking-[0.46px] leading-num-26 uppercase font-medium text-gray-200">
            Aircraft
          </div>
          <SectionHeading as="h2" className="text-black">
            Bristell NG5 (2025) - ultralight training aircraft
          </SectionHeading>
          <p className="m-0 text-section-body">
            The Bristell NG5 (2025) is a modern, high-performance ultralight
            aircraft designed for both training and recreational flying. With
            its sleek composite airframe, jet-style forward-opening canopy,
            excellent visibility, and stable handling, it provides an ideal
            platform for student pilots earning their Ultralight Pilot License.
          </p>
        </div>
      </Container>
    </section>
  );
}

function AircraftStatsSection() {
  return (
    <section className="w-full bg-whitesmoke-100 py-12 desktop:py-[110px] px-4 sm:px-6 desktop:px-[60px]">
      <Container className="flex flex-col desktop:flex-row items-start desktop:items-center justify-between gap-10 desktop:gap-8">
        {AIRCRAFT_STATS.map((item) => (
          <div key={item.text} className="flex items-center gap-5">
            <Image
              src={item.image}
              alt=""
              width={item.width}
              height={item.height}
              className="w-auto h-[41px] object-contain"
            />
            <p className="m-0 max-w-[255px] text-num-16 desktop:text-[21px] tracking-[0.31px] leading-num-26 uppercase font-medium text-black">
              {item.text}
            </p>
          </div>
        ))}
      </Container>
    </section>
  );
}

function AircraftSafetySection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 desktop:py-[103px] px-4 sm:px-6 desktop:px-[60px]">
      <Container className="grid grid-cols-1 desktop:grid-cols-[550px_1fr] gap-10 desktop:gap-[60px] items-center">
        <Image
          src="/images/Photos1@2x.png"
          alt="Bristell NG5 panel and avionics detail"
          width={550}
          height={499.2}
          className="w-full max-w-[550px] h-auto object-cover"
        />
        <div className="w-full max-w-[473px] flex flex-col items-start gap-6 text-left">
          <div className="text-num-13 tracking-[0.46px] leading-num-26 uppercase font-medium text-gray-200">
            Aircraft
          </div>
          <SectionHeading as="h2" className="text-black">
            Safety first
          </SectionHeading>
          <p className="m-0 text-section-body">
            The Bristell is equipped with a whole-aircraft ballistic safety
            parachute, offering an additional layer of protection in emergency
            situations. Combined with its robust structure, advanced avionics,
            and predictable flight characteristics, it delivers confidence for
            pilots at every stage of training.
          </p>
        </div>
      </Container>
    </section>
  );
}

function AircraftDetailsSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 desktop:py-[121px] px-4 sm:px-6 desktop:px-num-119">
      <Container className="max-w-[1274px] grid grid-cols-1 desktop:grid-cols-[631px_443px] gap-10 desktop:gap-28 items-center">
        <div className="grid grid-cols-2 gap-6 desktop:gap-[29px] items-start">
          <Image
            src="/images/sr7-mask-sr7-img@2x.png"
            alt="Bristell NG5 cockpit interior"
            width={301}
            height={402}
            className="w-full h-auto object-cover"
          />
          <Image
            src="/images/sr7-mask-sr7-img1@2x.png"
            alt="Bristell NG5 seats and interior details"
            width={301}
            height={402}
            className="w-full h-auto object-cover mt-0 desktop:mt-[62px]"
          />
        </div>
        <div className="w-full max-w-[443px] flex flex-col items-start gap-9 text-left">
          <div className="w-full flex flex-col items-start gap-[18px]">
            <div className="text-num-13 tracking-[0.46px] leading-num-26 uppercase font-medium text-gray-200">
              Aircraft
            </div>
            <SectionHeading as="h2" className="text-black">
              Bristell NG5
            </SectionHeading>
            <p className="m-0 text-section-body">
              Comfortable, efficient, and forgiving, the Bristell NG5 offers a
              smooth, modern flying experience, making learning to fly both
              safe and enjoyable. It is a perfect aircraft for the next
              generation of ultralight pilots.
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

export default function AircraftPage() {
  return (
    <div className="page-root">
      <AircraftHero />
      <main className="w-full flex flex-col items-stretch">
        <AircraftIntroSection />
        <AircraftStatsSection />
        <Image
          src="/images/Container@2x.png"
          alt="Lithuanian landscape from above"
          width={1512}
          height={560}
          className="w-full h-[320px] sm:h-[420px] desktop:h-[560px] object-cover"
        />
        <AircraftSafetySection />
        <RunningTicker text="More than flying. A way of being." />
        <AircraftDetailsSection />
      </main>
      <Footer />
    </div>
  );
}
