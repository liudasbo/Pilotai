import Image from "next/image";

const IMG = "https://picsum.photos/seed/mrs-tell/1920/800";

export default function MrsTell() {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-end">
      <Image
        src={IMG}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-primary-dark/50" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-section-x pb-16">
        <p className="text-white/90 text-body-sm tracking-wide mb-2">
          We will take care of you
        </p>
        <h2 className="text-white text-3xl md:text-4xl lg:text-heading-section font-bold tracking-tight mb-2">
          YOU WILL FLY WITH MRS. TELL
        </h2>
        <p className="text-white/90 text-body mb-4">
          Lead Instructor. Senior Captain.
        </p>
        <a
          href="#mrs-tell"
          className="text-white text-body-sm font-semibold tracking-wider underline hover:no-underline"
        >
          LEARN MORE
        </a>
      </div>
    </section>
  );
}
