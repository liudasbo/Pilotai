import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const AIRCRAFT_MODELS = [
  {
    name: "Bristell Classic",
    image: "/images/aircraft/Bristell Classic.webp",
    tagline: "The proven workhorse of the skies",
    description:
      "The Bristell Classic is the ideal entry point into aircraft ownership — a refined, metal-construction sport aircraft built for reliability and comfort. With a spacious 130 cm wide cabin and a choice of Rotax engines, it suits both leisure pilots and those building serious flight hours.",
    specs: [
      { label: "Speed", value: "180 – 220 km/h" },
      { label: "Fuel capacity", value: "120 or 150 L" },
      { label: "Engine", value: "Rotax 912 / 914 / 915iS" },
      { label: "Cabin width", value: "130 cm" },
      { label: "Landing gear", value: "Fixed or retractable" },
      { label: "Avionics", value: "Garmin" },
    ],
    price: "From €82,000 + VAT",
    manufacturerUrl: "https://www.bristell.com/",
    manufacturerLabel: "bristell.com",
  },
  {
    name: "Bristell B8",
    image: "/images/aircraft/Bristell B8.webp",
    tagline: "Performance meets elegance",
    description:
      "The B8 is Bristell's high-performance evolution — built for pilots who want more speed without compromising comfort. Its clean aerodynamics and 240 km/h cruise speed make it one of the fastest light sport aircraft available, yet it retains the cabin refinement Bristell is known for.",
    specs: [
      { label: "Speed", value: "240 km/h" },
      { label: "Fuel capacity", value: "150 L" },
      { label: "Engine", value: "Rotax 912 / 915iS" },
      { label: "Cabin width", value: "125 cm" },
      { label: "Landing gear", value: "Fixed" },
      { label: "Avionics", value: "Garmin" },
    ],
    price: "From €145,000 + VAT",
    manufacturerUrl: "https://www.bristell.com/bristell-b8/",
    manufacturerLabel: "bristell.com/bristell-b8",
  },
  {
    name: "Bristell TDO",
    image: "/images/aircraft/Bristell TDO.webp",
    tagline: "Tailwheel freedom, no compromises",
    description:
      "The TDO brings the thrill of tailwheel flying to the modern Bristell platform. Capable of reaching up to 310 km/h with the right engine configuration, it appeals to pilots who want a dynamic, classic-feel aircraft with contemporary avionics and construction quality.",
    specs: [
      { label: "Speed", value: "240 – 310 km/h" },
      { label: "Fuel capacity", value: "120 or 160 L" },
      { label: "Engine", value: "Rotax 912 / 914 / 915iS / 916iS" },
      { label: "Cabin width", value: "130 cm" },
      { label: "Avionics", value: "Garmin / Kanardia" },
    ],
    price: "From €122,000 + VAT",
    manufacturerUrl: "https://www.bristell.com/",
    manufacturerLabel: "bristell.com",
  },
  {
    name: "Bristell RG",
    image: "/images/aircraft/Bristell RG.webp",
    tagline: "Retractable gear, serious cross-country capability",
    description:
      "With retractable landing gear and top speeds reaching 310 km/h, the Bristell RG is built for pilots who take long-distance flying seriously. It combines the build quality and comfort of the Bristell family with the aerodynamic efficiency of a retractable undercarriage.",
    specs: [
      { label: "Speed", value: "260 – 310 km/h" },
      { label: "Fuel capacity", value: "120 or 160 L" },
      { label: "Engine", value: "Rotax 912 / 912iS / 914 / 915iS / 916iS" },
      { label: "Cabin width", value: "130 cm" },
      { label: "Landing gear", value: "Retractable" },
    ],
    price: "From €131,000 + VAT",
    manufacturerUrl: "https://www.bristell.com/",
    manufacturerLabel: "bristell.com",
  },
  {
    name: "Bristell B23",
    image: "/images/aircraft/Bristell B23.webp",
    tagline: "EASA certified. Ready for everything.",
    description:
      "The B23 is Bristell's fully EASA-certified aircraft — designed for pilots who need to operate in controlled airspace, fly IFR, or simply want the highest level of regulatory approval available. Built to the same exacting standards as the rest of the range, it opens doors that LSA aircraft cannot.",
    specs: [
      { label: "Speed", value: "230 km/h" },
      { label: "Fuel capacity", value: "120 or 160 L" },
      { label: "Engine", value: "Rotax 915iS / 912iS / 916iS" },
      { label: "Certification", value: "EASA CS-23" },
    ],
    price: "From €261,000 + VAT",
    manufacturerUrl: "https://www.bristell.com/",
    manufacturerLabel: "bristell.com",
  },
];

const WHY_US = [
  {
    title: "Authorised Bristell Partner",
    body: "Pilotai Program is an official Bristell partner in the Baltics. You deal directly with people who fly, train on, and maintain these aircraft daily.",
  },
  {
    title: "Hands-on expertise",
    body: "We use Bristell aircraft in our own training programme. When you ask a question, we answer from experience — not from a brochure.",
  },
  {
    title: "Trial flight before you buy",
    body: "Unsure which model suits you? Book a trial flight with us and get a real feel for the aircraft before committing.",
  },
  {
    title: "Support after delivery",
    body: "Our team remains available after your purchase — for maintenance questions, training, or simply guidance as you build hours on your new aircraft.",
  },
];

