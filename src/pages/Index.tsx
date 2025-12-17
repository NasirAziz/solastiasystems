import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ClientsSection } from "@/components/ClientsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProductsSection } from "@/components/ProductsSection";
import { StatsSection } from "@/components/StatsSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { CTASection } from "@/components/CTASection";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { FloatingParticles } from "@/components/FloatingParticles";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <FloatingParticles />
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <ClientsSection />
        <ServicesSection />
        <ProductsSection />
        <StatsSection />
        <WhyUsSection />
        <ProcessSection />
        <CTASection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
