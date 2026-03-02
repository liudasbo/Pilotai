"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const SHOW_DELAY_MS = 160;
const MIN_VISIBLE_MS = 280;
const FAILSAFE_MS = 5000;

export default function PageLoader() {
  const [isVisible, setIsVisible] = useState(false);
  const shownAtRef = useRef(null);

  useEffect(() => {
    if (document.readyState === "interactive" || document.readyState === "complete") {
      return undefined;
    }

    let showTimerId;
    let hideTimerId;
    let failsafeTimerId;

    const show = () => {
      shownAtRef.current = performance.now();
      setIsVisible(true);
    };

    const hide = () => {
      window.clearTimeout(showTimerId);

      if (shownAtRef.current == null) {
        setIsVisible(false);
        return;
      }

      const elapsedSinceVisible = performance.now() - shownAtRef.current;
      const remaining = Math.max(0, MIN_VISIBLE_MS - elapsedSinceVisible);

      hideTimerId = window.setTimeout(() => {
        setIsVisible(false);
      }, remaining);
    };

    showTimerId = window.setTimeout(show, SHOW_DELAY_MS);
    document.addEventListener("DOMContentLoaded", hide, { once: true });
    window.addEventListener("load", hide, { once: true });

    failsafeTimerId = window.setTimeout(() => {
      setIsVisible(false);
    }, FAILSAFE_MS);

    return () => {
      document.removeEventListener("DOMContentLoaded", hide);
      window.removeEventListener("load", hide);
      window.clearTimeout(showTimerId);
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
        <Image quality={90}
          src="/images/logoBlack.svg"
          alt="Pilotai Program"
          width={140.6}
          height={63.8}
        />
        <div className="w-10 h-10 border-[2px] border-black/20 border-t-black rounded-full animate-spin" />
      </div>
    </div>
  );
}
