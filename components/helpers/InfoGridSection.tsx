"use client";

import type { FC, ReactNode } from "react";

interface CardItem {
  title: string;
  description: string;
  icon?: ReactNode; // empty slot for your SVG later
}

interface InfoGridSectionProps {
  heading: string;
  paragraphs: string[];
  cards: CardItem[];
  reverse?: boolean;
}

const InfoGridSection: FC<InfoGridSectionProps> = ({
  heading,
  paragraphs,
  cards,
  reverse = false,
}) => {
  return (
    <section className="w-full py-10 md:py-20">
      <div className="container">
        <div
          className={`flex gap-10 items-center flex-col ${
            reverse ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          {/* Left Content */}
          <div>
            <h2 className="text-[16px] font-semibold mb-6">{heading}</h2>

            <div className="space-y-4 text-gray-600 leading-relaxed text-[16px]">
              {paragraphs.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, i) => (
              <div
                key={i}
                className="border rounded-xl p-6 text-center transition"
                style={{ boxShadow: "0px 0px 1px 0px #48ACBB" }}
              >
                {/* Icon Slot */}
                <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center rounded-xl bg-[#48ACBB0D] p-2">
                  <div className="w-full h-full flex items-center justify-center">
                    {card.icon}
                  </div>
                </div>

                <h3 className="font-semibold mb-2 text-[16px]">{card.title}</h3>

                <p className="text-sm text-black leading-relaxed text-[14px]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoGridSection;
