import Image from "next/image";
import Header from "./Header";
import HeroIcon from "./HeroIcon";

const HERO_BG =
  "https://picsum.photos/seed/pilotai-hero/1920/1080";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-end overflow-hidden bg-primary-dark">
      <Image
        src={HERO_BG}
        alt=""
        fill
        className="object-cover opacity-60"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-primary-dark/70" />
      <Header />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-section-x py-24 flex flex-col lg:flex-row items-start justify-between gap-12">
        <div className="max-w-2xl">
          <h1 className="text-white text-4xl md:text-5xl lg:text-heading-hero font-bold tracking-tight">
            Built Around
            <br />
            The Aircraft
          </h1>
          <div className="mt-8">
            <HeroIcon />
          </div>
          <div className="mt-4 flex gap-6 text-white text-body-sm tracking-wide">
            <span>Chapter 1</span>
            <span>Chapter 2</span>
          </div>
        </div>
        <div className="flex flex-col items-end max-w-md text-right">
          <p className="text-white text-body-sm tracking-wide leading-relaxed mb-6">
            RIDE WITH US, DISCOVER OUR STORY AND LIVE YOUR DREAMS. LEARN MORE.
          </p>
          <a
            href="#learn"
            className="inline-block bg-white text-primary-dark px-8 py-3 text-sm font-semibold tracking-wider hover:bg-neutral-200 transition-colors"
          >
            LEARN MORE
          </a>
        </div>
      </div>
    </section>
  );
}
