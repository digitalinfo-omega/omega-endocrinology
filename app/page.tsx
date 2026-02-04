import { servicesData } from "@/components/constants/OurServicesSection";
import AboutSection from "@/components/layout/AboutThyroidSection";
import HeroSection from "@/components/layout/HeroSection";
import OurServicesSection from "@/components/layout/OurServicesSection";
import SpecialistSection from "@/components/layout/SpecialistSection";
import WhyChooseUsSection from "@/components/layout/WhyChooseUsSection";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection
        title="Specialized Endocrinology Care with Proven Results"
        description="We provide complete care for conditions that affect metabolism, growth, and energy balance."
        features={[
          "Preventive Diabetes Care",
          "Thyroid & Hormone-Related Issues",
          "Weight Management & Metabolic Health",
          "Hormonal Changes During Menopause/Andropause",
          "Pituitary & Adrenal Health Solutions",
        ]}
        // imagePlaceholderText="Your custom placeholder text if needed"
      />
      <OurServicesSection services={servicesData} />
      <WhyChooseUsSection />
      <SpecialistSection />
    </main>
  );
}
