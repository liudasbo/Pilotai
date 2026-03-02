"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroBackgroundMedia() {
  const [shouldRenderVideo, setShouldRenderVideo] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const prefersReducedData = navigator.connection?.saveData === true;
    if (prefersReducedMotion || prefersReducedData) return;

    let timerId;
    const enableVideo = () => {
      timerId = window.setTimeout(() => {
        setShouldRenderVideo(true);
      }, 1200);
    };

    let disposed = false;
    const onLoad = () => {
      if (!disposed) enableVideo();
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }

    return () => {
      disposed = true;
      window.removeEventListener("load", onLoad);
      window.clearTimeout(timerId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0" aria-hidden="true">
      <Image quality={90}
        src="/images/home-hero-poster.jpg"
        alt=""
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover object-[62%_center] sm:object-center scale-[1.18] sm:scale-[1.12] desktop:scale-[1.08]"
      />
      {shouldRenderVideo ? (
        <video
          className="absolute inset-0 block w-full h-full motion-reduce:hidden scale-[1.18] sm:scale-[1.12] desktop:scale-[1.08]"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/images/home-hero-poster.jpg"
          style={{ objectFit: "cover", objectPosition: "62% center" }}
        >
          <source
            src="/videos/home-hero-mobile.mp4"
            type="video/mp4"
            media="(max-width: 767px)"
          />
          <source src="/videos/pilotai-1080p-fpv.mp4" type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
