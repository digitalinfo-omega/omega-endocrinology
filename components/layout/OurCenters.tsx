"use client";

import Image from "next/image";
import { CalendarDays, Phone } from "lucide-react";
import { useState } from "react";
import { centers } from "../constants/OurCenter";

const OurCenters = () => {
  const [active, setActive] = useState(centers[0]);

  return (
    <section className="pb-10 md:pb-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-accent text-[24px] font-bold mb-4">
          Our Centers
        </h2>

        <p className="text-center text-[16px] mb-8 md:max-w-[50%] w-full mx-auto">
          Set up in 2009 and present across 5 states, 10 cities & over 11
          centers, Omega Hospitals is the most trusted clinic chain in India
        </p>

        <div
          style={{ boxShadow: "0px 0px 2px 0px #00000040" }}
          className="bg-[#299FB00D] rounded-xl p-2 mb-4 overflow-hidden"
        >
          {/* Changed grid to flex for mobile scrolling, kept grid for desktop */}
          <div className="flex lg:grid lg:grid-cols-11 gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-hide">
            {centers.map((center) => (
              <button
                key={center.name}
                onClick={() => setActive(center)}
                // Added flex-shrink-0 to prevent squishing, flex/justify/items-center for centering text
                className={`relative px-5 py-3 rounded-lg text-[16px] shrink-0 flex items-center justify-center text-center transition-colors duration-300 ${
                  active.name === center.name
                    ? "bg-secondary text-white"
                    : "text-black hover:bg-black/5"
                }`}
              >
                <span className="whitespace-nowrap">{center.name}</span>

                {active.name === center.name && (
                  // Centered the indicator arrow for better stability
                  <span className="absolute right-1.25 -translate-x-1/2 -bottom-1.5 w-3 h-3 bg-secondary rotate-45" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div
          style={{ boxShadow: "0px 0px 2px 0px #00000040" }}
          className="bg-[#299FB00D] rounded-xl p-4 md:p-8 flex lg:flex-row flex-col gap-6 md:gap-10 items-center"
        >
          <div className="flex justify-center items-center w-full lg:basis-[30%] basis-full">
            {/* Kept original dimensions as requested */}
            <div className="md:w-101.25 md:h-93.5 w-full h-full overflow-hidden rounded-lg">
              <img
                src={active.image}
                alt={active.heading}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:basis-[70%] basis-full w-full">
            <h3 className="text-secondary text-[24px] font-medium mb-4">
              {active.heading}
            </h3>

            <p className="font-bold text-[16px] mb-4">{active.subHeading}</p>

            <p className="text-[15px] leading-relaxed mb-8">
              {active.description}
            </p>

            <div className="flex flex-col md:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-accent text-white text-[14px] px-6 py-3 rounded-lg whitespace-nowrap">
                <CalendarDays size={20} />
                BOOK A CONSULTATION
              </button>

              <button className="flex items-center justify-center gap-2 bg-secondary text-white text-[14px] px-6 py-3 rounded-lg whitespace-nowrap">
                <Phone size={20} />
                Call Us
              </button>

              <button className="flex items-center justify-center gap-2 border border-secondary text-secondary text-[14px] px-6 py-3 rounded-lg whitespace-nowrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="18"
                  viewBox="0 0 23 24"
                  fill="none"
                >
                  <path
                    d="M16.4142 10.707L21.4142 5.70703M21.4142 5.70703L16.4142 0.707031M21.4142 5.70703H17.4142C15.8229 5.70703 14.2968 6.33917 13.1715 7.46439C12.0463 8.58961 11.4142 10.1157 11.4142 11.707V23.707V16.707C11.4142 15.1157 10.782 13.5896 9.65683 12.4644C8.53161 11.3392 7.00548 10.707 5.41418 10.707H1.41418M6.41418 5.70703L1.41418 10.707M1.41418 10.707L6.41418 15.707"
                    stroke="#299FB0"
                    strokeWidth="2"
                  />
                </svg>
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCenters;
