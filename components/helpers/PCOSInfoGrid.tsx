"use client";

import type { FC, ReactNode } from "react";

interface Card {
  title: string;
  description: string;
  icon: ReactNode;
}

interface PCOSInfoGridProps {
  heading?: string;
  subheading?: string;
  cards: Card[];
}

const PCOSInfoGrid: FC<PCOSInfoGridProps> = ({
  heading = "Women’s Health Matters: Managing PCOS Effectively",
  subheading = "PCOS occurs when hormonal imbalances cause ovaries to produce excess androgens (male hormones), interfering with ovulation. It is one of the most common endocrine disorders in women.",
  cards,
}) => {
  return (
    <section className="md:py-20 py-10 bg-white">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-[20px] md:text-[22px] font-medium mb-3">
            {heading}
          </h2>

          <p className="text-[#6B7280] text-sm max-w-180 mx-auto leading-relaxed">
            {subheading}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#EDF7F7] rounded-2xl px-8 py-10 text-center flex flex-col items-center"
            >
              {/* Icon wrapper */}
              <div className="mb-6 flex p-2 items-center justify-center w-11 h-11 rounded-xl bg-[#e5f3f4]">
                {card.icon}
              </div>

              <h3 className="text-sm font-semibold mb-3">{card.title}</h3>

              <p className="text-[13px] text-[#6B7280] leading-relaxed max-w-55">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PCOSInfoGrid;
