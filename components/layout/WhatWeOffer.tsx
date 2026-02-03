"use client";

const offers = [
  {
    id: "01",
    text: "Comprehensive Hormonal Evaluation: Advanced diagnostic testing for thyroid, adrenal, pituitary, and reproductive hormones.",
  },
  {
    id: "02",
    text: "24/7 Laboratory Support: Quick and accurate endocrine lab testing with rapid report turnaround times.",
  },
  {
    id: "03",
    text: "Patient Education & Counselling: Dedicated sessions to empower patients with knowledge about managing chronic endocrine conditions effectively.",
  },
  {
    id: "04",
    text: "Multidisciplinary Team Approach: Collaborative care involving endocrinologists, dietitians, and physiotherapists for holistic endocrine disorder management.",
  },
];

const WhatWeOffer = () => {
  return (
    <section className="py-10 md:py-20">
      <div className="container">
        <h2 className="text-center text-accent text-[24px] font-bold mb-10">
          What we offer at Omega Hospitals
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offers.map((item) => (
            <div
              key={item.id}
              className="relative border rounded-xl p-6 md:p-8 bg-white"
            >
              <div className="absolute top-0 right-0 bg-accent text-white text-[18px] px-4 py-2 rounded-tr-xl">
                {item.id}
              </div>

              <p className="text-[16px] text-black leading-relaxed pr-8">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
