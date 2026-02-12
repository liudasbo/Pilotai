import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

export default function RecreationalActivitiesSection() {
  return (
    <section
      id="activities"
      data-motion="reveal"
      className="w-full bg-whitesmoke-100 flex items-end justify-center py-16 sm:py-20 desktop:py-[147px] px-4 sm:px-6 desktop:px-num-119 box-border gap-10 desktop:gap-[52px] flex-col desktop:flex-row"
    >
      <section className="flex flex-col items-start justify-end pt-0 px-0 pb-[8.2px] box-border w-full max-w-[536px] text-left text-num-37 text-black font-jost">
        <div className="w-full flex flex-col items-start gap-8 desktop:gap-9 max-w-full">
          <div className="self-stretch flex flex-col items-start gap-5">
            <SectionHeading className="w-full max-w-[381.7px] relative flex items-center">
              Recreational Activities
            </SectionHeading>
            <div className="text-section-body self-stretch relative">
              Beyond the intensive aviation program, your 20-day journey will be
              filled with a wide range of hand-picked activities designed to
              match your personal interests and lifestyle. From golf and tennis
              to high-adrenaline experiences such as jet flight experiences,
              aerobatics, skydiving, wakeboarding, and shooting experiences,
              every day can offer something exciting and memorable.
              <br />
              <br />
              These activities are not add-ons - they’re part of the experience.
              We take care of all planning and coordination in advance, ensuring
              everything is organized before your arrival so you can focus on
              enjoying the moment. Whether you’re seeking relaxation, adventure,
              or new challenges, we’ll make sure your time outside aviation is
              just as rewarding as your time in the cockpit - and there’s always
              room for more, depending on your hobbies and preferences.
            </div>
          </div>
          <Button
            as={Link}
            href="/activities"
            className="px-[41px] flex flex-col items-start"
          >
            <div className="relative text-left">
              All Activities
            </div>
          </Button>
        </div>
      </section>
      <section className="w-full desktop:w-[760px] min-h-[320px] sm:min-h-[420px] desktop:min-h-[520px] overflow-hidden relative max-w-full">
        <Image
          className="absolute inset-0 w-full h-full object-cover"
          width={847.4}
          height={652.9}
          sizes="100vw"
          alt=""
          src="/images/Rectangle-39887@2x.png"
        />
      </section>
    </section>
  );
}
