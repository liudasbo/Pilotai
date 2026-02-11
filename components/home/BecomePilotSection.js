import Image from "next/image";

export default function BecomePilotSection() {
  return (
    <section className="w-full shrink-0 py-16 sm:py-20 desktop:py-[110px] px-4 sm:px-6 desktop:px-[60px]">
      <div className="mx-auto w-full max-w-[1274px] flex flex-col items-center gap-10 desktop:flex-row desktop:items-start desktop:justify-between desktop:gap-16">
        <div className="order-2 desktop:order-1 flex justify-center desktop:justify-start desktop:pt-[97px]">
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
          <h2 className="m-0 self-stretch relative text-[30px] leading-[36px] desktop:text-[length:inherit] tracking-num-0_56 desktop:leading-num-42 uppercase font-medium font-[inherit]">
            Become a Pilot in Lithuania
          </h2>
          <div className="w-full max-w-[521.5px] relative text-num-16 leading-num-24 font-jost text-darkslategray-100 flex items-center justify-center">
            Experience unique 20-day journey in Lithuania that blends aviation
            training, premium comfort, and memorable adventures. This program
            is designed for those who want to discover something new while
            enjoying a refined and exciting getaway.
          </div>
        </div>
        <button className="cursor-pointer border-none py-num-14 pl-[41px] pr-10 bg-black flex flex-col items-start hover:bg-darkslategray-300">
          <div className="relative text-num-13 tracking-num-0_39 leading-num-15_6 uppercase font-medium font-jost text-white text-left">
            See the package
          </div>
        </button>
      </section>
      <div className="order-3 flex justify-center desktop:justify-end desktop:pt-[195px]">
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
      </div>
    </section>
  );
}
