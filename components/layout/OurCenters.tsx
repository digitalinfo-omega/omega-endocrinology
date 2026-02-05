"use client";

import Image from "next/image";
import { CalendarDays, Phone } from "lucide-react";
import { useState } from "react";

interface Center {
  name: string;
  image: string;
  heading: string;
  subHeading: string;
  description: string;
}

const centers: Center[] = [
  {
    name: "Gachibowli",
    image: "/images/our-center.webp",
    heading: "Gachibowli",
    subHeading:
      "Comprehensive Healthcare Services at the Core of Hyderabad’s Information Technology District",
    description:
      "Nestled within the dynamic pulse of Gachibowli — Hyderabad’s premier tech hub — Omega Hospitals blends cutting-edge innovation with compassionate care. We utilize advanced AI technologies like Ethos LINAC, Digital PET-CT (320-slice), and India’s exclusive All Digital PET-MRI for swift diagnostics and precise radiation therapy. Our CyberKnife VSI Robotic Radiosurgery offers non-invasive cancer treatment with minimal side effects. Our multidisciplinary teams provide personalized care in Radiation, Surgical, Medical, Hemato-Oncology, Cardiology, Neurosciences, and Orthopaedics. We also offer consultations, health packages, lab tests, advanced diagnostics, a pharmacy, and insurance support for easier healthcare access.",
  },
  {
    name: "Banjara Hills",
    image: "/images/our-center.webp",
    heading: "Banjara Hills",
    subHeading: "Advanced specialty care in the heart of Hyderabad",
    description:
      "Omega Hospitals, Banjara Hills is a premier healthcare destination in India under the leadership of Dr. Ch. Mohana Vamsy, renowned for excellence in cancer care. The center offers comprehensive services across surgical, medical and radiation oncology, hemato-oncology, bone marrow transplantation, nuclear medicine, PET-CT, PET-MRI, and robotic radiosurgery, along with Centers of Excellence in cardiology, cardiothoracic surgery, nephrology, neurology, orthopaedics, gynaecology, urology, and gastroenterology. Backed by advanced diagnostics and cutting-edge technology, Omega has delivered over 13 lakh consultations and 5.7 lakh admissions, combining precision medicine with compassionate care.",
  },
  {
    name: "Vizag",
    image: "/images/our-center.webp",
    heading: "Vizag",
    subHeading: "World-class cancer care for the region",
    description:
      "Omega Hospitals in Vizag is a premier cancer centre founded by Dr. Ch. Mohana Vamsy, dedicated to delivering world-class, compassionate oncology care. As Vizag’s leading cancer hospital, Omega offers comprehensive medical, surgical, and radiation oncology services including chemotherapy, immunotherapy, targeted therapy, and advanced surgeries. Supported by state-of-the-art diagnostics, multidisciplinary teams, and facilities spanning nuclear medicine, PET-CT, pathology, radiology, and supportive care, the hospital emphasizes early detection, precise treatment planning, and personalized care, providing a holistic approach from diagnosis through recovery.",
  },
  {
    name: "Guntur",
    image: "/images/our-center.webp",
    heading: "Guntur",
    subHeading: "Compassionate cancer care with advanced oncology services",
    description:
      "Omega Hospitals, Guntur is a leading cancer care facility offering comprehensive medical, surgical, and radiation oncology services with a compassionate, patient-centric approach. The centre provides advanced treatments and personalized diagnostic services for early detection, with a strong focus on solid tumors and hematologic malignancies. Backed by multidisciplinary specialists, robust infrastructure, 24/7 emergency services, and comprehensive laboratory and imaging support, Omega combines cutting-edge science with compassionate care—bringing all cancer treatment needs together under one roof with guidance from some of the most reputable oncology experts.",
  },
  {
    name: "Bhimavaram",
    image: "/images/our-center.webp",
    heading: "Bhimavaram",
    subHeading: "Comprehensive, accessible cancer care in Andhra Pradesh",
    description:
      "Omega Hospitals Bhimavaram is a renowned cancer-care facility in Andhra Pradesh, delivering multidisciplinary medical, surgical, and radiation oncology services. Patients benefit from state-of-the-art support including radiology imaging, laboratory testing, nuclear medicine, pathology, microbiology, and a fully equipped pharmacy. With 24/7 emergency care, acceptance of government health schemes such as EHS and Aarogyasri, and cashless insurance/TPA options, the centre ensures quality treatment that is both accessible and affordable. Alongside treating a wide spectrum of cancers, Omega Hospitals Bhimavaram offers outpatient clinics, second-opinion services, and diagnostic follow-ups—providing comprehensive, patient-friendly care under one roof with the highest standards of safety and compassion.",
  },
  {
    name: "Kurnool",
    image: "/images/our-center.webp",
    heading: "Kurnool",
    subHeading: "World-class, holistic cancer care made accessible",
    description:
      "Omega Hospitals Kurnool is a leading cancer care center in India, delivering multidisciplinary medical, surgical, and radiation oncology services supported by advanced diagnostics including radiology, nuclear medicine, biochemistry, and pathology. Each patient receives a meticulously tailored treatment plan designed around their specific medical needs. With a strong focus on early detection, community outreach, and compassionate nursing, the centre provides holistic cancer care for the region, impacting over 5 million lives. Alongside oncology, Omega offers emergency medicine, cardiology, and other specialties, supported by convenient appointment booking and expert guidance at every stage of treatment.",
  },
  {
    name: "Dehradun",
    image: "/images/our-center.webp",
    heading: "Dehradun",
    subHeading: "World-class multidisciplinary cancer care",
    description:
      "Omega Hospitals Dehradun is a leading cancer care center delivering world-class treatment through a multidisciplinary approach. The centre offers minimally invasive surgeries, targeted therapies, immunotherapy, chemotherapy, and advanced radiation oncology, with a strong focus on early diagnosis and personalized care. Supporting government schemes such as CGHS, SGHS, and Ayushman Bharat, Omega also provides expert second opinions, consultations, laboratory testing, and imaging services. Open 24/7, the hospital is recognized for its commitment to early cancer detection, research, and comprehensive patient support.",
  },
  {
    name: "Karimnagar",
    image: "/images/our-center.webp",
    heading: "Karimnagar",
    subHeading: "Precision-based cancer care with holistic support",
    description:
      "Omega Hospitals in Karimnagar delivers expert cancer treatment with a strong focus on early detection and precision-based care. The centre offers comprehensive medical, surgical, and radiation oncology services within a multidisciplinary framework, ensuring holistic support from diagnosis through recovery. Patients benefit from personalized treatment plans, cashless medical insurance, ambulance services, and added care including counseling and nutritional assistance to support both emotional and physical well-being. Fully equipped to manage all types and stages of cancer, Omega Hospitals Karimnagar is committed to providing advanced, compassionate, and patient-centered oncology care.",
  },
  {
    name: "Jabalpur",
    image: "/images/our-center.webp",
    heading: "Jabalpur",
    subHeading: "Multispecialty cancer care close to home",
    description:
      "Omega Hospitals Jabalpur is a leading multispecialty cancer care facility delivering world-class treatment through a multidisciplinary approach spanning medical, surgical, and radiation oncology for children, adults, and elderly patients. The centre offers advanced diagnostics including radiology, pathology, and nuclear medicine, along with surgical oncology, chemotherapy, immunotherapy, and holistic care covering psychological, nutritional, and palliative support. Backed by modern infrastructure, a patient-first philosophy, 24/7 emergency services, and ambulance support, Omega Hospitals Jabalpur focuses on early detection, precise treatment, and compassionate care for every patient.",
  },
  {
    name: "Tirupati",
    image: "/images/our-center.webp",
    heading: "Tirupati",
    subHeading: "World-class oncology care close to home",
    description:
      "Omega Hospitals Tirupati is a premier cancer care hospital founded by Dr. Ch. Mohana Vamsy, delivering comprehensive medical, surgical, and radiation oncology supported by advanced diagnostics and personalized treatment plans. With centres of excellence in surgical oncology, medical oncology, radiation oncology, hematology & BMT, the centre provides compassionate, evidence-based care with a strong focus on early detection through screening and diagnostic services. Supporting thousands of admissions, surgeries, chemotherapies, and radiation treatments, Omega Hospitals Tirupati ensures coordinated patient care in a safe, supportive environment.",
  },
  {
    name: "Surat",
    image: "/images/our-center.webp",
    heading: "Surat",
    subHeading: "Surat",
    description:
      "Welcome to Omega Comprehensive Cancer Hospital, Surat, a 170-bed regional cancer centre that combines cutting-edge technology with compassionate care. Located in the heart of Surat, Omega has upgraded its infrastructure with AI-powered LINACs, advanced imaging technologies, and enhanced critical care services including ECMO to deliver precision radiotherapy. Our Cancer Unit brings together Surgical, Medical, and Radiation Oncology for unified patient-centred care. This includes minimally invasive surgeries (laparoscopic & robotic), personalized chemotherapy, immunotherapy, hormonal and targeted treatments, and advanced radiotherapy techniques like IMRT, IGRT, SRS, and SBRT. We believe in holistic care: diagnosis supported by world-class labs and imaging, perioperative support, nutritional & psychological counselling, physiotherapy & rehabilitation.",
  },
];

