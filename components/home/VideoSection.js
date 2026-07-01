import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function VideoSection() {
  return (
    <section
      data-motion="reveal"
      className="w-full py-16 sm:py-20 desktop:py-[104px] px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24"
    >
      <Container className="flex flex-col desktop:flex-row items-center gap-10 desktop:gap-16">
        {/* Video */}
        <div className="w-full desktop:w-[55%] shrink-0 aspect-video rounded-sm overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/K71Lys5E0GI?si=KRPIkI4mHkj5jyES&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        {/* Text */}
        <div className="flex flex-col items-start gap-6 desktop:w-[45%]">
          <SectionHeading className="text-left text-black">
            What Is Pilotai Program?
          </SectionHeading>
          <p className="text-section-body">
            A unique 20-day journey that takes you from the ground to the skies.
            Pilotai Program combines ultralight pilot training, premium
            experiences, and the beauty of Lithuania — designed for those who
            seek something truly extraordinary.
          </p>
        </div>
      </Container>
    </section>
  );
}
