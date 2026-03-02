let isRegistered = false;
let gsapClientPromise;

export async function getGsapClient() {
  if (!gsapClientPromise) {
    gsapClientPromise = Promise.all([
      import("gsap"),
      import("gsap/ScrollTrigger"),
    ]).then(([gsapModule, scrollTriggerModule]) => ({
      gsap: gsapModule.gsap,
      ScrollTrigger: scrollTriggerModule.ScrollTrigger,
    }));
  }

  const { gsap, ScrollTrigger } = await gsapClientPromise;

  if (typeof window !== "undefined" && !isRegistered) {
    gsap.registerPlugin(ScrollTrigger);
    isRegistered = true;
  }

  return { gsap, ScrollTrigger };
}
