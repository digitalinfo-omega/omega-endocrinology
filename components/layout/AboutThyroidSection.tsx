// components/AboutSection.tsx
import type { FC } from "react";

interface AboutSectionProps {
  title: string;
  description: string;
  features: string[];
  imagePlaceholderText?: string;
}

const AboutSection: FC<AboutSectionProps> = ({
  title,
  description,
  features,
  imagePlaceholderText = "/images/throat.webp",
}) => {
  return (
    <section className="py-10 md:py-20 bg-white dark:bg-gray-950">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">
          {/* Left - Image placeholder only */}
          <div className="relative w-full">
            <img
              src="/images/throat.webp"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right - Content */}
          <div className="space-y-8 md:space-y-10">
            <div className="space-y-5 md:space-y-6">
              <span className="inline-block text-accent uppercase tracking-wider font-medium text-[18px]">
                ABOUT US
              </span>

              <h2 className="text-[24px] font-bold leading-tight text-black dark:text-white">
                {title}
              </h2>

              <p className="text-[18px] text-black dark:text-gray-300 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Feature list */}
            <div className="space-y-4 md:space-y-5">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1.5 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                    >
                      <path
                        d="M6.57741 0.329413C6.61245 0.232887 6.67635 0.149489 6.76044 0.090553C6.84453 0.0316166 6.94473 0 7.04741 0C7.1501 0 7.2503 0.0316166 7.33438 0.090553C7.41847 0.149489 7.48238 0.232887 7.51741 0.329413L7.99541 1.63541C8.37029 2.65924 8.96389 3.58902 9.73485 4.35998C10.5058 5.13094 11.4356 5.72453 12.4594 6.09941L13.7644 6.57741C13.8609 6.61245 13.9443 6.67635 14.0033 6.76044C14.0622 6.84453 14.0938 6.94473 14.0938 7.04741C14.0938 7.1501 14.0622 7.2503 14.0033 7.33438C13.9443 7.41847 13.8609 7.48238 13.7644 7.51741L12.4594 7.99541C11.4356 8.37029 10.5058 8.96389 9.73485 9.73485C8.96389 10.5058 8.37029 11.4356 7.99541 12.4594L7.51741 13.7644C7.48238 13.8609 7.41847 13.9443 7.33438 14.0033C7.2503 14.0622 7.1501 14.0938 7.04741 14.0938C6.94473 14.0938 6.84453 14.0622 6.76044 14.0033C6.67635 13.9443 6.61245 13.8609 6.57741 13.7644L6.09941 12.4594C5.72453 11.4356 5.13094 10.5058 4.35998 9.73485C3.58902 8.96389 2.65924 8.37029 1.63541 7.99541L0.329413 7.51741C0.232887 7.48238 0.149489 7.41847 0.090553 7.33438C0.0316166 7.2503 0 7.1501 0 7.04741C0 6.94473 0.0316166 6.84453 0.090553 6.76044C0.149489 6.67635 0.232887 6.61245 0.329413 6.57741L1.63541 6.09941C2.65924 5.72453 3.58902 5.13094 4.35998 4.35998C5.13094 3.58902 5.72453 2.65924 6.09941 1.63541L6.57741 0.329413Z"
                        fill="#299FB0"
                      />
                    </svg>
                  </div>
                  <p className="text-[14px] md:text-[18px] text-black dark:text-gray-200">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
