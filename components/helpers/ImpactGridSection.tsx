"use client";

import type { FC, ReactNode } from "react";

interface ImpactCard {
  title: string;
  description: string;
  icon?: ReactNode;
}

interface ImpactGridSectionProps {
  heading: string;
  paragraphs: string[];
  cards: ImpactCard[];

  sectionBg?: string;
  cardBg?: string;
  iconBg?: string;
  accentColor?: string;
}

const ImpactGridSection: FC<ImpactGridSectionProps> = ({
  heading,
  paragraphs,
  cards,
  sectionBg = "#ffffff",
  cardBg = "#f5fafb",
  iconBg = "#e6f6f9",
  accentColor = "#0ea5b7",
}) => {
  return (
    <section style={{ background: sectionBg }} className="py-10 md:py-20">
      <div className="container">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-[24px] font-semibold mb-4">{heading}</h2>

          <div className="space-y-3 text-black text-sm font-normal leading-relaxed">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              style={{ background: cardBg }}
              className="rounded-xl p-8"
            >
              {/* Icon Slot */}
              <div
                style={{ background: iconBg, color: accentColor }}
                className="w-12 h-12 p-2 rounded-md flex items-center justify-center mb-4"
              >
                {card.icon}
              </div>

              <h3 className="font-semibold mb-2">{card.title}</h3>

              <p className="text-sm text-black leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactGridSection;
