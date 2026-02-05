import About from "@/components/helpers/About";
import AdvancedDiabetesHero from "@/components/helpers/AdvancedDiabetesHero";
import InfoGridSection from "@/components/helpers/InfoGridSection";
import InfoRowCards from "@/components/helpers/InfoRowCards";
import WhyChooseOmega from "@/components/helpers/WhyChooseOmega";
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
      <About
        breadcrumb="Thyroid Disorders"
        image="/images/thyroid/about-image.webp"
        title="What are Thyroid Disorders?"
        description="Thyroid disorders are conditions that affect the thyroid gland, a small butterfly-shaped gland in the neck responsible for regulating metabolism, energy production, and overall body functions. They can cause a range of health problems if left untreated."
        bullets={[
          "Hypothyroidism causes low hormone production leading to fatigue, weight gain, and cold sensitivity.",
          "It increases hormone levels, resulting in weight loss, rapid heartbeat, and anxiety.",
          "Goiter is an enlargement of the thyroid gland that may occur due to iodine deficiency or autoimmune disease.",
          "Thyroid nodules are small lumps that are often harmless but sometimes require medical evaluation.",
          "Autoimmune conditions like Hashimoto’s and Graves’ disease affect the gland’s normal function.",
          "Untreated thyroid problems during pregnancy can impact both maternal and Fetal health.",
        ]}
      />
      <InfoGridSection
        heading="How Thyroid Disorders Impact Your Health"
        paragraphs={[
          "Thyroid disorders affect how your body uses energy, controls temperature, and maintains vital organ functions. Proper awareness helps in early detection and effective treatment.",
          "Thyroid conditions can develop slowly and often go unnoticed until symptoms become significant. Regular health checks, especially for those at risk, play a key role in managing these disorders and preventing complications.",
        ]}
        cards={[
          {
            title: "Types of Thyroid Disorders",
            description:
              "The most common are hypothyroidism, hyperthyroidism, goiter, and thyroid nodules. Each affects hormone balance differently.",
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
                  <rect width="44" height="44" fill="url(#pattern0_716_2577)" />
                  <defs>
                    <pattern
                      id="pattern0_716_2577"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_716_2577"
                        transform="scale(0.0104167)"
                      />
                    </pattern>
                    <image
                      id="image0_716_2577"
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
            title: "Common Symptoms",
            description:
              "Fatigue, unexplained weight changes, dry skin, and hair thinning are frequent signs. Early attention helps in better control.",
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
                  <rect width="44" height="44" fill="url(#pattern0_718_1328)" />
                  <defs>
                    <pattern
                      id="pattern0_718_1328"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_718_1328"
                        transform="scale(0.0104167)"
                      />
                    </pattern>
                    <image
                      id="image0_718_1328"
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
            title: "Risk Factors",
            description:
              "Family history, iodine imbalance, and autoimmune conditions increase risk. Women are more prone to thyroid issues.",
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
                  <rect width="44" height="44" fill="url(#pattern0_718_1331)" />
                  <defs>
                    <pattern
                      id="pattern0_718_1331"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_718_1331"
                        transform="scale(0.0104167)"
                      />
                    </pattern>
                    <image
                      id="image0_718_1331"
                      width="96"
                      height="96"
                      preserveAspectRatio="none"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAH6ElEQVR4nO1dB4wbRRSdJPTea+h355k9COXoLQiQaEKgiIiuCIRAFCE6CIRME4QqAkRw3HnGd3ST8/97CUcnAiVEQBL6hd5DL6ETCDH6vkPyftuJ97zN633SSJa8+//3/7szf2b+PAuRIEGCBAkSJEjgCun06FQ3bkaNPru7OcGI0ZLJbagMTlUGFymDheFGn6fSd2HbF2uorN2uDCwscTxrsNDKoBW2nbHEuN4nV1caFlR3/nDTsICuDdve2EFpuNrpaFwiDeSo0WcWhKvDtjdWaNewhTTwu8PJmfyZ/38vNZxV+h1dS/eEa3WMoAw+wJ7+F0WhMKr0GmnwBUcQNNwfnsUxgsrgHkrD0pLuZamVze/Or5O6fxdl8N/S69qMvU84VscFhcIopWEW6997ql0uNfaya+fwNyWBC6Q0nMC6nj+snv4tq13fmp2+udTwm6MryuSPD9bqmGBsLreqNPiJs1/H9PLuUwaucg7I+HlHZ/9qwVgdI0gDV7Lu5Ita8vti4DR8yrKiK4OxOiZIdeNm0uCvpU60DJ5Y6/0qkz8pSUvrgDKQZX3/XFcLbhUHbzS+Gh0XqB7cmaeTVia/r1s50th7OtJXg/+26/7d/LE6RpAanmfrOw+OVJbS8BCTNTtJS5cBy9gT2cD7p+qettVI5bXc2zeWL2FYGTzGW6tjAiuXW0kaeJ8NntfWK1dquI4F9aOtzMxVvLE6RpAGL2PO/7rlvoG16pVr3ZVbg+8hkC5vrI4JxvX2bcR2uKirOMUr+SSLbdz8Iu/r29Qr+Q0PZbCLrWTO93SfN50erQy8wrqiez2T38hoz/TtWLahksX9vdaT0rA3T0tlFjpEs0MZeIr1/Y/6pkvjNPYWPCeaGcrA0WyxbbHVZbf4pa+t195GGfjLGQT7KNGsaafS+C6bKE32W6/UeCML+gctUwZWFs2GlIELmSO+2bYzt7bvertxTanhq1LdZItoJlhdufWkwR8cAcjC6YHp13AGC/5PbZ39G4hmwXBlW6FkMHxd5HJj3Cy00bJFaaO945oNyOXGkE7W/U0VzVLdJg384/jxGTy45vsNXMIcVxrIi1zIOYhlX/+QbSLuUAafYI7rd3O/1PhqtQAUJ3CuZIHNZDwh4gxp8Ai2JvO37Mm3uZKhcbBqAAy87UZWeza/XXlaCoeLOGJ8euYKUsNbbE3mVrdyvAwAQRm4jQVgQUdn54oiblAGz2VP/w+UDYUdgB0NrKMMfMdknSvihB0emLGu0vg9C8DZI5HldQCGZNrnsLHkR9mTX1/EBVLDFJZ3D470NZc+BKCYlhp8k8m6XcQBqW5M0WBb+uMsYx86UnnSjwDEOS1VGmawp3+gHnnSpwAMyx5gMqeLRoal7QP5UyW7+7aPagDaTL/kb2tKwyGiITHUr77Bnv476hUrfQwAQRm4k8ukFFo0GugEC88svFjwkj4HoFLGVnoapyFA1QxU1cCcc54XsqXPASjqyOD5TPa3NF8QjQKl8RbW9XxAGzCNEoCOzs4VlYF32LzlZtEIaM1M25avr6Q0HOmVfBlAAAhkM3uIFis9vVVEHVIjMKc867H8wSACQFAan3To0JAXUUbKwAFOg3FJW9Ye16gBsDJo1bN3ESyo+EnjXJb53O21GhlgAIr6DN7DxoLX3OzeBQap4TSnQ+AXy8zYpNED0DJEDuIom6TfKqIEqjRQGr9kDrnYD10y4ABU2galCg4vCoc9g9JwA3PGh37V2sgQAjBcOv8ee8OvF1FAsdqMDlI4nhB7gl/6ZAgBGNJrT+BpKW1p+qWvdsOIrcSZqs3y8xiQDCkARd0GnmZBeMRPfcs3qCe/F684TnXjrr7q1OEFwDKwk+MA4dADt58IBen0aGngZeaAjN9qZYgBKOo3kPH1LEPNhmh7EsuPfw3i1IkMOQDbd9kbKw0/szFvkggSxL0gDX7GXsXLg9AtQw4AQRm8gmVECwOlSVMar2FP/2dBEWLICASATlkqjR+HQpNWiT5MGjwuwBn3/GoBUAbmBWWH0nBsKHwURAUW5ulzZfDiqm+AxguCsqPIR2FwdqA0abXSh/kNWaE8PQw7SCf3B9nmj7YKDCREESaaHDIomjS39GHNgtYKNGnkq0jQhzULlN80aSOlD2sWjPWTJq0SfRhRgnkiPEZQBk72JS0lqi/W9bwUJulRqljsC8/SnkNpkxqfcXvaxlMUCqPIN2xekq1LJnEpRI2NVmp4vPpMGB8L0zbP+SjK+JgNPuypxV4vRWgcFCGD06SRDz2jD0sZ2FqEDBnxAFSkSTP2xPrpwzRcJyIAGfEAeEKTJjVcyiZdX1Llg4gAZAMEoEiTxqpEaqZJq7ThoDSeKiJa+qgiWjpYRpOm4Wfy7XJvJCqvSGy5LXM5HB8uVuE5GjxE/a+ICoZo0uaxh6TLNX2YzOTHB2Z0zOA6LeX0YUTxFajFMUTNNGkqmz+MzeL+ikThUYOj0nmJinwU5cdJ4aZQLI4hOE1axeOvbMFtURD0Yc0C8iXLLBc5LqBCWvaKzAnN2pjCsVCnYWnZ0VfHxEHjH1FYdojVOFBSwEwbNsvN/ykgwyQbk5OGI27kQ87SWPHk0PA6u/PvApNW8LoV94+rnbakzeSyQ2lJK3jmfOKh0HDsMvsrmvnyquekYf3Op0HYTSk7TcKI16esACppE122Q5MJbYIECRIkSJAgQQIRLfwHcCG4EfJe5KUAAAAASUVORK5CYII="
                    />
                  </defs>
                </svg>
              </>
            ),
          },
          {
            title: "Prevention & Care",
            description:
              "Regular health check-ups, iodine-rich diet, and timely treatment reduce complications. Lifestyle management is key.",
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
                  <rect width="44" height="44" fill="url(#pattern0_718_1334)" />
                  <defs>
                    <pattern
                      id="pattern0_718_1334"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_718_1334"
                        transform="scale(0.0104167)"
                      />
                    </pattern>
                    <image
                      id="image0_718_1334"
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
            title: "Managing Thyroid Disorders Effectively",
            description:
              "Thyroid disorders can be managed successfully with proper diagnosis, treatment, and follow-up care. Understanding the available treatment options helps in maintaining a healthy hormone balance and preventing long-term complications.",
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
            title: "Medication and Lifestyle Changes",
            description:
              "Most thyroid disorders are treated with hormone replacement or medications to control hormone production. A balanced diet, regular exercise, and stress management improve recovery.",
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
            title: "Regular Monitoring Is Essential",
            description:
              "Periodic blood tests and check-ups ensure that treatment remains effective and hormone levels stay within the healthy range.",
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
        heading="Omega Hospitals: Leading the Way in Thyroid Wellness"
        cards={[
          {
            title: "Holistic Approach",
            description:
              "We combine medical treatment with nutrition counseling and lifestyle guidance for long-term thyroid balance.",
            footer:
              "This approach helps address root causes, not just symptoms.",
          },
          {
            title: "Advanced Technology",
            description:
              "We use modern diagnostic tools and advanced imaging techniques to deliver accurate thyroid evaluations.",
            footer:
              "Our facilities ensure early detection and effective treatment planning.",
          },
          {
            title: "Continuous Monitoring",
            description:
              "Our follow-up programs track your hormone levels and adjust treatment as your body responds.",
            footer: "This ensures lasting results and improved well-being.",
          },
        ]}
      />
    </div>
  );
};

export default page;
