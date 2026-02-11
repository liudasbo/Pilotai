import Image from "next/image";

export default function PrivateLuxurySection() {
  return (
    <section className="w-full bg-gray-300 shrink-0 flex flex-col items-center py-16 sm:py-20 desktop:py-[98px] px-4 sm:px-6 desktop:px-[99px] box-border">
      <div className="w-full flex items-start justify-center py-num-0 px-0 box-border max-w-full">
        <div className="w-full max-w-[1274px] mx-auto flex flex-col items-start gap-8 desktop:gap-9">
          <section className="flex flex-col items-start text-left text-num-13 text-gray-200 font-jost">
            <div className="self-stretch relative tracking-[0.46px] leading-[26px] font-medium">
              Hand-selected residences, tailored to each client
            </div>
            <div className="w-full max-w-[652px] flex flex-col items-start gap-4 text-num-37 text-gainsboro-100 font-jost">
              <h2 className="m-0 relative text-[30px] leading-[36px] desktop:text-[length:inherit] tracking-num-0_56 desktop:leading-num-42 uppercase font-medium font-[inherit]">
                Private Luxury Living
              </h2>
              <div className="self-stretch relative text-num-16 leading-num-24 font-jost text-gray-100">
                Each participant stays in premium apartments selected to match
                their lifestyle and privacy expectations.
              </div>
            </div>
          </section>
          <div className="self-stretch overflow-hidden shrink-0 flex items-start max-w-full">
            <div className="w-full flex items-center flex-wrap content-center gap-6 max-w-full">
              <section className="flex-1 flex flex-col items-start gap-[17px] min-w-[280px] desktop:min-w-[409px] text-left text-[20px] text-white font-jost">
                <Image
                  className="self-stretch h-[300px] sm:h-[360px] desktop:h-[417px] relative max-w-full overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  width={629}
                  height={417}
                  sizes="100vw"
                  alt=""
                  src="/images/c@2x.png"
                />
                <div className="flex items-center gap-2.5">
                  <h3 className="m-0 relative text-[length:inherit] tracking-[-0.4px] leading-[27px] font-normal font-[inherit]">
                    Nida Spa
                  </h3>
                  <div className="h-[18px] w-px relative bg-gray-200" />
                </div>
              </section>
              <section className="flex-1 flex flex-col items-start gap-[17px] min-w-[280px] desktop:min-w-[409px] text-left text-[20px] text-white font-jost">
                <Image
                  className="self-stretch h-[300px] sm:h-[360px] desktop:h-[417px] relative max-w-full overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  width={629}
                  height={417}
                  sizes="100vw"
                  alt=""
                  src="/images/c1@2x.png"
                />
                <div className="flex items-center gap-2.5">
                  <h3 className="m-0 relative text-[length:inherit] tracking-[-0.4px] leading-[27px] font-normal font-[inherit]">
                    Birstonas Mineral Spa
                  </h3>
                  <div className="h-[18px] w-px relative bg-gray-200" />
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
