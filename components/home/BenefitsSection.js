"use client";

import { useState } from "react";
import Image from "next/image";

const BENEFIT_ITEMS = [
  { label: "Pilot licence", image: "/images/j@2x.png" },
  { label: "Fly Varied Aircraft", image: "/images/sr7-mask@2x.png" },
  { label: "Explore Lithuania", image: "/images/sr7-mask2@2x.png" },
  { label: "Membership in The Club", image: "/images/Photos@2x.png" },
];

export default function BenefitsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full flex items-start justify-center py-16 sm:py-20 desktop:py-[95px] px-4 sm:px-6 desktop:px-num-20 box-border max-w-full">
      <div className="w-full max-w-[1153.7px] mx-auto flex flex-col gap-10 desktop:flex-row desktop:items-center desktop:justify-between desktop:gap-6">
        <section className="w-full desktop:w-[550px] flex flex-col items-start gap-8 desktop:gap-[42px] max-w-full text-left text-black font-jost desktop:flex-1">
          <div className="flex flex-col items-start gap-2.5 text-num-16 text-darkslategray-100 font-jost">
            <div className="w-[172.3px] h-num-23 relative leading-num-23 flex items-center">
              What You Get
            </div>
            {BENEFIT_ITEMS.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`m-0 w-full relative text-left text-[36px] leading-[42px] sm:text-[48px] sm:leading-[52px] desktop:text-[60px] tracking-[0.9px] desktop:leading-[60px] uppercase font-medium font-jost bg-transparent border-none p-0 pb-1 cursor-pointer transition-all ${
                    isActive
                      ? "opacity-100 text-black border-b border-black"
                      : "opacity-70 text-black/90 border-b border-transparent hover:opacity-100"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </section>

        <div className="w-full max-w-[602.7px] desktop:flex-1">
          <div className="relative h-[360px] sm:h-[500px] desktop:h-[660.5px] w-full overflow-hidden">
            <Image
              className="w-full h-full object-cover desktop:hidden"
              width={602.7}
              height={660.5}
              sizes="100vw"
              alt={BENEFIT_ITEMS[activeIndex].label}
              src={BENEFIT_ITEMS[activeIndex].image}
            />

            <div className="hidden desktop:block h-full w-full relative isolate">
              <Image
                className="w-[551.9px] absolute m-0 top-[calc(50%_-_306.45px)] right-[25px] max-h-full object-contain shrink-0"
                width={551.9}
                height={618.6}
                sizes="100vw"
                alt=""
                src="/images/interactive-links-h1@2x.png"
              />
              <Image
                className="w-[80%] max-w-[495px] absolute top-[50.9px] left-[54px] bottom-[39.6px] object-cover z-[1]"
                loading="lazy"
                width={495}
                height={570}
                sizes="100vw"
                alt={BENEFIT_ITEMS[activeIndex].label}
                src={BENEFIT_ITEMS[activeIndex].image}
              />
              <Image
                className="w-full absolute m-0 top-[calc(50%_-_330.25px)] right-[0px] max-h-full object-contain h-full z-[2] shrink-0"
                width={602.7}
                height={660.5}
                sizes="100vw"
                alt=""
                src="/images/interactive-links-h1-2@2x.png"
              />
              <Image
                className="w-[551.9px] absolute m-0 top-[calc(50%_-_300.75px)] right-[25px] max-h-full object-contain z-[3] shrink-0"
                width={551.9}
                height={618.6}
                sizes="100vw"
                alt={BENEFIT_ITEMS[activeIndex].label}
                src={BENEFIT_ITEMS[activeIndex].image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
