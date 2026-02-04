import AdvancedDiabetesHero from "@/components/helpers/AdvancedDiabetesHero";
import React from "react";

const page = () => {
  return (
    <div>
      <AdvancedDiabetesHero
        title="Restore Your Energy and Vitality with Specialized Thyroid Care"
        description="We help restore your thyroid function so you can regain your energy and feel like yourself again."
        leftWave="/images/diabetes/home-wave.webp"
        rightImage="/images/thyroid/home-thyroid.webp"
        buttonText="Get In Touch"
        width="32%"
      />
    </div>
  );
};

export default page;
