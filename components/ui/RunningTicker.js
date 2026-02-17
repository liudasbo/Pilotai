"use client";

import { useEffect, useRef, useState } from "react";
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400"],
});

const TICKER_PIXELS_PER_SECOND = 42;

export default function RunningTicker({ text }) {
  const repeatsPerGroup = 4;
  const firstGroupRef = useRef(null);
  const [durationInSeconds, setDurationInSeconds] = useState(40);

  useEffect(() => {
    const updateDuration = () => {
      const group = firstGroupRef.current;
      if (!group) return;

      const groupWidth = group.scrollWidth;
      if (!groupWidth) return;

      const nextDuration = Math.max(24, groupWidth / TICKER_PIXELS_PER_SECOND);
      setDurationInSeconds(Number(nextDuration.toFixed(2)));
    };

    updateDuration();

    let observer;
    if (typeof ResizeObserver !== "undefined" && firstGroupRef.current) {
      observer = new ResizeObserver(updateDuration);
      observer.observe(firstGroupRef.current);
    }

    window.addEventListener("resize", updateDuration);
    return () => {
      window.removeEventListener("resize", updateDuration);
      observer?.disconnect();
    };
  }, [text]);

  return (
    <div className="w-full bg-darkslategray-200 py-[13px] overflow-hidden">
      <div
        className="ticker-track flex w-max items-center whitespace-nowrap"
        style={{ "--ticker-duration": `${durationInSeconds}s` }}
      >
        {[0, 1].map((groupIndex) => (
          <div
            key={`ticker-group-${groupIndex}`}
            ref={groupIndex === 0 ? firstGroupRef : null}
            className="flex items-center gap-8 desktop:gap-14 pr-8 desktop:pr-14"
          >
            {Array.from({ length: repeatsPerGroup }).map((_, index) => (
              <i
                key={`running-ticker-${groupIndex}-${index}`}
                className={`${playfairDisplay.className} italic text-white text-[25px] leading-[25px] inline-block shrink-0`}
              >
                {text}
              </i>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
