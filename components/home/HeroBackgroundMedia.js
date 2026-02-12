import Image from "next/image";

export default function HeroBackgroundMedia() {
  return (
    <div className="absolute inset-0 overflow-hidden z-0" aria-hidden="true">
      <Image
        src="/images/home-hero-poster.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover object-[62%_center] sm:object-center scale-[1.18] sm:scale-[1.12] desktop:scale-[1.08]"
      />
      <video
        data-motion="parallax"
        className="absolute inset-0 block w-full h-full motion-reduce:hidden scale-[1.18] sm:scale-[1.12] desktop:scale-[1.08]"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/home-hero-poster.jpg"
        style={{ objectFit: "cover", objectPosition: "62% center" }}
      >
        <source
          src="/videos/home-hero-mobile.mp4"
          type="video/mp4"
          media="(max-width: 767px)"
        />
        <source src="/videos/home-hero.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
