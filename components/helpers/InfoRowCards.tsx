"use client";

import type { FC, ReactNode } from "react";

interface RowCardItem {
  title: string;
  description: string;
  icon?: ReactNode;
}

interface InfoRowCardsProps {
  cards: RowCardItem[];
}

const InfoRowCards: FC<InfoRowCardsProps> = ({ cards }) => {
  return (
    <section className="w-full py-16" style={{ background: "#48ACBB1A" }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-8 text-center border hover:shadow-sm transition"
            >
              {/* Icon Placeholder */}
              <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center">
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
