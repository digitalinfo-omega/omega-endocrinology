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

      {/* Left Wave */}
      <div className="absolute left-0 top-0 h-full w-[40%] z-10">
        <Image
          src={leftWave}
          alt="Left Wave"
          fill
          className="object-cover object-left"
          priority
        />
      </div>

      {/* Right Image */}
      <div className={`absolute right-12 top-7 h-full z-10`} style={{ width }}>
        <Image
          src={rightImage}
          alt="Hero"
          fill
          className="object-cover object-right"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-38 py-28">
        <div className="max-w-xl">
          <h2 className="text-accent text-[24px] leading-tight font-medium mb-5">
            {title}
          </h2>

          <p className="text-black text-[14px] leading-relaxed mb-8">
            {description}
          </p>

          {buttonText && (
            <button
              onClick={onButtonClick}
              className="bg-accent text-white px-8 py-3 rounded-full text-sm hover:opacity-90 transition"
            >
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
