import Image from "next/image";

export default function BristellSection() {
  return (
    <section id="aircraft" className="w-full flex items-start relative isolate text-left text-[31px] text-white font-jost">
      <div className="w-full overflow-hidden shrink-0 flex flex-col items-start justify-end pt-[260px] sm:pt-[340px] desktop:pt-[433px] pb-12 desktop:pb-[66.9px] pl-4 sm:pl-8 desktop:pl-[70px] pr-4 sm:pr-6 desktop:pr-num-20 box-border relative isolate gap-1">
        <Image
          className="w-full h-full absolute m-0 bottom-[-2.5px] left-[-6px] object-cover shrink-0"
          width={1518}
          height={636}
          sizes="100vw"
          alt=""
          src="/images/Frame-7654767@2x.png"
        />
        <h2 className="m-0 w-full max-w-[287.6px] relative text-[28px] leading-[34px] desktop:text-[31px] tracking-[0.47px] desktop:leading-9 uppercase font-medium font-jost flex items-center z-[1] shrink-0">
          You will fly with Bristell
        </h2>
        <div className="flex items-start pt-0 px-0 pb-[13.5px] shrink-0 text-[17px]">
          <div className="h-num-23 w-[163.4px] relative leading-num-23 flex items-center z-[1]">
            Air crafrs
          </div>
        </div>
        <div className="w-[76px] h-[15.6px] flex items-start py-0 px-0 box-border z-[1] shrink-0 text-num-13">
          <div className="mt-[-1px] flex flex-col items-start gap-px shrink-0">
            <div className="w-[85px] h-4 relative tracking-[0.26px] leading-num-15_6 uppercase font-medium inline-block">
              know more
            </div>
            <div className="w-[83px] h-px relative bg-white" />
          </div>
        </div>
      </div>
      <Image
        className="h-[680px] sm:h-[820px] desktop:h-[977px] w-[640px] sm:w-[780px] desktop:w-[945px] absolute m-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] shrink-0"
        width={945}
        height={977}
        sizes="100vw"
        alt=""
        src="/images/Vector.svg"
      />
    </section>
  );
}
