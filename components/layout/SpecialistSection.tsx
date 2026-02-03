"use client";

import Image from "next/image";

const SpecialistSection = () => {
  return (
    <section className="py-10 md:py-20 bg-[#F9FAFF]">
      <div className="container">
        <h2 className="text-center text-accent text-[24px] font-bold underline underline-offset-8 mb-8 md:mb-12">
          Our Endocrinology Specialist
        </h2>

        <div className="bg-white rounded-2xl p-6 md:p-12 grid grid-cols-1 md:grid-cols-[380px_1fr] gap-8 md:gap-12 items-center">
          <div className="flex flex-col items-center text-center hover:bg-[#48ACBB1A] transition-colors duration-300">
            <div className="w-full flex justify-center mb-4">
              <Image
                src="/images/specialist.png"
                alt="Dr Sudeep Reddy Gandra"
                width={320}
                height={320}
                className="w-65 md:w-[320px] h-auto"
              />
            </div>

            <h3 className="text-secondary text-[24px] font-bold mb-2">
              DR SUDEEP REDDY GANDRA
            </h3>

            <p className="text-[18px] text-black">
              Endocrinologist <span className="text-accent">|</span> MBBS, MD,
              DM ENDOCRINOLOGY
            </p>
          </div>

          <div>
            <h3 className="text-secondary text-[24px] font-bold mb-3">
              DR SUDEEP REDDY GANDRA
            </h3>

            <p className="text-[16px] text-black mb-2">
              Endocrinologist <span className="text-accent">|</span> MBBS, MD,
              DM ENDOCRINOLOGY
            </p>

            <p className="text-[18px] text-accent mb-6">
              10 Years Experience | Gachibowli
            </p>

            <p className="text-[14px] text-black leading-relaxed mb-8">
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

            <div className="flex flex-col sm:flex-row gap-4">
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
