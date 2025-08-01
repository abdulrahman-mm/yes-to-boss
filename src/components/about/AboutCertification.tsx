// import Image from "next/image";
// import React from "react";

// export const AboutCertification = () => {
//   return (
//     <section className="bg-white min-h-screen p-16 general-sans">
//       <p className="border rounded-3xl px-4 py-2 w-fit border-[#EBEBEB] font-medium text-sm">
//         Certifications
//       </p>

//       <div className="flex justify-between gap-10">
//         <p className="font-medium text-5xl w-1/2">
//           Certified Excellence, Trusted Expertise, Proven Financial Integrity
//         </p>

//         <p className="font-normal text-sm w-1/5">
//           Our credentials reflect our commitment to quality, compliance, and
//           client trust.
//         </p>
//       </div>

//       <div className="flex gap-6 mt-14">
//         <div className="bg-black rounded-3xl p-6 text-white">
//           <Image
//             src={"./icons/dummy-logo1.svg"}
//             width={80}
//             height={80}
//             alt="a"
//           />

//           <p className="font-medium text-2xl mt-12">
//             Certified Public Accountant 
//           </p>
//           <p className="font-medium text-2xl ">(CPA)</p>
//           <p className="font-normal text-sm mt-2">
//             Awarded to professionals who meet high standards in education,
//             experience, and ethics—ensuring expert-level financial and tax
//             services.
//           </p>
//         </div>

//         <div className="bg-gradient-to-b from-[#FFFFFF] to-[#E0F1F9] rounded-3xl p-6 text-black">
//           <Image
//             src={"./icons/dummy-logo2.svg"}
//             width={80}
//             height={80}
//             alt="a"
//           />

//           <p className="font-medium text-2xl mt-12">
//             Certified Public Accountant 
//           </p>
//           <p className="font-medium text-2xl ">(CPA)</p>
//           <p className="font-normal text-sm mt-2">
//             Awarded to professionals who meet high standards in education,
//             experience, and ethics—ensuring expert-level financial and tax
//             services.
//           </p>
//         </div>

//         <div className="bg-gradient-to-b from-[#FFFFFF] to-[#FF9B79] rounded-3xl p-6 text-black">
//           <Image
//             src={"./icons/dummy-logo2.svg"}
//             width={80}
//             height={80}
//             alt="a"
//           />

//           <p className="font-medium text-2xl mt-12">
//             Certified Public Accountant
//           </p>
//           <p className="font-medium text-2xl "> (CPA)</p>
//           <p className="font-normal text-sm mt-2">
//             Awarded to professionals who meet high standards in education,
//             experience, and ethics—ensuring expert-level financial and tax
//             services.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };






















// "use client";

