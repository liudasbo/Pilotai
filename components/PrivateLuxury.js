import Image from "next/image";

const IMG_INTERIOR = "https://picsum.photos/seed/luxury-interior/600/450";
const IMG_EXTERIOR = "https://picsum.photos/seed/luxury-exterior/600/450";

export default function PrivateLuxury() {
  return (
    <section className="bg-primary-dark py-section-y">
      <div className="max-w-7xl mx-auto px-section-x">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-white/80 text-section-label uppercase mb-2">
              Private Aircraft Access
            </p>
            <h2 className="text-white text-heading-section uppercase tracking-tight mb-6">
              Private Luxury Living
            </h2>
            <p className="text-white text-body leading-relaxed">
              Exclusive access to a luxurious private home location designed for aviation enthusiasts. Enjoy premium amenities, stunning views, and a lifestyle that blends flight with comfort. Your base for exploring the skies and the island community.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="aspect-[4/3] relative">
                <Image
                  src={IMG_INTERIOR}
                  alt="Luxury interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <p className="text-white text-body-sm tracking-wider">INTERIOR</p>
            </div>
            <div className="space-y-2 mt-8">
              <div className="aspect-[4/3] relative">
                <Image
                  src={IMG_EXTERIOR}
                  alt="Luxury exterior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <p className="text-white text-body-sm tracking-wider">EXTERIOR</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
