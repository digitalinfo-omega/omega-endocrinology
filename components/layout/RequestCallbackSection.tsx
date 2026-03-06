"use client";

import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import RequestForm from "../helpers/RequestForm";

const RequestCallbackSection = () => {
  return (
    <section className="bg-white py-10 px-5 md:px-9 md:py-20">
      <div className="rounded-2xl p-4 md:p-8 grid md:grid-cols-3 gap-6 items-stretch border border-gray-300">
        <div className="flex flex-col justify-between h-full md:ml-10 ml-0 md:items-start items-center md:gap-0 gap-5">
          <div>
            <p className="text-accent font-semibold mb-2 md:text-start text-center">
              • Appointments:
            </p>
            <p className="text-black md:text-start text-center">040 25552555</p>
          </div>

          <div>
            <p className="text-accent font-semibold mb-2 md:text-start text-center">
              • Emergency (24/7):
            </p>
            <p className="text-black md:text-start text-center">98490 22121</p>
          </div>

          <div>
            <p className="text-accent font-semibold md:text-start text-center">
              • Email:
            </p>
            <p className="text-black">info@omegahospital.com</p>
          </div>

          <div>
            <div className="flex items-center gap-3 md:flex-row flex-col">
              <span className="font-semibold text-accent">Social Media :</span>

              <div className="flex gap-3 text-white">
                <div className="bg-accent p-2 rounded-full">
                  <Facebook size={14} />
                </div>
                <div className="bg-accent p-2 rounded-full">
                  <Instagram size={14} />
                </div>
                <div className="bg-accent p-2 rounded-full">
                  <Linkedin size={14} />
                </div>
                <div className="bg-accent p-2 rounded-full">
                  <Youtube size={14} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative w-70 md:h-full h-70 md:w-full  rounded-xl">
            <Image
              src="/images/callback.jpg"
              alt="Doctor"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>

        <div className="bg-white md:bg-white/80 md:backdrop-blur rounded-2xl p-4 md:p-6">
          <h2 className="text-center text-accent text-[18px] font-bold mb-3">
            Request a Call Back Today
          </h2>

          <p className="text-center text-black text-[16px] mb-6">
            Fill in your details and out team will get in touch with you
            shortly.
          </p>

          <RequestForm />
        </div>
      </div>
    </section>
  );
};

export default RequestCallbackSection;
