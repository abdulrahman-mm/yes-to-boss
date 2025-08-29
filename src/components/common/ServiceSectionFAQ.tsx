"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PiArrowCircleUpRightFill } from "react-icons/pi";
gsap.registerPlugin(ScrollTrigger);
import { serviceFaqTypes } from "@/types";

type ServiceSectionFAQProps = {
  faqData: serviceFaqTypes[];
};

const ServiceSectionFAQ: React.FC<ServiceSectionFAQProps> = ({ faqData }) => {
  const faqRefs = useRef<HTMLDivElement[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(faqRefs.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: faqRefs.current[0],
          start: "top 90%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="bg-gradient-to-b min-h-screen text-white from-[#212121] to-[#070707] general-sans p-5 sm:p-8 md:p-10 lg:p-14 xl:p-16 ">
      {/* Header */}
      <div className="flex justify-center">
        <p className="px-10 py-2 border rounded-full w-fit font-medium text-sm">
          FaQ
        </p>
      </div>

      <div className="flex justify-center mt-5">
        <p className="font-medium text-4xl md:text-5xl w-full md:w-2/3 lg:w-1/2 text-center will-change-transform">
          Got Questions? We’ve Got Clear Answers
        </p>
      </div>

      <p className="text-center mt-5 text-sm opacity-80">
        Find quick, reliable answers to your most common questions here
      </p>

      {/* FAQ Items */}
      <div className="flex flex-col gap-6 mt-10">
        {faqData.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) faqRefs.current[index] = el;
            }}
            onClick={() => toggleFAQ(index)}
            className="border cursor-pointer  border-white/50 rounded-2xl bg-gradient-to-r from-[#37373726] via-[#FFFFFF26] to-[#3D3D3D26] px-6 py-5 will-change-transform transition-all duration-300"
          >
            <button className="flex justify-between items-center w-full text-left">
              <p className="text-lg md:text-2xl font-medium cursor-pointer">
                {item.label}
              </p>
              <PiArrowCircleUpRightFill
                className={`text-2xl transition-transform duration-300 ${
                  openIndex === index ? "rotate-45 text-green-400" : "rotate-0"
                }`}
              />
            </button>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index
                  ? "max-h-40 opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm md:text-base text-gray-300">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSectionFAQ;
