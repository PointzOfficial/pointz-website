import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { PressSection } from "@/components/PressSection";
import { Footer } from "@/components/Footer";
import { usePageTitle } from "@/hooks/use-page-title";

const Index = () => {
  usePageTitle("Pointz - Building Better Bike Routes | Safe Biking Navigation App");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PressSection />
      <Footer />
    </div>
  );
};

export default Index;
