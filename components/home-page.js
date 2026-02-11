import Image from "next/image";
import FrameComponent from "./frame-component";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <div className="w-full relative bg-white overflow-x-hidden overflow-y-auto flex flex-col items-stretch justify-start leading-[normal] tracking-[normal] text-left text-[25px] text-white font-jost">
      <main className="w-full bg-blanchedalmond flex flex-col items-start pt-num-0 px-num-0 pb-[129px] box-border relative isolate gap-[150.2px]">
        <Image
          className="w-full h-full absolute m-0 top-[0px] left-[0px] object-cover shrink-0"
          width={1512}
          height={900}
          sizes="100vw"
          alt=""
          src="/images/sr7-slide@2x.png"
        />
        <FrameComponent />
        <section className="w-[1096.7px] mx-auto flex items-start justify-center py-num-0 px-num-20 box-border max-w-full shrink-0 text-left text-[64px] text-white font-jost">
          <div className="w-[858.7px] flex flex-col items-start gap-[157px] max-w-full lg:gap-[78px]">
            <div className="w-[607px] flex flex-col items-start gap-6">
              <div className="self-stretch relative leading-[80px] capitalize">
                Built around the aircraft
              </div>
              <Image
                className="w-20 h-20 relative"
                loading="lazy"
                width={80}
                height={80}
                sizes="100vw"
                alt=""
                src="/images/Group.svg"
              />
            </div>
            <div className="self-stretch flex items-center flex-wrap content-center gap-x-[111px] gap-y-[25px] text-[14px] font-jost lg:gap-[55px]">
              <div className="h-px w-[830px] bg-gainsboro-200 flex flex-col items-start">
                <div className="w-[344px] h-px relative bg-neutral-100" />
              </div>
              <div className="border-neutral-100 border-solid border-b-[1px] flex items-center pt-1 px-num-0 pb-0.5 gap-2">
                <div className="relative leading-4 font-medium">
                  Pilot License
                </div>
                <Image
                  className="h-[9.3px] w-[9.3px] relative"
                  loading="lazy"
                  width={9.3}
                  height={9.3}
                  sizes="100vw"
                  alt=""
                  src="/images/SVG.svg"
                />
              </div>
              <div className="border-neutral-100 border-solid border-b-[1px] flex items-center pt-1 px-num-0 pb-0.5 gap-2">
                <div className="relative leading-4 font-medium">The Club</div>
                <Image
                  className="h-[9.3px] w-[9.3px] relative"
                  width={9.3}
                  height={9.3}
                  sizes="100vw"
                  alt=""
                  src="/images/SVG.svg"
                />
              </div>
              <div className="w-[412px] relative text-[18px] leading-num-25 flex items-center shrink-0">
                A 20-day journey combining flight training, travel, and premium
                leisure.
              </div>
            </div>
          </div>
        </section>
      </main>

      <section className="w-full h-[648px] shrink-0 flex items-start justify-center pt-[121px] px-[206px] pb-[96.3px] box-border gap-[71.5px]">
        <div className="flex flex-col items-start pt-[97px] pb-num-0 pl-num-0 pr-1">
          <Image
            className="w-full relative max-h-full h-auto object-cover"
            loading="lazy"
            width={192.9}
            height={176.4}
            sizes="100vw"
            alt=""
            src="/images/Right-img@2x.png"
          />
        </div>
        <section className="w-[567px] flex flex-col items-center gap-9 max-w-full text-center text-num-37 text-black font-jost">
          <Image
            className="w-[85.7px] h-[151.2px] relative"
            loading="lazy"
            width={85.7}
            height={151.2}
            sizes="100vw"
            alt=""
            src="/images/Logo-symbol.svg"
          />
          <div className="self-stretch flex flex-col items-center gap-6">
            <h2 className="m-0 self-stretch relative text-[length:inherit] tracking-num-0_56 leading-num-42 uppercase font-medium font-[inherit]">
              Become a Pilot in Lithuania
            </h2>
            <div className="w-[521.5px] h-[93.5px] relative text-num-16 leading-num-24 font-jost text-darkslategray-100 flex items-center justify-center">
              Experience unique 20-day journey in Lithuania that blends aviation
              training, premium comfort, and memorable adventures. This program
              is designed for those who want to discover something new while
              enjoying a refined and exciting getaway.
            </div>
          </div>
          <button className="cursor-pointer border-none py-num-14 pl-[41px] pr-10 bg-black flex flex-col items-start hover:bg-darkslategray-300">
            <div className="relative text-num-13 tracking-num-0_39 leading-num-15_6 uppercase font-medium font-jost text-white text-left">
              See the package
            </div>
          </button>
        </section>
        <div className="flex flex-col items-start pt-[195px] px-num-0 pb-num-0">
          <Image
            className="w-full relative max-h-full h-auto object-cover"
            loading="lazy"
            width={192.9}
            height={176.2}
            sizes="100vw"
            alt=""
            src="/images/Left-img@2x.png"
          />
        </div>
      </section>

      <section className="self-stretch h-[648px] bg-whitesmoke-100 shrink-0 flex flex-col items-start py-[86px] px-num-119 box-border max-w-full">
        <div className="w-[1274px] mx-auto flex items-center gap-28 max-w-full">
          <section className="h-[455px] w-[631px] flex items-start pt-num-0 pb-[53px] pl-[329px] pr-num-0 box-border gap-[29px] max-w-full lg:min-w-full">
            <Image
              className="ml-[-330px] h-num-402 w-[301px] relative object-cover shrink-0"
              loading="lazy"
              width={301}
              height={402}
              sizes="100vw"
              alt=""
              src="/images/sr7-mask@2x.png"
            />
            <div className="h-num-402 flex flex-col items-start pt-[55px] px-num-0 pb-num-0 box-border shrink-0">
              <Image
                className="w-full h-num-402 relative object-cover"
                loading="lazy"
                width={301}
                height={402}
                sizes="100vw"
                alt=""
                src="/images/sr7-mask1@2x.png"
              />
            </div>
          </section>
          <section className="w-[531px] flex flex-col items-start py-num-20 px-num-0 box-border gap-9 max-w-full text-left text-num-37 text-black font-jost">
            <div className="w-[531px] flex flex-col items-start gap-[9px]">
              <h1 className="m-0 w-[447.6px] h-[91px] relative text-[length:inherit] tracking-num-0_56 leading-num-42 uppercase font-medium font-[inherit] flex items-center">
                ultralight pilot license
              </h1>
              <div className="self-stretch flex flex-col items-start gap-[23px] text-num-16 text-darkslategray-100 font-jost">
                <div className="self-stretch relative leading-num-24">
                  Participants will have the chance to earn an ultralight pilot
                  license, fly different types of aircraft, and enjoy a variety
                  of leisure activities-all while exploring the beauty of
                  Lithuania from the ground and the sky.
                </div>
                <div className="self-stretch relative leading-num-24">
                  Training using Bristell aircraft to obtain an ultralight pilot
                  licence
                </div>
              </div>
            </div>
            <button className="cursor-pointer border-none py-num-14 px-10 bg-chocolate-100 flex flex-col items-center justify-center hover:bg-chocolate-200">
              <div className="relative text-num-13 tracking-num-0_39 leading-num-15_6 uppercase font-medium font-jost text-white text-left">
                View More
              </div>
            </button>
          </section>
        </div>
      </section>

      <div className="w-full bg-darkslategray-200 flex items-start pt-[13.5px] px-[15px] pb-[13px] box-border">
        <div className="w-[1482px] mx-auto overflow-hidden shrink-0 flex items-center gap-14 max-w-full">
          <i className="relative leading-num-25 inline-block shrink-0 max-w-full">
            Pilotai Program positioning Lithuania as the premier luxury aviation
            hub in the world
          </i>
          <i className="relative leading-num-25 inline-block shrink-0 max-w-full">
            Pilotai Program positioning Lithuania as the premier luxury aviation
            hub in the world
          </i>
          <h2 className="m-0 relative text-[length:inherit] leading-num-25 inline-block italic font-normal font-[inherit] max-w-full shrink-0">
            More than flying. A way of being.
          </h2>
          <h2 className="m-0 relative text-[length:inherit] leading-num-25 inline-block italic font-normal font-[inherit] max-w-full shrink-0">
            More than flying. A way of being
          </h2>
          <div className="h-[33.5px] w-[438.9px] relative max-w-full shrink-0" />
        </div>
      </div>

      <section className="flex items-start justify-center pt-[95px] px-num-20 pb-[94.5px] box-border max-w-full lg:h-auto lg:pt-[62px] lg:pb-[61px] lg:box-border">
        <div className="w-[1153.7px] mx-auto flex items-center justify-between gap-px max-w-full lg:flex-wrap lg:gap-px">
          <section className="w-[550px] flex flex-col items-start gap-[42px] max-w-full text-left text-[60px] text-black font-jost lg:flex-1">
            <div className="flex flex-col items-start gap-2.5 text-num-16 text-darkslategray-100 font-jost">
              <div className="w-[172.3px] h-num-23 relative leading-num-23 flex items-center">
                What You Get
              </div>
              <h1 className="m-0 relative text-[60px] tracking-[0.9px] leading-[60px] uppercase font-medium font-jost text-black">
                Pilot licence
              </h1>
              <div className="w-[449px] h-px relative bg-black" />
            </div>
            <h1 className="m-0 w-[429px] relative text-[length:inherit] tracking-[0.9px] leading-[60px] uppercase font-medium font-[inherit] flex items-center">
              Fly Varied Aircraft
            </h1>
            <h1 className="m-0 w-[356.2px] relative text-[length:inherit] tracking-[0.9px] leading-[60px] uppercase font-medium font-[inherit] flex items-center">
              Explore Lithuania
            </h1>
            <h1 className="m-0 w-[450px] relative text-[length:inherit] tracking-[0.9px] leading-[60px] uppercase font-medium font-[inherit] flex items-center">
              Membership in The Club
            </h1>
          </section>
          <div className="h-[660.5px] w-[602.7px] flex flex-col items-start pt-[50.9px] pb-[39.6px] pl-[54px] pr-[53px] box-border relative isolate max-w-full lg:flex-1">
            <Image
              className="w-[551.9px] absolute m-0 top-[calc(50%_-_306.45px)] right-[25px] max-h-full object-contain shrink-0"
              width={551.9}
              height={618.6}
              sizes="100vw"
              alt=""
              src="/images/interactive-links-h1@2x.png"
            />
            <Image
              className="w-[495px] relative max-h-full object-cover z-[1] shrink-0 lg:self-stretch lg:w-full"
              loading="lazy"
              width={495}
              height={570}
              sizes="100vw"
              alt=""
              src="/images/j@2x.png"
            />
            <Image
              className="w-full absolute m-0 top-[calc(50%_-_330.25px)] right-[0px] max-h-full object-contain h-full z-[2] shrink-0"
              width={602.7}
              height={660.5}
              sizes="100vw"
              alt=""
              src="/images/interactive-links-h1-2@2x.png"
            />
            <Image
              className="w-[551.9px] absolute m-0 top-[calc(50%_-_300.75px)] right-[25px] max-h-full object-contain z-[3] shrink-0"
              width={551.9}
              height={618.6}
              sizes="100vw"
              alt=""
              src="/images/h1-interactive-img-1@2x.png"
            />
          </div>
        </div>
      </section>

      <section className="self-stretch h-[648px] bg-whitesmoke-100 shrink-0 flex flex-col items-start py-[86px] px-num-119 box-border">
        <div className="w-[1274px] mx-auto flex items-center gap-[116px]">
          <section className="h-[455px] w-[627px] flex items-start pt-num-0 pb-[53px] pl-[329px] pr-[326px] box-border gap-[29px]">
            <Image
              className="ml-[-330px] h-num-402 w-[301px] relative object-cover shrink-0"
              width={301}
              height={402}
              sizes="100vw"
              alt=""
              src="/images/sr7-mask2@2x.png"
            />
            <div className="h-num-402 flex flex-col items-start pt-[55px] px-num-0 pb-num-0 box-border shrink-0">
              <Image
                className="w-full h-num-402 relative object-cover"
                loading="lazy"
                width={301}
                height={402}
                sizes="100vw"
                alt=""
                src="/images/sr7-mask3@2x.png"
              />
            </div>
          </section>
          <section className="w-[531px] flex flex-col items-start py-num-20 px-num-0 box-border gap-9 text-left text-num-37 text-black font-jost">
            <div className="w-[530px] flex flex-col items-start gap-6">
              <h2 className="m-0 relative text-[length:inherit] tracking-num-0_56 leading-num-42 uppercase font-medium font-[inherit]">
                Why Lithuania
              </h2>
              <div className="w-[531px] relative text-num-16 leading-num-24 text-darkslategray-100 flex items-center font-jost">
                <span className="w-full">
                  <span>
                    Lithuania offers a rare and beautiful advantage for aviation
                    enthusiasts:{" "}
                  </span>
                  <span className="font-semibold">
                    the entire country is easily accessible by air.
                  </span>
                  <span>
                    {" "}
                    Almost every region-and nearly every major city-has an
                    airport or a small aerodrome, making it possible to fly
                    freely across the country with ease.
                    <br />
                    This unique network allows you to{" "}
                  </span>
                  <span className="font-medium">
                    discover Lithuania from the air before you even land
                  </span>
                  <span>
                    -soaring over historic cities, lush forests, lakes,
                    coastline, and iconic touristic landmarks. Flying here
                    isn&apos;t just transportation; it&apos;s part of the
                    experience.
                  </span>
                </span>
              </div>
            </div>
            <button className="cursor-pointer border-none py-num-14 pl-[41px] pr-10 bg-chocolate-100 flex flex-col items-start hover:bg-chocolate-200">
              <div className="relative text-num-13 tracking-num-0_39 leading-num-15_6 uppercase font-medium font-jost text-white text-left">
                View More
              </div>
            </button>
          </section>
        </div>
      </section>

      <section className="w-full flex items-start relative isolate text-left text-[31px] text-white font-jost">
        <div className="w-full overflow-hidden shrink-0 flex flex-col items-start justify-end pt-[433px] pb-[66.9px] pl-[70px] pr-num-20 box-border relative isolate gap-1">
          <Image
            className="w-full h-full absolute m-0 bottom-[-2.5px] left-[-6px] object-cover shrink-0"
            width={1518}
            height={636}
            sizes="100vw"
            alt=""
            src="/images/Frame-7654767@2x.png"
          />
          <h2 className="m-0 w-[287.6px] h-[72px] relative text-[length:inherit] tracking-[0.47px] leading-9 uppercase font-medium font-jost flex items-center z-[1] shrink-0">
            You will fly with Bristell
          </h2>
          <div className="flex items-start pt-num-0 px-num-0 pb-[13.5px] shrink-0 text-[17px]">
            <div className="h-num-23 w-[163.4px] relative leading-num-23 flex items-center z-[1]">
              Air crafrs
            </div>
          </div>
          <div className="w-[76px] h-[15.6px] flex items-start py-num-0 px-num-0 box-border z-[1] shrink-0 text-num-13">
            <div className="mt-[-1px] flex flex-col items-start gap-px shrink-0">
              <div className="w-[85px] h-4 relative tracking-[0.26px] leading-num-15_6 uppercase font-medium inline-block">
                know more
              </div>
              <div className="w-[83px] h-px relative bg-white" />
            </div>
          </div>
        </div>
        <Image
          className="h-[977px] w-[945px] absolute m-0 top-[calc(50%_-_486.5px)] left-[calc(50%_-_469px)] z-[2] shrink-0"
          width={945}
          height={977}
          sizes="100vw"
          alt=""
          src="/images/Vector.svg"
        />
      </section>

      <section className="self-stretch flex items-center justify-center py-[103px] px-[206px] box-border gap-[60px] max-w-full">
        <Image
          className="w-[550px] relative max-h-full object-cover max-w-full"
          width={550}
          height={499.2}
          sizes="100vw"
          alt=""
          src="/images/Photos@2x.png"
        />
        <section className="w-[486px] flex flex-col items-start gap-9 max-w-full text-left text-num-37 text-black font-jost lg:min-w-full">
          <div className="self-stretch flex flex-col items-start gap-6">
            <div className="self-stretch flex flex-col items-start gap-6">
              <h2 className="m-0 self-stretch h-[42px] relative text-[length:inherit] tracking-num-0_56 leading-num-42 uppercase font-medium font-[inherit] flex items-center">
                The club
              </h2>
              <div className="w-[448.8px] h-[92px] relative text-num-16 leading-num-24 font-jost text-darkslategray-100 flex items-center">
                Pilotai Club brings together a select circle of ambitious,
                high-caliber individuals united by a shared passion for
                excellence, aviation, and extraordinary experiences.
              </div>
            </div>
            <div className="self-stretch h-[181px] flex items-start pt-num-0 px-num-0 pb-[13px] box-border gap-16 text-num-16 font-jost">
              <div className="flex flex-col items-start gap-12">
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
          <button className="cursor-pointer border-none py-num-14 pl-[41px] pr-10 bg-chocolate-100 flex flex-col items-start hover:bg-chocolate-200">
            <div className="relative text-num-13 tracking-num-0_39 leading-num-15_6 uppercase font-medium font-jost text-white text-left">
              View More
            </div>
          </button>
        </section>
      </section>

      <section className="w-full h-[849px] bg-gray-300 shrink-0 flex flex-col items-center pt-[97.8px] px-[99px] pb-[98.2px] box-border">
        <div className="w-full flex items-start justify-center py-num-0 px-0 box-border max-w-full">
          <div className="w-[1274px] mx-auto flex flex-col items-start gap-9 max-w-full">
            <section className="flex flex-col items-start text-left text-num-13 text-gray-200 font-jost">
              <div className="self-stretch relative tracking-[0.46px] leading-[26px] font-medium">
                Hand-selected residences, tailored to each client
              </div>
              <div className="w-[652px] flex flex-col items-start gap-4 text-num-37 text-gainsboro-100 font-jost">
                <h2 className="m-0 relative text-[length:inherit] tracking-num-0_56 leading-num-42 uppercase font-medium font-[inherit]">
                  Private Luxury Living
                </h2>
                <div className="self-stretch relative text-num-16 leading-num-24 font-jost text-gray-100">
                  Each participant stays in premium apartments selected to match
                  their lifestyle and privacy expectations.
                </div>
              </div>
            </section>
            <div className="self-stretch h-[461px] overflow-hidden shrink-0 flex items-start max-w-full">
              <div className="w-[1274px] flex items-center flex-wrap content-center gap-4 max-w-full">
                <section className="flex-1 flex flex-col items-start gap-[17px] min-w-[409px] text-left text-[20px] text-white font-jost">
                  <Image
                    className="self-stretch h-[417px] relative max-w-full overflow-hidden shrink-0 object-cover"
                    loading="lazy"
                    width={629}
                    height={417}
                    sizes="100vw"
                    alt=""
                    src="/images/c@2x.png"
                  />
                  <div className="flex items-center gap-2.5">
                    <h3 className="m-0 relative text-[length:inherit] tracking-[-0.4px] leading-[27px] font-normal font-[inherit]">
                      Nida Spa
                    </h3>
                    <div className="h-[18px] w-px relative bg-gray-200" />
                  </div>
                </section>
                <section className="flex-1 flex flex-col items-start gap-[17px] min-w-[409px] text-left text-[20px] text-white font-jost">
                  <Image
                    className="self-stretch h-[417px] relative max-w-full overflow-hidden shrink-0 object-cover"
                    loading="lazy"
                    width={629}
                    height={417}
                    sizes="100vw"
                    alt=""
                    src="/images/c1@2x.png"
                  />
                  <div className="flex items-center gap-2.5">
                    <h3 className="m-0 relative text-[length:inherit] tracking-[-0.4px] leading-[27px] font-normal font-[inherit]">
                      Birstonas Mineral Spa
                    </h3>
                    <div className="h-[18px] w-px relative bg-gray-200" />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-whitesmoke-100 flex items-end justify-center pt-[147px] px-num-119 pb-[155px] box-border gap-[52px]">
        <section className="flex flex-col items-start justify-end pt-num-0 px-num-0 pb-[8.2px] box-border max-w-full text-left text-num-37 text-black font-jost">
          <div className="w-[536px] flex flex-col items-start gap-9 max-w-full">
            <div className="self-stretch flex flex-col items-start gap-5">
              <h1 className="m-0 w-[381.7px] h-[91px] relative text-[length:inherit] tracking-num-0_56 leading-num-42 uppercase font-medium font-[inherit] flex items-center">
                Recreational Activities
              </h1>
              <div className="self-stretch relative text-num-16 leading-num-24 font-jost text-darkslategray-100">
                Beyond the intensive aviation program, your 20-day journey will
                be filled with a wide range of hand-picked activities designed
                to match your personal interests and lifestyle.
                <br />
                <br />
                These activities are not add-ons-they are part of the
                experience.
              </div>
            </div>
            <button className="cursor-pointer border-none py-num-14 px-[41px] bg-black flex flex-col items-start hover:bg-darkslategray-300">
              <div className="relative text-num-13 tracking-num-0_39 leading-num-15_6 uppercase font-medium font-jost text-white text-left">
                All Activities
              </div>
            </button>
          </div>
        </section>
        <section className="bg-darkslategray-200 overflow-hidden flex flex-col items-end pt-[134px] px-[79px] pb-[135.3px] box-border relative isolate gap-[212.9px] max-w-full text-right text-[7.2px] text-gray-300 font-jost lg:min-w-full">
          <Image
            className="w-[847.4px] h-[652.9px] absolute m-0 right-[-81px] bottom-[-73.9px] object-cover shrink-0"
            width={847.4}
            height={652.9}
            sizes="100vw"
            alt=""
            src="/images/Rectangle-39887@2x.png"
          />
          <Image
            className="w-[73.1px] h-[6.8px] absolute m-0 bottom-[133.3px] left-[221.3px] object-cover z-[1] shrink-0"
            loading="lazy"
            width={73.1}
            height={6.8}
            sizes="100vw"
            alt=""
            src="/images/Rectangle-39889@2x.png"
          />
          <div className="flex items-start pt-[5.3px] px-num-0 pb-[3.5px] bg-cover bg-no-repeat bg-[top] z-[1] shrink-0">
            <Image
              className="h-[16.8px] w-[65.2px] relative object-cover hidden shrink-0"
              width={65.2}
              height={16.8}
              sizes="100vw"
              alt=""
              src="/images/Rectangle-39888@2x.png"
            />
            <div className="h-2 w-[65px] relative leading-[113%] inline-block z-[2] shrink-0">
              pilotaiprogram.com
            </div>
          </div>
          <div className="flex items-start justify-end py-num-0 pl-[132px] pr-[313px] shrink-0">
            <div className="h-2 w-[82.1px] relative leading-[113%] inline-block z-[2]">
              info@pilotaiprogram.com
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </div>
  );
}
