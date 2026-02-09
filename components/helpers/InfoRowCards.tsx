"use client";

import type { FC, ReactNode } from "react";

interface RowCardItem {
  title: string;
  description: string;
  icon?: ReactNode;
}

interface InfoRowCardsProps {
  background?: string;
  cardBg?: string;
  cards: RowCardItem[];
}

const InfoRowCards: FC<InfoRowCardsProps> = ({
  cards,
  cardBg = "#fff",
  background = "#48ACBB1A",
}) => {
  return (
    <section className="w-full py-10 md:py-20" style={{ background }}>
      <div className="container">
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="rounded-xl p-8 border hover:shadow-sm transition"
              style={{ background: cardBg }}
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay={300 + i * 150}
            >
              {/* Icon Placeholder */}
              <div
                className="w-10 h-10 mb-4 flex justify-center items-center"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={350 + i * 150}
              >
                {card.icon}
              </div>

              <h3
                className="font-semibold mb-3"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={400 + i * 150}
              >
                {card.title}
              </h3>

              <p
                className="text-sm text-gray-600 leading-relaxed"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={450 + i * 150}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoRowCards;
