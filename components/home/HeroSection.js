import Header from "@/components/layout/Header";
import HeroBackgroundMedia from "@/components/home/HeroBackgroundMedia";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <main className="w-full h-[88svh] min-h-[680px] sm:min-h-[760px] desktop:h-auto desktop:min-h-[900px] flex flex-col items-start pt-0 px-0 box-border relative isolate overflow-hidden">
      <HeroBackgroundMedia />
      <div className="absolute inset-0 bg-[#263C54]/65 pointer-events-none" />
      <Header />
      <section
        data-motion="text-only"
        className="w-full flex-1 flex items-center justify-start py-10 sm:py-12 desktop:py-16 px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-16 box-border text-left text-white font-jost z-[1]"
      >
        <div className="w-full max-w-[858.7px] flex flex-col items-start gap-10 sm:gap-16 desktop:gap-[157px]">
          <div className="w-full max-w-[607px] flex flex-col items-start gap-6">
            <h1 className="m-0 self-stretch relative text-[44px] leading-[52px] sm:text-[54px] sm:leading-[64px] desktop:text-[64px] desktop:leading-[80px] capitalize">
              Built around the aircraft
            </h1>
            <Link
              href="/contact-us"
              className="group inline-flex items-center gap-4 sm:gap-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Request Your Invitation"
            >
              <Image
                quality={90}
                src="/images/home/arrow.svg"
                alt=""
                aria-hidden="true"
                width={82}
                height={82}
                className="w-12 h-12 sm:w-[58px] sm:h-[58px] desktop:w-[82px] desktop:h-[82px] transition-transform duration-500 ease-out transform-gpu rotate-0 group-hover:rotate-90 group-focus-visible:rotate-90"
              />
              <span className="hero-cta-label overflow-hidden whitespace-normal sm:whitespace-nowrap transition-all duration-500 ease-out text-[18px] sm:text-[30px] desktop:text-[42px] leading-[1.08] tracking-[0.3px] font-normal border-b border-white pb-1 group-hover:max-w-[640px] group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:max-w-[640px] group-focus-visible:opacity-100 group-focus-visible:translate-x-0">
                Request Your Invitation
              </span>
            </Link>
          </div>
          <div className="self-stretch flex items-start flex-wrap content-start gap-x-6 sm:gap-x-10 desktop:gap-x-[111px] gap-y-5 sm:gap-y-[25px] text-[18px] font-jost">
            <Link
              href="/pilot-license"
              className="touch-target inline-flex items-center justify-center px-0"
            >
              <span className="relative leading-num-25 font-medium border-neutral-100 border-solid border-b-[1px]">
                Training
              </span>
            </Link>
            <Link
              href="/the-club"
              className="touch-target inline-flex items-center justify-center px-0"
            >
              <span className="relative leading-num-25 font-medium border-neutral-100 border-solid border-b-[1px]">
                The Club
              </span>
            </Link>
            <div className="w-full max-w-[412px] relative text-[18px] leading-num-25 flex items-center shrink-0">
              A 20-day journey combining flight training, travel, and premium
              leisure.
            </div>
          </div>
        </div>
      </section>

      <div className="absolute bottom-[15%] right-4 sm:right-6 lg:right-10 xl:right-14 2xl:right-16 z-[1] w-[260px] sm:w-[280px] desktop:w-[300px]">
        <div
          className="flex flex-col gap-4 p-5 desktop:p-6"
          style={{
            background: "rgba(255,255,255,0.07)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: "1px solid rgba(255,255,255,0.14)",
          }}
        >
          <div className="flex flex-col gap-2">
            <span className="text-[#cc6e36] font-jost text-[22px] leading-none select-none">&ldquo;</span>
            <p className="m-0 text-white font-jost text-[13px] leading-[20px] tracking-[0.2px] italic opacity-95">
              Every single day felt like a new adventure. If I could do it again tomorrow, I wouldn&apos;t hesitate.
            </p>
          </div>
          <div className="flex items-center gap-3 pt-3 border-t border-white/10">
            <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 bg-white/10">
              <Image
                src="/images/home/testimonial-avatar.png"
                alt="Yousef Alseddeeqi"
                width={36}
                height={36}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-0.5 min-w-0">
              <span className="text-white font-jost text-[12px] font-medium leading-[15px] truncate">
                Yousef Alseddeeqi
              </span>
              <a
                href="https://www.instagram.com/yalseddeeqi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-white/50 hover:text-white/80 transition-colors duration-200"
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="text-[11px] tracking-[0.3px]">@yalseddeeqi</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
