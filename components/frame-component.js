import Image from "next/image";

export default function FrameComponent({ className = "" }) {
  return (
    <header
      className={`w-full flex flex-col items-start z-[1] shrink-0 text-left text-[12px] text-white font-jost ${className}`}
    >
      <div className="self-stretch h-8 relative border-gray-400 border-solid border-b-[1px] box-border">
        <div className="absolute top-[8.5px] left-[1409px] flex items-center gap-7">
          <div className="h-[13.2px] w-5 relative">
            <div className="absolute top-[-2.5px] left-[0px] leading-[13.2px] font-medium flex items-center shrink-0">
              FB.
            </div>
          </div>
          <div className="h-[13.2px] w-[16.4px] relative">
            <div className="absolute top-[-2.5px] left-[0px] leading-[13.2px] font-medium flex items-center shrink-0">
              IN.
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex items-center py-num-14 px-[60px] gap-[260px]">
        <div className="w-num-140_6 flex flex-col items-center gap-[8.2px]">
          <div className="self-stretch flex flex-col items-center gap-[4.9px]">
            <Image
              className="cursor-pointer border-none p-num-0 bg-[transparent] w-6 h-[18.2px] relative"
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
        <nav className="m-0 flex items-center gap-12 text-left text-num-13 text-white font-jost">
          <div className="h-[19px] w-[38.8px] relative leading-num-23 uppercase font-medium flex items-center">
            Home
          </div>
          <div className="relative leading-num-23 uppercase font-medium">
            Activities
          </div>
          <div className="relative leading-num-23 uppercase font-medium">
            Aircraft
          </div>
          <div className="relative leading-num-23 uppercase font-medium">
            The Club
          </div>
          <div className="relative leading-num-23 uppercase font-medium">
            About US
          </div>
          <div className="relative leading-num-23 uppercase font-medium">
            Contacts
          </div>
        </nav>
      </div>
    </header>
  );
}
