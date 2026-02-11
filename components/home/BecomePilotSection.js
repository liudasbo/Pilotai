import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function BecomePilotSection() {
  return (
    <section className="w-full shrink-0 py-16 sm:py-20 desktop:py-[110px] px-4 sm:px-6 desktop:px-[60px]">
      <Container className="flex flex-col items-center gap-10 desktop:flex-row desktop:items-start desktop:justify-between desktop:gap-16">
        <div className="hidden desktop:flex desktop:order-1 justify-center desktop:justify-start desktop:pt-[97px]">
          <Image
            className="w-[150px] sm:w-[180px] desktop:w-[193px] relative h-auto object-cover"
            loading="lazy"
            width={192.9}
            height={176.4}
            sizes="100vw"
            alt=""
            src="/images/Right-img@2x.png"
          />
        </div>
        <section className="order-1 desktop:order-2 w-full max-w-[567px] flex flex-col items-center gap-8 text-center text-num-37 text-black font-jost">
          <Image
            className="w-[65px] h-auto desktop:w-[85.7px] desktop:h-[151.2px] relative"
            loading="lazy"
            width={85.7}
            height={151.2}
            sizes="100vw"
            alt=""
            src="/images/Logo-symbol.svg"
          />
          <div className="self-stretch flex flex-col items-center gap-6">
            <SectionHeading className="self-stretch relative">
              Become a Pilot in Lithuania
            </SectionHeading>
            <div className="text-section-body w-full max-w-[521.5px] relative flex items-center justify-center">
              Experience unique 20-day journey in Lithuania that blends aviation
              training, premium comfort, and memorable adventures. This program
              is designed for those who want to discover something new while
              enjoying a refined and exciting getaway.
            </div>
          </div>
          <Button className="pl-[41px] pr-10 flex flex-col items-start">
            <div className="relative text-left">
              See the package
            </div>
          </Button>
        </section>
        <div className="order-2 desktop:hidden w-full flex items-center justify-center gap-6">
          <Image
            className="w-[150px] sm:w-[180px] relative h-auto object-cover"
            loading="lazy"
            width={192.9}
            height={176.4}
            sizes="100vw"
            alt=""
            src="/images/Right-img@2x.png"
          />
          <Image
            className="w-[150px] sm:w-[180px] relative h-auto object-cover"
            loading="lazy"
            width={192.9}
            height={176.2}
            sizes="100vw"
            alt=""
            src="/images/Left-img@2x.png"
          />
        </div>
        <div className="hidden desktop:flex order-3 justify-center desktop:justify-end desktop:pt-[195px]">
          <Image
            className="w-[150px] sm:w-[180px] desktop:w-[193px] relative h-auto object-cover"
            loading="lazy"
            width={192.9}
            height={176.2}
            sizes="100vw"
            alt=""
            src="/images/Left-img@2x.png"
          />
        </div>
      </Container>
    </section>
  );
}
