import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { StatsSection } from "@/components/StatsSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <StatsSection />
        <WhyUsSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
