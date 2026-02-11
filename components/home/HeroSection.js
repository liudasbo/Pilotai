import Image from "next/image";
import Header from "@/components/layout/Header";

export default function HeroSection() {
  return (
    <main className="w-full min-h-[920px] sm:min-h-[800px] desktop:min-h-[900px] bg-blanchedalmond flex flex-col items-start pt-0 px-0 box-border relative isolate">
      <Image
        className="w-full h-full absolute m-0 top-[0px] left-[0px] object-cover shrink-0"
        width={1512}
        height={900}
        sizes="100vw"
        alt=""
        src="/images/sr7-slide@2x.png"
      />
      <Header />
      <section className="w-full flex-1 flex items-center justify-start py-10 sm:py-12 desktop:py-16 px-0 box-border text-left text-white font-jost z-[1]">
        <div className="w-full max-w-[858.7px] ml-4 sm:ml-6 desktop:ml-[60px] flex flex-col items-start gap-10 sm:gap-16 desktop:gap-[157px]">
          <div className="w-full max-w-[607px] flex flex-col items-start gap-6">
            <div className="self-stretch relative text-[40px] leading-[48px] sm:text-[54px] sm:leading-[64px] desktop:text-[64px] desktop:leading-[80px] capitalize">
              Built around the aircraft
            </div>
            <Image
              className="w-20 h-20 relative"
              loading="lazy"
              width={80}
              height={80}
              sizes="100vw"
              alt=""
              src="/images/Group.svg"
            />
          </div>
          <div className="self-stretch flex items-center flex-wrap content-center gap-x-6 sm:gap-x-10 desktop:gap-x-[111px] gap-y-5 sm:gap-y-[25px] text-[14px] font-jost">
            <div className="h-px w-full max-w-[830px] bg-gainsboro-200 flex flex-col items-start">
              <div className="w-[344px] h-px relative bg-neutral-100" />
            </div>
            <div className="border-neutral-100 border-solid border-b-[1px] flex items-center pt-1 px-0 pb-0.5 gap-2">
              <div className="relative leading-4 font-medium">
                Pilot License
              </div>
              <Image
                className="h-[9.3px] w-[9.3px] relative"
                loading="lazy"
                width={9.3}
                height={9.3}
                sizes="100vw"
                alt=""
                src="/images/SVG.svg"
              />
            </div>
            <div className="border-neutral-100 border-solid border-b-[1px] flex items-center pt-1 px-0 pb-0.5 gap-2">
              <div className="relative leading-4 font-medium">The Club</div>
              <Image
                className="h-[9.3px] w-[9.3px] relative"
                width={9.3}
                height={9.3}
                sizes="100vw"
                alt=""
                src="/images/SVG.svg"
              />
            </div>
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
