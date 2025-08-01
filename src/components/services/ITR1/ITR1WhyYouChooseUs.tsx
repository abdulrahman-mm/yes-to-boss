// import React from "react";

// export const ITR1WhyYouChooseUs = () => {
//   return (
//     <section className="min-h-screen text-white p-16 general-sans bg-gradient-to-b from-[#212121] to-[#070707]">
//       <div className="w-fit">
//         <p className="text-xs w-fit">Why Choose Us</p>
//         <img src="/icons/right-arrow.svg" alt="" />
//       </div>

//       <div className="flex justify-between items-center gap-16 mt-5">
//         <p className="w-2/5 font-medium text-5xl">
//           Compelling Reasons Why You Might Choose
//         </p>
//         <p className="w-2/5 text-xs leading-6">
//           It is a long established fact that a reader will be distracted by the
//           readable content of a page when looking at its layout. It is a long
//           established fact that a reader will be distracted
//         </p>
//       </div>

//       <div className="flex justify-between items-center gap-32 mt-8">
//         <div className="flex flex-col gap-5 w-2/5">
//           <div className="flex gap-3 group p-5 hover:bg-white rounded-xl hover:text-black">
//             <img src="/icons/tick-white-icon.svg" alt="Tick Icon" />

//             <div className="flex flex-col gap-2">
//               <p className="font-medium text-lg">Track Your Payment Method</p>
//               <p className="text-xs leading-4">
//                 It is a long established fact that a reader will be distracted
//                 by the readable content of a page when looking{" "}
//               </p>
//             </div>
//           </div>

//           <div className="flex gap-3 group p-5 hover:bg-white rounded-xl hover:text-black">
//             <img src="/icons/tick-white-icon.svg" alt="Tick Icon" />

//             <div className="flex flex-col gap-2">
//               <p className="font-medium text-lg">Track Your Payment Method</p>
//               <p className="text-xs leading-4">
//                 It is a long established fact that a reader will be distracted
//                 by the readable content of a page when looking{" "}
//               </p>
//             </div>
//           </div>

//           <div className="flex gap-3 group p-5 hover:bg-white rounded-xl hover:text-black">
//             <img src="/icons/tick-white-icon.svg" alt="Tick Icon" />

//             <div className="flex flex-col gap-2">
//               <p className="font-medium text-lg">Track Your Payment Method</p>
//               <p className="text-xs leading-4">
//                 It is a long established fact that a reader will be distracted
//                 by the readable content of a page when looking{" "}
//               </p>
//             </div>
//           </div>

//           <div className="flex gap-3 group p-5 hover:bg-white rounded-xl hover:text-black">
//             <img src="/icons/tick-white-icon.svg" alt="Tick Icon" />

//             <div className="flex flex-col gap-2">
//               <p className="font-medium text-lg">Track Your Payment Method</p>
//               <p className="text-xs leading-4">
//                 It is a long established fact that a reader will be distracted
//                 by the readable content of a page when looking{" "}
//               </p>
//             </div>
//           </div>

//           <div className="flex gap-5 p-5">
//             <p className=" text-lg">Let’s Chat & Talk Us</p>
//             <button className="bg-white text-black rounded-4xl px-5  font-medium text-xs">
//               Contact Us
//             </button>
//           </div>
//         </div>

//         <div className="w-96 h-[400px]  flex-grow bg-gray-300"></div>
//       </div>
//     </section>
//   );
// };




















'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ITR1WhyYouChooseUs = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const reasonRefs = useRef<HTMLDivElement[]>([]);

  // Clear refs before each render
  reasonRefs.current = [];

  // Function to collect card refs
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !reasonRefs.current.includes(el)) {
      reasonRefs.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        },
      });

      // Cards animation
      reasonRefs.current.forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 1,
          delay: i * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 100%',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen text-white p-16 general-sans bg-gradient-to-b from-[#212121] to-[#070707]"
    >
      <div className="w-fit mb-4">
        <p className="text-xs w-fit">Why Choose Us</p>
        <img src="/icons/right-arrow.svg" alt="Arrow" />
      </div>

      <div
        ref={titleRef}
        className="flex justify-between items-center gap-16 mt-5"
      >
        <p className="w-2/5 font-medium text-5xl leading-tight">
          Compelling Reasons Why You Might Choose
        </p>
        <p className="w-2/5 text-xs leading-6 text-gray-300">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>

      <div className="flex justify-between items-start gap-32 mt-12">
        <div className="flex flex-col gap-5 w-2/5">
          {[
            'Track Your Payment Method',
            'Secure Data Encryption',
            'Expert Support Team',
            'Fast & Easy Filing Process',
          ].map((title, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="flex gap-3 group p-5 hover:bg-white rounded-xl hover:text-black transition duration-300 ease-in-out"
            >
              <img src="/icons/tick-white-icon.svg" alt="Tick Icon" />
              <div className="flex flex-col gap-2">
                <p className="font-medium text-lg">{title}</p>
                <p className="text-xs leading-4 text-gray-300 group-hover:text-black">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page.
                </p>
              </div>
            </div>
          ))}

          <div className="flex gap-5 p-5">
            <p className="text-lg">Let’s Chat & Talk Us</p>
            <button className="bg-white text-black rounded-4xl px-5 py-1 font-medium text-xs">
              Contact Us
            </button>
          </div>
        </div>

        <div className="w-96 h-[400px] flex-grow bg-gray-300 rounded-3xl shadow-2xl"></div>
      </div>
    </section>
  );
};

