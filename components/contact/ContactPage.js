import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import RunningTicker from "@/components/ui/RunningTicker";
import SectionHeading from "@/components/ui/SectionHeading";

function ContactFormSection() {
  return (
    <section data-motion="text-only" className="w-full bg-white">
      <div className="w-full flex flex-col desktop:flex-row items-stretch desktop:h-[602px]">
        <Image
          src="/images/a@2x.png"
          alt="Aircraft above city skyline"
          width={755}
          height={602}
          className="w-full desktop:w-1/2 h-[320px] sm:h-[460px] desktop:h-full object-cover"
        />
        <div className="w-full desktop:w-1/2 h-full py-8 sm:py-10 desktop:py-0 px-4 sm:px-6 desktop:px-[40px] flex items-center">
          <div className="w-full max-w-[596px] mx-auto flex flex-col items-start gap-7">
            <SectionHeading as="h1" className="text-black">
              You can contact us
            </SectionHeading>
            <form className="w-full flex flex-col items-start gap-6 text-num-14 text-darkslategray-100 font-red-hat-display">
              <label className="w-full border-b border-gainsboro pb-1">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full border-none outline-none bg-transparent tracking-num-0_56 leading-num-24 placeholder:text-darkslategray-100 placeholder:opacity-100"
                />
              </label>
              <label className="w-full border-b border-gainsboro pb-1">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  className="w-full border-none outline-none bg-transparent tracking-num-0_56 leading-num-24 placeholder:text-darkslategray-100 placeholder:opacity-100"
                />
              </label>
              <label className="w-full border-b border-gainsboro pb-1">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full border-none outline-none bg-transparent tracking-num-0_56 leading-num-24 placeholder:text-darkslategray-100 placeholder:opacity-100"
                />
              </label>
              <label className="w-full border-b border-gainsboro pb-1">
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Enter Message"
                  className="w-full border-none outline-none bg-transparent tracking-num-0_56 leading-num-24 resize-none placeholder:text-darkslategray-100 placeholder:opacity-100"
                />
              </label>
              <button
                type="submit"
                className="cursor-pointer border-none py-3.5 px-[42px] bg-[#cc6e36] text-num-13 tracking-[0.39px] leading-[15.6px] uppercase font-semibold font-jost text-white focus-visible:outline-none"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfoBand() {
  return (
    <section className="w-full bg-whitesmoke-100 py-[70px] px-[30px] text-num-16 text-black font-red-hat-display">
      <Container className="max-w-[1374px] flex flex-wrap items-start justify-between gap-8">
        <div className="flex flex-col items-start gap-[2.5px]">
          <h3 className="m-0 text-num-16 tracking-num-0_24 leading-num-22 uppercase font-medium">
            Email us
          </h3>
          <p className="m-0 leading-num-23 font-jost text-darkslategray-100">
            info@pilotaiprogram.com
          </p>
        </div>
        <div className="flex flex-col items-start gap-[2.5px]">
          <h3 className="m-0 text-num-16 tracking-num-0_24 leading-num-22 uppercase font-medium">
            Call us
          </h3>
          <p className="m-0 leading-num-23 font-jost text-darkslategray-100">
            +370 604 46088
          </p>
        </div>
        <div className="flex flex-col items-start gap-[2.5px]">
          <h3 className="m-0 text-num-16 tracking-num-0_24 leading-num-22 uppercase font-medium">
            Address
          </h3>
          <p className="m-0 leading-num-23 font-jost text-darkslategray-100">
            Kaunas, Lithuania
          </p>
        </div>
        <div className="flex flex-col items-start gap-[3px]">
          <h3 className="m-0 text-num-16 tracking-num-0_24 leading-num-22 uppercase font-medium">
            Working hours
          </h3>
          <p className="m-0 leading-num-23 font-jost text-darkslategray-100">
            9.00 am - 6.00pm
          </p>
        </div>
      </Container>
    </section>
  );
}

function ContactNewsletterSection() {
  return (
    <section className="w-full bg-whitesmoke-100 py-16 sm:py-20 desktop:py-[119px] px-4 sm:px-6 text-center">
      <Container className="max-w-[802px] flex flex-col items-center gap-[22px]">
        <SectionHeading as="h2" className="text-black text-center">
          Our Newsletter
        </SectionHeading>
        <p className="m-0 text-num-16 leading-num-24 text-darkslategray-100 font-jost">
          No invitations only pure fly content
        </p>
        <form className="w-full border-b border-black flex items-center justify-between gap-4 py-2">
          <input
            type="email"
            placeholder="Email Address"
            aria-label="Email Address"
            className="w-full border-none outline-none bg-transparent text-num-16 leading-num-24 text-darkslategray-100 placeholder:text-darkslategray-100 placeholder:opacity-100 font-jost"
          />
          <button type="submit" aria-label="Subscribe to newsletter">
            <Image
              src="/images/Button.svg"
              alt=""
              width={17}
              height={12}
              className="w-[17px] h-3"
            />
          </button>
        </form>
        <p className="m-0 text-num-14 leading-num-24 text-darkslategray-100 font-jost">
          Privacy Policy and Terms &amp; Conditions.
        </p>
      </Container>
    </section>
  );
}

export default function ContactPage() {
  return (
    <div className="w-full bg-white overflow-x-hidden flex flex-col items-stretch motion-scope">
      <main className="w-full">
        <Header textColor="black" topSocialGray />
        <ContactFormSection />
      </main>
      <ContactInfoBand />
      <RunningTicker text="More than flying. A way of being." />
      <ContactNewsletterSection />
      <Footer />
    </div>
  );
}
