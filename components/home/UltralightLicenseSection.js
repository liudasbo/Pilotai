import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function UltralightLicenseSection() {
  return (
    <section
      id="license"
      data-motion="reveal"
      className="self-stretch bg-whitesmoke-100 shrink-0 flex flex-col items-start py-16 sm:py-20 desktop:py-[86px] px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24 box-border max-w-full"
    >
      <Container className="flex flex-col gap-10 xl:flex-row xl:items-center xl:gap-28">
        <section className="w-full xl:w-[631px] flex items-start justify-center pt-0 pb-0 xl:pb-[53px] pl-0 xl:pl-[329px] pr-0 box-border gap-4 xl:gap-[29px] max-w-full">
          <Image quality={90}
            className="ml-0 xl:ml-[-330px] h-auto xl:h-num-402 w-[45%] xl:w-[301px] relative object-cover shrink-0"
            loading="lazy"
            width={301}
            height={402}
            sizes="(min-width: 1280px) 301px, 45vw"
            alt=""
            src="/images/sr7-mask@2x.png"
          />
          <div className="w-[45%] xl:w-auto h-auto xl:h-num-402 flex flex-col items-start pt-8 xl:pt-[55px] px-0 pb-0 box-border shrink-0">
            <Image quality={90}
              className="w-full h-auto xl:h-num-402 relative object-cover"
              loading="lazy"
              width={301}
              height={402}
              sizes="(min-width: 1280px) 301px, 45vw"
              alt=""
              src="/images/sr7-mask1@2x.png"
            />
          </div>
        </section>
        <section className="w-full xl:w-[531px] flex flex-col items-start py-0 xl:py-num-20 px-0 box-border gap-8 xl:gap-9 max-w-full text-left text-num-37 text-black font-jost">
          <div className="w-full flex flex-col items-start gap-[9px]">
            <SectionHeading className="w-full max-w-[447.6px] relative flex items-center">
              ultralight pilot license
            </SectionHeading>
            <div className="self-stretch flex flex-col items-start gap-[23px] text-section-body">
              <div className="self-stretch relative leading-num-24">
                Participants will have the chance to earn an ultralight pilot
                license, fly different types of aircraft, and enjoy a variety of
                leisure activities-all while exploring the beauty of Lithuania
                from the ground and the sky.
              </div>
              <div className="self-stretch relative leading-num-24">
                Training using Bristell aircraft to obtain an ultralight pilot
                licence
              </div>
            </div>
          </div>
          <Button
            as={Link}
            href="/pilot-license"
            variant="accent"
            className="px-10 flex flex-col items-center justify-center"
          >
            <div className="relative text-left">View More</div>
          </Button>
        </section>
      </Container>
    </section>
  );
}
