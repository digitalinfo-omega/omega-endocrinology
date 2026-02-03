"use client";

import RequestForm from "../helpers/RequestForm";

const RequestCallbackSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-10 md:py-16"
      style={{ backgroundImage: "url(/images/ask-Question.webp)" }}
    >
      <div className="absolute inset-0 bg-white/40 md:hidden" />

      <div className="container relative">
        <div className="flex items-center min-h-[420px] md:justify-end">
          <div className="w-full md:max-w-[520px] bg-white/80 backdrop-blur rounded-2xl p-6 md:p-8">
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
      </div>
    </section>
  );
};

export default RequestCallbackSection;
