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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="rounded-xl p-8 border hover:shadow-sm transition"
              style={{ background: cardBg }}
            >
              {/* Icon Placeholder */}
              <div className="w-10 h-10 mb-4 flex justify-center items-center">
                {card.icon}
              </div>

              <h3 className="font-semibold mb-3">{card.title}</h3>

              <p className="text-sm text-gray-600 leading-relaxed">
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
