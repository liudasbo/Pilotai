import Image from "next/image";

export default function UltralightLicenseSection() {
  return (
    <section className="self-stretch bg-whitesmoke-100 shrink-0 flex flex-col items-start py-16 sm:py-20 desktop:py-[86px] px-4 sm:px-6 desktop:px-[119px] box-border max-w-full">
      <div className="w-full max-w-[1274px] mx-auto flex flex-col gap-10 desktop:flex-row desktop:items-center desktop:gap-28">
        <section className="w-full desktop:w-[631px] flex items-start justify-center pt-num-0 pb-0 desktop:pb-[53px] pl-0 desktop:pl-[329px] pr-0 box-border gap-4 desktop:gap-[29px] max-w-full">
          <Image
            className="ml-0 desktop:ml-[-330px] h-auto desktop:h-num-402 w-[45%] desktop:w-[301px] relative object-cover shrink-0"
            loading="lazy"
            width={301}
            height={402}
            sizes="100vw"
            alt=""
            src="/images/sr7-mask@2x.png"
          />
          <div className="w-[45%] desktop:w-auto h-auto desktop:h-num-402 flex flex-col items-start pt-8 desktop:pt-[55px] px-num-0 pb-num-0 box-border shrink-0">
            <Image
              className="w-full h-auto desktop:h-num-402 relative object-cover"
              loading="lazy"
              width={301}
              height={402}
              sizes="100vw"
              alt=""
              src="/images/sr7-mask1@2x.png"
            />
          </div>
        </section>
        <section className="w-full desktop:w-[531px] flex flex-col items-start py-0 desktop:py-num-20 px-num-0 box-border gap-8 desktop:gap-9 max-w-full text-left text-num-37 text-black font-jost">
          <div className="w-full flex flex-col items-start gap-[9px]">
            <h1 className="m-0 w-full max-w-[447.6px] relative text-[30px] leading-[36px] desktop:text-[length:inherit] tracking-num-0_56 desktop:leading-num-42 uppercase font-medium font-[inherit] flex items-center">
              ultralight pilot license
            </h1>
            <div className="self-stretch flex flex-col items-start gap-[23px] text-num-16 text-darkslategray-100 font-jost">
              <div className="self-stretch relative leading-num-24">
                Participants will have the chance to earn an ultralight pilot
                license, fly different types of aircraft, and enjoy a variety
                of leisure activities-all while exploring the beauty of
                Lithuania from the ground and the sky.
              </div>
              <div className="self-stretch relative leading-num-24">
                Training using Bristell aircraft to obtain an ultralight pilot
                licence
              </div>
            </div>
          </div>
          <button className="cursor-pointer border-none py-num-14 px-10 bg-chocolate-100 flex flex-col items-center justify-center hover:bg-chocolate-200">
            <div className="relative text-num-13 tracking-num-0_39 leading-num-15_6 uppercase font-medium font-jost text-white text-left">
              View More
            </div>
          </button>
        </section>
      </div>
    </section>
  );
}
