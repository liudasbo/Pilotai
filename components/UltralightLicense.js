import Image from "next/image";

const IMG1 = "https://picsum.photos/seed/ultra1/500/400";
const IMG2 = "https://picsum.photos/seed/ultra2/500/300";
const IMG3 = "https://picsum.photos/seed/ultra3/500/300";

export default function UltralightLicense() {
  return (
    <section className="bg-section-light py-section-y">
      <div className="max-w-7xl mx-auto px-section-x">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-4">
            <div className="aspect-[5/4] relative">
              <Image
                src={IMG1}
                alt="Pilot in cockpit"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[5/3] relative">
                <Image
                  src={IMG2}
                  alt="Aircraft on runway"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
              <div className="aspect-[5/3] relative">
                <Image
                  src={IMG3}
                  alt="Aircraft"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-text-dark text-heading-section uppercase tracking-tight mb-6">
              Ultralight Pilot License
            </h2>
            <p className="text-body text-text-dark mb-4 leading-relaxed">
              Learn to fly ultralight aircraft in a supportive and professional environment. Our programme combines theory and hands-on flight training to prepare you for your pilot licence.
            </p>
            <p className="text-body text-text-dark mb-8 leading-relaxed">
              Join a community of aviation enthusiasts and gain access to our fleet and club facilities. Whether you dream of recreational flying or advancing to higher licences, we are here to support your journey.
            </p>
            <a
              href="#club"
              className="inline-block bg-accent-orange text-white px-8 py-3 text-sm font-semibold tracking-wider hover:bg-accent-orange-hover transition-colors"
            >
              JOIN THE CLUB
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
