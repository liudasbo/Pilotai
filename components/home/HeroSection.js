import Header from "@/components/layout/Header";
import HeroBackgroundMedia from "@/components/home/HeroBackgroundMedia";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <main className="w-full h-[88svh] min-h-[680px] sm:min-h-[760px] desktop:h-auto desktop:min-h-[900px] flex flex-col items-start pt-0 px-0 box-border relative isolate overflow-hidden">
      <HeroBackgroundMedia />
      <div className="absolute inset-0 bg-[#263C54]/65 pointer-events-none" />
      <Header />
      <section
        data-motion="text-only"
        className="w-full flex-1 flex items-center justify-start py-10 sm:py-12 desktop:py-16 px-4 sm:px-6 desktop:px-[60px] box-border text-left text-white font-jost z-[1]"
      >
        <div className="w-full max-w-[858.7px] flex flex-col items-start gap-10 sm:gap-16 desktop:gap-[157px]">
          <div className="w-full max-w-[607px] flex flex-col items-start gap-6">
            <h1 className="m-0 self-stretch relative text-[44px] leading-[52px] sm:text-[54px] sm:leading-[64px] desktop:text-[64px] desktop:leading-[80px] capitalize">
              Built around the aircraft
            </h1>
            <Link
              href="/contact-us"
              className="group inline-flex items-center gap-5 sm:gap-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Request Your Invitation"
            >
              <Image quality={90}
                src="/images/arrow.svg"
                alt=""
                aria-hidden="true"
                width={82}
                height={82}
                className="w-12 h-12 sm:w-[58px] sm:h-[58px] desktop:w-[82px] desktop:h-[82px] transition-transform duration-500 ease-out transform-gpu rotate-0 group-hover:rotate-90 group-focus-visible:rotate-90"
              />
              <span className="overflow-hidden whitespace-nowrap max-w-0 opacity-0 -translate-x-2 transition-all duration-500 ease-out text-[20px] sm:text-[30px] desktop:text-[42px] leading-[1.08] tracking-[0.3px] font-normal border-b border-white pb-1 group-hover:max-w-[640px] group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:max-w-[640px] group-focus-visible:opacity-100 group-focus-visible:translate-x-0">
                Request Your Invitation
              </span>
            </Link>
          </div>
          <div className="self-stretch flex items-center flex-wrap content-center gap-x-6 sm:gap-x-10 desktop:gap-x-[111px] gap-y-5 sm:gap-y-[25px] text-[14px] font-jost">
            <Link
              href="/pilot-license"
              className="border-neutral-100 border-solid border-b-[1px] flex items-center pt-1 px-0 pb-0.5 gap-2"
            >
              <span className="relative leading-4 font-medium">Training</span>
            </Link>
            <Link
              href="/the-club"
              className="border-neutral-100 border-solid border-b-[1px] flex items-center pt-1 px-0 pb-0.5 gap-2"
            >
              <span className="relative leading-4 font-medium">The Club</span>
            </Link>
            <div className="w-full max-w-[412px] relative text-[18px] leading-num-25 flex items-center shrink-0">
              A 20-day journey combining flight training, travel, and premium
              leisure.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
