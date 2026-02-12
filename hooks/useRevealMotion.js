"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getGsapClient } from "@/lib/animations/gsapClient";
import {
  HERO_REVEAL_PRESET,
  PARALLAX_LIGHT_PRESET,
  REVEAL_PRESET,
  SCROLL_TRIGGER_DEFAULTS,
  STAGGER_PRESET,
} from "@/lib/animations/presets";

const AUTO_REVEAL_SELECTOR =
  ".motion-scope section, .motion-scope footer, .motion-scope [data-motion='reveal']";

export function useRevealMotion() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const { gsap, ScrollTrigger } = getGsapClient();
    const ctx = gsap.context(() => {
      ScrollTrigger.clearScrollMemory("manual");

      const revealTargets = gsap.utils.toArray(AUTO_REVEAL_SELECTOR);

      revealTargets.forEach((target) => {
        if (!(target instanceof HTMLElement)) return;

        const isHeroBlock =
          target.closest("main")?.querySelector("h1") &&
          target.closest("main")?.contains(target) &&
          target.querySelector("h1");

        const preset = isHeroBlock ? HERO_REVEAL_PRESET : REVEAL_PRESET;

        const children = target.querySelectorAll(
          "h1, h2, h3, p, li, a, button, img, input, textarea, [data-motion='stagger-item']"
        );

        if (children.length > 0) {
          gsap.fromTo(
            children,
            { ...preset.from },
            {
              ...preset.to,
              stagger: STAGGER_PRESET,
              scrollTrigger: {
                ...SCROLL_TRIGGER_DEFAULTS,
                trigger: target,
              },
            }
          );
          return;
        }

        gsap.fromTo(target, preset.from, {
          ...preset.to,
          scrollTrigger: {
            ...SCROLL_TRIGGER_DEFAULTS,
            trigger: target,
          },
        });
      });

      const parallaxTargets = gsap.utils.toArray(
        ".motion-scope [data-motion='parallax']"
      );

      parallaxTargets.forEach((target) => {
        if (!(target instanceof HTMLElement)) return;

        gsap.to(target, {
          ...PARALLAX_LIGHT_PRESET,
          scrollTrigger: {
            trigger: target,
            start: "top bottom",
            end: "bottom top",
          },
        });
      });
    }, document.body);

    return () => {
      ctx.revert();
    };
  }, [pathname]);
}
