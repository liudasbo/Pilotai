import Footer from "@/components/layout/Footer";
import BecomePilotSection from "@/components/home/BecomePilotSection";
import VideoSection from "@/components/home/VideoSection";
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
    <div className="page-root motion-scope">
      <HeroSection />
      <BecomePilotSection />
      <VideoSection />
      <BenefitsSection />
      <UltralightLicenseSection />
      <TickerSection />
      <WhyLithuaniaSection />
      <BristellSection />
      <TheClubSection />
      <PrivateLuxurySection />
      <RecreationalActivitiesSection />
      <Footer />
    </div>
  );
}
