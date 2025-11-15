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

// 'use client';
// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// export const ITR1WhyYouChooseUs = () => {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const reasonRefs = useRef<HTMLDivElement[]>([]);

//   // Clear refs before each render
//   reasonRefs.current = [];

//   // Function to collect card refs
//   const addToRefs = (el: HTMLDivElement | null) => {
//     if (el && !reasonRefs.current.includes(el)) {
//       reasonRefs.current.push(el);
//     }
//   };

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Title animation
//       gsap.from(titleRef.current, {
//         opacity: 0,
//         y: 60,
//         duration: 1,
//         ease: 'power3.out',
//         scrollTrigger: {
//           trigger: titleRef.current,
//           start: 'top 80%',
//         },
//       });

//       // Cards animation
//       reasonRefs.current.forEach((el, i) => {
//         gsap.from(el, {
//           opacity: 0,
//           y: 40,
//           duration: 1,
//           delay: i * 0.2,
//           ease: 'power3.out',
//           scrollTrigger: {
//             trigger: el,
//             start: 'top 100%',
//           },
//         });
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="min-h-screen text-white p-16 general-sans bg-gradient-to-b from-[#212121] to-[#070707]"
//     >
//       <div className="w-fit mb-4">
//         <p className="text-xs w-fit">Why Choose Us</p>
//         <img src="/icons/right-arrow.svg" alt="Arrow" />
//       </div>

//       <div
//         ref={titleRef}
//         className="flex justify-between items-center gap-16 mt-5"
//       >
//         <p className="w-2/5 font-medium text-5xl leading-tight">
//           Compelling Reasons Why You Might Choose
//         </p>
//         <p className="w-2/5 text-xs leading-6 text-gray-300">
//           It is a long established fact that a reader will be distracted by the
//           readable content of a page when looking at its layout.
//         </p>
//       </div>

//       <div className="flex justify-between items-start gap-32 mt-12">
//         <div className="flex flex-col gap-5 w-2/5">
//           {[
//             'Track Your Payment Method',
//             'Secure Data Encryption',
//             'Expert Support Team',
//             'Fast & Easy Filing Process',
//           ].map((title, index) => (
//             <div
//               key={index}
//               ref={addToRefs}
//               className="flex gap-3 group p-5 hover:bg-white rounded-xl hover:text-black transition duration-300 ease-in-out"
//             >
//               <img src="/icons/tick-white-icon.svg" alt="Tick Icon" />
//               <div className="flex flex-col gap-2">
//                 <p className="font-medium text-lg">{title}</p>
//                 <p className="text-xs leading-4 text-gray-300 group-hover:text-black">
//                   It is a long established fact that a reader will be distracted
//                   by the readable content of a page.
//                 </p>
//               </div>
//             </div>
//           ))}

//           <div className="flex gap-5 p-5">
//             <p className="text-lg">Let’s Chat & Talk Us</p>
//             <button className="bg-white text-black rounded-4xl px-5 py-1 font-medium text-xs">
//               Contact Us
//             </button>
//           </div>
//         </div>

//         <div className="w-96 h-[400px] flex-grow bg-gray-300 rounded-3xl shadow-2xl"></div>
//       </div>
//     </section>
//   );
// };

/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { serviceListTypes } from "@/types";

type ServiceSectionWhyChooseUsProps = {
  WhyChooseUsData: serviceListTypes;
};

const ServiceWhyChooseUs: React.FC<ServiceSectionWhyChooseUsProps> = ({
  WhyChooseUsData,
}) => {
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
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      });

      // Cards animation
      reasonRefs.current.forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 1,
          delay: i * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 100%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current) {
      gsap.to(imgRef.current, {
        y: 100, // move down while scrolling
        ease: "none",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top bottom", // when image enters viewport
          end: "bottom top",   // until it leaves
          scrub: true,         // smooth scrubbing
        },
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      // className=" text-white px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 general-sans bg-gradient-to-b from-[#212121] to-[#070707]"

    className="general-sans g-gradient-to-b from-[#212121] to-[#070707] text-white px-4 py-4 sm:px-8 sm:py-7 md:px-10 md:py-8 lg:px-14 lg:py-10 xl:px-16">
    
      {/* Top label */}
      <div className="w-fit mb-4 flex items-center gap-2">
        <p className="text-xs sm:text-sm w-fit">{WhyChooseUsData.heading}</p>
        <img src="/icons/right-arrow.svg" alt="Arrow" className="w-3 sm:w-4" />
      </div>

      {/* Title & Description */}
      <div
        ref={titleRef}
        className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-16 mt-5"
      >
        <p className="w-full lg:w-2/5 font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug lg:leading-tight">
          Compelling Reasons Why You Might Choose
        </p>
        <p className="w-full lg:w-2/5 text-xs sm:text-sm md:text-base leading-5 sm:leading-6 text-gray-300">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>

      {/* Reasons + Image */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-32 mt-8 md:mt-12">
        {/* Left side: reasons */}
        <div className="flex flex-col gap-5 w-full lg:w-2/5">
          {WhyChooseUsData.bulletPoints?.map((title, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="flex gap-3 group   rounded-xl transition duration-300 ease-in-out"
            >
              <img
                src="/icons/tick-white-icon.svg"
                alt="Tick Icon"
                className="w-4 sm:w-5"
              />
              <p className="text-sm sm:text-base md:text-lg">
                {/* {title} */}
                {typeof title === "string" ? title : title.text}
              </p>
            </div>
          ))}

          <div
            ref={addToRefs}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 py-4 sm:py-5"
          >
            <p className="text-base  bg-white rounded-4xl text-black px-4 py-2">Let’s Connect</p>

            {/* <Link href="/contact" className="">
              <button className="bg-white hover:bg-gray-600 text-black hover:text-white transition-all duration-300 cursor-pointer rounded-3xl px-4 sm:px-5 py-1 font-medium text-xs sm:text-sm">
                Contact Us
              </button>
            </Link> */}
          </div>
        </div>

        {/* Right side: image */}
        <div className="w-full lg:w-96 h-52 sm:h-64 md:h-80 lg:h-[400px] flex-grow rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
      <img
        ref={imgRef}
        src="/images/gst-what-you-get.png"
        alt="GST Parallax"
        className="w-full h-full object-cover rounded-3xl"
      />
    </div>
      </div>
    </section>
  );
};

export default ServiceWhyChooseUs;
