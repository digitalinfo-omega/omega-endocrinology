"use client";

import Image from "next/image";

export default function DiabetesCareSection() {
  return (
    <section
      className="w-full py-10 md:py-20 overflow-hidden"
      style={{ background: "#48ACBB0D" }}
    >
      {/* Pediatric */}
      {/* Top Heading */}
      <div className="container">
        <div
          className="text-center md:mb-20 mb-5"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="100"
        >
          <h2
            className="text-accent heading font-medium mb-2"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="150"
          >
            Diabetes Care
          </h2>
          <p
            className="sm-para max-w-xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="250"
          >
            Managing diabetes is about more than blood sugar. It's about your
            overall hormonal balance.
          </p>
        </div>

        <div
          className="grid md:grid-cols-2 md:gap-16 gap-7 items-center md:mb-10 mb-5"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <div
            className="md:order-1 order-2"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="400"
          >
            <h3
              className="text-accent para font-bold mb-3 md:text-start text-center"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="450"
            >
              Pediatric Diabetes Care
            </h3>

            <p
              className="sm-para mb-4 md:text-start text-center"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              When diabetes enters a child's world, everything changes – but it
              doesn't have to limit their dreams. Our pediatric specialists
              understand that managing diabetes in children isn't just about
              numbers on a glucose meter.
            </p>

            <p
              className="para font-medium mb-2 md:text-start text-center text-accent"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="550"
            >
              What Makes Kids Different:
            </p>

            <ul
              className="list-disc ml-5 sm-para space-y-1 mb-4"
              data-aos="fade-up"
              data-aos-duration="850"
              data-aos-delay="600"
            >
              <li>Growing bodies need flexible insulin adjustments</li>
              <li>School activities require special planning</li>
              <li>Emotional support helps build confidence</li>
              <li>Family education ensures home success</li>
            </ul>

            <p
              className="para font-medium mb-2 text-accent"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="650"
            >
              Our Promise:
            </p>

            <p
              className="sm-para"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="700"
            >
              We make diabetes management feel less like a burden and more like
              a skill your child can master. From playground to classroom, we're
              there every step of the way.
            </p>
          </div>

          <div
            className="flex justify-center md:order-2 order-1"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="450"
          >
            <Image
              src="/images/diabetes/pediatric.webp"
              alt="Pediatric"
              width={520}
              height={360}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      <div
        className="md:mb-10 mb-5 md:block hidden"
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-delay="800"
      >
        <div className="flex justify-start">
          <div className="w-[45%] flex items-center">
            <div className="flex-1 h-0.5 bg-accent" />
            <div className="w-3 h-3 rounded-full bg-accent -ml-1" />
          </div>
        </div>
      </div>

      <div className="container">
        {/* Adult */}
        <div
          className="grid md:grid-cols-2 md:gap-16 gap-7 items-center md:mb-10 mb-5"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="900"
        >
          <div
            className="flex justify-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="950"
          >
            <Image
              src="/images/diabetes/adult.webp"
              alt="Adult"
              width={520}
              height={360}
              className="rounded-lg"
            />
          </div>

          <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="1000">
            <h3
              className="text-accent font-bold para mb-3 md:text-start text-center"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="1050"
            >
              Adult Diabetes Management
            </h3>

            <p
              className="sm-para mb-4 md:text-start text-center"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="1100"
            >
              Juggling meetings, family dinners, and gym sessions while managing
              diabetes? We get it. Adult life doesn't pause for blood sugar
              checks, so your diabetes care shouldn't either.
            </p>

            <p
              className="para font-medium mb-2"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="1150"
            >
              Your Busy Life Covered:
            </p>

            <ul
              className="list-disc ml-5 sm-para space-y-1 mb-4"
              data-aos="fade-up"
              data-aos-duration="850"
              data-aos-delay="1200"
            >
              <li>Flexible appointment scheduling around work</li>
              <li>Travel-friendly management strategies</li>
              <li>Stress-impact education and coping tools</li>
              <li>Technology integration for seamless monitoring</li>
            </ul>

            <p
              className="para font-medium mb-2"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="1250"
            >
              Why it matters:
            </p>

            <p
              className="sm-para"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="1300"
            >
              You have goals beyond diabetes – a promotion, vacation plans, or
              simply feeling your best. We help you achieve them all while
              keeping your health on track.
            </p>
          </div>
        </div>
      </div>

      <div
        className="md:mb-10 mb-5 md:block hidden"
        data-aos="fade-left"
        data-aos-duration="800"
        data-aos-delay="1400"
      >
        <div className="flex justify-end">
          <div className="w-[45%] flex items-center">
            <div className="w-3 h-3 rounded-full bg-accent -ml-1" />
            <div className="flex-1 h-0.5 bg-accent" />
          </div>
        </div>
      </div>

      <div className="container">
        {/* Senior */}
        <div
          className="grid md:grid-cols-2 md:gap-16 gap-7 items-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1500"
        >
          <div
            className="md:order-1 order-2"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="1600"
          >
            <h3
              className="para text-accent font-bold mb-3 md:text-start text-center"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="1650"
            >
              Senior Diabetes Care
            </h3>

            <p
              className="sm-para mb-4 md:text-start text-center"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="1700"
            >
              Wellness After years of life experience, you deserve diabetes care
              that respects your preferences while keeping you healthy and
              independent.
            </p>

            <p
              className="para font-medium mb-2"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="1750"
            >
              Personalized For Your Needs:
            </p>

            <ul
              className="list-disc ml-5 sm-para space-y-1 mb-4"
              data-aos="fade-up"
              data-aos-duration="850"
              data-aos-delay="1800"
            >
              <li>Simplified medication routines</li>
              <li>Large-print educational materials</li>
              <li>Coordination with other doctors</li>
              <li>Fall prevention and safety focus</li>
            </ul>

            <p
              className="para font-medium mb-2"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="1850"
            >
              Our Commitment:
            </p>

            <p
              className="sm-para"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="1900"
            >
              Your golden years should be about enjoying grandchildren, hobbies,
              and hard-earned retirement, not worrying about complicated
              diabetes regimens. We keep it simple, safe, and effective.
            </p>
          </div>

          <div
            className="flex justify-center md:order-2 order-1"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1650"
          >
            <Image
              src="/images/diabetes/senior.webp"
              alt="Senior"
              width={520}
              height={360}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
