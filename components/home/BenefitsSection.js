"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Red_Hat_Display } from "next/font/google";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["500"],
});

const BENEFIT_ITEMS = [
  {
    label: "Pilot licence",
    image: "/images/Pilotlicence.jpg",
    href: "/pilot-license",
  },
  {
    label: "Fly Varied Aircraft",
    image: "/images/FlyVariedAircraft.jpg",
    href: "/aircraft",
  },
  {
    label: "Explore Lithuania",
    image: "/images/ExploreLithuania.jpg",
    href: "/activities",
  },
  {
    label: "Membership in The Club",
    image: "/images/MembershipinTheClub.jpg",
    href: "/the-club",
  },
];

const STACK_LAYER_CLASSES = [
  "z-40 rotate-[-2deg] scale-100",
  "z-30 translate-x-[2%] translate-y-[2%] rotate-[3deg] scale-[0.96]",
  "z-20 -translate-x-[2%] translate-y-[4%] rotate-[-4deg] scale-[0.92]",
  "z-10 translate-x-[1%] translate-y-[6%] rotate-[5deg] scale-[0.88]",
];

export default function BenefitsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const orderedIndices = BENEFIT_ITEMS.map(
    (_, index) => (activeIndex + index) % BENEFIT_ITEMS.length,
  );

  return (
    <section
      data-motion="reveal"
      className="w-full max-w-full px-4 pt-0 pb-16 sm:px-6 sm:pt-0 sm:pb-20 desktop:px-num-20 desktop:pt-0 desktop:pb-[95px]"
    >
      <div className="section-container max-w-[1154px]">
        <div className="flex flex-col gap-10 desktop:flex-row desktop:items-center desktop:gap-6">
          <section className="w-full desktop:max-w-[550px] desktop:flex-1">
            <div className="flex flex-col gap-2.5 text-num-16 text-darkslategray-100">
              What You Get
            </div>
            <ul className="mt-8 flex list-none flex-col gap-8 p-0 desktop:mt-[42px]">
              {BENEFIT_ITEMS.map((item, index) => {
                const isActive = activeIndex === index;

                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onMouseEnter={() => setActiveIndex(index)}
                      onFocus={() => setActiveIndex(index)}
                      className={`${redHatDisplay.className} group inline-flex bg-transparent p-0 text-left text-[36px] font-medium uppercase tracking-[0.9px] transition-[color,opacity] duration-300 sm:text-[48px] sm:leading-[52px] desktop:text-[60px] desktop:leading-[60px] ${
                        isActive
                          ? "text-black opacity-100"
                          : "text-black/65 opacity-90 hover:text-black"
                      }`}
                    >
                      <span
                        className={`inline-block border-b pb-1 transition-colors duration-300 ${
                          isActive ? "border-black" : "border-transparent"
                        }`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>

          <div className="w-full desktop:flex-1">
            <div className="relative h-[400px] w-full overflow-hidden sm:h-[520px] desktop:h-[660px]">
              <div className="absolute inset-0">
                <div className="relative isolate h-full w-full overflow-hidden">
                  {orderedIndices.map((itemIndex, layerIndex) => {
                    const item = BENEFIT_ITEMS[itemIndex];
                    const layerClassName =
                      STACK_LAYER_CLASSES[layerIndex] || STACK_LAYER_CLASSES[3];

                    return (
                      <figure
                        key={item.label}
                        className={`absolute inset-[4%] origin-center overflow-hidden transition-all duration-500 ease-out will-change-transform sm:inset-[5%] desktop:inset-[6%] ${layerClassName}`}
                      >
                        <Image
                          className="h-full w-full object-cover object-center"
                          fill
                          sizes="(min-width: 1024px) 42vw, (min-width: 640px) 92vw, 100vw"
                          alt={item.label}
                          src={item.image}
                        />
                      </figure>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
