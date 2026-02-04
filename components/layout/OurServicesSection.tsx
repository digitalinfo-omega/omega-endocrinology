// components/OurServicesSection.tsx
import { ArrowRight } from "lucide-react";
import type { FC } from "react";
import { OurServicesSectionProps } from "../constants/OurServicesSection";
import Link from "next/link";

const OurServicesSection: FC<OurServicesSectionProps> = ({ services }) => {
  return (
    <section className="py-10 md:py-20 bg-[#F9FAFF]">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16 lg:mb-20">
          <span className="inline-block text-accent uppercase tracking-wider font-bold text-[24px] mb-3">
            OUR SERVICES
          </span>

          <p className="text-[18px] text-black max-w-4xl mx-auto leading-relaxed">
            Our expert doctors are trained to identify the root cause of
            hormonal imbalances and offer personalized treatment to help bring
            your hormones back into balance
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 md:p-7 hover:bg-accent/20 transition-shadow duration-300 flex flex-col h-full"
            >
              {/* Icon placeholder - you will replace this div with your SVG */}
              <div className="mb-2 w-12 h-12 flex items-center justify-center text-accent">
                {/* SVG goes here later */}
                <div className="w-10 h-10 flex items-center justify-center text-accent text-xl font-bold">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-[18px] font-semibold text-black mb-3">
                {service.title}
              </h3>

              <p className="text-[16px] text-gray-600 dark:text-gray-400 leading-relaxed mb-6 grow">
                {service.description}
              </p>

              <Link
                href={service.href}
                className="group/btn relative overflow-hidden inline-flex items-center justify-between
    border border-accent p-2 gap-2
    text-accent hover:text-white
    font-medium text-sm md:text-base
    transition-colors w-full
  "
              >
                <span className="relative z-10">Explore more</span>

                <div className="relative z-10 text-accent group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all">
                  <ArrowRight size={18} />
                </div>

                <span
                  className="
      pointer-events-none
      absolute inset-0
      bg-accent
      origin-top-left
      scale-0
      transition-transform duration-500
      group-hover/btn:scale-100
    "
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
