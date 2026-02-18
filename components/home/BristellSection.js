import Link from "next/link";
import ScenicSection from "@/components/ui/ScenicSection";

export default function BristellSection() {
  return (
    <ScenicSection
      id="aircraft"
      backgroundSrc="/images/YouWillFly.jpg"
      backgroundAlt="Bristell aircraft background"
      showOverlay={false}
      tintClassName=""
      sectionClassName="text-left text-[31px] text-white font-jost isolate"
    >
      <div className="w-full max-w-[474px] flex flex-col items-start gap-1">
        <h2 className="m-0 w-full max-w-[287.6px] text-[28px] leading-[34px] desktop:text-[31px] tracking-[0.47px] desktop:leading-9 uppercase font-medium">
          You will fly with Bristell
        </h2>
        <div className="text-[17px] leading-num-23">Aircraft</div>
        <Link
          href="/aircraft"
          className="w-[85px] text-num-13 text-white no-underline hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label="Know more about aircraft"
        >
          <span className="mt-[-1px] flex flex-col items-start gap-px">
            <span className="w-[85px] h-4 tracking-[0.26px] leading-num-15_6 uppercase font-medium inline-block">
              know more
            </span>
            <span className="w-[83px] h-px relative bg-white" />
          </span>
        </Link>
      </div>
    </ScenicSection>
  );
}
