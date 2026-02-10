"use client";

import { useEffect, useState, type FC, type ReactNode } from "react";
import { useMediaQuery } from "react-responsive";

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
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const getAosAnimation = (index: number) => {
    if (!isMounted) {
      return index % 2 === 0 ? "fade-left" : "fade-right";
    }
    return isMobile ? "fade-up" : index % 2 === 0 ? "fade-left" : "fade-right";
  };

  return (
    <section style={{ background: sectionBg }} className="md:py-20 py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading – unchanged, always fade-up */}
        <div
          className="text-center max-w-3xl mx-auto mb-12"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="100"
        >
          <h2
            className="text-2xl font-semibold mb-4"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="150"
          >
            {heading}
          </h2>

          <div
            className="space-y-3 text-gray-600 text-sm leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="250"
          >
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <div className="space-y-5 overflow-hidden">
          {rows.map((row, i) => {
            const iconLeft = i % 2 !== 0;
            const animation = getAosAnimation(i);

            return (
              <div
                key={i}
                style={{ background: rowBg }}
                className="rounded-xl px-6 py-6 flex flex-col md:flex-row items-center gap-6"
                data-aos={animation}
                data-aos-duration="900"
                data-aos-delay={400 + i * 180}
              >
                {iconLeft && (
                  <div
                    style={{ background: iconBg, color: accentColor }}
                    className="w-12 h-12 rounded-md flex items-center justify-center shrink-0 p-3 md:order-1 order-1"
                  >
                    {row.icon}
                  </div>
                )}

                <div className="flex-1 text-center md:text-left order-2">
                  <h3 className="font-semibold mb-2">{row.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {row.description}
                  </p>
                </div>

                {!iconLeft && (
                  <div
                    style={{ background: iconBg, color: accentColor }}
                    className="w-12 h-12 rounded-md flex items-center justify-center shrink-0 p-3 md:order-3 order-1"
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
