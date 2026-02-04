import About from "@/components/helpers/About";
import WhyChooseOmega from "@/components/helpers/WhyChooseOmega";
import AdvancedDiabetesHero from "@/components/helpers/AdvancedDiabetesHero";
import DiabetesCareSection from "@/components/layout/diabetes/DiabetesCareSection";

const page = () => {
  return (
    <main>
      <AdvancedDiabetesHero
        title="Advanced Diabetes Management with Expert Care"
        description="Whether you have Type 1, Type 2, or pre-diabetes, we provide the medical expertise you need to live a full, active life while preventing complications."
        leftWave="/images/diabetes/home-wave.webp"
        rightImage="/images/diabetes/home-diabetes.webp"
        buttonText="Get In Touch"
        width="20%"
      />

      <About
        breadcrumb="Diabetes — Children to Old Age"
        image="/images/diabetes/about-image.webp"
        title="Diabetes Management Across All Ages"
        description="Comprehensive diabetes care requires specialized approaches that evolve with each life stage. From childhood diagnosis through senior years, our endocrinology team provides personalized treatment plans. We understand that managing blood sugar levels involves different challenges for toddlers, teenagers, working adults, and elderly patients. We combine medical expertise with family education to ensure successful long-term diabetes management."
        bullets={[
          "Early detection and timely diagnosis prevent severe complications in children and adults.",
          "Modern technology and awareness make regular blood sugar monitoring much simpler.",
          "Healthy diet and daily exercise form the core of diabetes management.",
          "Insulin therapy ranges from simple injections to advanced pump-based systems.",
          "Family involvement and education encourage better diabetes care at all ages.",
          "Continuous glucose monitoring offers instant data for smart treatment decisions.",
        ]}
      />
      <DiabetesCareSection />
      <WhyChooseOmega
        heading="Why Choose Omega? (For Diabetes Care from Children to Old Age)"
        cards={[
          {
            title: "Smart Monitoring",
            description:
              "We bring you advanced tools to keep track of sugar levels in real-time.",
            footer: "Get alerts and stay ahead of fluctuations.",
          },
          {
            title: "Lifestyle Support",
            description:
              "Guidance that fits into your daily routine for long-term balance.",
            footer: "Easy steps for diet, exercise, and medication tracking.",
          },
          {
            title: "Transparent Results",
            description: "We show your progress in straight forward terms.",
            footer: "No confusion, just clear insights for better care.",
          },
        ]}
      />
    </main>
  );
};

export default page;
