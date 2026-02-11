import Image from "next/image";

const IMG = "https://picsum.photos/seed/recreational/800/500";

export default function RecreationalActivities() {
  return (
    <section className="bg-white py-section-y">
      <div className="max-w-7xl mx-auto px-section-x">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-section-label text-text-muted uppercase mb-2">
              Beyond the clouds
            </p>
            <h2 className="text-text-dark text-heading-section uppercase tracking-tight mb-6">
              Recreational Activities
            </h2>
            <p className="text-body text-text-dark mb-4 leading-relaxed">
              When you&apos;re not in the air, enjoy a range of premium activities. Explore nature, play golf, fish, cycle, or take part in cultural experiences. Our location offers the perfect balance of adventure and comfort.
            </p>
            <p className="text-body text-text-dark mb-8 leading-relaxed">
              From waterfront leisure to island community events, there is always something to do. Your premium lifestyle awaits — both in the sky and on the ground.
            </p>
            <a
              href="#activities"
              className="inline-block bg-primary-dark text-white px-8 py-3 text-sm font-semibold tracking-wider hover:opacity-90 transition-opacity"
            >
              VIEW ACTIVITIES
            </a>
          </div>
          <div className="relative aspect-[8/5] bg-neutral-200 flex items-center justify-center p-8">
            <Image
              src={IMG}
              alt="Premium lifestyle collage"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-primary-dark/30 flex items-center justify-center p-6">
              <p className="text-white text-center text-lg md:text-xl font-medium tracking-wide max-w-md">
                YOUR PREMIUM LIFESTYLE. ADVENTURE AND COMFORT.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
