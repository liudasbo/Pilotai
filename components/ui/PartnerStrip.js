import Image from "next/image";
import Container from "@/components/ui/Container";

export default function PartnerStrip({ partners, className = "" }) {
  const doubled = [...partners, ...partners];

  return (
    <section
      data-motion="reveal"
      className={`w-full bg-whitesmoke-100 py-10 desktop:py-[70px] desktop:px-10 ${className}`.trim()}
    >
      {/* Mobile / tablet — scrolling marquee */}
      <div className="desktop:hidden overflow-hidden">
        <div className="flex animate-marquee gap-10 w-max">
          {doubled.map((partner, i) => (
            <div
              key={`${partner.src}-${i}`}
              className="shrink-0 min-h-[72px] flex items-center justify-center px-2"
            >
              <Image
                quality={90}
                src={partner.src}
                alt={partner.alt}
                width={partner.width}
                height={partner.height}
                className={`${partner.className || "h-auto"} object-contain`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop — grid */}
      <Container className="hidden desktop:grid grid-cols-5 gap-6 items-center">
        {partners.map((partner) => (
          <div
            key={partner.src}
            className="w-full min-h-[86px] flex items-center justify-center"
          >
            <Image
              quality={90}
              src={partner.src}
              alt={partner.alt}
              width={partner.width}
              height={partner.height}
              className={`${partner.className || "h-auto"} mx-auto object-contain`}
            />
          </div>
        ))}
      </Container>
    </section>
  );
}
