import Image from "next/image";

const IMG1 = "https://picsum.photos/seed/more1/600/500";
const IMG2 = "https://picsum.photos/seed/more2/600/400";
const IMG3 = "https://picsum.photos/seed/more3/600/450";

const LINES = [
  "PILOT LICENCE",
  "FLY VARIED AIRCRAFT",
  "EXPLORE LITHUANIA",
  "MEMBERSHIP IN THE CLUB",
];

export default function MoreThanJust() {
  return (
    <section className="bg-primary-dark py-section-y">
      <div className="max-w-7xl mx-auto px-section-x">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-white/80 text-body-sm tracking-wide mb-4">
              More than just a…
            </p>
            <div className="space-y-3">
              {LINES.map((line) => (
                <h2
                  key={line}
                  className="text-white text-2xl md:text-3xl font-bold tracking-tight"
                >
                  {line}
                </h2>
              ))}
            </div>
          </div>
          <div className="relative h-[480px] lg:h-[520px]">
            <div className="absolute inset-0 flex items-center justify-center gap-4">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[55%] aspect-[6/5] relative z-10 shadow-xl">
                <Image
                  src={IMG1}
                  alt="Aircraft over landscape"
                  fill
                  className="object-cover"
                  sizes="55vw"
                />
              </div>
              <div className="absolute right-[15%] top-[10%] w-[45%] aspect-[6/4] relative z-0 opacity-90">
                <Image
                  src={IMG2}
                  alt="Aerial view"
                  fill
                  className="object-cover"
                  sizes="45vw"
                />
              </div>
              <div className="absolute right-[25%] bottom-[5%] w-[40%] aspect-[6/4] relative z-0 opacity-80">
                <Image
                  src={IMG3}
                  alt="Landscape"
                  fill
                  className="object-cover"
                  sizes="40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
