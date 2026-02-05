import About from "@/components/helpers/About";
import AdvancedDiabetesHero from "@/components/helpers/AdvancedDiabetesHero";
import HorizontalInfoSection from "@/components/helpers/HorizontalInfoSection";
import InfoRowCards from "@/components/helpers/InfoRowCards";
import WhyChooseOmega from "@/components/helpers/WhyChooseOmega";

const page = () => {
  return (
    <div>
      <div>
        <AdvancedDiabetesHero
          title="Comprehensive Cholesterol Management for Optimal Heart Health"
          description="We combine lifestyle modifications with advanced medications when needed to help you achieve optimal cholesterol levels and protect your long-term heart health."
          leftWave="/images/diabetes/home-wave.webp"
          rightImage="/images/osteoporosis/home-osteoporosis.webp"
          buttonText="Get In Touch"
          width="20%"
        />
        <About
          breadcrumb="Osteoporosis Care Across All Ages"
          image="/images/osteoporosis/about-image.webp"
          title="Osteoporosis Care Across All Ages"
          description="Osteoporosis is a condition that weakens bones, making them fragile and more prone to fractures. Effective management requires a personalized approach that considers age, lifestyle, and underlying health conditions. Our endocrinology team provides comprehensive care, combining medical expertise with patient education to maintain bone health and prevent complications."
          bullets={[
            "Early screening and diagnosis help prevent fractures and long-term disability.",
            "Bone density tests and modern imaging techniques make monitoring easier and more accurate.",
            "Adequate calcium and vitamin D intake, along with regular weight-bearing exercise, strengthen bones.",
            "Medications, including bisphosphonates and hormone therapies, support bone health when needed.",
            "Lifestyle guidance and fall-prevention strategies reduce fracture risks.",
            "Continuous follow-up ensures treatment effectiveness and adapts care plans as needs change.",
          ]}
        />

        <HorizontalInfoSection
          heading="Understanding Bone Health and Osteoporosis"
          paragraphs={[
            "Osteoporosis weakens bones, making them more prone to fractures even from minor falls or injuries. Bone loss can occur gradually over years, often without noticeable symptoms until a fracture happens.",
            "Early assessment and intervention are crucial to maintaining strength and preventing complications.",
          ]}
          rows={[
            {
              title: "Risk Factors",
              description:
                "Age, family history, hormonal changes, low calcium or vitamin D intake, sedentary lifestyle, smoking, and certain medications can all increase the risk of developing osteoporosis. Women are particularly vulnerable after menopause due to reduced estrogen levels.",
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
                    <rect
                      width="60"
                      height="60"
                      rx="12"
                      fill="url(#pattern0_751_1343)"
                    />
                    <defs>
                      <pattern
                        id="pattern0_751_1343"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlinkHref="#image0_751_1343"
                          transform="scale(0.0104167)"
                        />
                      </pattern>
                      <image
                        id="image0_751_1343"
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
              title: "Common Signs",
              description:
                "Osteoporosis is often called a “silent disease” because bone loss occurs without symptoms. Early warning signs may include back pain, loss of height, stooped posture, or fractures from minor injuries.",
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
                    <rect
                      width="60"
                      height="60"
                      rx="12"
                      fill="url(#pattern0_751_1347)"
                    />
                    <defs>
                      <pattern
                        id="pattern0_751_1347"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlinkHref="#image0_751_1347"
                          transform="scale(0.0104167)"
                        />
                      </pattern>
                      <image
                        id="image0_751_1347"
                        width="96"
                        height="96"
                        preserveAspectRatio="none"
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEzklEQVR4nO2dTYgcVRDH30aC3yJG1KyRKG626/VIBEfx+wsEL15VJOLRq4egHifevHgIeBl3pt7s7kEd3K6aXQkRD4KIh0iIBxHMSZEYIZiIJhsNxpbXu7rrsh8zs9Nd/VE/eKeZnldV/9evX9f7GGMURVEURVEURVEUZSP2dRZut53oBejQq+sV/1nQ4vENf0AZHtuOXrbIi9ZxvGlBXgwdH5C2t3wtH/sI/nIBRxf0Thghoes932/w/y3+Gmm7SwP4/n1AAfw10naXBlABZAEVQBZQAWQBFUAWUAFkARVAFlABZAEVQBZQAWQBFWBzJt6b22MdvWEdHQpafH9ZBajh/APeR+v4dZ8gNHkgQHpkbaYSHHGtE91dFgHCqd4EIPXW+HgBpqOHjSR7ut2rwfH36wbA8SVAOjwxe+SGogqwf+aTa5MWj3RxAx9/9N8xUlikt7YOBp2xyK+ZbveKwggQx2PQ4VcA6XQf/h0yEtSQ7vC3Yf9BoeMW6fG8C1Dz/Tzyl33XhbwYOLrTZA0gfzhoUJbLwqAGQwYC+IcqIM9YpL8HrsvxByZLJl3v0WEMXTE4uXPeDt/tXictQPIcQ3oTHP8+rD9Jfe3oSZMV4OjYdoz9z2ikH/xKBt/nZi5AHI9ZpBcTG0bhi6NjJgvCNoejMHjNLfw54Px9WQng6/J1jtqPoMWBSRvb5gdHbbhdKpd9Hxy6j29LSwCYjnb5obFF/isNH6BD9dQF2Os+u8o6OpWSCDEgnfdDu4nDR64clQD1ZnOnHwpbx7+mZbdF/snHxmRB4OgpQD6XmjMuceg7aEfPbVcA/xvg6GSatgLS2WGH2MOL0OJxizS9ndGQ7a8ctY7eGfy65JqjKdt22TrqwOzcbiOF7/cs0hcpOxrnrfhRj8+DmVwQx2N+JdpGeaFyFTqVdG+Nxg6TN+rN+WuWklf9r+O0BSmA/KcfQQUtvt4UYX5g2Nd6m8+yMDnTu8sUDf96DsgnCtzqT2SaYkiFRmNHktp19HNhAu/4l+2m0HPHvY5u9Ak46+iPHAf+ku/nva2mrFhc2AeOuvkLPn1qO72aqQq2zc8A0jfSgV/9xl056s3mzqU0A53JvMUjn/PzAKtzTpUlnOrelGaWcr2s6/6ZuVuk/a60APdM9W41Vae+nCZOPbOqXVB+H8Lg6GSlHsIwHU36V3vpwNuqDUOL8iJmkZuTzfmbTWnQVIRwMs7x19IBtcMKgfxtgPSsKRqajhafkFl/NXGRC+R6QkanJOWo6qS8dfSV6KS8LkthuWUpQYef1oVZvFIX0tnMpi51aSJvZPdpv9Q9dQHA9R7KOksJBVmc63fXpC5AbTqyI289rhzL0yfdPKQW+P85oBs0YrENGit7g8u1Rck6+m1bInT4CZMlfmPakMaWbpOeRXrfyOR7/IilX0PpeNiOHivjNlXb+mivkWD53IStAq8btdNCjypg2aMKPP7AirU75itxWAfSefHDOlY/wAJHBwG5UfbjasD76Ohgpc6mhpwIUFlABZAFVABZQAWQBVQAWUAFkAVUAFlABZAFVABZQAWQBVQAWUL9GytZghaPD3JGaXKssOQZPmUkdHygHxGS4Lejl6TtLSUwO7d7qz/z1JavKIqiKIqiKIqimM34B/c2bkKO9VJ/AAAAAElFTkSuQmCC"
                      />
                    </defs>
                  </svg>
                </>
              ),
            },
            {
              title: "Lifestyle & Nutrition Impact",
              description:
                "Adequate calcium and vitamin D, regular weight-bearing exercise, and avoiding smoking and excessive alcohol strengthen bones and reduce fracture risk. Nutrition and lifestyle play a vital role in prevention and management.",
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
                    <rect
                      width="60"
                      height="60"
                      rx="12"
                      fill="url(#pattern0_751_1351)"
                    />
                    <defs>
                      <pattern
                        id="pattern0_751_1351"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlinkHref="#image0_751_1351"
                          transform="scale(0.0104167)"
                        />
                      </pattern>
                      <image
                        id="image0_751_1351"
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
              title: "Diagnosis & Treatment",
              description:
                "Bone density scans help detect early bone loss. Treatment may include medications, hormone therapy, and personalized exercise programs. Ongoing monitoring ensures bones remain strong and fracture risk is minimized.",
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
                    <rect
                      width="60"
                      height="60"
                      rx="12"
                      fill="url(#pattern0_751_1355)"
                    />
                    <defs>
                      <pattern
                        id="pattern0_751_1355"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlinkHref="#image0_751_1355"
                          transform="scale(0.0104167)"
                        />
                      </pattern>
                      <image
                        id="image0_751_1355"
                        width="96"
                        height="96"
                        preserveAspectRatio="none"
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEK0lEQVR4nO2dz4tTVxTHn6VCK9VWqiBUqYom92b8UZiFiKAUKoi6KnTnuruuLe1iSnXhRhf2B0TmnZNRBzXUnPMyg4sWRrppabX9C3TatRtX/bEpr9xRIZN5Y5KXvHvej/OBL2SRue+c+0ky7yU3uUGgKIqiKIpyGOmtGkbHbMgfZBE3tjuGdJ+5o9bsbrPICxY59pSuO2ZQFhq4uMNAdLKB0UdpYoGWPE7+swAtpa33Wa+LO6TnPahdj/Y8f+T+530CUTyu524dabfI5NdnuW6Rn0y6MYP0qwVuZpGVsScv4omZ69T8zv7MzCsW6beMHlmfZ1W2GzubmulBEMcbAl/UW/z+mkcuUGSRL6XIgqCAhZQ1d9f0H3ZOZFX3MI18k3qssHNOTEDYOZd2LIP87aqxgD4LfGGRrvQd/HTVBFig030vQ1cmW+0IAhoYnaqagAZGp3IrwF1tGqQLBqk9MMC/SAlwxx6mRgv85d5m+83CCDDIt0t3FgR0qzACLNBy2kYN8COD9EMmAX40hoDlwggwyH+O8QyI8xjXUzEFAP1jWjT90gDf8T6hwHcG1eVqL7wAg/TXoPF2ttuvW6SvDPBTDxP/1ABfdcccVJervRICetl37e7O/eF3e7OIGzsYgUoKyBMqQBgVIIwKEEYFCKMChFEBQ3Ji5v6rAy/2XpJ9N+5tSRpXBYy2rCX1xdl6b6ergCFRASogLo0AM3v3QO8iqP2thXcG/U19ljcP9eHPOmkgvZdYSyUFAF3sHdtA9OHEGxi2FhXAKiAJFRCoAB+oAFQBmQmwrWgqcQEt0O99jX2fdL/G1+03Xozlbo+1cLcVTVVOwNoGeKT0fsFCrwNUQKwCUAWMJMDMdd5O/DId8nxfY18k3W+62dz4Yix3e5wv77laKidgPYyeBQ1GBQQqwAcqAFVAIiogKK+ANOhpqAqIVQCqADEBB+cXt1rkx6nT4uNJ46oAYVSAMCpAGBUgjAoQptQCpoB2mRZ9nIe4WionYNwPZOwEU8nrABUwBiogKL4A94N/Buh8HuJqqZyAImBUgCwqQBgVIIwKEKbUAsxc56gFfpiHuFoqJ0CvA8ZABQQqwKqA8QS4BbUH5xe35iG9C30rI6AIGBUgiwoQRgUIowKEUQHClEKARfo3q43ZbNZxtRdfQDliiiTg+aLXuGR5XBgBBgnK9wygsDAC3sX7rzWQPkm5RdSlvMX14noqjIAq0BAWcHn105PPBBXDhJ2zfQIu+zs48qd9r483vG7lJ00cbzBAN1fNAdB5b8df+Tix/x8V8E9ZbcJpcxf6eU3/IR/xJmBFAtCP0mcmNi8BWgp847YDscB/iDeP4pO/POrWKJOTELa3G+BZC/y3+ESg36y8TwR0LRdbo083u5tqreiQ+Hs3oZ+4Xl3P0vOuKIqiKEqQnv8BRcdMkZ6rrEwAAAAASUVORK5CYII="
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
              title: "Comprehensive Osteoporosis Care",
              description:
                "Osteoporosis can be managed effectively with timely diagnosis, tailored treatment, and lifestyle adjustments. Early intervention preserves bone health and prevents serious injuries.",
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
                    <rect
                      width="60"
                      height="60"
                      fill="url(#pattern0_754_1358)"
                    />
                    <defs>
                      <pattern
                        id="pattern0_754_1358"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlinkHref="#image0_754_1358"
                          transform="scale(0.0104167)"
                        />
                      </pattern>
                      <image
                        id="image0_754_1358"
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
              title: "Targeted Therapies & Lifestyle Support",
              description:
                "Treatment includes medications to strengthen bones, nutrition guidance, exercise programs, and fall-prevention strategies. A combination of these approaches gives the best long-term results.",
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
                    <rect
                      width="60"
                      height="60"
                      fill="url(#pattern0_754_1360)"
                    />
                    <defs>
                      <pattern
                        id="pattern0_754_1360"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlinkHref="#image0_754_1360"
                          transform="scale(0.0104167)"
                        />
                      </pattern>
                      <image
                        id="image0_754_1360"
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
              title: "Regular Monitoring & Follow-Up",
              description:
                "Periodic bone density tests, check-ups, and lifestyle assessments help track progress and adjust treatment plans to maintain optimal bone health.",
              icon: (
                <>
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <rect
                      width="60"
                      height="60"
                      fill="url(#pattern0_754_1362)"
                    />
                    <defs>
                      <pattern
                        id="pattern0_754_1362"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlinkHref="#image0_754_1362"
                          transform="scale(0.0104167)"
                        />
                      </pattern>
                      <image
                        id="image0_754_1362"
                        width="96"
                        height="96"
                        preserveAspectRatio="none"
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFP0lEQVR4nO2dS4gcRRjHS6P4RMEHGlCDspmtakNQVxBUWB94UK8qeBOMohgl4vPk+sSLiIqI4+5UzWRFsHHnq95dFoxCZONJc9B4EDwo0b2Ij2hEJWqy8vVUz9Z0djKz2e6pnurvBwU7PT3VX3//rvrq2csYQRAEQRAEQRAEQRAEQRAEQRSDy6rh2aLevIvX4X5K0DOhr9BnmTifT89s5Er/IJRepqT7Tugz9N26BRAKnnV9M2JIE5d6Yv0CSF2NM5R677ozKwlC6r3GZ9UsMiMB1ggJ4BgSwDH+CjAxceLlEi5mBcdbAbiCmmlhPMAKjJcCXBSGp3EFf5o29iIrMF4KwJW+3WpfHxqrzp7OCoqvArzV2dGBm1lB8VIAIfV3HQJI/TwrKN4JwKdmtlhP/kETB/awguKfAEo/bZz+D1f6paLHAR8F2NMSAD4SNX1N0eOAVwIEk+E5XMG/RoAd4xO7TxISfi9yHPBKAF5r3t1ufjaalfiY1Av9xoFAzV/IJbxYqUdbB2KwdwJIeNc8/d+0bVLwZL9xoN17lvA1W14+YRA2+yNAGG4QUv9s6vtX2zb1Gwfw9wp+Ss4dVXDDIMz2RoCg1rx+NUf3GwdG6/rG1CzVe4Ow2xsBhISXTV3/x8jrC6fY31lxoOu4EFfwWmqK8NBILTw/f7v9EeBL8/TPHPVdH3Gg3XuW8KlQ+rCphh7zRgAcocQqID4nq6RaQ81BY/YSq/q59yi7esSBQMEVyfdBTd8hFOwyYixlZy88t0ntPtWZAHYTMdMk4TZRaz5o/j6CTcn0teM40B6WgBe6ruaQ8HfwZnhmoKI787AVfeBMgC2T0QVCwnx8wQwSl/qAcehncb6tp/vzbrYdqz/Alf7CCDAfHwjDDVzpt7Oy1Th5Dn3gTICs4RK2WU9XXGfjk9zVti5xoLIzunQl8MK2vO32RoCxavVkIeFbu4iPTumru9rWJQ7wmn40EXG16itvhlYAhCt9n9Vs/BEn4lkXuvUHhNKf9Gqi5slQCzDWWQome52fjgO80Tw3GbwTEh5nDhhqARAcOMMBtNUCXK84MKrgnnbzczIaYQ4YegHWQjoOcAXafN7HHFEqAcY748ArydIVl3MFpRLAjgNC6r/6aT3lTQkFgKdSPemlQY39r0bpBBAdcSAOyG84tadsAozbcaDXJM0AKJ0AHf0BqQ9gX4I5pJQCiHrzVuw5C6WfcG5LGQUoEiSAY0gAx5AAvgvQGrGc22yft3Xnh2fgPK59DFcgpFchiKkPNuG59jHeaFawKelL/rkLIBTUW02+aPvKMf2VkPq/ioquS4w3bfPfKtXZ86x1PoftgbJAwcMmf+VN/rkLILUyY/APWTewD29gVMK1+BmNRuPtG8Cbw3Nwvjb5HZfRdjMPLD3KP18BsLilx9qxWKa3kOJTlBifgMU8XYSFnNtsF+Fhz5+CsGNIAMeQAI4hAXwSAF86lPVyvrIkrvQzWb2y7HvXNyOGLKHPMlsUhi+gw8WtA335ndKL8Y1I2H/ceUjYb5yxOEjb0Vcj0wtnsWFGZBB7Mq2Ly4YgAdwiSAC3CBJgMHA5e5WQ8E68j6tj80Nre2m80u14N3wkq+Qwr47v4mtVRUNfycoMV7BjZSOGk4TXfoSVES6jW3D/l2km/sKlfj/TzX7HSHgtLuHXVvUERwIZ3cTKBpf6Y+OApUzesbzW60/PbIx3TLaqqF2sbODma5HV+5XXPcwCB1nZcD1UIFKJlQ3XDhdlF8D1P1ngqeTaHwRBEARBEARBEARBEARBEATB8uN/l796Mw1wp5AAAAAASUVORK5CYII="
                      />
                    </defs>
                  </svg>
                </>
              ),
            },
          ]}
        />

        <WhyChooseOmega
          heading="Omega Hospitals: Safeguarding Your Bone Health"
          cards={[
            {
              title: "Integrated Bone Wellness",
              description:
                "We combine medical therapies with tailored nutrition and safe exercise plans to enhance bone strength.",
              footer:
                "This approach addresses the root causes of bone loss, not just symptoms.",
            },
            {
              title: "Precision Diagnostics",
              description:
                "Advanced bone density tests and imaging tools help us evaluate bone health accurately.",
              footer:
                "Early detection enables effective preventive and therapeutic strategies.",
            },
            {
              title: "Continuous Care & Progress Tracking",
              description:
                "Regular follow-ups monitor bone density and treatment effectiveness, allowing timely adjustments.",
              footer:
                "This ensures stronger bones, lower fracture risk, and lasting health.",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default page;
