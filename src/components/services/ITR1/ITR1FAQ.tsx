// import React from "react";
// import { PiArrowCircleUpRightFill } from "react-icons/pi";

// const ITR1FAQ = () => {
//   return (
//     <section className="bg-gradient-to-b min-h-screen text-white from-[#212121] to-[#070707] general-sans  p-5 sm:p-8 md:p-10 lg:p-14 xl:p-16">
//       <div className="flex justify-center">
//         <p className="px-10 py-2 border rounded-full w-fit font-medium text-sm">
//           FaQ
//         </p>
//       </div>

//       <div className="flex justify-center mt-5">
//         <p className="font-medium text-5xl w-1/2 text-center">
//           Got Questions? We’ve Got Clear Answers
//         </p>
//       </div>

//       <p className="text-center mt-5 text-sm ">
//         Find quick, reliable answers to your most common questions here
//       </p>

//       <div className="flex flex-col gap-8 mt-8">

// {Array(5).fill('').map(item=>
//           <div className="flex justify-between items-center border border-white/50 rounded-2xl bg-gradient-to-r from-[#37373726] via-[#FFFFFF26] to-[#3D3D3D26] px-5 py-4">
//                <p className="text-2xl font-medium">What services does your accounting firm offer?</p>
//                <img src="/icons/FAQUpArrow.svg" alt="" className=""/>
//           </div>
//           )}

//       </div>
//     </section>
//   );
// };

// export default ITR1FAQ;

"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PiArrowCircleUpRightFill } from "react-icons/pi";
gsap.registerPlugin(ScrollTrigger);

const FaqData = [
  {
    label: "Is E-Filing Mandatory for ITR-1?",
    value:
      "If your income is less than ₹5 lakh, you can e-file voluntarily. However, e-filing becomes mandatory once your income exceeds ₹2,50,000. For individuals and HUFs earning above ₹5 lakh, returns must be filed online as paper submissions are not permitted.",
  },
  {
    label: "Can I use ITR-1 Sahaj if I own more than one house property?",
    value:
      "No, ITR-1 can only be used by individuals who own a single house property. If you own more than one house, whether rented or vacant, you are required to file ITR-2 instead.",
  },
  {
    label: " Is ITR-1 the correct form if I have capital gains income?",
    value:
      "You cannot use ITR-1 if you have income from capital gains, whether short-term or long-term. In such cases, ITR-2 is the appropriate form for filing your return.",
  },
  {
    label: "Are Non-Resident Indians (NRIs) allowed to file ITR-1 Sahaj?",
    value:
      " NRIs are not permitted to file ITR-1 Sahaj. This form is strictly for individuals who are residents of India for income tax purposes during the financial year.",
  },
  {
    label: "Does ITR-1 require any documents or annexures to be attached?",
    value:
      "No, you don’t need to attach any documents with ITR-1, but keep records like Form 16 and interest statements for reference.",
  },

];

const ITR1FAQ = () => {
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
    <section className="bg-gradient-to-b min-h-screen text-white from-[#212121] to-[#070707] general-sans p-5 sm:p-8 md:p-10 lg:p-14 xl:p-16">
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
        
        {FaqData.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) faqRefs.current[index] = el;
              }}
              className="border border-white/50 rounded-2xl bg-gradient-to-r from-[#37373726] via-[#FFFFFF26] to-[#3D3D3D26] px-6 py-5 will-change-transform transition-all duration-300"
            >
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleFAQ(index)}
              >
                <p className="text-lg md:text-2xl font-medium">
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
                className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 opacity-100 mt-3"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm md:text-base text-gray-300">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default ITR1FAQ;
