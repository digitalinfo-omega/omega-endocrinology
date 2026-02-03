// components/WhyChooseUsSection.tsx
import type { FC } from "react";

const Bullet = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3">
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
    <p className="text-[16px] text-black dark:text-gray-200">{text}</p>
  </div>
);

const WhyChooseUsSection: FC = () => {
  return (
    <section className="py-10 md:py-20 bg-white dark:bg-gray-950 relative">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
          {/* Image */}
          <div className="relative h-full overflow-hidden rounded-xl">
            <img
              src="/images/why-choose-us.webp"
              alt="Doctor team endocrinology"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col space-y-6">
            <div className="">
              <span className="inline-block text-accent uppercase tracking-wider font-bold text-[24px]">
                WHY CHOOSE US
              </span>

              <h2 className="text-[24px] font-bold leading-tight text-black dark:text-white">
                Advanced Endocrinology Services for a
                <br className="hidden md:block" />
                Healthier Future
              </h2>

              <p className="text-[16px] text-black/40 dark:text-gray-300 leading-relaxed">
                Transform your health journey with our patient-centered approach
                and modern endocrine care that delivers measurable results.
              </p>
            </div>

            <div className="grid grid-cols-3 text-center">
              {[
                ["24/7", "Patient Support"],
                ["8+", "Years of Expertise"],
                ["98%", "Patient Satisfaction"],
              ].map(([v, t]) => (
                <div key={t} className="border-2 border-gray-100 p-5">
                  <p className="text-[18px] font-bold text-accent">{v}</p>
                  <p className="mt-2 text-[16px] text-black dark:text-gray-400">
                    {t}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 justify-between">
              <Bullet text="Effortless Appointment Booking" />
              <Bullet text="Team of Skilled Endocrinologists" />
              <Bullet text="Modern Treatment Protocols" />
            </div>

            <button className="self-start px-5 py-3 bg-accent text-white font-medium text-[16px] rounded-xl hover:bg-accent/90 transition-colors shadow-md">
              Book Appointment
            </button>
          </div>
        </div>
        <div className="absolute bottom-18 left-[45%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="23"
            viewBox="0 0 17 16"
            fill="none"
          >
            <path
              d="M2.15525 15.7075L2.94214 11.1144L-2.04742e-05 7.50054L4.59313 8.28743L8.20698 5.34527L7.42008 9.93842L10.3622 13.5523L5.7691 12.7654L2.15525 15.7075ZM4.2123 4.74939L4.59166 2.63928L3.22447 0.987845L5.33458 1.36721L6.98601 1.43349e-05L6.60665 2.11012L7.97384 3.76156L5.86374 3.38219L4.2123 4.74939ZM11.3709 11.8252L11.8062 9.15212L10.1136 7.03781L12.7867 7.47311L14.901 5.78057L14.4657 8.45367L16.1583 10.568L13.4852 10.1327L11.3709 11.8252Z"
              fill="#E56E1B"
            />
          </svg>
        </div>
        <div className="absolute top-18 right-1/12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="23"
            viewBox="0 0 17 16"
            fill="none"
          >
            <path
              d="M2.15525 15.7075L2.94214 11.1144L-2.04742e-05 7.50054L4.59313 8.28743L8.20698 5.34527L7.42008 9.93842L10.3622 13.5523L5.7691 12.7654L2.15525 15.7075ZM4.2123 4.74939L4.59166 2.63928L3.22447 0.987845L5.33458 1.36721L6.98601 1.43349e-05L6.60665 2.11012L7.97384 3.76156L5.86374 3.38219L4.2123 4.74939ZM11.3709 11.8252L11.8062 9.15212L10.1136 7.03781L12.7867 7.47311L14.901 5.78057L14.4657 8.45367L16.1583 10.568L13.4852 10.1327L11.3709 11.8252Z"
              fill="#E56E1B"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
