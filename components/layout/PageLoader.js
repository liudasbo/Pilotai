"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const MIN_VISIBLE_MS = 500;
const FAILSAFE_MS = 9000;

export default function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const startedAt = performance.now();
    let hideTimerId;
    let failsafeTimerId;

    const hide = () => {
      const elapsed = performance.now() - startedAt;
      const remaining = Math.max(0, MIN_VISIBLE_MS - elapsed);
      hideTimerId = window.setTimeout(() => {
        setIsVisible(false);
      }, remaining);
    };

    if (document.readyState === "complete") {
      hide();
    } else {
      window.addEventListener("load", hide, { once: true });
    }

    failsafeTimerId = window.setTimeout(() => {
      setIsVisible(false);
    }, FAILSAFE_MS);

    return () => {
      window.removeEventListener("load", hide);
      window.clearTimeout(hideTimerId);
      window.clearTimeout(failsafeTimerId);
    };
  }, []);

  return (
    <div
      aria-hidden={!isVisible}
      className={`fixed inset-0 z-[2147483646] bg-white flex items-center justify-center transition-opacity duration-500 ${
        isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center gap-5">
        <Image
          src="/images/logoBlack.svg"
          alt="Pilotai Program"
          width={140.6}
          height={63.8}
          priority
        />
        <div className="w-10 h-10 border-[2px] border-black/20 border-t-black rounded-full animate-spin" />
      </div>
    </div>
  );
}
