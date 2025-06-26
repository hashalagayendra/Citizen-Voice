import React from "react";
import step1 from "@/assests/step1.png";
import step2 from "@/assests/step2.png";
import step3 from "@/assests/step3.png";
const steps = [
  {
    title: "Report",
    description: "Fill the complaint form and upload supporting photos",
    img: step1.src,
  },
  {
    title: "Track",
    description: "Get SMS and email updates about your complaint",
    img: step2.src,
  },
  {
    title: "Resolve",
    description: "Authorities take action and update you on resolution",
    img: step3.src,
  },
];

export default function HowItsWork() {
  return (
    <section className="bg-[#0A3970] text-white py-10">
      <div className="text-center mb-8">
        <h2 className="font-bold text-2xl md:text-3xl mb-2">How it works</h2>
        <p className="text-base text-[#c7d6ee]">
          our streamlined process makes it easy to report issues and track their
          resolution
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 md:gap-8">
        {steps.map((step, idx) => (
          <div
            key={step.title}
            className="relative bg-[#09305e] rounded-xl p-6  w-xs md:w-72  shadow-md text-left border border-[#1a4a8a] mb-8"
          >
            <div className="absolute -top-4 -left-2 bg-white text-[#0A3970] rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg border-4 border-[#f5c242] z-10">
              {idx + 1}
            </div>
            <img
              src={step.img}
              alt={step.title}
              className="w-full h-28 object-cover rounded-md mb-4 mt-4"
            />
            <h3 className="font-bold text-lg mb-2">{step.title}</h3>
            <p className="text-[#c7d6ee] text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
