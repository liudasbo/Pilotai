import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import NewsletterForm from "@/components/forms/NewsletterForm";

export default function NewsletterSection() {
  return (
    <section
      data-motion="reveal"
      className="w-full bg-whitesmoke-100 py-16 sm:py-20 desktop:py-[96px] 2xl:py-[112px] px-4 sm:px-6 text-center"
    >
      <Container className="max-w-[802px] flex flex-col items-center gap-[22px]">
        <SectionHeading as="h2" className="text-black text-center">
          Our Newsletter
        </SectionHeading>
        <p className="m-0 text-num-16 leading-num-24 text-darkslategray-100 font-jost">
          No invitations, only pure fly content
        </p>

        <NewsletterForm />

        <p className="m-0 text-num-14 leading-num-24 text-darkslategray-100 font-jost">
          <Link href="/privacy-policy" className="touch-target underline hover:no-underline">
            Privacy Policy
          </Link>
          {" "}
          and
          {" "}
          <Link
            href="/terms-and-conditions"
            className="touch-target underline hover:no-underline"
          >
            Terms &amp; Conditions
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}
