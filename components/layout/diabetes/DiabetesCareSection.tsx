"use client";

import Image from "next/image";

export default function DiabetesCareSection() {
  return (
    <section
      className="w-full py-10 md:py-20"
      style={{ background: "#48ACBB0D" }}
    >
      {/* Pediatric */}
      {/* Top Heading */}
      <div className="container">
        <div className="text-center mb-20">
          <h2 className="text-accent text-[24px] mb-2">Diabetes Care</h2>
          <p className="text-sm max-w-xl mx-auto">
            Managing diabetes is about more than blood sugar. It's about your
            overall hormonal balance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center md:mb-10 mb-5">
          <div>
            <h3 className="text-accent text-[16px] font-bold mb-3">
              Pediatric Diabetes Care
            </h3>

            <p className="text-sm mb-4">
              When diabetes enters a child's world, everything changes – but it
              doesn't have to limit their dreams. Our pediatric specialists
              understand that managing diabetes in children isn't just about
              numbers on a glucose meter.
            </p>

            <p className="text-sm font-medium mb-2">
              What Makes Kids Different:
            </p>

            <ul className="list-disc ml-5 text-sm space-y-1 mb-4">
              <li>Growing bodies need flexible insulin adjustments</li>
              <li>School activities require special planning</li>
              <li>Emotional support helps build confidence</li>
              <li>Family education ensures home success</li>
            </ul>

            <p className="text-sm font-medium mb-2">Our Promise:</p>

            <p className="text-sm">
              We make diabetes management feel less like a burden and more like
              a skill your child can master. From playground to classroom, we're
              there every step of the way.
            </p>
          </div>

          <div className="flex justify-center">
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
      <div className="md:mb-10 mb-5">
        <div className="flex justify-start">
          <div className="w-[45%] flex items-center">
            <div className="flex-1 h-0.5 bg-accent" />
            <div className="w-3 h-3 rounded-full bg-accent -ml-1" />
          </div>
        </div>
      </div>

      <div className="container">
        {/* Adult */}
        <div className="grid md:grid-cols-2 gap-16 items-center md:mb-10 mb-5">
          <div className="flex justify-center">
            <Image
              src="/images/diabetes/adult.webp"
              alt="Adult"
              width={520}
              height={360}
              className="rounded-lg"
            />
          </div>

          <div>
            <h3 className="text-accent font-bold text-[16px] mb-3">
              Adult Diabetes Management
            </h3>

            <p className="text-sm mb-4">
              Juggling meetings, family dinners, and gym sessions while managing
              diabetes? We get it. Adult life doesn't pause for blood sugar
              checks, so your diabetes care shouldn't either.
            </p>

            <p className="text-sm font-medium mb-2">Your Busy Life Covered:</p>

            <ul className="list-disc ml-5 text-sm space-y-1 mb-4">
              <li>Flexible appointment scheduling around work</li>
              <li>Travel-friendly management strategies</li>
              <li>Stress-impact education and coping tools</li>
              <li>Technology integration for seamless monitoring</li>
            </ul>

            <p className="text-sm font-medium mb-2">Why it matters:</p>

            <p className="text-sm">
              You have goals beyond diabetes – a promotion, vacation plans, or
              simply feeling your best. We help you achieve them all while
              keeping your health on track.
            </p>
          </div>
        </div>
      </div>
      <div className="md:mb-10 mb-5">
        <div className="flex justify-end">
          <div className="w-[45%] flex items-center">
            <div className="w-3 h-3 rounded-full bg-accent -ml-1" />
            <div className="flex-1 h-0.5 bg-accent" />
          </div>
        </div>
      </div>

      <div className="container">
        {/* Senior */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-accent font-bold mb-3">Senior Diabetes Care</h3>

            <p className="text-sm mb-4">
              Wellness After years of life experience, you deserve diabetes care
              that respects your preferences while keeping you healthy and
              independent.
            </p>

            <p className="text-sm font-medium mb-2">
              Personalized For Your Needs:
            </p>

            <ul className="list-disc ml-5 text-sm space-y-1 mb-4">
              <li>Simplified medication routines</li>
              <li>Large-print educational materials</li>
              <li>Coordination with other doctors</li>
              <li>Fall prevention and safety focus</li>
            </ul>

            <p className="text-sm font-medium mb-2">Our Commitment:</p>

            <p className="text-sm">
              Your golden years should be about enjoying grandchildren, hobbies,
              and hard-earned retirement, not worrying about complicated
              diabetes regimens. We keep it simple, safe, and effective.
            </p>
          </div>

          <div className="flex justify-center">
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
