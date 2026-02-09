"use client";

import Image from "next/image";

const SpecialistSection = () => {
  return (
    <section className="py-10 md:py-20 bg-[#F9FAFF]">
      <div className="container">
        <h2
          className="text-center text-accent heading font-bold underline underline-offset-8 mb-8 md:mb-12"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          Our Endocrinology Specialist
        </h2>

        <div
          className="bg-white rounded-2xl p-6 md:p-12 grid grid-cols-1 md:grid-cols-[380px_1fr] gap-8 md:gap-12 items-center"
          data-aos="fade-up"
          data-aos-duration="1100"
          data-aos-delay="200"
        >
          <div
            className="relative overflow-hidden flex flex-col items-center text-center group"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            {/* Center expand background */}
            <span className="absolute inset-0 bg-[#48ACBB1A] scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center z-0" />

            <div className="relative z-10 w-full flex justify-center mb-4">
              <Image
                src="/images/specialist.png"
                alt="Dr Sudeep Reddy Gandra"
                width={320}
                height={320}
                className="w-65 md:w-[320px] h-auto"
              />
            </div>

            <h3
              className="relative z-10 text-secondary heading font-bold mb-2"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="400"
            >
              DR SUDEEP REDDY GANDRA
            </h3>

            <p
              className="relative z-10 para text-black"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="450"
            >
              Endocrinologist <span className="text-accent">|</span> MBBS, MD,
              DM ENDOCRINOLOGY
            </p>
          </div>

          <div data-aos="fade-up" data-aos-duration="1100" data-aos-delay="400">
            <h3
              className="text-secondary heading font-bold mb-3"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="500"
            >
              DR SUDEEP REDDY GANDRA
            </h3>

            <p
              className="text-[16px] text-black mb-2"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="550"
            >
              Endocrinologist <span className="text-accent">|</span> MBBS, MD,
              DM ENDOCRINOLOGY
            </p>

            <p
              className="para text-accent mb-6"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="600"
            >
              10 Years Experience | Gachibowli
            </p>

            <p
              className="text-[14px] text-black leading-relaxed mb-8"
              data-aos="fade-up"
              data-aos-duration="950"
              data-aos-delay="650"
            >
              Dr. Sudeep Reddy Gandra is a Consultant Endocrinologist with
              specialized training in adult and pediatric endocrinology. He
              completed his MBBS and MD in General Medicine, and is currently
              pursuing his DM in Endocrinology at Andhra Medical College. His
              expertise includes diabetes management, type 1 diabetes, obesity,
              osteoporosis, and gestational diabetes. A finalist at TYSA 2024,
              he has presented research at ESICON, APICON, and TYSA. Dr. Sudeep
              is dedicated to delivering holistic, culturally sensitive care for
              optimal patient outcomes.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="750"
            >
              <button className="bg-accent text-white text-[14px] px-8 py-3 rounded-lg">
                BOOK A CONSULATION
              </button>

              <button className="border border-secondary text-secondary text-[14px] px-8 py-3 rounded-lg">
                View Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialistSection;
