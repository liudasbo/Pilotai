import Image from "next/image";
import BecomePilotIcon from "./BecomePilotIcon";

const IMG_LEFT = "https://picsum.photos/seed/pilot-jet/600/600";
const IMG_RIGHT = "https://picsum.photos/seed/pilot-prop/600/600";

export default function BecomePilot() {
  return (
    <section className="bg-white py-section-y">
      <div className="max-w-7xl mx-auto px-section-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-2 relative">
            <div className="aspect-square relative">
              <Image
                src={IMG_LEFT}
                alt="Jet aircraft"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 25vw"
              />
            </div>
          </div>
          <div className="lg:col-span-8 flex flex-col items-center text-center">
            <div className="mb-6">
              <BecomePilotIcon />
            </div>
            <h2 className="text-text-dark text-heading-section uppercase tracking-tight mb-6">
              Become a Pilot in Lithuania
            </h2>
            <p className="text-body text-text-dark max-w-2xl mb-8 leading-relaxed">
              Experience the thrill of flying over Lithuania&apos;s stunning landscapes. From scenic flights above castles and lakes to comprehensive pilot training programmes, discover what it means to take to the skies and become a pilot.
            </p>
            <a
              href="#courses"
              className="inline-block bg-primary-dark text-white px-8 py-3 text-sm font-semibold tracking-wider hover:opacity-90 transition-opacity"
            >
              VIEW OUR COURSES
            </a>
          </div>
          <div className="lg:col-span-2 relative">
            <div className="aspect-square relative">
              <Image
                src={IMG_RIGHT}
                alt="Propeller aircraft"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 25vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
