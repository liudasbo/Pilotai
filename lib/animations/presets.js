export const REVEAL_PRESET = {
  from: { autoAlpha: 0, y: 28 },
  to: {
    autoAlpha: 1,
    y: 0,
    duration: 0.95,
    ease: "power3.out",
  },
};

export const HERO_REVEAL_PRESET = {
  from: { autoAlpha: 0, y: 20 },
  to: {
    autoAlpha: 1,
    y: 0,
    duration: 1.1,
    ease: "power3.out",
  },
};

export const STAGGER_PRESET = {
  amount: 0.26,
  from: "start",
};

export const SCROLL_TRIGGER_DEFAULTS = {
  start: "top 88%",
  once: true,
};

export const PARALLAX_LIGHT_PRESET = {
  yPercent: -8,
  ease: "none",
  scrub: 0.6,
};
