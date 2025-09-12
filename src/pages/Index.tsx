import ProductHuntBanner from "@/components/ProductHuntBanner";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import GettingStartedSection from "@/components/GettingStartedSection";
import FeaturesSection from "@/components/FeaturesSection";
import TopAppsSection from "@/components/TopAppsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-surface">
      <ProductHuntBanner />
      <Header />
      <HeroSection />
      <StatsSection />
      <GettingStartedSection />
      <FeaturesSection />
      <TopAppsSection />
    </div>
  );
};

export default Index;
