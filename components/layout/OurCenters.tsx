"use client";

import Image from "next/image";
import { CalendarDays, Phone } from "lucide-react";
import { useState } from "react";

const locations = [
  "Gachibowli",
  "Banjara Hills",
  "Vizag",
  "Guntur",
  "Bhimavaram",
  "Kurnool",
  "Dehradun",
  "Karimnagar",
  "Jabalpur",
  "Tirupati",
  "Surat",
];

const OurCenters = () => {
  const [active, setActive] = useState("Gachibowli");

  return (
    <section className="py-10 md:py-16">
      <div className="container">
        <h2 className="text-center text-accent text-[24px] font-bold mb-4">
          Our Centers
        </h2>

        <p className="text-center text-[16px] mb-8">
          Set up in 2009 and present across 5 states, 10 cities & over 11
          centers, Omega Hospitals is the most trusted clinic chain in India
        </p>

        <div className="bg-[#F7FBFC] rounded-xl p-2 mb-4 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max">
            {locations.map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`relative px-5 py-3 rounded-lg text-[16px] whitespace-nowrap ${
                  active === item ? "bg-secondary text-white" : "text-black"
                }`}
              >
                {item}
                {active === item && (
                  <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-3 h-3 bg-secondary rotate-45" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
          <div>
            <Image
              src="/images/our-center.webp"
              alt="Our Center"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div>
            <h3 className="text-secondary text-[24px] font-medium mb-4">
              Gachibowli
            </h3>

            <p className="font-medium text-[18px] mb-4">
              Comprehensive Healthcare Services at the Core of Hyderabad’s
              Information Technology District
            </p>

            <p className="text-[18px] leading-relaxed mb-8">
              Nestled within the dynamic pulse of Gachibowli — Hyderabad’s
              premier tech hub — Omega Hospitals blends cutting-edge innovation
              with compassionate care. We utilize advanced AI technologies like
              Ethos LINAC, Digital PET-CT (320-slice), and India’s exclusive All
              Digital PET-MRI for swift diagnostics and precise radiation
              therapy. Our CyberKnife VSI Robotic Radiosurgery offers
              non-invasive cancer treatment with minimal side effects. Our
              multidisciplinary teams provide personalized care in Radiation,
              Surgical, Medical, Hemato-Oncology, Cardiology, Neurosciences, and
              Orthopaedics. We also offer consultations, health packages, lab
              tests, advanced diagnostics, a pharmacy, and insurance support for
              easier healthcare access.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-accent text-white text-[16px] px-6 py-3 rounded-lg">
                <CalendarDays size={22} />
                BOOK A CONSULTAION
              </button>

              <button className="flex items-center justify-center gap-2 bg-secondary text-white text-[16px] px-6 py-3 rounded-lg">
                <Phone size={22} />
                Call Us
              </button>

              <button className="flex items-center justify-center gap-2 border border-secondary text-secondary text-[16px] px-6 py-3 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="24"
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