const OurCenters = () => {
  const [active, setActive] = useState<Center>(centers[0]);

  return (
    <section className="py-10 md:py-20">
      <div className="container">
        <h2 className="text-center text-accent text-[24px] font-bold mb-4">
          Our Centers
        </h2>

        <p className="text-center text-[16px] mb-8 md:max-w-[50%] w-full mx-auto">
          Set up in 2009 and present across 5 states, 10 cities & over 11
          centers, Omega Hospitals is the most trusted clinic chain in India
        </p>

        <div className="bg-[#F7FBFC] rounded-xl p-2 mb-4 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max">
            {centers.map((center) => (
              <button
                key={center.name}
                onClick={() => setActive(center)}
                className={`relative px-5 py-3 rounded-lg text-[16px] whitespace-nowrap ${
                  active.name === center.name
                    ? "bg-secondary text-white"
                    : "text-black"
                }`}
              >
                {center.name}

                {active.name === center.name && (
                  <span className="absolute right-5 -bottom-1.5 w-3 h-3 bg-secondary rotate-45" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
          <div>
            <Image
              src={active.image}
              alt={active.heading}
              width={800}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div>
            <h3 className="text-secondary text-[24px] font-medium mb-4">
              {active.heading}
            </h3>

            <p className="font-bold text-[16px] mb-4">{active.subHeading}</p>

            <p className="text-[15px] leading-relaxed mb-8">
              {active.description}
            </p>

            <div className="flex flex-col md:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-accent text-white text-[14px] px-6 py-3 rounded-lg">
                <CalendarDays size={20} />
                BOOK A CONSULTAION
              </button>

              <button className="flex items-center justify-center gap-2 bg-secondary text-white text-[14px] px-6 py-3 rounded-lg">
                <Phone size={20} />
                Call Us
              </button>

              <button className="flex items-center justify-center gap-2 border border-secondary text-secondary text-[14px] px-6 py-3 rounded-lg">
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
