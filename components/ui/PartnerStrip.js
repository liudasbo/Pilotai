import Image from "next/image";
import Container from "@/components/ui/Container";

export default function PartnerStrip({ partners, className = "" }) {
  return (
    <section
      data-motion="reveal"
      className={`w-full bg-whitesmoke-100 py-10 desktop:py-[70px] px-4 desktop:px-10 ${className}`.trim()}
    >
      <Container className="grid grid-cols-2 sm:grid-cols-3 desktop:grid-cols-5 gap-6 sm:gap-8 items-center">
        {partners.map((partner) => (
          <div
            key={partner.src}
            className="w-full min-h-[72px] desktop:min-h-[86px] flex items-center justify-center"
          >
            <Image
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