function HeroSection() {
  return (
    <section className="relative w-full min-h-[500px] desktop:min-h-[600px] overflow-hidden bg-darkslategray-200 isolate">
      <Image
        quality={90}
        src="/images/aircraft/Aircraft-hero.png"
        alt="Bristell aircraft"
        fill
        sizes="100vw"
        priority
        className="object-cover"
      />
      <div className="relative z-[1] min-h-[500px] desktop:min-h-[600px] flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center px-4 pb-10">
          <div className="text-center text-white flex flex-col items-center gap-4">
            <p className="text-num-13 tracking-[0.46px] uppercase font-medium opacity-70">
              Aircraft
            </p>
            <h1 className="m-0 text-[36px] leading-[44px] desktop:text-[52px] desktop:leading-[58px] tracking-[0.7px] uppercase font-medium">
              Own Your Aircraft
            </h1>
            <p className="max-w-[480px] text-[16px] leading-[26px] opacity-80 mt-2">
              Premium Bristell aircraft, delivered through the Pilotai Program team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  return (
    <section
      data-motion="reveal"
      className="w-full bg-darkslategray-200 py-16 sm:py-20 desktop:py-[104px] px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24"
    >
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <p className="text-num-13 tracking-[0.46px] leading-num-26 uppercase font-medium text-silver">
            Why Pilotai Program
          </p>
          <SectionHeading className="text-white">
            Buy with confidence
          </SectionHeading>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 desktop:grid-cols-4 gap-8">
          {WHY_US.map((item) => (
            <div key={item.title} className="flex flex-col gap-3 border-t border-white/20 pt-6">
              <h3 className="text-white font-medium text-[16px] leading-[24px] uppercase tracking-[0.3px]">
                {item.title}
              </h3>
              <p className="text-silver text-[14px] leading-[22px]">{item.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function AircraftCard({ model, index }) {
  const isEven = index % 2 === 0;
  return (
    <section
      data-motion="reveal"
      className={`w-full py-16 sm:py-20 desktop:py-[104px] px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24 ${
        isEven ? "bg-white" : "bg-whitesmoke-100"
      }`}
    >
      <Container className="flex flex-col gap-10 desktop:gap-16">
        <div className="flex flex-col gap-2">
          <p className="text-num-13 tracking-[0.46px] leading-num-26 uppercase font-medium text-darkslategray-100">
            {model.tagline}
          </p>
          <SectionHeading className="text-black">{model.name}</SectionHeading>
        </div>
        <div className="flex flex-col desktop:flex-row gap-10 desktop:gap-16 items-start">
          <div className="flex flex-col gap-6 desktop:max-w-[480px]">
            <p className="text-section-body">{model.description}</p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button as={Link} href="/contact-us" className="pl-[41px] pr-10">
                <div className="relative text-left">Enquire about this model</div>
              </Button>
              <a
                href={model.manufacturerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] uppercase tracking-[0.39px] font-medium text-darkslategray-100 hover:text-black transition-colors duration-300 border-b border-current pb-0.5"
              >
                Manufacturer site →
              </a>
            </div>
          </div>
          <div className="w-full desktop:flex-1 flex flex-col gap-0 border-t border-black/10">
            {model.specs.map((spec) => (
              <div
                key={spec.label}
                className="flex items-center justify-between py-4 border-b border-black/10 text-[14px]"
              >
                <span className="text-darkslategray-100 uppercase tracking-[0.3px] font-medium text-[13px]">
                  {spec.label}
                </span>
                <span className="text-black font-medium">{spec.value}</span>
              </div>
            ))}
            <div className="flex items-center justify-between py-4 border-b border-black/10">
              <span className="text-darkslategray-100 uppercase tracking-[0.3px] font-medium text-[13px]">
                Starting price
              </span>
              <span className="text-black font-medium">{model.price}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CtaSection() {
  return (
    <section
      data-motion="reveal"
      className="w-full bg-whitesmoke-100 py-16 sm:py-20 desktop:py-[104px] px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24"
    >
      <Container className="flex flex-col desktop:flex-row items-start desktop:items-center justify-between gap-10">
        <div className="flex flex-col gap-4 max-w-[560px]">
          <SectionHeading className="text-black">
            Ready to take the next step?
          </SectionHeading>
          <p className="text-silver text-section-body">
            Get in touch with our team. We&apos;ll help you choose the right model,
            arrange a trial flight, and guide you through the entire purchase process.
          </p>
        </div>
        <Button as={Link} href="/contact-us" className="pl-[41px] pr-10 shrink-0">
          <div className="relative text-left">Contact us</div>
        </Button>
      </Container>
    </section>
  );
}

export default function BuyAircraftPage() {
  return (
    <div className="page-root motion-scope">
      <HeroSection />
      <WhyUsSection />
      {AIRCRAFT_MODELS.map((model, index) => (
        <AircraftCard key={model.name} model={model} index={index} />
      ))}
      <CtaSection />
      <Footer />
    </div>
  );
}
