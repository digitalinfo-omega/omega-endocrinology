import About from "@/components/helpers/About";
import ImpactGridSection from "@/components/helpers/ImpactGridSection";
import InfoRowCards from "@/components/helpers/InfoRowCards";
import WhyChooseOmega from "@/components/helpers/WhyChooseOmega";
import AdvancedDiabetesHero from "@/components/layout/obesity/AdvancedDiabetesHero";

const page = () => {
  return (
    <div>
      <AdvancedDiabetesHero
        title="Achieve Lasting Weight Loss with Medical Expertise and Support"
        description="We address underlying hormonal imbalances and metabolic issues that may be hindering 
your weight loss efforts while providing ongoing support."
        leftWave="/images/diabetes/home-wave.webp"
        rightImage="/images/obesity/home-obesity.webp"
        buttonText="Get In Touch"
        width="44%"
      />
      <About
        breadcrumb="Obesity / Overweight"
        image="/images/obesity/about-image.webp"
        title="What is Obesity and Overweight?"
        description="Obesity and overweight occur when excess body fat accumulates, affecting health and increasing the risk of serious conditions like diabetes, heart disease, and hormonal imbalances."
        bullets={[
          "This happens due to an imbalance between calories consumed and calories burned, along with genetic, hormonal, and lifestyle factors.",
          "Carrying extra weight can lead to fatigue, joint pain, and reduced physical activity.",
          "It also disrupts hormonal balance, impacting metabolism and overall well-being.",
          "Obesity can be classified based on BMI (Body Mass Index), with different levels indicating varying health risks.",
          "Certain medical conditions like hypothyroidism, PCOS, and Cushing’s syndrome can contribute to weight gain.",
          "Untreated obesity increases the risk of fertility problems, sleep apnea, and metabolic syndrome.",
        ]}
      />
      <ImpactGridSection
        heading="How Obesity Impacts Your Health"
        paragraphs={[
          "Obesity affects nearly every organ system, placing strain on the heart, joints, and hormones. It can lead to insulin resistance, high blood pressure, and fatty liver disease.",
          "Weight gain often develops gradually and may go unnoticed until it starts affecting daily life. Early evaluation and intervention help prevent serious complications and improve quality of life.",
        ]}
        sectionBg="#D9D9D91A"
        cardBg="#299FB00D"
        iconBg="#f6fbfb"
        accentColor="#0ea5b7"
        cards={[
          {
            title: "Associated Health Risks",
            description:
              "Obesity increases your risk for chronic diseases like type 2 diabetes, heart disease, high blood pressure, and certain cancers. It can also lead to joint problems and sleep apnea.",
            icon: (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                >
                  <rect width="44" height="44" fill="url(#pattern0_718_1350)" />
                  <defs>
                    <pattern
                      id="pattern0_718_1350"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_718_1350"
                        transform="scale(0.0104167)"
                      />
                    </pattern>
                    <image
                      id="image0_718_1350"
                      width="96"
                      height="96"
                      preserveAspectRatio="none"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </>
            ),
          },
          {
            title: "Common Causes",
            description:
              "The main causes are a combination of factors: an unhealthy diet rich in processed foods, lack of physical activity, genetic predisposition, and hormonal or metabolic issues.",
            icon: (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                >
                  <rect width="44" height="44" fill="url(#pattern0_718_1367)" />
                  <defs>
                    <pattern
                      id="pattern0_718_1367"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_718_1367"
                        transform="scale(0.0104167)"
                      />
                    </pattern>
                    <image
                      id="image0_718_1367"
                      width="96"
                      height="96"
                      preserveAspectRatio="none"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </>
            ),
          },
          {
            title: "Psychological Impact",
            description:
              "Beyond physical health, obesity can affect your mental and emotional well-being. It can lead to low self-esteem, anxiety, depression, and social isolation.",
            icon: (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                >
                  <rect width="44" height="44" fill="url(#pattern0_718_1370)" />
                  <defs>
                    <pattern
                      id="pattern0_718_1370"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_718_1370"
                        transform="scale(0.0104167)"
                      />
                    </pattern>
                    <image
                      id="image0_718_1370"
                      width="96"
                      height="96"
                      preserveAspectRatio="none"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </>
            ),
          },
          {
            title: "Prevention & Management",
            description:
              "A balanced diet, regular exercise, and behavioral changes are key to managing weight. Consulting with a healthcare professional can help you create a personalized plan.",
            icon: (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                >
                  <rect width="44" height="44" fill="url(#pattern0_718_1373)" />
                  <defs>
                    <pattern
                      id="pattern0_718_1373"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_718_1373"
                        transform="scale(0.0104167)"
                      />
                    </pattern>
                    <image
                      id="image0_718_1373"
                      width="96"
                      height="96"
                      preserveAspectRatio="none"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </>
            ),
          },
        ]}
      />
      <InfoRowCards
        cards={[
          {
            title: "Managing Obesity Effectively",
            description:
              "Obesity can be managed successfully with personalized treatment plans. Early action helps in achieving sustainable weight loss and preventing long-term complications.",
            icon: (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                >
                  <rect width="60" height="60" fill="url(#pattern0_718_1339)" />
                  <defs>
                    <pattern
                      id="pattern0_718_1339"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_718_1339"
                        transform="scale(0.0104167)"
                      />
                    </pattern>
                    <image
                      id="image0_718_1339"
                      width="96"
                      height="96"
                      preserveAspectRatio="none"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </>
            ),
          },
          {
            title: "Treatment and Lifestyle Changes",
            description:
              "Treatment includes nutrition counseling, exercise planning, and in some cases, medications or bariatric procedures. Building healthy habits is key for lasting results.",
            icon: (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                >
                  <rect width="60" height="60" fill="url(#pattern0_718_1342)" />
                  <defs>
                    <pattern
                      id="pattern0_718_1342"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_718_1342"
                        transform="scale(0.0104167)"
                      />
                    </pattern>
                    <image
                      id="image0_718_1342"
                      width="96"
                      height="96"
                      preserveAspectRatio="none"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </>
            ),
          },
          {
            title: "Regular Monitoring is Essential",
            description:
              "Ongoing medical follow-ups, body composition analysis, and health coaching ensure steady progress and prevent relapse.",
            icon: (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                >
                  <rect width="60" height="60" fill="url(#pattern0_718_1345)" />
                  <defs>
                    <pattern
                      id="pattern0_718_1345"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_718_1345"
                        transform="scale(0.0104167)"
                      />
                    </pattern>
                    <image
                      id="image0_718_1345"
                      width="96"
                      height="96"
                      preserveAspectRatio="none"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </>
            ),
          },
        ]}
      />
      <WhyChooseOmega
        heading="Omega Hospitals: Guiding You Towards a Healthier Weight"
        cards={[
          {
            title: "Personalized Care That Fits Your Life",
            description:
              "Every individual is different—we design weight management plans that suit you.",
            footer: "Get personalized recommendations that actually work.",
          },
          {
            title: "Motivation & Guidance",
            description:
              "Stay on track with progress updates and achievable goals.",
            footer: "Step-by-step support to keep you moving forward.",
          },
          {
            title: "Honest Tracking",
            description:
              "No hidden numbers, just transparent updates about your journey.",
            footer: "See real results and celebrate every milestone.",
          },
        ]}
      />
    </div>
  );
};

export default page;
