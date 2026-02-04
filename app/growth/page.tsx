import About from "@/components/helpers/About";
import AdvancedDiabetesHero from "@/components/helpers/AdvancedDiabetesHero";
import ImpactGridSection from "@/components/helpers/ImpactGridSection";
import InfoRowCards from "@/components/helpers/InfoRowCards";
import WhyChooseOmega from "@/components/helpers/WhyChooseOmega";

const page = () => {
  return (
    <div>
      <AdvancedDiabetesHero
        title="Supporting Your Child's Healthy Growth and Development"
        description="With compassionate, family-centered care, we address growth concerns early and provide treatments that support normal development and boost confidence."
        leftWave="/images/diabetes/home-wave.webp"
        rightImage="/images/growth/home-growth.webp"
        buttonText="Get In Touch"
        width="25%"
      />
      <About
        breadcrumb="Growth Problems in Children"
        image="/images/growth/about-image.webp"
        title="Growth Problems in Children"
        description="Growth problems in children can arise from a variety of medical, nutritional, or hormonal factors. Early recognition and management are crucial to ensure children achieve their full potential. Our pediatric endocrinology team provides personalized evaluation and treatment plans, addressing each child’s unique growth pattern. We focus on combining medical care with family education to support long-term healthy development."
        bullets={[
          "Early assessment helps identify growth delays and underlying hormonal or metabolic issues.",
          "Regular growth monitoring using standardized charts ensures timely intervention.",
          "Balanced nutrition and physical activity are key foundations for healthy growth.",
          "Hormonal therapies, such as growth hormone treatment, may be recommended when necessary.",
          "Family education and support improve adherence to treatment and lifestyle modifications.",
          "Comprehensive evaluations include checking thyroid function, puberty development, and other endocrine factors affecting growth.",
        ]}
      />
      <ImpactGridSection
        heading="How Growth Problems Affect Your Child’s Health"
        paragraphs={[
          "Growth problems are more than just height concerns — they can indicate underlying hormonal or medical issues. If left untreated, they may affect bone strength, puberty timing, and overall health.",
          "Many growth issues develop gradually and can be missed without regular health check-ups. Timely medical evaluation can help in early intervention and better growth outcomes.",
        ]}
        sectionBg="#D9D9D91A"
        cardBg="#E56E1B0D"
        iconBg="#f8e7db"
        accentColor="#E56E1B0D"
        cards={[
          {
            title: "Associated Health Risks",
            description:
              "Untreated growth problems may lead to delayed puberty, weak bones, and emotional distress. They can also affect future adult height and self-confidence.",
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
                  <rect width="44" height="44" fill="url(#pattern0_749_1315)" />
                  <defs>
                    <pattern
                      id="pattern0_749_1315"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_749_1315"
                        transform="scale(0.0104167)"
                      />
                    </pattern>
                    <image
                      id="image0_749_1315"
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
              "Hormonal deficiencies (like growth hormone or thyroid hormone), poor nutrition, chronic illnesses, and genetic syndromes are major causes.",
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
                  <rect width="44" height="44" fill="url(#pattern0_749_1334)" />
                  <defs>
                    <pattern
                      id="pattern0_749_1334"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_749_1334"
                        transform="scale(0.0104167)"
                      />
                    </pattern>
                    <image
                      id="image0_749_1334"
                      width="96"
                      height="96"
                      preserveAspectRatio="none"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAIPUlEQVR4nO1dXYwURRBeTcRfjEIQtmoBoxiUGBXRF40+gj+gL5ooRi8+ePKz3QuBk4gaxCOiRo3BRIjPggQEzhd88gcTEQ34RGL4Pe62exc8iJ4kEAJypmZ3dnuG2d3e3Zmd6dn5ks7lev66+9uprqqunkqlEiRIkCCBachzvE9yXCc5/CoYnpQczguOpyTDvYLBejoedhtjiSE29U7BcUBwvCw5jtUtDL+l88Nuc2yQz+LTksHfDQdeKYLj2TzHp8JueyRRzE2+XeTgAZ1zZS4zTzC8WBlYhv8JBpsFh/knlk1L7++dcw39FQwWCI5b6Lhy7kWRg2eC75Fpg89wUHI83YiE4eWZGYLjaHVA4ZhgMLveNXJZ+kE6r/o2wD90H987YiLGUqmrBMMDiqioS4LgsEMd/AKbMknnOcVFk28THI8r4mjA146YDMFgNg18IxLyWbzfnnDLYqfyyx9enrlecuyXHI4KjpfKv/j+4orJN9rnFHh6ji2O6D66Ii8QSIar7BKFeqFBQmmAK7/+zZX63vQNpIJ6TrwMfldJkAy/Vo6vS4UFtZFRqK+QwOBMVXWEwykFksG+qgiB+ZV6jmvraj8M1tvn0gSszAW/pcKCEQRwPOS4lkHBPkZaTvWecFTR99+kX7zkuFqpG7bPHVo6FRQSi6mwIDh8YJdI1DMNEcTggn384JpZ47zqTy2ZdBPVjfRNHK9MuJfH1qSupvrDbMa1yht2oa1B7LZJWOq8ARxXEwmCwVuRfgNMVEOlOgcwWKA9B3B4v3qP9LMKMXs71U+PznhrI1E2xBxaEMctDhWU4V5NLWircry/E/2r1Zmak2FUXRFuO4AsXBcJ70oGR0pzgiWW+klFtc8pLJ36kOqWCNVLGjUCdOG2hMnC1baES2+ZLZZ2pMJELW0k6iCXsuoFJfcCWbj1rrF++YobgnxBJ5dNu6NzrY4ZpIc3lCxcMrJIyyEV1dJ2aMJluNXhDeV4qcAyT4TdB+MhWXpuC+sBo0SK1gMstyuDlaq20m5xdqBxvWyzUPuDdPuSGJEctjdaEbMcbxx2NLUi5jIufCnO+zeul34Ulz8nwDXhtSVVFGRZC5LW/wzfa0nb8X0gwiKAm6VlVeB8haoaSztFvb9OvWijxIqAlIGQhrff+A5Iw9sfWAfIU0ihGfksvl7WVBbT/yN9E8f7+ZyEAK/IAI4DFDVWQ1u5QMFLjaxK7eclBJRAVqFkuFG1BusVUdKpv6CFiyi0PzT40YHywsQe9wALjvsFh01ljWVT6X90GzO/qG7cMNofKtrtAC3BlUSOMvgMdooczPQ6X+RgpmC4y6X+7raX8jrd/tDRbgcEhyXOXz2s0LqOwUoXCYtaeX5XE1ASPRSmXTXkmnz2R8rkfKYVUdTVBORz+EpV7OBgsxPqwTWzxqmxlAWGLzfbhq4mgDyEitxf2drz028oJO5q/vquJgAP2dcWeebeNjyMY6UCR6NOAInJQhafpDnLNjBpzWAwN/2Wlm7YTgcEw3/ta1u1cEeUwKZWApg6RQDFFFnrxEpwlrPQdiXYQcuSRr3CI87IsrPNXh90+2kThmD4udb2pOqy5Ubt+TBsAvKKCKKJvNnrg2w/hZoIjj+3ZGAy+PE0m3BzqB3QgaRlxUqjcVvT1wfUfsvAZLCzPQMTBygiL5QO6GCwZ/p1guGQYke82uw9mm2/7h4xy4vrh4HJYKmvHfATkuHHivgZoaizIOOOdEMTLQOTQ7GWgTm0eNqtgkOPpQVx6BlenplQy8C07qNEzUWGAJGFPj9cEcEE52ZeUn79x9UJVeTweXXzXvmcUZlNv+h4szmeUPrWExkCCrkp99B6gGvwdzeUlR0NT8dtXgamzKYfVQO1XCRcKuQyj3sZmBS0FRoBpe2e8I5g8KXk+MeVDYef6r6iDRDQHjFPA1Nw+E7Rco5Ijp+U/9q2wPfe2h0cC42AWnFHgiY2Bp/R69re/b3b384esVoGplpvB1/lOd6lEHDefpNd9s1o0x3wC1cMPKNXGLYXeOZhv++vU6+zR0yHADsST4cAyeBc0x0IhACWnmvvrfILgewR0xVBDD51vuE1RBDHPyNBQCpkiFYm4Sz0Kdc/Um8Sltn0Y54GJoftqW4nYKxVNdS1zpFn+Jw7WppkvODwQi0DU/LMwtgSIJvYg6ZriFn7f5WdkoLhh+pxcj1bJDFcRYtIVxhiTgPzZF2xazwBPBhXRIFjr1N50FtwchuYMoev+dqBZmHq/ccskQXfuETNgMym79Y2MBnsbBjtYeoAdeL+pU8RwA8eqvQBMiwtLauWgclgj1aQgckD1LEFGQ4btCP+6PM2HDbQdV0xQLJDWhbp9eUlyXPegw/nSeTQHuOuGiDZYTXX+mZQLjOPJldLC+LYS7shWw6vNH2AZETsjK4dIJkQEO5OeZkQEC6k4e0PvAPklqVgJb+9oDYSAuqAtiHZ3kfyibQavlgPCQF1QHqz4PgXLVhbDjAOX/n9jIQAHQJ4ZmFCQBgEWAGtREAigkLrAE2+NBe0sxGvHhICQoY0vP2uRXP/vxdU87nMp+8FxYoAn0qUnxs5OCO7DCaAdeyDTf4m8amEDvr0/R5dn4/w8XkiC28HmTgnSeITIpIkPiEiFkl8ovTt6GYQmyQ+pmopIi5JfOLw8W5hchKfKH07utjK5+tNT+JjfAIHbngSn9imMGGGJPExMo8Yi1ESn1qTsAypXjOPWHyS+BiaR2xfbJL4GJlHjMcoiU8cknlKk5P4xCWdbdHUJD6mJnQeSpL4RDOleZLEJ25JfBKEnMQnQchJfBIkSJAg1VH8D3txGyJxnqCuAAAAAElFTkSuQmCC"
                    />
                  </defs>
                </svg>
              </>
            ),
          },
          {
            title: "Emotional and Social Impact",
            description:
              "Children may experience bullying, low self-esteem, and anxiety due to being smaller or shorter than peers. Early support helps in emotional well-being.",
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
                  <rect width="44" height="44" fill="url(#pattern0_749_1326)" />
                  <defs>
                    <pattern
                      id="pattern0_749_1326"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_749_1326"
                        transform="scale(0.0104167)"
                      />
                    </pattern>
                    <image
                      id="image0_749_1326"
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
            title: " Prevention & Management",
            description:
              "Balanced nutrition, regular health check-ups, and early treatment of hormonal or chronic conditions help in normal growth and development.",
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
                  <rect width="44" height="44" fill="url(#pattern0_749_1330)" />
                  <defs>
                    <pattern
                      id="pattern0_749_1330"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_749_1330"
                        transform="scale(0.0104167)"
                      />
                    </pattern>
                    <image
                      id="image0_749_1330"
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
        background="#F8E7DB"
        cardBg="#FAF4F0"
        cards={[
          {
            title: "Ensuring Proper Growth in Children",
            description:
              "Children’s growth can be affected by hormones, nutrition, or genetics. Early care helps them reach their full potential.",
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
                  <rect width="60" height="60" fill="url(#pattern0_751_1337)" />
                  <defs>
                    <pattern
                      id="pattern0_751_1337"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_751_1337"
                        transform="scale(0.0104167)"
                      />
                    </pattern>
                    <image
                      id="image0_751_1337"
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
            title: "Targeted Care Plans",
            description:
              "Personalized nutrition, lifestyle guidance, and hormone therapy (if needed) support healthy development.",
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
                  <rect width="60" height="60" fill="url(#pattern0_751_1339)" />
                  <defs>
                    <pattern
                      id="pattern0_751_1339"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_751_1339"
                        transform="scale(0.0104167)"
                      />
                    </pattern>
                    <image
                      id="image0_751_1339"
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
            title: "Regular Check-Ups",
            description:
              "Ongoing monitoring of growth, labs, and overall health ensures timely intervention and best results.",
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
                  <rect width="60" height="60" fill="url(#pattern0_751_1341)" />
                  <defs>
                    <pattern
                      id="pattern0_751_1341"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_751_1341"
                        transform="scale(0.0104167)"
                      />
                    </pattern>
                    <image
                      id="image0_751_1341"
                      width="96"
                      height="96"
                      preserveAspectRatio="none"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADoElEQVR4nO2cv04UQRyAp8IX0LtlxkKIgYRCO6OV9gQLXsDWcMyIWIgV+ghqo62JvoCdBbFQeABFEgvDMX88DBElErcgrBkFobgQ9nZnfrMzvy/5lYTb75ud2btiCUEQBEEQBEEQBEEQ5BQYnp3TnD3Qgq4owTa1YEWTRtnPzNmyvQZ7LaRJaH6eK852oCXq+mL8VJx2SBNQnD2FFqadhaBPSOgrH1qSdh0h1DvB7pP2Vo0/ANvpiVabhMa/AxdekPYzCyQ0/j4xwIspvNwFgr0joaEF20oowCYJDSXYfkIB9kloQEvRnoeEBrQQjQHgpWgMkM6Q0IAWojEAvBSNAdIZEhrQQvSAY+ZHit3ll0Xv4dVSfydns+mTpz0pO+0b6g4d/8wvnsEAoo/8uxeK3x/eFJa976roPbpWY4CjUZxO9eZaoxhA9Jd/SJkIZQIcDbuMAUR/+WUjDBYgm3Z2JzRG/vxIka8uFSexu/zKWYBuh94sXJwJTV/5h+Rrbwtzb9RZADtfbtPx5AKYGuVXDbDBs+tJBTA1y68awD6iJhPAOJBfPUA2nUQA40g+BhCw8jGAgJUfXQD7O4z9PcY+o/t4zs9Xlyr/r2gC9BavFHtb3VpWpfGw8qMKcFx+VUHGo/woAvSTP6go41l+FAHs7y117NPG054fXYA6Vq0BWPnRBKgq0ADKjybAoCINsPyoApQVagKQH12AModpDnDgJhHgtHcC9MqPOkCVCLlH+VEHGCRC7ll+9AHKRMgB5CcR4DQRciD5yQTQJ0SAlJ9UAN0nArT85ALoYxFCkJ9kAH3wZc3HlywM0ICRGIBhAAyQYQCNAdJ8VYEMMMA3aDHa13C2HVwALdj7ZO4Azj6FGGAhmQBi+EV4AeaHz2pBf0DL0a6H01+qk90KLoBFCToT/ern9FlV+c4CHER4DC1JOxrJ2es65DsNcBBhJqbtSAm6uyHo87rkOw/w/0zg7L59OlKc9aAl6rLD2bYSbM0euHXs+d4DlKXuC5SBDwkNaCESA8BLkRggnSGhAS1EYgB4KRIDpDMkNKCFSAzQnoSWIj3NuouXdVTFvsIFWoz0NE5eV1MV+xIjaDHS06gOHSOhUSxODNm3C0LLkY6ny9tTHxcnhkiIdOdao9CCpONZn22PkJCxr3aEliRdjWhdIk3A3gkxbUeK06mvoa/8vmdCh47ZJwb72AYtsezYz2w/u72GYPd8BEEQBEEQBEEQBCGh8Qd0/ovxCouivgAAAABJRU5ErkJggg=="
                    />
                  </defs>
                </svg>
              </>
            ),
          },
        ]}
      />
      <WhyChooseOmega
        heading="Omega Hospitals: Supporting Your Child’s Healthy Growth"
        cards={[
          {
            title: "Early Detection",
            description:
              "We use advanced assessments to spot growth concerns at the right time.",
            footer: "Identify issues early for better outcomes.",
          },
          {
            title: "Parental Confidence",
            description:
              "Tools and guidance that help parents actively support their child’s growth.",
            footer: "Clear action plans for every stage of development.",
          },
          {
            title: "Trusted Care",
            description:
              "Regular updates explained in simple terms for peace of mind.",
            footer: "Know exactly what’s happening at each step.",
          },
        ]}
      />
    </div>
  );
};

export default page;
