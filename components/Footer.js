import Image from "next/image";

export default function Footer({ className = "" }) {
  return (
    <section
      className={`self-stretch flex flex-col items-center text-left text-[21px] text-white font-jost ${className}`}
    >
      <div className="self-stretch bg-darkslategray-200 flex items-center justify-between py-[124px] px-num-119 gap-5">
        <div className="h-[142px] flex flex-col items-start gap-8">
          <h3 className="m-0 self-stretch relative text-[length:inherit] tracking-[0.31px] leading-[26px] uppercase font-normal font-[inherit]">
            In partnership with:
          </h3>
          <div className="flex items-center gap-[38.5px]">
            <Image
              className="w-[90.4px] relative max-h-full object-cover"
              loading="lazy"
              width={90.4}
              height={80}
              sizes="100vw"
              alt=""
              src="/images/Pilotailt-atnaujintas-1@2x.png"
            />
            <Image
              className="w-[176.3px] relative max-h-full object-cover"
              loading="lazy"
              width={176.3}
              height={54.8}
              sizes="100vw"
              alt=""
              src="/images/bristell-logo-1200-1@2x.png"
            />
            <Image
              className="h-[38.5px] w-[118.5px] relative"
              loading="lazy"
              width={118.5}
              height={38.5}
              sizes="100vw"
              alt=""
              src="/images/Layer-1.svg"
            />
          </div>
        </div>
        <div className="h-[142px] w-[538px] flex items-start gap-12 text-num-16 font-jost">
          <div className="flex-1 flex flex-col items-start gap-5">
            <div className="self-stretch h-num-22 relative tracking-num-0_24 leading-num-22 uppercase font-medium flex items-center">
              Pages
            </div>
            <div className="self-stretch flex flex-col items-start gap-[15px] text-silver font-jost">
              <div className="relative leading-num-23">Home</div>
              <div className="relative leading-num-23">The club</div>
              <div className="relative leading-num-23">Aircraft</div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start gap-5">
            <div className="self-stretch h-num-22 relative tracking-num-0_24 leading-num-22 uppercase font-medium flex items-center">
              Our Company
            </div>
            <div className="self-stretch flex flex-col items-start gap-[15px] text-silver font-jost">
              <div className="self-stretch h-num-23 relative">
                <div className="absolute top-[0px] left-[0px] leading-num-23 flex items-center">
                  About Us
                </div>
              </div>
              <div className="self-stretch h-num-23 relative">
                <div className="absolute top-[0px] left-[0px] leading-num-23 flex items-center">
                  Contacts
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start gap-5">
            <div className="self-stretch h-num-22 relative tracking-num-0_24 leading-num-22 uppercase font-medium flex items-center">
              CUSTOMER CARE
            </div>
            <div className="self-stretch flex flex-col items-start gap-[15px] text-silver font-jost">
              <div className="self-stretch h-num-23 relative">
                <div className="absolute top-[0px] left-[0px] leading-num-23 flex items-center">
                  Activities
                </div>
              </div>
              <div className="self-stretch h-num-23 relative">
                <div className="absolute top-[0px] left-[0px] leading-num-23">
                  Privacy policy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[120px] relative bg-darkslategray-200 border-slategray border-solid border-t-[1px] box-border text-num-13 text-silver font-jost">
        <div className="absolute top-[58.1px] left-[119px] w-[437.3px] h-px" />
        <div className="absolute top-[47.1px] left-[119px] leading-num-23">
          © 2026 Pilotai program. Web Solutions P.idea
        </div>
        <div className="absolute top-[26.7px] left-[calc(50%_-_70px)] w-num-140_6 flex flex-col items-center gap-[8.2px]">
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
    </section>
  );
}
