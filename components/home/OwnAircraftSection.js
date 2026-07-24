import Link from "next/link";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function OwnAircraftSection() {
  return (
    <section
      data-motion="reveal"
      className="w-full bg-white py-16 sm:py-20 desktop:py-[104px] px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24"
    >
      <Container className="flex flex-col desktop:flex-row items-start desktop:items-center justify-between gap-10">
        <div className="flex flex-col gap-4 max-w-[560px]">
          <div className="text-num-13 tracking-[0.46px] leading-num-26 uppercase font-medium text-darkslategray-100">
            Own your aircraft
          </div>
          <SectionHeading as="h2" className="text-black">
            The sky called. You answered. Now it&apos;s yours.
          </SectionHeading>
          <p className="text-silver text-section-body">
            You came to Pilotai Program to learn. You stayed because flying became
            something more — a rhythm, a language, a need. When the hours in the
            logbook start feeling like a beginning rather than an achievement, you
            know it&apos;s time for the next step.
          </p>
        </div>
        <Button as={Link} href="/aircraft/buy" className="pl-[41px] pr-10 shrink-0">
          <div className="relative text-left">Explore aircraft</div>
        </Button>
      </Container>
    </section>
  );
}
