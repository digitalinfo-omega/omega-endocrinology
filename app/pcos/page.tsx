import About from "@/components/helpers/About";
import InfoRowCards from "@/components/helpers/InfoRowCards";
import PCOSInfoGrid from "@/components/helpers/PCOSInfoGrid";
import WhyChooseOmega from "@/components/helpers/WhyChooseOmega";
import AdvancedDiabetesHero from "@/components/layout/obesity/AdvancedDiabetesHero";

const page = () => {
  return (
    <div>
      <div>
        <AdvancedDiabetesHero
          title="Reclaim Your Hormonal Health and Fertility with PCOS Management"
          description="Through medical treatment and lifestyle strategies, we help you manage symptoms and achieve your health and family planning goals."
          leftWave="/images/diabetes/home-wave.webp"
          rightImage="/images/pcos/home-pcos.webp"
          buttonText="Get In Touch"
          width="52%"
        />
        <About
          breadcrumb="PCOS/PCOD Solutions"
          image="/images/pcos/about-image.webp"
          title="PCOS/PCOD Solutions: Hormonal Balance for Long-Term Wellness"
          description="Polycystic Ovary Syndrome (PCOS), also known as Polycystic Ovary Disorder (PCOD), is a hormonal condition that affects women of reproductive age. It disrupts normal menstrual cycles, ovulation, and metabolism, leading to symptoms such as irregular periods, acne, excessive hair growth, and weight gain. Long-term, PCOS increases the risk of infertility, diabetes, and heart disease. At Omega, our endocrinology specialists provide comprehensive care to manage symptoms, regulate hormones, and improve fertility outcomes."
          bullets={[
            "Early diagnosis helps prevent long-term complications.",
            "Hormonal evaluation and ultrasound aid in accurate detection.",
            "Lifestyle changes, including weight management, improve symptoms.",
            "Medications help regulate cycles, balance hormones, and manage acne or hair growth.",
            "Fertility support is available for women trying to conceive.",
            "Ongoing care reduces risks of diabetes and cardiovascular disease.",
          ]}
        />
        <PCOSInfoGrid
          cards={[
            {
              title: "Risk Factors",
              description:
                " Family history, obesity, insulin resistance, sedentary lifestyle, and hormonal imbalances.",
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
                "Irregular or absent periods, acne, excess hair growth, weight gain, thinning hair on the scalp, and fertility challenges.",
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
                "Lifestyle & Nutrition Impact Balanced diets, regular exercise, and stress management improve hormone balance, insulin sensitivity, and weight control.",
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
                "Blood tests, hormone analysis, and ultrasound confirm diagnosis. Treatment includes lifestyle management, hormonal therapy, insulin-sensitizing drugs, and fertility support if required.",
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
          background="#F8E7DB"
          cards={[
            {
              title: "Holistic PCOS Care",
              description:
                "Managing PCOS involves a long-term, integrated strategy to balance hormones, ease symptoms, and lower the risk of related health issues.",
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
                      fill="url(#pattern0_764_1525)"
                    />
                    <defs>
                      <pattern
                        id="pattern0_764_1525"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlinkHref="#image0_764_1525"
                          transform="scale(0.0104167)"
                        />
                      </pattern>
                      <image
                        id="image0_764_1525"
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
              title: "Hormone Regulation & Fertility Enhancement",
              description:
                "Targeted treatments help normalize menstrual cycles and support fertility goals safely and effectively.",
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
                      fill="url(#pattern0_764_1527)"
                    />
                    <defs>
                      <pattern
                        id="pattern0_764_1527"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlinkHref="#image0_764_1527"
                          transform="scale(0.0104167)"
                        />
                      </pattern>
                      <image
                        id="image0_764_1527"
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
              title: "Nutrition & Fitness Guidance",
              description:
                "Customized diet and exercise plans address insulin resistance, manage weight, and promote overall well-being.",
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
                      fill="url(#pattern0_764_1529)"
                    />
                    <defs>
                      <pattern
                        id="pattern0_764_1529"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlinkHref="#image0_764_1529"
                          transform="scale(0.0104167)"
                        />
                      </pattern>
                      <image
                        id="image0_764_1529"
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
          heading="Omega Hospitals: Restoring Balance in PCOS/PCOD"
          cards={[
            {
              title: "Holistic Approach",
              description:
                "Endocrinologists and gynecologists address both hormonal balance and reproductive health together.",
              footer:
                "Comprehensive solutions for periods, fertility, and long-term wellness.",
            },
            {
              title: "Advanced Diagnostics",
              description:
                "Accurate hormonal tests and imaging ensure early detection and effective treatment.",
              footer: "We get to the root cause, not just the symptoms.",
            },
            {
              title: "Long-Term Support",
              description:
                "Ongoing care helps prevent diabetes, obesity, and cardiovascular complications.",
              footer:
                "Our goal is lasting hormonal balance and improved quality of life.",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default page;
