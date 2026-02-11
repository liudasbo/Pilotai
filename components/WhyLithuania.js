import Image from "next/image";

const IMG_TRAKAI = "https://picsum.photos/seed/trakai/600/500";
const IMG_RIVER = "https://picsum.photos/seed/lithuania-river/600/500";

export default function WhyLithuania() {
  return (
    <section className="bg-white py-section-y">
      <div className="max-w-7xl mx-auto px-section-x">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[6/5] relative">
              <Image
                src={IMG_TRAKAI}
                alt="Trakai Island Castle"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 30vw"
              />
            </div>
            <div className="aspect-[6/5] relative mt-8">
              <Image
                src={IMG_RIVER}
                alt="Aerial view of river and landscape"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 30vw"
              />
            </div>
          </div>
          <div>
            <h2 className="text-text-dark text-heading-section uppercase tracking-tight mb-6">
              Why Lithuania
            </h2>
            <p className="text-body text-text-dark mb-4 leading-relaxed">
              Lithuania offers some of the most scenic and diverse flying conditions in the region. From historic castles and lakes to vast forests and coastline, every flight is a new discovery.
            </p>
            <p className="text-body text-text-dark mb-8 leading-relaxed">
              Our growing aviation community and supportive regulatory environment make it an ideal place to earn your pilot licence and explore the skies. Join us and see why more pilots are choosing Lithuania.
            </p>
            <a
              href="#start"
              className="inline-block bg-accent-orange text-white px-8 py-3 text-sm font-semibold tracking-wider hover:bg-accent-orange-hover transition-colors"
            >
              GET STARTED
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
