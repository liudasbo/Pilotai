import Image from "next/image";

export default function ScenicSection({
  id,
  backgroundSrc,
  backgroundAlt,
  overlaySrc = "/images/Vector1.svg",
  overlayAlt = "",
  showOverlay = true,
  tintClassName = "bg-[#182739]/45",
  sectionClassName = "",
  containerClassName = "",
  children,
}) {
  return (
    <section
      id={id}
      data-motion="reveal"
      className={`relative w-full overflow-hidden min-h-[560px] desktop:min-h-[560px] ${sectionClassName}`.trim()}
    >
      <Image
        src={backgroundSrc}
        alt={backgroundAlt}
        fill
        className="object-cover"
      />
      {showOverlay ? (
        <Image
          src={overlaySrc}
          alt={overlayAlt}
          width={945}
          height={977}
          className="absolute pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] desktop:w-[62%] max-w-none opacity-70"
        />
      ) : null}
      {tintClassName ? (
        <div className={`absolute inset-0 ${tintClassName}`} />
      ) : null}
      <div
        className={`relative z-[1] min-h-[560px] flex items-end py-14 desktop:py-[92px] px-4 sm:px-6 desktop:px-[70px] ${containerClassName}`.trim()}
      >
        {children}
      </div>
    </section>
  );
}
