import Image from "next/image";

export default function RecreationalActivitiesSection() {
  return (
    <section className="w-full bg-whitesmoke-100 flex items-end justify-center py-16 sm:py-20 desktop:py-[147px] px-4 sm:px-6 desktop:px-num-119 box-border gap-10 desktop:gap-[52px] flex-col desktop:flex-row">
      <section className="flex flex-col items-start justify-end pt-0 px-0 pb-[8.2px] box-border w-full max-w-[536px] text-left text-num-37 text-black font-jost">
        <div className="w-full flex flex-col items-start gap-8 desktop:gap-9 max-w-full">
          <div className="self-stretch flex flex-col items-start gap-5">
            <h1 className="section-heading w-full max-w-[381.7px] relative flex items-center">
              Recreational Activities
            </h1>
            <div className="text-section-body self-stretch relative">
              Beyond the intensive aviation program, your 20-day journey will be
              filled with a wide range of hand-picked activities designed to
              match your personal interests and lifestyle. From golf and tennis
              to high-adrenaline experiences such as jet flight experiences,
              aerobatics, skydiving, wakeboarding, and shooting experiences,
              every day can offer something exciting and memorable.
              <br />
              <br />
              These activities are not add-ons - they’re part of the experience.
              We take care of all planning and coordination in advance, ensuring
              everything is organized before your arrival so you can focus on
              enjoying the moment. Whether you’re seeking relaxation, adventure,
              or new challenges, we’ll make sure your time outside aviation is
              just as rewarding as your time in the cockpit - and there’s always
              room for more, depending on your hobbies and preferences.
            </div>
          </div>
          <button className="cta-button-base cta-button-dark px-[41px] flex flex-col items-start">
            <div className="relative text-left">
              All Activities
            </div>
          </button>
        </div>
      </section>
      <section className="w-full desktop:w-auto min-h-[420px] sm:min-h-[520px] desktop:min-h-[650px] bg-darkslategray-200 overflow-hidden flex flex-col items-end justify-between pt-16 sm:pt-20 desktop:pt-[134px] px-6 sm:px-10 desktop:px-[79px] pb-10 sm:pb-12 desktop:pb-[40px] box-border relative isolate max-w-full text-right text-[7.2px] text-gray-300 font-jost">
        <Image
          className="absolute inset-0 w-full h-full object-cover"
          width={847.4}
          height={652.9}
          sizes="100vw"
          alt=""
          src="/images/Rectangle-39887@2x.png"
        />
        <Image
          className="w-[73.1px] h-[6.8px] absolute m-0 bottom-[100px] sm:bottom-[120px] desktop:bottom-[133.3px] left-8 sm:left-16 desktop:left-[221.3px] object-cover z-[1] shrink-0"
          loading="lazy"
          width={73.1}
          height={6.8}
          sizes="100vw"
          alt=""
          src="/images/Rectangle-39889@2x.png"
        />
        <div className="flex items-start pt-[5.3px] px-0 pb-[3.5px] bg-cover bg-no-repeat bg-[top] z-[1] shrink-0">
          <Image
            className="h-[16.8px] w-[65.2px] relative object-cover hidden shrink-0"
            width={65.2}
            height={16.8}
            sizes="100vw"
            alt=""
            src="/images/Rectangle-39888@2x.png"
          />
          <div className="h-2 w-[65px] relative leading-[113%] inline-block z-[2] shrink-0">
            pilotaiprogram.com
          </div>
        </div>
        <div className="flex items-start justify-end py-0 pl-10 sm:pl-[132px] pr-0 desktop:pr-[313px] shrink-0 z-[1]">
          <div className="h-2 w-[82.1px] relative leading-[113%] inline-block z-[2]">
            info@pilotaiprogram.com
          </div>
        </div>
      </section>
    </section>
  );
}
