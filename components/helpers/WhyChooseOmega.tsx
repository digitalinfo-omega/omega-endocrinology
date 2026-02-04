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
      className="w-full  py-10 md:py-20"
      style={{ background: "#E56E1B0D" }}
    >
      <div className="container">
        {/* Heading */}
        <p className="text-sm mb-8">{heading}</p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-accent rounded-xl p-6 text-white flex flex-col justify-between"
            >
              <div>
                <h4 className="text-sm font-medium mb-12">{card.title}</h4>

                <p className="text-[20px] my-5 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="w-full h-px bg-white/50 my-14" />
              <div className="mt-6">
                <p className="text-[11px] opacity-90">{card.footer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
