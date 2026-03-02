import Image from "next/image";
import Link from "next/link";

export default function Footer({ className = "" }) {
  return (
    <footer
      id="contacts"
      className={`self-stretch flex flex-col items-center text-left text-[21px] text-white font-jost bg-darkslategray-200 ${className}`}
    >
      <div className="self-stretch flex flex-col desktop:flex-row desktop:items-start desktop:justify-between py-16 sm:py-20 desktop:py-[104px] 2xl:py-[120px] px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24 gap-12 desktop:gap-8">
        <div className="flex flex-col items-start gap-8">
          <h2 className="m-0 relative text-[21px] tracking-[0.31px] leading-[26px] uppercase font-normal">
            In partnership with:
          </h2>
          <div className="flex flex-wrap items-center gap-6 desktop:gap-[38.5px]">
            <Image
              quality={90}
              className="w-[80px] desktop:w-[90.4px] relative max-h-full object-cover"
              loading="lazy"
              width={90.4}
              height={80}
              sizes="100vw"
              alt=""
              src="/images/Pilotailt-atnaujintas-1@2x.png"
            />
            <Image
              quality={90}
              className="w-[150px] desktop:w-[176.3px] relative max-h-full object-cover"
              loading="lazy"
              width={176.3}
              height={54.8}
              sizes="100vw"
              alt=""
              src="/images/bristell-logo-1200-1@2x.png"
            />
            <Image
              quality={90}
              className="h-[32px] w-[98px] desktop:h-[38.5px] desktop:w-[118.5px] relative"
              loading="lazy"
              width={118.5}
              height={38.5}
              sizes="100vw"
              alt=""
              src="/images/Layer-1.svg"
            />
          </div>
        </div>

        <div className="w-full desktop:w-full xl:w-[538px] flex flex-col sm:flex-row items-start gap-10 sm:gap-12 text-num-16 font-jost">
          <div className="w-full sm:flex-1 flex flex-col items-start gap-5">
            <div className="self-stretch tracking-num-0_24 leading-num-22 uppercase font-medium">
              Pages
            </div>
            <div className="self-stretch flex flex-col items-start gap-[15px] text-silver font-jost">
              <Link
                href="/"
                className="touch-target relative leading-num-23 hover:text-white"
              >
                Home
              </Link>
              <Link
                href="/activities"
                className="touch-target relative leading-num-23 hover:text-white"
              >
                Activities
              </Link>
              <Link
                href="/the-club"
                className="touch-target relative leading-num-23 hover:text-white"
              >
                The club
              </Link>
              <Link
                href="/aircraft"
                className="touch-target relative leading-num-23 hover:text-white"
              >
                Aircraft
              </Link>
            </div>
          </div>
          <div className="w-full sm:flex-1 flex flex-col items-start gap-5">
            <div className="self-stretch tracking-num-0_24 leading-num-22 uppercase font-medium">
              Our Company
            </div>
            <div className="self-stretch flex flex-col items-start gap-[15px] text-silver font-jost">
              <Link
                href="/about-us"
                className="touch-target leading-num-23 hover:text-white"
              >
                About Us
              </Link>
              <Link
                href="/contact-us"
                className="touch-target leading-num-23 hover:text-white"
              >
                Contacts
              </Link>
            </div>
          </div>
          <div className="w-full sm:flex-1 flex flex-col items-start gap-5">
            <div className="self-stretch tracking-num-0_24 leading-num-22 uppercase font-medium">
              CUSTOMER CARE
            </div>
            <div className="self-stretch flex flex-col items-start gap-[15px] text-silver font-jost">
              <Link
                href="/privacy-policy"
                className="touch-target leading-num-23 hover:text-white"
              >
                Privacy policy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="touch-target leading-num-23 hover:text-white"
              >
                Terms &amp; Conditions
              </Link>
              <Link
                href="/pilot-license-policy"
                className="touch-target leading-num-23 hover:text-white"
              >
                Pilot License Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="self-stretch border-slategray border-solid border-t-[1px] box-border text-num-13 text-silver font-jost">
        <div className="w-full py-6 sm:py-8 desktop:py-[26px] px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
          <div className="grid items-center grid-cols-1 desktop:grid-cols-3 gap-4 sm:gap-5 desktop:gap-0">
            <div className="leading-num-23 text-center lg:text-left">
              © 2026 Pilotai program. Web Solutions P.idea
            </div>
            <div className="flex justify-center mt-2 desktop:mt-0">
              <Image
                quality={90}
                className="w-[118px] desktop:w-num-140_6 h-auto"
                loading="lazy"
                width={140.6}
                height={63.8}
                sizes="(min-width: 1024px) 140.6px, 118px"
                alt="Pilotai Program"
                src="/images/logo.svg"
              />
            </div>
            <div className="hidden desktop:block" aria-hidden="true" />
          </div>
        </div>
      </div>
    </footer>
  );
}