// import Image from "next/image";
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export const AboutCertification = () => {
//   const titleRef = useRef<HTMLParagraphElement>(null);
//   const headingRef = useRef<HTMLParagraphElement>(null);
//   const descRef = useRef<HTMLParagraphElement>(null);
//   const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     // Skew animation for heading
//     if (headingRef.current) {
//       gsap.from(headingRef.current, {
//         scrollTrigger: {
//           trigger: headingRef.current,
//           start: "top 80%",
//         },
//         y: 100,
//         skewY: 10,
//         opacity: 0,
//         duration: 1,
//         ease: "power3.out",
//       });
//     }

//     // Subtitle fade in
//     if (descRef.current) {
//       gsap.from(descRef.current, {
//         scrollTrigger: {
//           trigger: descRef.current,
//           start: "top 85%",
//         },
//         x: 50,
//         opacity: 0,
//         duration: 1,
//         delay: 0.3,
//         ease: "power2.out",
//       });
//     }

//     // Top label
//     if (titleRef.current) {
//       gsap.from(titleRef.current, {
//         scrollTrigger: {
//           trigger: titleRef.current,
//           start: "top 90%",
//         },
//         opacity: 0,
//         scale: 0.8,
//         duration: 0.8,
//         ease: "back.out(1.7)",
//       });
//     }

//     // Cards animation
//     gsap.from(cardsRef.current, {
//       scrollTrigger: {
//         trigger: cardsRef.current[0],
//         start: "top 85%",
//       },
//       opacity: 0,
//       y: 40,
//       scale: 0.95,
//       stagger: 0.2,
//       duration: 1,
//       ease: "power2.out",
//     });
//   }, []);

//   return (
//     <section className="bg-white min-h-screen p-16 general-sans">
//       <p
//         ref={titleRef}
//         className="border rounded-3xl px-4 py-2 w-fit border-[#EBEBEB] font-medium text-sm"
//       >
//         Certifications
//       </p>

//       <div className="flex justify-between gap-10 mt-5">
//         <p
//           ref={headingRef}
//           className="font-medium text-5xl w-1/2 leading-tight"
//         >
//           Certified Excellence, Trusted Expertise, Proven Financial Integrity
//         </p>

//         <p ref={descRef} className="font-normal text-sm w-1/5 text-gray-600">
//           Our credentials reflect our commitment to quality, compliance, and
//           client trust.
//         </p>
//       </div>

//       <div className="flex gap-6 mt-14 flex-wrap">
//         <div
//           ref={(el) => {cardsRef.current[0] = el}}
//           className="bg-black rounded-3xl p-6 text-white w-[20%]"
//         >
//           <Image
//             src={"/icons/dummy-logo1.svg"}
//             width={80}
//             height={80}
//             alt="a"
//           />
//           <p className="font-medium text-2xl mt-12">
//             Certified Public Accountant
//           </p>
//           <p className="font-medium text-2xl ">(CPA)</p>
//           <p className="font-normal text-sm mt-2 text-white/80">
//             Awarded to professionals who meet high standards in education,
//             experience, and ethics—ensuring expert-level financial and tax
//             services.
//           </p>
//         </div>

//         <div
//           ref={(el) => {cardsRef.current[1] = el}}
//           className="bg-gradient-to-b from-[#FFFFFF] to-[#E0F1F9] rounded-3xl p-6 text-black w-[30%] min-w-[280px]"
//         >
//           <Image
//             src={"/icons/dummy-logo2.svg"}
//             width={80}
//             height={80}
//             alt="a"
//           />
//           <p className="font-medium text-2xl mt-12">
//             Chartered Financial Analyst
//           </p>
//           <p className="font-medium text-2xl ">(CFA)</p>
//           <p className="font-normal text-sm mt-2">
//             Globally recognized certification for finance and investment
//             professionals, ensuring credibility in financial analysis and
//             management.
//           </p>
//         </div>

//         <div
//           ref={(el) => {cardsRef.current[2] = el}}
//           className="bg-gradient-to-b from-[#FFFFFF] to-[#FF9B79] rounded-3xl p-6 text-black w-[30%] min-w-[280px]"
//         >
//           <Image
//             src={"/icons/dummy-logo2.svg"}
//             width={80}
//             height={80}
//             alt="a"
//           />
//           <p className="font-medium text-2xl mt-12">
//             Certified Management Accountant
//           </p>
//           <p className="font-medium text-2xl ">(CMA)</p>
//           <p className="font-normal text-sm mt-2">
//             Recognized for advanced financial management and strategic
//             decision-making skills critical for success in corporate finance.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

















"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const AboutCertification = () => {
  const titleRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // useEffect(() => {
  //   requestAnimationFrame(() => {
  //     // Skew animation for heading
  //     if (headingRef.current) {
  //       gsap.from(headingRef.current, {
  //         scrollTrigger: {
  //           trigger: headingRef.current,
  //           start: "top 80%",
  //           once: true,
  //         },
  //         y: 100,
  //         skewY: 10,
  //         opacity: 0,
  //         duration: 1,
  //         ease: "power3.out",
  //       });
  //     }

  //     // Subtitle fade in
  //     if (descRef.current) {
  //       gsap.from(descRef.current, {
  //         scrollTrigger: {
  //           trigger: descRef.current,
  //           start: "top 85%",
  //           once: true,
  //         },
  //         x: 50,
  //         opacity: 0,
  //         duration: 1,
  //         delay: 0.3,
  //         ease: "power2.out",
  //       });
  //     }

  //     // Top label
  //     if (titleRef.current) {
  //       gsap.from(titleRef.current, {
  //         scrollTrigger: {
  //           trigger: titleRef.current,
  //           start: "top 90%",
  //           once: true,
  //         },
  //         opacity: 0,
  //         scale: 0.8,
  //         duration: 0.8,
  //         ease: "back.out(1.7)",
  //       });
  //     }

  //     // Cards animation using batch for better perf
  //     ScrollTrigger.batch(cardsRef.current, {
  //       onEnter: (batch) => {
  //         gsap.from(batch, {
  //           opacity: 0,
  //           y: 40,
  //           scale: 0.95,
  //           stagger: 0.2,
  //           duration: 1,
  //           ease: "power2.out",
  //         });
  //       },
  //       start: "top 85%",
  //       once: true,
  //     });
  //   });
  // }, []);


  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.from(headingRef.current, {
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            once: true,
          },
          y: 100,
          skewY: 10,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      }
  
      if (descRef.current) {
        gsap.from(descRef.current, {
          scrollTrigger: {
            trigger: descRef.current,
            start: "top 85%",
            once: true,
          },
          x: 50,
          opacity: 0,
          duration: 1,
          delay: 0.3,
          ease: "power2.out",
        });
      }
  
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 90%",
            once: true,
          },
          opacity: 0,
          scale: 0.8,
          duration: 0.8,
          ease: "back.out(1.7)",
        });
      }
  
      ScrollTrigger.batch(cardsRef.current, {
        onEnter: (batch) => {
          gsap.from(batch, {
            opacity: 0,
            y: 40,
            scale: 0.95,
            stagger: 0.2,
            duration: 1,
            ease: "power2.out",
          });
        },
        start: "top 85%",
        once: true,
      });
    });
  
    return () => ctx.revert();
  }, []);
  
  return (
    <section className="bg-white min-h-screen p-16 general-sans">
      <p
        ref={titleRef}
        className="border rounded-3xl px-4 py-2 w-fit border-[#EBEBEB] font-medium text-sm"
      >
        Our Values
      </p>

      <div className="flex justify-between gap-10 mt-5 flex-wrap">
        <p
          ref={headingRef}
          className="font-medium text-5xl w-full md:w-1/2 leading-tight"
        >
        Do it right. Do it well. Do it with purpose.

        </p>

        <p
          ref={descRef}
          className="font-normal text-sm w-full md:w-1/5 text-gray-600 mt-4 md:mt-0"
        >
          At YesToBoss, our values are more than principles; they’re our daily practice.

        </p>
      </div>

      <div className="flex gap-6 mt-14 flex-wrap">
        <div
          ref={(el) => {cardsRef.current[0] = el}}
          className="bg-gradient-to-b from-[#212121] to-[#070707] flex-grow rounded-3xl p-6 text-white w-[20%]"
        >
          {/* <Image
            src={"/icons/dummy-logo1.svg"}
            width={80}
            height={80}
            alt="a"
          /> */}
          <p className="font-medium text-2xl mt-12">
          Integrity 
          </p>
          {/* <p className="font-medium text-2xl ">(CPA)</p> */}
          <p className="font-normal text-sm mt-2 text-white/80">
          We follow ethical practices in everything we do
          </p>
        </div>

        <div
          ref={(el) => {cardsRef.current[1] = el}}
          className="bg-gradient-to-b from-[#FFFFFF] flex-grow to-[#E0F1F9] rounded-3xl p-6 text-black w-[20%]"
        >
          {/* <Image
            src={"/icons/dummy-logo2.svg"}
            width={80}
            height={80}
            alt="a"
          /> */}
          <p className="font-medium text-2xl mt-12">
          Accuracy 
          </p>
          {/* <p className="font-medium text-2xl ">(CFA)</p> */}
          <p className="font-normal text-sm mt-2">
          Every document is reviewed for precision.
          </p>
        </div>

        <div
          ref={(el) => {cardsRef.current[2] = el}}
          className="bg-gradient-to-b flex-grow from-[#FFFFFF] to-[#FF9B79] rounded-3xl p-6 text-black w-[20%]"
        >
          {/* <Image
            src={"/icons/dummy-logo2.svg"}
            width={80}
            height={80}
            alt="a"
          /> */}
          <p className="font-medium text-2xl mt-12">
          Confidentiality 
          </p>
          {/* <p className="font-medium text-2xl ">(CMA)</p> */}
          <p className="font-normal text-sm mt-2">
          We treat your data with complete privacy.

          </p>
        </div>

        <div
          ref={(el) => {cardsRef.current[3] = el}}
          className="bg-gradient-to-b flex-grow from-[#FFFFFF] to-[#FF9B79] rounded-3xl p-6 text-black w-[20%]"
        >
          {/* <Image
            src={"/icons/dummy-logo2.svg"}
            width={80}
            height={80}
            alt="a"
          /> */}
          <p className="font-medium text-2xl mt-12">
          Commitment 
          </p>
          {/* <p className="font-medium text-2xl ">(CMA)</p> */}
          <p className="font-normal text-sm mt-2">
          We deliver what we promise, always on time

          </p>
        </div>
      </div>
    </section>
  );
};
