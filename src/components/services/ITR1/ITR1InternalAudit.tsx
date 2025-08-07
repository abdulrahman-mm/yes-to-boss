// import React from "react";

// export const ITR1InternalAudit = () => {
//   return (
//     <section className="bg-white">

//      <div className="bg-gradient-to-b from-[#212121] rounded-b-[60px]  to-[#070707]  min-h-screen p-16">

//       <div className="flex flex-col font-Bricolage_Grotesque text-white gap-5 justify-center items-center ">
//         <p className=" text-sm">What is Internal Audit</p>
//         <p className=" text-5xl">Why File ITR-1 Sahaj?</p>
//         <p className="text-sm">
//           Filing ITR-1 (Sahaj) is not just a legal obligation—it also offers
//           practical financial benefits:
//         </p>
//       </div>

//       <div className="grid grid-cols-3 gap-5 mt-12 ">
//         <div className="bg-[#1f1f21] text-white  p-5 rounded-lg font-Bricolage_Grotesque">
//           <div className="h-12 w-12 bg-gray-500 rounded"></div>

//           <p className=" text-2xl font-normal mt-16">Mandatory Compliance</p>
//           <p className="text-sm font-normal mt-4">
//              If your total income exceeds the basic exemption limit, filing is
//             required under Section 139(1) of the Income Tax Act.
//           </p>
//         </div>

//         <div className="bg-[#1f1f21] text-white  p-5 rounded-lg font-Bricolage_Grotesque">
//           <div className="h-12 w-12 bg-gray-500 rounded"></div>

//           <p className=" text-2xl font-normal mt-16">Mandatory Compliance</p>
//           <p className="text-sm font-normal mt-4">
//              If your total income exceeds the basic exemption limit, filing is
//             required under Section 139(1) of the Income Tax Act.
//           </p>
//         </div>

//         <div className="bg-[#1f1f21] text-white  p-5 rounded-lg font-Bricolage_Grotesque">
//           <div className="h-12 w-12 bg-gray-500 rounded"></div>

//           <p className=" text-2xl font-normal mt-16">Mandatory Compliance</p>
//           <p className="text-sm font-normal mt-4">
//              If your total income exceeds the basic exemption limit, filing is
//             required under Section 139(1) of the Income Tax Act.
//           </p>
//         </div>

//         <div className="bg-[#1f1f21] text-white  p-5 rounded-lg font-Bricolage_Grotesque">
//           <div className="h-12 w-12 bg-gray-500 rounded"></div>

//           <p className=" text-2xl font-normal mt-16">Mandatory Compliance</p>
//           <p className="text-sm font-normal mt-4">
//              If your total income exceeds the basic exemption limit, filing is
//             required under Section 139(1) of the Income Tax Act.
//           </p>
//         </div>

//         <div className="bg-[#1f1f21] text-white  p-5 rounded-lg font-Bricolage_Grotesque">
//           <div className="h-12 w-12 bg-gray-500 rounded"></div>

//           <p className=" text-2xl font-normal mt-16">Mandatory Compliance</p>
//           <p className="text-sm font-normal mt-4">
//              If your total income exceeds the basic exemption limit, filing is
//             required under Section 139(1) of the Income Tax Act.
//           </p>
//         </div>

//         <div className="bg-[#1f1f21] text-white  p-5 rounded-lg font-Bricolage_Grotesque">
//           <div className="h-12 w-12 bg-gray-500 rounded"></div>

//           <p className=" text-2xl font-normal mt-16">Mandatory Compliance</p>
//           <p className="text-sm font-normal mt-4">
//              If your total income exceeds the basic exemption limit, filing is
//             required under Section 139(1) of the Income Tax Act.
//           </p>
//         </div>

       
//       </div>
//      </div>

//     </section>
//   );
// };










"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ITR1InternalAudit = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ✅ Scroll-triggered heading animation
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none none", // play only once
          },
        }
      );

      // ✅ Cards animation with timeline and scroll trigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
          // lazy: true,
          
        },
      });

      tl.fromTo(
        cardsRef.current,
        { opacity: 0, y: 40, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "power2.out",
          duration: 0.8,
          stagger: 0.15,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const cardData = [
    {
      title: "Mandatory Compliance",
      desc: "If your total income exceeds the basic exemption limit, filing is required under Section 139(1) of the Income Tax Act.",
    },
    {
      title: "Claim Refunds",
      desc: "Filing is necessary to claim refunds for TDS deducted or advance taxes paid.",
    },
    {
      title: "Avoid Penalties",
      desc: "Filing on time helps avoid penalties and interest under Sections 234F and 234A.",
    },
    {
      title: "Loan Processing",
      desc: "ITR is often required when applying for loans, credit cards, or visas.",
    },
    {
      title: "Financial Proof",
      desc: "ITR acts as a strong financial proof for various official and financial dealings.",
    },
    {
      title: "Carry Forward Losses",
      desc: "You can carry forward capital or business losses only if ITR is filed before the deadline.",
    },
  ];

  async function test() {
    console.log("Start");
  
    await new Promise((reject) => setTimeout(reject, 2000)); // waits
  
    console.log("End after 2 seconds");
  }
  
  test();

  return (
    <section className="bg-white" ref={sectionRef}>
      <div className="bg-gradient-to-b from-[#212121] to-[#070707] rounded-b-[60px] min-h-screen p-16">
        <div
          className="flex flex-col font-Bricolage_Grotesque text-white gap-5 justify-center items-center text-center"
          ref={headingRef}
        >
          <p className="text-sm">What is Internal Audit</p>
          <p className="text-5xl">Why File ITR-1 Sahaj?</p>
          <p className="text-sm max-w-2xl">
            Filing ITR-1 (Sahaj) is not just a legal obligation—it also offers
            practical financial benefits:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {cardData.map((card, index) => (
            <div
              key={index}
              ref={(el) => {cardsRef.current[index] = el!}}
              className="bg-[#1f1f21] text-white p-6 rounded-xl font-Bricolage_Grotesque shadow-lg transform transition duration-300 hover:scale-[1.03] will-change-transform"
            >
              <div className="h-12 w-12 bg-gradient-to-r from-gray-600 to-gray-400 rounded mb-6"></div>
              <p className="text-2xl font-normal">{card.title}</p>
              <p className="text-sm font-normal mt-4">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

