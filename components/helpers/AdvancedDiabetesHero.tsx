"use client";

import Image from "next/image";

interface AdvancedDiabetesHeroProps {
  title: string;
  description: string;
  leftWave: string;
  rightImage: string;
  buttonText?: string;
  onButtonClick?: () => void;
  width?: string;
}

export default function AdvancedDiabetesHero({
  title,
  description,
  leftWave,
  rightImage,
  buttonText = "Get In Touch",
  onButtonClick,
  width = "20%",
}: AdvancedDiabetesHeroProps) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-r from-[#eaf7f9] via-[#cfeff4] to-[#7fd0dc]" />

      {/* Wave */}
      <div className="absolute inset-x-0 bottom-0 md:left-0 md:top-0 md:bottom-auto h-[307px] md:h-full md:w-[42%] z-10">
        <Image
          src={leftWave}
          alt="Wave"
          fill
          className="object-cover md:object-left object-bottom"
          priority
        />
      </div>

      {/* Hero Image */}
      <div
        className="
          relative md:absolute
          mx-auto md:mx-0
          mt-6 md:mt-0
          md:right-12 md:top-7
          h-[220px] md:h-full
          z-20
        "
        style={{ width }}
      >
        <Image
          src={rightImage}
          alt="Hero"
          fill
          className="object-contain md:object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 md:px-38 pt-6 pb-24 md:py-28">
        <div className="max-w-xl mx-auto md:mx-0 text-center md:text-left">
          <h2 className="text-accent text-[20px] md:text-[24px] leading-tight font-medium mb-4 md:mb-5">
            {title}
          </h2>

          <p className="text-black text-[13px] md:text-[14px] leading-relaxed mb-6 md:mb-8">
            {description}
          </p>

          {buttonText && (
            <button
              onClick={onButtonClick}
              className="bg-accent text-white px-8 py-3 rounded-full text-sm hover:opacity-90 transition mx-auto md:mx-0"
            >
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
