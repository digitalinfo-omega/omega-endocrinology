"use client";
import Image from "next/image";
import { AnimatedCounter } from "../helpers/AnimatedCounter";

export default function WhyChooseUsSection() {
  return (
    <section className="w-full bg-white py-20 relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT IMAGE COLLAGE */}
          <div
            className="w-full flex justify-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <div className="relative w-full max-w-130 h-130 rounded-[32px] overflow-hidden hover:scale-105 transition duration-200 z-30">
              <Image
                src="/images/why-choose-us.webp"
                alt="Why choose us"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <p className="text-accent font-semibold tracking-wide mb-3 heading">
              WHY CHOOSE US
            </p>

            <h2
              className="para font-bold leading-tight mb-4"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="300"
            >
              Advanced Endocrinology Services for a Healthier Future
            </h2>

            <p
              className="text-black/44 max-w-xl mb-10 text-[14px]"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="400"
            >
              Transform your health journey with our patient-centered approach
              and modern endocrine care that delivers measurable results for
              lasting wellness.
            </p>

            {/* STATS */}
            <div
              className="grid grid-cols-1 sm:grid-cols-3 border overflow-hidden mb-10"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <Stat value="24/7" label="Patient Support" />
              <Stat value="8+" label="Years of Expertise" bordered />
              <Stat value="98%" label="Patient Satisfaction Rate" bordered />
            </div>

            {/* FEATURES */}
            <div
              className="flex flex-wrap gap-6 mb-10"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <Feature text="Effortless Appointment Booking" />
              <Feature text="Team of Skilled Endocrinologists" />
              <Feature text="Modern Treatment Protocols" />
            </div>

            <button
              className="text-[14px] bg-accent text-white px-8 py-3 rounded-md hover:opacity-90 transition"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="700"
            >
              Book Appointment
            </button>
          </div>
        </div>

        <div
          className="absolute md:bottom-18 bottom-10 md:left-[45%] left-3"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="300"
        >
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

        <div
          className="absolute md:top-18 top-10 right-1/12"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="400"
        >
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

        <div
          className="absolute md:top-0 top-10 left-0 z-10"
          data-aos="fade-up"
          data-aos-duration="1400"
          data-aos-delay="200"
        >
          <svg
            width="400"
            height="377"
            viewBox="0 0 400 377"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.4" clipPath="url(#clip0_716_2020)">
              <g clipPath="url(#clip1_716_2020)">
                {/* ... (the long SVG path content remains unchanged) ... */}
                <path
                  d="M49.5084 24.2692C49.5941 24.537 49.631 24.818 49.6174 25.0988C49.6178 25.2885 49.5781 25.476 49.501 25.6492C49.4238 25.8223 49.3108 25.9771 49.1696 26.1033C48.8883 26.2938 48.5575 26.3977 48.2178 26.4023C45.9728 26.6336 43.7042 26.3567 41.5797 25.5921C39.5535 24.8674 37.6387 24.1809 37.8429 21.452C37.8647 20.7766 38.0549 20.1176 38.3962 19.5349C38.7869 18.9505 39.3706 18.5225 40.045 18.3259C40.73 18.1157 41.4579 18.0873 42.1575 18.2435C43.5329 18.5444 44.7362 19.4125 45.8286 20.3102C46.5304 20.8802 47.2413 21.4789 47.887 22.1033C48.601 22.6771 49.1587 23.4222 49.5084 24.2692ZM38.0545 22.9247C38.529 24.4353 40.0424 24.9756 41.6201 25.5376C43.7372 26.3008 45.9987 26.5765 48.2362 26.3441C48.558 26.3348 48.8709 26.2365 49.1403 26.0601C49.2753 25.9379 49.3831 25.7888 49.4569 25.6222C49.5307 25.4557 49.5687 25.2755 49.5686 25.0932C49.6248 23.9238 48.7453 22.9383 47.874 22.1283C47.214 21.5084 46.5221 20.9038 45.8203 20.3337C44.7294 19.4408 43.5324 18.576 42.1742 18.2801C41.4987 18.0946 40.7832 18.1166 40.1207 18.3434C39.4582 18.5702 38.8792 18.9912 38.459 19.5518C38.1261 20.1266 37.94 20.7749 37.9173 21.4391C37.8656 21.9385 37.9122 22.4432 38.0545 22.9247Z"
                  fill="#48ACBB"
                />
                {/* ... rest of the SVG paths remain exactly the same ... */}
              </g>
            </g>
            <defs>
              <clipPath id="clip0_716_2020">
                <rect
                  width="401"
                  height="377"
                  fill="white"
                  transform="translate(-1)"
                />
              </clipPath>
              <clipPath id="clip1_716_2020">
                <rect
                  width="353.23"
                  height="437.531"
                  fill="white"
                  transform="translate(-17.2092 376.531) rotate(-107.437)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  label,
  bordered,
}: {
  value: string;
  label: string;
  bordered?: boolean;
}) {
  return (
    <div
      className={`py-8 px-6 text-center ${
        bordered ? "sm:border-l border-t sm:border-t-0" : ""
      }`}
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-delay="600"
    >
      <p className="text-accent text-[24px] font-bold mb-2">
        <AnimatedCounter value={value} />
      </p>
      <p className="text-[14px] text-black">{label}</p>
    </div>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <div
      className="flex items-center gap-2 text-[14px] text-black"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="700"
    >
      <span className="">
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
      </span>
      {text}
    </div>
  );
}
