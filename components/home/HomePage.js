import Footer from "@/components/layout/Footer";
import BecomePilotSection from "@/components/home/BecomePilotSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import BristellSection from "@/components/home/BristellSection";
import HeroSection from "@/components/home/HeroSection";
import PrivateLuxurySection from "@/components/home/PrivateLuxurySection";
import RecreationalActivitiesSection from "@/components/home/RecreationalActivitiesSection";
import TheClubSection from "@/components/home/TheClubSection";
import TickerSection from "@/components/home/TickerSection";
import UltralightLicenseSection from "@/components/home/UltralightLicenseSection";
import WhyLithuaniaSection from "@/components/home/WhyLithuaniaSection";

export default function HomePage() {
  return (
    <div className="w-full relative bg-white overflow-x-hidden overflow-y-auto flex flex-col items-stretch justify-start leading-[normal] tracking-[normal] text-left text-[25px] text-white font-jost">
      <HeroSection />
      <BecomePilotSection />
      <UltralightLicenseSection />
      <TickerSection />
      <BenefitsSection />
      <WhyLithuaniaSection />
      <BristellSection />
      <TheClubSection />
      <PrivateLuxurySection />
      <RecreationalActivitiesSection />
      <Footer />
    </div>
  );
}
