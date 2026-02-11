import Image from "next/image";

export default function WhyLithuaniaSection() {
  return (
    <section className="self-stretch bg-whitesmoke-100 shrink-0 flex flex-col items-start py-16 sm:py-20 desktop:py-[86px] px-4 sm:px-6 desktop:px-[119px] box-border">
      <div className="w-full max-w-[1274px] mx-auto flex flex-col gap-10 desktop:flex-row desktop:items-center desktop:gap-[116px]">
        <section className="w-full desktop:w-[627px] flex items-start justify-center pt-num-0 pb-0 desktop:pb-[53px] pl-0 desktop:pl-[329px] pr-0 desktop:pr-0 box-border gap-4 desktop:gap-[29px]">
          <Image
            className="ml-0 desktop:ml-[-330px] h-auto desktop:h-num-402 w-[45%] desktop:w-[301px] relative object-cover shrink-0"
            width={301}
            height={402}
            sizes="100vw"
            alt=""
            src="/images/sr7-mask2@2x.png"
          />
          <div className="w-[45%] desktop:w-[301px] h-auto desktop:h-num-402 flex flex-col items-start pt-8 desktop:pt-[55px] px-num-0 pb-num-0 box-border shrink-0">
            <Image
              className="w-full desktop:w-[301px] h-auto desktop:h-num-402 relative object-cover"
              loading="lazy"
              width={301}
              height={402}
              sizes="100vw"
              alt=""
              src="/images/sr7-mask3@2x.png"
            />
          </div>
        </section>
        <section className="w-full desktop:w-[531px] flex flex-col items-start py-0 desktop:py-num-20 px-num-0 box-border gap-8 desktop:gap-9 text-left text-num-37 text-black font-jost">
          <div className="w-full flex flex-col items-start gap-6">
            <h2 className="m-0 text-[30px] leading-[36px] desktop:text-[length:inherit] tracking-num-0_56 desktop:leading-num-42 uppercase font-medium font-[inherit]">
              Why Lithuania
            </h2>
            <div className="w-full relative text-num-16 leading-num-24 text-darkslategray-100 flex items-center font-jost">
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
          <button className="cursor-pointer border-none py-num-14 pl-[41px] pr-10 bg-chocolate-100 flex flex-col items-start hover:bg-chocolate-200">
            <div className="relative text-num-13 tracking-num-0_39 leading-num-15_6 uppercase font-medium font-jost text-white text-left">
              View More
            </div>
          </button>
        </section>
      </div>
    </section>
  );
}
