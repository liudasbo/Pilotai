import Image from "next/image";

export default function TheClubSection() {
  return (
    <section className="self-stretch flex items-center justify-center py-16 sm:py-20 desktop:py-[103px] px-4 sm:px-6 desktop:px-[206px] box-border gap-10 desktop:gap-[60px] max-w-full flex-col desktop:flex-row">
      <Image
        className="w-full max-w-[550px] relative max-h-full object-cover"
        width={550}
        height={499.2}
        sizes="100vw"
        alt=""
        src="/images/Photos@2x.png"
      />
      <section className="w-full max-w-[486px] flex flex-col items-start gap-8 desktop:gap-9 text-left text-num-37 text-black font-jost">
        <div className="self-stretch flex flex-col items-start gap-6">
          <div className="self-stretch flex flex-col items-start gap-6">
            <h2 className="section-heading self-stretch relative flex items-center">
              The club
            </h2>
            <div className="text-section-body w-full max-w-[448.8px] relative flex items-center">
              Pilotai Club brings together a select circle of ambitious,
              high-caliber individuals united by a shared passion for excellence,
              aviation, and extraordinary experiences.
            </div>
          </div>
          <div className="self-stretch flex flex-col sm:flex-row items-start pt-0 px-0 pb-[13px] box-border gap-8 sm:gap-12 desktop:gap-16 text-num-16 font-jost">
            <div className="flex flex-col items-start gap-8 desktop:gap-12">
              <div className="flex items-center">
                <div className="w-[199px] relative tracking-num-0_24 leading-num-24 uppercase font-medium flex items-center shrink-0">
                  A curated circle of high-achievers
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-[199px] relative tracking-num-0_24 leading-num-24 uppercase font-medium flex items-center shrink-0">
                  Access to a private aviation lifestyle network
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6">
              <div className="flex items-center">
                <div className="w-[199px] relative tracking-num-0_24 leading-num-24 uppercase font-medium flex items-center shrink-0">
                  Meaningful connections beyond business
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-[199px] relative tracking-num-0_24 leading-num-24 uppercase font-medium flex items-center shrink-0">
                  Belonging to a rare, invitation-only community
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="cta-button-base cta-button-accent pl-[41px] pr-10 flex flex-col items-start">
          <div className="relative text-left">
            View More
          </div>
        </button>
      </section>
    </section>
  );
}
