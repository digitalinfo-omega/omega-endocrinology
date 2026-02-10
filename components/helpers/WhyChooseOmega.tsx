"use client";

interface CardItem {
  title: string;
  description: string;
  footer: string;
}

interface Props {
  heading: string;
  cards: CardItem[];
}

export default function WhyChooseOmega({ heading, cards }: Props) {
  return (
    <section
      className="w-full py-10 md:py-20"
      style={{ background: "#E56E1B0D" }}
    >
      <div className="container">
        {/* Heading */}
        <p
          className="para mb-8 md:text-start text-center"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="100"
        >
          {heading}
        </p>

        {/* Cards */}
        <div
          className="grid md:grid-cols-3 gap-6"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-accent rounded-xl p-6 text-white flex flex-col justify-between"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay={300 + i * 150} // staggered appearance for each card
            >
              <div>
                <h4 className="sm-para font-medium md:mb-12 mb-7">
                  {card.title}
                </h4>

                <p className="para my-5 leading-relaxed">{card.description}</p>
              </div>

              <div className="w-full h-px bg-white/50 md:my-14 my-5" />

              <div className="mt-6">
                <p className="text-[14px] opacity-90">{card.footer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
