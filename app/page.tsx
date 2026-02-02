import Emergency from "@/components/layout/Emergency";
import HeroSection from "@/components/layout/HeroSection";
import VisitUs from "@/components/layout/VisitUs";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <VisitUs />
      <Emergency />
    </main>
  );
}
