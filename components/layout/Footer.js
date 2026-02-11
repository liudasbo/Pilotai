import Image from "next/image";

export default function Footer({ className = "" }) {
  return (
    <footer
      id="contacts"
      className={`self-stretch flex flex-col items-center text-left text-[21px] text-white font-jost bg-darkslategray-200 ${className}`}
    >
      <div className="self-stretch flex flex-col desktop:flex-row desktop:items-start desktop:justify-between py-16 sm:py-20 desktop:py-[124px] px-4 sm:px-6 desktop:px-num-119 gap-12 desktop:gap-5">
        <div className="flex flex-col items-start gap-8">
          <h3 className="m-0 relative text-[21px] tracking-[0.31px] leading-[26px] uppercase font-normal">
            In partnership with:
          </h3>
          <div className="flex flex-wrap items-center gap-6 desktop:gap-[38.5px]">
            <Image
              className="w-[80px] desktop:w-[90.4px] relative max-h-full object-cover"
              loading="lazy"
              width={90.4}
              height={80}
              sizes="100vw"
              alt=""
              src="/images/Pilotailt-atnaujintas-1@2x.png"
            />
            <Image
              className="w-[150px] desktop:w-[176.3px] relative max-h-full object-cover"
              loading="lazy"
              width={176.3}
              height={54.8}
              sizes="100vw"
              alt=""
              src="/images/bristell-logo-1200-1@2x.png"
            />
            <Image
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

        <div className="w-full desktop:w-[538px] flex flex-col sm:flex-row items-start gap-10 sm:gap-12 text-num-16 font-jost">
          <div className="flex-1 flex flex-col items-start gap-5">
            <div className="self-stretch tracking-num-0_24 leading-num-22 uppercase font-medium">
              Pages
            </div>
            <div className="self-stretch flex flex-col items-start gap-[15px] text-silver font-jost">
              <div className="relative leading-num-23">Home</div>
              <div className="relative leading-num-23">The club</div>
              <div className="relative leading-num-23">Aircraft</div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start gap-5">
            <div className="self-stretch tracking-num-0_24 leading-num-22 uppercase font-medium">
              Our Company
            </div>
            <div className="self-stretch flex flex-col items-start gap-[15px] text-silver font-jost">
              <div className="leading-num-23">About Us</div>
              <div className="leading-num-23">Contacts</div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start gap-5">
            <div className="self-stretch tracking-num-0_24 leading-num-22 uppercase font-medium">
              CUSTOMER CARE
            </div>
            <div className="self-stretch flex flex-col items-start gap-[15px] text-silver font-jost">
              <div className="leading-num-23">Activities</div>
              <div className="leading-num-23">Privacy policy</div>
            </div>
          </div>
        </div>
      </div>

      <div className="self-stretch border-slategray border-solid border-t-[1px] box-border text-num-13 text-silver font-jost">
        <div className="max-w-[1274px] mx-auto py-6 sm:py-8 desktop:py-[26px] px-4 sm:px-6 flex flex-col desktop:flex-row items-center desktop:items-start justify-between gap-6">
          <div className="order-2 desktop:order-1 leading-num-23 text-center desktop:text-left">
            © 2026 Pilotai program. Web Solutions P.idea
          </div>
          <div className="order-1 desktop:order-2 w-num-140_6 flex flex-col items-center gap-[8.2px]">
            <div className="self-stretch flex flex-col items-center gap-[4.9px]">
              <Image
                className="w-6 h-[18.2px] relative"
                width={24}
                height={18.2}
                sizes="100vw"
                alt=""
                src="/images/Group-17.svg"
              />
              <Image
                className="w-num-140_6 h-[27.3px] relative"
                loading="lazy"
                width={140.6}
                height={27.3}
                sizes="100vw"
                alt=""
                src="/images/Group-18.svg"
              />
            </div>
            <Image
              className="w-[72.5px] h-[5.2px] relative"
              loading="lazy"
              width={72.5}
              height={5.2}
              sizes="100vw"
              alt=""
              src="/images/Program.svg"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
