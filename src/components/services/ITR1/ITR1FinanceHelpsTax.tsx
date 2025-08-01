// import React from "react";

// export const ITR1FinanceHelpsTax = () => {

    
//   return (
//     <section className="min-h-screen general-sans bg-gradient-to-b p-16 from-[#212121] to-[#070707] text-white">
//       <div className="flex flex-col items-center">
//         <p className="text-xs w-fit">Finance Helps Tax</p>
//         <img src="/icons/right-arrow.svg" alt="" />
//       </div>

//       <div className="flex flex-col gap-7 items-center justify-center">
//         <p className="text-center mt-8 font-medium text-3xl">
//           Tax <span className="font-extrabold">Players</span> Encompass
//         </p>

//         <p className="w-2/5 text-center">
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industry's standard
//         </p>
//       </div>

//       <div className="grid grid-cols-3 gap-10 mt-10">
        
//         <div className="flex flex-col gap-6 hover:bg-gradient-to-r from-[#37373726] via-[#FFFFFF26] to-[#3D3D3D26] rounded-2xl p-5 transition-all duration-500">
//           <img src="/icons/itr1Icon1.svg" alt="" className="w-12 h-12" />
//           <hr />
//           <p className="text-2xl font-medium">Tax Preparation and Filing</p>
//           <p className="text-sm">
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry.{" "}
//           </p>
//           <p className="text-sm underline">Learn More</p>
//         </div>

//         <div className="flex flex-col gap-6 hover:bg-gradient-to-r from-[#37373726] via-[#FFFFFF26] to-[#3D3D3D26] rounded-2xl p-5 transition-all duration-500">
//           <img src="/icons/itr1Icon1.svg" alt="" className="w-12 h-12" />
//           <hr />
//           <p className="text-2xl font-medium">Tax Preparation and Filing</p>
//           <p className="text-sm">
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry.{" "}
//           </p>
//           <p className="text-sm underline">Learn More</p>
//         </div>

//         <div className="flex flex-col gap-6 hover:bg-gradient-to-r from-[#37373726] via-[#FFFFFF26] to-[#3D3D3D26] rounded-2xl p-5 transition-all duration-500">
//           <img src="/icons/itr1Icon1.svg" alt="" className="w-12 h-12" />
//           <hr />
//           <p className="text-2xl font-medium">Tax Preparation and Filing</p>
//           <p className="text-sm">
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry.{" "}
//           </p>
//           <p className="text-sm underline">Learn More</p>
//         </div>

//         <div className="flex flex-col gap-6 hover:bg-gradient-to-r from-[#37373726] via-[#FFFFFF26] to-[#3D3D3D26] rounded-2xl p-5 transition-all duration-500">
//           <img src="/icons/itr1Icon1.svg" alt="" className="w-12 h-12" />
//           <hr />
//           <p className="text-2xl font-medium">Tax Preparation and Filing</p>
//           <p className="text-sm">
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry.{" "}
//           </p>
//           <p className="text-sm underline">Learn More</p>
//         </div>

//         <div className="flex flex-col gap-6 hover:bg-gradient-to-r from-[#37373726] via-[#FFFFFF26] to-[#3D3D3D26] rounded-2xl p-5 transition-all duration-500">
//           <img src="/icons/itr1Icon1.svg" alt="" className="w-12 h-12" />
//           <hr />
//           <p className="text-2xl font-medium">Tax Preparation and Filing</p>
//           <p className="text-sm">
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry.{" "}
//           </p>
//           <p className="text-sm underline">Learn More</p>
//         </div>

//         <div className="flex flex-col gap-6 hover:bg-gradient-to-r from-[#37373726] via-[#FFFFFF26] to-[#3D3D3D26] rounded-2xl p-5 transition-all duration-500">
//           <img src="/icons/itr1Icon1.svg" alt="" className="w-12 h-12" />
//           <hr />
//           <p className="text-2xl font-medium">Tax Preparation and Filing</p>
//           <p className="text-sm">
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry.{" "}
//           </p>
//           <p className="text-sm underline">Learn More</p>
//         </div>
//       </div>
//     </section>
//   );
// };












"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ITR1FinanceHelpsTax = () => {
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const descRef = useRef(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        skewY: 5,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(subTitleRef.current, {
        opacity: 0,
        y: 40,
        skewY: 5,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(descRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.6,
        ease: "power3.out",
      });

      // Animate each card on scroll
      cardRefs.current.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 50,
          scale: 0.95,
          duration: 1,
          delay: i * 0.1,
          ease: "power3.out",
        });
      });
    });

    return () => ctx.revert(); // Clean up
  }, []);

  return (
    <section className="min-h-screen general-sans bg-gradient-to-b p-16 from-[#212121] to-[#070707] text-white">
      <div className="flex flex-col items-center">
        <p
          ref={titleRef}
          className="text-xs w-fit will-change-transform translate-z-0"
        >
          Finance Helps Tax
        </p>
        <img src="/icons/right-arrow.svg" alt="" />
      </div>

      <div className="flex flex-col gap-7 items-center justify-center">
        <p
          ref={subTitleRef}
          className="text-center mt-8 font-medium text-3xl will-change-transform translate-z-0"
        >
          Tax <span className="font-extrabold">Players</span> Encompass
        </p>

        <p
          ref={descRef}
          className="w-2/5 text-center will-change-transform translate-z-0"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard
        </p>
      </div>

      <div className="grid grid-cols-3 gap-10 mt-10">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            ref={(el) => {cardRefs.current[i] = el!}}
            className="flex flex-col gap-6 hover:bg-gradient-to-r from-[#37373726] via-[#FFFFFF26] to-[#3D3D3D26] rounded-2xl p-5 transition-all duration-500 will-change-transform translate-z-0"
          >
            <img src="/icons/itr1Icon1.svg" alt="" className="w-12 h-12" />
            <hr />
            <p className="text-2xl font-medium">Tax Preparation and Filing</p>
            <p className="text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p className="text-sm underline">Learn More</p>
          </div>
        ))}
      </div>
    </section>
  );
};
