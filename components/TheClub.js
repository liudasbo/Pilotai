import Image from "next/image";

const IMG = "https://picsum.photos/seed/the-club/700/500";

const FEATURES_LEFT = [
  "AUTOMATED FLIGHT INSTRUCTIONS",
  "ACCESS TO PRIVATE AIRCRAFT",
  "BUILDING A NETWORK",
];

const FEATURES_RIGHT = [
  "LUXURY PRIVATE HOME LOCATION",
  "MANAGEMENT SYSTEM",
  "ACTIVE ISLAND COMMUNITY",
];

export default function TheClub() {
  return (
    <section className="bg-section-light py-section-y">
      <div className="max-w-7xl mx-auto px-section-x">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[7/5]">
            <Image
              src={IMG}
              alt="Club members at airfield"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-text-dark text-heading-section uppercase tracking-tight mb-6">
              The Club
            </h2>
            <p className="text-body text-text-dark mb-8 leading-relaxed">
              Premium privileges and a dedicated community. Our club is the ultimate destination for aviation enthusiasts who want more than just a licence — access to private aircraft, expert instruction, and a network of like-minded pilots.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <ul className="space-y-3">
                {FEATURES_LEFT.map((item) => (
                  <li
                    key={item}
                    className="text-body-sm text-text-dark font-medium tracking-wide"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {FEATURES_RIGHT.map((item) => (
                  <li
                    key={item}
                    className="text-body-sm text-text-dark font-medium tracking-wide"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="#club-more"
              className="inline-block bg-accent-orange text-white px-8 py-3 text-sm font-semibold tracking-wider hover:bg-accent-orange-hover transition-colors"
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
