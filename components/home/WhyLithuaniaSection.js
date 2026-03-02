import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function WhyLithuaniaSection() {
  return (
    <section
      id="about"
      data-motion="reveal"
      className="self-stretch bg-whitesmoke-100 shrink-0 flex flex-col items-start py-16 sm:py-20 desktop:py-[86px] px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24 box-border"
    >
      <Container className="flex flex-col gap-10 xl:flex-row xl:items-center xl:gap-[116px]">
        <section className="w-full xl:w-[627px] flex items-start justify-center pt-0 pb-0 xl:pb-[53px] pl-0 xl:pl-[329px] pr-0 xl:pr-0 box-border gap-4 xl:gap-[29px]">
          <Image quality={90}
            className="ml-0 xl:ml-[-330px] h-auto xl:h-num-402 w-[45%] xl:w-[301px] relative object-cover shrink-0"
            width={301}
            height={402}
            sizes="(min-width: 1280px) 301px, 45vw"
            alt=""
            src="/images/sr7-mask2@2x.png"
          />
          <div className="w-[45%] xl:w-[301px] h-auto xl:h-num-402 flex flex-col items-start pt-8 xl:pt-[55px] px-0 pb-0 box-border shrink-0">
            <Image quality={90}
              className="w-full xl:w-[301px] h-auto xl:h-num-402 relative object-cover"
              loading="lazy"
              width={301}
              height={402}
              sizes="(min-width: 1280px) 301px, 45vw"
              alt=""
              src="/images/sr7-mask3@2x.png"
            />
          </div>
        </section>
        <section className="w-full xl:w-[531px] flex flex-col items-start py-0 xl:py-num-20 px-0 box-border gap-8 xl:gap-9 text-left text-num-37 text-black font-jost">
          <div className="w-full flex flex-col items-start gap-6">
            <SectionHeading>Why Lithuania</SectionHeading>
            <div className="text-section-body w-full relative flex items-center">
              <span className="w-full">
                <span>
                  Lithuania offers a rare and beautiful advantage for aviation
                  enthusiasts:{" "}
                </span>
                <span className="font-semibold">
                  the entire country is easily accessible by air.
                </span>
                <span>
                  {" "}
                  Almost every region-and nearly every major city-has an airport
                  or a small aerodrome, making it possible to fly freely across
                  the country with ease.
                  <br />
                  <br />
                  This unique network allows you to{" "}
                </span>
                <span className="font-medium">
                  discover Lithuania from the air before you even land
                </span>
                <span>
                  -soaring over historic cities, lush forests, lakes, coastline,
                  and iconic touristic landmarks. Flying here isn&apos;t just
                  transportation; it&apos;s part of the experience.
                </span>
              </span>
            </div>
          </div>
          <Button
            as={Link}
            href="/about-us"
            variant="accent"
            className="pl-[41px] pr-10 flex flex-col items-start"
          >
            <div className="relative text-left">View More</div>
          </Button>
        </section>
      </Container>
    </section>
  );
}
