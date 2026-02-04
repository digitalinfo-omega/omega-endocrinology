"use client";

import type { FC, ReactNode } from "react";

interface InfoRow {
  title: string;
  description: string;
  icon?: ReactNode;
}

interface HorizontalInfoSectionProps {
  heading: string;
  paragraphs: string[];
  rows: InfoRow[];

  sectionBg?: string;
  rowBg?: string;
  iconBg?: string;
  accentColor?: string;
}

const HorizontalInfoSection: FC<HorizontalInfoSectionProps> = ({
  heading,
  paragraphs,
  rows,
  sectionBg = "#ffffff",
  rowBg = "#f3f9f9",
  iconBg = "#e4f6f9",
  accentColor = "#0ea5b7",
}) => {
  return (
    <section style={{ background: sectionBg }} className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-semibold mb-4">{heading}</h2>

          <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        {/* Rows */}
        <div className="space-y-5">
          {rows.map((row, i) => {
            const iconLeft = i % 2 !== 0;

            return (
              <div
                key={i}
                style={{ background: rowBg }}
                className="rounded-xl px-6 py-6 flex flex-col md:flex-row items-center gap-6"
              >
                {/* Icon Left */}
                {iconLeft && (
                  <div
                    style={{ background: iconBg, color: accentColor }}
                    className="w-12 h-12 rounded-md flex items-center justify-center shrink-0"
                  >
                    {row.icon}
                  </div>
                )}

                {/* Text */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-semibold mb-2">{row.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {row.description}
                  </p>
                </div>

                {/* Icon Right */}
                {!iconLeft && (
                  <div
                    style={{ background: iconBg, color: accentColor }}
                    className="w-12 h-12 rounded-md flex items-center justify-center shrink-0"
                  >
                    {row.icon}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HorizontalInfoSection;
